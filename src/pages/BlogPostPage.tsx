import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, MessageCircle } from 'lucide-react';
import { getBlogPost } from '../data/blogPosts';

interface BlogPostPageProps {
  slug: string;
}

const setMeta = (name: string, content: string) => {
  let element = document.querySelector<HTMLMetaElement>(\`meta[name="\${name}"]\`);
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
};

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  const post = getBlogPost(slug);

  useEffect(() => {
    if (!post) {
      document.title = 'Article Not Found | SEO in Jaipur';
      setMeta('robots', 'noindex, follow');
      return;
    }

    document.title = post.seoTitle;
    setMeta('description', post.metaDescription);
    setMeta('robots', 'index, follow');

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = \`https://seoinjaipur.in/blog/\${post.slug}/\`;

    let jsonLd = document.getElementById('blog-post-jsonld') as HTMLScriptElement | null;
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.id = 'blog-post-jsonld';
      jsonLd.type = 'application/ld+json';
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.publishedDate,
      dateModified: post.publishedDate,
      mainEntityOfPage: \`https://seoinjaipur.in/blog/\${post.slug}/\`,
      author: { '@type': 'Organization', name: 'SEO in Jaipur', url: 'https://seoinjaipur.in/about/' },
      publisher: { '@type': 'Organization', name: 'SEO in Jaipur', url: 'https://seoinjaipur.in/' },
      keywords: post.keywords.join(', ')
    });

    return () => {
      document.getElementById('blog-post-jsonld')?.remove();
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-[60vh] bg-[#050508] text-[#F7F5FA] flex items-center justify-center px-4">
        <div className="max-w-xl text-center">
          <p className="text-[#B15CFF] text-xs font-bold uppercase tracking-[0.2em] mb-3">404 · Not found</p>
          <h1 className="font-['Space_Grotesk'] text-3xl font-bold">This article could not be found.</h1>
          <p className="text-[#A7A3B1] mt-3">The link may have changed. Browse our other digital marketing guides instead.</p>
          <a href="/blog/" className="inline-flex items-center gap-2 mt-6 text-[#D7BFFF] font-bold"><ArrowLeft className="w-4 h-4" /> Back to all articles</a>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#050508] text-[#F7F5FA]">
      <header className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[300px] bg-[#8B3DFF]/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <a href="/blog/" className="inline-flex items-center gap-2 text-sm text-[#A7A3B1] hover:text-white transition-colors mb-10"><ArrowLeft className="w-4 h-4" /> All insights</a>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D7BFFF] bg-[#8B3DFF]/10 border border-[#8B3DFF]/25 rounded-full px-3 py-1">{post.category}</span>
            <span className="text-xs text-[#85818E] flex items-center gap-1.5"><Clock3 className="w-3.5 h-3.5" />{post.readTime}</span>
            <time className="text-xs text-[#85818E]" dateTime={post.publishedDate}>{new Date(post.publishedDate + 'T12:00:00').toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>
          <h1 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">{post.title}</h1>
          <p className="text-base sm:text-lg text-[#A7A3B1] leading-relaxed mt-6 max-w-3xl">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {post.keywords.map((keyword) => <span key={keyword} className="text-[11px] text-[#85818E] border border-white/10 rounded-full px-3 py-1">{keyword}</span>)}
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-10 lg:gap-14">
        <div className="min-w-0">
          <div className="space-y-10">
            {post.sections.map((section, index) => (
              <section key={section.heading} id={\`section-\${index + 1}\`} className="scroll-mt-24">
                <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white leading-snug mb-4">{section.heading}</h2>
                <div className="space-y-4 text-sm sm:text-base text-[#C5C2CE] leading-7">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets && <ul className="mt-5 space-y-3">{section.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-sm sm:text-base text-[#C5C2CE] leading-6"><CheckCircle2 className="w-4 h-4 text-[#B15CFF] shrink-0 mt-1" /><span>{bullet}</span></li>)}</ul>}
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-[#8B3DFF]/30 bg-[#0A0810] p-6 sm:p-8">
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white">Discuss your SEO goals</h2>
            <p className="text-sm text-[#A7A3B1] leading-relaxed mt-3">Share your website, target services, and the locations you serve. We can discuss practical next steps for improving relevant search visibility and enquiry tracking—without unrealistic ranking promises.</p>
            <a href="https://wa.me/917014799233?text=Hi%20Vishnu%2C%20I%20read%20your%20SEO%20guide%20and%20want%20to%20discuss%20SEO%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 px-5 py-3 rounded-full bg-[#25D366] text-black font-bold text-sm hover:bg-[#20bd5a] transition-colors"><MessageCircle className="w-4 h-4" /> Discuss on WhatsApp <ArrowRight className="w-4 h-4" /></a>
          </section>

          <section className="mt-12">
            <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-5">Frequently asked questions</h2>
            <div className="space-y-4">
              {post.faqs.map((faq) => <details key={faq.question} className="group rounded-xl border border-white/10 bg-[#0A0810] p-5"><summary className="cursor-pointer list-none font-semibold text-white flex items-center justify-between gap-4">{faq.question}<span className="text-[#B15CFF] text-xl group-open:rotate-45 transition-transform">+</span></summary><p className="text-sm text-[#A7A3B1] leading-6 mt-3">{faq.answer}</p></details>)}
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-28 h-fit space-y-5">
          <div className="rounded-2xl border border-white/10 bg-[#0A0810] p-5">
            <h2 className="font-['Space_Grotesk'] text-lg font-bold text-white">In this guide</h2>
            <ol className="mt-4 space-y-3">
              {post.sections.map((section, index) => <li key={section.heading}><a href={\`#section-\${index + 1}\`} className="text-sm text-[#A7A3B1] hover:text-[#D7BFFF] transition-colors">{index + 1}. {section.heading}</a></li>)}
            </ol>
          </div>
          <div className="rounded-2xl border border-[#25D366]/25 bg-[#0A0810] p-5">
            <MessageCircle className="w-5 h-5 text-[#25D366] mb-3" />
            <h2 className="font-['Space_Grotesk'] text-lg font-bold text-white">Need practical advice?</h2>
            <p className="text-sm text-[#A7A3B1] leading-relaxed mt-2">Ask a question about SEO, local visibility, or measuring enquiries for your business.</p>
            <a href="https://wa.me/917014799233?text=Hi%20Vishnu%2C%20I%20have%20a%20question%20about%20SEO%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm text-[#25D366] font-bold">Chat on WhatsApp <ArrowRight className="w-4 h-4" /></a>
          </div>
        </aside>
      </div>

      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-4 sm:px-6 pb-12 text-xs text-[#85818E]">
        <a href="/" className="hover:text-white">Home</a><span className="mx-2">/</span><a href="/blog/" className="hover:text-white">Blog</a><span className="mx-2">/</span><span className="text-[#D7BFFF]">{post.title}</span>
      </nav>
    </article>
  );
};
