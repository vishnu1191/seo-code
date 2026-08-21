import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '917014799233';
  const defaultMessage = encodeURIComponent('Hi SEO Jaipur Team, I would like to discuss a project growth strategy for my business.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Floating Tooltip / Mini Preview */}
      {showTooltip && (
        <div className="mb-3 w-72 rounded-2xl bg-[#0A0810]/95 backdrop-blur-xl border border-[#25D366]/40 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(37,211,102,0.25)] animate-in fade-in slide-in-from-bottom-2 duration-200 text-left">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#0A0810] animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block font-['Space_Grotesk']">
                  SEO Jaipur VIP Desk
                </span>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Online • VIP Growth Desk
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#85818E] hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-[#A7A3B1] leading-relaxed mb-3">
            Have a project in mind? Connect directly with our lead growth strategist on WhatsApp.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="relative group">
        {/* Glowing Ping Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-md group-hover:bg-[#25D366]/70 transition-all animate-pulse" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

        <a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          aria-label="Chat on WhatsApp VIP Desk"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#22c35e] text-white shadow-[0_10px_30px_rgba(37,211,102,0.5),0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer"
        >
          <MessageCircle className="w-7 h-7 text-[#050508] fill-[#050508]" />
          
          {/* Status Badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#050508] rounded-full" />
        </a>
      </div>
    </div>
  );
};
