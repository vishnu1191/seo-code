import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/agencyData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
            Strategic FAQ
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Frequently Addressed Questions.
          </h2>

          <p className="text-[#A7A3B1] text-sm sm:text-base">
            Everything you need to know about partnering with our digital growth teams.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#0A0810]/90 border-[#8B3DFF]/50 shadow-[0_10px_30px_-10px_rgba(139,61,255,0.25)]'
                    : 'bg-[#0A0810]/60 border-white/5 hover:border-[#8B3DFF]/35'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#8B3DFF]">0{idx + 1}</span>
                    <span className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-white">
                      {item.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full bg-[#140E23] border border-white/5 flex items-center justify-center text-[#D7BFFF] shrink-0 ${
                      isOpen ? 'bg-[#8B3DFF] text-white shadow-[0_0_12px_rgba(139,61,255,0.5)]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#A7A3B1] leading-relaxed border-t border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
