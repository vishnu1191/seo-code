import 'dotenv/config';
import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import type { GenerateContentResponse } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

type ResolvedRegion = 'india' | 'international';
type RequestedRegion = 'auto' | ResolvedRegion;

interface ChatMessageInput {
  role: 'user' | 'model';
  text: string;
}

function getGenAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

/**
 * Resolves a single exclusive client region ('india' OR 'international').
 * Ensures the assistant ONLY quotes ONE currency/pricing tier per client.
 */
function resolveExclusiveRegion(
  requestedRegion: RequestedRegion,
  messages: ChatMessageInput[],
  timezone?: string
): ResolvedRegion {
  // Check latest user messages for explicit region/currency intent
  const recentUserText = messages
    .filter((m) => m.role === 'user')
    .slice(-2)
    .map((m) => m.text)
    .join(' ');

  const hasIntlIntent =
    /\b(usd|usdt|dollar|dollars|usa|uk|uae|dubai|abu dhabi|europe|australia|canada|singapore|international|abroad|overseas|global client|foreign)\b|\$/i.test(
      recentUserText
    );
  const hasIndiaIntent =
    /\b(inr|rupee|rupees|rs\.?|lakh|lakhs|crore|india|indian|jaipur|delhi|mumbai|bangalore|bengaluru|pune|hyderabad|udaipur|jodhpur|rajasthan)\b|₹|[\u0900-\u097F]/i.test(
      recentUserText
    );

  // If user explicitly switched region manually in UI, respect it unless their latest message clearly asks for the other market
  if (requestedRegion === 'india') {
    if (hasIntlIntent && !hasIndiaIntent) return 'international';
    return 'india';
  }
  if (requestedRegion === 'international') {
    if (hasIndiaIntent && !hasIntlIntent) return 'india';
    return 'international';
  }

  // Auto mode: detect from message keywords first, then browser timezone
  if (hasIntlIntent && !hasIndiaIntent) return 'international';
  if (hasIndiaIntent && !hasIntlIntent) return 'india';

  if (timezone && /Asia\/(Kolkata|Calcutta)/i.test(timezone)) {
    return 'india';
  }
  if (timezone && timezone.trim().length > 0) {
    return 'international';
  }

  // Fallback to India for local agency default
  return 'india';
}

