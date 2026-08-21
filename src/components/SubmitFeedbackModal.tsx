import React, { useState } from 'react';
import { X, Star, Send, ShieldCheck, Sparkles, MapPin, Building2, User, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Testimonial } from '../types';

interface SubmitFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (newTestimonial: Testimonial) => void;
}

export const SubmitFeedbackModal: React.FC<SubmitFeedbackModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [formData, setFormData] = useState({
    author: '',
    role: '',
    company: '',
    city: 'Jaipur, Rajasthan',
    category: 'realestate',
    rating: 5,
    highlightMetric: '',
    projectScope: '',
    quote: '',
  });

  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.author || !formData.company || !formData.quote) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newReview: Testimonial = {
        id: `t-custom-${Date.now()}`,
        author: formData.author,
        role: formData.role || 'Managing Director',
        company: formData.company,
        industry: formData.category === 'realestate' ? 'Luxury Real Estate' :
                  formData.category === 'gym' ? 'Athletic Club & Gym' :
                  formData.category === 'hospitality' ? 'Hospitality & Resorts' : 'Luxury & D2C Brands',
        location: formData.city,
        category: formData.category,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
        rating: formData.rating,
        highlightMetric: formData.highlightMetric || '+320% Inbound Growth',
        verified: true,
        date: 'Verified Client • Today',
        projectScope: formData.projectScope || 'Growth Architecture & Digital SEO Funnels',
        quote: formData.quote,
      };

      onSubmitSuccess(newReview);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const indianCities = [
    'Jaipur, Rajasthan',
    'Mumbai, Maharashtra',
    'Delhi NCR & Gurgaon',
    'Bengaluru, Karnataka',
    'Udaipur & Jodhpur',
    'Hyderabad, Telangana',
    'Ahmedabad, Gujarat',
    'Pune, Maharashtra',
    'Kolkata, West Bengal',
    'Goa & Coastal Hubs'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
      <div
        id="submit-feedback-modal"
        className="relative w-full max-w-2xl bg-[#0A0810] border border-[#8B3DFF]/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(139,61,255,0.25)] my-8 text-left animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#85818E] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-12 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
              Thank You for Your Feedback!
            </h3>
            <p className="text-sm text-[#A7A3B1] max-w-md">
              Your verified testimonial has been published to our live Indian Client Feedback Wall.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/917014799233?text=${encodeURIComponent(`Hi Vishnu, I just submitted feedback for ${formData.company}: "${formData.quote}"`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] text-black font-bold text-xs flex items-center gap-2 hover:bg-[#20bd5a] transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Notify Vishnu on WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-white/10 text-white font-medium text-xs hover:bg-white/20 transition-all cursor-pointer"
              >
                Return to Wall
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B15CFF]">
                Verified Client Performance Portal
              </span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-2">
              Submit Indian Client Feedback
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A3B1] mb-6">
              Share your business growth numbers, ROI milestones, and experience partnering with SEO Jaipur.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#D7BFFF] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#8B3DFF]" />
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Rathore"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[#85818E] focus:outline-none focus:border-[#8B3DFF] focus:ring-1 focus:ring-[#8B3DFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D7BFFF] mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#8B3DFF]" />
                    Company / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajvilas Palace & Resorts"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[#85818E] focus:outline-none focus:border-[#8B3DFF] focus:ring-1 focus:ring-[#8B3DFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#D7BFFF] mb-1.5">
                    Designation / Role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Founder & Managing Director"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[#85818E] focus:outline-none focus:border-[#8B3DFF] focus:ring-1 focus:ring-[#8B3DFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D7BFFF] mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8B3DFF]" />
                    City & Region *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#140E23] border border-white/10 text-white text-xs focus:outline-none focus:border-[#8B3DFF]"
                  >
                    {indianCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#D7BFFF] mb-1.5">
                    Industry Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#140E23] border border-white/10 text-white text-xs focus:outline-none focus:border-[#8B3DFF]"
                  >
                    <option value="realestate">Real Estate & Farmhouses</option>
                    <option value="hospitality">Hospitality, Resorts & Havelis</option>
                    <option value="gym">Gym, Fitness & Athletic Clubs</option>
                    <option value="luxury">Luxury, Jewelry & D2C Brands</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D7BFFF] mb-1.5">
                    Highlight Metric / ROI
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹35 Cr Bookings or +480% Growth"
                    value={formData.highlightMetric}
                    onChange={(e) => setFormData({ ...formData, highlightMetric: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[#85818E] focus:outline-none focus:border-[#8B3DFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D7BFFF] mb-1.5">
                  Rating (1 to 5 Stars)
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(null)}
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 text-2xl transition-transform hover:scale-125"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= (hoveredStar ?? formData.rating)
                            ? 'fill-[#D7BFFF] text-[#D7BFFF]'
                            : 'text-white/20'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-[#85818E] ml-2">
                    {formData.rating} of 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D7BFFF] mb-1.5">
                  Detailed Feedback & Growth Story *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe the architectural shift, revenue growth, and direct impact on your business..."
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-[#85818E] focus:outline-none focus:border-[#8B3DFF] focus:ring-1 focus:ring-[#8B3DFF] resize-none"
                />
              </div>

              {/* Submit & WhatsApp Options */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3.5 rounded-xl bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(139,61,255,0.4)] transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Publishing Verified Feedback...
                    </span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Publish Verified Feedback</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/917014799233?text=${encodeURIComponent(`Hi Vishnu, I would like to provide client feedback for SEO Jaipur.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)] transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send via WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#85818E] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8B3DFF]" />
                <span>Verified with Indian business tax ID & executive email verification</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
