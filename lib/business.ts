// lib/business.ts
// Single source of truth for all Houston Superior Painting NAP, hours,
// service areas, paint brands, and branding constants.
// Every Footer, Header, schema, and CTA should consume from here.
// NEVER hardcode phone, email, address, or hours anywhere else.

export const BUSINESS = {
  // ─── Brand ─────────────────────────────────────────────
  name: "Houston Superior Painting",
  legalName: "Houston Superior Painting LLC",
  slogan: "Old-School Preparation. Premium Long-Lasting Results.",
  founded: 2019,
  url: "https://houstonsuperiorpainting.com",
  logo: "https://houstonsuperiorpainting.com/images/logo.png",
  ogImage: "https://houstonsuperiorpainting.com/images/og-cover.jpg",

  // ─── Contact ───────────────────────────────────────────
  phone: "(346) 594-5960",
  phoneTel: "+13465945960",            // for tel: and sms: links
  phoneE164: "+1-346-594-5960",        // for schema.org
  email: "info@houstonsuperiorpainting.com",

  // ─── Scheduler (Houston Superior Groups — Contractor ERP) ─────────
  // Single source of truth for the online booking / photo-quote widget.
  //  - widgetSrc: the widget.js script (preferred embed method)
  //  - embedUrl:  direct booking page URL (embedded inline as an iframe)
  scheduler: {
    widgetSrc: "https://app.houstonsuperiorgroups.com/api/book/houston-superior/widget.js",
    embedUrl: "https://app.houstonsuperiorgroups.com/book/houston-superior",
    label: "Houston Superior Painting Scheduler",
  },

  // ─── Owner (for Person schema + EEAT) ──────────────────
  // No `image`: the existing portrait files are stock/AI images, not Juan.
  // Add one only when a real photo of him is available.
  founder: {
    name: "Juan Serra",
    jobTitle: "Owner",
    bio: "Juan Serra owns Houston Superior Painting, founded in 2019 in Cypress, TX. He walks estimates, sets the prep plan for every job, and does the final walkthrough with the homeowner.",
  },

  // ─── Primary Address (HQ — used in LocalBusiness root) ─
  // These coordinates are THE canonical HQ geo. Never hardcode lat/long for the
  // HQ anywhere else — import from here so every schema block agrees.
  // Geocoded from the street address; confirm against the Google Business
  // Profile pin, since a mismatch weakens local ranking signals.
  primaryAddress: {
    street: "14150 Huffmeister Rd, Suite 410",
    city: "Cypress",
    state: "TX",
    zip: "77429",
    country: "US",
    latitude: 29.9745,
    longitude: -95.6445,
  },

  // ─── All Office Locations (for multi-location schema) ──
  locations: [
    {
      slug: "houston-bissonnet",
      label: "Houston Office",
      street: "2617 Bissonnet St #443",
      city: "Houston",
      state: "TX",
      zip: "77005",
      country: "US",
      latitude: 29.7195,
      longitude: -95.4254,
      areaServed: ["Houston", "Bellaire", "West University", "Memorial", "The Heights"],
    },
    {
      slug: "katy-fm1463",
      label: "Katy Office",
      street: "3230 FM 1463 APT 3201",
      city: "Katy",
      state: "TX",
      zip: "77494",
      country: "US",
      latitude: 29.7474,
      longitude: -95.8244,
      areaServed: ["Katy", "Fulshear", "Richmond", "Rosenberg", "Cinco Ranch"],
    },
    {
      slug: "cypress-huffmeister",
      label: "Cypress Office (Headquarters)",
      street: "14150 Huffmeister Rd, Suite 410",
      city: "Cypress",
      state: "TX",
      zip: "77429",
      country: "US",
      // Same physical office as primaryAddress — keep these two in sync.
      latitude: 29.9745,
      longitude: -95.6445,
      areaServed: ["Cypress", "Tomball", "Spring", "Champions Forest", "The Woodlands"],
      isHeadquarters: true,
    },
    {
      slug: "sugar-land-university",
      label: "Sugar Land Office",
      street: "18722 University Blvd, Suite 254, 2nd Floor",
      city: "Sugar Land",
      state: "TX",
      zip: "77479",
      country: "US",
      // TODO(geo): fill in from the Google Business Profile map pin for this
      // office. Left null rather than guessed — a lat/long that disagrees with
      // the GBP pin weakens local ranking (see primaryAddress note above), so a
      // wrong number here would be worse than an absent one. Consumers must
      // null-check before emitting a GeoCoordinates block.
      latitude: null,
      longitude: null,
      areaServed: ["Sugar Land", "Missouri City", "Stafford", "First Colony", "Riverstone", "Sienna"],
    },
    {
      slug: "magnolia-cottontop",
      label: "Magnolia Office",
      street: "14512 Cottontop Mtn",
      city: "Magnolia",
      state: "TX",
      zip: "77354",
      country: "US",
      // TODO(geo): same as Sugar Land — no verified pin available. This office
      // was already live on /contact but had never been added here, so no
      // coordinates existed for it anywhere in the codebase to copy from.
      latitude: null,
      longitude: null,
      areaServed: ["Magnolia", "Pinehurst", "Montgomery", "Tomball", "The Woodlands"],
    },
  ],

  // ─── Hours (single source of truth — use everywhere) ───
  hours: {
    monday:    { open: "07:00", close: "19:00", display: "7:00 AM – 7:00 PM" },
    tuesday:   { open: "07:00", close: "19:00", display: "7:00 AM – 7:00 PM" },
    wednesday: { open: "07:00", close: "19:00", display: "7:00 AM – 7:00 PM" },
    thursday:  { open: "07:00", close: "19:00", display: "7:00 AM – 7:00 PM" },
    friday:    { open: "07:00", close: "19:00", display: "7:00 AM – 7:00 PM" },
    saturday:  { open: "08:00", close: "16:00", display: "8:00 AM – 4:00 PM" },
    sunday:    { open: null,    close: null,    display: "Closed" },
  },
  hoursSummary: [
    { label: "Mon–Fri", value: "7:00 AM – 7:00 PM" },
    { label: "Saturday", value: "8:00 AM – 4:00 PM" },
    { label: "Sunday", value: "Closed" },
  ],

  // ─── Service Areas ─────────────────────────────────────
  // Intentionally NOT stored here. The canonical list is the exported
  // SERVICE_AREAS constant at the bottom of this file. A duplicate 12-entry
  // array used to live here and had drifted badly behind SERVICE_AREAS (23
  // entries), so anything rendering from it silently omitted 11 location
  // pages. Import SERVICE_AREAS instead.

  // ─── Services (single canonical list — used everywhere) ─
  services: [
    { name: "Interior Painting",          slug: "interior-painting-houston-tx" },
    { name: "Exterior Painting",          slug: "exterior-painting-houston-tx" },
    { name: "Cabinet Refinishing",        slug: "cabinet-refinishing-houston-tx" },
    { name: "Drywall Repair",             slug: "drywall-repair-houston-tx" },
    { name: "Pressure Washing",           slug: "pressure-washing-houston-tx" },
    { name: "Limewash & Brick Painting",  slug: "limewash-brick-painting-houston-tx" },
    { name: "Commercial Painting",        slug: "commercial-painting-houston-tx" },
    { name: "Garage Epoxy",               slug: "garage-epoxy-houston-tx" },
    { name: "Load Bearing Wall Removal",  slug: "load-bearing-wall-removal-houston-tx" },
    { name: "Stucco Painting & Repair",   slug: "stucco-painting-houston-tx" },
    { name: "Wood Rot Repair",            slug: "wood-rot-repair-houston-tx" },
    { name: "Wallpaper Removal",          slug: "wallpaper-removal-houston-tx" },
    { name: "Venetian Plaster",           slug: "venetian-plaster-houston-tx" },
  ],

  // ─── Trust signals ─────────────────────────────────────
  trust: {
    googleRating: 4.9,
    reviewCount: 200,
    projectsCompleted: 500,
    warrantyYears: 5,
    yearsInBusiness: 6,   // Founded 2019; calc programatically if preferred
    crewExperienceYears: 15,   // "Combined crew experience"
    // Texas does not issue a state occupational license for residential
    // painting contractors, so the site must never claim to be "licensed."
    // Insurance and bonding are the verifiable credentials — advertise those.
    insured: true,
    bonded: true,
    liabilityCoverage: "$2M",
    bbbAccredited: true,
  },

  // ─── Brands / partners ─────────────────────────────────
  paintPartners: ["Sherwin-Williams", "Benjamin Moore"],

  // ─── Social / SameAs (for Organization schema) ─────────
  // Brand-level profiles only. Google Business Profiles are per office and
  // live in lib/locations.ts. Yelp and BBB were removed: neither URL could be
  // confirmed as our listing. Re-add them only once confirmed.
  social: {
    facebook: "https://www.facebook.com/houstonsuperiorpainting",
    instagram: "https://www.instagram.com/houstonsuperiorpainting",
  },
} as const;

