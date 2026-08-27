import React, { useState } from 'react';
import { Star, Sparkles, ShieldCheck, MapPin, Plus, CheckCircle2, MessageCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';
import { Testimonial } from '../types';
import { SubmitFeedbackModal } from './SubmitFeedbackModal';

export const TestimonialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Clients', count: testimonialsList.length },
    { id: 'jaipur', label: 'Jaipur Hub', count: testimonialsList.filter(t => t.location?.toLowerCase().includes('jaipur')).length },
    { id: 'realestate', label: 'Real Estate', count: testimonialsList.filter(t => t.category === 'realestate').length },
    { id: 'hospitality', label: 'Hospitality', count: testimonialsList.filter(t => t.category === 'hospitality').length },
    { id: 'gym', label: 'Fitness & Gym', count: testimonialsList.filter(t => t.category === 'gym').length },
    { id: 'luxury', label: 'Luxury & D2C', count: testimonialsList.filter(t => t.category === 'luxury').length },
  ];

  const filteredTestimonials = testimonialsList.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'jaipur') return item.location?.toLowerCase().includes('jaipur');
    return item.category === activeCategory;
  });

  const handleAddFeedback = (newReview: Testimonial) => {
    setTestimonialsList([newReview, ...testimonialsList]);
  };

  return (
    <section id="testimonials" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#050508]">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#8B3DFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[10px] uppercase tracking-[0.2em] font-bold mb-3 shadow-[0_0_12px_rgba(139,61,255,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Verified Client Reviews</span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight mb-2.5">
            Validated by India’s Premier{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] via-[#B15CFF] to-[#D7BFFF]">
              Founders & Leaders
            </span>
          </h2>

          <p className="text-[#A7A3B1] text-xs sm:text-sm leading-relaxed">
            Real performance audits and verified revenue growth milestones across Jaipur, Mumbai, Delhi NCR, and Tier-1 hubs.
          </p>
        </div>

        {/* Compact Aggregate Metrics Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
          {[
            {
              metric: '4.98 / 5.0',
              label: 'Verified Review Score',
              detail: '180+ Enterprise Engagements'
            },
            {
              metric: '₹450 Cr+',
              label: 'Direct Transaction Value',
              detail: 'Generated for Clients'
            },
            {
              metric: '96.8%',
              label: 'Annual Retention',
              detail: 'Long-term Retainers'
            },
            {
              metric: '100% Direct',
              label: 'VIP Concierge Desk',
              detail: 'Instant Live Response'
            }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#0A0810]/90 border border-white/5 px-3.5 py-3 sm:py-3.5 flex flex-col justify-between text-center relative overflow-hidden group hover:border-[#8B3DFF]/40 transition-all shadow-sm"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#8B3DFF]/50 to-transparent" />
              <div className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold text-white mb-0.5 group-hover:text-[#D7BFFF] transition-colors">
                {stat.metric}
              </div>
              <div className="text-[11px] font-semibold text-[#A7A3B1]">
                {stat.label}
              </div>
              <div className="text-[9px] text-[#85818E] mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Compact Filter Pills & Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 pb-3 border-b border-white/5">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#8B3DFF] text-white shadow-[0_0_15px_rgba(139,61,255,0.35)]'
                      : 'bg-[#0A0810] text-[#A7A3B1] hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[9px] px-1 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-[#85818E]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              id="open-submit-feedback-btn"
              onClick={() => setIsSubmitModalOpen(true)}
              className="px-3 py-1.5 rounded-full bg-[#140E23] hover:bg-[#1f1538] border border-[#8B3DFF]/40 text-[#D7BFFF] text-[11px] font-semibold flex items-center gap-1 transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
            >
              <Plus className="w-3 h-3" />
              <span>Add Review</span>
            </button>

            <a
              href="https://wa.me/917014799233?text=Hi%20Vishnu%2C%20I%20would%20like%20to%20connect%20regarding%20client%20feedback%20or%20a%20new%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-[11px] font-bold flex items-center gap-1 transition-all shadow-[0_0_10px_rgba(37,211,102,0.15)]"
            >
              <MessageCircle className="w-3 h-3 fill-current" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>

        {/* Compact & High-Density Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-card-${testimonial.id}`}
              className="group relative rounded-2xl bg-[#0A0810]/80 backdrop-blur-xl border border-white/5 hover:border-[#8B3DFF]/40 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(139,61,255,0.2)]"
            >
              <div>
                {/* Header: Location & Star Rating */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1 text-[10px] text-[#D7BFFF] bg-[#140E23] px-2 py-0.5 rounded-full border border-[#8B3DFF]/20 font-medium">
                    <MapPin className="w-2.5 h-2.5 text-[#8B3DFF]" />
                    <span className="truncate max-w-[140px]">{testimonial.location || 'Jaipur, Rajasthan'}</span>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#D7BFFF] text-[#D7BFFF]" />
                    ))}
                  </div>
                </div>

                {/* Highlight Metric Pill */}
                <div className="inline-flex items-center gap-1 mb-2.5 px-2.5 py-0.5 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-semibold">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>{testimonial.highlightMetric}</span>
                </div>

                {/* Quote Body */}
                <p className="text-xs text-[#C5C2CE] leading-relaxed mb-3 italic line-clamp-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Project Scope Tag */}
                {testimonial.projectScope && (
                  <div className="text-[9px] text-[#85818E] mb-3 pt-2 border-t border-white/5 flex items-center gap-1">
                    <span className="font-mono text-[#B15CFF]">Scope:</span>
                    <span className="truncate">{testimonial.projectScope}</span>
                  </div>
                )}
              </div>

              {/* Author Info */}
              <div className="pt-2.5 border-t border-white/5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded-full object-cover border border-[#8B3DFF]/40 shrink-0"
                  />
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-['Space_Grotesk'] text-xs font-bold text-white group-hover:text-[#D7BFFF] transition-colors truncate">
                        {testimonial.author}
                      </span>
                      <ShieldCheck className="w-3 h-3 text-[#8B3DFF] shrink-0" />
                    </div>
                    <span className="text-[10px] text-[#A7A3B1] truncate">
                      {testimonial.role} • <span className="text-[#85818E]">{testimonial.company}</span>
                    </span>
                  </div>
                </div>

                {/* Verified Badge */}
                <span className="shrink-0 text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                  Verified
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Submit Feedback Modal */}
      <SubmitFeedbackModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmitSuccess={handleAddFeedback}
      />
    </section>
  );
};
