import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  RotateCcw,
  MessageCircle,
  ArrowRight,
  Globe2,
  Loader2,
  Minimize2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ClientRegion = 'india' | 'international';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

interface AIAssistantProps {
  currentPage?: string;
  onOpenInquiry: (initialService?: string, region?: ClientRegion) => void;
}

function detectInitialRegion(): ClientRegion {
  if (typeof window === 'undefined') return 'india';
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (/Asia\/(Kolkata|Calcutta)/i.test(tz)) {
      return 'india';
    }
    const lang = (navigator.language || '').toLowerCase();
    if (lang === 'hi' || lang === 'hi-in' || lang === 'en-in') {
      return 'india';
    }
    if (tz) {
      return 'international';
    }
  } catch {
    // Fallback safely
  }
  return 'india';
}

function getWelcomeMessage(region: ClientRegion): ChatMessage {
  if (region === 'international') {
    return {
      id: 'welcome',
      role: 'model',
      text: 'Hello! I am the AI Growth Assistant for **SEO in Jaipur**. 👋\n\nAsk me anything about **Enterprise SEO, Google Ads, Meta Ads, AI Conversion Funnels**, or **International Growth Packages ($ USD)**. How can we scale your business?',
    };
  }
  return {
    id: 'welcome',
    role: 'model',
    text: 'Namaste! Main **SEO in Jaipur** ka AI Growth Assistant hoon. 👋\n\nAap **SEO, Local Maps Ranking, Google Ads, Meta Ads, AI Funnels**, ya **Pricing (₹ INR)** se juda koi bhi sawal Hindi, Hinglish ya English mein pooch sakte hain. Batayein, aapke business ke liye kya plan karna hai?',
  };
}

const QUICK_PROMPTS_BY_REGION: Record<ClientRegion, string[]> = {
  india: [
    'Jaipur Local SEO & Maps ranking ka price kya hai?',
    'Google Ads & Meta Ads ke liye kitna budget chahiye?',
    'AI WhatsApp Funnel kaise kaam karta hai?',
    'Free 48-hour SEO & Ad Audit book karna hai',
  ],
  international: [
    'What are your monthly USD packages for Enterprise SEO?',
    'What is the recommended ad spend & fee for Google/Meta Ads?',
    'How do your AI conversion funnels improve ROAS?',
    'Book a free 48-hour strategy audit for my brand',
  ],
};

function renderFormattedLine(line: string): React.ReactNode {
  const parts = line.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s)]+)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={idx} className="text-white font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={idx}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B15CFF] underline hover:text-white break-all"
        >
          {part}
        </a>
      );
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

function renderMessageText(text: string): React.ReactNode {
  const lines = text.split('\n');
  return (
    <div className="space-y-1.5">
      {lines.map((rawLine, index) => {
        const trimmed = rawLine.trim();
        if (!trimmed) {
          return <div key={index} className="h-1" />;
        }
        const bulletMatch = trimmed.match(/^[-•*]\s+(.*)$/);
        if (bulletMatch) {
          return (
            <div key={index} className="flex items-start gap-2 pl-1">
              <span className="text-[#8B3DFF] mt-0.5 text-xs shrink-0">•</span>
              <span className="flex-1">{renderFormattedLine(bulletMatch[1])}</span>
            </div>
          );
        }
        return <p key={index}>{renderFormattedLine(trimmed)}</p>;
      })}
    </div>
  );
}

/**
 * Smart local response engine so the AI Assistant works smoothly even on
 * static hosting (like GitHub Pages on seoinjaipur.in) without showing errors.
 */
