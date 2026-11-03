/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
// Load secondary routes only when visitors open them. Keep the homepage eager for fast first paint.
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })));
const PerformancePage = lazy(() => import('./pages/PerformancePage').then((module) => ({ default: module.PerformancePage })));
const WorkPage = lazy(() => import('./pages/WorkPage').then((module) => ({ default: module.WorkPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then((module) => ({ default: module.ProcessPage })));
const RoiEnginePage = lazy(() => import('./pages/RoiEnginePage').then((module) => ({ default: module.RoiEnginePage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then((module) => ({ default: module.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then((module) => ({ default: module.BlogPostPage })));
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ShowreelModal } from './components/ShowreelModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CaseStudy } from './types';
import { initGlobalAnalytics } from './utils/analytics';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryInitialService, setInquiryInitialService] = useState<string>('');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);

  // Initialize GA4 link tracker for WhatsApp (wa.me) and Phone (tel:) links
  useEffect(() => {
    const cleanupAnalytics = initGlobalAnalytics();
    return () => {
      cleanupAnalytics();
    };
  }, []);

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

    // Initial check on load
    handleLocationChange();

    // Listen for browser forward/backward navigation
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Keep page-specific metadata in sync with client-side route changes.
  useEffect(() => {
    // Blog articles manage their own title, description, canonical and BlogPosting schema.
    if (currentPage.startsWith('blogpost:')) return;

    const pageSeo: Record<string, { title: string; description: string; path: string }> = {
      home: {
        title: 'SEO Services in Jaipur | SEO, Google Ads & Meta Ads Agency',
        description: 'SEO in Jaipur helps businesses grow with SEO, Local SEO, Google Ads, Meta Ads, social media marketing, link building and website design.',
        path: '/',
      },
      about: {
        title: 'About SEO in Jaipur | Our Digital Marketing Team',
        description: 'Meet SEO in Jaipur, founded by Vishnu Sivota and Manish Chaudhary. Learn about our approach to SEO, Local SEO, Google Ads and Meta Ads.',
        path: '/about/',
      },
      services: {
        title: 'SEO & Digital Marketing Services in Jaipur | SEO in Jaipur',
        description: 'Explore SEO, Local SEO, Google Ads, Meta Ads, social media marketing, link building and website design services for Jaipur businesses.',
        path: '/services/',
      },
      performance: {
        title: 'Digital Marketing Performance & Measurement | SEO in Jaipur',
        description: 'Learn how SEO, paid advertising and conversion tracking are measured, including organic visibility, qualified enquiries and campaign performance.',
        path: '/performance/',
      },
      work: {
        title: 'Digital Marketing Work & Case Studies | SEO in Jaipur',
        description: 'Explore selected digital marketing case studies and campaign work across SEO, paid ads, lead generation and online growth.',
        path: '/work/',
      },
      process: {
        title: 'Our SEO & Digital Marketing Process | SEO in Jaipur',
        description: 'Learn our digital marketing process: website and SEO audit, keyword strategy, campaign setup, optimization and performance reporting.',
        path: '/process/',
      },
      calculator: {
        title: 'Digital Marketing ROI Calculator | SEO in Jaipur',
        description: 'Explore planning scenarios for SEO, Google Ads and Meta Ads and estimate the marketing inputs that may support your business goals.',
        path: '/calculator/',
      },
      blog: {
        title: 'SEO & Digital Marketing Blog in Jaipur | SEO in Jaipur',
        description: 'Read practical guides on SEO services in Jaipur, Local SEO, Google Ads, Meta Ads and digital marketing for business owners.',
        path: '/blog/',
      },
    };

    const seo = pageSeo[currentPage] ?? pageSeo.home;
    document.title = seo.title;

    const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    setMeta('meta[name="description"]', 'name', 'description', seo.description);
    setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow');
    setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', `https://seoinjaipur.in${seo.path}`);
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://seoinjaipur.in${seo.path}`;
  }, [currentPage]);

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
        <div key={currentPage}>
            <Suspense fallback={<div className="min-h-[50vh]" aria-label="Loading page" />}>
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

            {currentPage === 'blog' && <BlogPage />}

            {currentPage.startsWith('blogpost:') && (
              <BlogPostPage slug={currentPage.slice('blogpost:'.length)} />
            )}
            </Suspense>
        </div>
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
