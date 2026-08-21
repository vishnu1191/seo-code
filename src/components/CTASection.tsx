import React from 'react';
import { ArrowRight, Sparkles, Compass, ShieldCheck, MessageCircle } from 'lucide-react';

interface CTASectionProps {
  onOpenInquiry: (initialService?: string) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="cta-banner" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Background Volumetric Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#120924] to-[#050508]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#8B3DFF]/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Frame */}
        <div className="relative rounded-3xl overflow-hidden glass-panel-glow border border-[#8B3DFF]/35 p-8 sm:p-14 lg:p-20 text-center shadow-[0_25px_70px_-15px_rgba(75,20,127,0.5)]">
          
          {/* Subtle Ambient Cosmic Portal in Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-radial from-[#B15CFF]/20 via-[#4B147F]/10 to-transparent blur-[60px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#8B3DFF]/15 rounded-full animate-orbit pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Eyebrow */}
            <div className="inline-block px-3.5 py-1.5 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
              Accepting Strategic Partnerships
            </div>

            {/* Headline */}
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              Ready to Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] via-[#B15CFF] to-[#D7BFFF] drop-shadow-[0_0_35px_rgba(177,92,255,0.4)]">
                What Comes Next?
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-[#A7A3B1] text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
              Let&apos;s turn your next milestone into a brand people remember—and a commercial engine that compounds.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="cta-primary-start"
                onClick={() => onOpenInquiry('General High-Growth Partnership')}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold tracking-wide text-white bg-[#8B3DFF] hover:bg-[#9B4DFF] shadow-[0_0_35px_rgba(139,61,255,0.5)] hover:shadow-[0_0_50px_rgba(177,92,255,0.8)] border border-[#B15CFF]/50 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>

              <a
                id="cta-whatsapp-direct"
                href="https://wa.me/917014799233?text=Hi%20SEO%20Jaipur%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project%20growth%20strategy."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_25px_rgba(37,211,102,0.2)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                <span className="text-[#25D366]">Chat on WhatsApp</span>
              </a>
            </div>

            {/* SLA Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#85818E]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#8B3DFF]" />
                <span>NDA Protected</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <span>Direct Partner Access</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <span>Response in &lt; 12 Hours</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
