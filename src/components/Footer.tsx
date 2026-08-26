import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Globe, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github, ArrowUp, MessageCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenInquiry: (initialService?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
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
                <BrandLogo size="lg" variant="horizontal" />
              </div>

              <p className="text-xs sm:text-sm text-[#A7A3B1] leading-relaxed mb-6">
                Jaipur&apos;s premier SEO &amp; digital growth agency combining predictive data strategy, organic search dominance, and algorithmic media to scale ambitious businesses.
              </p>
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
            
            {/* Column 1: Company */}
            <div>
              <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#D7BFFF] mb-4">
                Architecture
              </h4>
              <ul className="space-y-2.5 text-xs text-[#A7A3B1]">
                <li><a href="#about" className="hover:text-white transition-colors">About the Agency</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Core Capabilities</a></li>
                <li><a href="#work" className="hover:text-white transition-colors">Selected Case Studies</a></li>
                <li><a href="#performance" className="hover:text-white transition-colors">Proven Telemetry</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Sprint Methodology</a></li>
                <li><a href="#calculator" className="hover:text-white transition-colors">Interactive ROI Engine</a></li>
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#D7BFFF] mb-4">
                Practices
              </h4>
              <ul className="space-y-2.5 text-xs text-[#A7A3B1]">
                <li><button onClick={() => onOpenInquiry('Brand Strategy & Positioning')} className="hover:text-white transition-colors text-left">Brand Strategy</button></li>
                <li><button onClick={() => onOpenInquiry('Social & Cultural Momentum')} className="hover:text-white transition-colors text-left">Social Performance</button></li>
                <li><button onClick={() => onOpenInquiry('Paid Media & Performance')} className="hover:text-white transition-colors text-left">Paid Media (Meta/Google)</button></li>
                <li><button onClick={() => onOpenInquiry('Content & Creative Production')} className="hover:text-white transition-colors text-left">3D & Motion Production</button></li>
                <li><button onClick={() => onOpenInquiry('SEO & Search Intelligence')} className="hover:text-white transition-colors text-left">Generative SEO & GEO</button></li>
                <li><button onClick={() => onOpenInquiry('Digital Experiences & Web Platforms')} className="hover:text-white transition-colors text-left">Headless Web Platforms</button></li>
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
                    Joshi Marg, 100 Feet Road, near Jhotwara, Jaipur, Rajasthan 302012, India
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0 fill-[#25D366]/20" />
                  <a
                    href="https://wa.me/917014799233?text=Hi%20SEO%20Jaipur%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project%20growth%20strategy."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:text-emerald-300 transition-colors font-medium flex items-center gap-1.5"
                  >
                    <span>WhatsApp VIP Concierge</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#25D366]/20 text-emerald-300 font-mono">24/7 Live</span>
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#8B3DFF] shrink-0" />
                  <a href="tel:+916367420500" className="hover:text-white transition-colors font-medium">
                    +91 63674 20500
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#8B3DFF] shrink-0" />
                  <a href="mailto:vishnusivota@gmail.com" className="hover:text-white transition-colors font-medium break-all">
                    vishnusivota@gmail.com
                  </a>
                </div>
              </div>

              {/* Social & Messaging Channels */}
              <div className="flex items-center gap-3 mt-6">
                {[
                  {
                    icon: <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]/30" />,
                    label: 'WhatsApp Chat',
                    href: 'https://wa.me/917014799233?text=Hi%20SEO%20Jaipur%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project%20growth%20strategy.',
                    borderClass: 'border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] hover:border-[#25D366]'
                  },
                  { icon: <Twitter className="w-3.5 h-3.5" />, label: 'X / Twitter', href: '#', borderClass: 'border-[#8B3DFF]/25' },
                  { icon: <Linkedin className="w-3.5 h-3.5" />, label: 'LinkedIn', href: '#', borderClass: 'border-[#8B3DFF]/25' },
                  { icon: <Instagram className="w-3.5 h-3.5" />, label: 'Instagram', href: '#', borderClass: 'border-[#8B3DFF]/25' },
                  { icon: <Github className="w-3.5 h-3.5" />, label: 'GitHub', href: '#', borderClass: 'border-[#8B3DFF]/25' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    className={`w-8 h-8 rounded-lg bg-[#0A0810] flex items-center justify-center text-[#A7A3B1] hover:text-white transition-all ${
                      social.borderClass || 'border-[#8B3DFF]/25 hover:border-[#8B3DFF]'
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#85818E]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} SEO Jaipur Growth Labs. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Architecture</a>
            <a href="#" className="hover:text-white transition-colors">Terms of SLA</a>
            <a href="#" className="hover:text-white transition-colors">Security Protocol</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#140E23] border border-[#8B3DFF]/30 text-[#D7BFFF] hover:text-white transition-colors ml-2 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