// ─── Convenience helpers ──────────────────────────────────
export const PHONE_HREF = `tel:${BUSINESS.phoneTel}`;
export const SMS_HREF   = `sms:${BUSINESS.phoneTel}`;
export const MAIL_HREF  = `mailto:${BUSINESS.email}`;

export const FULL_ADDRESS = `${BUSINESS.primaryAddress.street}, ${BUSINESS.primaryAddress.city}, ${BUSINESS.primaryAddress.state} ${BUSINESS.primaryAddress.zip}`;

export const SAME_AS_URLS = Object.values(BUSINESS.social);

export const OFFICIAL_SITE_DISCLAIMER =
  "houstonsuperiorpainting.com is the only official website of Houston Superior Painting, owned by Juan Serra. Our five offices are in Cypress, Houston, Katy, Sugar Land and Magnolia, Texas, and all of them use (346) 594-5960. We are not affiliated with any other painting company using a similar name, in Houston or anywhere else.";

/**
 * Garage Epoxy is its own brand on its own domain (see lib/epoxy.ts).
 *
 * Declared here rather than imported from lib/epoxy.ts because that module
 * already imports THIS one — the dependency only runs one way, so epoxy.ts
 * reads this constant instead of redeclaring the URL.
 *
 * Migrated from epoxy.houstonsuperiorpainting.com to its own apex domain. The
 * old subdomain 308s here at the Vercel domain level, so pointing at it would
 * cost every internal link an extra hop. Note the new domain 308s every
 * non-root path to `/`, so only root-relative fragments (`/#pricing`) are safe
 * to append — deep paths will be collapsed.
 */
