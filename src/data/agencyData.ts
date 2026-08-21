import { StatItem, ServiceItem, MetricCard, CaseStudy, ProcessStep, Testimonial, FAQItem } from '../types';

export const HERO_STATS: StatItem[] = [
  {
    id: 'projects',
    value: '280+',
    label: 'Projects Delivered',
    subtext: 'Across 24 countries',
    iconName: 'Layers'
  },
  {
    id: 'retention',
    value: '96.4%',
    label: 'Client Retention',
    subtext: 'Long-term partnership rate',
    iconName: 'ShieldCheck'
  },
  {
    id: 'roas',
    value: '4.2x',
    label: 'Average ROAS Lift',
    subtext: 'Across all active ad spend',
    iconName: 'TrendingUp'
  },
  {
    id: 'pipeline',
    value: '$140M+',
    label: 'Pipeline Generated',
    subtext: 'Tracked client revenue growth',
    iconName: 'Zap'
  }
];

export const AGENCY_SERVICES: ServiceItem[] = [
  {
    id: 'brand-strategy',
    number: '01',
    title: 'Brand Strategy & Positioning',
    category: 'Foundation',
    description: 'We carve distinct, defensible market positioning that commands authority, increases perceived value, and turns passive audiences into passionate brand advocates.',
    deliverables: ['Category Definition', 'Audience Archetypes', 'Verbal & Visual Identity', 'Go-To-Market Roadmap'],
    iconName: 'Compass',
    gradient: 'from-[#8B3DFF]/20 to-[#35105C]/20',
    metrics: '+45% Brand Recall'
  },
  {
    id: 'social-performance',
    number: '02',
    title: 'Social & Cultural Momentum',
    category: 'Distribution',
    description: 'Crafting viral narrative engines and high-production organic social systems that build cultural relevance and organic customer acquisition at global scale.',
    deliverables: ['High-Velocity Content Engine', 'Creator Ecosystems', 'Short-Form Video Production', 'Community Growth'],
    iconName: 'Sparkles',
    gradient: 'from-[#B15CFF]/20 to-[#4B147F]/20',
    metrics: '12M+ Monthly Views'
  },
  {
    id: 'paid-acquisition',
    number: '03',
    title: 'Paid Media & Performance Marketing',
    category: 'Acquisition',
    description: 'Algorithmic performance marketing across Meta, Google, TikTok, and programmatic networks optimized for customer lifetime value (LTV) and sustainable ROAS.',
    deliverables: ['Multi-Channel Ad Architecture', 'Creative Dynamic Testing', 'First-Party Data Attribution', 'Predictive LTV Modeling'],
    iconName: 'Target',
    gradient: 'from-[#8B3DFF]/20 to-[#140E23]/30',
    metrics: '3.8x Avg First-Order ROAS'
  },
  {
    id: 'content-creative',
    number: '04',
    title: 'Content & Creative Production',
    category: 'Conversion',
    description: 'Cinematic 3D visuals, motion graphics, editorial design, and conversion-focused storytelling designed to arrest attention and trigger immediate consumer action.',
    deliverables: ['3D Product Renders', 'High-Concept Video Ads', 'Motion Identity Systems', 'Conversion Copywriting'],
    iconName: 'Clapperboard',
    gradient: 'from-[#9B4DFF]/20 to-[#4B147F]/20',
    metrics: '2.4x Higher CTR'
  },
  {
    id: 'organic-seo',
    number: '05',
    title: 'SEO & Search Intelligence',
    category: 'Longevity',
    description: 'Future-proof search dominance utilizing semantic entity optimization, AI search readiness (Perplexity, ChatGPT, SGE), and technical architectural authority.',
    deliverables: ['Generative Engine Optimization (GEO)', 'Entity Semantic Architecture', 'Programmatic Content Hubs', 'High-Impact Authority PR'],
    iconName: 'Search',
    gradient: 'from-[#8B3DFF]/20 to-[#35105C]/20',
    metrics: '+310% High-Intent Traffic'
  },
  {
    id: 'web-experiences',
    number: '06',
    title: 'Digital Experiences & Web Platforms',
    category: 'Infrastructure',
    description: 'Ultra-fast, high-converting digital flagships and interactive web applications engineered with fluid micro-interactions, dark luxury aesthetics, and headless architecture.',
    deliverables: ['Headless Shopify / Next.js', 'Interactive 3D Canvases', 'Conversion Rate Optimization (CRO)', 'Global Edge Delivery'],
    iconName: 'Cpu',
    gradient: 'from-[#B15CFF]/20 to-[#231938]/30',
    metrics: '4.8% Average Conversion'
  }
];

