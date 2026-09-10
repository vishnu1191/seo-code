import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Cpu, 
  Layers, 
  TrendingUp, 
  Clock, 
  MessageSquare, 
  Activity, 
  Calendar 
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ProcessPageProps {
  onOpenInquiry: (service?: string) => void;
  onNavigate: (page: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenInquiry, onNavigate }) => {
  const phases = [
    {
      num: '01',
      title: 'Forensic Discovery & Technical Search Audit',
      timeframe: 'Days 1 to 14',
      badge: 'Audit & Diagnostic',
      summary: 'Before writing a single line of copy or optimizing metadata, we execute code-level forensic inspections across your entire domain.',
      deliverables: [
        'Crawl Budget & Server Response Time Diagnostics (TTFB < 200ms)',
        'Core Web Vitals Remediation (LCP, INP, and CLS scores to green)',
        'Competitor SERP Vulnerability & Keyword Keyword Gap Mapping',
        'Semantic Entity Knowledge Graph Discrepancy Audits',
        'Google Search Console & GA4 Server-Side Attribution Setup',
        'Historical Penalty & Bad Backlink Disavow Scrubbing'
      ],
      outcome: 'Clean, fully indexable technical foundation ready for algorithmic acceleration.'
    },
    {
      num: '02',
      title: 'Entity Architecture & Semantic Vector Content',
      timeframe: 'Days 15 to 30',
      badge: 'Semantic Blueprint',
      summary: 'We build high-intent semantic topic clusters designed to capture total contextual authority over your core market niches.',
      deliverables: [
        'Programmatic Entity & Semantic Topic Cluster Mapping',
        'High-Intent Commercial Search Term Prioritization',
        'Generative Engine Optimization (GEO) for ChatGPT & Perplexity',
        'Deep Schema.org JSON-LD Hierarchy & Rich Snippet Code',
        'Sub-Second Conversion Landing Pages & WhatsApp Lead Gates',
        'Faceted Navigation & Catalog Indexing Optimization'
      ],
      outcome: 'Unrivaled topical depth that forces search engines to recognize your domain as the primary source.'
    },
    {
      num: '03',
      title: 'Authority Engineering & High-Impact Digital PR',
      timeframe: 'Days 31 to 60',
      badge: 'Link Moats & Trust',
      summary: 'We build defensible backlink moats through tier-1 editorial placements, data-driven industry studies, and authoritative PR assets.',
      deliverables: [
        'High-Authority Tier-1 Editorial Backlink Placements',
        'Original Industry Data Studies & PR Citation Magnets',
        'Hyper-Local Citation & Geo-Targeted Business Networks',
        'Unlinked Brand Mention & Digital Asset Reclamation',
        'Authoritative Podcasts & Executive Guest Publications',
        'Internal PageRank Vector Sculpting & Link Equity Flow'
      ],
      outcome: 'Exponential domain authority growth that outranks established legacy competitors.'
    },
    {
      num: '04',
      title: 'Continuous CRO, AI Overviews & Compounding Scale',
      timeframe: 'Day 61 and Beyond',
      badge: 'Revenue Scaling',
      summary: 'Search rankings are converted into compounding pipeline value through behavioral heatmaps, A/B landing funnels, and AI Overviews tracking.',
      deliverables: [
        'Behavioral Heatmap & Session Recording Conversion Analysis',
        'A/B Multivariate Headline, Offer & Call-to-Action Testing',
        'Google AI Overviews (SGE) Inclusion Tracking & Defense',
        'Multi-Channel Search Retargeting & Performance Max Funnels',
        'Weekly Search Console Trajectory Reviews & Algorithm Fortification',
        'Dedicated Senior Architect Sprints & Revenue Optimization'
      ],
      outcome: 'Predictable, compounding pipeline velocity and undeniable category dominance.'
    }
  ];

  const milestonesTimeline = [
    {
      day: 'Day 30',
      title: 'Technical Perfection & Initial SERP Movement',
      desc: 'All critical site errors resolved, core entity schemas live, indexation velocity accelerated.'
    },
    {
      day: 'Day 60',
      title: 'Top 10 Rankings & Qualified Inbound Surge',
      desc: 'High-intent commercial terms entering first page; noticeable increase in direct phone calls & leads.'
    },
    {
      day: 'Day 90',
      title: 'SERP 1 Dominance & Conversion Optimization',
      desc: 'Primary target keywords securing positions #1 to #3; conversion funnels operating at peak efficiency.'
    },
    {
      day: 'Day 180+',
      title: 'Defensible Category Leadership & Compounding Pipeline',
      desc: 'AI search engine citations secured; sustained multi-crore organic revenue pipeline.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#050508]">
      <Breadcrumbs currentPage="process" onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#8B3DFF]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#D7BFFF] text-xs uppercase tracking-[0.2em] font-bold mb-6 shadow-[0_0_15px_rgba(139,61,255,0.2)]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B15CFF]" />
              <span>Scientific Growth Framework</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              The 4-Phase Growth{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] via-[#B15CFF] to-[#D7BFFF]">
                Architecture
              </span>
            </h1>

            <p className="text-[#A7A3B1] text-base sm:text-lg leading-relaxed mb-8">
              A disciplined, quantitative execution methodology designed to eliminate ad spend waste, capture high-intent search real estate, and engineer compounding market leadership.
            </p>

            <button
              onClick={() => onOpenInquiry('Growth Process Consultation')}
              className="px-8 py-3.5 bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-[0_0_20px_rgba(139,61,255,0.4)] hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              <span>Initiate Phase 01 Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 Phases Stack */}
          <div className="space-y-8 mb-24">
            {phases.map((phase) => (
              <div
                key={phase.num}
                className="rounded-3xl bg-[#0A0810]/90 backdrop-blur-xl border border-white/5 hover:border-[#8B3DFF]/50 p-6 sm:p-10 transition-all duration-300 relative overflow-hidden group shadow-xl"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B3DFF]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#8B3DFF]/20 transition-all" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Metadata Column */}
                  <div className="lg:col-span-4 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-3xl font-black text-[#8B3DFF]">
                          Phase {phase.num}
                        </span>
                        <span className="text-[10px] uppercase font-mono font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-[#140E23] text-[#D7BFFF] border border-[#8B3DFF]/30">
                          {phase.timeframe}
                        </span>
                      </div>

                      <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-3">
                        {phase.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-[#A7A3B1] leading-relaxed mb-6">
                        {phase.summary}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07050E] border border-white/5 text-xs text-[#C5C2CE]">
                      <strong className="text-white block font-mono text-[10px] uppercase mb-1">
                        Expected Phase Outcome:
                      </strong>
                      {phase.outcome}
                    </div>
                  </div>

                  {/* Right Deliverables Column */}
                  <div className="lg:col-span-8 bg-[#080612] rounded-2xl p-6 border border-white/5">
                    <div className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#8B3DFF]" />
                      <span>Granular Execution Deliverables</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {phase.deliverables.map((del, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0F0B1C] border border-white/5 text-xs text-[#C5C2CE]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#8B3DFF] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Milestones Section */}
          <div className="mb-24 rounded-3xl bg-[#080612] border border-white/5 p-8 sm:p-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-mono font-bold text-[#8B3DFF] uppercase tracking-widest mb-2">
                Predictable Trajectory
              </div>
              <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-white mb-3">
                What You Experience in the First 180 Days
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A3B1]">
                Clear transparency at every step of your search acceleration lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestonesTimeline.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0A0810] border border-white/5 hover:border-[#8B3DFF]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-block text-xs font-mono font-bold text-[#8B3DFF] bg-[#140E23] px-3 py-1 rounded-full mb-3 border border-[#8B3DFF]/20">
                      {item.day}
                    </div>
                    <div className="text-sm font-bold text-white mb-2">
                      {item.title}
                    </div>
                    <p className="text-xs text-[#85818E] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>SLA Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Communication & Reporting SLA Guarantee */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0A0810] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#140E23] text-[#8B3DFF] flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Live Slack / WhatsApp Desk</h4>
              <p className="text-xs text-[#85818E]">
                Direct daily communication with senior search architects. Zero bureaucratic support tickets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0810] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#140E23] text-[#8B3DFF] flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Live 24/7 Looker Telemetry</h4>
              <p className="text-xs text-[#85818E]">
                Always-on dashboard syncing GA4, Google Search Console, and ad networks in real-time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0810] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#140E23] text-[#8B3DFF] flex items-center justify-center mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Bi-Weekly Strategy Sprints</h4>
              <p className="text-xs text-[#85818E]">
                30-minute structured reviews analyzing keyword movements, SERP changes, and revenue pipeline.
              </p>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#140E23] via-[#0A0810] to-[#140E23] border border-[#8B3DFF]/30 text-center flex flex-col items-center shadow-[0_0_50px_rgba(139,61,255,0.2)]">
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to Kick Off Phase 01 with Our Senior Team?
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A3B1] max-w-xl mb-6">
              Lock in your discovery sprint. We limit active client onboarding to maintain our stringent engineering standards.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onOpenInquiry('Sprint Kickoff')}
                className="px-8 py-3.5 bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-[0_0_20px_rgba(139,61,255,0.4)] hover:scale-105 cursor-pointer"
              >
                Schedule Phase 01 Discovery Sprint
              </button>
              <button
                onClick={() => {
                  onNavigate('calculator');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#120B20] hover:bg-[#1A1030] border border-white/10 text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all cursor-pointer"
              >
                Model Projected ROI
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
