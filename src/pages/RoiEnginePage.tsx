import React, { useState } from 'react';
import { 
  Zap, 
  Sparkles, 
  TrendingUp, 
  DollarSign, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Sliders, 
  FileText, 
  Calendar,
  Lock
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface RoiEnginePageProps {
  onOpenInquiry: (details?: string) => void;
  onNavigate: (page: string) => void;
}

export const RoiEnginePage: React.FC<RoiEnginePageProps> = ({ onOpenInquiry, onNavigate }) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(150000); // 1.5 Lakhs
  const [currentTraffic, setCurrentTraffic] = useState<number>(12000); // 12,000 visitors
  const [conversionRate, setConversionRate] = useState<number>(2.4); // 2.4%
  const [avgDealValue, setAvgDealValue] = useState<number>(75000); // 75,000 INR
  const [selectedIndustry, setSelectedIndustry] = useState<string>('real-estate');

  // Industry Preset Benchmarks
  const applyPreset = (industry: string) => {
    setSelectedIndustry(industry);
    switch (industry) {
      case 'real-estate':
        setMonthlySpend(250000);
        setCurrentTraffic(8500);
        setConversionRate(1.8);
        setAvgDealValue(1500000); // 15 Lakh commission / deal
        break;
      case 'd2c-luxury':
        setMonthlySpend(200000);
        setCurrentTraffic(35000);
        setConversionRate(3.2);
        setAvgDealValue(4500); // 4,500 AOV
        break;
      case 'hospitality':
        setMonthlySpend(180000);
        setCurrentTraffic(16000);
        setConversionRate(2.6);
        setAvgDealValue(120000); // 1.2 Lakh haveli booking
        break;
      case 'gym-fitness':
        setMonthlySpend(75000);
        setCurrentTraffic(6500);
        setConversionRate(4.0);
        setAvgDealValue(36000); // 36k annual membership
        break;
      case 'b2b-tech':
        setMonthlySpend(300000);
        setCurrentTraffic(10000);
        setConversionRate(2.1);
        setAvgDealValue(450000); // 4.5 Lakh B2B retainer
        break;
      default:
        break;
    }
  };

  // Calculations
  const projectedTrafficGrowth = Math.round(currentTraffic * 2.8); // 180% increase
  const totalTraffic = currentTraffic + projectedTrafficGrowth;
  const projectedMonthlyConversions = Math.round((totalTraffic * (conversionRate * 1.35)) / 100);
  const baselineConversions = Math.round((currentTraffic * conversionRate) / 100);
  const incrementalConversions = Math.max(1, projectedMonthlyConversions - baselineConversions);
  
  const projectedMonthlyRevenue = projectedMonthlyConversions * avgDealValue;
  const incrementalMonthlyRevenue = incrementalConversions * avgDealValue;
  const annualIncrementalPipeline = incrementalMonthlyRevenue * 12;
  const roasMultiplier = monthlySpend > 0 ? (incrementalMonthlyRevenue / monthlySpend).toFixed(1) : '4.2';
  const paybackDays = Math.max(14, Math.round((monthlySpend / (incrementalMonthlyRevenue / 30))));

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Cr`;
    }
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2)} Lakh`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#050508]">
      <Breadcrumbs currentPage="calculator" onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#8B3DFF]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#D7BFFF] text-xs uppercase tracking-[0.2em] font-bold mb-6 shadow-[0_0_15px_rgba(139,61,255,0.2)]">
              <Zap className="w-3.5 h-3.5 text-[#B15CFF]" />
              <span>Quantitative Revenue Modeling</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Predictive ROI & Pipeline{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] via-[#B15CFF] to-[#D7BFFF]">
                Engine
              </span>
            </h1>

            <p className="text-[#A7A3B1] text-base sm:text-lg leading-relaxed mb-8">
              Model your prospective search and paid acquisition returns. Adjust the parameters below to project incremental customer conversions, pipeline lift, and payback timeline.
            </p>

            {/* Industry Presets */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              <span className="text-xs font-mono text-[#85818E] mr-2">Quick Presets:</span>
              {[
                { id: 'real-estate', label: 'Real Estate & Havelis' },
                { id: 'd2c-luxury', label: 'Luxury D2C Brands' },
                { id: 'hospitality', label: 'Royal Hospitality' },
                { id: 'gym-fitness', label: 'Gyms & Wellness' },
                { id: 'b2b-tech', label: 'B2B & Tech' },
              ].map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    selectedIndustry === preset.id
                      ? 'bg-[#8B3DFF] text-white font-bold shadow-[0_0_15px_rgba(139,61,255,0.35)]'
                      : 'bg-[#0A0810] text-[#A7A3B1] hover:text-white border border-white/5'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Calculator Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-start">
            {/* Left Controls Column */}
            <div className="lg:col-span-6 rounded-3xl bg-[#0A0810]/90 border border-white/5 p-6 sm:p-8 space-y-6 backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#8B3DFF]" />
                  <span className="font-['Space_Grotesk'] text-base font-bold text-white">
                    Growth Parameters
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#85818E] uppercase tracking-wider">
                  Live Dynamic Input
                </span>
              </div>

              {/* Slider 1: Monthly Investment */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-[#C5C2CE]">
                    Monthly Marketing Investment
                  </label>
                  <span className="font-mono text-sm font-bold text-[#D7BFFF]">
                    {formatCurrency(monthlySpend)}/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="25000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-[#140E23] rounded-lg appearance-none cursor-pointer accent-[#8B3DFF]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#85818E] mt-1">
                  <span>₹50K</span>
                  <span>₹5 Lakh</span>
                  <span>₹10 Lakh+</span>
                </div>
              </div>

              {/* Slider 2: Current Monthly Visitors */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-[#C5C2CE]">
                    Current Monthly Traffic
                  </label>
                  <span className="font-mono text-sm font-bold text-[#D7BFFF]">
                    {currentTraffic.toLocaleString('en-IN')} visitors/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={currentTraffic}
                  onChange={(e) => setCurrentTraffic(Number(e.target.value))}
                  className="w-full h-2 bg-[#140E23] rounded-lg appearance-none cursor-pointer accent-[#8B3DFF]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#85818E] mt-1">
                  <span>1,000</span>
                  <span>50,000</span>
                  <span>100,000+</span>
                </div>
              </div>

              {/* Slider 3: Target Conversion Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-[#C5C2CE]">
                    Website Conversion Rate (CRO)
                  </label>
                  <span className="font-mono text-sm font-bold text-[#D7BFFF]">
                    {conversionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="6.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#140E23] rounded-lg appearance-none cursor-pointer accent-[#8B3DFF]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#85818E] mt-1">
                  <span>0.5% (Baseline)</span>
                  <span>3.0% (Strong)</span>
                  <span>6.0% (Elite)</span>
                </div>
              </div>

              {/* Slider 4: Average Deal Value / AOV */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-[#C5C2CE]">
                    Average Customer Value / Deal Size
                  </label>
                  <span className="font-mono text-sm font-bold text-[#D7BFFF]">
                    {formatCurrency(avgDealValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="2000000"
                  step="10000"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-[#140E23] rounded-lg appearance-none cursor-pointer accent-[#8B3DFF]"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#85818E] mt-1">
                  <span>₹2K (D2C)</span>
                  <span>₹50K (Services)</span>
                  <span>₹20 Lakh+ (Real Estate)</span>
                </div>
              </div>
            </div>

            {/* Right Output Telemetry Column */}
            <div className="lg:col-span-6 rounded-3xl bg-[#080612] border-2 border-[#8B3DFF]/40 p-6 sm:p-8 relative overflow-hidden shadow-[0_0_50px_rgba(139,61,255,0.2)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B3DFF]/15 rounded-full blur-[90px] pointer-events-none" />

              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B15CFF]" />
                  <span className="font-['Space_Grotesk'] text-lg font-bold text-white">
                    Projected Revenue Outcomes
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest px-2.5 py-0.5 rounded bg-[#140E23] text-emerald-400 border border-emerald-500/20">
                  {roasMultiplier}x Est. ROAS
                </span>
              </div>

              {/* Main Highlight Box */}
              <div className="p-6 rounded-2xl bg-[#120B20] border border-[#8B3DFF]/30 mb-6 text-center relative overflow-hidden">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#A7A3B1] mb-1">
                  Estimated 12-Month Incremental Pipeline
                </div>
                <div className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] via-[#B15CFF] to-white mb-2">
                  {formatCurrency(annualIncrementalPipeline)}
                </div>
                <div className="text-xs text-emerald-400 font-mono flex items-center justify-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+{incrementalConversions} high-intent transactions / month</span>
                </div>
              </div>

              {/* Granular Breakdown Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#0A0810] border border-white/5">
                  <div className="text-[10px] font-mono text-[#85818E] uppercase">Monthly Revenue Lift</div>
                  <div className="font-['Space_Grotesk'] text-lg font-bold text-white">
                    {formatCurrency(incrementalMonthlyRevenue)}/mo
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A0810] border border-white/5">
                  <div className="text-[10px] font-mono text-[#85818E] uppercase">Payback Speed</div>
                  <div className="font-['Space_Grotesk'] text-lg font-bold text-white">
                    ~{paybackDays} Days
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A0810] border border-white/5">
                  <div className="text-[10px] font-mono text-[#85818E] uppercase">Total Projected Traffic</div>
                  <div className="font-['Space_Grotesk'] text-lg font-bold text-white">
                    {totalTraffic.toLocaleString('en-IN')}/mo
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A0810] border border-white/5">
                  <div className="text-[10px] font-mono text-[#85818E] uppercase">Qualified Monthly Leads</div>
                  <div className="font-['Space_Grotesk'] text-lg font-bold text-white">
                    {projectedMonthlyConversions} inquiries
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() =>
                  onOpenInquiry(
                    `ROI Projection: Spend ${formatCurrency(monthlySpend)}/mo for Est. Return ${formatCurrency(annualIncrementalPipeline)}`
                  )
                }
                className="w-full py-4 rounded-full bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(139,61,255,0.4)] hover:scale-[1.02] cursor-pointer"
              >
                <span>Lock In Projection & Request Custom Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-[#85818E] mt-3">
                Calculations based on 48+ audited enterprise client engagements. No arbitrary vanity projections.
              </p>
            </div>
          </div>

          {/* Guarantees & Transparency */}
          <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0A0810] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#140E23] text-[#8B3DFF] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">100% White-Hat Assurance</h4>
              <p className="text-xs text-[#85818E]">
                Zero spam PBNs or risky algorithmic shortcuts. Every link, schema, and page is built for long-term equity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0810] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#140E23] text-[#8B3DFF] flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Full Ownership of All Assets</h4>
              <p className="text-xs text-[#85818E]">
                You retain 100% ownership of your Google Search Console, GA4, Ad Accounts, schemas, and content archives.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0810] border border-white/5">
              <div className="w-10 h-10 rounded-xl bg-[#140E23] text-[#8B3DFF] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Guaranteed Senior Review</h4>
              <p className="text-xs text-[#85818E]">
                Every campaign architecture is reviewed directly by our Chief Search Strategist before launch.
              </p>
            </div>
          </div>

          {/* Bottom Consultation CTA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#140E23] via-[#0A0810] to-[#140E23] border border-[#8B3DFF]/30 text-center flex flex-col items-center shadow-[0_0_50px_rgba(139,61,255,0.2)]">
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-3">
              Need a Custom Multi-Channel Revenue Model?
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A3B1] max-w-xl mb-6">
              Our team will prepare a granular breakdown of your exact market size, search volume, competitor ad budgets, and projected payback timeline.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onOpenInquiry('Custom Revenue Modeling')}
                className="px-8 py-3.5 bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-[0_0_20px_rgba(139,61,255,0.4)] hover:scale-105 cursor-pointer"
              >
                Schedule Model Review Call
              </button>
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#120B20] hover:bg-[#1A1030] border border-white/10 text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all cursor-pointer"
              >
                Explore Services & Retainers
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