export const PERFORMANCE_METRICS: MetricCard[] = [
  {
    id: 'traffic',
    metric: '+340%',
    label: 'Qualified Organic Traffic',
    sublabel: 'Average 6-month growth trajectory',
    type: 'line',
    growth: '+340%',
    period: 'Q1-Q4 Trajectory'
  },
  {
    id: 'conversions',
    metric: '+185%',
    label: 'Conversion Rate Lift',
    sublabel: 'Post-launch CRO & UX optimization',
    type: 'bar',
    growth: '+185%',
    period: 'Across 48 enterprise deployments'
  },
  {
    id: 'roas',
    metric: '4.4x',
    label: 'Blended Return on Ad Spend',
    sublabel: 'Profitable scale on $15M+ annual ad budget',
    type: 'circular',
    growth: '4.4x ROAS',
    period: 'Target: 2.5x industry standard'
  },
  {
    id: 'retention',
    label: 'Executive Client Retention',
    sublabel: 'Year-over-year enterprise contract renewal',
    metric: '96.4%',
    type: 'sparkline',
    growth: '96.4%',
    period: 'Top 1% in agency tier'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'aura-luxury',
    brand: 'AURA',
    industry: 'Haute Parfumerie & Luxury Beauty',
    category: 'luxury',
    title: 'Repositioning an Artisanal Scent House for Global Direct-to-Consumer Dominance',
    tagline: 'Scaling a heritage Parisian fragrance maison into a modern digital powerhouse.',
    metricHighlight: '+420%',
    metricLabel: 'Direct DTC Revenue Lift',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-purple-950/80 via-black to-purple-900/60',
    summary: 'AURA required a complete reimagination of their digital presence to capture high-net-worth consumers without eroding legacy brand prestige.',
    challenge: 'High customer acquisition costs on legacy ad channels, fragmented international store architecture, and low average order values on standard digital storefronts.',
    solution: 'Engineered an immersive, sensory-rich digital flagship with bespoke interactive fragrance profiling, cinematic 3D product visualizers, and targeted hyper-luxury paid media funnels.',
    results: [
      { label: 'Direct DTC Revenue', value: '+420%' },
      { label: 'Average Order Value (AOV)', value: '$265 (Up 84%)' },
      { label: 'First-Touch ROAS', value: '4.8x' },
      { label: 'Customer Lifetime Value', value: '+142% at 12 Mo' }
    ],
    technologies: ['Headless Next.js', 'WebGL Interactive Fragrance Engine', 'Klaviyo VIP Flows', 'Meta & TikTok Luxury Whitelisting']
  },
  {
    id: 'vivanta-estates',
    brand: 'VIVANTA ESTATES',
    industry: 'Ultra-Luxury Real Estate & Heritage Havelis',
    category: 'realestate',
    title: 'Architecting Private Digital Portals for Jaipur’s Prime Heritage Havelis & Royal Penthouses',
    tagline: 'Driving ₹185 Cr+ in high-net-worth real estate transactions via hyper-targeted SEO & private 3D walkthroughs.',
    metricHighlight: '₹185 Cr',
    metricLabel: 'High-Net-Worth Deal Volume',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-amber-950/80 via-black to-purple-950/60',
    summary: 'Vivanta Estates specializes in ultra-prime residential castles, restored Rajasthani havelis, and luxury penthouses catering to global NRI and industrialist buyers.',
    challenge: 'Ultra-low search volume for multi-crore properties combined with high buyer confidentiality requirements, rendering standard lead generation tactics ineffective.',
    solution: 'Engineered private, invitation-only virtual 3D tour rooms, optimized programmatic high-net-worth entity SEO for luxury real estate terms in Dubai, London, and Mumbai, and built automated private concierge routing.',
    results: [
      { label: 'Total Transaction Volume', value: '₹185 Cr Closed' },
      { label: 'Ultra-HNW Qualified Inquiries', value: '46 Verified Buyers' },
      { label: 'International NRI Traffic', value: '+390% Lift' },
      { label: 'Avg Time-on-Site in 3D Tour', value: '14.8 Minutes' }
    ],
    technologies: ['Matterport 3D Interactive Spaces', 'Private Vault Gateways', 'Google GEO Entity Search', 'Direct WhatsApp VIP Concierge']
  },
  {
    id: 'elixir-botanique',
    brand: 'ÉLIXIR BOTANIQUE',
    industry: 'Ayurvedic Alchemy & Luxury Skincare',
    category: 'luxury',
    title: 'Scaling an Artisanal Himalayan Botanical Skincare Maison into a Global D2C Cult Phenomenon',
    tagline: 'Transforming rare Himalayan botanical skincare into a high-converting global beauty powerhouse.',
    metricHighlight: '+510%',
    metricLabel: 'Organic Search Revenue',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-emerald-950/80 via-black to-purple-950/60',
    summary: 'Élixir Botanique blends ancient Vedic alchemy with clinically proven bio-actives, crafting ultra-pure serums and restorative face nectars.',
    challenge: 'Competing against venture-funded synthetic skincare brands while preserving authentic clean-beauty provenance and sustainable pricing.',
    solution: 'Crafted an editorial skin-longevity publication, executed semantic Google entity SEO for clean ingredients, and launched personalized AI skin diagnostics.',
    results: [
      { label: 'Organic Revenue', value: '+510% in 9 Months' },
      { label: 'Repeat Customer Rate', value: '54.2%' },
      { label: 'Organic Keyword #1 Rankings', value: '180+ High-Value Terms' },
      { label: 'Average Order Value (AOV)', value: '₹4,800 ($58)' }
    ],
    technologies: ['Personalized AI Skin Diagnostic', 'Shopify Plus Custom Liquid', 'Schema Entity Optimization', 'Klaviyo Lifecycle Automations']
  },
  {
    id: 'raniya-jewels',
    brand: 'RANIYA JEWELS',
    industry: 'Fine Polki & Emerald High-Jewelry',
    category: 'luxury',
    title: 'Repositioning Handcrafted Jaipur Polki & Diamond Haute Jewelry for Global High-Net-Worth Brides',
    tagline: 'Connecting master jewelers of Johari Bazaar with luxury wedding markets worldwide.',
    metricHighlight: '+380%',
    metricLabel: 'Bespoke Consultation Bookings',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-yellow-950/80 via-black to-purple-950/60',
    summary: 'Raniya Jewels crafts museum-grade uncut diamond polki chokers and Zambian emerald heritage bridal sets priced between ₹15 Lakh to ₹2 Crore.',
    challenge: 'Bridal shoppers were hesitant to book virtual appointments for ultra-high-ticket jewelry without tangible sensory assurance.',
    solution: 'Constructed an ultra-high-definition interactive jewelry vault with 4K macro video renders, diamond brilliance simulators, and geo-targeted luxury bridal SEO.',
    results: [
      { label: 'Bridal Consultation Bookings', value: '+380%' },
      { label: 'Avg Bridal Order Size', value: '₹28.5 Lakh' },
      { label: 'Global Luxury Reach', value: '14 Tier-1 Cities' },
      { label: 'Client Inbound Conversion', value: '28.4%' }
    ],
    technologies: ['4K Video Canvas Zoom', 'Calendly VIP Concierge Integration', 'High-Trust SSL Vault Architecture', 'Luxury Meta Retargeting']
  },
  {
    id: 'lumen-noir',
    brand: 'LUMEN NOIR',
    industry: 'Clean High-End Cosmetics & Lip Formulations',
    category: 'luxury',
    title: 'Dominating Organic Beauty Rankings with Entity SEO & Virtual Shade-Matching AI',
    tagline: 'Zero-waste luxury cosmetic line achieving #1 Google SERP rankings across 140+ high-intent search terms.',
    metricHighlight: '6.2x',
    metricLabel: 'Organic Acquisition ROAS',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-rose-950/80 via-black to-purple-950/60',
    summary: 'Lumen Noir formulated the first zero-microplastic matte lip velvet line, targeting conscious luxury cosmetics consumers across North America and Europe.',
    challenge: 'High shade-return rates from online orders and fierce bidding competition from mass-market conglomerates on Google Shopping.',
    solution: 'Built an in-browser WebAssembly virtual shade try-on tool paired with programmatic beauty comparison hubs and dermatologist entity backlink networks.',
    results: [
      { label: 'Organic ROAS Equivalent', value: '6.2x' },
      { label: 'Product Return Rate', value: 'Reduced by 68%' },
      { label: 'Organic Monthly Sessions', value: '420K Unique Visitors' },
      { label: 'Checkout Conversion Rate', value: '5.4%' }
    ],
    technologies: ['WebCam AI Shade Matcher', 'Generative Engine SEO (GEO)', 'Headless Hydrogen Storefront', 'Micro-Influencer Seed Engine']
  },
  {
    id: 'imperial-crest',
    brand: 'IMPERIAL CREST',
    industry: 'Luxury Sky Mansions & Golf Residences',
    category: 'realestate',
    title: 'Selling Out Ultra-Luxury Sky Mansions & Private Golf Villa Enclaves in Record Time',
    tagline: 'High-ticket investor portals, panoramic architectural flythroughs, and international lead pipelines.',
    metricHighlight: '₹240 Cr',
    metricLabel: 'Phase-1 Inventory Sold',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-slate-950/80 via-black to-indigo-950/60',
    summary: 'Imperial Crest is a 42-storey luxury residential tower featuring private cantilevered swimming pools, golf course vistas, and helipads.',
    challenge: 'Overcoming developer market saturation by creating an unmistakable aura of exclusivity that attracted tech founders and foreign investors.',
    solution: 'Created cinematic WebGL skyline flythroughs, interactive floorplate selection engines, and private digital dossiers protected by NDA verification.',
    results: [
      { label: 'Phase-1 Sold Out', value: '100% in 45 Days' },
      { label: 'Pipeline Closed Value', value: '₹240 Cr' },
      { label: 'International Buyer Share', value: '42% NRI & Expat' },
      { label: 'Cost Per Verified Lead', value: 'Reduced by 55%' }
    ],
    technologies: ['Three.js 3D Tower Explorer', 'Interactive Floorplate Customizer', 'Digital NDA e-Sign Flow', 'Google Search High-Intent Funnels']
  },
  {
    id: 'the-palm-haven',
    brand: 'THE PALM HAVEN',
    industry: 'Ultra-Luxury Farmhouses & Private Orchard Estates',
    category: 'realestate',
    title: 'Selling Out 45 Exclusive Gated Luxury Farmhouse Land Parcels to NRI Investors',
    tagline: 'Capturing high-net-worth land investors through private drone flyovers, soil certifications, and targeted Google search funnels.',
    metricHighlight: '₹140 Cr',
    metricLabel: 'Gross Land Sales Value',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-emerald-950/80 via-black to-amber-950/60',
    summary: 'The Palm Haven offers 1-acre to 3-acre gated organic orchard farmhouses with private clubhouse access, organic farming concierge, and helipad connectivity.',
    challenge: 'Long decision cycles for land investments and convincing non-resident buyers of clear title legitimacy and security management.',
    solution: 'Developed an interactive digital plot availability map with live 4K drone feeds, digital land title vault verifications, and NRI-focused search funnels across the UAE and USA.',
    results: [
      { label: 'Gross Land Sales Value', value: '₹140 Cr in 75 Days' },
      { label: 'Total Farmhouse Plots Sold', value: '45 of 45 Plots' },
      { label: 'Overseas NRI Buyer Ratio', value: '62%' },
      { label: 'Average Transaction Size', value: '₹3.1 Cr per Parcel' }
    ],
    technologies: ['Interactive SVG Plot Selection Map', '4K Drone Aerial Stream Engine', 'Digital Title Deed Security Portal', 'Global High-Intent Search Ads']
  },
  {
    id: 'maharaja-heights',
    brand: 'MAHARAJA HEIGHTS',
    industry: 'Triplex Sky Penthouses & Private Helipad Residences',
    category: 'realestate',
    title: 'Acquiring Ultra-HNW Industrialist Buyers for ₹12 Cr+ Signature Sky Mansions',
    tagline: 'Curated private digital viewing rooms with biometric verification and personalized interior customization engines.',
    metricHighlight: '18 Units',
    metricLabel: 'Penthouses Sold in 90 Days',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-amber-950/80 via-black to-purple-950/60',
    summary: 'Maharaja Heights features 18 ultra-exclusive triplex penthouses complete with private infinity pools overlooking historic city forts.',
    challenge: 'Reaching extremely wealthy business family patriarchs who do not engage with standard digital banner ads or generic lead forms.',
    solution: 'Deployed private, password-gated digital monographs, white-glove executive consultation booking bots, and invitation-only luxury property portals.',
    results: [
      { label: 'Signature Penthouses Sold', value: '18 of 18 (100% Sold Out)' },
      { label: 'Total Sales Volume', value: '₹216 Cr' },
      { label: 'Average Buyer Net Worth', value: '₹100 Cr+' },
      { label: 'Inbound Qualified Call Rate', value: '48.2%' }
    ],
    technologies: ['Private Digital Monograph Gateways', 'WebGL Sky Deck Visualizer', 'WhatsApp VIP Direct Concierge', 'Ultra-Luxury Display Retargeting']
  },
  {
    id: 'cyber-park-one',
    brand: 'CYBER PARK ONE',
    industry: 'Grade-A Commercial IT Towers & Corporate Headquarters',
    category: 'realestate',
    title: 'Leasing 1.2 Million Sq.Ft of Grade-A Tech Campus Space to Global MNCs',
    tagline: 'B2B institutional real estate lead generation, ESG sustainability showcases, and corporate tenant acquisition.',
    metricHighlight: '1.2M Sq.Ft',
    metricLabel: 'Commercial Space Leased',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-blue-950/80 via-black to-slate-900/80',
    summary: 'Cyber Park One is a LEED Platinum certified IT hub engineered with smart building IoT, green energy grids, and flexible enterprise floorplates.',
    challenge: 'Convincing Fortune 500 tech companies and fintech enterprises to establish regional tech centers in tier-2 tech corridors.',
    solution: 'Engineered an interactive Corporate Space Calculator, 3D floorplate layout simulation engine, and targeted B2B commercial real estate SEO.',
    results: [
      { label: 'Total Space Leased', value: '1.2 Million Sq.Ft' },
      { label: 'Anchor Enterprise Tenants', value: '8 Fortune 500 Firms' },
      { label: 'Annual Rental Yield Value', value: '₹72 Cr / Year' },
      { label: 'Enterprise RFP Inquiries', value: '+310%' }
    ],
    technologies: ['Interactive Floorplate Planner', 'Commercial ROI & Space Calculator', 'B2B LinkedIn ABM Funnel', 'ESG Certifications Showcase Hub']
  },
  {
    id: 'heritage-vista',
    brand: 'HERITAGE VISTA',
    industry: 'Restored Haveli Boutique Residences & Royal Courtyard Villas',
    category: 'realestate',
    title: 'Connecting Global Heritage Preservationists with 200-Year-Old Restored Royal Havelis',
    tagline: 'Preserving architectural legacy while generating record auction values via global heritage real estate portals.',
    metricHighlight: '+430%',
    metricLabel: 'Global Inbound Buyer Inquiries',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-rose-950/80 via-black to-amber-950/60',
    summary: 'Heritage Vista specializes in curating and meticulously restoring 19th-century royal havelis, frescos, and sandstone courtyards for discerning global collectors.',
    challenge: 'Communicating the authentic historical provenance and architectural conservation value to high-tier art and heritage collectors globally.',
    solution: 'Designed an editorial heritage archive with archival photo comparisons, 3D photogrammetry models of hand-carved jharokhas, and international collector SEO.',
    results: [
      { label: 'Global Inbound Inquiries', value: '+430%' },
      { label: 'Heritage Properties Transacted', value: '12 Historic Estates' },
      { label: 'Average Estate Deal Size', value: '₹22.5 Cr' },
      { label: 'Buyer Engagement Time', value: '16.2 Minutes' }
    ],
    technologies: ['Photogrammetry 3D Stone Models', 'Archival Before/After Slider', 'International Heritage Search Hub', 'Encrypted Buyer Document Vault']
  },
  {
    id: 'the-grand-township',
    brand: 'THE GRAND TOWNSHIP',
    industry: '300-Acre Integrated Smart Mega-Township',
    category: 'realestate',
    title: 'Driving 10,000+ Verified Plot & Villa Inquiries for Jaipur’s Largest Integrated Smart City',
    tagline: 'Programmatic geo-targeted search campaigns, interactive masterplan explorers, and automated CRM lead distribution.',
    metricHighlight: '₹320 Cr',
    metricLabel: 'Total Booking Value Generated',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-cyan-950/80 via-black to-indigo-950/60',
    summary: 'The Grand Township spans 300 acres with smart utility grids, international schools, golf driving ranges, and residential villa communities.',
    challenge: 'Handling massive lead velocity across multiple pricing segments while filtering out unqualified casual inquiries for sales executives.',
    solution: 'Constructed an AI-powered interactive masterplan navigation tool, automated WhatsApp lead qualification bots, and scalable programmatic search ads.',
    results: [
      { label: 'Total Booking Value', value: '₹320 Cr in 6 Months' },
      { label: 'Verified Lead Submissions', value: '10,400+ High-Intent' },
      { label: 'Lead Response Time', value: 'Under 3 Minutes (Automated)' },
      { label: 'Cost Per Qualified Site Visit', value: '-48% Reduction' }
    ],
    technologies: ['Interactive 300-Acre Masterplan Map', 'AI WhatsApp Lead Qualifier Bot', 'Salesforce CRM Real-Time Sync', 'Google Local & Display Search Ads']
  },
  {
    id: 'aravalli-eco-villas',
    brand: 'ARAVALLI ECO VILLAS',
    industry: 'Sustainable Solar-Powered Forest Villas & Hill Retreats',
    category: 'realestate',
    title: 'Pre-Selling 100% of Forest Sanctuary Villas to Eco-Conscious Urban Executives',
    tagline: 'Zero-carbon luxury positioning, microclimate environmental data visualizations, and high-converting VIP launches.',
    metricHighlight: '100%',
    metricLabel: 'Pre-Launch Inventory Sold',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-teal-950/80 via-black to-purple-950/60',
    summary: 'Aravalli Eco Villas features 32 net-zero biophilic mountain villas equipped with rainwater harvesting, solar microgrids, and organic farm plots.',
    challenge: 'Overcoming skepticism around sustainability metrics and pre-selling off-plan properties without completed model villas.',
    solution: 'Created an environmental dashboard showing real-time air quality index (AQI) comparisons, virtual solar yield models, and early-bird investor portal access.',
    results: [
      { label: 'Pre-Launch Villas Sold', value: '32 of 32 (100% Sold Out)' },
      { label: 'Total Pre-Launch Revenue', value: '₹96 Cr' },
      { label: 'Site Visit Conversion Rate', value: '52.8%' },
      { label: 'Metro Inbound Buyer Lift', value: '+360%' }
    ],
    technologies: ['Live Microclimate AQI Comparison Widget', 'Solar Yield Calculator Engine', 'Virtual 3D Biophilic Architecture Tour', 'High-Trust Investor Portal']
  },
  {
    id: 'celeste-derma',
    brand: 'CELESTE LABS',
    industry: 'Clinical Dermatology & Anti-Aging',
    category: 'luxury',
    title: 'Clinical Skincare Authority: Dominating Google AI Overviews and Dermatological Search',
    tagline: 'Scaling medical-grade peptide and exosome formulations from clinic exclusivity to global monthly subscribers.',
    metricHighlight: '4.9x',
    metricLabel: 'Subscriber LTV Expansion',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-cyan-950/80 via-black to-purple-950/60',
    summary: 'Founded by board-certified dermatologists, Celeste Labs produces clinical cellular recovery serums with patented copper tripeptide complexes.',
    challenge: 'Navigating stringent medical claims compliance while outranking established clinical conglomerates on authority skincare keywords.',
    solution: 'Engineered peer-reviewed clinical data hubs, structured medical schema markup for Google Knowledge Graph, and launched an auto-replenish VIP membership club.',
    results: [
      { label: 'Monthly Active Subscribers', value: '18,500+' },
      { label: 'LTV Expansion', value: '4.9x over 12 Months' },
      { label: 'Google AI Overview Inclusion', value: '91% of Target Queries' },
      { label: 'Organic Inbound Leads', value: '+340%' }
    ],
    technologies: ['Recharge Subscriptions Core', 'Medical Schema Markup (MedDRA)', 'Algolia Instant Clinical Search', 'Post-Purchase VIP Portal']
  },
  {
    id: 'velvet-velour',
    brand: 'VELVET & VELOUR',
    industry: 'Artisanal Home Fragrance & Candle Parfums',
    category: 'luxury',
    title: 'Algorithmic Discovery Engine for Ultra-Luxury Artisanal Room Parfums & Hand-Poured Candles',
    tagline: 'Capturing seasonal luxury gift search trends and affluent interior design tastemakers.',
    metricHighlight: '+620%',
    metricLabel: 'Holiday Search Velocity',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-stone-950/80 via-black to-purple-950/60',
    summary: 'Velvet & Velour crafts organic soy wax and pure oud candles in mouth-blown tinted glass vessels, celebrated by top boutique hotels and luxury interior designers.',
    challenge: 'Severe revenue seasonality and difficulty translating sensory fragrance qualities across flat digital screens.',
    solution: 'Designed an ambient soundscape-accompanied digital olfactory finder, combined with aggressive seasonal gifting SEO and hospitality B2B wholesale portals.',
    results: [
      { label: 'Q4 Gifting Search Lift', value: '+620%' },
      { label: 'Luxury Hotel B2B Contracts', value: '38 Boutique Resorts' },
      { label: 'Direct DTC Gross Margin', value: '78%' },
      { label: 'Average Cart Size', value: '3.2 Units' }
    ],
    technologies: ['Sound-Reactive Visualizer', 'Wholesale B2B Shopify Plus Gateway', 'Programmatic Gift Guide SEO', 'Custom Fragrance Profiler']
  },
  {
    id: 'solis-goldcare',
    brand: 'SOLIS GOLDCARE',
    industry: '24K Gold Scalp Rituals & Luxury Haircare',
    category: 'luxury',
    title: 'Scaling 24K Gold-Infused Scalp Rituals from Niche Beverly Hills Salon to Global E-Commerce Leader',
    tagline: 'Turning social beauty virality into compounding organic search authority and subscription growth.',
    metricHighlight: '3.9x',
    metricLabel: 'Customer Re-Order Velocity',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-amber-950/80 via-black to-purple-950/60',
    summary: 'Solis Goldcare pioneered bio-fermented 24K colloidal gold scalp elixirs that stimulate follicle rejuvenation and hair density.',
    challenge: 'High initial cost-per-acquisition on social ads and skepticism regarding gold mineral efficacy.',
    solution: 'Deployed trichologist-verified video micro-studies, deep trichology content hubs, and automated weekly scalp progress photo check-in flows.',
    results: [
      { label: 'Re-Order Velocity', value: '3.9x within 60 Days' },
      { label: 'Organic Scalp Health Traffic', value: '+440%' },
      { label: 'Blended Acquisition Cost', value: '-38% Decrease' },
      { label: 'Overall Brand NPS', value: '94' }
    ],
    technologies: ['Gorgias Trichology Helpdesk', 'Interactive Scalp Diagnostic Tool', 'TikTok Creator Whitelisting Engine', 'Custom Subscription Flow']
  },
  {
    id: 'maison-de-soie',
    brand: 'MAISON DE SOIE',
    industry: 'Bespoke Bridal Silk Couture & High Fashion',
    category: 'luxury',
    title: 'Crafting an Immersive Digital Atelier for Bespoke Hand-Embroidered Bridal Silk Couture',
    tagline: 'Transforming bespoke bridal consultations into fully booked global calendar slots.',
    metricHighlight: '98%',
    metricLabel: 'Atelier Slot Booking Rate',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-fuchsia-950/80 via-black to-purple-950/60',
    summary: 'Maison de Soie creates one-of-a-kind silk bridal lehengas and wedding gowns with real zari threadwork and hand-applied pearl embroidery.',
    challenge: 'Navigating long 6-to-12 month consultation timelines and attracting high-intent ultra-luxury brides over generic bridal search traffic.',
    solution: 'Built an interactive 360-degree fabric drape simulator, private video styling suites, and wedding planner entity search networks.',
    results: [
      { label: 'Atelier Booking Rate', value: '98% Capacity for Season' },
      { label: 'Average Bridal Commission', value: '₹8.5 Lakh ($10.2K)' },
      { label: 'Luxury Destination Inquiries', value: '+310%' },
      { label: 'Organic Pinterest Impressions', value: '18M / Quarter' }
    ],
    technologies: ['360 Fabric Drape Viewer', 'Zoom VIP Atelier Bridge', 'High-Res CDN Image Engine', 'Luxury Wedding Directory SEO']
  },
  {
    id: 'opulent-oasis',
    brand: 'OPULENT OASIS',
    industry: 'Luxury Wellness & Ayurvedic Spa Sanctuaries',
    category: 'hospitality',
    title: 'Holistic Wellness Tourism: Scaling Direct Retreat Bookings for Luxury Rajasthani Sanctuaries',
    tagline: 'Driving $3,500/night luxury wellness sanctuary reservations via intent-driven organic search.',
    metricHighlight: '+290%',
    metricLabel: 'Direct Villa Bookings',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-teal-950/80 via-black to-purple-950/60',
    summary: 'Opulent Oasis is a secluded 5-star wellness sanctuary nestled in the Aravalli hills offering custom detox retreats and royal palace suites.',
    challenge: 'Heavy reliance on third-party travel agencies (OTAs) charging 22-28% commission on high-value bookings.',
    solution: 'Architected a direct wellness reservation platform with personalized retreat package customizers, holistic retreat SEO, and Google Hotel Ads optimization.',
    results: [
      { label: 'Direct Commission-Free Bookings', value: '+290%' },
      { label: 'OTA Commission Saved', value: '$420,000 / Year' },
      { label: 'Average Length of Stay', value: '6.4 Nights' },
      { label: 'Direct Website ROAS', value: '7.8x' }
    ],
    technologies: ['Direct SynXis Booking Engine', 'Retreat Customizer Wizard', 'Multilingual Content Delivery', 'Google Hotel Ads API']
  },
  {
    id: 'iron-oxygen-gym',
    brand: 'IRON & OXYGEN',
    industry: 'Ultra-Luxury Athletic Club & Private Performance Gym',
    category: 'gym',
    title: 'Dominating High-End Athletic Memberships & Private Training Bookings in Metro Hubs',
    tagline: 'Full-house private gym memberships within 60 days of launch through hyper-local Google Maps & high-intent search SEO.',
    metricHighlight: '+480%',
    metricLabel: 'Annual VIP Memberships',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-zinc-950/80 via-black to-purple-950/60',
    summary: 'Iron & Oxygen is a 25,000 sq.ft state-of-the-art training sanctuary featuring Olympic platforms, cold plunges, biometric tracking, and elite strength coaches.',
    challenge: 'High competition from commercial gym chains and establishing brand credibility for a premium ₹8,000/month tier.',
    solution: 'Engineered Google Local 3-Pack supremacy, launched high-converting personalized trainer-matching quizzes, and deployed local geo-fenced search funnels.',
    results: [
      { label: 'Annual VIP Memberships', value: '+480% in 60 Days' },
      { label: 'Local Search Rankings', value: '#1 in 15+ Target Localities' },
      { label: 'Private Training Revenue', value: '₹42 Lakh / Mo' },
      { label: 'Member Retention Rate', value: '92.4%' }
    ],
    technologies: ['Mindbody API Integration', 'Local 3-Pack Map Dominance', 'Personalized Trainer Matching Quiz', 'Meta Hyper-Local Retargeting']
  },
  {
    id: 'titan-forge-gym',
    brand: 'TITAN FORGE',
    industry: 'Olympic Weightlifting & Strength Powerhouse',
    category: 'gym',
    title: 'Scaling a Cult Heavy-Iron Training Facility into a Multi-City Franchise Powerhouse',
    tagline: 'Quadrupling footfall, coaching tier subscriptions, and supplement sales through targeted athletic keyword funnels.',
    metricHighlight: '5.4x',
    metricLabel: 'Member Acquisition ROAS',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-amber-950/80 via-black to-slate-900/80',
    summary: 'Titan Forge is the definitive training ground for competitive powerlifters, bodybuilders, and serious strength athletes.',
    challenge: 'Struggling with high member turnover during seasonal lulls and slow adoption of premium nutrition coaching programs.',
    solution: 'Designed a high-impact cinematic gym webapp with day-pass digital checkout, automated strength coaching funnels, and localized search SEO.',
    results: [
      { label: 'Member Acquisition ROAS', value: '5.4x' },
      { label: 'Active Gym Members', value: '1,850+ Athletes' },
      { label: 'Nutrition Coaching Uptake', value: '+310%' },
      { label: 'Google Review Score', value: '4.9 Stars (850+ Reviews)' }
    ],
    technologies: ['Custom Pass Booking Webapp', 'Local Geo-Fencing Search', 'High-Impact Video Reels', 'Automated Churn Alert Engine']
  },
  {
    id: 'aura-reformer-pilates',
    brand: 'AURA REFORMER',
    industry: 'Luxury Reformer Pilates & Barre Studio',
    category: 'gym',
    title: 'Booking Out 100% of Reformer Class Slots with Dynamic Waitlist and Referral Automations',
    tagline: 'Converting casual trial attendees into loyal recurring monthly class pass holders.',
    metricHighlight: '99.4%',
    metricLabel: 'Class Capacity Utilization',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-rose-950/80 via-black to-purple-950/60',
    summary: 'Aura Reformer delivers boutique high-energy reformer pilates, sound-healed stretching, and aesthetic toning classes for high-achieving women and athletes.',
    challenge: 'High cost per lead on social media ads and empty mid-day class slots during business weekdays.',
    solution: 'Crafted dynamic class waitlist SMS triggers, corporate wellness package SEO, and aesthetic micro-influencer referral loops.',
    results: [
      { label: 'Class Capacity Utilization', value: '99.4% Peak & Off-Peak' },
      { label: 'Monthly Pass Renewals', value: '88.6%' },
      { label: 'Cost Per Trial Sign-up', value: '-52% Reduction' },
      { label: 'Organic Referral Sign-ups', value: '340+ per month' }
    ],
    technologies: ['Mariana Tek Core Integration', 'Dynamic Waitlist SMS Engine', 'Instagram Local Influencer Seeding', 'Google Local Service Ads']
  },
  {
    id: 'kinetix-crossfit',
    brand: 'KINETIX CROSSFIT',
    industry: 'High-Intensity CrossFit & Functional Fitness Arena',
    category: 'gym',
    title: 'Launching 6-Week Challenge Conversion Funnels that Drove 350+ New Athletes in 30 Days',
    tagline: 'Transforming search visibility into recurring community member retainers.',
    metricHighlight: '+340%',
    metricLabel: 'Trial-to-Member Conversion',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-orange-950/80 via-black to-purple-950/60',
    summary: 'Kinetix CrossFit combines elite gymnastics coaching, kettlebell conditioning, and Olympic lifting in an expansive 18,000 sq.ft industrial arena.',
    challenge: 'Intimidation barrier for beginners preventing website visitors from booking trial workout sessions.',
    solution: 'Built interactive "Beginner Fitness Assessment" funnels, community transformation showcase hubs, and localized CrossFit keyword search campaigns.',
    results: [
      { label: 'Trial-to-Member Conversion', value: '+340%' },
      { label: 'New Onboarded Athletes', value: '350+ in First Month' },
      { label: 'Organic Inbound Inquiries', value: '180+ / Week' },
      { label: 'Average Member Lifetime', value: '16.8 Months' }
    ],
    technologies: ['Wodify Member Webhook Bridge', 'High-Converting Landing Funnels', 'WhatsApp Automated Nurture Flows', 'Performance SEO Hub']
  },
  {
    id: 'zephyr-yoga-wellness',
    brand: 'ZEPHYR YOGA',
    industry: 'Premium Hot Yoga, Sound Bath & Meditation Sanctuary',
    category: 'gym',
    title: 'Establishing Jaipur’s Premier Holistic Yoga & Sound Healing Destination',
    tagline: 'High-ticket teacher training enrollments and recurring unlimited memberships through mindful content SEO.',
    metricHighlight: '+520%',
    metricLabel: 'Teacher Training Inquiries',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-emerald-950/80 via-black to-purple-950/60',
    summary: 'Zephyr Yoga is an architect-designed cedarwood sanctuary offering infrared hot vinyasa, Tibetan sound baths, and certified 200-hour yoga teacher trainings.',
    challenge: 'Differentiating from casual community studios and securing high-ticket international students for ₹1.5 Lakh certified teacher programs.',
    solution: 'Architected comprehensive yoga curriculum portals, sound-reactive audio meditation previews, and international yoga retreat search campaigns.',
    results: [
      { label: 'Teacher Training Inquiries', value: '+520%' },
      { label: 'Batch Enrollment Capacity', value: 'Sold Out 4 Quarters Ahead' },
      { label: 'Monthly Unlimited Members', value: '620 Active Yogis' },
      { label: 'Average Session Attendance', value: '94%' }
    ],
    technologies: ['Retreat & Workshop Booking Core', 'Google Organic Yoga Directory SEO', 'Sound Bath Audio Preview Engine', 'Klaviyo VIP Member Journeys']
  },
  {
    id: 'pulse-smart-gym',
    brand: 'PULSE PERFORMANCE 24/7',
    industry: '24/7 Biometric Smart Gym & Recovery Lounge',
    category: 'gym',
    title: 'Automated Digital Check-in & Biometric Pass Sales Driving 2,200+ Active Subscriptions',
    tagline: 'Contactless digital membership onboarding with zero staff overhead and exceptional member retention.',
    metricHighlight: '2,200+',
    metricLabel: 'Active 24/7 Subscriptions',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-cyan-950/80 via-black to-purple-950/60',
    summary: 'Pulse 24/7 brings high-tech AI gym equipment, infrared saunas, and round-the-clock biometric security access to fitness enthusiasts.',
    challenge: 'High cost of human front-desk sales operations and need for friction-free instant membership sign-ups at any time of night.',
    solution: 'Created an instant mobile pass-purchasing engine with biometric phone verification, localized 24/7 gym search ranking, and automated payment recovery.',
    results: [
      { label: 'Active Subscriptions', value: '2,200+ Members' },
      { label: 'Digital Sign-up Completion Rate', value: '74.8%' },
      { label: 'Monthly Staff Overhead Saved', value: '₹3.8 Lakh / Month' },
      { label: 'Member LTV Growth', value: '+210%' }
    ],
    technologies: ['IoT Turnstile RFID Cloud Gateway', 'Stripe Auto-Recurring Billing', 'Search Intent Local Optimization', 'In-App Workout Tracking Portal']
  },
  {
    id: 'rajvilas-palace',
    brand: 'RAJVILAS PALACE',
    industry: 'Royal Heritage Palace & Destination Weddings',
    category: 'hospitality',
    title: 'Driving ₹35 Cr in Destination Wedding & Royal Suite Bookings with High-Intent Organic Search',
    tagline: 'Bypassing luxury travel aggregators to capture direct ultra-HNW wedding and royal getaway reservations.',
    metricHighlight: '₹35 Cr',
    metricLabel: 'Direct Wedding Bookings',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-amber-950/80 via-black to-purple-950/60',
    summary: 'Rajvilas Palace is a majestic 18th-century royal estate featuring 54 heritage villas, private stepwells, and peacock courtyards for destination celebrations.',
    challenge: 'High commission drains from wedding event agencies and OTAs alongside low direct international website conversions.',
    solution: 'Designed an interactive 3D Royal Palace Walkthrough with customized wedding RFP engines, luxury destination bridal SEO, and global multi-currency checkout.',
    results: [
      { label: 'Direct Wedding Revenue', value: '₹35 Cr in 12 Months' },
      { label: 'OTA Commission Saved', value: '₹7.2 Cr' },
      { label: 'International Bridal Traffic', value: '+460%' },
      { label: 'Average Royal Suite Stay', value: '₹65,000 / Night' }
    ],
    technologies: ['3D Virtual Royal Palace Walkthrough', 'Direct Wedding RFP Engine', 'Google Hotel Search Entity Ads', 'Multi-Currency Global Checkout']
  },
  {
    id: 'dune-horizon-camp',
    brand: 'DUNE HORIZON',
    industry: 'Star-Gazing Luxury Desert Glamping & Safari',
    category: 'hospitality',
    title: 'Dominating Sam Dunes & Thar Desert Luxury Searches with 100% Peak Season Direct Occupancy',
    tagline: 'Unmatched organic search visibility for luxury desert glamping, camel safaris, and folk evening experiences.',
    metricHighlight: '100%',
    metricLabel: 'Peak Season Direct Occupancy',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-yellow-950/80 via-black to-purple-950/60',
    summary: 'Dune Horizon offers Swiss AC luxury tents, private stargazing domes, and curated private camel safaris in the golden Thar Desert.',
    challenge: 'Intense local broker price wars and high seasonal churn during winter holiday spikes.',
    solution: 'Deployed mobile-first instant safari reservations, automated dynamic pricing engines, and hyper-targeted Google Local 3-Pack supremacy.',
    results: [
      { label: 'Peak Season Occupancy', value: '100% Sold Out' },
      { label: 'Direct Web Reservations', value: '+380%' },
      { label: 'Average Booking Lead Time', value: '45 Days Ahead' },
      { label: '5-Star TripAdvisor Reviews', value: '1,200+ Verified' }
    ],
    technologies: ['Mobile-First Instant Safari Booking', 'Dynamic Seasonal Price Engine', 'Multilingual Tour Guides CMS', 'Google Local 3-Pack Domination']
  },
  {
    id: 'ananta-ayurvedic-spa',
    brand: 'ANANTA AYURVEDA',
    industry: 'Panchakarma & Restorative Ayurvedic Sanctuary',
    category: 'hospitality',
    title: 'International Patient & Wellness Traveler Discovery Engine for Authentic Ayurvedic Healing',
    tagline: 'Attracting European and American wellness travelers for 14-to-28 day holistic Panchakarma retreats.',
    metricHighlight: '+410%',
    metricLabel: 'Long-Stay Global Bookings',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-emerald-950/80 via-black to-purple-950/60',
    summary: 'Ananta Ayurveda is a physician-supervised botanical retreat offering personalized detox, stress recovery, and herbal panchakarma therapies.',
    challenge: 'Building clinical confidence and handling complex international multi-week retreat inquiries online.',
    solution: 'Built a doctor consultation telehealth bridge, interactive Dosha diagnosis quiz, and international medical travel entity SEO networks.',
    results: [
      { label: 'Long-Stay International Bookings', value: '+410%' },
      { label: 'Average Retreat Stay', value: '18.5 Days' },
      { label: 'Patient Consultation Conversion', value: '42.6%' },
      { label: 'Direct Wire Payments', value: '$840,000 / Year' }
    ],
    technologies: ['Doctor Consultation Telehealth Bridge', 'Custom Diet & Dosha Quiz', 'International Wire & Stripe Escrow', 'Medical Travel Entity SEO']
  },
  {
    id: 'the-haveli-rooftop-cafe',
    brand: 'THE HAVELI ROOFTOP',
    industry: 'Fine Dining, Artisanal Roastery & Sunset Lounge',
    category: 'hospitality',
    title: 'Scaling Table Reservations and Tourist Footfall to 1,500+ Daily Guests with Hyper-Local SEO',
    tagline: 'Ranking #1 on Google for "Best Sunset View Rooftop Cafe in Jaipur" and "Artisanal Coffee".',
    metricHighlight: '1,500+',
    metricLabel: 'Daily Table Guests & Footfall',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-amber-950/80 via-black to-purple-950/60',
    summary: 'Overlooking the historic pink city palaces, The Haveli Rooftop serves artisanal single-origin coffee, handcrafted cocktails, and royal Rajasthani tapas.',
    challenge: 'Fierce competition from hundreds of rooftop eateries and capturing high-spending international tourists before they arrive in the city.',
    solution: 'Implemented automated WhatsApp table reservations, interactive AR visual menus, and a Google Maps review acceleration engine with 10K+ genuine ratings.',
    results: [
      { label: 'Daily Table Guests', value: '1,500+ Peak Day Footfall' },
      { label: 'Google Maps Monthly Views', value: '1.2 Million' },
      { label: 'Sunset Slot Pre-Bookings', value: '100% Reserved Daily' },
      { label: 'Average Table Spend', value: '+35% Growth' }
    ],
    technologies: ['Instant WhatsApp Table Reservation Bot', 'Live Digital Visual Menu with AR', 'Google Maps 10K+ Review Generation Engine', 'Instagram Foodie Influencer Network']
  },
  {
    id: 'serena-springs-resort',
    brand: 'SERENA SPRINGS',
    industry: 'High-Altitude Eco-Resort & Thermal Spring Baths',
    category: 'hospitality',
    title: 'Direct Commission-Free Escapes: Scaling Weekend & Corporate Retreat Occupancy to Record Highs',
    tagline: 'Connecting urban executives with rejuvenating natural thermal spring and forest bathing retreats.',
    metricHighlight: '+330%',
    metricLabel: 'Corporate Retreat Inquiries',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-teal-950/80 via-black to-purple-950/60',
    summary: 'Serena Springs is an eco-architectural sanctuary built around natural thermal mineral waters, offering bespoke executive reset packages.',
    challenge: 'Attracting mid-week corporate offsites and high-margin wellness buyouts during non-holiday periods.',
    solution: 'Built an enterprise corporate retreat planner portal, seasonal mineral bath booking engine, and targeted LinkedIn executive search funnels.',
    results: [
      { label: 'Corporate Retreat Inquiries', value: '+330%' },
      { label: 'Mid-Week Occupancy Rate', value: '84.2%' },
      { label: 'Direct Buyout Contracts', value: '26 Major Enterprise Offsites' },
      { label: 'Direct Web Revenue', value: '₹14.8 Cr' }
    ],
    technologies: ['Corporate Bulk Booking System', 'Seasonal Thermal Experience Builder', 'Google Travel Sync Engine', 'Direct Inbound Inquiry Automation']
  },
  {
    id: 'vanta-couture',
    brand: 'VANTA',
    industry: 'Contemporary Haute Couture & Apparel',
    category: 'fashion',
    title: 'Building a High-Velocity Cultural Drop Engine for Avant-Garde Streetwear',
    tagline: 'Zero-inventory flash releases that sell out in under 180 seconds.',
    metricHighlight: '100%',
    metricLabel: 'Sold Out Releases in <3 Mins',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-indigo-950/80 via-black to-purple-950/70',
    summary: 'VANTA created museum-grade streetwear garments but required a hyper-exclusive digital drop mechanism to build global organic frenzy.',
    challenge: 'Standard e-commerce checkout bottlenecks, bot scalp attacks during flash drops, and difficulty maintaining community loyalty between seasonal collections.',
    solution: 'Constructed a custom token-gated and SMS-verified drop infrastructure backed by cinematic vertical video teasers and private discord VIP access tiers.',
    results: [
      { label: 'Drop Sell-Through Rate', value: '100% in 180s avg' },
      { label: 'SMS Subscriber Base', value: '145K Active VIPs' },
      { label: 'Organic Instagram Impressions', value: '45M+ per season' },
      { label: 'Gross Margin Expansion', value: '+38% Direct Margin' }
    ],
    technologies: ['High-Concurrency Edge Server', 'SMS Broadcast Engine', 'Motion Design Lookbooks', 'Private VIP Gateways']
  },
  {
    id: 'orbit-voyages',
    brand: 'ORBIT',
    industry: 'Experiential Luxury Hospitality & Expeditions',
    category: 'hospitality',
    title: 'Curating Ultra-Exclusive Private Escapes for Next-Gen Nomads & Visionaries',
    tagline: 'High-ticket private expedition bookings fueled by aspirational storytelling.',
    metricHighlight: '5.6x',
    metricLabel: 'Blended Paid Media ROAS',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    fallbackGradient: 'from-purple-950/80 via-black to-blue-950/70',
    summary: 'ORBIT offers high-ticket ($25K-$120K per guest) orbital and remote polar expeditions requiring unmatched trustworthiness and bespoke concierge inquiry handling.',
    challenge: 'High friction on digital booking discovery and skepticism regarding safety protocols and expedition quality from high-net-worth individuals.',
    solution: 'Crafted 4K cinematic expedition preview microsites with verified client video diaries, private concierge chat routing, and ultra-targeted private wealth advertising.',
    results: [
      { label: 'Expedition Bookings', value: '100% Capacity for 24 Mo' },
      { label: 'Inquiry-to-Deposit Rate', value: '38.5%' },
      { label: 'Average Booking Value', value: '$42,500' },
      { label: 'Customer Satisfaction Score', value: '99.2% CSAT' }
    ],
    technologies: ['Interactive Expedition Maps', 'Live Concierge Video Routing', 'Stripe Ultra-Scale Invoicing', 'Hyper-Targeted High-Net-Worth Ads']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    phase: 'Phase 01',
    title: 'Discover & Deep Audit',
    description: 'We dismantle your existing data, unit economics, audience psychology, competitive blind spots, and brand equity to identify high-leverage growth vectors.',
    deliverables: ['Comprehensive Growth Audit', 'Customer Archetype Map', 'Attribution & Tracking Check', 'Competitive Wedge Analysis'],
    duration: 'Weeks 1 — 2'
  },
  {
    step: '02',
    phase: 'Phase 02',
    title: 'Define & Architect',
    description: 'Formulate an unassailable growth thesis. We craft the core narrative, creative direction, channel allocation blueprint, and conversion architecture.',
    deliverables: ['Go-to-Market Strategy', 'Full Creative Style Guide', 'Channel Spend Allocations', 'Sprint Priority Matrix'],
    duration: 'Weeks 3 — 4'
  },
  {
    step: '03',
    phase: 'Phase 03',
    title: 'Execute & Launch',
    description: 'Design, develop, and launch the high-converting web experiences, cinematic creative assets, and algorithmic ad campaigns simultaneously.',
    deliverables: ['Digital Platform Deployment', 'Multi-Asset Creative Packs', 'Full Pixel & Conversion API Setup', 'Campaign Launch & Monitoring'],
    duration: 'Weeks 5 — 8'
  },
  {
    step: '04',
    phase: 'Phase 04',
    title: 'Scale & Compound',
    description: 'Deploy relentless weekly creative iteration, algorithmic bid optimization, conversion rate testing, and automated retention loops to compound monthly gains.',
    deliverables: ['Weekly Performance Telemetry', 'Rapid Creative Testing Sprints', 'LTV & Churn Mitigation Loops', 'Bi-Weekly Executive Briefings'],
    duration: 'Continuous'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-rajvilas',
    quote: 'SEO Jaipur completely transformed our direct wedding and luxury suite booking model. Prior to working with them, 70% of our high-ticket foreign guest revenue was lost to OTA commissions. Within 5 months, our direct organic inquiries generated ₹35 Crore in verified wedding buyouts. They are the benchmark for digital performance in India.',
    author: 'Vikramaditya Singh Rathore',
    role: 'Managing Director & Custodian',
    company: 'Rajvilas Palace & Resorts',
    industry: 'Royal Heritage Hospitality',
    location: 'Jaipur, Rajasthan',
    category: 'hospitality',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    highlightMetric: '₹35 Cr Direct Bookings',
    verified: true,
    date: 'Verified Client • Q2 2026',
    projectScope: 'Google Local 3-Pack, 3D WebVR Palace Tour & Direct Booking Engine'
  },
  {
    id: 't-aurum-jewels',
    quote: 'Selling ₹25 Lakh+ polki and solitaire jewelry online felt impossible until SEO Jaipur built our digital private salon. In our very first quarter post-launch, our international NRI sales surged by 380% with verified buyers from Dubai, Singapore, and California.',
    author: 'Sunaina Mehra Khandelwal',
    role: 'Co-Founder & Creative Director',
    company: 'Aurum Polki & Fine Jewelry',
    industry: 'Handcrafted Luxury Jewelry',
    location: 'Jaipur & Mumbai',
    category: 'luxury',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    highlightMetric: '+380% NRI High-Ticket Sales',
    verified: true,
    date: 'Verified Client • Q1 2026',
    projectScope: 'Virtual Try-On 3D WebApp & NRI High-Intent Google Search'
  },
  {
    id: 't-palm-haven',
    quote: 'We had 45 ultra-luxury gated farmhouse plots in the Aravalli foothills with an aggressive 90-day target. The targeted search funnels and interactive 4K drone plot selector designed by SEO Jaipur sold out all 45 parcels in just 75 days, delivering ₹140 Cr in transaction value.',
    author: 'Ananya Singhania',
    role: 'Chief Investment Officer',
    company: 'The Palm Haven Farmhouses',
    industry: 'Ultra-Luxury Real Estate',
    location: 'Jaipur & Delhi NCR',
    category: 'realestate',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    highlightMetric: '₹140 Cr Land Value Sold',
    verified: true,
    date: 'Verified Client • Q2 2026',
    projectScope: 'Interactive Plot Selector, 4K Drone Engine & HNW Search SEO'
  },
  {
    id: 't-iron-oxygen',
    quote: 'Launching a premium ₹8,000/month athletic club in Jaipur was seen as a gamble by others. SEO Jaipur placed us at #1 across every fitness search term in Vaishali Nagar and C-Scheme. We hit 100% VIP membership capacity within 60 days of opening our doors.',
    author: 'Kabir Bhasin',
    role: 'Founder & Head of Athletics',
    company: 'Iron & Oxygen Performance Club',
    industry: 'Luxury Gym & Strength Training',
    location: 'Jaipur, Rajasthan',
    category: 'gym',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    highlightMetric: '+480% VIP Memberships',
    verified: true,
    date: 'Verified Client • Q1 2026',
    projectScope: 'Local 3-Pack Supremacy, Trainer Match Funnel & Video Ads'
  },
  {
    id: 't-maharaja-heights',
    quote: 'Finding buyers with ₹100 Cr+ net worth for our ₹12 Cr triplex penthouses requires utmost discretion and elite craftsmanship. Their password-protected digital viewing rooms and targeted executive search captured 18 buyers in record time.',
    author: 'Rajeev Bhargava',
    role: 'Vice President of Sales & Strategy',
    company: 'Maharaja Heights Penthouses',
    industry: 'High-Rise Luxury Residential',
    location: 'Jaipur, Rajasthan',
    category: 'realestate',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    highlightMetric: '18 Penthouses Sold (₹216 Cr)',
    verified: true,
    date: 'Verified Client • Q4 2025',
    projectScope: 'Private Digital Monograph Gateways & WebGL Sky Visualizer'
  },
  {
    id: 't-ananta-ayurveda',
    quote: 'Our medical retreat guests arrive from Germany, the UK, and Switzerland for 3-week Panchakarma detox programs. SEO Jaipur positioned us as India’s leading authentic Ayurvedic sanctuary on global search engines. Our direct retreat revenue is up 410%.',
    author: 'Dr. Vaidya Harish Sharma',
    role: 'Chief Medical Director',
    company: 'Ananta Ayurveda Retreats',
    industry: 'Holistic Health & Ayurvedic Medicine',
    location: 'Udaipur & Jaipur',
    category: 'hospitality',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    highlightMetric: '+410% Global Retreat Stays',
    verified: true,
    date: 'Verified Client • Q1 2026',
    projectScope: 'Telehealth Consultation Bridge, Dosha Quiz & International SEO'
  },
  {
    id: 't-aura-pilates',
    quote: 'Our reformer pilates beds are booked solid from 6 AM to 9 PM every day. Their dynamic waitlist automation and geo-fenced Instagram conversion system reduced our trial acquisition cost by 52% while driving an 88% renewal rate.',
    author: 'Pooja Kashyap',
    role: 'Master Instructor & Founder',
    company: 'Aura Reformer & Barre Studio',
    industry: 'Boutique Pilates & Wellness',
    location: 'Mumbai & Jaipur',
    category: 'gym',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    highlightMetric: '99.4% Class Capacity',
    verified: true,
    date: 'Verified Client • Q2 2026',
    projectScope: 'Dynamic SMS Waitlist Engine & Aesthetic Video Funnels'
  },
  {
    id: 't-dune-horizon',
    quote: 'Operating luxury desert glamping in Jaisalmer is heavily seasonal. SEO Jaipur filled 100% of our peak season luxury tents four months in advance through direct search campaigns, saving us over ₹32 Lakhs in middleman OTA cuts.',
    author: 'Manvendra Singh Bhati',
    role: 'Co-Founder & General Manager',
    company: 'Dune Horizon Desert Camp',
    industry: 'Experiential Desert Hospitality',
    location: 'Jaisalmer & Jodhpur, Rajasthan',
    category: 'hospitality',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    highlightMetric: '100% Peak Direct Bookings',
    verified: true,
    date: 'Verified Client • Q4 2025',
    projectScope: 'Instant Safari Engine & Local Google 3-Pack Optimization'
  },
  {
    id: 't-haveli-rooftop',
    quote: 'Our rooftop sunset lounge receives over 1,500 walk-ins and table reservations every single weekend. With SEO Jaipur managing our Google Maps presence and WhatsApp instant booking engine, we generate 1.2M+ local views each month.',
    author: 'Aditya Agarwal',
    role: 'Hospitality Partner & Beverage Director',
    company: 'The Haveli Rooftop & Roastery',
    industry: 'Fine Dining & Craft Hospitality',
    location: 'Jaipur, Rajasthan',
    category: 'hospitality',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    highlightMetric: '1.2M Monthly Maps Views',
    verified: true,
    date: 'Verified Client • Q2 2026',
    projectScope: 'WhatsApp Instant Table Booking & AR Cocktail Menu'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'engagement',
    question: 'How do you structure client engagements?',
    category: 'Partnership',
    answer: 'We partner with a strictly limited cohort of 12-15 ambitious brands at any given time to maintain obsessive craft and executive oversight. Engagements typically operate on a monthly growth retainer with performance incentive tiers, or dedicated fixed-scope digital architecture sprints.'
  },
  {
    id: 'timeframe',
    question: 'What is the expected timeframe to see measurable results?',
    category: 'Timeline',
    answer: 'Initial architectural sprints and foundational creative rollouts take 2 to 4 weeks. Algorithmic paid acquisition campaigns and rapid CRO testing typically begin generating verified conversion velocity and customer acquisition efficiency within the first 14-21 days of live deployment.'
  },
  {
    id: 'guarantee',
    question: 'How do you measure and report performance?',
    category: 'Accountability',
    answer: 'We provide real-time bespoke telemetry dashboards connected directly to your first-party analytics (Mixpanel, GA4, Triple Whale, Snowflake) so you have unadulterated visibility into true profit margins, customer acquisition cost (CAC), and blended ROAS 24/7.'
  },
  {
    id: 'difference',
    question: 'What sets KINETIC MATRIX apart from traditional agencies?',
    category: 'Philosophy',
    answer: 'Traditional agencies outsource execution to junior staff or rely on outdated vanity metrics. We combine veteran mathematical growth engineers, world-class 3D artists, and senior brand strategists into dedicated multi-disciplinary strike teams tailored directly to your business objective.'
  }
];
