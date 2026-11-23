import { mkdir, readFile, writeFile } from 'node:fs/promises';

const source = await readFile('src/data/blogPosts.ts', 'utf8');
const baseHtml = await readFile('dist/index.html', 'utf8');
const site = 'https://seoinjaipur.in';

const routes = new Map([
  ['', {
    title: 'SEO Agency in Jaipur | SEO, Local SEO, Google Ads & Meta Ads',
    description: 'SEO in Jaipur helps local businesses improve Google visibility with SEO, Local SEO, Google Ads, Meta Ads, content marketing and website design. Contact us for a practical growth plan.'
  }],
  ['about', {
    title: 'About SEO in Jaipur | Our Approach to SEO & Digital Marketing',
    description: 'Learn about SEO in Jaipur, our practical approach to SEO, Local SEO, Google Ads, Meta Ads, transparent reporting and business growth.'
  }],
  ['services', {
    title: 'Digital Marketing Services in Jaipur | SEO & Ads',
    description: 'Explore SEO, Local SEO, Google Ads, Meta Ads, social media marketing, link building and website design services for Jaipur businesses.'
  }],
  ['performance', {
    title: 'SEO & Ads Reporting | SEO in Jaipur',
    description: 'See how SEO in Jaipur measures search visibility, website enquiries, phone and WhatsApp contact actions, and advertising performance.'
  }],
  ['work', {
    title: 'Portfolio & Work | SEO in Jaipur',
    description: 'Explore the portfolio status and approach of SEO in Jaipur. Client examples and performance figures are published only when verifiable.'
  }],
  ['process', {
    title: 'Our SEO & Digital Marketing Process | SEO in Jaipur',
    description: 'Understand the practical process behind SEO, Local SEO, Google Ads and Meta Ads planning, implementation and reporting at SEO in Jaipur.'
  }],
  ['calculator', {
    title: 'Digital Marketing Growth Calculator | SEO in Jaipur',
    description: 'Explore planning scenarios for digital marketing and lead generation. Estimates are illustrative and are not guaranteed campaign results.'
  }],
  ['blog', {
    title: 'SEO & Digital Marketing Blog in Jaipur | SEO in Jaipur',
    description: 'Read practical guides on SEO services in Jaipur, Local SEO, Google Ads, Meta Ads and digital marketing for business owners.'
  }]
]);

const blogPattern = /\\{\\s*slug:\\s*'([^']+)',\\s*title:\\s*'((?:\\\\'|[^'])*)',\\s*seoTitle:\\s*'((?:\\\\'|[^'])*)',\\s*metaDescription:\\s*'((?:\\\\'|[^'])*)'/g;
for (const match of source.matchAll(blogPattern)) {
  routes.set('blog/' + match[1], {
    title: match[3].replace(/\\\\'/g, "'"),
    description: match[4].replace(/\\\\'/g, "'")
  });
}

const escapeAttr = (value) => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function upsertTag(html, pattern, tag) {
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', '    ' + tag + '\\n  </head>');
}

for (const [route, metadata] of routes) {
  const canonical = site + (route ? '/' + route + '/' : '/');
  let html = baseHtml;
  html = html.replace(/<title>[\\s\\S]*?<\\/title>/i, '<title>' + escapeAttr(metadata.title) + '</title>');
  html = upsertTag(html, /<meta\\b(?=[^>]*\\bname=["']description["'])[^>]*>/i,
    '<meta name="description" content="' + escapeAttr(metadata.description) + '" />');
  html = upsertTag(html, /<meta\\b(?=[^>]*\\bproperty=["']og:title["'])[^>]*>/i,
    '<meta property="og:title" content="' + escapeAttr(metadata.title) + '" />');
  html = upsertTag(html, /<meta\\b(?=[^>]*\\bproperty=["']og:description["'])[^>]*>/i,
    '<meta property="og:description" content="' + escapeAttr(metadata.description) + '" />');
  html = upsertTag(html, /<meta\\b(?=[^>]*\\bproperty=["']og:url["'])[^>]*>/i,
    '<meta property="og:url" content="' + canonical + '" />');
  html = upsertTag(html, /<link\\b(?=[^>]*\\brel=["']canonical["'])[^>]*>/i,
    '<link rel="canonical" href="' + canonical + '" />');

  const destination = 'dist' + (route ? '/' + route : '');
  await mkdir(destination, { recursive: true });
  await writeFile(destination + '/index.html', html);
}
console.log('Generated ' + routes.size + ' static HTML routes with route-specific titles, descriptions and canonicals.');
