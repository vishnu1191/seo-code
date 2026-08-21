import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  Target, 
  Clapperboard, 
  Search, 
  Cpu, 
  ArrowRight, 
  Check, 
  Zap,
  TrendingUp
} from 'lucide-react';
import { AGENCY_SERVICES } from '../data/agencyData';
import { ServiceItem } from '../types';

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Target: <Target className="w-6 h-6" />,
  Clapperboard: <Clapperboard className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />
};

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#35105C]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
            Core Capabilities
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-5">
            Everything You Need to Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] via-[#B15CFF] to-[#D7BFFF]">
              Compounding Growth.
            </span>
          </h2>

          <p className="text-[#A7A3B1] text-base sm:text-lg leading-relaxed">
            We eliminate the fragmentation of managing six different agencies. A unified, synchronized growth engine covering full-funnel strategy, execution, and retention.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {AGENCY_SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative rounded-2xl bg-[#0A0810]/70 backdrop-blur-xl border border-white/5 hover:border-[#8B3DFF]/40 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_-10px_rgba(139,61,255,0.25)] cursor-pointer"
              onClick={() => onSelectService(service.title)}
            >
              {/* Subtle top card glow line on hover */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B3DFF]/0 to-transparent group-hover:via-[#8B3DFF]/60 transition-all duration-500" />

              <div>
                {/* Card Top: Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1F1235] to-[#0A0810] border border-[#8B3DFF]/25 flex items-center justify-center text-[#D7BFFF] group-hover:text-white group-hover:border-[#B15CFF]/60 group-hover:shadow-[0_0_20px_rgba(139,61,255,0.4)] transition-all duration-300">
                    {iconMap[service.iconName] || <Zap className="w-6 h-6" />}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-[#8B3DFF] bg-[#140E23] px-2.5 py-1 rounded-full border border-white/5">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white group-hover:text-[#D7BFFF] transition-colors mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#A7A3B1] text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.deliverables.map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[11px] font-medium text-[#85818E] bg-[#140E23]/60 px-2.5 py-1 rounded-md border border-white/5 group-hover:border-[#8B3DFF]/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Metrics & Action Link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B15CFF]">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{service.metrics}</span>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-[#A7A3B1] group-hover:text-white transition-colors">
                  <span>Inquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8B3DFF] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#140E23] via-[#0A0810] to-[#140E23] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm text-[#F7F5FA] font-medium">
              Need a bespoke custom growth blueprint or omni-channel deployment?
            </span>
          </div>
          <button
            onClick={() => onSelectService('Full-Stack Growth Architecture')}
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#8B3DFF] hover:bg-[#9B4DFF] shadow-[0_0_15px_rgba(139,61,255,0.35)] transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            Request Custom Architecture →
          </button>
        </div>

      </div>
    </section>
  );
};
