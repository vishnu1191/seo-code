import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Compass, Target, BarChart3, Layers, ShieldCheck, Zap } from 'lucide-react';
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { PerformanceSection } from '../components/PerformanceSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { ProcessSection } from '../components/ProcessSection';
import { GrowthCalculator } from '../components/GrowthCalculator';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';
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
      {/* 1. Hero Section */}
      <Hero
        onOpenInquiry={() => onOpenInquiry('Enterprise Growth Retainer')}
        onOpenShowreel={onOpenShowreel}
      />

      {/* 2. Floating Statistics Strip */}
      <StatsStrip />

      {/* Quick Navigation Cards Bar */}
      <section className="relative py-6 bg-[#07050E] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {[
              { id: 'about', label: 'About Us', desc: 'Our Mission & Team', icon: Compass },
              { id: 'services', label: 'Services', desc: '6 Core Practices', icon: Target },
              { id: 'performance', label: 'Performance', desc: 'Telemetry & SERP', icon: BarChart3 },
              { id: 'work', label: 'Work & Portfolio', desc: '20+ Case Studies', icon: Layers },
              { id: 'process', label: '4-Phase Process', desc: 'Growth Roadmap', icon: ShieldCheck },
              { id: 'calculator', label: 'ROI Engine', desc: 'Pipeline Modeler', icon: Zap },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex flex-col items-start p-3 sm:p-3.5 rounded-xl bg-[#0C0A15] hover:bg-[#150F25] border border-white/5 hover:border-[#8B3DFF]/40 transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <Icon className="w-4 h-4 text-[#8B3DFF] group-hover:text-[#D7BFFF] transition-colors" />
                    <ArrowRight className="w-3 h-3 text-[#85818E] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-white group-hover:text-[#D7BFFF] transition-colors">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-[#85818E] truncate w-full">
                    {item.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. About Section Preview with page navigation trigger */}
      <div className="relative">
        <AboutSection
          onOpenInquiry={() => onOpenInquiry('Strategic Partnership')}
          onExploreApproach={() => onNavigate('process')}
        />
        <div className="flex justify-center pb-12 -mt-8 relative z-20">
          <button
            onClick={() => {
              onNavigate('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,61,255,0.2)] cursor-pointer"
          >
            <span>Read Complete About Us & Leadership Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4. Core Services & Practices with page navigation trigger */}
      <div className="relative">
        <ServicesSection
          onSelectService={(serviceTitle) => onOpenInquiry(serviceTitle)}
        />
        <div className="flex justify-center pb-12 -mt-6 relative z-20">
          <button
            onClick={() => {
              onNavigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,61,255,0.2)] cursor-pointer"
          >
            <span>View All Detailed Services, Tech Stacks & Packages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 5. Performance & Telemetry Visualizations with page navigation trigger */}
      <div className="relative">
        <PerformanceSection
          onOpenCaseStudies={() => {
            onNavigate('work');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
        <div className="flex justify-center pb-12 -mt-6 relative z-20">
          <button
            onClick={() => {
              onNavigate('performance');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,61,255,0.2)] cursor-pointer"
          >
            <span>Launch Complete Telemetry & Live SERP Tracker</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 6. Featured Case Studies with page navigation trigger */}
      <div className="relative">
        <CaseStudiesSection
          onSelectCaseStudy={onSelectCaseStudy}
        />
        <div className="flex justify-center pb-12 -mt-6 relative z-20">
          <button
            onClick={() => {
              onNavigate('work');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,61,255,0.2)] cursor-pointer"
          >
            <span>Explore All 20+ Enterprise Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 7. Strategic 4-Phase Process with page navigation trigger */}
      <div className="relative">
        <ProcessSection />
        <div className="flex justify-center pb-12 -mt-6 relative z-20">
          <button
            onClick={() => {
              onNavigate('process');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,61,255,0.2)] cursor-pointer"
          >
            <span>Inspect Full 4-Phase Execution Roadmap & Deliverables</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 8. Interactive Growth & ROI Engine with page navigation trigger */}
      <div className="relative">
        <GrowthCalculator
          onOpenInquiry={(planDetails) => onOpenInquiry(planDetails)}
        />
        <div className="flex justify-center pb-12 -mt-6 relative z-20">
          <button
            onClick={() => {
              onNavigate('calculator');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full bg-[#120B20] hover:bg-[#1A1030] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,61,255,0.2)] cursor-pointer"
          >
            <span>Open Dedicated ROI Modeler & Scenario Generator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 9. Executive Testimonials & Social Proof */}
      <TestimonialsSection />

      {/* 10. Frequently Addressed Questions */}
      <FAQSection />

      {/* 11. Final High-Impact Climax CTA Banner */}
      <CTASection
        onOpenInquiry={(intent) => onOpenInquiry(intent)}
      />
    </div>
  );
};
