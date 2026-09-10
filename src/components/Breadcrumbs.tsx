import React from 'react';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, onNavigate }) => {
  const pageTitles: Record<string, string> = {
    home: 'Home',
    about: 'About Us',
    services: 'Services & Capabilities',
    performance: 'Performance & Analytics',
    work: 'Case Studies & Portfolio',
    process: 'Strategic 4-Phase Process',
    calculator: 'ROI & Revenue Engine',
  };

  const currentTitle = pageTitles[currentPage] || currentPage;

  return (
    <div className="w-full bg-[#07050E]/80 border-b border-white/5 backdrop-blur-md pt-24 pb-3 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#85818E]">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-[#8B3DFF]" />
            <span>Home</span>
          </button>
          
          <ChevronRight className="w-3.5 h-3.5 opacity-40 text-[#85818E]" />
          
          <span className="text-[#D7BFFF] font-semibold tracking-wide">
            {currentTitle}
          </span>
        </nav>

        {/* Quick Back to Overview button if not home */}
        {currentPage !== 'home' && (
          <button
            onClick={() => onNavigate('home')}
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-[#A7A3B1] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-3 h-3 text-[#8B3DFF]" />
          </button>
        )}
      </div>
    </div>
  );
};