function buildSystemInstruction(region: ResolvedRegion, currentPage?: string): string {
  const pricingSection =
    region === 'india'
      ? `ACTIVE CLIENT TYPE: INDIAN CLIENT (₹ INR ONLY)
STRICT PRICING RULE: You MUST quote prices ONLY in Indian Rupees (₹ / INR). NEVER mention USD, US$, dollars, or international pricing. Present only these Indian market rates:
- Local SEO & Google Maps 3-Pack (Jaipur & Indian cities): ₹15,000 – ₹25,000 / month
- National / E-Commerce SEO: ₹25,000 – ₹60,000+ / month
- Performance Marketing Management (Google Ads & Meta Ads): ₹20,000 – ₹45,000 / month management fee (Recommended Client Ad Spend: ₹30,000–₹75,000/month local, ₹1.5 Lakh+/month national)
- High-Converting Landing Page + AI WhatsApp Funnel (One-Time): ₹25,000 – ₹45,000
- Complete Business Website (One-Time): ₹45,000 – ₹1,20,000+
- Complete 360° Growth Partner (SEO + Ads + Social + CRO): ₹50,000 – ₹1,00,000+ / month`
      : `ACTIVE CLIENT TYPE: INTERNATIONAL CLIENT ($ USD ONLY)
STRICT PRICING RULE: You MUST quote prices ONLY in US Dollars ($ / USD). NEVER mention INR, ₹, rupees, lakhs, or Indian domestic rates. Present only these international agency rates:
- Local / Regional SEO & Google Maps Dominance: $750 – $1,500 / month
- Enterprise / Global E-Commerce SEO & AI Search (GEO): $1,500 – $4,000+ / month
- Performance Marketing Management (Google Ads & Meta Ads): $1,000 – $2,500 / month management fee (Recommended Client Ad Spend: $2,500 – $15,000+/month)
- Custom Digital Flagship & AI Conversion Funnel (One-Time): $1,500 – $5,000+
- Full-Stack 360° Growth Retainer: $2,500 – $6,000+ / month`;

  return `You are the AI Growth Assistant for "SEO in Jaipur" (seoinjaipur.in), a performance marketing, SEO, and AI growth funnel agency.

AGENCY & TEAM:
- Founder: Vishnu Sivota — Performance Marketing Architect (Google Ads, Meta Ads / Facebook & Instagram, CRO, AI Lead Funnels).
- Director: Manish Chaudhary — Director & SEO Specialist (Technical SEO, Local SEO / Google Maps 3-Pack, Entity & Schema SEO, Link Building, GEO).
- Location: Joshi Marg, 100 Feet Road, Near Jhotwara, Jaipur, Rajasthan 302012, India.
- Contact: WhatsApp +91 70147 99233 (https://wa.me/917014799233), Phone +91 63674 20500, Email vishnusivota@gmail.com.

TIMELINES:
- Local SEO / Google Maps 3-Pack: 30–45 days for strong local visibility & calls.
- National / Enterprise SEO: 90–120 days for sustainable Page 1 rankings.
- Paid Ads (Google / Meta): 14–21 days to see conversion velocity.

${pricingSection}

RULES:
1. Reply in the SAME language as the user (Hindi Devanagari -> Hindi; Hinglish -> Hinglish; English -> English).
2. Be fast, concise, and scannable (max 3–4 short bullet points or 2 short paragraphs). Never write long walls of text.
3. End with 1 brief qualifying question (e.g., asking for their business type, website, or goal) for a complimentary 48-hour Strategy & Audit.
${currentPage ? `4. Current page: "${currentPage}".` : ''}`;
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', service: 'seoinjaipur-assistant' });
  });

  app.post('/api/assistant/chat', async (req: Request, res: Response) => {
    try {
      const body = req.body as {
        messages?: ChatMessageInput[];
        clientRegion?: RequestedRegion;
        timezone?: string;
        currentPage?: string;
        stream?: boolean;
      };

      const rawMessages = Array.isArray(body?.messages) ? body.messages : [];
      const sanitizedMessages = rawMessages
        .filter(
          (m) =>
            m &&
            (m.role === 'user' || m.role === 'model') &&
            typeof m.text === 'string' &&
            m.text.trim().length > 0
        )
        .slice(-12);

      if (sanitizedMessages.length === 0) {
        res.status(400).json({ error: 'Please enter a message to start the conversation.' });
        return;
      }

      const ai = getGenAIClient();
      if (!ai) {
        res.status(503).json({
          error: 'AI Assistant is not configured yet. Please add GEMINI_API_KEY in Settings > Secrets, or connect with us directly on WhatsApp.',
          code: 'MISSING_API_KEY',
        });
        return;
      }

      const requestedRegion: RequestedRegion =
        body.clientRegion === 'india' || body.clientRegion === 'international'
          ? body.clientRegion
          : 'auto';

      const resolvedRegion = resolveExclusiveRegion(
        requestedRegion,
        sanitizedMessages,
        body.timezone
      );

      const systemInstruction = buildSystemInstruction(resolvedRegion, body.currentPage);

      const contents = sanitizedMessages.map((m) => ({
        role: m.role,
        parts: [{ text: m.text.trim() }],
      }));

      // Use ThinkingLevel.LOW for lowest latency and SSE streaming for instant first-token display
      if (body.stream !== false) {
        res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
        res.setHeader('Cache-Control', 'no-cache, no-transform');
        res.setHeader('Connection', 'keep-alive');
        res.flushHeaders?.();

        // Send detected/active region metadata first
        res.write(`data: ${JSON.stringify({ resolvedRegion })}\n\n`);

        const streamResponse = await ai.models.generateContentStream({
          model: 'gemini-4-hydrogen',
          contents,
          config: {
            systemInstruction,
            thinkingConfig: {
              thinkingLevel: ThinkingLevel.LOW,
            },
          },
        });

        let hasText = false;
        for await (const chunk of streamResponse) {
          const c = chunk as GenerateContentResponse;
          if (c.text) {
            hasText = true;
            res.write(`data: ${JSON.stringify({ chunk: c.text })}\n\n`);
          }
        }

        if (!hasText) {
          res.write(
            `data: ${JSON.stringify({
              error: 'Assistant could not generate a response right now. Please try again or reach out via WhatsApp.',
            })}\n\n`
          );
        }

        res.write('data: [DONE]\n\n');
        res.end();
        return;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-4-hydrogen',
        contents,
        config: {
          systemInstruction,
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.LOW,
          },
        },
      });

      const replyText = (response.text ?? '').trim();

      if (!replyText) {
        res.status(502).json({
          error: 'Assistant could not generate a response right now. Please try again or reach out via WhatsApp.',
        });
        return;
      }

      res.json({ reply: replyText, resolvedRegion });
    } catch (err: unknown) {
      console.error('[AI Assistant Error]', err);
      const errMsg = err instanceof Error ? err.message : 'Unexpected server error';
      const isAuthErr = /API_KEY|PERMISSION_DENIED|403|401/i.test(errMsg);
      const isRateErr = /RESOURCE_EXHAUSTED|429/i.test(errMsg);

      const errorPayload = isAuthErr
        ? {
            error: 'AI Assistant key needs attention in Settings > Secrets. Meanwhile, you can message us directly on WhatsApp!',
            code: 'AUTH_ERROR',
          }
        : isRateErr
          ? {
              error: 'Too many requests right now. Please wait a few seconds and try again.',
              code: 'RATE_LIMIT',
            }
          : {
              error: 'Unable to reach the AI strategist right now. Please try again or use WhatsApp for instant support.',
            };

      if (res.headersSent) {
        res.write(`data: ${JSON.stringify(errorPayload)}\n\n`);
        res.write('data: [DONE]\n\n');
        res.end();
        return;
      }

      res.status(isAuthErr ? 403 : isRateErr ? 429 : 500).json(errorPayload);
    }
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use('/api/*', (_req: Request, res: Response) => {
      res.status(404).json({ error: 'API endpoint not found' });
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(
      '/assets',
      express.static(path.join(distPath, 'assets'), {
        maxAge: '1y',
        immutable: true,
      })
    );
    app.use(
      express.static(distPath, {
        maxAge: '1h',
        index: false,
      })
    );
    app.use('/api/*', (_req: Request, res: Response) => {
      res.status(404).json({ error: 'API endpoint not found' });
    });
    app.get('*', (_req: Request, res: Response) => {
      res.setHeader('Cache-Control', 'no-cache');
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
