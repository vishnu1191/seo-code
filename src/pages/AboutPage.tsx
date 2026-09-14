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
  FileCheck
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
      year: '2020',
      title: 'Foundation in Jaipur',
      desc: 'Established with a core mission: replacing outdated agency retainer fluff with quantitative, code-level search engineering.',
    },
    {
      year: '2022',
      title: 'Real Estate & Luxury Breakthrough',
      desc: 'Delivered ₹100 Cr+ in tracked property transactions across Jaipur, Delhi NCR, and Mumbai luxury residential developments.',
    },
    {
      year: '2024',
      title: 'Global Delivery Network Expansion',
      desc: 'Expanded search operations to Dubai, London, and Singapore enterprise accounts while retaining 96%+ client renewal rates.',
    },
    {
      year: '2026',
      title: '₹450 Cr+ Direct Transaction Benchmark',
      desc: 'Pioneered Generative Engine Optimization (GEO) and AI search integrations across 280+ active brand deployments.',
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

          {/* Agency Milestones Timeline */}
          <div className="mb-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-mono font-bold text-[#8B3DFF] uppercase tracking-widest mb-2">
                Proven Track Record
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white mb-3">
                Agency Evolution & Milestones
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((ms, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0A0810] border border-white/5 hover:border-[#8B3DFF]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="font-['Space_Grotesk'] text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] to-[#D7BFFF] mb-2">
                      {ms.year}
                    </div>
                    <div className="text-sm font-bold text-white mb-2">
                      {ms.title}
                    </div>
                    <p className="text-xs text-[#85818E] leading-relaxed">
                      {ms.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-1 text-[10px] text-[#8B3DFF] font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Milestone</span>
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
