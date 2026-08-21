import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Sparkles, Target, Users2, Compass } from 'lucide-react';

interface AboutSectionProps {
  onOpenInquiry: () => void;
  onExploreApproach: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry, onExploreApproach }) => {
  const valueProps = [
    {
      title: 'Strategy Before Execution',
      desc: 'We never waste capital on aimless tactical output. Every creative asset and campaign is preceded by deep audience segmentation and economic modeling.'
    },
    {
      title: 'Creative That Creates Demand',
      desc: 'High-aesthetic storytelling designed to capture cultural mindshare, elevate perceived prestige, and trigger immediate customer acquisition.'
    },
    {
      title: 'Performance You Can Measure',
      desc: 'Zero reliance on vanity metrics. We hold ourselves accountable to bottom-line enterprise value: blended ROAS, CAC payback velocity, and LTV expansion.'
    },
    {
      title: 'Transparent Collaboration',
      desc: 'Direct, unhindered access to senior growth architects and real-time telemetry dashboards. No opaque agency layers or junior handoffs.'
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#4B147F]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Cosmic Explorer & Portal Visual Stage */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden glass-panel-glow border border-[#8B3DFF]/25 p-1 group shadow-[0_20px_50px_-10px_rgba(75,20,127,0.35)]">
              
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#07070B] flex items-center justify-center">
                
                {/* Deep cosmic gradient background */}
                <div className="absolute inset-0 bg-radial from-[#180B2B] via-[#080512] to-[#040307]" />

                {/* Starfield points */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />

                {/* Distant Glowing Cosmic Moons & Nebulas */}
                <div className="absolute top-8 right-12 w-20 h-20 rounded-full bg-gradient-to-br from-[#8B3DFF]/40 to-transparent blur-[8px] pointer-events-none" />
                <div className="absolute top-12 right-16 w-14 h-14 rounded-full bg-[#1A0F2E] border border-[#B15CFF]/30 shadow-[0_0_20px_rgba(139,61,255,0.4)] pointer-events-none" />
                <div className="absolute top-20 right-32 w-6 h-6 rounded-full bg-[#0F0A1C] border border-[#8B3DFF]/20" />

                {/* Giant Luminous Violet Portal Ring */}
                <div className="relative flex items-center justify-center w-64 h-64 sm:w-72 sm:h-72">
                  
                  {/* Outer Portal Glow Rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#8B3DFF]/40 shadow-[0_0_60px_#8B3DFF] animate-pulse-slow" />
                  <div className="absolute -inset-4 rounded-full border border-dashed border-[#B15CFF]/30 animate-orbit" />
                  
                  {/* Portal Inner Swirl */}
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-radial from-[#B15CFF]/60 via-[#4B147F]/40 to-transparent flex items-center justify-center blur-[1px]">
                    <div className="w-32 h-32 rounded-full bg-[#8B3DFF]/30 blur-[20px] animate-pulse" />
                  </div>

                  {/* Astronaut Explorer Silhouette Standing in Front of Portal */}
                  <div className="absolute -bottom-4 z-20 flex flex-col items-center">
                    <svg viewBox="0 0 100 140" className="w-16 h-24 text-[#06040A] drop-shadow-[0_0_15px_rgba(139,61,255,0.6)]">
                      {/* Helmet visor reflection */}
                      <circle cx="50" cy="28" r="14" fill="#0C0816" stroke="#8B3DFF" strokeWidth="1.5" />
                      <ellipse cx="50" cy="27" rx="7" ry="5" fill="#B15CFF" opacity="0.8" />
                      {/* Backpack gear */}
                      <rect x="36" y="40" width="28" height="35" rx="4" fill="#080510" />
                      {/* Torso & Suit */}
                      <path d="M 38 42 L 62 42 L 68 85 L 32 85 Z" fill="#050308" />
                      {/* Legs on rocky terrain */}
                      <path d="M 36 85 L 34 130 L 46 130 L 48 85 Z" fill="#07050E" />
                      <path d="M 52 85 L 54 130 L 66 130 L 64 85 Z" fill="#07050E" />
                    </svg>
                  </div>

                </div>

                {/* Rocky Alien Landscape Surface Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07070B] via-[#0C0816] to-transparent z-10">
                  {/* Geometric terrain ridges */}
                  <svg viewBox="0 0 400 60" className="w-full h-full text-[#0A0713]" preserveAspectRatio="none" fill="currentColor">
                    <path d="M 0 60 L 0 30 Q 80 15, 160 35 T 320 20 Q 360 40, 400 30 L 400 60 Z" />
                  </svg>
                </div>

                {/* Floating Tag in Stage */}
                <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-[#D7BFFF] bg-[#0A0810]/85 px-3 py-1 rounded-full border border-[#8B3DFF]/25 shadow-md flex items-center gap-1.5">
                  <Compass className="w-3 h-3 text-[#8B3DFF]" />
                  <span>EXPEDITION_ZERO // FRONTIER</span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: About Agency Narrative & Value Markers */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="inline-block px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
              About The Agency
            </div>

            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-6">
              We Build Brands <br className="hidden sm:inline" />
              Designed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] to-[#D7BFFF]">Move Forward.</span>
            </h2>

            <p className="text-[#A7A3B1] text-base leading-relaxed mb-8">
              SEO IN JAIPUR was founded on a simple truth: generic marketing is too slow, too fragmented, and too detached from commercial reality. We combine quantitative search engine architecture with relentless optimization to build dominant market leaders across Jaipur and worldwide.
            </p>

            {/* Value Propositions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {valueProps.map((prop, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0A0810]/70 border border-white/5 hover:border-[#8B3DFF]/35 transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-5 h-5 rounded-full bg-[#8B3DFF]/20 flex items-center justify-center text-[#B15CFF] shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-[#F7F5FA] tracking-wide">
                      {prop.title}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#85818E] leading-normal pl-7">
                    {prop.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="about-discover-approach-cta"
                onClick={onExploreApproach}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-white bg-[#8B3DFF] hover:bg-[#9B4DFF] border border-[#B15CFF]/50 shadow-[0_0_20px_rgba(139,61,255,0.3)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <span>Discover Our Methodology</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="about-book-consult-cta"
                onClick={onOpenInquiry}
                className="text-xs font-semibold text-[#A7A3B1] hover:text-white transition-colors underline underline-offset-4 decoration-[#8B3DFF]/40 hover:decoration-[#8B3DFF] cursor-pointer"
              >
                Book Strategic Consultation →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
