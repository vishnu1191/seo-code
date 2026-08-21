import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Sparkles, Compass, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenInquiry: (initialService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'performance', 'work', 'process', 'calculator', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Performance', href: '#performance', id: 'performance' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'ROI Engine', href: '#calculator', id: 'calculator' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5 border-b border-white/5 backdrop-blur-md bg-black/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Wordmark */}
            <a
              id="brand-logo"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center focus:outline-none rounded-lg"
            >
              <BrandLogo size="md" variant="horizontal" />
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-navigation" aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 text-[11px] uppercase tracking-[0.2em] font-medium text-[#A7A3B1]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`transition-colors duration-200 ${
                      isActive ? 'text-white font-bold' : 'hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Primary Action CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                id="header-whatsapp-btn"
                href="https://wa.me/917014799233?text=Hi%20SEO%20Jaipur%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project%20growth%20strategy."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="px-3.5 py-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] hover:text-emerald-300 text-[11px] uppercase tracking-wider font-bold rounded-full transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(37,211,102,0.2)] hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>

              <button
                id="header-cta-button"
                onClick={() => onOpenInquiry()}
                className="px-5 py-2 bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-[11px] uppercase tracking-widest font-bold rounded-full transition-all shadow-[0_0_20px_rgba(139,61,255,0.3)] hover:scale-[1.02] cursor-pointer"
              >
                <span>Start Project</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
                className="p-2 rounded-lg bg-[#0A0810] border border-[#8B3DFF]/25 text-[#F7F5FA] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8B3DFF]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl lg:hidden flex flex-col pt-24 pb-8 px-6 transition-all duration-300 animate-in fade-in"
        >
          <div className="flex flex-col gap-2 max-w-md mx-auto w-full">
            <div className="text-[11px] font-semibold tracking-widest text-[#8B3DFF] uppercase mb-2 px-3">
              Navigation Index
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#8B3DFF]/20 text-white border border-[#8B3DFF]/40'
                      : 'text-[#A7A3B1] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-60" />
                </a>
              );
            })}

            <div className="mt-6 pt-6 border-t border-[#8B3DFF]/20 flex flex-col gap-3">
              <a
                id="mobile-drawer-whatsapp"
                href="https://wa.me/917014799233?text=Hi%20SEO%20Jaipur%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project%20growth%20strategy."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-sm font-semibold tracking-wide text-white bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] text-black"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span className="font-bold">Chat on WhatsApp</span>
              </a>

              <button
                id="mobile-drawer-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#8B3DFF] to-[#6b21a8] flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(139,61,255,0.4)] cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#85818E] pt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>24/7 VIP Executive Desk</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
