/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CaseStudy } from './types';
import { initGlobalAnalytics } from './utils/analytics';

const AboutPage = React.lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ServicesPage = React.lazy(() =>
  import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const PerformancePage = React.lazy(() =>
  import('./pages/PerformancePage').then((m) => ({ default: m.PerformancePage }))
);
const WorkPage = React.lazy(() =>
  import('./pages/WorkPage').then((m) => ({ default: m.WorkPage }))
);
const ProcessPage = React.lazy(() =>
  import('./pages/ProcessPage').then((m) => ({ default: m.ProcessPage }))
);
const RoiEnginePage = React.lazy(() =>
  import('./pages/RoiEnginePage').then((m) => ({ default: m.RoiEnginePage }))
);
const BlogPage = React.lazy(() =>
  import('./pages/BlogPage').then((m) => ({ default: m.BlogPage }))
);
const BlogPostPage = React.lazy(() =>
  import('./pages/BlogPostPage').then((m) => ({ default: m.BlogPostPage }))
);

const ProjectInquiryModal = React.lazy(() =>
  import('./components/ProjectInquiryModal').then((m) => ({
    default: m.ProjectInquiryModal,
  }))
);
const CaseStudyModal = React.lazy(() =>
  import('./components/CaseStudyModal').then((m) => ({
    default: m.CaseStudyModal,
  }))
);
const ShowreelModal = React.lazy(() =>
  import('./components/ShowreelModal').then((m) => ({
    default: m.ShowreelModal,
  }))
);
const AIAssistant = React.lazy(() =>
  import('./components/AIAssistant').then((m) => ({
    default: m.AIAssistant,
  }))
);

function detectVisitorRegion(): 'india' | 'international' {
  if (typeof window === 'undefined') return 'india';
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (/Asia\/(Kolkata|Calcutta)/i.test(tz)) return 'india';
    const lang = (navigator.language || '').toLowerCase();
    if (lang === 'hi' || lang === 'hi-in' || lang === 'en-in') return 'india';
    if (tz) return 'international';
  } catch {
    // Ignore errors
  }
  return 'india';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryInitialService, setInquiryInitialService] = useState<string>('');
  const [inquiryInitialRegion, setInquiryInitialRegion] = useState<'india' | 'international'>(() => detectVisitorRegion());
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);

  // Initialize GA4 link tracker for WhatsApp (wa.me), Phone (tel:), and Social links
  useEffect(() => {
    const cleanupAnalytics = initGlobalAnalytics();
    return () => {
      cleanupAnalytics();
    };
  }, []);

  // Clean HTML5 History API path-based navigation (removes '#/' and uses clean URLs like /about/, /services/)
  useEffect(() => {
    const handleLocationChange = () => {
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

      const normalizedPath = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
      const validPages = ['home', 'about', 'services', 'performance', 'work', 'process', 'calculator', 'blog'];
      if (validPages.includes(normalizedPath)) {
        setCurrentPage(normalizedPath);
      } else if (normalizedPath.startsWith('blog/')) {
        const slug = normalizedPath.slice('blog/'.length).replace(/\/$/, '');
        setCurrentPage(slug ? `blogpost:${slug}` : 'blog');
      } else {
        setCurrentPage('home');
      }
    };

    handleLocationChange();
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

  const handleOpenInquiry = (
    initialService: string = '',
    region?: 'india' | 'international'
  ) => {
    setInquiryInitialService(initialService);
    setInquiryInitialRegion(region ?? detectVisitorRegion());
    setInquiryModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050508] text-[#F7F5FA] selection:bg-[#8B3DFF]/30 selection:text-[#F7F5FA] flex flex-col justify-between">
      <BackgroundEffects />

      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      <main className="relative z-10 flex-1">
        <div key={currentPage}>
          {currentPage === 'home' && (
            <HomePage
              onOpenInquiry={handleOpenInquiry}
              onOpenShowreel={() => setShowreelOpen(true)}
              onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
              onNavigate={navigateTo}
            />
          )}

          {currentPage !== 'home' && (
            <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
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

              {currentPage === 'blog' && <BlogPage />}

              {currentPage.startsWith('blogpost:') && (
                <BlogPostPage slug={currentPage.slice('blogpost:'.length)} />
              )}
            </Suspense>
          )}
        </div>
      </main>

      <Footer
        onNavigate={navigateTo}
        onOpenInquiry={(service) => handleOpenInquiry(service)}
      />

      <Suspense fallback={null}>
        {inquiryModalOpen && (
          <ProjectInquiryModal
            isOpen={inquiryModalOpen}
            onClose={() => setInquiryModalOpen(false)}
            initialService={inquiryInitialService}
            initialRegion={inquiryInitialRegion}
          />
        )}

        {selectedCaseStudy && (
          <CaseStudyModal
            study={selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
            onOpenInquiry={(service) => handleOpenInquiry(service)}
          />
        )}

        {showreelOpen && (
          <ShowreelModal
            isOpen={showreelOpen}
            onClose={() => setShowreelOpen(false)}
            onOpenInquiry={() => handleOpenInquiry('Brand Showreel Inquiry')}
          />
        )}

        <AIAssistant
          currentPage={currentPage}
          onOpenInquiry={(service, region) => handleOpenInquiry(service, region)}
        />
      </Suspense>

      <FloatingWhatsApp />
    </div>
  );
}