export const EPOXY_URL = "https://houstonsuperiorepoxy.com";

/**
 * Resolve a service in BUSINESS.services to the URL it should actually link to.
 *
 * Every service is an on-site page except Garage Epoxy: `/garage-epoxy-houston-tx`
 * is a 308 to the epoxy domain, so linking to that slug sends visitors through
 * a needless redirect hop. next.config.mjs already avoids the same two-hop chain
 * for `/garage-epoxy`; this keeps the nav and footer consistent with that rule.
 */
export function serviceHref(slug: string): string {
  return slug === "garage-epoxy-houston-tx" ? EPOXY_URL : `/${slug}`;
}

/** True when serviceHref() points off this origin and needs a plain anchor. */
export function isExternalHref(href: string): boolean {
  return href.startsWith("http");
}

/**
 * Every city/neighborhood landing page, and the single source of truth for the
 * footer strip and the homepage "Areas We Serve" section.
 *
 * Both surfaces render from this one array on purpose. Previously the footer
 * hardcoded 12 of these inline while components/locations-section.tsx carried
 * its own separate list of 10 — which is how 10 of the 23 location pages ended
 * up with zero inbound internal links and became unreachable to crawlers. One
 * list means adding a page here links it everywhere at once.
 *
 * `name` values are taken from each page's own `city` prop / H1 so the anchor
 * text matches the destination's heading rather than a paraphrase.
 *
 * Deliberately EXCLUDED — both are 301 sources, so linking them would point
 * internal links at a redirect:
 *   - `painters-in-houston-tx`     -> `painters-houston-tx`
 *   - `house-painters-cypress-tx`  -> `painters-cypress-tx`
 */
export const SERVICE_AREAS = [
  { name: "Houston", slug: "painters-houston-tx" },
  { name: "Katy", slug: "painters-katy-tx" },
  { name: "Cypress", slug: "painters-cypress-tx" },
  { name: "Sugar Land", slug: "painters-sugar-land-tx" },
  { name: "The Woodlands", slug: "painters-the-woodlands-tx" },
  { name: "Memorial", slug: "painters-memorial-tx" },
  { name: "The Heights", slug: "painters-the-heights-tx" },
  { name: "Bellaire", slug: "painters-bellaire-tx" },
  { name: "Pearland", slug: "painters-pearland-tx" },
  { name: "Richmond", slug: "painters-richmond-tx" },
  { name: "Fulshear", slug: "painters-fulshear-tx" },
  { name: "Magnolia", slug: "painters-magnolia-tx" },
  { name: "Tomball", slug: "painters-tomball-tx" },
  { name: "Missouri City", slug: "painters-missouri-city-tx" },
  { name: "Rosenberg", slug: "painters-rosenberg-tx" },
  { name: "River Oaks", slug: "painters-river-oaks-tx" },
  { name: "Champions Forest", slug: "painters-champions-forest-tx" },
  { name: "Cinco Ranch", slug: "painters-cinco-ranch-tx" },
  { name: "Cypress Creek", slug: "painters-cypress-creek-tx" },
  { name: "Energy Corridor", slug: "painters-energy-corridor-tx" },
  { name: "Memorial Villages", slug: "painters-memorial-villages-tx" },
  { name: "Sienna", slug: "painters-sienna-tx" },
  { name: "Riverstone", slug: "painters-riverstone-tx" },
] as const;

export type ServiceArea = (typeof SERVICE_AREAS)[number];

export type Business = typeof BUSINESS;
