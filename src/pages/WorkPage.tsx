import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface WorkPageProps {
  onSelectCaseStudy: (study: any) => void;
  onOpenInquiry: (service?: string) => void;
  onNavigate: (page: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onOpenInquiry, onNavigate }) => (
  <div className="flex flex-col min-h-screen bg-[#050508]">
    <Breadcrumbs currentPage="work" onNavigate={onNavigate} />
    <section className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#B15CFF] font-bold mb-4">Portfolio</p>
        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold text-white mb-6">Real work. Clearly documented.</h1>
        <p className="text-[#A7A3B1] text-base leading-relaxed mb-8">
          We are preparing this portfolio page with project details that can be shared and verified. Until then, we will not publish invented client names, testimonials or performance results.
        </p>
        <button onClick={() => onOpenInquiry('SEO, Google Ads or Meta Ads')} className="px-7 py-3 rounded-full bg-[#8B3DFF] text-white font-semibold text-sm">
          Discuss Your Business Goals
        </button>
      </div>
    </section>
  </div>
);
