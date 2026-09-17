import React, { useState } from 'react';
import { 
  Target, 
  Search, 
  Sparkles, 
  TrendingUp, 
  Cpu, 
  Clapperboard, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Zap, 
  BarChart3, 
  MapPin, 
  MessageCircle, 
  DollarSign, 
  Clock,
  Share2,
  Briefcase,
  PlaySquare,
  Video,
  Users,
  Link2,
  FileText,
  Layout,
  Gauge,
  MessageSquare,
  ShieldAlert,
  ShoppingCart,
  Bot
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ServicesPageProps {
  onOpenInquiry: (initialService?: string) => void;
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenInquiry, onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const detailedServices = [
    // 1. Search Engine Optimization (SEO)
    {
      id: 'organic-seo',
      number: '01',
      title: 'Enterprise Organic SEO & Entity Architecture',
      category: 'seo',
      categoryLabel: 'SEO Suite',
      tagline: 'Defensible search supremacy engineered to capture #1 SERP real estate.',
      desc: 'We construct deep semantic topic clusters, programmatic entity relationships, and technical page architecture that turn Google into your most profitable, compounding customer acquisition channel.',
      deliverables: [
        'Semantic Knowledge Graph & Entity Optimization',
        'Deep Competitor SERP & Keyword Vulnerability Gap Audits',
        'Technical Core Web Vitals & Crawl Budget Remediation',
        'High-Authority Digital PR & Contextual Backlink Moats',
        'Structured Schema Markup & Rich Snippet Dominance',
        'Continuous Algorithm Update Armor & Rank Defensibility'
      ],
      techStack: ['Ahrefs', 'Semrush', 'Google Search Console', 'Screaming Frog', 'Looker Studio'],
      roiBenchmark: '+310% High-Intent Organic Pipeline',
      timeline: '3 to 6 Months Compounding',
      bestFor: 'Real Estate Developers, Luxury Brands, Hospitals, B2B SaaS'
    },
    {
      id: 'local-seo',
      number: '02',
      title: 'Hyper-Local SEO & Google Maps 3-Pack Supremacy',
      category: 'seo',
      categoryLabel: 'SEO Suite',
      tagline: 'Capture 80%+ of local high-intent footfall and direct phone inquiries.',
      desc: 'Dominate Google Local 3-Pack and Google Maps across Jaipur and target regional territories. We turn nearby searches into immediate clinic visits, haveli bookings, and property site tours.',
      deliverables: [
        'Google Business Profile (GBP) 100% Algorithmic Optimization',
        'Geo-Fenced Local Citation Networks & NAP Consistency Audits',
        'Review Velocity & Automated Reputation Management Engine',
        'Hyper-Local Suburb & Area-Specific Landing Pages',
        'Local Schema Geocoding & Coordinate Entity Mapping',
        'Call Tracking & WhatsApp Direct Inbound Conversion Analytics'
      ],
      techStack: ['Google Business Profile', 'BrightLocal', 'Whitespark', 'Google Maps API'],
      roiBenchmark: '+480% Local Direct Call & Direction Inquiries',
      timeline: '30 to 45 Days to Top 3 Rank',
      bestFor: 'Gyms, Cafes, Havelis, Local Clinics, Jewelers, Showrooms'
    },
    {
      id: 'ecommerce-seo',
      number: '03',
      title: 'E-Commerce Organic Scaling & Catalog Dominance',
      category: 'seo',
      categoryLabel: 'SEO Suite',
      tagline: 'Turn product and collection pages into 24/7 organic revenue machines.',
      desc: 'Specialized organic growth architecture for DTC brands and digital storefronts. We rank your catalog for high-volume commercial keywords, optimize faceted navigation, and skyrocket average order value (AOV).',
      deliverables: [
        'Faceted Navigation Indexing & Clean URL Architectures',
        'High-Converting Product Schema & Rich Merchant Center Feeds',
        'Seasonal Gifting & Commercial High-Intent Category Hubs',
        'DTC Checkout Funnel Speed & Core Web Vitals Optimization',
        'Competitor Price & SERP Feature Interception',
        'Automated Customer Review & UGC Schema Integration'
      ],
      techStack: ['Shopify Plus', 'WooCommerce', 'Klaviyo', 'Algolia', 'Google Merchant Center'],
      roiBenchmark: '+420% Direct DTC Organic Revenue',
      timeline: '90 to 120 Days',
      bestFor: 'Fashion Labels, Jewelry, Skincare, Home Decor, Organic Goods'
    },
    {
      id: 'geo-ai',
      number: '04',
      title: 'Generative Engine Optimization (GEO) & AI Search',
      category: 'seo',
      categoryLabel: 'SEO Suite',
      tagline: 'Future-proof citations inside ChatGPT, Perplexity, and Google AI Overviews.',
      desc: 'Search is shifting from ten blue links to AI synthesized answers. We optimize your brand data and digital footprint so LLMs cite your business as the definitive primary authority.',
      deliverables: [
        'Google AI Overviews (SGE) Inclusion Protocols',
        'Perplexity AI & ChatGPT Contextual Knowledge Graph Embedding',
        'Factual Authority Vector PR & Wikipedia Entity Connections',
        'LLM Structured Data Synthesis & Q&A Knowledge Bases',
        'Brand Reputation Sentiment Defense across Neural Engines',
        'AI Citation Share of Voice Monitoring'
      ],
      techStack: ['Google GenAI API', 'Perplexity Pro API', 'Schema Pro', 'Vector Embeddings'],
      roiBenchmark: '90%+ Inclusion in AI Search Answers',
      timeline: '60 to 90 Days',
      bestFor: 'Enterprise Leaders, Tech Companies, High-End Healthcare'
    },

    // 2. Paid Ads & Performance Marketing (PPC)
    {
      id: 'google-ads',
      number: '05',
      title: 'Google Ads (Search, Shopping, Display & PMax)',
      category: 'ads',
      categoryLabel: 'Paid Media',
      tagline: 'Capture ready-to-buy decision makers at the exact moment of search intent.',
      desc: 'Precision PPC targeting customers with urgent commercial intent. We build multi-tiered Search, Performance Max, and Shopping campaigns that maximize return while eliminating negative keyword budget waste.',
      deliverables: [
        'Multi-Tier Search, Performance Max & Shopping Campaign Architecture',
        'Negative Keyword Fortification to Prevent Ad Spend Waste',
        'Smart Bidding & Target ROAS / Target CPA Optimization',
        'High-Converting Responsive Search Ad Copy & Extension Assets',
        'Server-Side GA4 Tracking & Conversion Value Rules Integration',
        'Competitor Search Interception & Brand Defense Campaigns'
      ],
      techStack: ['Google Ads Editor', 'Google Merchant Center', 'Looker Studio', 'GA4', 'Postman API'],
      roiBenchmark: '4.2x to 5.8x Verified Google Ads ROAS',
      timeline: 'Instant Inbound Traffic (7-14 Days)',
      bestFor: 'B2B Services, Healthcare Clinics, Education, E-Commerce Brands'
    },
    {
      id: 'meta-ads',
      number: '06',
      title: 'Meta Ads (Facebook & Instagram Performance Funnels)',
      category: 'ads',
      categoryLabel: 'Paid Media',
      tagline: 'High-ROAS visual acquisition funnels designed to scale revenue profitably.',
      desc: 'Direct-response paid social advertising across Instagram and Facebook. We combine thumb-stopping creative direction with algorithmic lookalike modeling and ruthless A/B creative testing.',
      deliverables: [
        'Dynamic Creative Testing (DCT) with 50+ Angle Variations',
        'Hyper-Targeted Custom Audiences & Value-Based Lookalikes',
        'Full-Funnel Retargeting Architecture (TOFU, MOFU, BOFU)',
        'Server-Side Conversions API (CAPI) & Offline Event Tracking',
        'Thumb-Stopping UGC Frameworks & High-Production Video Ads',
        'VIP WhatsApp Inbound Lead Generation Click-to-Chat Funnels'
      ],
      techStack: ['Meta Business Suite', 'Meta Conversions API', 'Triple Whale', 'Figma', 'CapCut Pro'],
      roiBenchmark: '3.8x to 5.4x Blended Meta ROAS',
      timeline: '14-Day Baseline to Profitable Scale',
      bestFor: 'DTC E-Commerce, Real Estate Launches, Fashion & Lifestyle, Events'
    },
    {
      id: 'linkedin-ads',
      number: '07',
      title: 'LinkedIn Ads & B2B Account-Based Marketing (ABM)',
      category: 'ads',
      categoryLabel: 'Paid Media',
      tagline: 'Direct pipeline generation targeting C-suite executives and B2B buyers.',
      desc: 'Hyper-targeted B2B advertising designed to place your high-ticket offerings directly in front of Founders, CMOs, CTOs, and procurement directors with enterprise purchasing authority.',
      deliverables: [
        'Precision Firmographic, Seniority & Job Title Audience Modeling',
        'Account-Based Marketing (ABM) Matched List Targeting',
        'High-Value Lead Magnet & Executive Whitepaper Funnels',
        'Sponsored InMail, Document & Direct Conversation Ads',
        'CRM Integration (HubSpot/Salesforce) with Closed-Loop Attribution',
        'Qualifying Lead Forms with Pre-Filled Corporate Telemetry'
      ],
      techStack: ['LinkedIn Campaign Manager', 'Sales Navigator', 'HubSpot CRM', 'Zapier', 'Looker Studio'],
      roiBenchmark: '+260% Qualified B2B Sales Pipeline',
      timeline: '30 to 60 Days',
      bestFor: 'Enterprise Tech, Manufacturing, Legal & Financial Advisory, SaaS'
    },
    {
      id: 'youtube-ads',
      number: '08',
      title: 'YouTube Ads & Video Action Campaigns',
      category: 'ads',
      categoryLabel: 'Paid Media',
      tagline: 'High-impact video storytelling converting viewers into qualified customers.',
      desc: 'Cinematic video advertising across YouTube In-Stream, Shorts, and Google Video Partners. Engineered using the Hook-Story-Offer psychological framework to turn passive viewers into active buyers.',
      deliverables: [
        'Direct-Response Video Scripting (Hook-Story-Offer Framework)',
        'In-Stream Skippable, Non-Skippable & Bumper Placements',
        'YouTube Shorts Ad Campaigns & High-Pace Vertical Video Formats',
        'Custom Affinity & In-Market Video Retargeting Funnels',
        'Cross-Device View-Through Conversion Tracking',
        'A/B Video Creative Hook & Thumbnail Testing'
      ],
      techStack: ['Google Ads Video', 'YouTube Studio', 'Premiere Pro', 'Frame.io', 'DaVinci Resolve'],
      roiBenchmark: '3.2x Return on Video Ad Spend',
      timeline: '21 Days Production & Deployment',
      bestFor: 'High-Ticket Consulting, Real Estate Walkthroughs, Education, Luxury Brands'
    },

    // 3. Social Media & Influencer Marketing
    {
      id: 'social-media-management',
      number: '09',
      title: 'Social Media Management & Organic Brand Authority',
      category: 'social',
      categoryLabel: 'Social & Viral',
      tagline: 'Build commanding brand authority and a loyal community across platforms.',
      desc: 'End-to-end creative management across Instagram, Facebook, and LinkedIn. We curate bespoke visual grids, craft authoritative captions, and nurture active community engagement that turns followers into clients.',
      deliverables: [
        '30-Day Bespoke Content Calendar & Aesthetic Feed Direction',
        'Carousel Infographics, Static Visuals & Carousel Breakdowns',
        'Daily Community Engagement, Comment Moderation & DM Triage',
        'Hashtag & Semantic Social Search Optimization for Discovery',
        'Brand Voice Guidelines & Thought-Leadership Content Frameworks',
        'Monthly Executive Telemetry: Reach, Saves & Follower Velocity'
      ],
      techStack: ['Meta Creator Studio', 'Buffer', 'Figma', 'Adobe Photoshop', 'Sprout Social'],
      roiBenchmark: '+240% Organic Engagement & Community Growth',
      timeline: 'Monthly Compounding Retainer',
      bestFor: 'Restaurants, Luxury Boutiques, Architects, Personal Brands, Havelis'
    },
    {
      id: 'reels-production',
      number: '10',
      title: 'Viral Reels & Short-Form Video Production',
      category: 'social',
      categoryLabel: 'Social & Viral',
      tagline: 'Viral video narrative engines engineered for algorithmic distribution and reach.',
      desc: 'Short-form vertical video is the fastest path to massive organic attention. We write, direct, edit, and optimize Reels, Shorts, and TikToks designed to capture attention in the first 3 seconds.',
      deliverables: [
        'High-Retention Video Scripting & Trending Audio Discovery',
        'On-Site / Studio Production Direction & Equipment Guidelines',
        'Fast-Paced Dynamic Subtitles, Motion Graphics & Sound Effects',
        'Strategic Algorithm Timing for Maximum Explore Page Velocity',
        'Multi-Platform Syndication (Instagram Reels, YouTube Shorts, LinkedIn)',
        'Performance Iteration Based on Retention Curve Analytics'
      ],
      techStack: ['DaVinci Resolve', 'CapCut Pro', 'Adobe Premiere Pro', 'Epidemic Sound', 'Envato'],
      roiBenchmark: '2.5M+ Average Monthly Reel Impressions',
      timeline: 'Bi-Weekly Video Batch Releases',
      bestFor: 'Hospitality, Fitness Centers, Real Estate Developers, Retail Brands'
    },
    {
      id: 'influencer-marketing',
      number: '11',
      title: 'Influencer & Creator Collaboration Marketing',
      category: 'social',
      categoryLabel: 'Social & Viral',
      tagline: 'Tap into trusted voices and niche creators for authentic social proof.',
      desc: 'Seamless influencer partnerships tailored for maximum regional and national impact. We identify verified creators, negotiate performance-based contracts, and orchestrate campaigns that spark viral conversations.',
      deliverables: [
        'End-to-End Creator Vetting, Demographics & Fake Follower Audits',
        'Campaign Creative Briefing, Deliverable Contracts & Compliance',
        'Product Gifting, Barter & Paid Creator Sponsorship Management',
        'Custom Promo Code & Trackable UTM Link Conversion Architecture',
        'Paid Partnership Spark Ads & Whitelisting Setup',
        'Post-Campaign Earned Media Value (EMV) & Sales ROI Reporting'
      ],
      techStack: ['HypeAuditor', 'CreatorIQ', 'Modash', 'Meta Brand Collabs Manager', 'Looker Studio'],
      roiBenchmark: '4.5x Influencer Earned Media Value (EMV)',
      timeline: '30-Day Campaign Sprints',
      bestFor: 'Lifestyle Brands, Fashion, Beauty, Wellness, Food & Beverage'
    },

    // 4. Content Marketing, Copywriting & Digital PR
    {
      id: 'link-building-pr',
      number: '12',
      title: 'High-Authority Link Building & Digital PR',
      category: 'content',
      categoryLabel: 'Content & PR',
      tagline: 'Build unassailable domain authority with tier-1 media mentions and backlinks.',
      desc: 'High-tier backlinks are Google’s ultimate vote of confidence. We execute 100% white-hat editorial outreach and data-driven PR campaigns that earn links from respected national and global publications.',
      deliverables: [
        'Data-Driven Digital PR Campaigns & Newsworthy Press Releases',
        'Editorial Outreach to Tier-1 Publications & Industry Authorities',
        '100% White-Hat Guest Editorial Mentions on High DA/DR (60+) Sites',
        'Unlinked Brand Mention Reclamation & Broken Link Interception',
        'Strategic Anchor Text Diversity Architecture to Shield Against Penalties',
        'Transparent Monthly Link Dossiers with Live Verification Links'
      ],
      techStack: ['Hunter.io', 'Pitchbox', 'Connectively / HARO', 'Ahrefs', 'BuzzStream'],
      roiBenchmark: '+35 to +65 Average Domain Rating (DR) Lift',
      timeline: 'Ongoing Monthly Link Acquisitions',
      bestFor: 'High-Growth Startups, Real Estate, E-Commerce, Legal & FinTech'
    },
    {
      id: 'content-copywriting',
      number: '13',
      title: 'Content Marketing & High-Depth SEO Copywriting',
      category: 'content',
      categoryLabel: 'Content & PR',
      tagline: 'Authoritative thought leadership that educates prospects and ranks #1.',
      desc: 'Content crafted by domain specialists, not generic AI regurgitation. We produce comprehensive semantic pillar pages, industry guides, and high-converting landing page copy that position your brand as the undisputed authority.',
      deliverables: [
        'Comprehensive Topical Map & Semantic Cluster Content Strategy',
        'Deep-Dive SEO Pillar Articles (2,000+ Words) with Original Insights',
        'High-Converting Landing Page Copy & Value Proposition Framing',
        'Lead Magnet Creation: E-Books, Whitepapers & Checklists',
        'Content Pruning, Refresh & Re-Optimization for Stagnant Pages',
        'Internal Linking Hierarchies that Channel Link Equity Efficiently'
      ],
      techStack: ['SurferSEO', 'Clearscope', 'Grammarly Business', 'Notion', 'Semrush'],
      roiBenchmark: '+290% Organic Keyword Footprint Expansion',
      timeline: '15-Day Editorial Sprints',
      bestFor: 'B2B Services, Healthcare Networks, Educational Institutions, Technology'
    },

    // 5. Website Design, CRO & Performance
    {
      id: 'web-design-dev',
      number: '14',
      title: 'High-Converting Web Design & Custom Development',
      category: 'web',
      categoryLabel: 'Web & CRO',
      tagline: 'Ultra-fast, aesthetically modern websites engineered for enterprise credibility.',
      desc: 'Your website is your 24/7 digital flagship. We design bespoke, responsive web platforms crafted with fluid micro-interactions, clean typography, and airtight technical SEO foundations.',
      deliverables: [
        'Bespoke UI/UX Design Crafted in Figma with Dark Luxury / Modern Aesthetics',
        'Responsive, Mobile-First Frontend Engineering (Next.js, React, WordPress)',
        'Intuitive CMS Architecture for Effortless In-House Content Publishing',
        'Enterprise Security Protocols, SSL Hardening & Automated Daily Backups',
        'Built-in Technical SEO Architecture, Schema Markup & Clean Codebase',
        'High-Converting Inquiry Forms & WhatsApp VIP Floating Triggers'
      ],
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'WordPress / Elementor Pro', 'Shopify Plus'],
      roiBenchmark: '+190% Inbound Lead Submission Rate',
      timeline: '3 to 5 Weeks from Concept to Launch',
      bestFor: 'Professional Services, Real Estate Agencies, Luxury Brands, Corporates'
    },
    {
      id: 'cro-funnels',
      number: '15',
      title: 'Conversion Rate Optimization (CRO) & Funnel Engineering',
      category: 'web',
      categoryLabel: 'Web & CRO',
      tagline: 'Double your revenue without increasing your ad spend by fixing conversion leaks.',
      desc: 'Traffic without conversion is wasted capital. We deploy behavioral session recordings, scientific A/B split testing, and psychological copywriting to turn more casual visitors into paying customers.',
      deliverables: [
        'Behavioral Heatmap & Full Session Recording Friction Analysis',
        'Scientific A/B Split Testing on Headlines, CTAs, Layouts & Pricing',
        'Multi-Step Lead Qualification Forms Engineered for Low Drop-Off',
        'Cart Abandonment & Checkout Funnel Friction Elimination',
        'Psychological Urgency & Social Proof Integration Triggers',
        'Direct WhatsApp VIP Floating Concierge & Click-to-Call Bridges'
      ],
      techStack: ['Microsoft Clarity', 'Hotjar', 'VWO', 'Google Analytics 4', 'Tailwind CSS'],
      roiBenchmark: '+185% Average Conversion Rate Lift',
      timeline: '30-Day Testing Sprints',
      bestFor: 'Lead-Gen Portals, High-Volume E-Commerce, Service Agencies'
    },
    {
      id: 'speed-optimization',
      number: '16',
      title: 'Website Speed & Core Web Vitals Optimization',
      category: 'web',
      categoryLabel: 'Web & CRO',
      tagline: 'Sub-second page load times that guarantee peak user retention and top Google rankings.',
      desc: 'Every 1-second delay in page load drops conversion by 20%. We surgically optimize your server response time, render-blocking scripts, image compression, and edge caching to achieve 90+ PageSpeed scores.',
      deliverables: [
        'Comprehensive Core Web Vitals Audit (LCP, FID/INP, CLS)',
        'Next-Gen Image Compression (WebP/AVIF) & Lazy Loading Systems',
        'JavaScript/CSS Minification, Tree-Shaking & Render-Blocking Script Elimination',
        'Cloudflare Enterprise Edge Caching & Fast Server TTFB Optimization',
        'Database Optimization & Caching Engine Configuration',
        'Guaranteed 90+ Score on Google PageSpeed Insights (Mobile & Desktop)'
      ],
      techStack: ['Google PageSpeed Insights', 'GTmetrix', 'Cloudflare Enterprise', 'WebPageTest'],
      roiBenchmark: '90+ Mobile PageSpeed Score & Sub-1.5s Load Time',
      timeline: '7 to 10 Days Express Optimization',
      bestFor: 'High-Traffic Portals, News Sites, E-Commerce Stores, Ad-Driven Landing Pages'
    },

    // 6. Automation & Reputation Management
    {
      id: 'whatsapp-email-automation',
      number: '17',
      title: 'WhatsApp & Email Marketing Automation Funnels',
      category: 'automation',
      categoryLabel: 'Automation & ORM',
      tagline: 'Turn prospects into repeat buyers with automated, hyper-personalized messaging.',
      desc: 'Automate customer acquisition, onboarding, and retention. We integrate official WhatsApp Business APIs and intelligent email workflows that nurture leads and recover abandoned revenue 24/7.',
      deliverables: [
        'Official WhatsApp Business API Green Tick Setup & Template Approvals',
        'Automated Inbound Lead Welcome & FAQ Interactive Chatbot Workflows',
        'High-Deliverability Email Drip Sequences (Welcome, Cart Recovery, Re-Engagement)',
        'Customer Segmentation Based on Buying Behavior & Lifetime Value (LTV)',
        'CRM Webhook Integrations for Instant Sales Team Push Notifications',
        'Detailed Telemetry: Open Rates, Click-Throughs & Attributed Sales'
      ],
      techStack: ['WhatsApp Cloud API', 'Wati', 'AiSensy', 'Klaviyo', 'Brevo', 'Zapier'],
      roiBenchmark: '65%+ Open Rates & 28% Recovered Cart Revenue',
      timeline: '14 Days Setup & Workflow Deployment',
      bestFor: 'Retail Brands, Online Stores, Clinics, Real Estate Consultations'
    },
    {
      id: 'orm-reputation',
      number: '18',
      title: 'Online Reputation Management (ORM) & Review Strategy',
      category: 'automation',
      categoryLabel: 'Automation & ORM',
      tagline: 'Safeguard your brand image and cultivate overwhelming 5-star customer credibility.',
      desc: 'A single negative review can cost thousands in lost revenue. We protect your digital reputation with proactive 5-star review generation engines, negative feedback dispute protocols, and search sentiment defense.',
      deliverables: [
        'Automated Review Generation Engine via SMS/WhatsApp Post-Service Triggers',
        'Google Business Profile & Multi-Platform Review Monitoring & Responses',
        'Negative Review Suppression & Unwarranted Content Dispute Protocols',
        'Brand Search Sentiment Defense & Crisis Communication Playbooks',
        'Public Trust Badges & Verified Review Widgets for Website Integration',
        'Competitor Slander Detection & Google Policy Violation Escalations'
      ],
      techStack: ['BirdEye', 'Podium', 'ReviewTrackers', 'Google Alerts', 'Semrush Brand Monitoring'],
      roiBenchmark: '4.8+ Star Average Rating & Negative Feedback Suppression',
      timeline: '30 to 60 Days Continuous Safeguard',
      bestFor: 'Hotels, Doctors & Hospitals, Real Estate Promoters, Car Dealerships, Salons'
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Services (18)' },
    { id: 'seo', label: 'SEO & Search' },
    { id: 'ads', label: 'Paid Media & PPC' },
    { id: 'social', label: 'Social & Reels' },
    { id: 'content', label: 'Content & PR' },
    { id: 'web', label: 'Web, CRO & Speed' },
    { id: 'automation', label: 'Automation & ORM' },
  ];

  const filtered = detailedServices.filter(
    (s) => selectedFilter === 'all' || s.category === selectedFilter
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#050508]">
      <Breadcrumbs currentPage="services" onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#8B3DFF]/15 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#8B3DFF]/30 bg-[#8B3DFF]/10 text-[#D7BFFF] text-xs uppercase tracking-[0.2em] font-bold mb-6 shadow-[0_0_15px_rgba(139,61,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-[#B15CFF]" />
              <span>Full-Stack 360° Digital Marketing Suite</span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Precision Search & Performance{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3DFF] via-[#B15CFF] to-[#D7BFFF]">
                Architecture
              </span>
            </h1>

            <p className="text-[#A7A3B1] text-base sm:text-lg leading-relaxed mb-8">
              From dominating competitive Google SERPs and high-ROAS Meta/Google Ads to viral Reels, high-authority Digital PR, and automated conversion funnels — explore our 18 enterprise growth disciplines.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedFilter(opt.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    selectedFilter === opt.id
                      ? 'bg-[#8B3DFF] text-white shadow-[0_0_20px_rgba(139,61,255,0.4)] scale-105'
                      : 'bg-[#0A0810] text-[#A7A3B1] hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Service Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {filtered.map((service) => (
              <div
                key={service.id}
                id={`service-detail-${service.id}`}
                className="rounded-3xl bg-[#0A0810]/90 backdrop-blur-xl border border-white/5 hover:border-[#8B3DFF]/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(139,61,255,0.25)] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#8B3DFF]/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-[#8B3DFF]/20 transition-all" />

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-black text-[#8B3DFF]">
                        {service.number}
                      </span>
                      <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#8B3DFF]/15 text-[#D7BFFF] border border-[#8B3DFF]/30">
                        {service.categoryLabel}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-[#140E23] text-[#D7BFFF] border border-[#8B3DFF]/30">
                      {service.roiBenchmark}
                    </span>
                  </div>

                  <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-2 group-hover:text-[#D7BFFF] transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-xs font-mono text-[#8B3DFF] mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#A7A3B1] leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-white font-bold mb-3 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#8B3DFF]" />
                      <span>Key Technical Deliverables</span>
                    </div>

                    <div className="space-y-2">
                      {service.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#C5C2CE]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8B3DFF] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mb-6 pt-4 border-t border-white/5">
                    <div className="text-[10px] font-mono text-[#85818E] uppercase tracking-wider mb-2">
                      Architecture & Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-[#120B20] text-[#D7BFFF] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For Note */}
                  <div className="p-3 rounded-xl bg-[#080512] border border-white/5 text-[11px] text-[#85818E] mb-6">
                    <strong className="text-white">Ideal For:</strong> {service.bestFor}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#85818E] font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#8B3DFF]" />
                    <span>{service.timeline}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/917014799233?text=${encodeURIComponent(`Hi SEO in Jaipur Team, I would like to inquire about ${service.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                    <button
                      onClick={() => onOpenInquiry(service.title)}
                      className="px-4 py-2 rounded-full bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(139,61,255,0.3)] hover:scale-105 cursor-pointer"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Engagement Tiers & SLA Guarantees */}
          <div className="mb-24 rounded-3xl bg-[#080612] border border-white/5 p-8 sm:p-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs font-mono font-bold text-[#8B3DFF] uppercase tracking-widest mb-2">
                Predictable Growth Retainers
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-white mb-3">
                Engagement Frameworks Built For Scale
              </h2>
              <p className="text-xs sm:text-sm text-[#A7A3B1]">
                Choose the growth tier suited for your current business trajectory and market goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Local Market Dominance',
                  badge: 'For Jaipur & Regional Hubs',
                  desc: 'Designed for high-traffic local businesses, clinics, cafes, fitness centers, and single-territory leaders.',
                  features: [
                    'Google Maps 3-Pack Supremacy',
                    'Local Schema & Citation Network',
                    'High-Intent Area Search Keywords',
                    'Automated WhatsApp Lead Routing',
                    'Bi-Weekly Sprint Updates'
                  ],
                  highlight: false
                },
                {
                  name: 'National Category Leader',
                  badge: 'Most Popular for Scaling Brands',
                  desc: 'Full-spectrum organic search, Google Ads & Meta Ads architecture for multi-crore national brands.',
                  features: [
                    'Full Technical & Entity SEO Engine',
                    'High-Converting Meta & Google Ads',
                    'Digital PR & High-Authority Links',
                    'Conversion Rate Optimization (CRO)',
                    'Direct Senior Architect Access'
                  ],
                  highlight: true
                },
                {
                  name: 'Global Enterprise Matrix',
                  badge: 'For Ultra-HNW & Multi-National',
                  desc: 'Bespoke international search engineering for luxury havelis, mega real estate townships, and global DTC.',
                  features: [
                    'Generative Engine Optimization (GEO)',
                    'Multi-Country / Currency SERP Architecture',
                    'High-Level Private Concierge Integrations',
                    'Custom Looker Studio Telemetry Live',
                    '24/7 Dedicated Executive Desk'
                  ],
                  highlight: false
                }
              ].map((tier, tIdx) => (
                <div
                  key={tIdx}
                  className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all ${
                    tier.highlight
                      ? 'bg-[#140E23] border-2 border-[#8B3DFF] shadow-[0_0_40px_rgba(139,61,255,0.3)]'
                      : 'bg-[#0A0810] border border-white/5 hover:border-white/10'
                  }`}
                >
                  <div>
                    <div className="inline-block text-[9px] uppercase font-mono font-bold tracking-widest px-2.5 py-1 rounded-full bg-[#8B3DFF]/20 text-[#D7BFFF] mb-3">
                      {tier.badge}
                    </div>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#A7A3B1] leading-relaxed mb-6">
                      {tier.desc}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {tier.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-[#C5C2CE]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8B3DFF] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenInquiry(tier.name)}
                    className={`w-full py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all cursor-pointer ${
                      tier.highlight
                        ? 'bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white shadow-[0_0_20px_rgba(139,61,255,0.4)]'
                        : 'bg-[#140E23] hover:bg-[#1f1538] text-[#D7BFFF] border border-[#8B3DFF]/30'
                    }`}
                  >
                    Select {tier.name.split(' ')[0]}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Consultation CTA */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#140E23] via-[#0A0810] to-[#140E23] border border-[#8B3DFF]/30 text-center flex flex-col items-center shadow-[0_0_50px_rgba(139,61,255,0.2)]">
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-3">
              Need a Customized Search & Ads Architecture?
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A3B1] max-w-xl mb-6">
              Our search strategists will analyze your target keywords, competitors, and current conversion bottlenecks to provide a bespoke proposal.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onOpenInquiry('Custom Growth Architecture')}
                className="px-8 py-3.5 bg-[#8B3DFF] hover:bg-[#9B4DFF] text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all shadow-[0_0_20px_rgba(139,61,255,0.4)] hover:scale-105 cursor-pointer"
              >
                Request Custom Strategy Proposal
              </button>
              <button
                onClick={() => {
                  onNavigate('calculator');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#120B20] hover:bg-[#1A1030] border border-white/10 text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all cursor-pointer"
              >
                Calculate ROI Projections
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
