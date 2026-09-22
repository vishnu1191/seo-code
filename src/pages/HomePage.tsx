import React from 'react';
import {
  ArrowRight,
  TrendingUp,
  Compass,
  Target,
  BarChart3,
  Layers,
  ShieldCheck,
  Zap,
} from 'lucide-react';

import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';

const AboutSection = React.lazy(() =>
  import('../components/AboutSection').then((module) => ({
    default: module.AboutSection,
  }))
);

const ServicesSection = React.lazy(() =>
  import('../components/ServicesSection').then((module) => ({
    default: module.ServicesSection,
  }))
);

const PerformanceSection = React.lazy(() =>
  import('../components/PerformanceSection').then((module) => ({
    default: module.PerformanceSection,
  }))
);

const CaseStudiesSection = React.lazy(() =>
  import('../components/CaseStudiesSection').then((module) => ({
    default: module.CaseStudiesSection,
  }))
);

const ProcessSection = React.lazy(() =>
  import('../components/ProcessSection').then((module) => ({
    default: module.ProcessSection,
  }))
);

const GrowthCalculator = React.lazy(() =>
  import('../components/GrowthCalculator').then((module) => ({
    default: module.GrowthCalculator,
  }))
);

const TestimonialsSection = React.lazy(() =>
  import('../components/TestimonialsSection').then((module) => ({
    default: module.TestimonialsSection,
  }))
);

const FAQSection = React.lazy(() =>
  import('../components/FAQSection').then((module) => ({
    default: module.FAQSection,
  }))
);

const CTASection = React.lazy(() =>
  import('../components/CTASection').then((module) => ({
    default: module.CTASection,
  }))
);

import { CaseStudy } from '../types';

interface HomePageProps {
  onOpenInquiry: (initialService?: string) => void;
  onOpenShowreel: () => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenInquiry,
  onOpenShowreel,
  onSelectCaseStudy,
  onNavigate,
}) => {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <Hero
        onOpenInquiry={() => onOpenInquiry('Enterprise Growth Retainer')}
        onOpenShowreel={onOpenShowreel}
      />

      {/* Statistics Strip */}
      <StatsStrip />

      <React.Suspense
        fallback={
          <div
            className="min-h-[300px]"
            aria-hidden="true"
          />
        }
      >

        {/* About Section */}
        <section>
          <div className="relative">
            <AboutSection
              onOpenInquiry={() =>
                onOpenInquiry('Strategic Partnership')
              }
              onExploreApproach={() => onNavigate('process')}
            />

            <div className="flex justify-center pb-12 -mt-8 relative z-20">
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
                className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,61,255,0.2)] cursor-pointer"
              >
                <span>
                  Read Complete About Us & Leadership Story
                </span>

                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section>
          <div className="relative">
            <ServicesSection
              onSelectService={(serviceTitle) =>
                onOpenInquiry(serviceTitle)
              }
            />

            <div className="flex justify-center pb-12 -mt-6 relative z-20">
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
                className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,61,255,0.2)] cursor-pointer"
              >
                <span>
                  Explore All 18 Digital Marketing Services & Architecture
                </span>

                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section>
          <div className="relative">
            <PerformanceSection
              onOpenCaseStudies={() => {
                onNavigate('work');
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            />

            <div className="flex justify-center pb-12 -mt-6 relative z-20">
              <button
                onClick={() => {
                  onNavigate('performance');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
                className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,61,255,0.2)] cursor-pointer"
              >
                <span>
                  Launch Complete Telemetry & Live SERP Tracker
                </span>

                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section>
          <div className="relative">
            <CaseStudiesSection
              onSelectCaseStudy={onSelectCaseStudy}
            />

            <div className="flex justify-center pb-12 -mt-6 relative z-20">
              <button
                onClick={() => {
                  onNavigate('work');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
                className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,61,255,0.2)] cursor-pointer"
              >
                <span>
                  Explore All 20+ Enterprise Case Studies
                </span>

                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section>
          <div className="relative">
            <ProcessSection />

            <div className="flex justify-center pb-12 -mt-6 relative z-20">
              <button
                onClick={() => {
                  onNavigate('process');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
                className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,61,255,0.2)] cursor-pointer"
              >
                <span>
                  Inspect Full 4-Phase Execution Roadmap & Deliverables
                </span>

                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Growth Calculator */}
        <section>
          <div className="relative">
            <GrowthCalculator
              onOpenInquiry={(planDetails) =>
                onOpenInquiry(planDetails)
              }
            />

            <div className="flex justify-center pb-12 -mt-6 relative z-20">
              <button
                onClick={() => {
                  onNavigate('calculator');
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
                className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,61,255,0.2)] cursor-pointer"
              >
                <span>
                  Open Dedicated ROI Modeler & Scenario Generator
                </span>

                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <TestimonialsSection />
        </section>

        {/* FAQ */}
        <section>
          <FAQSection />
        </section>

        {/* Final CTA */}
        <section>
          <CTASection
            onOpenInquiry={(intent) =>
              onOpenInquiry(intent)
            }
          />
        </section>

      </React.Suspense>
    </div>
  );
};
