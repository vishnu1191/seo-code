import React, { useState } from 'react';
import { TrendingUp, BarChart3, PieChart, Activity, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PERFORMANCE_METRICS } from '../data/agencyData';

interface PerformanceSectionProps {
  onOpenCaseStudies: () => void;
}

export const PerformanceSection: React.FC<PerformanceSectionProps> = ({ onOpenCaseStudies }) => {
  const [activeTimeframe, setActiveTimeframe] = useState<'all' | 'enterprise' | 'dtc'>('all');

  return (
    <section id="performance" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#4B147F]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
              Proven Performance
            </div>

            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
              Creative Means More When <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] to-[#D7BFFF]">
                It Drives Results.
              </span>
            </h2>

            <p className="text-[#A7A3B1] text-base leading-relaxed">
              We connect visionary brand aesthetics directly to bottom-line commercial acceleration. Here is what happens when mathematical rigor meets uncompromised creative execution.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCaseStudies}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-white bg-[#8B3DFF] hover:bg-[#9B4DFF] border border-[#B15CFF]/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,61,255,0.4)] cursor-pointer"
            >
              <span>Explore Verified Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Performance Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Traffic Line Graph Visualization */}
          <div className="group rounded-2xl bg-[#0A0810]/70 backdrop-blur-xl border border-white/5 hover:border-[#8B3DFF]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(139,61,255,0.25)]">
            <div>
              <div className="flex items-center justify-between text-xs text-[#85818E] mb-3">
                <span className="font-mono text-[#8B3DFF]">METRIC_01</span>
                <span className="bg-[#140E23] px-2 py-0.5 rounded text-[10px] text-emerald-400 font-mono font-semibold">+340% LIFT</span>
              </div>
              <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-[#D7BFFF] transition-colors">
                +340%
              </div>
              <div className="text-xs font-semibold text-[#F7F5FA] mb-1">Qualified Inbound Traffic</div>
              <div className="text-[11px] text-[#85818E] mb-6">Organic & GEO-driven search</div>
            </div>

            {/* SVG Line Graph */}
            <div className="relative w-full h-24 pt-2">
              <svg viewBox="0 0 200 80" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B3DFF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8B3DFF" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Area fill */}
                <path
                  d="M 0 70 Q 40 65, 70 50 T 130 30 T 200 10 L 200 80 L 0 80 Z"
                  fill="url(#lineGrad)"
                />
                {/* Stroke line */}
                <path
                  d="M 0 70 Q 40 65, 70 50 T 130 30 T 200 10"
                  fill="none"
                  stroke="#B15CFF"
                  strokeWidth="2.5"
                />
                {/* Endpoint pulsing dot */}
                <circle cx="200" cy="10" r="4" fill="#FFFFFF" stroke="#8B3DFF" strokeWidth="2" className="animate-pulse" />
              </svg>
            </div>
          </div>

          {/* Card 2: Conversion Bar Chart Visualization */}
          <div className="group rounded-2xl bg-[#0A0810]/70 backdrop-blur-xl border border-white/5 hover:border-[#8B3DFF]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(139,61,255,0.25)]">
            <div>
              <div className="flex items-center justify-between text-xs text-[#85818E] mb-3">
                <span className="font-mono text-[#8B3DFF]">METRIC_02</span>
                <span className="bg-[#140E23] px-2 py-0.5 rounded text-[10px] text-emerald-400 font-mono font-semibold">+185% CRO</span>
              </div>
              <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-[#D7BFFF] transition-colors">
                +185%
              </div>
              <div className="text-xs font-semibold text-[#F7F5FA] mb-1">Conversion Velocity</div>
              <div className="text-[11px] text-[#85818E] mb-6">Funnel & checkout optimization</div>
            </div>

            {/* SVG Bar Chart with glowing heights */}
            <div className="flex items-end justify-between h-24 gap-2 pt-2 px-1">
              {[35, 48, 62, 75, 90, 100].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 group-hover:scale-y-105 transition-transform duration-300 origin-bottom">
                  <div 
                    className={`w-full rounded-t-sm transition-all duration-500 ${
                      i === 5 
                        ? 'bg-gradient-to-t from-[#8B3DFF] to-[#D7BFFF] shadow-[0_0_12px_#8B3DFF]' 
                        : 'bg-[#1E1435] group-hover:bg-[#35105C]'
                    }`} 
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-[8px] font-mono text-[#85818E]">W{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: ROAS Circular Progress Ring */}
          <div className="group rounded-2xl bg-[#0A0810]/70 backdrop-blur-xl border border-white/5 hover:border-[#8B3DFF]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(139,61,255,0.25)]">
            <div>
              <div className="flex items-center justify-between text-xs text-[#85818E] mb-3">
                <span className="font-mono text-[#8B3DFF]">METRIC_03</span>
                <span className="bg-[#140E23] px-2 py-0.5 rounded text-[10px] text-emerald-400 font-mono font-semibold">4.4X ROAS</span>
              </div>
              <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-[#D7BFFF] transition-colors">
                4.4x
              </div>
              <div className="text-xs font-semibold text-[#F7F5FA] mb-1">Blended Return on Ad Spend</div>
              <div className="text-[11px] text-[#85818E] mb-4">Paid social & programmatic</div>
            </div>

            {/* Circular Progress Gauge */}
            <div className="relative flex items-center justify-center h-24">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" fill="none" stroke="#1F1235" strokeWidth="8" />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="url(#circleGrad)"
                  strokeWidth="8"
                  strokeDasharray="238"
                  strokeDashoffset="35"
                  strokeLinecap="round"
                  className="transition-all duration-1000 group-hover:stroke-[#D7BFFF]"
                />
                <defs>
                  <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B3DFF" />
                    <stop offset="100%" stopColor="#D7BFFF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute font-mono text-xs font-bold text-white">
                85%
              </div>
            </div>
          </div>

          {/* Card 4: Executive Retention Sparkline */}
          <div className="group rounded-2xl bg-[#0A0810]/70 backdrop-blur-xl border border-white/5 hover:border-[#8B3DFF]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(139,61,255,0.25)]">
            <div>
              <div className="flex items-center justify-between text-xs text-[#85818E] mb-3">
                <span className="font-mono text-[#8B3DFF]">METRIC_04</span>
                <span className="bg-[#140E23] px-2 py-0.5 rounded text-[10px] text-emerald-400 font-mono font-semibold">TIER 1</span>
              </div>
              <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-[#D7BFFF] transition-colors">
                96.4%
              </div>
              <div className="text-xs font-semibold text-[#F7F5FA] mb-1">Client Retention Rate</div>
              <div className="text-[11px] text-[#85818E] mb-6">Multi-year growth contracts</div>
            </div>

            {/* Circular Ring Gauge Dual Accent */}
            <div className="relative flex items-center justify-center h-24">
              <div className="w-16 h-16 rounded-full border-4 border-[#1F1235] border-t-[#8B3DFF] border-r-[#B15CFF] border-b-[#D7BFFF] flex items-center justify-center shadow-[0_0_20px_rgba(139,61,255,0.3)] animate-spin-slow">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
          </div>

        </div>

        {/* Footnote */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-[#85818E] tracking-wider">
            * Selected illustrative client telemetry and blended historical benchmarks across $140M+ managed ad pipeline.
          </p>
        </div>

      </div>
    </section>
  );
};
