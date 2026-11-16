import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  Search, 
  X, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/agencyData';
import { FAQItem } from '../types';

interface FAQSectionProps {
  onOpenInquiry?: (intent?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['seo-timeline']); // default first item open

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(FAQ_ITEMS.map((item) => item.category)));
    return ['All', ...cats];
  }, []);

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        (item.highlights && item.highlights.some((h) => h.toLowerCase().includes(q)));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredItems.map((item) => item.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  // Structured Data for Google FAQPage Rich Snippets
  const faqSchema = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  }, []);

  return (
    <section id="faq" className="relative py-20 lg:py-28 overflow-hidden bg-[#050508]/60 border-t border-white/5">
      {/* Schema.org FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#8B3DFF]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#25D366]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[11px] uppercase tracking-[0.2em] font-bold mb-4 shadow-[0_0_15px_rgba(139,61,255,0.2)]">
            <HelpCircle className="w-3.5 h-3.5" />
            Client Knowledge Base & FAQ
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-white via-[#D7BFFF] to-[#8B3DFF] bg-clip-text text-transparent">Questions</span>.
          </h2>

          <p className="text-[#A7A3B1] text-sm sm:text-base max-w-2xl leading-relaxed">
            Straightforward answers to the most common queries about SEO rankings, Meta & Google Ads management, AI funnels, budgets, and technical attribution.
          </p>

          {/* Key Metric Guarantees Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl mt-8">
            <div className="p-3.5 rounded-xl bg-[#0E0A1A]/80 border border-white/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#8B3DFF]/15 border border-[#8B3DFF]/30 flex items-center justify-center text-[#B15CFF] shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">30–45 Days</div>
                <div className="text-[11px] text-[#A7A3B1]">Local Maps 3-Pack Traction</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0E0A1A]/80 border border-white/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">4.5x – 7.5x+</div>
                <div className="text-[11px] text-[#A7A3B1]">Target Blended ROAS</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0E0A1A]/80 border border-white/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#00F0FF]/15 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">100% White-Hat</div>
                <div className="text-[11px] text-[#A7A3B1]">Google Algorithm Resilient</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filter Bar & Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A7A3B1]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g., budget, timeline, maps, ROAS, WhatsApp)..."
                className="w-full pl-10 pr-9 py-2.5 bg-[#0D0A18] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-[#716C80] focus:outline-none focus:border-[#8B3DFF] focus:ring-1 focus:ring-[#8B3DFF] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A7A3B1] hover:text-white"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Expand / Collapse Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={expandAll}
                className="px-3 py-2 text-[11px] font-semibold text-[#D7BFFF] hover:text-white bg-[#140E23] hover:bg-[#1C1433] border border-white/5 rounded-lg transition-colors cursor-pointer"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-2 text-[11px] font-semibold text-[#A7A3B1] hover:text-white bg-[#140E23] hover:bg-[#1C1433] border border-white/5 rounded-lg transition-colors cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count =
                cat === 'All'
                  ? FAQ_ITEMS.length
                  : FAQ_ITEMS.filter((i) => i.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#8B3DFF] text-white shadow-[0_0_15px_rgba(139,61,255,0.4)]'
                      : 'bg-[#0E0A1A] text-[#A7A3B1] hover:text-white border border-white/5 hover:border-white/15'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-[#716C80]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion List */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-2xl bg-[#0D0A18] border border-white/5">
            <HelpCircle className="w-10 h-10 text-[#716C80] mx-auto mb-3" />
            <h3 className="text-white font-semibold text-base mb-1">No matching questions found</h3>
            <p className="text-[#A7A3B1] text-xs max-w-md mx-auto mb-4">
              We couldn't find any questions matching "{searchQuery}". Reach out directly to discuss your requirements.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 bg-[#8B3DFF]/20 text-[#D7BFFF] hover:bg-[#8B3DFF]/30 border border-[#8B3DFF]/30 rounded-lg text-xs font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredItems.map((item, idx) => {
              const isOpen = openIds.includes(item.id);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#0E0A1A] border-[#8B3DFF]/50 shadow-[0_8px_30px_-10px_rgba(139,61,255,0.25)]'
                      : 'bg-[#0D0A18]/80 border-white/5 hover:border-[#8B3DFF]/35'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      <span className="font-mono text-xs text-[#8B3DFF] pt-0.5 shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-[#A7A3B1] border border-white/5">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="font-['Space_Grotesk'] text-sm sm:text-base lg:text-lg font-bold text-white leading-snug">
                          {item.question}
                        </h3>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                        isOpen 
                          ? 'bg-[#8B3DFF] text-white border-[#8B3DFF] shadow-[0_0_12px_rgba(139,61,255,0.6)]' 
                          : 'bg-[#140E23] text-[#A7A3B1] border-white/10 hover:border-white/20'
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
                        <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/5">
                          <p className="text-xs sm:text-sm text-[#C4C0D0] leading-relaxed mb-4">
                            {item.answer}
                          </p>

                          {/* Key Highlights Bullet Points */}
                          {item.highlights && item.highlights.length > 0 && (
                            <div className="pt-3 border-t border-white/5">
                              <div className="text-[11px] font-mono uppercase tracking-wider text-[#B15CFF] mb-2 font-semibold">
                                Key Takeaways & Deliverables:
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {item.highlights.map((highlight, hIdx) => (
                                  <div key={hIdx} className="flex items-start gap-2 text-xs text-[#E2DFEC]">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                                    <span>{highlight}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Bottom Call to Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#140C26] via-[#0E0A1A] to-[#120824] border border-[#8B3DFF]/30 shadow-[0_15px_40px_-15px_rgba(139,61,255,0.3)] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B15CFF] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Still have a specific query about your project?
            </div>
            <h3 className="font-['Space_Grotesk'] text-lg sm:text-xl font-bold text-white mb-1">
              Talk directly with Vishnu Sivota &amp; Manish Chaudhary
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A3B1] max-w-xl">
              Get an instant strategic perspective on your target keywords, competitors, and ad funnel efficiency with zero fluff.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            {/* WhatsApp CTA with GA4 Event Tracking */}
            <a
              href="https://wa.me/917014799233?text=Hi%20Vishnu%2C%20I%20have%20a%20question%20about%20SEO%20and%20Performance%20Marketing%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,211,102,0.3)] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us Directly</span>
            </a>

            {/* Audit / Proposal CTA */}
            {onOpenInquiry && (
              <button
                onClick={() => onOpenInquiry('seo-paid-faq-audit')}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#1D1236] hover:bg-[#27184A] border border-[#8B3DFF]/40 text-[#D7BFFF] hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-105 cursor-pointer"
              >
                <span>Request Free Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
