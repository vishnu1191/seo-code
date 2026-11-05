import React from 'react';
import { Hero } from '../components/Hero';

const AboutSection = React.lazy(() => import('../components/AboutSection').then((module) => ({ default: module.AboutSection })));
const ServicesSection = React.lazy(() => import('../components/ServicesSection').then((module) => ({ default: module.ServicesSection })));
const ProcessSection = React.lazy(() => import('../components/ProcessSection').then((module) => ({ default: module.ProcessSection })));
const GrowthCalculator = React.lazy(() => import('../components/GrowthCalculator').then((module) => ({ default: module.GrowthCalculator })));
const FAQSection = React.lazy(() => import('../components/FAQSection').then((module) => ({ default: module.FAQSection })));
const CTASection = React.lazy(() => import('../components/CTASection').then((module) => ({ default: module.CTASection })));

interface HomePageProps {
  onOpenInquiry: (initialService?: string) => void;
  onOpenShowreel: () => void;
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenInquiry, onOpenShowreel, onNavigate }) => (
  <div className="flex flex-col">
    <Hero onOpenInquiry={() => onOpenInquiry('SEO, Google Ads or Meta Ads')} onOpenShowreel={onOpenShowreel} />
    <React.Suspense fallback={<div className="min-h-[300px]" aria-hidden="true" />}>
      <section className="relative">
        <AboutSection onOpenInquiry={() => onOpenInquiry('Digital Marketing Consultation')} onExploreApproach={() => onNavigate('process')} />
      </section>
      <section className="relative">
        <ServicesSection onSelectService={(serviceTitle) => onOpenInquiry(serviceTitle)} />
        <div className="flex justify-center pb-12 -mt-6 relative z-20">
          <button onClick={() => { onNavigate('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all cursor-pointer">
            Explore All Services
          </button>
        </div>
      </section>
      <section className="relative">
        <ProcessSection />
        <div className="flex justify-center pb-12 -mt-6 relative z-20">
          <button onClick={() => { onNavigate('process'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold transition-all cursor-pointer">
            See Our Working Process
          </button>
        </div>
      </section>
      <section className="relative">
        <GrowthCalculator onOpenInquiry={(planDetails) => onOpenInquiry(planDetails)} />
      </section>
      <FAQSection />
      <CTASection onOpenInquiry={(intent) => onOpenInquiry(intent)} />
    </React.Suspense>
  </div>
);
