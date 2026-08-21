/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PerformanceSection } from './components/PerformanceSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ProcessSection } from './components/ProcessSection';
import { GrowthCalculator } from './components/GrowthCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ShowreelModal } from './components/ShowreelModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CaseStudy } from './types';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryInitialService, setInquiryInitialService] = useState<string>('');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);

  const handleOpenInquiry = (initialService: string = '') => {
    setInquiryInitialService(initialService);
    setInquiryModalOpen(true);
  };

  const handleExploreApproach = () => {
    const processEl = document.getElementById('process');
    if (processEl) {
      processEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCaseStudies = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050508] text-[#F7F5FA] selection:bg-[#8B3DFF]/30 selection:text-[#F7F5FA]">
      {/* Layered Background Canvas & Ambient Atmospheric Lighting */}
      <BackgroundEffects />

      {/* Sticky Top Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Page Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry('Enterprise Growth Retainer')}
          onOpenShowreel={() => setShowreelOpen(true)}
        />

        {/* 2. Floating Statistics Strip */}
        <StatsStrip />

        {/* 3. About Section */}
        <AboutSection
          onOpenInquiry={() => handleOpenInquiry('Strategic Partnership')}
          onExploreApproach={handleExploreApproach}
        />

        {/* 4. Core Services & Practices */}
        <ServicesSection
          onSelectService={(serviceTitle) => handleOpenInquiry(serviceTitle)}
        />

        {/* 5. Performance & Telemetry Visualizations */}
        <PerformanceSection
          onOpenCaseStudies={handleOpenCaseStudies}
        />

        {/* 6. Featured Case Studies */}
        <CaseStudiesSection
          onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
        />

        {/* 7. Strategic 4-Phase Process */}
        <ProcessSection />

        {/* 8. Interactive Growth & ROI Engine */}
        <GrowthCalculator
          onOpenInquiry={(planDetails) => handleOpenInquiry(planDetails)}
        />

        {/* 9. Executive Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* 10. Frequently Addressed Questions */}
        <FAQSection />

        {/* 11. Final High-Impact Climax CTA Banner */}
        <CTASection
          onOpenInquiry={(intent) => handleOpenInquiry(intent)}
        />
      </main>

      {/* Multi-Column Professional Footer */}
      <Footer onOpenInquiry={(service) => handleOpenInquiry(service)} />

      {/* Interactive Modals */}
      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialService={inquiryInitialService}
      />

      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenInquiry={(service) => handleOpenInquiry(service)}
      />

      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        onOpenInquiry={() => handleOpenInquiry('Brand Showreel Inquiry')}
      />

      {/* Direct WhatsApp Quick-Chat Desk */}
      <FloatingWhatsApp />
    </div>
  );
}

