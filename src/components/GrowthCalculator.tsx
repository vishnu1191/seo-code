import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, TrendingUp, DollarSign, Target, ShieldCheck } from 'lucide-react';

interface GrowthCalculatorProps {
  onOpenInquiry: (initialService?: string) => void;
}

export const GrowthCalculator: React.FC<GrowthCalculatorProps> = ({ onOpenInquiry }) => {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(150000);
  const [targetMultiplier, setTargetMultiplier] = useState<number>(3.5);
  const [industry, setIndustry] = useState<string>('Luxury / DTC');

  // Calculations
  const projectedMonthly = monthlyRevenue * (1 + targetMultiplier * 0.45);
  const annualIncrementalRevenue = (projectedMonthly - monthlyRevenue) * 12;
  const projectedROAS = (targetMultiplier * 1.15).toFixed(1);
  const estimatedPaybackMonths = monthlyRevenue > 250000 ? '1.8 Mo' : '2.4 Mo';

  return (
    <section id="calculator" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[450px] bg-[#8B3DFF]/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
            Interactive ROI Engine
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Estimate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] to-[#D7BFFF]">
              Compounded Revenue Lift.
            </span>
          </h2>

          <p className="text-[#A7A3B1] text-base leading-relaxed">
            Model your brand&apos;s growth trajectory using our predictive telemetry algorithms calibrated on $140M+ in verified client ad spend.
          </p>
        </div>

        {/* Calculator Interactive Board */}
        <div className="rounded-3xl bg-[#0A0810]/80 backdrop-blur-2xl border border-white/5 p-6 sm:p-10 shadow-[0_20px_60px_-15px_rgba(75,20,127,0.35)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Input Controls Column */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Monthly Revenue Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#A7A3B1]">
                    Current Monthly Revenue
                  </label>
                  <span className="font-mono text-sm font-bold text-white bg-[#140E23] px-3 py-1 rounded-lg border border-white/5">
                    ${monthlyRevenue.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min={25000}
                  max={1000000}
                  step={25000}
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-[#1E1435] rounded-lg appearance-none cursor-pointer accent-[#8B3DFF]"
                />
                <div className="flex justify-between text-[10px] text-[#85818E] mt-1 font-mono">
                  <span>$25K / mo</span>
                  <span>$500K / mo</span>
                  <span>$1M+ / mo</span>
                </div>
              </div>

              {/* Target Growth Multiplier */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#A7A3B1]">
                    Target Performance Multiplier
                  </label>
                  <span className="font-mono text-sm font-bold text-[#D7BFFF] bg-[#140E23] px-3 py-1 rounded-lg border border-white/5">
                    {targetMultiplier}x Velocity
                  </span>
                </div>
                <input
                  type="range"
                  min={1.5}
                  max={6.0}
                  step={0.5}
                  value={targetMultiplier}
                  onChange={(e) => setTargetMultiplier(Number(e.target.value))}
                  className="w-full h-2 bg-[#1E1435] rounded-lg appearance-none cursor-pointer accent-[#8B3DFF]"
                />
                <div className="flex justify-between text-[10px] text-[#85818E] mt-1 font-mono">
                  <span>1.5x (Conservative)</span>
                  <span>3.5x (Aggressive)</span>
                  <span>6.0x (Category Leader)</span>
                </div>
              </div>

              {/* Industry Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A3B1] mb-2">
                  Market Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Luxury / DTC', 'Gym & Fitness', 'Real Estate', 'Haute Couture', 'Hospitality', 'Healthcare'].map((ind) => (
                    <button
                      key={ind}
                      type="button"
                      onClick={() => setIndustry(ind)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium tracking-wide transition-all ${
                        industry === ind
                          ? 'bg-[#8B3DFF] text-white border border-[#B15CFF]/60 shadow-[0_0_15px_rgba(139,61,255,0.3)]'
                          : 'bg-[#07070B] text-[#85818E] border border-white/5 hover:text-white'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Projected Output Display Column */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#140E23] to-[#07070B] border border-white/10 shadow-inner flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between text-xs text-[#85818E] mb-4 pb-3 border-b border-white/5">
                  <span className="font-mono text-[#8B3DFF]">SIMULATION_RESULTS // {industry}</span>
                  <span className="text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    High Feasibility
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-[11px] font-semibold text-[#85818E] uppercase tracking-wider block mb-1">
                    Projected Annual Incremental Lift
                  </span>
                  <div className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D7BFFF] to-[#8B3DFF]">
                    +${Math.round(annualIncrementalRevenue).toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-[#0A0810]/70 border border-white/5">
                    <span className="text-[10px] text-[#85818E] uppercase tracking-wider block">Projected ROAS</span>
                    <span className="font-['Space_Grotesk'] text-xl font-bold text-white mt-1 block">
                      {projectedROAS}x Return
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0A0810]/70 border border-white/5">
                    <span className="text-[10px] text-[#85818E] uppercase tracking-wider block">Est. CAC Payback</span>
                    <span className="font-['Space_Grotesk'] text-xl font-bold text-white mt-1 block">
                      {estimatedPaybackMonths}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenInquiry(`Custom ROI Plan: $${monthlyRevenue.toLocaleString()} base to ${targetMultiplier}x (${industry})`)}
                className="w-full py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#8B3DFF] hover:bg-[#9B4DFF] shadow-[0_0_25px_rgba(139,61,255,0.4)] flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
              >
                <span>Claim Your Custom Growth Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
