import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Target, 
  Compass, 
  Users2, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Flame, 
  Building2, 
  Layers, 
  Globe2, 
  Phone,
  MessageCircle,
  FileCheck,
  Mail
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BrandLogo } from '../components/BrandLogo';

interface AboutPageProps {
  onOpenInquiry: (service?: string) => void;
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenInquiry, onNavigate }) => {
  const pillars = [
    {
      num: '01',
      title: 'Semantic Entity Engineering',
      tag: 'Algorithmic Foundation',
      desc: 'We map brand entities directly into Google Knowledge Graph and vector search indexes, establishing undeniable contextual authority over competitive categories.',
    },
    {
      num: '02',
      title: 'Revenue-First Accountability',
      tag: 'Commercial Reality',
      desc: 'Vanity keywords do not pay dividends. We evaluate every optimization by blended ROAS, pipeline generation, and customer acquisition payback speed.',
    },
    {
      num: '03',
      title: 'Generative Engine Optimization (GEO)',
      tag: 'AI Search Supremacy',
      desc: 'Optimized not only for standard SERP blue links, but for direct citations in Google AI Overviews, Perplexity AI, ChatGPT, and Apple Intelligence.',
    },
    {
      num: '04',
      title: 'Radical Senior Transparency',
      tag: 'Zero Junior Handoffs',
      desc: 'Direct, unfiltered collaboration with senior search architects and real-time live telemetry dashboards. No opaque middle management.',
    },
    {
      num: '05',
      title: 'High-Impact Digital PR & Authority',
      tag: 'Defensible Moats',
      desc: 'We build permanent backlink moats through tier-1 editorial placements, proprietary industry research data, and high-trust institutional relationships.',
    },
    {
      num: '06',
      title: 'Full-Funnel Conversion Architecture',
      tag: 'CRO & Speed',
      desc: 'Search traffic is meaningless without conversion. We engineer sub-second page speeds, behavioral heatmaps, and psychological conversion funnels.',
    }
  ];

  const milestones = [
    {
      year: '2025',
      period: 'Q1 2025',
      tag: 'AI-Native Genesis',
      title: 'Disrupting Legacy Retainers',
      desc: 'Founded in Jaipur by Vishnu Sivota & Manish Chaudhary to solve what outdated 2015-era agencies cannot: replacing vanity retainers with code-level semantic entity graphs and direct commercial revenue accountability.',
      metric: 'Zero-Fluff Methodology',
      highlight: false
    },
    {
      year: '2025',
      period: 'Q3 2025',
      tag: 'Pan-India Footprint',
      title: 'Pan-India Category Dominance',
      desc: 'Captured #1 SERP real estate across Jaipur, Delhi NCR, Mumbai, and Bangalore. Scaled high-intent organic funnels and Google/Meta performance ads for luxury real estate, healthcare chains, and fast-growing D2C brands.',
      metric: '₹150 Cr+ Tracked Pipeline',
      highlight: false
    },
    {
      year: '2026',
      period: 'Q1 2026',
      tag: 'AI Search Supremacy',
      title: 'Pioneering GEO & AI Citations',
      desc: 'First-mover in Generative Engine Optimization (GEO). Engineered proprietary frameworks to guarantee partner brand citations inside Google AI Overviews (SGE), Perplexity AI, ChatGPT Search, and Apple Intelligence.',
      metric: 'Top AI SGE Citation Share',
      highlight: true
    },
    {
      year: '2026',
      period: 'Present & Beyond',
      tag: 'Global Delivery',
      title: 'Cross-Border Global Enterprise Scale',
      desc: 'Deploying high-retention omni-channel growth across India, UAE (Dubai), UK, and North American markets. Delivering sub-second Core Web Vitals, enterprise CRO, and compounding customer acquisition velocity.',
      metric: '96.8% Client Retention',
      highlight: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#050508]">
      <Breadcrumbs currentPage="about" onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8B3DFF]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#D7BFFF] text-xs uppercase tracking-[0.2em] font-bold mb-6 shadow-[0_0_15px_rgba(139,61,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#B15CFF]" />
              <span>Agency Provenance & Philosophy</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Architects of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] via-[#B15CFF] to-[#D7BFFF]">
                Search Dominance
              </span>{' '}
              & Category Leadership
            </h1>

            <p className="text-[#A7A3B1] text-base sm:text-lg leading-relaxed mb-8">
              Born in the historic Pink City of Jaipur and operating globally, we fuse heritage precision, quantitative search architecture, and performance advertising to scale ambitious enterprise brands.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onOpenInquiry('Strategic Partnership')}
                className="px-6 py-3 bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-[0_0_25px_rgba(139,61,255,0.4)] hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/917014799233?text=Hi%20Vishnu%2C%20I%20would%20like%20to%20know%20more%20about%20SEO%20IN%20JAIPUR."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs uppercase tracking-widest font-bold rounded-full transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Founder Desk</span>
              </a>
            </div>
          </div>

          {/* Key Agency Vital Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {[
              { label: 'Total Tracked Pipeline', val: '₹450 Cr+', sub: 'Verified Client Revenue' },
              { label: 'Client Retention Rate', val: '96.8%', sub: 'Multi-Year Retainers' },
              { label: 'Global SERP Top 1-3', val: '2,400+', sub: 'High-Intent Keywords' },
              { label: 'Average ROAS Lift', val: '4.2x', sub: 'Across Active Paid Spend' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#0A0810]/80 backdrop-blur-xl border border-white/5 hover:border-[#8B3DFF]/40 transition-all text-center relative overflow-hidden group shadow-lg"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B3DFF]/50 to-transparent" />
                <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-[#D7BFFF] transition-colors">
                  {stat.val}
                </div>
                <div className="text-xs font-bold text-[#A7A3B1] uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-[#85818E]">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Deep Story & Vision Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-6 flex flex-col">
              <div className="text-xs font-mono font-bold text-[#8B3DFF] uppercase tracking-widest mb-3">
                The Heritage & Future
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Why Traditional Marketing Fails — And How We Engineer Dominance
              </h2>
              <div className="space-y-4 text-sm text-[#A7A3B1] leading-relaxed">
                <p>
                  Most agencies treat SEO as an afterthought — tossing around superficial meta tags, churning generic AI content, and submitting monthly reports full of irrelevant vanity impressions.
                </p>
                <p>
                  At <strong className="text-white">SEO IN JAIPUR</strong>, we approach digital search as a mathematical engineering discipline. We build semantic topic clusters that satisfy deep consumer search intent, reconstruct server architectures for sub-second page performance, and deploy authoritative PR that establishes permanent market dominance.
                </p>
                <p>
                  From historic havelis and luxury sky penthouses in Jaipur to international D2C beauty brands and high-end fitness facilities, our clients do not just rank — they control their categories.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#140E23] border border-[#8B3DFF]/30 text-[#8B3DFF]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Jaipur HQ & Hub</div>
                    <div className="text-[11px] text-[#85818E]">Joshi Marg, 100 Feet Road, Near Jhotwara, Jaipur, Rajasthan 302012, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#140E23] border border-[#8B3DFF]/30 text-[#8B3DFF]">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Global Reach</div>
                    <div className="text-[11px] text-[#85818E]">India, UAE, UK, US & Southeast Asia</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl bg-[#080612] border border-[#8B3DFF]/30 p-8 shadow-[0_0_50px_rgba(139,61,255,0.15)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B3DFF]/20 rounded-full blur-[80px]" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#140E23] border border-[#8B3DFF]/50 p-2 flex items-center justify-center">
                    <BrandLogo variant="icon" size="sm" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">
                      SEO IN JAIPUR
                    </h3>
                    <p className="text-xs text-[#8B3DFF] font-mono">
                      Enterprise Search & Performance Architecture
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 mb-6">
                  {[
                    'Proprietary Semantic Entity Mapping Framework',
                    'Zero-Waste High-Intent Paid Traffic Architecture',
                    'Core Web Vitals & Sub-Second Page Speed Remediations',
                    'AI Overviews (SGE) & Perplexity Citation Protocols',
                    'Direct Weekly Sprint Reviews with Chief Strategist'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-[#C5C2CE]">
                      <CheckCircle2 className="w-4 h-4 text-[#8B3DFF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#120B20] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-mono text-[#85818E]">Direct Line</div>
                    <div className="text-sm font-bold text-white">+91 63674 20500</div>
                  </div>
                  <button
                    onClick={() => onOpenInquiry('Enterprise Retainer')}
                    className="px-4 py-2 rounded-full bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer"
                  >
                    Request Audit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Pillars of Search Dominance */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-mono font-bold text-[#8B3DFF] uppercase tracking-widest mb-2">
                Core Methodology
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white mb-3">
                The 6 Pillars of Our Search Philosophy
              </h2>
              <p className="text-xs sm:text-sm text-[#A7A3B1]">
                Every campaign is built upon non-negotiable quantitative standards designed to outrank and outperform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#0A0810]/90 border border-white/5 hover:border-[#8B3DFF]/40 transition-all group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#8B3DFF]/40 group-hover:text-[#8B3DFF] transition-colors">
                      {pillar.num}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest font-mono font-bold px-2 py-0.5 rounded bg-[#140E23] text-[#D7BFFF] border border-[#8B3DFF]/20">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-2 group-hover:text-[#D7BFFF] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#A7A3B1] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Executive Leadership & Founders */}
          <div className="mb-24" id="leadership">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#D7BFFF] text-[10px] uppercase tracking-[0.2em] font-bold mb-3 shadow-[0_0_15px_rgba(139,61,255,0.2)]">
                <Users2 className="w-3.5 h-3.5 text-[#B15CFF]" />
                <span>Executive Leadership</span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white mb-3">
                The Minds Behind the Architecture
              </h2>
              <p className="text-xs sm:text-sm text-[#A7A3B1] leading-relaxed">
                Direct, uncompromised strategic direction. Every client engagement is steered by senior practitioners with a personal stake in your compounding growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Vishnu Sivota - Founder */}
              <div className="rounded-3xl bg-[#0A0810]/95 border border-[#8B3DFF]/30 p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_-10px_rgba(139,61,255,0.2)] group hover:border-[#8B3DFF]/60 transition-all duration-300">
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#8B3DFF]/15 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#8B3DFF]/25 transition-all" />

                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {/* Founder Photo with Fallback Monogram */}
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#8B3DFF]/50 flex items-center justify-center bg-gradient-to-br from-[#1F1235] to-[#0A0810] shadow-[0_0_30px_rgba(139,61,255,0.35)] shrink-0 group/photo">
                        <img
                          src="/vishnu-sivota.webp"
                          alt="Vishnu Sivota - Founder & Performance Marketing Architect"
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentElement?.querySelector('.fallback-monogram');
                            if (fallback) fallback.classList.remove('hidden');
                          }}
                        />
                        <div className="fallback-monogram hidden absolute inset-0 flex items-center justify-center text-white font-['Space_Grotesk'] text-2xl font-black bg-gradient-to-br from-[#1F1235] to-[#0A0810]">
                          VS
                        </div>
                        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-[#8B3DFF]/40 text-[8px] font-mono text-[#D7BFFF] font-bold">
                          Founder
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white group-hover:text-[#D7BFFF] transition-colors">
                            Vishnu Sivota
                          </h3>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8B3DFF]/20 border border-[#8B3DFF]/40 text-[#D7BFFF] text-[11px] font-mono font-semibold mb-1.5">
                          <Sparkles className="w-3 h-3 text-[#B15CFF]" />
                          <span>Founder &amp; Performance Marketing Architect</span>
                        </div>
                        <div className="text-[11px] text-[#A7A3B1] flex items-center gap-1.5">
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Direct Strategic Direction &amp; Account Oversight</span>
                        </div>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#140E23] text-[#85818E] border border-white/5">
                      Executive Founder
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#C5C2CE] leading-relaxed mb-6">
                    &ldquo;We engineered SEO IN JAIPUR to bridge the gap between creative marketing and hard commercial numbers. As a Performance Marketing specialist with comprehensive digital command across Google Ads, Meta Ads, and full-funnel CRO, I architect high-ROAS paid acquisition systems and deploy next-gen AI growth funnels that turn cold search and social demand into compounding, multi-crore revenue pipelines.&rdquo;
                  </p>

                  {/* Core Skillsets & AI Funnels Matrix */}
                  <div className="mb-6 pt-4 border-t border-white/5 space-y-4">
                    {/* Performance Ads Mastery */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#8B3DFF] font-bold mb-1.5 flex items-center justify-between">
                        <span>Performance Marketing &amp; Ad Scaling Mastery</span>
                        <span className="text-emerald-400 text-[9px] font-normal">Expert Level</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          'Google Ads (Search, Shopping, PMax & YouTube Action)',
                          'Meta Ads (Facebook & Instagram High-ROAS Funnels)',
                          'Meta CAPI Server-Side Tracking & Lookalike Scaling',
                          'Target ROAS/CPA Optimization & Ad Waste Elimination'
                        ].map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#140E23] text-[#D7BFFF] border border-[#8B3DFF]/20 flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#8B3DFF]" />
                            <span>{spec}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* AI-Powered Growth Funnels */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#B15CFF] font-bold mb-1.5 flex items-center justify-between">
                        <span>Next-Gen AI Acquisition Funnels</span>
                        <span className="text-[#D7BFFF] text-[9px] font-normal">AI-Native</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          'Generative Engine Optimization (GEO for ChatGPT & Perplexity)',
                          'AI Dynamic Creative Testing (DCT) & Copy Synthesis',
                          'Predictive Algorithmic Bidding & Audience Clustering',
                          'Automated WhatsApp AI Bots & Instant CRM Nurturing'
                        ].map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#140E23] text-[#F7F5FA] border border-white/5 flex items-center gap-1.5"
                          >
                            <Sparkles className="w-3 h-3 text-[#B15CFF]" />
                            <span>{spec}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 360° Full-Stack Digital Command */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#85818E] font-bold mb-1.5">
                        360° Digital &amp; Search Authority
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          'Enterprise Organic SEO & Semantic Entity Graphs',
                          'Sub-Second Page Speed & Core Web Vitals Engineering',
                          'Conversion Rate Optimization (CRO) & Heatmap Analytics',
                          'Hyper-Local Google Business Profile (GBP) 3-Pack'
                        ].map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#0C0816] text-[#A7A3B1] border border-white/5 flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#85818E]" />
                            <span>{spec}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-xs text-[#A7A3B1]">
                    <a
                      href="mailto:vishnusivota@gmail.com"
                      className="hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#8B3DFF]" />
                      <span>vishnusivota@gmail.com</span>
                    </a>
                  </div>

                  <a
                    href="https://wa.me/917014799233?text=Hi%20Vishnu%2C%20I%20would%20like%20to%20connect%20regarding%20an%20enterprise%20growth%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_15px_rgba(37,211,102,0.15)]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Founder Desk</span>
                  </a>
                </div>
              </div>

              {/* Manish Chaudhary - Director & SEO Specialist */}
              <div className="rounded-3xl bg-[#0A0810]/95 border border-[#8B3DFF]/30 p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_-10px_rgba(139,61,255,0.2)] group hover:border-[#8B3DFF]/60 transition-all duration-300">
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#8B3DFF]/15 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#8B3DFF]/25 transition-all" />

                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {/* Director Photo with Fallback Monogram */}
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#8B3DFF]/50 flex items-center justify-center bg-gradient-to-br from-[#1F1235] to-[#0A0810] shadow-[0_0_30px_rgba(139,61,255,0.35)] shrink-0 group/photo">
                        <img
                          src="/manish-chaudhary.png"
                          alt="Manish Chaudhary - Director & SEO Specialist"
                          className="w-full h-full object-cover object-top"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentElement?.querySelector('.fallback-monogram-mc');
                            if (fallback) fallback.classList.remove('hidden');
                          }}
                        />
                        <div className="fallback-monogram-mc hidden absolute inset-0 flex items-center justify-center text-white font-['Space_Grotesk'] text-2xl font-black bg-gradient-to-br from-[#1F1235] to-[#0A0810]">
                          MC
                        </div>
                        <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-[#8B3DFF]/40 text-[8px] font-mono text-[#D7BFFF] font-bold">
                          Director
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white group-hover:text-[#D7BFFF] transition-colors">
                            Manish Chaudhary
                          </h3>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8B3DFF]/20 border border-[#8B3DFF]/40 text-[#D7BFFF] text-[11px] font-mono font-semibold mb-1.5">
                          <ShieldCheck className="w-3 h-3 text-[#B15CFF]" />
                          <span>Director &amp; SEO Specialist</span>
                        </div>
                        <div className="text-[11px] text-[#A7A3B1] flex items-center gap-1.5">
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Organic Search Architecture &amp; Technical Dominance</span>
                        </div>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#140E23] text-[#D7BFFF] border border-[#8B3DFF]/30">
                      SEO Specialist
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#C5C2CE] leading-relaxed mb-6">
                    &ldquo;Real SEO isn&apos;t just keyword stuffing or cheap backlinks. It&apos;s an architectural engineering discipline of semantic topic clusters, flawless crawlability, Core Web Vitals perfection, and unshakeable first-page search authority.&rdquo;
                  </p>

                  {/* Operational Core Pillars */}
                  <div className="mb-6 pt-4 border-t border-white/5 space-y-4">
                    {/* SEO Architecture & Algorithm Engineering */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#8B3DFF] font-bold mb-1.5 flex items-center justify-between">
                        <span>Search Engine Architecture &amp; Core Vitals</span>
                        <span className="text-emerald-400 text-[9px] font-normal">Page 1 Domination</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          'Enterprise Technical SEO & Crawl Budget Optimization',
                          'Semantic Topic Clustering & Entity Graph Engineering',
                          'Core Web Vitals & Sub-Second LCP Performance Audits',
                          'AI Search Engine Readiness (Google SGE, Perplexity, Gemini)'
                        ].map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#140E23] text-[#D7BFFF] border border-[#8B3DFF]/20 flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#8B3DFF]" />
                            <span>{spec}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link Equity & Organic Growth */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#B15CFF] font-bold mb-1.5 flex items-center justify-between">
                        <span>Organic Authority &amp; Market Penetration</span>
                        <span className="text-[#D7BFFF] text-[9px] font-normal">High-Intent Traffic</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          'High-Domain Authority Digital PR & Editorial Links',
                          'Hyper-Local Jaipur Map Pack (#1 Google Maps Pack)',
                          'Google Algorithm Core Update Immune Architecture',
                          'Zero-Click Search & Featured Snippet Takeovers'
                        ].map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#140E23] text-[#F7F5FA] border border-white/5 flex items-center gap-1.5"
                          >
                            <Sparkles className="w-3 h-3 text-[#B15CFF]" />
                            <span>{spec}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Operational Standards */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#85818E] font-bold mb-1.5">
                        Client Delivery Standards
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          '100% White-Hat Google Search Essentials Compliant',
                          'Transparent Weekly Live Keyword Ranking Dashboards',
                          'Direct Director-Level Technical Code & Schema Reviews',
                          'Fast SLA Turnaround on Algorithm Updates'
                        ].map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[#0C0816] text-[#A7A3B1] border border-white/5 flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#85818E]" />
                            <span>{spec}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-xs text-[#A7A3B1]">
                    <a
                      href="tel:+916367420500"
                      className="hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#8B3DFF]" />
                      <span>+91 63674 20500</span>
                    </a>
                  </div>

                  <button
                    onClick={() => onOpenInquiry('SEO Architecture Consultation - Manish Chaudhary')}
                    className="px-4 py-2 rounded-full bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(139,61,255,0.3)] hover:scale-105 cursor-pointer"
                  >
                    <span>Consult SEO Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Agency Milestones Timeline */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#D7BFFF] text-[10px] uppercase tracking-[0.2em] font-bold mb-3 shadow-[0_0_15px_rgba(139,61,255,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-[#B15CFF]" />
                <span>Next-Gen Trajectory (2025 &ndash; 2026)</span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white mb-3">
                Born for the Modern AI Search Revolution
              </h2>
              <p className="text-xs sm:text-sm text-[#A7A3B1] leading-relaxed">
                While legacy agencies struggle to unlearn decade-old vanity tactics, SEO IN JAIPUR was engineered from day one for Google&apos;s latest Core Updates, Generative AI answer engines, and rapid cross-border revenue scaling.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((ms, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-[#0A0810] border transition-all flex flex-col justify-between group relative overflow-hidden ${
                    ms.highlight
                      ? 'border-[#8B3DFF]/60 shadow-[0_0_30px_rgba(139,61,255,0.25)]'
                      : 'border-white/5 hover:border-[#8B3DFF]/40'
                  }`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B3DFF]/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-[#8B3DFF]/20 transition-all" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-['Space_Grotesk'] text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] to-[#D7BFFF]">
                          {ms.year}
                        </span>
                        <span className="text-[10px] font-mono text-[#A7A3B1] font-semibold">
                          {ms.period}
                        </span>
                      </div>
                      <span className="text-[9px] uppercase tracking-wider font-mono font-bold px-2 py-0.5 rounded-full bg-[#140E23] text-[#D7BFFF] border border-[#8B3DFF]/30 whitespace-nowrap">
                        {ms.tag}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[#D7BFFF] transition-colors leading-snug">
                      {ms.title}
                    </h3>
                    <p className="text-xs text-[#85818E] leading-relaxed mb-4">
                      {ms.desc}
                    </p>
                  </div>

                  <div className="mt-2 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center gap-1.5 text-[#D7BFFF]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B3DFF] shrink-0" />
                      <span className="font-semibold text-[10px]">{ms.metric}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparative Matrix: SEO In Jaipur vs Traditional Agencies */}
          <div className="mb-20 rounded-3xl bg-[#080612] border border-white/5 p-6 sm:p-10">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2">
                How We Differ From Conventional Agencies
              </h3>
              <p className="text-xs text-[#85818E]">
                Comparing strategic focus, transparency, and commercial results.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-[#85818E] font-mono uppercase tracking-wider">
                    <th className="pb-3 px-4">Evaluation Metric</th>
                    <th className="pb-3 px-4 text-white font-bold bg-[#140E23]/60 rounded-t-lg">
                      SEO IN JAIPUR
                    </th>
                    <th className="pb-3 px-4">Conventional Agencies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-[#A7A3B1]">
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">Target Focus</td>
                    <td className="py-3.5 px-4 text-[#D7BFFF] font-bold bg-[#140E23]/40">High-Intent Revenue & Pipeline</td>
                    <td className="py-3.5 px-4 text-[#85818E]">Generic Vanity Impressions</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">Account Management</td>
                    <td className="py-3.5 px-4 text-[#D7BFFF] font-bold bg-[#140E23]/40">Direct Senior Architect Access</td>
                    <td className="py-3.5 px-4 text-[#85818E]">Junior Account Coordinators</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">AI Search (GEO)</td>
                    <td className="py-3.5 px-4 text-[#D7BFFF] font-bold bg-[#140E23]/40">Active ChatGPT / Perplexity / SGE Engine</td>
                    <td className="py-3.5 px-4 text-[#85818E]">Old-school 2018 keyword stuffing</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">Reporting Transparency</td>
                    <td className="py-3.5 px-4 text-[#D7BFFF] font-bold bg-[#140E23]/40">Real-Time Telemetry & GA4 Sync</td>
                    <td className="py-3.5 px-4 text-[#85818E]">Opaque monthly static PDF decks</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">Client Retention</td>
                    <td className="py-3.5 px-4 text-[#D7BFFF] font-bold bg-[#140E23]/40">96.8% Annual Contract Renewal</td>
                    <td className="py-3.5 px-4 text-[#85818E]">40–50% typical industry churn</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Action Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#140E23] via-[#0A0810] to-[#140E23] border border-[#8B3DFF]/30 text-center flex flex-col items-center shadow-[0_0_50px_rgba(139,61,255,0.2)]">
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to Accelerate Your Category Leadership?
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A3B1] max-w-xl mb-6">
              Connect directly with our senior strategy team to audit your current search architecture and map out a bespoke 6-month growth plan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onOpenInquiry('Executive Growth Consultation')}
                className="px-8 py-3.5 bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-[0_0_20px_rgba(139,61,255,0.4)] hover:scale-105 cursor-pointer"
              >
                Schedule Executive Briefing
              </button>
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#120B20] hover:bg-[#1A1030] border border-white/10 text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all cursor-pointer"
              >
                Explore Services
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
