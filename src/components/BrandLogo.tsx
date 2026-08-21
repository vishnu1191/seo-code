import React from 'react';

interface BrandLogoProps {
  variant?: 'horizontal' | 'full' | 'stacked' | 'icon' | 'badge';
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  showText = true,
}) => {
  // Dimension tokens
  const sizeMap = {
    xs: { h: 'h-6', icon: 'w-6 h-6', text: 'text-xs', sub: 'text-[8px]', spacing: 'gap-1.5' },
    sm: { h: 'h-8', icon: 'w-8 h-8', text: 'text-sm', sub: 'text-[9px]', spacing: 'gap-2' },
    md: { h: 'h-10', icon: 'w-10 h-10', text: 'text-base', sub: 'text-[10px]', spacing: 'gap-2.5' },
    lg: { h: 'h-14', icon: 'w-14 h-14', text: 'text-xl', sub: 'text-xs', spacing: 'gap-3' },
    xl: { h: 'h-20', icon: 'w-20 h-20', text: 'text-2xl', sub: 'text-sm', spacing: 'gap-4' },
    hero: { h: 'h-32', icon: 'w-28 h-28', text: 'text-4xl', sub: 'text-base', spacing: 'gap-5' },
  };

  const currentSize = sizeMap[size];

  // The Full Logo Vector (Emblem + SEO wordmark + IN JAIPUR)
  if (variant === 'full') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <img
          src="/logo.svg"
          alt="SEO IN JAIPUR Logo"
          className={`w-auto ${currentSize.h} object-contain drop-shadow-[0_0_25px_rgba(255,46,126,0.35)]`}
        />
      </div>
    );
  }

  // The Top Architectural Circuitry Emblem
  const ArchEmblemSVG = (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_0_15px_rgba(255,30,109,0.5)]"
    >
      <defs>
        <linearGradient id="emblemPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1E6D" />
          <stop offset="50%" stopColor="#FF2E7E" />
          <stop offset="100%" stopColor="#D9146C" />
        </linearGradient>
        <linearGradient id="emblemGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD000" />
          <stop offset="100%" stopColor="#E69500" />
        </linearGradient>
      </defs>

      {/* Outer Scalloped Jharokha Arch */}
      <path
        d="M 200 25
           C 208 25, 218 40, 225 50
           C 245 75, 275 65, 295 85
           C 315 85, 335 110, 350 135
           C 365 165, 360 195, 360 235
           C 330 235, 320 245, 320 245
           L 80 245
           C 80 245, 70 235, 40 235
           C 40 195, 35 165, 50 135
           C 65 110, 85 85, 105 85
           C 125 65, 155 75, 175 50
           C 182 40, 192 25, 200 25 Z"
        fill="none"
        stroke="url(#emblemPinkGrad)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Decorative Accent Pink Squares */}
      <rect x="115" y="145" width="12" height="12" fill="#FF1E6D" rx="2.5" />
      <rect x="271" y="145" width="12" height="12" fill="#FF1E6D" rx="2.5" />
      <rect x="60" y="200" width="12" height="12" fill="#FF1E6D" rx="2.5" />
      <rect x="326" y="200" width="12" height="12" fill="#FF1E6D" rx="2.5" />

      {/* Left Minaret Base Silhouette */}
      <path
        d="M 45 245 L 45 225 C 45 210, 65 200, 70 190 L 85 190 C 90 200, 110 210, 110 225 L 110 245 Z"
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <line x1="77.5" y1="190" x2="77.5" y2="175" stroke="rgba(255,255,255,0.4)" strokeWidth="3.5" strokeLinecap="round" />

      {/* Right Minaret Base Silhouette */}
      <path
        d="M 290 245 L 290 225 C 290 210, 310 200, 315 190 L 330 190 C 335 200, 355 210, 355 225 L 355 245 Z"
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <line x1="322.5" y1="190" x2="322.5" y2="175" stroke="rgba(255,255,255,0.4)" strokeWidth="3.5" strokeLinecap="round" />

      {/* Center Dome & Gold Star Spire */}
      <path d="M 182 245 C 182 225, 218 225, 218 245 Z" fill="#FF1E6D" />
      <path
        d="M 200 203 L 206 215 L 218 221 L 206 227 L 200 239 L 194 227 L 182 221 L 194 215 Z"
        fill="url(#emblemGoldGrad)"
      />

      {/* Circuit Nodes & Central Track */}
      <circle cx="200" cy="90" r="14" fill="url(#emblemGoldGrad)" stroke="#FFFFFF" strokeWidth="2.5" />
      <line x1="200" y1="104" x2="200" y2="195" stroke="#0066FF" strokeWidth="8" strokeLinecap="round" />

      {/* Left Circuit Tracks */}
      <circle cx="162" cy="127" r="11" fill="#0066FF" />
      <path d="M 162 140 L 162 183 L 185 203" fill="none" stroke="#0066FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="105" cy="185" r="12" fill="#FF1E6D" />
      <path d="M 105 199 L 105 245 L 150 245 L 150 205 L 200 205" fill="none" stroke="#0066FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />

      {/* Right Circuit Tracks */}
      <circle cx="238" cy="127" r="11" fill="#0066FF" />
      <path d="M 238 140 L 238 183 L 215 203" fill="none" stroke="#0066FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="295" cy="185" r="12" fill="#0066FF" />
      <path d="M 295 199 L 295 245 L 250 245 L 250 205 L 200 205" fill="none" stroke="#0066FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />

      {/* Base Foundation Bar */}
      <line x1="35" y1="245" x2="365" y2="245" stroke="rgba(255,255,255,0.4)" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`relative flex items-center justify-center ${currentSize.icon} ${className}`}>
        {ArchEmblemSVG}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2">
          {ArchEmblemSVG}
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] leading-none">
            <span>S</span>
            <span>E</span>
            <div className="relative inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 ml-0.5">
              <div className="absolute inset-0 rounded-full border-[3px] border-white/90 bg-[#0A163B]/80" />
              {/* Bars inside O */}
              <div className="absolute bottom-1 left-1.5 flex items-end gap-[1.5px]">
                <div className="w-1 h-2 bg-[#00D2FF] rounded-t-sm" />
                <div className="w-1 h-3.5 bg-[#FF1E6D] rounded-t-sm" />
                <div className="w-1 h-4.5 bg-[#0066FF] rounded-t-sm" />
              </div>
              {/* Growth Arrow Swoop */}
              <svg className="absolute -top-1 -right-1 w-5 h-5 text-[#0066FF]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 20 C8 18, 14 14, 18 6 L14 6 L19 2 L22 7 L18 7 C15 14, 8 18, 4 20 Z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-4 h-[2px] bg-[#FF1E6D]" />
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] font-bold text-white">
              IN <span className="text-[#FF1E6D]">JAIPUR</span>
            </span>
            <span className="w-4 h-[2px] bg-[#FF1E6D]" />
          </div>
        </div>
      </div>
    );
  }

  // Default 'horizontal' / 'badge'
  return (
    <div className={`flex items-center ${currentSize.spacing} ${className}`}>
      {/* Brand Icon Badge with Circuitry & Arch */}
      <div className={`relative flex items-center justify-center ${currentSize.icon} shrink-0 p-1 rounded-xl bg-[#080712] border border-[#FF1E6D]/40 shadow-[0_0_20px_rgba(255,30,109,0.3)] group-hover:border-[#FF1E6D]/70 transition-all`}>
        {ArchEmblemSVG}
      </div>

      {showText && (
        <div className="flex flex-col leading-none select-none">
          {/* Main Brand Typography - Crisp White & Integrated Growth O */}
          <div className={`flex items-center ${currentSize.text} font-black tracking-tight font-['Space_Grotesk'] text-white`}>
            <span>S</span>
            <span>E</span>
            
            {/* Integrated Growth "O" */}
            <span className="relative inline-flex items-center justify-center mx-[1.5px] w-[1.18em] h-[1.18em]">
              <span className="w-full h-full rounded-full border-[2px] sm:border-[2.5px] border-white bg-[#06133B] flex items-center justify-center relative overflow-visible shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                {/* Mini Bars inside O */}
                <span className="absolute bottom-[3px] left-[3px] flex items-end gap-[1px]">
                  <span className="w-[2px] h-[3px] bg-[#00D2FF] rounded-t-[1px]" />
                  <span className="w-[2px] h-[6px] bg-[#FF1E6D] rounded-t-[1px]" />
                  <span className="w-[2px] h-[8.5px] bg-[#0066FF] rounded-t-[1px]" />
                </span>
                {/* White Curved Track & Swooping Growth Arrow */}
                <svg
                  className="absolute -top-[4px] -right-[4px] w-[14px] h-[14px] text-[#0066FF] fill-current drop-shadow-[0_0_6px_#00D2FF]"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 18 C6 14, 11 10, 15 4 L11 4 L18 1 L19 8 L15 7 C12 12, 6 15, 2 18 Z" />
                </svg>
              </span>
            </span>
          </div>

          {/* Subtitle "— IN JAIPUR —" */}
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-2.5 h-[1.5px] bg-[#FF1E6D]" />
            <span className={`${currentSize.sub} uppercase tracking-[0.2em] font-mono font-bold text-white`}>
              IN <span className="text-[#FF1E6D]">JAIPUR</span>
            </span>
            <span className="w-2.5 h-[1.5px] bg-[#FF1E6D]" />
          </div>
        </div>
      )}
    </div>
  );
};
