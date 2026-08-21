import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose, onOpenInquiry }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl aspect-[16/9] rounded-3xl bg-[#07070B] border border-[#8B3DFF]/40 shadow-[0_25px_70px_-10px_rgba(139,61,255,0.6)] overflow-hidden flex flex-col justify-between p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close showreel"
          className="absolute top-6 right-6 z-30 p-2.5 rounded-full bg-[#0A0810]/80 backdrop-blur-md border border-[#8B3DFF]/40 text-[#A7A3B1] hover:text-white hover:border-[#8B3DFF] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cinematic Animated Visual Stage */}
        <div className="absolute inset-0 bg-[#07070B] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-radial from-[#1E0E38] via-[#080512] to-[#030206]" />
          
          {/* Animated cosmic orb & energy ripples */}
          <div className="w-80 h-80 rounded-full border border-[#8B3DFF]/30 animate-orbit" />
          <div className="w-96 h-96 rounded-full border border-dashed border-[#B15CFF]/20 animate-orbit-reverse" />
          
          {/* Holographic Agency Reel HUD overlay */}
          <div className="relative z-10 text-center flex flex-col items-center px-4">
            <div className="inline-block px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[10px] uppercase tracking-[0.2em] font-bold mb-4 shadow-lg">
              SEO JAIPUR // 2026 AGENCY SHOWREEL
            </div>

            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              A Decade of Scaled Dominance.
            </h3>

            <p className="text-xs sm:text-sm text-[#A7A3B1] max-w-lg mb-6 leading-relaxed">
              Experience the convergence of 3D sensory production, full-funnel media architecture, and generative search mastery.
            </p>

            {/* Play/Pause Button in Center */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 rounded-full bg-[#8B3DFF] hover:bg-[#9B4DFF] border border-[#B15CFF]/50 flex items-center justify-center text-white shadow-[0_0_40px_rgba(139,61,255,0.7)] hover:scale-110 transition-transform cursor-pointer"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1 fill-white" />}
            </button>
          </div>
        </div>

        {/* Video Player Bottom Controls Bar */}
        <div className="relative z-20 mt-auto flex items-center justify-between bg-[#0A0810]/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#8B3DFF]/25">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-[#D7BFFF] hover:text-white"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-[#A7A3B1] hover:text-white"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D7BFFF]" />}
            </button>

            <span className="font-mono text-[11px] text-[#85818E]">
              01:48 / 02:30
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#8B3DFF] hover:bg-[#9B4DFF] flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
};
