// ============================================================
//  GLOBAL SITE CONFIG — edit these values to rebrand the site
// ============================================================

export const SITE = {
  COMPANY_NAME: "MA Apparel Pro",
  DOMAIN: "maapparelpro.com",
  TAGLINE: "Custom Sports Uniforms — Designed, Sublimated & Delivered Worldwide",
  LOGO: "/ma logo.png",
  // Raw international format, no spaces or symbols (used in wa.me link)
  WHATSAPP_NUMBER: "+92XXXXXXXXXX",
  BUSINESS_EMAIL: "sales@maapparelpro.com",
  MIN_ORDER: 10,
  FACEBOOK_URL: "https://www.facebook.com/profile.php?id=61590812950718",
  LINKEDIN_URL: "https://www.linkedin.com/company/126143947/",
  INSTAGRAM_URL: "https://www.instagram.com/maapparelofficial_/",
  PINTEREST_URL: "https://www.pinterest.com/maapparel123/",
} as const;

/** Strip everything except digits for wa.me links. */
function waNumber() {
  return SITE.WHATSAPP_NUMBER.replace(/[^\d]/g, "");
}

/** Build a WhatsApp deep link with an optional pre-filled message. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${waNumber()}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Build a mailto link with optional subject + body. */
export function emailLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${SITE.BUSINESS_EMAIL}${qs ? `?${qs}` : ""}`;
}

/** Default WhatsApp inquiry message. */
export function defaultWhatsAppMessage(product?: string) {
  return product
    ? `Hello ${SITE.COMPANY_NAME}, I'd like a custom team quote for "${product}" (min. ${SITE.MIN_ORDER} pcs). Please share details.`
    : `Hello ${SITE.COMPANY_NAME}, I'd like to order custom team uniforms. Please share details.`;
}
