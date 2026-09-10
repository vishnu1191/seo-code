import React, { useState } from 'react';
import { 
  Target, 
  Search, 
  Sparkles, 
  TrendingUp, 
  Cpu, 
  Clapperboard, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Zap, 
  BarChart3, 
  MapPin, 
  MessageCircle, 
  DollarSign, 
  Clock 
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ServicesPageProps {
  onOpenInquiry: (initialService?: string) => void;
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenInquiry, onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const detailedServices = [
    {
      id: 'organic-seo',
      number: '01',
      title: 'Enterprise Organic SEO & Entity Architecture',
      category: 'seo',
      tagline: 'Defensible search supremacy engineered to capture #1 SERP real estate.',
      desc: 'We construct deep semantic topic clusters, programmatic entity relationships, and technical page architecture that turn Google into your most profitable, compounding customer acquisition channel.',
      deliverables: [
        'Semantic Knowledge Graph & Entity Optimization',
        'Deep Competitor SERP & Keyword Vulnerability Gap Audits',
        'Technical Core Web Vitals & Crawl Budget Remediation',
        'High-Authority Digital PR & Contextual Backlink Moats',
        'Structured Schema Markup & Rich Snippet Dominance',
        'Continuous Algorithm Update Armor & Rank Defensibility'
      ],
      techStack: ['Ahrefs', 'Semrush', 'Google Search Console', 'Screaming Frog', 'Looker Studio'],
      roiBenchmark: '+310% High-Intent Organic Pipeline',
      timeline: '3 to 6 Months Compounding',
      bestFor: 'Real Estate Developers, Luxury Brands, Hospitals, B2B SaaS'
    },
    {
      id: 'paid-ads',
      number: '02',
      title: 'High-Performance Google & Meta Ads Management',
      category: 'ads',
      tagline: 'Algorithmic paid media funnels engineered for maximum return on ad spend.',
      desc: 'Precision PPC and paid social advertising targeting ready-to-buy decision makers. We eliminate ad waste with first-party data attribution, predictive LTV modeling, and ruthless creative testing.',
      deliverables: [
        'Multi-Channel Search, Display & Performance Max Architecture',
        'High-Converting Meta (Instagram/Facebook) Custom Ad Sets',
        'Dynamic Creative Testing & High-Volume Angle Variations',
        'First-Party Server-Side Tracking (CAPI & GA4)',
        'Negative Keyword Fortification & Bid Optimization',
        'VIP Retargeting Funnels for High-Ticket Decision Makers'
      ],
      techStack: ['Google Ads Manager', 'Meta Business Suite', 'Triple Whale', 'Postman API', 'GA4'],
      roiBenchmark: '3.8x to 5.4x Verified Blended ROAS',
      timeline: 'Instant Velocity (14-Day Baseline)',
      bestFor: 'E-Commerce Brands, High-Ticket Havelis & Real Estate, Private Clinics'
    },
    {
      id: 'local-seo',
      number: '03',
      title: 'Hyper-Local SEO & Google Maps 3-Pack Supremacy',
      category: 'local',
      tagline: 'Capture 80%+ of local high-intent footfall and direct phone inquiries.',
      desc: 'Dominate Google Local 3-Pack and Google Maps across Jaipur and target regional territories. We turn nearby searches into immediate clinic visits, haveli bookings, and property site tours.',
      deliverables: [
        'Google Business Profile (GBP) 100% Algorithmic Optimization',
        'Geo-Fenced Local Citation Networks & NAP Consistency Audits',
        'Review Velocity & Automated Reputation Management Engine',
        'Hyper-Local Suburb & Area-Specific Landing Pages',
        'Local Schema Geocoding & Coordinate Entity Mapping',
        'Call Tracking & WhatsApp Direct Inbound Conversion Analytics'
      ],
      techStack: ['Google Business Profile', 'BrightLocal', 'Whitespark', 'Google Maps API'],
      roiBenchmark: '+480% Local Direct Call & Direction Inquiries',
      timeline: '30 to 45 Days to Top 3 Rank',
      bestFor: 'Gyms, Cafes, Havelis, Local Clinics, Jewelers, Showrooms'
    },
    {
      id: 'geo-ai',
      number: '04',
      title: 'Generative Engine Optimization (GEO) & AI Search',
      category: 'ai',
      tagline: 'Future-proof citations inside ChatGPT, Perplexity, and Google AI Overviews.',
      desc: 'Search is shifting from ten blue links to AI synthesized answers. We optimize your brand data and digital footprint so LLMs cite your business as the definitive primary authority.',
      deliverables: [
        'Google AI Overviews (SGE) Inclusion Protocols',
        'Perplexity AI & ChatGPT Contextual Knowledge Graph Embedding',
        'Factual Authority Vector PR & Wikipedia Entity Connections',
        'LLM Structured Data Synthesis & Q&A Knowledge Bases',
        'Brand Reputation Sentiment Defense across Neural Engines',
        'AI Citation Share of Voice Monitoring'
      ],
      techStack: ['Google GenAI API', 'Perplexity Pro API', 'Schema Pro', 'Vector Embeddings'],
      roiBenchmark: '90%+ Inclusion in AI Search Answers',
      timeline: '60 to 90 Days',
      bestFor: 'Enterprise Leaders, Tech Companies, High-End Healthcare'
    },
    {
      id: 'ecommerce-seo',
      number: '05',
      title: 'E-Commerce Organic Scaling & Shopify/Woo Growth',
      category: 'ecommerce',
      tagline: 'Turn product and collection pages into 24/7 revenue generating assets.',
      desc: 'Specialized organic growth architecture for DTC brands. We rank your catalog for high-volume commercial keywords, optimize faceted navigation, and skyrocket average order value (AOV).',
      deliverables: [
        'Faceted Navigation Indexing & Clean URL Architectures',
        'High-Converting Product Schema & Rich Merchant Center Feeds',
        'Seasonal Gifting & Commercial High-Intent Category Hubs',
        'DTC Checkout Funnel Speed & Core Web Vitals Optimization',
        'Competitor Price & SERP Feature Interception',
        'Automated Customer Review & UGC Schema Integration'
      ],
      techStack: ['Shopify Plus', 'WooCommerce', 'Klaviyo', 'Algolia', 'Google Merchant Center'],
      roiBenchmark: '+420% Direct DTC Organic Revenue',
      timeline: '90 to 120 Days',
      bestFor: 'Fashion Labels, Jewelry, Skincare, Home Decor, Organic Goods'
    },
    {
      id: 'cro-web',
      number: '06',
      title: 'Conversion Rate Optimization (CRO) & Digital Flagships',
      category: 'cro',
      tagline: 'Double your customer conversion rate without doubling your ad budget.',
      desc: 'Traffic without conversion is vanity. We design and optimize ultra-fast, visually stunning digital experiences engineered with psychological triggers, behavioral heatmaps, and frictionless checkouts.',
      deliverables: [
        'A/B Split Testing & Multi-Armed Bandit Landing Funnels',
        'Behavioral Heatmap & User Session Recording Analysis',
        'Sub-Second Mobile Page Load Speeds (Edge Caching)',
        'Copywriting & Offer Framing Optimization',
        'Frictionless Multi-Step Lead Qualification Forms',
        'Direct WhatsApp VIP Concierge Checkout Bridges'
      ],
      techStack: ['Hotjar', 'Microsoft Clarity', 'Next.js', 'VWO', 'Tailwind CSS'],
      roiBenchmark: '+185% Average Conversion Lift',
      timeline: '30-Day Testing Sprints',
      bestFor: 'All Brands Seeking Higher Revenue per Visitor'
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'seo', label: 'Organic SEO' },
    { id: 'ads', label: 'Google & Meta Ads' },
    { id: 'local', label: 'Local Maps & GBP' },
    { id: 'ai', label: 'AI Search & GEO' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'cro', label: 'CRO & Speed' },
  ];

  const filtered = detailedServices.filter(
    (s) => selectedFilter === 'all' || s.category === selectedFilter
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#050508]">
      <Breadcrumbs currentPage="services" onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#8B3DFF]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#D7BFFF] text-xs uppercase tracking-[0.2em] font-bold mb-6 shadow-[0_0_15px_rgba(139,61,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#B15CFF]" />
              <span>Full-Spectrum Capabilities</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Precision Search & Performance{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] via-[#B15CFF] to-[#D7BFFF]">
                Architecture
              </span>
            </h1>

            <p className="text-[#A7A3B1] text-base sm:text-lg leading-relaxed mb-8">
              From dominating competitive Google SERPs to high-converting Meta and Google Ads, we engineer reliable revenue engines tailored for market leaders.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedFilter(opt.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    selectedFilter === opt.id
                      ? 'bg-[#8B3DFF] text-white shadow-[0_0_20px_rgba(139,61,255,0.4)] scale-105'
                      : 'bg-[#0A0810] text-[#A7A3B1] hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Service Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {filtered.map((service) => (
              <div
                key={service.id}
                id={`service-detail-${service.id}`}
                className="rounded-3xl bg-[#0A0810]/90 backdrop-blur-xl border border-white/5 hover:border-[#8B3DFF]/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(139,61,255,0.25)] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#8B3DFF]/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-[#8B3DFF]/20 transition-all" />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="font-mono text-2xl font-black text-[#8B3DFF]">
                      {service.number}
                    </span>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-[#140E23] text-[#D7BFFF] border border-[#8B3DFF]/30">
                      {service.roiBenchmark}
                    </span>
                  </div>

                  <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2 group-hover:text-[#D7BFFF] transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-xs font-mono text-[#8B3DFF] mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#A7A3B1] leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-white font-bold mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#8B3DFF]" />
                      <span>Key Technical Deliverables</span>
                    </div>

                    <div className="space-y-2">
                      {service.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#C5C2CE]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8B3DFF] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mb-6 pt-4 border-t border-white/5">
                    <div className="text-[10px] font-mono text-[#85818E] uppercase tracking-wider mb-2">
                      Architecture & Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-[#120B20] text-[#D7BFFF] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For Note */}
                  <div className="p-3 rounded-xl bg-[#080512] border border-white/5 text-[11px] text-[#85818E] mb-6">
                    <strong className="text-white">Ideal For:</strong> {service.bestFor}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#85818E] font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#8B3DFF]" />
                    <span>{service.timeline}</span>
                  </div>

                  <button
                    onClick={() => onOpenInquiry(service.title)}
                    className="px-5 py-2.5 rounded-full bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(139,61,255,0.3)] hover:scale-105 cursor-pointer"
                  >
                    <span>Inquire for {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Engagement Tiers & SLA Guarantees */}
          <div className="mb-24 rounded-3xl bg-[#080612] border border-white/5 p-8 sm:p-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-mono font-bold text-[#8B3DFF] uppercase tracking-widest mb-2">
                Predictable Growth Retainers
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white mb-3">
                Engagement Frameworks Built For Scale
              </h2>
              <p className="text-xs sm:text-sm text-[#A7A3B1]">
                Choose the growth tier suited for your current business trajectory and market goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Local Market Dominance',
                  badge: 'For Jaipur & Regional Hubs',
                  desc: 'Designed for high-traffic local businesses, clinics, cafes, fitness centers, and single-territory leaders.',
                  features: [
                    'Google Maps 3-Pack Supremacy',
                    'Local Schema & Citation Network',
                    'High-Intent Area Search Keywords',
                    'Automated WhatsApp Lead Routing',
                    'Bi-Weekly Sprint Updates'
                  ],
                  highlight: false
                },
                {
                  name: 'National Category Leader',
                  badge: 'Most Popular for Scaling Brands',
                  desc: 'Full-spectrum organic search, Google Ads & Meta Ads architecture for multi-crore national brands.',
                  features: [
                    'Full Technical & Entity SEO Engine',
                    'High-Converting Meta & Google Ads',
                    'Digital PR & High-Authority Links',
                    'Conversion Rate Optimization (CRO)',
                    'Direct Senior Architect Access'
                  ],
                  highlight: true
                },
                {
                  name: 'Global Enterprise Matrix',
                  badge: 'For Ultra-HNW & Multi-National',
                  desc: 'Bespoke international search engineering for luxury havelis, mega real estate townships, and global DTC.',
                  features: [
                    'Generative Engine Optimization (GEO)',
                    'Multi-Country / Currency SERP Architecture',
                    'High-Level Private Concierge Integrations',
                    'Custom Looker Studio Telemetry Live',
                    '24/7 Dedicated Executive Desk'
                  ],
                  highlight: false
                }
              ].map((tier, tIdx) => (
                <div
                  key={tIdx}
                  className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all ${
                    tier.highlight
                      ? 'bg-[#140E23] border-2 border-[#8B3DFF] shadow-[0_0_40px_rgba(139,61,255,0.3)]'
                      : 'bg-[#0A0810] border border-white/5 hover:border-white/10'
                  }`}
                >
                  <div>
                    <div className="inline-block text-[9px] uppercase font-mono font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#8B3DFF]/20 text-[#D7BFFF] mb-3">
                      {tier.badge}
                    </div>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#A7A3B1] leading-relaxed mb-6">
                      {tier.desc}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {tier.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-[#C5C2CE]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8B3DFF] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenInquiry(tier.name)}
                    className={`w-full py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all cursor-pointer ${
                      tier.highlight
                        ? 'bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white shadow-[0_0_20px_rgba(139,61,255,0.4)]'
                        : 'bg-[#140E23] hover:bg-[#1f1538] text-[#D7BFFF] border border-[#8B3DFF]/30'
                    }`}
                  >
                    Select {tier.name.split(' ')[0]}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Consultation CTA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#140E23] via-[#0A0810] to-[#140E23] border border-[#8B3DFF]/30 text-center flex flex-col items-center shadow-[0_0_50px_rgba(139,61,255,0.2)]">
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-3">
              Need a Customized Search & Ads Architecture?
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A3B1] max-w-xl mb-6">
              Our search strategists will analyze your target keywords, competitors, and current conversion bottlenecks to provide a bespoke proposal.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onOpenInquiry('Custom Growth Architecture')}
                className="px-8 py-3.5 bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-[0_0_20px_rgba(139,61,255,0.4)] hover:scale-105 cursor-pointer"
              >
                Request Custom Strategy Proposal
              </button>
              <button
                onClick={() => {
                  onNavigate('calculator');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#120B20] hover:bg-[#1A1030] border border-white/10 text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all cursor-pointer"
              >
                Calculate ROI Projections
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
