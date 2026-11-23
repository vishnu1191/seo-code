import React from 'react';
import { ClipboardCheck, ArrowUpRight } from 'lucide-react';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (study: any) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = () => (
  <section id="work" className="relative py-20 lg:py-28 overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-[#8B3DFF]/25 bg-gradient-to-br from-[#10091B] via-[#080612] to-[#0A0810] p-8 sm:p-12 text-center">
        <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#8B3DFF]/15 border border-[#8B3DFF]/30 flex items-center justify-center text-[#D7BFFF]">
          <ClipboardCheck className="w-6 h-6" aria-hidden="true" />
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#B15CFF] font-bold mb-3">Portfolio & Case Studies</p>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white mb-4">Real work. Verifiable details.</h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#A7A3B1] leading-relaxed mb-7">
          We are preparing project examples that can be shared and verified. We will publish client names, testimonials and performance figures only when we have permission and supporting evidence.
        </p>
        <a href="/work/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-sm font-semibold transition-colors">
          View portfolio status <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);
