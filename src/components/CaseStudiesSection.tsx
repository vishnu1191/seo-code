import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, TrendingUp, Filter, Eye } from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy } from '../types';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectCaseStudy }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'luxury', label: 'Luxury & Beauty' },
    { id: 'realestate', label: 'Real Estate' },
    { id: 'gym', label: 'Gym & Fitness' },
    { id: 'hospitality', label: 'Hospitality & Wellness' },
    { id: 'fashion', label: 'Haute Couture' },
  ];

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (activeFilter === 'all') return true;
    return study.category === activeFilter;
  });

  return (
    <section id="work" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#8B3DFF]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-block px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
              Featured Deployments
            </div>

            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Selected Work. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] to-[#D7BFFF]">
                Measurable Impact.
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {filters.map((filter) => {
              const count = filter.id === 'all'
                ? CASE_STUDIES.length
                : CASE_STUDIES.filter((s) => s.category === filter.id).length;

              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    activeFilter === filter.id
                      ? 'bg-[#8B3DFF] text-white shadow-[0_0_15px_rgba(139,61,255,0.4)] border border-[#B15CFF]/60'
                      : 'bg-[#0A0810]/80 text-[#A7A3B1] border border-white/5 hover:text-white hover:border-[#8B3DFF]/35'
                  }`}
                >
                  <span>{filter.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    activeFilter === filter.id
                      ? 'bg-white/20 text-white font-bold'
                      : 'bg-white/5 text-[#85818E]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Study Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              id={`case-study-card-${study.id}`}
              onClick={() => onSelectCaseStudy(study)}
              className="group relative rounded-3xl overflow-hidden bg-[#0A0810] border border-white/5 hover:border-[#8B3DFF]/50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(139,61,255,0.35)] cursor-pointer flex flex-col"
            >
              {/* Image Canvas with Zoom on Hover */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#07070B]">
                <img
                  src={study.image}
                  alt={study.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />

                {/* Dark Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0810] via-[#0A0810]/40 to-transparent" />
                <div className="absolute inset-0 bg-[#35105C]/15 group-hover:bg-transparent transition-colors duration-500" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="font-['Space_Grotesk'] font-bold text-xs tracking-wider uppercase text-white bg-[#0A0810]/85 px-3 py-1 rounded-full border border-[#8B3DFF]/30 backdrop-blur-md">
                    {study.brand}
                  </span>
                  <span className="text-[10px] text-[#A7A3B1] bg-[#0A0810]/70 px-2.5 py-1 rounded-full border border-white/5 backdrop-blur-md hidden sm:inline">
                    {study.industry}
                  </span>
                </div>

                {/* Impact Metric Floating Tag */}
                <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-[#0A0810]/90 backdrop-blur-md border border-[#8B3DFF]/35 px-3.5 py-1.5 rounded-xl shadow-lg group-hover:border-[#B15CFF]/60 transition-colors">
                  <TrendingUp className="w-3.5 h-3.5 text-[#B15CFF]" />
                  <div className="flex flex-col text-right">
                    <span className="font-['Space_Grotesk'] font-bold text-sm text-white">{study.metricHighlight}</span>
                    <span className="text-[9px] text-[#85818E]">{study.metricLabel}</span>
                  </div>
                </div>

                {/* View Details Eye indicator on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-4 py-2 rounded-full bg-[#8B3DFF]/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-2 shadow-[0_0_25px_rgba(139,61,255,0.6)]">
                    <Eye className="w-4 h-4" />
                    <span>View Case Study Brief</span>
                  </div>
                </div>
              </div>

              {/* Card Bottom Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-white group-hover:text-[#D7BFFF] transition-colors mb-2 leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A3B1] line-clamp-2 mb-5">
                    {study.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#8B3DFF]/15 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {study.technologies.slice(0, 2).map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] text-[#85818E] bg-[#140E23] px-2 py-0.5 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-[#8B3DFF] group-hover:text-white transition-colors">
                    <span>Deep Dive</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
