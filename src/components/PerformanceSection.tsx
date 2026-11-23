import React from 'react';
import { Search, MousePointerClick, BarChart3, Smartphone } from 'lucide-react';

interface PerformanceSectionProps {
  onOpenCaseStudies: () => void;
}

const focusAreas = [
  {
    icon: Search,
    title: 'Search visibility',
    description: 'Track the queries, pages, impressions and clicks that show how people discover your business.',
  },
  {
    icon: MousePointerClick,
    title: 'Genuine enquiries',
    description: 'Separate contact intent such as WhatsApp and phone clicks from confirmed enquiries and customers.',
  },
  {
    icon: BarChart3,
    title: 'Campaign measurement',
    description: 'Review Google Ads and Meta Ads against the goals, budget and lead quality that matter to your business.',
  },
  {
    icon: Smartphone,
    title: 'Website experience',
    description: 'Check mobile usability, page speed, clear service information and simple ways to get in touch.',
  },
];

export const PerformanceSection: React.FC<PerformanceSectionProps> = ({ onOpenCaseStudies }) => (
  <section className="relative py-20 lg:py-28 overflow-hidden" aria-labelledby="performance-heading">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#B15CFF] font-bold mb-4">Measurement & Reporting</p>
        <h2 id="performance-heading" className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
          Measure progress, not promises.
        </h2>
        <p className="text-[#A7A3B1] text-base leading-relaxed">
          We report the data that is actually available and explain what it means. No invented client results, guaranteed rankings or inflated performance claims.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {focusAreas.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-2xl bg-[#0A0810]/90 border border-white/10 p-6 hover:border-[#8B3DFF]/50 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-[#8B3DFF]/15 border border-[#8B3DFF]/30 flex items-center justify-center text-[#D7BFFF] mb-5">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-[#A7A3B1] leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-[#8B3DFF]/25 bg-[#10091B] p-6">
        <p className="text-sm text-[#C5C2CE]">Every project starts with a baseline. Results depend on the market, website, budget and implementation.</p>
        <button onClick={onOpenCaseStudies} className="shrink-0 px-5 py-3 rounded-full bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-sm font-semibold transition-colors">
          Discuss your goals
        </button>
      </div>
    </div>
  </section>
);
