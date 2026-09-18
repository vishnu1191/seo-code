import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Globe, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github, ArrowUp, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate?: (page: string) => void;
  onOpenInquiry: (initialService?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error');
      return;
    }
    setNewsletterStatus('loading');
    setTimeout(() => {
      setNewsletterStatus('success');
      setNewsletterEmail('');
    }, 600);
  };

  const handleLinkClick = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-[#040307] border-t border-[#8B3DFF]/20 pt-16 sm:pt-20 pb-12 overflow-hidden text-left">
      {/* Background radial gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#4B147F]/10 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#8B3DFF]/15">
          
          {/* Brand Info & Newsletter (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <div className="mb-4">
                <button
                  onClick={() => handleLinkClick('home')}
                  className="cursor-pointer text-left"
                >
                  <BrandLogo size="lg" variant="horizontal" />
                </button>
              </div>

              <p className="text-xs sm:text-sm text-[#A7A3B1] leading-relaxed mb-4">
                Jaipur&apos;s premier SEO &amp; digital growth agency combining predictive data strategy, organic search dominance, and algorithmic media to scale ambitious businesses.
              </p>

              {/* Leadership Attribution - Separate Founder & Director Boxes */}
              <div className="mb-6">
                <div className="text-[10px] font-mono text-[#8B3DFF] uppercase tracking-wider mb-2 font-bold">
                  Executive Leadership
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  {/* Box 1: Founder */}
                  <div className="p-2.5 rounded-xl bg-[#0A0810] border border-white/5 hover:border-[#8B3DFF]/30 transition-all flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#8B3DFF]/40 shrink-0 bg-[#140E23]">
                      <img
                        src="/vishnu-sivota.webp"
                        alt="Vishnu Sivota"
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('.fallback-footer-vs');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                      <div className="fallback-footer-vs hidden absolute inset-0 flex items-center justify-center text-[#D7BFFF] font-['Space_Grotesk'] font-bold text-[9px] bg-[#140E23]">
                        VS
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="text-white font-bold text-xs truncate">
                        Vishnu Sivota
                      </div>
                      <div className="text-[10px] text-[#85818E] font-mono truncate">
                        Founder &bull; Marketing Architect
                      </div>
                    </div>
                  </div>

                  {/* Box 2: Director */}
                  <div className="p-2.5 rounded-xl bg-[#0A0810] border border-white/5 hover:border-[#8B3DFF]/30 transition-all flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#8B3DFF]/40 shrink-0 bg-[#140E23]">
                      <img
                        src="/manish-chaudhary.webp"
                        alt="Manish Chaudhary"
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement?.querySelector('.fallback-footer-mc');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                      <div className="fallback-footer-mc hidden absolute inset-0 flex items-center justify-center text-[#D7BFFF] font-['Space_Grotesk'] font-bold text-[9px] bg-[#140E23]">
                        MC
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="text-white font-bold text-xs truncate">
                        Manish Chaudhary
                      </div>
                      <div className="text-[10px] text-[#85818E] font-mono truncate">
                        Director &bull; SEO Specialist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Input Box */}
            <div className="p-4 rounded-2xl bg-[#0A0810] border border-white/5">
              <span className="text-[11px] font-semibold text-[#F7F5FA] block mb-1">
                The Growth Dispatch
              </span>
              <p className="text-[11px] text-[#85818E] mb-3">
                Bi-weekly teardowns of high-converting brands & algorithmic acquisition.
              </p>

              {newsletterStatus === 'success' ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium py-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox for the latest dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="relative flex items-center">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterStatus === 'error') setNewsletterStatus('idle');
                    }}
                    placeholder="partner@enterprise.com"
                    className={`w-full bg-[#140E23] border ${
                      newsletterStatus === 'error' ? 'border-rose-500' : 'border-white/10'
                    } rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#85818E] focus:outline-none focus:border-[#8B3DFF] pr-10`}
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 p-1.5 rounded-lg bg-[#8B3DFF] text-white hover:bg-[#9B4DFF] transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Navigation Columns (Col span 8) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Company Navigation */}
            <div>
              <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#D7BFFF] mb-4">
                Architecture Pages
              </h4>
              <ul className="space-y-2.5 text-xs text-[#A7A3B1]">
                <li><button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">Home Overview</button></li>
                <li><button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors cursor-pointer text-left">About the Agency</button></li>
                <li><button onClick={() => handleLinkClick('services')} className="hover:text-white transition-colors cursor-pointer text-left">Services &amp; Capabilities</button></li>
                <li><button onClick={() => handleLinkClick('performance')} className="hover:text-white transition-colors cursor-pointer text-left">Performance &amp; Telemetry</button></li>
                <li><button onClick={() => handleLinkClick('work')} className="hover:text-white transition-colors cursor-pointer text-left">Selected Case Studies</button></li>
                <li><button onClick={() => handleLinkClick('process')} className="hover:text-white transition-colors cursor-pointer text-left">4-Phase Methodology</button></li>
                <li><button onClick={() => handleLinkClick('calculator')} className="hover:text-white transition-colors cursor-pointer text-left">Interactive ROI Engine</button></li>
              </ul>
            </div>

            {/* Column 2: Specific Service Inquiries */}
            <div>
              <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#D7BFFF] mb-4">
                Core Practices
              </h4>
              <ul className="space-y-2.5 text-xs text-[#A7A3B1]">
                <li><button onClick={() => onOpenInquiry('Enterprise Organic SEO & Entity Architecture')} className="hover:text-white transition-colors cursor-pointer text-left">Organic Search &amp; GEO</button></li>
                <li><button onClick={() => onOpenInquiry('High-Performance Google & Meta Ads Management')} className="hover:text-white transition-colors cursor-pointer text-left">Google &amp; Meta Ads</button></li>
                <li><button onClick={() => onOpenInquiry('Hyper-Local SEO & Google Maps 3-Pack Supremacy')} className="hover:text-white transition-colors cursor-pointer text-left">Google Maps 3-Pack</button></li>
                <li><button onClick={() => onOpenInquiry('Generative Engine Optimization (GEO) & AI Search')} className="hover:text-white transition-colors cursor-pointer text-left">ChatGPT &amp; Perplexity AI</button></li>
                <li><button onClick={() => onOpenInquiry('E-Commerce Organic Scaling & Shopify/Woo Growth')} className="hover:text-white transition-colors cursor-pointer text-left">E-Commerce &amp; DTC</button></li>
                <li><button onClick={() => onOpenInquiry('Conversion Rate Optimization (CRO) & Digital Flagships')} className="hover:text-white transition-colors cursor-pointer text-left">CRO &amp; Web Flagships</button></li>
              </ul>
            </div>

            {/* Column 3: Contact & Global Hubs */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#D7BFFF] mb-4">
                Direct Inquiries
              </h4>
              <div className="space-y-3 text-xs text-[#A7A3B1]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8B3DFF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-[#D7BFFF]/90">
                    Joshi Marg, 100 Feet Road, Near Jhotwara, Jaipur, Rajasthan 302012, India
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0 fill-[#25D366]/20" />
                  <a
                    href="https://wa.me/917014799233?text=Hi%20SEO%20Jaipur%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project%20growth%20strategy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 font-semibold text-white transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#8B3DFF] shrink-0" />
                  <a href="mailto:vishnusivota@gmail.com" className="hover:text-white transition-colors truncate">
                    vishnusivota@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#8B3DFF] shrink-0" />
                  <a href="tel:+916367420500" className="hover:text-white transition-colors">
                    +91 63674 20500
                  </a>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-[#85818E]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Q1 Client Intake: Active (3 Slots)</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#85818E]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} SEO IN JAIPUR. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Crafted for Search Supremacy</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleLinkClick('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy &amp; Terms
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3 text-[#8B3DFF]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

