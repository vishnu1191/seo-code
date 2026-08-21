import React, { useState } from 'react';
import { Compass, Sparkles, CheckCircle2, ArrowRight, Layers, Clock } from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#4B147F]/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
            Strategic Methodology
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-5">
            From First Idea to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] via-[#B15CFF] to-[#D7BFFF]">
              Real Momentum.
            </span>
          </h2>

          <p className="text-[#A7A3B1] text-base sm:text-lg leading-relaxed">
            Our 4-stage sprint methodology guarantees rapid velocity without sacrificing surgical precision or brand integrity.
          </p>
        </div>

        {/* Desktop Horizontal Timeline & Connecting Energy Line */}
        <div className="relative mb-12 hidden lg:block">
          {/* Subtle connecting energy rail */}
          <div className="absolute top-7 inset-x-12 h-[2px] bg-white/5" />
          <div 
            className="absolute top-7 left-12 h-[2px] bg-gradient-to-r from-[#8B3DFF] to-[#B15CFF] shadow-[0_0_12px_#8B3DFF] transition-all duration-500" 
            style={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 88}%` }}
          />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Glowing Node Button */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-['Space_Grotesk'] font-bold text-sm transition-all duration-300 mb-6 ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#8B3DFF] to-[#4B147F] text-white shadow-[0_0_25px_rgba(139,61,255,0.6)] border border-[#D7BFFF]/50 scale-110'
                        : 'bg-[#0A0810] text-[#A7A3B1] border border-white/5 group-hover:border-[#8B3DFF]/50 group-hover:text-white'
                    }`}
                  >
                    {step.step}
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#8B3DFF] mb-1">
                    {step.phase}
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-white group-hover:text-[#D7BFFF] transition-colors mb-2">
                    {step.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-[#85818E]">
                    <Clock className="w-3 h-3 text-[#8B3DFF]" />
                    <span>{step.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown Showcase */}
        <div className="rounded-3xl bg-[#0A0810]/80 backdrop-blur-xl border border-white/5 p-8 sm:p-10 shadow-[0_20px_50px_-15px_rgba(75,20,127,0.3)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#140E23] text-[#D7BFFF] border border-[#8B3DFF]/30">
                  {PROCESS_STEPS[activeStep].phase} // {PROCESS_STEPS[activeStep].duration}
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  SLA Guaranteed
                </span>
              </div>

              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-4">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-[#A7A3B1] leading-relaxed mb-6">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="flex flex-wrap items-center gap-2 lg:hidden mb-6">
                {PROCESS_STEPS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-colors ${
                      activeStep === i
                        ? 'bg-[#8B3DFF] text-white shadow-md'
                        : 'bg-[#140E23] text-[#85818E] border border-white/5'
                    }`}
                  >
                    0{i + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#07070B] border border-[#8B3DFF]/20">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#8B3DFF] mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Key Phase Deliverables
              </h4>
              <div className="space-y-3">
                {PROCESS_STEPS[activeStep].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#F7F5FA]">
                    <div className="w-5 h-5 rounded-full bg-[#8B3DFF]/20 flex items-center justify-center text-[#B15CFF] shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