function generateStaticFallbackReply(
  query: string,
  activeRegion: ClientRegion
): { reply: string; resolvedRegion: ClientRegion } {
  const q = query.trim();
  const hasIntlIntent =
    /\b(usd|usdt|dollar|dollars|usa|uk|uae|dubai|abu dhabi|europe|australia|canada|singapore|international|abroad|overseas|global client|foreign)\b|\$/i.test(q);
  const hasIndiaIntent =
    /\b(inr|rupee|rupees|rs\.?|lakh|lakhs|crore|india|indian|jaipur|delhi|mumbai|bangalore|bengaluru|pune|hyderabad|udaipur|jodhpur|rajasthan)\b|₹|[\u0900-\u097F]/i.test(q);

  let region: ClientRegion = activeRegion;
  if (hasIntlIntent && !hasIndiaIntent) region = 'international';
  if (hasIndiaIntent && !hasIntlIntent) region = 'india';

  const isDevanagari = /[\u0900-\u097F]/.test(q);
  const isHinglish = /\b(kya|kitna|kitne|kaise|chahiye|karna|hoga|mera|meri|mujhe|batao|bataiye|kaam|samay|paisa|kharch)\b/i.test(q);

  const asksPricing = /\b(price|pricing|cost|charge|charges|fee|fees|budget|package|packages|rate|rates|retainer)\b|₹|\$|पैस|खर्च|चार्ज|बजट|कीमत/i.test(q);
  const asksSEO = /\b(seo|rank|ranking|google maps|3-pack|local seo|organic|traffic|backlink)\b|रैंक|मैप्स/i.test(q);
  const asksAds = /\b(ads|google ads|meta ads|facebook|instagram|roas|ppc|lead|leads|campaign)\b|ऐड|लीड/i.test(q);
  const asksFunnel = /\b(ai|funnel|whatsapp|automation|landing page|website|design)\b|फनल|वेबसाइट/i.test(q);
  const asksAudit = /\b(audit|book|call|consult|consultation|start|contact|meet|meeting)\b|ऑडिट|बात|कॉल/i.test(q);

  if (region === 'india') {
    if (asksPricing || (asksSEO && asksAds)) {
      return {
        resolvedRegion: 'india',
        reply: isDevanagari
          ? `**SEO in Jaipur** के भारतीय क्लाइंट्स के लिए हमारे पैकेज (₹ INR):\n- **Local SEO & Google Maps 3-Pack:** ₹15,000 – ₹25,000 / महीना\n- **National / E-Commerce SEO:** ₹25,000 – ₹60,000+ / महीना\n- **Google Ads & Meta Ads Management:** ₹20,000 – ₹45,000 / महीना (न्यूनतम Ad Spend ₹30,000–₹75,000/महीना)\n- **AI WhatsApp Funnel & Landing Page:** ₹25,000 – ₹45,000 (One-Time)\n- **Complete 360° Growth Package:** ₹50,000 – ₹1,00,000+ / महीना\n\nसटीक कोटेशन के लिए अपना बिज़नेस टाइप या वेबसाइट बताएं — हम 48 घंटे में **Free Strategy Audit** दे देंगे।`
          : `**SEO in Jaipur** ke Indian clients ke liye starting packages (**₹ INR**):\n- **Local SEO & Google Maps 3-Pack:** ₹15,000 – ₹25,000 / month\n- **National / E-Commerce SEO:** ₹25,000 – ₹60,000+ / month\n- **Google Ads & Meta Ads Management:** ₹20,000 – ₹45,000 / month (Recommended Ad Spend: ₹30,000–₹75,000/mo)\n- **AI WhatsApp Funnel & Landing Page:** ₹25,000 – ₹45,000 (One-Time)\n- **Complete 360° Growth Retainer:** ₹50,000 – ₹1,00,000+ / month\n\nAapka business kis category ka hai aur target city kya hai?`,
      };
    }
    if (asksAds) {
      return {
        resolvedRegion: 'india',
        reply: `**Vishnu Sivota** (Founder & Performance Marketing Architect) aapke liye high-ROAS **Google Ads + Meta (Facebook/Instagram) Ads** funnel design karte hain:\n- **Management Fee:** ₹20,000 – ₹45,000 / month\n- **Recommended Ad Spend:** ₹30,000–₹75,000/month (Local) ya ₹1.5 Lakh+/month (National)\n- **Timeline:** 14–21 din mein measurable lead & conversion velocity.\n\nAapka monthly lead target aur business location kya hai?`,
      };
    }
    if (asksSEO) {
      return {
        resolvedRegion: 'india',
        reply: `**Manish Chaudhary** (Director & SEO Specialist) 100% white-hat SEO aur Entity Architecture handle karte hain:\n- **Local SEO & Google Maps 3-Pack:** 30–45 din mein strong calls & visibility (₹15,000 – ₹25,000/month)\n- **National / E-Commerce SEO:** 90–120 din mein Page 1 organic growth (₹25,000 – ₹60,000+/month)\n\nKya aap apni website URL ya target keywords share kar sakte hain taaki hum Free Audit kar sakein?`,
      };
    }
    if (asksFunnel) {
      return {
        resolvedRegion: 'india',
        reply: `Hamare **AI Marketing Funnels** ad-clicked users ko real-time matched landing page par bhejte hain aur **45 seconds** ke andar automated WhatsApp qualification trigger karte hain:\n- **AI Funnel & Landing Page Setup:** ₹25,000 – ₹45,000 (One-Time)\n- **Complete Custom Website:** ₹45,000 – ₹1,20,000+\n\nKya aap existing website upgrade karna chahte hain ya naya lead funnel launch karna hai?`,
      };
    }
    if (asksAudit) {
      return {
        resolvedRegion: 'india',
        reply: `Bilkul! Hum aapko **48-Hour Complimentary SEO & Ad Account Audit** dete hain (Vishnu Sivota & Manish Chaudhary ke direct review ke saath).\n- Niche **"Send on WhatsApp"** par click karein ya **"Book Free Audit"** button se apni details submit karein.\n- Direct Phone: **+91 63674 20500** | WhatsApp: **+91 70147 99233**`,
      };
    }
    return {
      resolvedRegion: 'india',
      reply: isHinglish || isDevanagari
        ? `**SEO in Jaipur** (Vishnu Sivota & Manish Chaudhary) aapke business ke liye **Local SEO (₹15k/mo से)**, **Google & Meta Ads (₹20k/mo से)** aur **AI Lead Funnels (₹25k से)** provide karta hai.\n\nApne business ka naam, city aur goal batayein taaki main aapko exact plan aur **Free Audit** suggest kar sakoon!`
        : `**SEO in Jaipur** (led by Vishnu Sivota & Manish Chaudhary) delivers **Local & National SEO (from ₹15,000/mo)**, **Google & Meta Performance Ads (from ₹20,000/mo)**, and **AI WhatsApp Funnels (from ₹25,000)**.\n\nWhat is your business type and primary growth goal?`,
    };
  }

  // International ($ USD) exclusive responses
  if (asksPricing || (asksSEO && asksAds)) {
    return {
      resolvedRegion: 'international',
      reply: `Our International Growth Packages (**$ USD**):\n- **Regional SEO & Google Maps Dominance:** $750 – $1,500 / month\n- **Enterprise / Global E-Commerce SEO & GEO:** $1,500 – $4,000+ / month\n- **Google Ads & Meta Ads Management:** $1,000 – $2,500 / month (Recommended Ad Spend: $2,500 – $15,000+/month)\n- **Custom Web Flagship & AI Conversion Funnel:** $1,500 – $5,000+ (One-Time)\n- **Full-Stack 360° Growth Retainer:** $2,500 – $6,000+ / month\n\nWhat market are you targeting and what is your website URL?`,
    };
  }
  if (asksAds) {
    return {
      resolvedRegion: 'international',
      reply: `**Vishnu Sivota** (Founder & Performance Marketing Architect) builds full-funnel **Google Search/PMax & Meta Ads** backed by server-side CAPI tracking:\n- **Management Retainer:** $1,000 – $2,500 / month\n- **Recommended Ad Spend:** $2,500 – $15,000+ / month\n- **Timeline:** Measurable conversion velocity within 14–21 days.\n\nWhich target country and monthly ROAS goal are you aiming for?`,
    };
  }
  if (asksSEO) {
    return {
      resolvedRegion: 'international',
      reply: `**Manish Chaudhary** (Director & SEO Specialist) leads white-hat Technical SEO, Core Web Vitals, and AI Search (GEO) ranking campaigns:\n- **Regional SEO & Maps:** $750 – $1,500 / month (30–45 days traction)\n- **Enterprise / E-Commerce SEO:** $1,500 – $4,000+ / month (90–120 days Page 1 maturity)\n\nPlease share your website URL if you'd like a complimentary 48-hour technical audit.`,
    };
  }
  if (asksFunnel) {
    return {
      resolvedRegion: 'international',
      reply: `Our **AI Conversion Funnels** dynamically match landing page hooks to your ad creatives and automate instant lead qualification:\n- **Custom Digital Flagship & AI Funnel:** $1,500 – $5,000+ (One-Time)\n\nWould you like to book a 48-hour complimentary audit with our team?`,
    };
  }
  return {
    resolvedRegion: 'international',
    reply: `**SEO in Jaipur** partners with international brands for **Enterprise SEO (from $750–$1,500/mo)**, **Google & Meta Performance Ads (from $1,000/mo)**, and **AI Conversion Funnels (from $1,500)**.\n\nShare your website or target region, or click **Send on WhatsApp** / **Book Free Audit** below to get a 48-hour strategy blueprint.`,
  };
}

