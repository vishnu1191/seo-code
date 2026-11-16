import { mkdir, writeFile } from 'node:fs/promises';

const SITE = (process.env.SITE_URL || 'https://seoinjaipur.in').replace(/\/$/, '');
await mkdir('reports', { recursive: true });
const checks = [];
const add = (name, status, detail) => checks.push({ name, status, detail });
async function get(url) {
  const response = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'SEOinJaipur-ReadOnly-Audit/1.0' } });
  return { response, body: await response.text() };
}
function meta(html, key, attribute = 'name') {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  const tag = tags.find((item) => new RegExp("\\\\b" + attribute + "=[\"']" + key + "[\"']", 'i').test(item));
  return tag?.match(/\bcontent=["']([^"']*)["']/i)?.[1]?.trim() || '';
}
function title(html) {
  return html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, ' ').trim() || '';
}
function canonical(html) {
  const tags = html.match(/<link\b[^>]*>/gi) || [];
  const tag = tags.find((item) => /\brel=["']canonical["']/i.test(item));
  return tag?.match(/\bhref=["']([^"']+)["']/i)?.[1] || '';
}
try {
  const { response, body } = await get(SITE + '/');
  add('Homepage HTTP status', response.ok ? 'PASS' : 'FAIL', String(response.status));
  const t = title(body);
  add('Homepage title', t.length >= 30 && t.length <= 65 ? 'PASS' : 'REVIEW', t || 'Missing title');
  const d = meta(body, 'description');
  add('Meta description', d.length >= 70 && d.length <= 170 ? 'PASS' : 'REVIEW', d || 'Missing description');
  const c = canonical(body);
  add('Canonical URL', c === SITE + '/' ? 'PASS' : 'REVIEW', c || 'Missing canonical');
  const r = meta(body, 'robots');
  add('Robots meta', /index/i.test(r) && !/noindex/i.test(r) ? 'PASS' : 'REVIEW', r || 'No robots meta; verify server defaults');
  add('Open Graph title', meta(body, 'og:title', 'property') ? 'PASS' : 'REVIEW', 'og:title presence');
  add('JSON-LD presence', /application\/ld\+json/i.test(body) ? 'PASS' : 'REVIEW', 'Presence only; validate schema separately');
  const h1 = (body.match(/<h1\b/gi) || []).length;
  add('Initial HTML H1 count', h1 === 1 ? 'PASS' : 'REVIEW', h1 + ' found; React-rendered headings may not be in initial HTML');
} catch (error) {
  add('Homepage fetch', 'FAIL', error.message);
}
for (const path of ['/robots.txt', '/sitemap.xml']) {
  try {
    const { response, body } = await get(SITE + path);
    add(path + ' HTTP status', response.ok ? 'PASS' : 'FAIL', String(response.status));
    if (path === '/robots.txt') add('Robots sitemap reference', /Sitemap:\s*https?:\/\//i.test(body) ? 'PASS' : 'REVIEW', body.replace(/\s+/g, ' ').slice(0, 300));
    else {
      add('Sitemap XML marker', /<urlset[\s>]/i.test(body) ? 'PASS' : 'REVIEW', 'URL set marker');
      add('Sitemap homepage URL', body.includes(SITE + '/') ? 'PASS' : 'REVIEW', SITE + '/');
    }
  } catch (error) {
    add(path + ' fetch', 'FAIL', error.message);
  }
}
const generatedAt = new Date().toISOString();
const failed = checks.filter((x) => x.status === 'FAIL').length;
const review = checks.filter((x) => x.status === 'REVIEW').length;
const lines = [
  '# SEO in Jaipur — Homepage SEO Audit', '',
  '- Site: ' + SITE,
  '- Generated: ' + generatedAt,
  '- Mode: read-only; no website files changed',
  '- Summary: ' + (checks.length - failed - review) + ' PASS, ' + review + ' REVIEW, ' + failed + ' FAIL', '',
  '| Check | Status | Finding |', '|---|---|---|',
  ...checks.map((x) => '| ' + x.name.replace(/\|/g, '/') + ' | ' + x.status + ' | ' + x.detail.replace(/\|/g, '/').replace(/\s+/g, ' ') + ' |'),
  '', '## Limitations', '',
  '- Checks public HTML and crawl files only. It does not measure Google rankings, field Core Web Vitals, backlinks, or Search Console performance.',
  '- React-rendered content may not appear in initial HTML; verify in a browser.',
  '- REVIEW items require human inspection. This workflow never edits or deploys the website.', ''
];
await writeFile('reports/homepage-seo-audit.md', lines.join('\n'));
await writeFile('reports/homepage-seo-audit.json', JSON.stringify({ site: SITE, generatedAt, checks }, null, 2));
console.log(lines.join('\n'));
if (failed) process.exitCode = 1;
