import React, { useState } from 'react';
import { 
  Layers, 
  Sparkles, 
  Search, 
  ArrowUpRight, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  TrendingUp, 
  Star, 
  Filter 
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy } from '../types';

interface WorkPageProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  onOpenInquiry: (service?: string) => void;
  onNavigate: (page: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onSelectCaseStudy,
  onOpenInquiry,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: `All Portfolio (${CASE_STUDIES.length})` },
    { id: 'realestate', label: 'Real Estate & Havelis' },
    { id: 'luxury', label: 'Luxury & Beauty' },
    { id: 'hospitality', label: 'Royal Hospitality' },
    { id: 'gym', label: 'Gyms & Wellness' },
    { id: 'fashion', label: 'Haute Couture' },
  ];

  const filteredStudies = CASE_STUDIES.filter((study) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      study.category === selectedCategory ||
      (selectedCategory === 'realestate' && (study.industry.toLowerCase().includes('real estate') || study.industry.toLowerCase().includes('haveli') || study.industry.toLowerCase().includes('heritage'))) ||
      (selectedCategory === 'luxury' && (study.industry.toLowerCase().includes('luxury') || study.industry.toLowerCase().includes('d2c') || study.industry.toLowerCase().includes('jewelry') || study.industry.toLowerCase().includes('fragrance') || study.industry.toLowerCase().includes('beauty'))) ||
      (selectedCategory === 'hospitality' && (study.industry.toLowerCase().includes('hospitality') || study.industry.toLowerCase().includes('resort') || study.industry.toLowerCase().includes('palace') || study.industry.toLowerCase().includes('hotel'))) ||
      (selectedCategory === 'gym' && (study.industry.toLowerCase().includes('fitness') || study.industry.toLowerCase().includes('gym') || study.industry.toLowerCase().includes('wellness') || study.industry.toLowerCase().includes('spa'))) ||
      (selectedCategory === 'fashion' && (study.industry.toLowerCase().includes('couture') || study.industry.toLowerCase().includes('fashion') || study.industry.toLowerCase().includes('apparel')));

    const matchesSearch =
      searchQuery.trim() === '' ||
      study.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.summary.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#050508]">
      <Breadcrumbs currentPage="work" onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#8B3DFF]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#D7BFFF] text-xs uppercase tracking-[0.2em] font-bold mb-6 shadow-[0_0_15px_rgba(139,61,255,0.2)]">
              <Layers className="w-3.5 h-3.5 text-[#B15CFF]" />
              <span>Proven Enterprise Transformations</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Audited Case Studies &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] via-[#B15CFF] to-[#D7BFFF]">
                Revenue Outcomes
              </span>
            </h1>

            <p className="text-[#A7A3B1] text-base sm:text-lg leading-relaxed mb-8">
              Explore how we transformed search footprints, multiplied qualified leads, and scaled revenue across marquee industry leaders.
            </p>

            {/* Search & Filter Controls */}
            <div className="w-full max-w-xl mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#85818E]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search case studies by client, industry, or keyword..."
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-[#0A0810] border border-white/10 text-white placeholder-[#85818E] text-xs focus:outline-none focus:border-[#8B3DFF] transition-all"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#8B3DFF] text-white shadow-[0_0_20px_rgba(139,61,255,0.4)] scale-105'
                      : 'bg-[#0A0810] text-[#A7A3B1] hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Aggregate Outcomes Banner */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 p-6 rounded-3xl bg-[#0A0810]/80 border border-white/5 backdrop-blur-xl">
            {[
              { val: '₹450 Cr+', label: 'Total Tracked Pipeline' },
              { val: `${CASE_STUDIES.length}+`, label: 'Enterprise Case Studies' },
              { val: '3.8x – 5.4x', label: 'Average ROAS Multiplier' },
              { val: '96.8%', label: 'Long-Term Contract Retention' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-3">
                <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-0.5">
                  {stat.val}
                </div>
                <div className="text-[11px] font-mono text-[#85818E] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => onSelectCaseStudy(study)}
                className="rounded-3xl bg-[#0A0810]/90 backdrop-blur-xl border border-white/5 hover:border-[#8B3DFF]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(139,61,255,0.25)] hover:-translate-y-1 group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#07050E]">
                  <img
                    src={study.image}
                    alt={study.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0810] via-transparent to-transparent opacity-80" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="text-[9px] uppercase font-mono font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#0A0810]/80 backdrop-blur-md text-[#D7BFFF] border border-white/10">
                      {study.industry}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#8B3DFF] text-white shadow-md">
                      {study.metricHighlight}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-[11px] font-mono text-[#8B3DFF] font-bold uppercase tracking-wider mb-1">
                      {study.brand}
                    </div>

                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-[#D7BFFF] transition-colors leading-snug">
                      {study.title}
                    </h3>

                    <p className="text-xs text-[#A7A3B1] leading-relaxed mb-4 line-clamp-3">
                      {study.summary}
                    </p>
                  </div>

                  <div>
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {(study.technologies || []).slice(0, 3).map((tech, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#140E23] text-[#A7A3B1] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono font-bold text-[#D7BFFF] group-hover:text-white transition-colors">
                      <span>View Full Case Study</span>
                      <ArrowUpRight className="w-4 h-4 text-[#8B3DFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Custom Engagement Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#140E23] via-[#0A0810] to-[#140E23] border border-[#8B3DFF]/30 text-center flex flex-col items-center shadow-[0_0_50px_rgba(139,61,255,0.2)]">
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-3">
              Want a Similar Revenue Transformation for Your Brand?
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A3B1] max-w-xl mb-6">
              Let us review your market position and show you the exact roadmap we used to achieve top SERP rankings and multi-crore growth.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onOpenInquiry('Enterprise Case Study Strategy')}
                className="px-8 py-3.5 bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-[0_0_20px_rgba(139,61,255,0.4)] hover:scale-105 cursor-pointer"
              >
                Request Custom Growth Blueprint
              </button>
              <button
                onClick={() => {
                  onNavigate('process');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#120B20] hover:bg-[#1A1030] border border-white/10 text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all cursor-pointer"
              >
                Inspect 4-Phase Process
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
