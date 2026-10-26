import React, { useEffect } from 'react';
import { ArrowRight, BookOpen, Clock3, MessageCircle, Search } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const setMeta = (name: string, content: string) => {
  let element = document.querySelector<HTMLMetaElement>(\`meta[name="\${name}"]\`);
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
};

export const BlogPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Digital Marketing Blog | SEO in Jaipur';
    setMeta('description', 'Practical guides on SEO services in Jaipur, local SEO, Google Ads, Meta Ads, AI marketing tools, and digital growth for businesses.');
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://seoinjaipur.in/blog/';
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-[#F7F5FA]">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-[#8B3DFF]/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#D7BFFF] text-xs font-semibold uppercase tracking-[0.18em] mb-6">
            <BookOpen className="w-4 h-4" /> Insights for business growth
          </div>
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Clear digital marketing advice. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] to-[#D7BFFF]">Better business decisions.</span>
          </h1>
          <p className="text-[#A7A3B1] text-base sm:text-lg leading-relaxed max-w-2xl mt-6">
            Practical, jargon-free guides to SEO, local search, Google Ads, Meta Ads, and useful marketing tools—created to help businesses make informed decisions and attract relevant enquiries.
          </p>
          <a href="https://wa.me/917014799233?text=Hi%20Vishnu%2C%20I%20want%20to%20discuss%20digital%20marketing%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-[#25D366] text-black font-bold text-sm hover:bg-[#20bd5a] transition-colors">
            <MessageCircle className="w-4 h-4" /> Discuss your business goals <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[#B15CFF] text-xs font-bold uppercase tracking-[0.2em] mb-2">The latest guides</p>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">Blog &amp; Insights</h2>
          </div>
          <p className="text-sm text-[#85818E] max-w-md">Actionable information for owners who want to understand their options before investing in marketing.</p>
        </div>

        {blogPosts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-[#0A0810] p-8 text-center">
            <Search className="w-8 h-8 text-[#B15CFF] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">New guides are on the way</h3>
            <p className="text-sm text-[#A7A3B1] mt-2">Check back soon for practical digital marketing articles.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group flex flex-col rounded-2xl border border-white/10 bg-[#0A0810]/90 p-6 sm:p-8 hover:border-[#8B3DFF]/50 transition-colors">
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D7BFFF] bg-[#8B3DFF]/10 border border-[#8B3DFF]/25 rounded-full px-3 py-1">{post.category}</span>
                  <span className="text-xs text-[#85818E] flex items-center gap-1.5"><Clock3 className="w-3.5 h-3.5" />{post.readTime}</span>
                </div>
                <h2 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold leading-snug text-white group-hover:text-[#D7BFFF] transition-colors">
                  <a href={\`/blog/\${post.slug}/\`}>{post.title}</a>
                </h2>
                <p className="text-xs text-[#85818E] mt-3">{new Date(post.publishedDate + 'T12:00:00').toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="text-sm text-[#A7A3B1] leading-relaxed mt-4 flex-1">{post.excerpt}</p>
                <a href={\`/blog/\${post.slug}/\`} className="inline-flex items-center gap-2 text-sm text-[#D7BFFF] font-bold mt-6 hover:text-white transition-colors">
                  Read the guide <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-3xl border border-[#8B3DFF]/30 bg-gradient-to-r from-[#140E23] via-[#0A0810] to-[#140E23] p-7 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white">Want a plan for your own business?</h2>
            <p className="text-sm text-[#A7A3B1] mt-2 max-w-2xl">Tell us your services, target customers, and current marketing challenge. We can discuss the next practical step without promising guaranteed rankings.</p>
          </div>
          <a href="https://wa.me/917014799233?text=Hi%20Vishnu%2C%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20plan%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-bold text-sm hover:bg-[#20bd5a] transition-colors">
            WhatsApp us <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
