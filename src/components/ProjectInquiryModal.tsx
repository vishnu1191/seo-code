import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Send, Building2, User, Mail, DollarSign, MessageCircle } from 'lucide-react';
import { ProjectInquiryData } from '../types';
import { BrandLogo } from './BrandLogo';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = ''
}) => {
  const [formData, setFormData] = useState<ProjectInquiryData>({
    name: '',
    email: '',
    company: '',
    budget: '$50K - $100K',
    services: initialService ? [initialService] : ['Brand Strategy & Positioning', 'Paid Media & Performance'],
    timeline: 'Within 30 Days',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const availableServices = [
    'Brand Strategy & Positioning',
    'Social & Cultural Momentum',
    'Paid Media & Performance',
    'Content & Creative Production',
    'SEO & Search Intelligence',
    'Digital Experiences & Web Platforms',
    'Full-Stack Growth Architecture'
  ];

  const budgetTiers = [
    '$25K - $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K+'
  ];

  const timelineOptions = [
    'Immediate (Next 14 Days)',
    'Within 30 Days',
    'Q3 / Q4 Intake',
    'Exploratory'
  ];

  const toggleService = (srv: string) => {
    if (formData.services.includes(srv)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== srv)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, srv]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0A0810] border border-[#8B3DFF]/35 shadow-[0_25px_60px_-15px_rgba(75,20,127,0.5)] p-6 sm:p-10 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-6 right-6 p-2 rounded-full bg-[#140E23] border border-[#8B3DFF]/30 text-[#A7A3B1] hover:text-white hover:border-[#8B3DFF] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#8B3DFF]/20 border border-[#8B3DFF] flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(139,61,255,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-3">
              Strategic Brief Received.
            </h3>

            <p className="text-sm text-[#A7A3B1] max-w-md mb-8 leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. A senior growth architect is reviewing your business telemetry and will send a preliminary growth model within 12 hours.
            </p>

            <div className="p-4 rounded-xl bg-[#140E23] border border-[#8B3DFF]/20 text-xs text-[#85818E] max-w-sm mb-8 text-left space-y-1">
              <div><strong className="text-white">Organization:</strong> {formData.company || 'Private Enterprise'}</div>
              <div><strong className="text-white">Budget Tier:</strong> {formData.budget}</div>
              <div><strong className="text-white">Selected Scope:</strong> {formData.services.length} practices selected</div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full text-xs font-semibold text-white bg-[#8B3DFF] hover:bg-[#9B4DFF] shadow-lg cursor-pointer"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <BrandLogo size="sm" variant="horizontal" />
                <div className="inline-block px-3 py-1 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#B15CFF] text-[10px] uppercase tracking-[0.2em] font-bold">
                  Strategic Consultation
                </div>
              </div>

              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-2">
                Initiate Project Architecture.
              </h2>
              <p className="text-xs sm:text-sm text-[#A7A3B1]">
                Share your core objective. We will prepare an unassailable growth thesis before our initial call.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A3B1] mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alexander Vance"
                      className="w-full bg-[#140E23] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#85818E] focus:outline-none focus:border-[#8B3DFF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A3B1] mb-1.5">
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@brand.com"
                      className="w-full bg-[#140E23] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#85818E] focus:outline-none focus:border-[#8B3DFF]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Company & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A3B1] mb-1.5">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Vanguard Holdings"
                    className="w-full bg-[#140E23] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-[#85818E] focus:outline-none focus:border-[#8B3DFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A3B1] mb-1.5">
                    Target Deployment Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#140E23] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#8B3DFF]"
                  >
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0A0810] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Practice Areas Checklist */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A3B1] mb-2">
                  Areas of Strategic Focus (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((srv) => {
                    const isChecked = formData.services.includes(srv);
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => toggleService(srv)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                          isChecked
                            ? 'bg-[#8B3DFF] text-white border border-[#B15CFF]/60 shadow-[0_0_12px_rgba(139,61,255,0.3)]'
                            : 'bg-[#140E23] text-[#85818E] border border-white/5 hover:text-white'
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Tiers */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A3B1] mb-2">
                  Estimated Quarterly Growth Investment
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetTiers.map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: tier })}
                      className={`px-3 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                        formData.budget === tier
                          ? 'bg-[#8B3DFF] text-white border border-[#B15CFF]/60 shadow-sm'
                          : 'bg-[#140E23] text-[#85818E] border border-white/5 hover:text-white'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A7A3B1] mb-1.5">
                  Specific Objectives or Current Roadblocks
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Scaling DTC revenue from $200k/mo to $800k/mo, needing full creative rebrand and ad account overhaul..."
                  className="w-full bg-[#140E23] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-[#85818E] focus:outline-none focus:border-[#8B3DFF]"
                />
              </div>

              {/* Submit Button & Direct WhatsApp Action */}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#8B3DFF] hover:bg-[#9B4DFF] shadow-[0_0_25px_rgba(139,61,255,0.4)] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing Brief...
                    </span>
                  ) : (
                    <>
                      <span>Submit Strategic Consultation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="relative flex items-center justify-center my-2">
                  <div className="border-t border-white/10 w-full" />
                  <span className="bg-[#0A0810] px-3 text-[10px] uppercase font-mono tracking-widest text-[#85818E]">OR</span>
                  <div className="border-t border-white/10 w-full" />
                </div>

                <a
                  href={`https://wa.me/917014799233?text=${encodeURIComponent(`Hi SEO Jaipur Team, I am interested in ${formData.services.join(', ')} with budget ${formData.budget}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide text-black bg-[#25D366] hover:bg-[#20bd5a] shadow-[0_0_20px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Connect Instantly on WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#85818E]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8B3DFF]" />
                <span>Strict Non-Disclosure Guarantee • No Sales Pressure</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
