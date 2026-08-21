import React, { useState } from 'react';
import { ArrowRight, Play, Sparkles, Shield, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
  onOpenShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onOpenShowreel }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:py-24 overflow-hidden">
      {/* Dynamic Background Volumetric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#8B3DFF]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Status Eyebrow Badge */}
            <div 
              id="hero-eyebrow-badge"
              className="inline-block px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[10px] uppercase tracking-[0.2em] font-bold mb-6 w-fit"
            >
              Next-Gen Growth Agency
            </div>

            {/* Giant Headline with Violet Gradient Phrase */}
            <h1 
              id="hero-headline"
              className="font-['Space_Grotesk'] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-[#F7F5FA] leading-[0.95] mb-6"
            >
              TURN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] to-[#D7BFFF]">ATTENTION</span><br />
              INTO GROWTH.
            </h1>

            {/* Supporting Copy */}
            <p 
              id="hero-supporting-copy"
              className="text-[#85818E] text-base sm:text-lg max-w-xl leading-relaxed mb-8"
            >
              We fuse high-end creative, predictive strategy, and performance technology to scale ambitious global brands.
            </p>

            {/* Action Buttons */}
            <div id="hero-actions" className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-primary-cta"
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-[#D7BFFF] transition-colors cursor-pointer shadow-lg"
              >
                <span>Book Strategy Call</span>
                <span className="opacity-50 text-base">→</span>
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onOpenShowreel}
                className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:bg-white/5 rounded-xl text-sm font-semibold transition-all text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#D7BFFF] fill-[#D7BFFF]" />
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Credibility Key Markers */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#8B3DFF]/15 text-xs text-[#85818E]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8B3DFF]" />
                <span className="text-[#A7A3B1]">Zero Outsourcing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8B3DFF]" />
                <span className="text-[#A7A3B1]">First-Party Attribution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8B3DFF]" />
                <span className="text-[#A7A3B1]">Guaranteed SLA Execution</span>
              </div>
            </div>

          </div>

          {/* Right Column: Large Cinematic Futuristic Visual Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8B3DFF]/20 via-[#4B147F]/30 to-transparent rounded-3xl blur-[60px] pointer-events-none" />

            {/* Main Visual Container */}
            <div 
              id="hero-cinematic-stage"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative w-full max-w-[480px] lg:max-w-none aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-3xl overflow-hidden glass-panel-glow border border-[#8B3DFF]/30 p-1 group transition-all duration-500 shadow-[0_20px_60px_-15px_rgba(75,20,127,0.4)]"
            >
              {/* Inner Frame */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#07070B] flex items-center justify-center">
                
                {/* Background Cosmic Starfield Layer */}
                <div className="absolute inset-0 bg-radial from-[#1A0B2E] via-[#090611] to-[#040308] opacity-95" />

                {/* Concentric Hologram HUD Rings */}
                <div className="absolute w-[360px] h-[360px] rounded-full border border-[#8B3DFF]/20 animate-orbit pointer-events-none" />
                <div className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-[#B15CFF]/25 animate-orbit-reverse pointer-events-none" />
                <div className="absolute w-[210px] h-[210px] rounded-full border border-[#D7BFFF]/15 animate-pulse-slow pointer-events-none" />

                {/* Floating Geometric Coordinates HUD */}
                <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-[#8B3DFF]/80 tracking-widest flex items-center gap-1.5 bg-[#050508]/80 px-2.5 py-1 rounded-md border border-[#8B3DFF]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B15CFF] animate-ping" />
                  <span>SYNAPSE_CORE // ACTIVE</span>
                </div>

                <div className="absolute top-4 right-4 z-20 font-mono text-[10px] text-[#A7A3B1]/60 tracking-wider bg-[#050508]/80 px-2 py-1 rounded-md border border-white/5">
                  LAT: 4.8x ROAS
                </div>

                {/* Cinematic Digital Architect / Mystic Strategist Silhouette Visual */}
                <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* Atmospheric Light Rays & Volumetric Backlight */}
                  <div className="absolute w-64 h-64 bg-[#8B3DFF]/30 rounded-full blur-[70px] animate-pulse-slow" />
                  
                  {/* SVG & Graphic Layer for the Cloaked Futuristic Digital Strategist with Radiant Energy Orb */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-end pb-4">
                    
                    {/* Floating Energy Orb manipulated between ethereal hands */}
                    <div className="relative mb-6 flex items-center justify-center">
                      
                      {/* Luminous Pulsing Core */}
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#6b21a8] via-[#B15CFF] to-[#FFFFFF] p-[2px] shadow-[0_0_60px_#8B3DFF] animate-float-slow">
                        <div className="w-full h-full rounded-full bg-radial from-[#ffffff] via-[#B15CFF] to-[#35105C] flex items-center justify-center overflow-hidden relative">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),transparent_60%)]" />
                          <div className="w-8 h-8 rounded-full bg-white/70 blur-[4px] animate-pulse" />
                        </div>
                      </div>

                      {/* Orbiting particles */}
                      <div className="absolute -inset-4 border border-[#B15CFF]/30 rounded-full animate-orbit" />
                      <div className="absolute -inset-8 border border-dashed border-[#8B3DFF]/20 rounded-full animate-orbit-reverse" />
                      
                      {/* Energy spark streams */}
                      <div className="absolute -left-8 top-1/2 w-8 h-[1px] bg-gradient-to-r from-transparent to-[#B15CFF] opacity-75" />
                      <div className="absolute -right-8 top-1/2 w-8 h-[1px] bg-gradient-to-l from-transparent to-[#B15CFF] opacity-75" />
                    </div>

                    {/* Cloaked Futuristic Silhouette SVG Figure */}
                    <svg
                      viewBox="0 0 400 320"
                      className="w-[90%] max-w-[340px] text-[#0A0812] drop-shadow-[0_0_30px_rgba(75,20,127,0.8)] filter transition-transform duration-700 group-hover:scale-105"
                      fill="currentColor"
                    >
                      <defs>
                        <linearGradient id="hoodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#1E1435" />
                          <stop offset="50%" stopColor="#0E091B" />
                          <stop offset="100%" stopColor="#05030A" />
                        </linearGradient>
                        <linearGradient id="glowTrim" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B3DFF" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="#D7BFFF" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#8B3DFF" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>

                      {/* Hooded head & cowl silhouette */}
                      <path
                        d="M 200 40 C 160 40, 140 80, 135 140 C 130 180, 120 220, 100 290 L 300 290 C 280 220, 270 180, 265 140 C 260 80, 240 40, 200 40 Z"
                        fill="url(#hoodGrad)"
                      />
                      {/* Deep face shadow hollow with subtle violet visor gleam */}
                      <ellipse cx="200" cy="115" rx="30" ry="42" fill="#040207" />
                      <path d="M 185 110 Q 200 118 215 110" stroke="url(#glowTrim)" strokeWidth="2.5" fill="none" opacity="0.85" />

                      {/* Cloak shoulders and sleek high-tech cybernetic contours */}
                      <path
                        d="M 100 290 Q 70 310, 40 320 L 360 320 Q 330 310, 300 290 Z"
                        fill="#080511"
                      />

                      {/* Hands reaching up towards the orb */}
                      <path
                        d="M 130 180 C 145 150, 160 135, 175 140 C 170 148, 160 165, 145 195 Z"
                        fill="url(#hoodGrad)"
                        stroke="#8B3DFF"
                        strokeWidth="0.8"
                      />
                      <path
                        d="M 270 180 C 255 150, 240 135, 225 140 C 230 148, 240 165, 255 195 Z"
                        fill="url(#hoodGrad)"
                        stroke="#8B3DFF"
                        strokeWidth="0.8"
                      />
                    </svg>

                  </div>

                </div>

                {/* Bottom Gradient Fade to merge seamlessly with the card */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07070B] via-[#07070B]/80 to-transparent z-20 pointer-events-none" />

                {/* Bottom Floating Stats Pill inside the Visual */}
                <div className="absolute bottom-4 inset-x-4 z-30 flex items-center justify-between bg-[#0A0810]/90 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#8B3DFF]/20 flex items-center justify-center text-[#D7BFFF]">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#85818E] uppercase tracking-wider font-semibold">Currently Scaling</span>
                      <span className="text-xs text-white font-bold tracking-tight">Vanta Cloud Systems</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-400">+380.4%</span>
                    <span className="block text-[9px] text-[#85818E]">Verified Lift</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
