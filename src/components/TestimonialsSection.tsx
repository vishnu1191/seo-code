import React, { useState } from 'react';
import { Star, Quote, Sparkles, ShieldCheck, MapPin, Plus, CheckCircle2, MessageCircle, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';
import { Testimonial } from '../types';
import { SubmitFeedbackModal } from './SubmitFeedbackModal';

export const TestimonialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Indian Clients', count: testimonialsList.length },
    { id: 'jaipur', label: 'Jaipur Hub', count: testimonialsList.filter(t => t.location?.toLowerCase().includes('jaipur')).length },
    { id: 'realestate', label: 'Real Estate', count: testimonialsList.filter(t => t.category === 'realestate').length },
    { id: 'hospitality', label: 'Hospitality & Resorts', count: testimonialsList.filter(t => t.category === 'hospitality').length },
    { id: 'gym', label: 'Gym & Fitness', count: testimonialsList.filter(t => t.category === 'gym').length },
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
    <section id="testimonials" className="relative py-20 lg:py-32 overflow-hidden bg-[#050508]">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-[#8B3DFF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[11px] uppercase tracking-[0.2em] font-bold mb-4 shadow-[0_0_15px_rgba(139,61,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Indian Client Feedback Base</span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
            Validated by India’s Premier <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] via-[#B15CFF] to-[#D7BFFF]">
              Founders & Industry Leaders.
            </span>
          </h2>

          <p className="text-[#A7A3B1] text-sm sm:text-base leading-relaxed">
            Real performance audits, revenue milestones, and verified executive testimonials across Jaipur, Mumbai, Delhi NCR, and Tier-1 hubs.
          </p>
        </div>

        {/* Aggregate Metrics Scorecard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {[
            {
              metric: '4.98 / 5.0',
              label: 'Verified Indian Review Score',
              detail: '180+ Enterprise Engagements'
            },
            {
              metric: '₹450 Cr+',
              label: 'Direct Transaction Value',
              detail: 'Generated for Indian Clients'
            },
            {
              metric: '96.8%',
              label: 'Annual Client Retention',
              detail: 'Long-term Growth Retainers'
            },
            {
              metric: '100% Direct',
              label: 'WhatsApp Executive Access',
              detail: 'Instant VIP Response Desk'
            }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0A0810]/80 border border-white/5 p-4 sm:p-5 flex flex-col justify-between text-center relative overflow-hidden group hover:border-[#8B3DFF]/40 transition-all"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B3DFF]/40 to-transparent" />
              <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:text-[#D7BFFF] transition-colors">
                {stat.metric}
              </div>
              <div className="text-xs font-semibold text-[#A7A3B1] mb-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] text-[#85818E]">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter & Feedback Action Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-white/5">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#8B3DFF] text-white shadow-[0_0_20px_rgba(139,61,255,0.4)]'
                      : 'bg-[#0A0810] text-[#A7A3B1] hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-[#85818E]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Direct Actions: Submit Feedback & WhatsApp */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              id="open-submit-feedback-btn"
              onClick={() => setIsSubmitModalOpen(true)}
              className="px-4 py-2 rounded-full bg-[#140E23] hover:bg-[#1f1538] border border-[#8B3DFF]/40 text-[#D7BFFF] text-xs font-semibold flex items-center gap-1.5 transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(139,61,255,0.15)] cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Submit Client Review</span>
            </button>

            <a
              href="https://wa.me/917014799233?text=Hi%20Vishnu%2C%20I%20would%20like%20to%20connect%20regarding%20client%20feedback%20or%20a%20new%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(37,211,102,0.2)]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              id={`testimonial-card-${testimonial.id}`}
              className="group relative rounded-3xl bg-[#0A0810]/80 backdrop-blur-xl border border-white/5 hover:border-[#8B3DFF]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-10px_rgba(139,61,255,0.25)]"
            >
              <div>
                {/* Header: Location & Star Rating */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-[#D7BFFF] bg-[#140E23] px-2.5 py-1 rounded-full border border-[#8B3DFF]/20 font-medium">
                    <MapPin className="w-3 h-3 text-[#8B3DFF]" />
                    <span>{testimonial.location || 'Jaipur, Rajasthan'}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D7BFFF] text-[#D7BFFF]" />
                    ))}
                  </div>
                </div>

                {/* Highlight Metric Pill */}
                <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{testimonial.highlightMetric}</span>
                </div>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-[#A7A3B1] leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Project Scope Tag */}
                {testimonial.projectScope && (
                  <div className="text-[10px] text-[#85818E] mb-6 pt-3 border-t border-white/5 flex items-center gap-1.5">
                    <span className="font-mono text-[#B15CFF]">Architecture:</span>
                    <span>{testimonial.projectScope}</span>
                  </div>
                )}
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-[#8B3DFF]/40 shadow-sm"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-bold text-white group-hover:text-[#D7BFFF] transition-colors">
                        {testimonial.author}
                      </span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#8B3DFF]" />
                    </div>
                    <span className="text-[11px] text-[#A7A3B1] font-medium">
                      {testimonial.role}
                    </span>
                    <span className="text-[10px] text-[#85818E]">
                      {testimonial.company}
                    </span>
                  </div>
                </div>

                {/* Verified Verification Badge */}
                <div className="shrink-0">
                  <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                    Verified Client
                  </span>
                </div>
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

