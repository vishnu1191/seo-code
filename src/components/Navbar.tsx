import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Sparkles, Compass, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenInquiry: (initialService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Performance', id: 'performance' },
    { label: 'Work', id: 'work' },
    { label: 'Process', id: 'process' },
    { label: 'ROI Engine', id: 'calculator' },
  ];

  const handleNavClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        id="main-header"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050508]/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
            : 'bg-[#050508]/60 py-4 sm:py-5 border-b border-white/5 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Wordmark */}
            <motion.button
              id="brand-logo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => handleNavClick(e, 'home')}
              className="group flex items-center focus:outline-none rounded-lg text-left cursor-pointer"
            >
              <BrandLogo size="md" variant="horizontal" />
            </motion.button>

            {/* Desktop Navigation Links */}
            <nav
              id="desktop-navigation"
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] uppercase tracking-[0.2em] font-medium"
            >
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`relative py-1 transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-[#A7A3B1] hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span 
                        layoutId="activeNavIndicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#8B3DFF] to-[#D7BFFF] rounded-full shadow-[0_0_8px_#8B3DFF]" 
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Primary Action CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              <motion.a
                id="header-whatsapp-btn"
                href="https://wa.me/917014799233?text=Hi%20SEO%20Jaipur%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project%20growth%20strategy."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-3.5 py-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] hover:text-emerald-300 text-[11px] uppercase tracking-wider font-bold rounded-full transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(37,211,102,0.2)] cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </motion.a>

              <motion.button
                id="header-cta-button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onOpenInquiry()}
                className="px-5 py-2 bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-[11px] uppercase tracking-widest font-bold rounded-full transition-all shadow-[0_0_20px_rgba(139,61,255,0.3)] cursor-pointer"
              >
                <span>Start Project</span>
              </motion.button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <motion.button
                id="mobile-menu-toggle"
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
                className="p-2 rounded-lg bg-[#0A0810] border border-[#8B3DFF]/25 text-[#F7F5FA] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8B3DFF] cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 max-w-md mx-auto w-full">
              <div className="text-[11px] font-semibold tracking-widest text-[#8B3DFF] uppercase mb-2 px-3">
                Page Selection
              </div>
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <motion.button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#8B3DFF]/25 text-white border border-[#8B3DFF]/50 shadow-[0_0_15px_rgba(139,61,255,0.2)]'
                        : 'text-[#A7A3B1] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="font-semibold">{link.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#8B3DFF]' : 'opacity-40'}`} />
                  </motion.button>
                );
              })}

              <div className="mt-6 pt-6 border-t border-[#8B3DFF]/20 flex flex-col gap-3">
                <motion.a
                  id="mobile-drawer-whatsapp"
                  href="https://wa.me/917014799233?text=Hi%20SEO%20Jaipur%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project%20growth%20strategy."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl text-sm font-semibold tracking-wide text-black bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span className="font-bold">WhatsApp (+91 70147 99233)</span>
                </motion.a>

                <motion.button
                  id="mobile-drawer-cta"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#8B3DFF] to-[#6b21a8] flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(139,61,255,0.4)] cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#85818E] pt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>24/7 VIP Executive Desk</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
