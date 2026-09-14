/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PerformancePage } from './pages/PerformancePage';
import { WorkPage } from './pages/WorkPage';
import { ProcessPage } from './pages/ProcessPage';
import { RoiEnginePage } from './pages/RoiEnginePage';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ShowreelModal } from './components/ShowreelModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CaseStudy } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryInitialService, setInquiryInitialService] = useState<string>('');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);

  // Clean HTML5 History API path-based navigation (removes '#/' and uses clean URLs like /about/, /services/)
  useEffect(() => {
    const handleLocationChange = () => {
      // If legacy or stray hash exists (e.g. #/ or #/about), automatically clean it up
      if (window.location.hash) {
        const hashTarget = window.location.hash.replace('#/', '').replace('#', '').trim();
        const validPages = ['home', 'about', 'services', 'performance', 'work', 'process', 'calculator'];
        if (hashTarget && validPages.includes(hashTarget)) {
          const cleanPath = hashTarget === 'home' ? '/' : `/${hashTarget}/`;
          window.history.replaceState({ page: hashTarget }, '', cleanPath);
          setCurrentPage(hashTarget);
          return;
        } else {
          window.history.replaceState(null, '', window.location.pathname || '/');
        }
      }

      // Parse clean pathname (e.g., '/', '/about/', '/services/')
      const normalizedPath = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
      const validPages = ['home', 'about', 'services', 'performance', 'work', 'process', 'calculator'];
      if (validPages.includes(normalizedPath)) {
        setCurrentPage(normalizedPath);
      } else {
        setCurrentPage('home');
      }
    };

    // Initial check on load
    handleLocationChange();

    // Listen for browser forward/backward navigation
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    const cleanPath = page === 'home' ? '/' : `/${page}/`;
    if (window.location.pathname !== cleanPath || window.location.hash) {
      window.history.pushState({ page }, '', cleanPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (initialService: string = '') => {
    setInquiryInitialService(initialService);
    setInquiryModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050508] text-[#F7F5FA] selection:bg-[#8B3DFF]/30 selection:text-[#F7F5FA] flex flex-col justify-between">
      {/* Layered Background Canvas & Ambient Atmospheric Lighting */}
      <BackgroundEffects />

      {/* Sticky Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Multi-Page Routed View Container */}
      <main className="relative z-10 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentPage === 'home' && (
              <HomePage
                onOpenInquiry={handleOpenInquiry}
                onOpenShowreel={() => setShowreelOpen(true)}
                onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
                onNavigate={navigateTo}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onOpenInquiry={handleOpenInquiry}
                onNavigate={navigateTo}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onOpenInquiry={handleOpenInquiry}
                onNavigate={navigateTo}
              />
            )}

            {currentPage === 'performance' && (
              <PerformancePage
                onOpenInquiry={handleOpenInquiry}
                onNavigate={navigateTo}
              />
            )}

            {currentPage === 'work' && (
              <WorkPage
                onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
                onOpenInquiry={handleOpenInquiry}
                onNavigate={navigateTo}
              />
            )}

            {currentPage === 'process' && (
              <ProcessPage
                onOpenInquiry={handleOpenInquiry}
                onNavigate={navigateTo}
              />
            )}

            {currentPage === 'calculator' && (
              <RoiEnginePage
                onOpenInquiry={handleOpenInquiry}
                onNavigate={navigateTo}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Multi-Column Professional Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenInquiry={(service) => handleOpenInquiry(service)}
      />

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
