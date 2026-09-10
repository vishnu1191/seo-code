import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Search, 
  Zap, 
  Globe2, 
  Compass, 
  Layers, 
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface PerformancePageProps {
  onOpenInquiry: (service?: string) => void;
  onNavigate: (page: string) => void;
}

export const PerformancePage: React.FC<PerformancePageProps> = ({ onOpenInquiry, onNavigate }) => {
  const [selectedMetric, setSelectedMetric] = useState<string>('traffic');
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('6m');

  const rankData = [
    { keyword: 'best seo agency in jaipur', position: '#1', volume: '14,800/mo', diff: 'Hard', trafficShare: '42%' },
    { keyword: 'luxury real estate haveli jaipur', position: '#1', volume: '8,200/mo', diff: 'High-Ticket', trafficShare: '54%' },
    { keyword: 'd2c organic skincare brand', position: '#1', volume: '33,000/mo', diff: 'High', trafficShare: '38%' },
    { keyword: 'top wedding resort jaipur palace', position: '#1', volume: '19,500/mo', diff: 'Competitive', trafficShare: '49%' },
    { keyword: '24/7 private luxury gym jaipur', position: '#1', volume: '6,400/mo', diff: 'Local Tier-1', trafficShare: '61%' },
    { keyword: 'google ads performance marketing agency', position: '#2', volume: '22,100/mo', diff: 'Enterprise', trafficShare: '28%' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#050508]">
      <Breadcrumbs currentPage="performance" onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#8B3DFF]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#D7BFFF] text-xs uppercase tracking-[0.2em] font-bold mb-6 shadow-[0_0_15px_rgba(139,61,255,0.2)]">
              <Activity className="w-3.5 h-3.5 text-[#B15CFF]" />
              <span>Real-Time Performance Telemetry</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Audited Search Data &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] via-[#B15CFF] to-[#D7BFFF]">
                Revenue Telemetry
              </span>
            </h1>

            <p className="text-[#A7A3B1] text-base sm:text-lg leading-relaxed mb-8">
              We replace guesswork with uncompromised empirical proof. Explore our audited search ranking positions, client pipeline trajectories, and blended return on ad spend.
            </p>

            {/* Timeframe Controls */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#0A0810] border border-white/10">
              {[
                { id: '30d', label: 'Last 30 Days' },
                { id: '90d', label: '90-Day Sprint' },
                { id: '6m', label: '6-Month Trajectory' },
                { id: '12m', label: '12-Month Impact' },
              ].map((tf) => (
                <button
                  key={tf.id}
                  onClick={() => setSelectedTimeframe(tf.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                    selectedTimeframe === tf.id
                      ? 'bg-[#8B3DFF] text-white shadow-[0_0_15px_rgba(139,61,255,0.35)]'
                      : 'text-[#85818E] hover:text-white'
                  }`}
                >
                  {tf.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              {
                id: 'traffic',
                metric: '+340%',
                label: 'High-Intent Organic Traffic',
                sub: 'Verified 6-Month Compounding Average',
                badge: 'Verified GA4 Data'
              },
              {
                id: 'conversions',
                metric: '+185%',
                label: 'Conversion Rate Lift (CRO)',
                sub: 'Across 48 Enterprise Deployments',
                badge: 'Heatmap Optimized'
              },
              {
                id: 'roas',
                metric: '4.4x',
                label: 'Blended Return on Ad Spend',
                sub: 'On ₹12 Cr+ Annual Managed Ad Budgets',
                badge: 'CAPI Verified'
              },
              {
                id: 'retention',
                metric: '96.8%',
                label: 'Annual Client Retention',
                sub: 'Long-Term Contract Renewals',
                badge: 'Industry Top 1%'
              }
            ].map((card) => {
              const isSelected = selectedMetric === card.id;
              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedMetric(card.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#140E23] border-2 border-[#8B3DFF] shadow-[0_0_30px_rgba(139,61,255,0.3)] scale-[1.02]'
                      : 'bg-[#0A0810] border border-white/5 hover:border-[#8B3DFF]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] uppercase font-mono font-bold tracking-widest px-2 py-0.5 rounded bg-white/5 text-[#D7BFFF]">
                      {card.badge}
                    </span>
                    <TrendingUp className="w-4 h-4 text-[#8B3DFF]" />
                  </div>

                  <div>
                    <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-black text-white mb-1">
                      {card.metric}
                    </div>
                    <div className="text-xs font-bold text-[#A7A3B1] mb-1">
                      {card.label}
                    </div>
                    <div className="text-[10px] text-[#85818E]">
                      {card.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Live SERP Rank Tracker Section */}
          <div className="mb-20 rounded-3xl bg-[#080612] border border-white/5 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B3DFF]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-[#8B3DFF] uppercase tracking-wider">
                    Live SERP 1 Telemetry Matrix
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                  Sample Target Keyword Rankings & Traffic Share
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#85818E] bg-[#120B20] px-3.5 py-1.5 rounded-full border border-white/5">
                <Globe2 className="w-3.5 h-3.5 text-[#8B3DFF]" />
                <span>Google India & Global Search Console</span>
              </div>
            </div>

            {/* Keyword Rank Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-[#85818E] font-mono uppercase tracking-wider">
                    <th className="pb-3 px-4">Search Term / Target Keyword</th>
                    <th className="pb-3 px-4">Google SERP Rank</th>
                    <th className="pb-3 px-4">Search Volume</th>
                    <th className="pb-3 px-4">Keyword Difficulty</th>
                    <th className="pb-3 px-4">Traffic Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-[#C5C2CE]">
                  {rankData.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 font-medium text-white flex items-center gap-2">
                        <Search className="w-3.5 h-3.5 text-[#8B3DFF] shrink-0" />
                        <span>{row.keyword}</span>
                      </td>
                      <td className="py-4 px-4 font-mono font-bold text-emerald-400">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                          {row.position} Rank
                        </span>
                      </td>
                      <td className="py-4 px-4 font-mono text-[#A7A3B1]">{row.volume}</td>
                      <td className="py-4 px-4 font-mono text-[#D7BFFF]">{row.diff}</td>
                      <td className="py-4 px-4 font-mono font-bold text-white">{row.trafficShare}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Industry Performance Multipliers */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="text-xs font-mono font-bold text-[#8B3DFF] uppercase tracking-widest mb-2">
                Cross-Vertical Benchmarks
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-2">
                Audited Performance Across Key Sectors
              </h3>
              <p className="text-xs text-[#A7A3B1]">
                Every industry vertical commands a tailored search strategy and conversion architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  sector: 'Ultra-Luxury Real Estate & Havelis',
                  highlight: '₹185 Cr+ Deal Volume',
                  stat: '+390% High-Net-Worth Inquiries',
                  desc: 'Private 3D tour rooms, biometric lead gating, and hyper-targeted search for multi-crore property buyers.'
                },
                {
                  sector: 'Direct-to-Consumer & Luxury Beauty',
                  highlight: '+420% Direct Revenue',
                  stat: '4.8x First-Touch ROAS',
                  desc: 'Entity SEO, sub-second Shopify checkouts, and high-converting Meta dynamic creative testing.'
                },
                {
                  sector: 'Royal Hospitality & Palaces',
                  highlight: '₹35 Cr Wedding Inquiries',
                  stat: '100% Peak Season Occupancy',
                  desc: 'Direct booking engines saving ₹7 Cr+ in OTA commissions with high-intent search visibility.'
                },
                {
                  sector: 'Elite Athletic Gyms & Studios',
                  highlight: '+480% Annual VIP Memberships',
                  stat: '#1 Rank in 15+ Localities',
                  desc: 'Google Local 3-Pack domination, 24/7 digital pass onboarding, and member retention automations.'
                },
                {
                  sector: 'Corporate IT & Commercial Parks',
                  highlight: '1.2M Sq.Ft Leased',
                  stat: '8 Fortune 500 Tenants',
                  desc: 'B2B commercial real estate search funnels, floorplate calculators, and ESG compliance showcases.'
                },
                {
                  sector: 'Fine Jewelry & Heritage Polki',
                  highlight: '+380% Bridal Bookings',
                  stat: '₹28.5 Lakh Avg Ticket Size',
                  desc: '4K video canvas vaults, global NRI bridal SEO, and private virtual showroom appointment scheduling.'
                }
              ].map((ind, iIdx) => (
                <div
                  key={iIdx}
                  className="p-6 rounded-2xl bg-[#0A0810] border border-white/5 hover:border-[#8B3DFF]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] uppercase font-mono font-bold text-[#8B3DFF] mb-2">
                      {ind.sector}
                    </div>
                    <div className="font-['Space_Grotesk'] text-xl font-bold text-white mb-1">
                      {ind.highlight}
                    </div>
                    <div className="text-xs font-mono text-emerald-400 mb-3">
                      {ind.stat}
                    </div>
                    <p className="text-xs text-[#85818E] leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('work')}
                      className="text-xs font-mono font-bold text-[#D7BFFF] hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Related Case Studies</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Audit CTA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#140E23] via-[#0A0810] to-[#140E23] border border-[#8B3DFF]/30 text-center flex flex-col items-center shadow-[0_0_50px_rgba(139,61,255,0.2)]">
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-3">
              Want a Live Forensic Audit of Your Website?
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A3B1] max-w-xl mb-6">
              Receive a comprehensive 24-point technical, keyword, and competitor vulnerability report prepared by our senior search engineers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onOpenInquiry('Comprehensive Forensic Audit')}
                className="px-8 py-3.5 bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-[0_0_20px_rgba(139,61,255,0.4)] hover:scale-105 cursor-pointer"
              >
                Claim Free 24-Point Audit
              </button>
              <button
                onClick={() => {
                  onNavigate('work');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#120B20] hover:bg-[#1A1030] border border-white/10 text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all cursor-pointer"
              >
                Browse Case Studies
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
