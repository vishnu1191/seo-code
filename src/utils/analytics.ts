/**
 * Google Analytics 4 (GA4) Tracking Utility for SEOinJaipur.in
 * Configured for existing Measurement ID: G-HT14447QNV
 * 
 * Complies with strict constraint:
 * - Does NOT add duplicate gtag script tags.
 * - Detects WhatsApp (wa.me / api.whatsapp.com) and Phone (tel:) links.
 * - Dispatches 'whatsapp_click' and 'phone_click' events with full metadata.
 * - Ensures exactly ONE event per click with deduplication.
 * - Leaves standard page_view tracking untouched.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export interface AnalyticsEventParams {
  event_category?: string;
  event_label?: string;
  link_url?: string;
  link_id?: string;
  link_text?: string;
  phone_number?: string;
  page_location?: string;
  page_title?: string;
  page_path?: string;
  debug_mode?: boolean;
  [key: string]: any;
}

/**
 * Dispatch an event to existing Google Analytics 4 (G-HT14447QNV) or dataLayer
 */
export function trackGA4Event(
  eventName: 'whatsapp_click' | 'phone_click' | string,
  params: AnalyticsEventParams = {}
): void {
  if (typeof window === 'undefined') return;

  const pageLocation = window.location.href;
  const pagePath = window.location.pathname;
  const pageTitle = document.title || 'SEO in Jaipur';

  // Check if GA4 debug mode is requested via URL (?ga_debug=true) or dev environment
  const isDebug =
    Boolean(window.location.search.includes('ga_debug=true')) ||
    Boolean(window.location.search.includes('debug=true')) ||
    Boolean((import.meta as any).env?.DEV);

  const payload: AnalyticsEventParams = {
    page_location: pageLocation,
    page_path: pagePath,
    page_title: pageTitle,
    ...params,
  };

  if (isDebug) {
    payload.debug_mode = true;
  }

  // 1. Dispatch via native gtag if available (from existing GA4 measurement ID G-HT14447QNV)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  } else {
    // 2. Queue into dataLayer (for GTM or deferred GA4 script loading)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...payload,
    });
  }

  // 3. Informative browser console log for instant testing and auditing
  const logColor = eventName === 'whatsapp_click' ? '#25D366' : '#8B3DFF';
  console.log(
    `%c[GA4 Event Dispatched]%c ${eventName}`,
    `background: ${logColor}; color: #000; font-weight: bold; padding: 2px 6px; border-radius: 4px;`,
    'font-weight: bold; color: #fff;',
    payload
  );
}

/**
 * Extract phone number from WhatsApp or tel href
 */
function extractPhoneNumber(href: string): string {
  if (href.startsWith('tel:')) {
    return href.replace(/^tel:/i, '').split('?')[0].trim();
  }
  // For wa.me/<phone> or api.whatsapp.com/send?phone=<phone>
  const waMatch = href.match(/(?:wa\.me\/|phone=)(\+?\d+)/i);
  if (waMatch && waMatch[1]) {
    return waMatch[1];
  }
  return '917014799233'; // Default VIP Desk phone for SEO in Jaipur
}

/**
 * Global click listener for all WhatsApp and Phone links across the application.
 * Guaranteed to fire exactly once per user click via event delegation and debouncing.
 */
let lastClickTimestamp = 0;
let lastClickHref = '';

export function handleGlobalAnalyticsClick(e: MouseEvent): void {
  const target = e.target as HTMLElement | null;
  if (!target) return;

  // Find enclosing anchor tag
  const anchor = target.closest('a');
  if (!anchor) return;

  const href = anchor.getAttribute('href') || anchor.href || '';
  if (!href) return;

  const isWhatsApp = /wa\.me|api\.whatsapp\.com/i.test(href);
  const isPhone = /^tel:/i.test(href);

  if (!isWhatsApp && !isPhone) return;

  // Deduplication guard: ignore duplicate events fired within 350ms on the exact same href
  const now = Date.now();
  if (now - lastClickTimestamp < 350 && lastClickHref === href) {
    return;
  }
  lastClickTimestamp = now;
  lastClickHref = href;

  // Clean label/text
  const linkText =
    anchor.getAttribute('aria-label') ||
    anchor.innerText?.trim() ||
    anchor.title ||
    (isWhatsApp ? 'WhatsApp Click' : 'Phone Call Click');

  const linkId = anchor.id || undefined;
  const phoneNumber = extractPhoneNumber(href);

  if (isWhatsApp) {
    trackGA4Event('whatsapp_click', {
      event_category: 'contact',
      event_label: linkText,
      link_url: href,
      link_id: linkId,
      link_text: linkText,
      phone_number: phoneNumber,
    });
  } else if (isPhone) {
    trackGA4Event('phone_click', {
      event_category: 'contact',
      event_label: linkText,
      link_url: href,
      link_id: linkId,
      link_text: linkText,
      phone_number: phoneNumber,
    });
  }
}

/**
 * Initializes global click listener on document.
 * Returns cleanup function.
 */
export function initGlobalAnalytics(): () => void {
  if (typeof document === 'undefined') return () => {};

  document.addEventListener('click', handleGlobalAnalyticsClick, { capture: true, passive: true });

  return () => {
    document.removeEventListener('click', handleGlobalAnalyticsClick, { capture: true });
  };
}
