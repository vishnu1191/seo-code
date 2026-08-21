import React from 'react';
import { Layers, ShieldCheck, TrendingUp, Zap } from 'lucide-react';
import { HERO_STATS } from '../data/agencyData';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />
};

export const StatsStrip: React.FC = () => {
  const formatStatValue = (val: string) => {
    // Check if value ends with x, +, %, M+, etc.
    const match = val.match(/^([\d.,]+)(.*)$/);
    if (match) {
      return (
        <>
          {match[1]}
          <span className="text-[#8B3DFF]">{match[2]}</span>
        </>
      );
    }
    return val;
  };

  return (
    <section id="stats-strip" className="relative z-20 -mt-6 sm:-mt-10 mb-16 lg:mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Floating Glass Bar Container */}
        <div 
          id="stats-floating-bar"
          className="relative rounded-2xl lg:rounded-3xl bg-[#0A0810]/80 backdrop-blur-2xl border border-white/5 shadow-[0_15px_45px_-10px_rgba(75,20,127,0.25)] p-6 sm:p-8"
        >
          {/* Subtle top highlight gradient border */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B3DFF]/40 to-transparent" />

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/5">
            {HERO_STATS.map((stat, idx) => (
              <div
                key={stat.id}
                id={`stat-item-${stat.id}`}
                className={`flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 group ${
                  idx > 1 ? 'pt-6 sm:pt-0' : ''
                } ${idx > 0 ? 'lg:pl-8' : ''}`}
              >
                {/* Icon Container with Violet Glow */}
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#1F1235] to-[#0D0818] border border-[#8B3DFF]/30 flex items-center justify-center text-[#D7BFFF] shadow-[0_0_15px_rgba(139,61,255,0.2)] group-hover:shadow-[0_0_22px_rgba(177,92,255,0.45)] group-hover:border-[#B15CFF]/50 transition-all duration-300 shrink-0">
                  {iconMap[stat.iconName] || <Zap className="w-5 h-5" />}
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-white transition-colors">
                      {formatStatValue(stat.value)}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#F7F5FA] tracking-wide mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-[#85818E] tracking-normal font-normal">
                    {stat.subtext}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