export const AIAssistant: React.FC<AIAssistantProps> = ({
  currentPage,
  onOpenInquiry,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clientRegion, setClientRegion] = useState<ClientRegion>(() => detectInitialRegion());
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    getWelcomeMessage(detectInitialRegion()),
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const handleRegionSwitch = (nextRegion: ClientRegion) => {
    setClientRegion(nextRegion);
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [getWelcomeMessage(nextRegion)];
      }
      return prev;
    });
  };

  const sendMessage = async (textOverride?: string) => {
    const query = (textOverride ?? inputValue).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: query,
    };

    const streamingMsgId = `model-${Date.now()}`;
    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    if (!textOverride) setInputValue('');
    setIsLoading(true);

    try {
      const apiMessages = nextHistory
        .filter((m) => m.id !== 'welcome' && !m.isError)
        .map((m) => ({
          role: m.role,
          text: m.text,
        }));

      const timezone =
        typeof Intl !== 'undefined'
          ? Intl.DateTimeFormat().resolvedOptions().timeZone
          : '';

      const res = await fetch('/api/assistant/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: apiMessages,
          clientRegion,
          timezone,
          currentPage,
          stream: true,
        }),
      });

      const contentType = res.headers.get('content-type') || '';

      if (!res.ok) {
        // If backend endpoint is unavailable (e.g. static GitHub Pages deploy or missing secret),
        // seamlessly serve the smart local response engine instead of showing an error.
        if (res.status === 404 || res.status === 405 || res.status === 503 || res.status === 403) {
          const fallback = generateStaticFallbackReply(query, clientRegion);
          setClientRegion(fallback.resolvedRegion);
          setMessages((prev) => [
            ...prev,
            { id: streamingMsgId, role: 'model', text: fallback.reply },
          ]);
          return;
        }
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData?.error || 'Unable to connect to AI Assistant.');
      }

      // Handle real-time SSE stream for instant token rendering
      if (contentType.includes('text/event-stream') && res.body) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let accumulatedText = '';
        let bubbleAdded = false;

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const events = buffer.split('\n\n');
          buffer = events.pop() || '';

          for (const evt of events) {
            const line = evt
              .split('\n')
              .find((l) => l.startsWith('data: '));
            if (!line) continue;

            const payloadStr = line.slice(6).trim();
            if (payloadStr === '[DONE]') continue;

            try {
              const parsed = JSON.parse(payloadStr) as {
                chunk?: string;
                resolvedRegion?: ClientRegion;
                error?: string;
              };

              if (parsed.resolvedRegion) {
                setClientRegion(parsed.resolvedRegion);
              }

              if (parsed.error) {
                throw new Error(parsed.error);
              }

              if (parsed.chunk) {
                accumulatedText += parsed.chunk;
                if (!bubbleAdded) {
                  bubbleAdded = true;
                  setIsLoading(false);
                  setMessages((prev) => [
                    ...prev,
                    { id: streamingMsgId, role: 'model', text: accumulatedText },
                  ]);
                } else {
                  setMessages((prev) =>
                    prev.map((m) =>
                      m.id === streamingMsgId ? { ...m, text: accumulatedText } : m
                    )
                  );
                }
              }
            } catch (parseErr) {
              if (parseErr instanceof Error && parseErr.message !== 'Unexpected end of JSON input') {
                throw parseErr;
              }
            }
          }
        }

        if (!bubbleAdded) {
          const fallback = generateStaticFallbackReply(query, clientRegion);
          setClientRegion(fallback.resolvedRegion);
          setMessages((prev) => [
            ...prev,
            { id: streamingMsgId, role: 'model', text: fallback.reply },
          ]);
        }
      } else {
        const data = await res.json();
        if (data.resolvedRegion) {
          setClientRegion(data.resolvedRegion);
        }
        setMessages((prev) => [
          ...prev,
          { id: streamingMsgId, role: 'model', text: data.reply },
        ]);
      }
    } catch {
      const fallback = generateStaticFallbackReply(query, clientRegion);
      setClientRegion(fallback.resolvedRegion);
      setMessages((prev) => [
        ...prev,
        { id: streamingMsgId, role: 'model', text: fallback.reply },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([getWelcomeMessage(clientRegion)]);
    setInputValue('');
  };

  const userQueries = messages.filter((m) => m.role === 'user').map((m) => m.text);
  const latestQuerySummary =
    userQueries.length > 0
      ? userQueries.slice(-2).join(' | ').slice(0, 260)
      : 'Interested in SEO, Performance Marketing & AI Funnels';

  const regionLabel =
    clientRegion === 'india'
      ? 'Indian Client (₹ INR)'
      : 'International Client ($ USD)';

  const whatsappHandoffUrl = `https://wa.me/917014799233?text=${encodeURIComponent(
    `Hi Vishnu & Manish, I chatted with the AI Growth Assistant (${regionLabel}). My query: ${latestQuerySummary}`
  )}`;

  return (
    <div className="fixed bottom-5 left-4 sm:bottom-6 sm:left-6 z-50 flex flex-col items-start pointer-events-auto">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[82vh] flex flex-col rounded-2xl bg-[#0A0810]/95 backdrop-blur-xl border border-[#8B3DFF]/45 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(139,61,255,0.22)] overflow-hidden"
          >
            {/* Header */}
            <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#140B29] via-[#0E091B] to-[#120A22] border-b border-white/10">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="relative w-9 h-9 rounded-xl bg-[#8B3DFF]/20 border border-[#8B3DFF]/50 flex items-center justify-center text-[#D7BFFF] shrink-0 shadow-[0_0_15px_rgba(139,61,255,0.3)]">
                    <Bot className="w-5 h-5" />
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0A0810]" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-['Space_Grotesk'] text-sm font-bold text-white truncate">
                        AI Growth Assistant
                      </h3>
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        Fast
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A7A3B1] truncate">
                      {clientRegion === 'india'
                        ? 'Indian Client Mode (₹ INR Only)'
                        : 'International Client Mode ($ USD Only)'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={handleReset}
                    title="Reset conversation"
                    aria-label="Reset conversation"
                    className="p-1.5 rounded-lg text-[#A7A3B1] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    title="Minimize assistant"
                    aria-label="Close AI assistant"
                    className="p-1.5 rounded-lg text-[#A7A3B1] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Exclusive Single-Region Client Type Selector */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#85818E]">
                  Client Type:
                </span>
                <div className="inline-flex rounded-lg bg-[#07050C] p-0.5 border border-white/10">
                  <button
                    type="button"
                    onClick={() => handleRegionSwitch('india')}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${
                      clientRegion === 'india'
                        ? 'bg-[#8B3DFF] text-white shadow-sm'
                        : 'text-[#A7A3B1] hover:text-white'
                    }`}
                  >
                    🇮🇳 India (₹ INR)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRegionSwitch('international')}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                      clientRegion === 'international'
                        ? 'bg-[#8B3DFF] text-white shadow-sm'
                        : 'text-[#A7A3B1] hover:text-white'
                    }`}
                  >
                    <Globe2 className="w-2.5 h-2.5" />
                    <span>International ($ USD)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 min-h-[260px] max-h-[380px] text-left">
              {messages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                        isUser
                          ? 'bg-[#8B3DFF] text-white'
                          : msg.isError
                            ? 'bg-rose-500/20 border border-rose-500/40 text-rose-300'
                            : 'bg-[#140E23] border border-[#8B3DFF]/30 text-[#D7BFFF]'
                      }`}
                    >
                      {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    <div
                      className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                        isUser
                          ? 'bg-[#8B3DFF] text-white rounded-tr-sm'
                          : msg.isError
                            ? 'bg-rose-950/40 border border-rose-500/30 text-rose-200 rounded-tl-sm'
                            : 'bg-[#130E22] border border-white/10 text-[#D8D4E3] rounded-tl-sm'
                      }`}
                    >
                      {renderMessageText(msg.text)}
                    </div>
                  </div>
                );
              })}

              {/* Quick Starter Prompts */}
              {messages.length === 1 && !isLoading && (
                <div className="pt-1 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#85818E] px-1">
                    Popular Questions:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_PROMPTS_BY_REGION[clientRegion].map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => sendMessage(prompt)}
                        className="text-left text-[11px] px-2.5 py-1.5 rounded-xl bg-[#140E23] hover:bg-[#1E1535] border border-[#8B3DFF]/25 hover:border-[#8B3DFF]/60 text-[#D7BFFF] hover:text-white transition-all cursor-pointer"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#140E23] border border-[#8B3DFF]/30 text-[#D7BFFF] flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-sm bg-[#130E22] border border-white/10 text-xs text-[#A7A3B1] flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-[#8B3DFF]" />
                    <span>Replying...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Direct Handoff Bar (WhatsApp + Audit Modal) */}
            <div className="px-3.5 py-2 bg-[#07050C] border-t border-white/5 flex items-center gap-2">
              <a
                href={whatsappHandoffUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-1.5 px-2.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 text-[#25D366] text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Send on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenInquiry('AI Assistant Strategy Query', clientRegion);
                }}
                className="flex-1 py-1.5 px-2.5 rounded-lg bg-[#8B3DFF]/15 hover:bg-[#8B3DFF]/25 border border-[#8B3DFF]/35 text-[#D7BFFF] text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Book Free Audit</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="p-3 bg-[#0D0A16] border-t border-white/10 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={
                  clientRegion === 'india'
                    ? 'Ask your SEO, Ads or ₹ Pricing query...'
                    : 'Ask your SEO, Ads or $ Pricing query...'
                }
                disabled={isLoading}
                className="flex-1 bg-[#140E23] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#716C80] focus:outline-none focus:border-[#8B3DFF] disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send message"
                className="p-2.5 rounded-xl bg-[#8B3DFF] hover:bg-[#9B4DFF] disabled:opacity-40 disabled:cursor-not-allowed text-white shadow-[0_0_15px_rgba(139,61,255,0.4)] transition-all cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close AI Assistant' : 'Open AI Growth Assistant'}
        className="group relative flex items-center gap-2 px-3.5 sm:px-4 py-3 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#8B3DFF] hover:from-[#7C3AED] hover:to-[#9B4DFF] text-white border border-[#B15CFF]/50 shadow-[0_10px_30px_rgba(139,61,255,0.45)] transition-all hover:scale-105 cursor-pointer"
      >
        <span className="absolute -inset-0.5 rounded-full bg-[#8B3DFF]/40 blur-md opacity-70 group-hover:opacity-100 transition-opacity -z-10" />
        {isOpen ? (
          <X className="w-4 h-4" />
        ) : (
          <Sparkles className="w-4 h-4 text-[#E9D5FF]" />
        )}
        <span className="text-xs font-bold tracking-wide font-['Space_Grotesk'] sm:hidden">
          {isOpen ? 'Close' : 'Ask AI'}
        </span>
        <span className="text-xs font-bold tracking-wide font-['Space_Grotesk'] hidden sm:inline">
          {isOpen ? 'Close AI' : 'Ask AI Assistant'}
        </span>
      </button>
    </div>
  );
};
