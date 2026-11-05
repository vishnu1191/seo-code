import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface PerformancePageProps {
  onOpenInquiry: (service?: string) => void;
  onNavigate: (page: string) => void;
}

export const PerformancePage: React.FC<PerformancePageProps> = ({ onOpenInquiry, onNavigate }) => (
  <div className="flex flex-col min-h-screen bg-[#050508]">
    <Breadcrumbs currentPage="performance" onNavigate={onNavigate} />
    <section className="py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#B15CFF] font-bold mb-4">Measurement & Reporting</p>
        <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold text-white mb-6">Measure what matters to your business.</h1>
        <p className="text-[#A7A3B1] text-base leading-relaxed mb-8">
          We use relevant measures such as search visibility, website enquiries, calls, WhatsApp clicks and advertising conversions. Reporting is based on the connected analytics and advertising data available for each project; we do not publish sample figures as client results.
        </p>
        <button onClick={() => onOpenInquiry('Analytics and conversion tracking')} className="px-7 py-3 rounded-full bg-[#8B3DFF] text-white font-semibold text-sm">
          Ask About Tracking & Reporting
        </button>
      </div>
    </section>
  </div>
);
