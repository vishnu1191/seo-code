import React from 'react';
import { X, ArrowRight, TrendingUp, CheckCircle2, Layers, Cpu, MessageCircle } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onOpenInquiry: (initialService?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose, onOpenInquiry }) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0A0810] border border-[#8B3DFF]/35 shadow-[0_25px_60px_-15px_rgba(75,20,127,0.5)] p-6 sm:p-10 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-full bg-[#140E23] border border-[#8B3DFF]/30 text-[#A7A3B1] hover:text-white hover:border-[#8B3DFF] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="font-['Space_Grotesk'] font-bold text-xs tracking-wider uppercase text-white bg-[#8B3DFF]/25 px-3 py-1 rounded-full border border-[#8B3DFF]/40">
            {study.brand}
          </span>
          <span className="text-xs text-[#A7A3B1] bg-[#140E23] px-3 py-1 rounded-full border border-white/5">
            {study.industry}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
          {study.title}
        </h2>
        <p className="text-sm sm:text-base text-[#A7A3B1] mb-8 leading-relaxed">
          {study.tagline}
        </p>

        {/* Key Highlight Metric Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#140E23]/70 border border-white/10 mb-8">
          {study.results.map((res, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] to-[#D7BFFF]">
                {res.value}
              </span>
              <span className="text-[11px] text-[#85818E] font-medium mt-1">
                {res.label}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-2xl bg-[#07070B] border border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B15CFF] mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B15CFF]" />
              The Challenge
            </h4>
            <p className="text-xs sm:text-sm text-[#A7A3B1] leading-relaxed">
              {study.challenge}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#07070B] border border-white/5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              The Strategic Solution
            </h4>
            <p className="text-xs sm:text-sm text-[#A7A3B1] leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Technology & Channel Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold tracking-wider text-[#85818E] uppercase mb-3">
            Execution Infrastructure & Channels Deployed
          </h4>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-medium text-[#D7BFFF] bg-[#140E23] px-3 py-1.5 rounded-lg border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#85818E]">
            Looking for similar enterprise performance results for your category?
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/917014799233?text=${encodeURIComponent(`Hi SEO Jaipur Team, I am looking for growth architecture results similar to the ${study.brand} case study.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-bold text-black bg-[#25D366] hover:bg-[#20bd5a] shadow-[0_0_15px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenInquiry(`Project inspired by ${study.brand}`);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#8B3DFF] hover:bg-[#9B4DFF] shadow-[0_0_20px_rgba(139,61,255,0.4)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Discuss This Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
