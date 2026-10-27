// lib/business.ts
// Single source of truth for all Houston Superior Painting NAP, hours,
// service areas, paint brands, and branding constants.
// Every Footer, Header, schema, and CTA should consume from here.
// NEVER hardcode phone, email, address, or hours anywhere else.

/**
 * What a published address is (owner brief 2026-10-25, phase 7). Only a
 * "staffed_office" may be called an office in copy or get its own LocalBusiness
 * schema; that needs the owner to confirm it is staffed during stated hours,
 * signed where required, eligible for its own Google Business Profile and open
 * to customer visits if the site says so. Until then a location is described as
 * a service area ("Serving Katy and surrounding communities").
 */
export type LocationType = "staffed_office" | "service_area" | "mailing_address" | "owner_verification_required"

/** True only for owner-verified staffed offices. */
export function isVerifiedOffice(l: { locationType: LocationType }): boolean {
  return l.locationType === "staffed_office"
}

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

  // ─── Scheduler (InsightPaint Contractor ERP; switched from app.houstonsuperiorgroups.com 2026-10-08, same system) ─
  // Single source of truth for the online booking / photo-quote widget.
  //  - widgetSrc: the widget.js script (preferred embed method)
  //  - embedUrl:  direct booking page URL (embedded inline as an iframe)
  scheduler: {
    widgetSrc: "https://app.insightpaint.com/api/book/houston-superior/widget.js",
    embedUrl: "https://app.insightpaint.com/book/houston-superior",
    label: "Houston Superior Painting Scheduler",
  },

  // ─── Owner (for Person schema + EEAT) ──────────────────
  // Juan Serra is the owner. No photo of him is used on the site, by choice,
  // so Person schema carries no image.
  founder: {
    name: "Juan Serra",
    givenName: "Juan",
    familyName: "Serra",
    jobTitle: "Owner",
    image: null as string | null,
    // Softened 2026-10-14 (owner brief): do not claim Juan personally supervises
    // or reviews every job unless he confirms it.
    bio: "Juan Serra founded Houston Superior Painting in 2019 and runs the company from its Cypress headquarters. He built it around preparation, written scopes and finishes designed for Houston conditions.",
    url: "https://houstonsuperiorpainting.com/about",
    id: "https://houstonsuperiorpainting.com/about#juan-serra",
  },

  // The only official website. A third party operates a look-alike domain
  // (houstonsuperiorpaintingmagnoliatx.com) that is NOT affiliated. The
  // disclaimer renders on /about and /painters-magnolia-tx only.
  officialSiteDisclaimer:
    "houstonsuperiorpainting.com is the only official website of Houston Superior Painting. houstonsuperiorpaintingmagnoliatx.com is not owned or operated by us.",

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
    longitude: -95.6444,
  },

  // ─── Locations with a Google Business Profile ──────────
  // Each of these five has its own Google Business Profile and city page.
  // LocalBusiness schema is emitted only for locationType "staffed_office"
  // (all five: Juan confirmed staffed offices 2026-10-25). Address strings must match the GBP
  // character for character.
  locations: [
    {
      slug: "houston-bissonnet",
      /** The city page this office's Google Business Profile points to. */
      pageSlug: "painters-houston-tx",
      // GBP "Share" link, supplied by the owner 2026-10-10.
      mapsUrl: "https://maps.app.goo.gl/fdVmNamNHyNZ3gBD8" as string | null,
      label: "Houston",
      /** Juan confirmed a staffed office customers can visit, 2026-10-25. */
      locationType: "staffed_office" as LocationType,
      street: "2617 Bissonnet St #443",
      city: "Houston",
      state: "TX",
      zip: "77005",
      country: "US",
      latitude: 29.7253,
      longitude: -95.4196,
      areaServed: ["Houston", "Bellaire", "West University", "Memorial", "The Heights"],
    },
    {
      slug: "katy-fm1463",
      /** The city page this office's Google Business Profile points to. */
      pageSlug: "painters-katy-tx",
      // GBP "Share" link, supplied by the owner 2026-10-10.
      mapsUrl: "https://maps.app.goo.gl/zcUY9dT1KYdoPmiy6" as string | null,
      label: "Katy",
      /** Juan confirmed a staffed office customers can visit, 2026-10-25. */
      locationType: "staffed_office" as LocationType,
      street: "3230 FM 1463 APT 3201",
      city: "Katy",
      state: "TX",
      zip: "77494",
      country: "US",
      latitude: 29.7431,
      longitude: -95.8534,
      areaServed: ["Katy", "Fulshear", "Richmond", "Rosenberg", "Cinco Ranch"],
    },
    {
      slug: "cypress-huffmeister",
      /** The city page this office's Google Business Profile points to. */
      pageSlug: "painters-cypress-tx",
      // GBP "Share" link, supplied by the owner 2026-10-10.
      mapsUrl: "https://maps.app.goo.gl/G2cRQy8Cth7UM6d6A" as string | null,
      label: "Cypress (headquarters)",
      /** Juan confirmed a staffed office customers can visit, 2026-10-25. */
      locationType: "staffed_office" as LocationType,
      street: "14150 Huffmeister Rd, Suite 410",
      city: "Cypress",
      state: "TX",
      zip: "77429",
      country: "US",
      // Same physical office as primaryAddress — keep these two in sync.
      latitude: 29.9745,
      longitude: -95.6444,
      areaServed: ["Cypress", "Tomball", "Spring", "Champions Forest", "The Woodlands"],
      isHeadquarters: true,
    },
    {
      slug: "sugar-land-university",
      /** The city page this office's Google Business Profile points to. */
      pageSlug: "painters-sugar-land-tx",
      // GBP "Share" link, supplied by the owner 2026-10-10.
      mapsUrl: "https://maps.app.goo.gl/kda3QDeyq89B4u9R9" as string | null,
      label: "Sugar Land",
      /** Juan confirmed a staffed office customers can visit, 2026-10-25. */
      locationType: "staffed_office" as LocationType,
      street: "18722 University Blvd, Suite 254, 2nd Floor",
      city: "Sugar Land",
      state: "TX",
      zip: "77479",
      country: "US",
      // Map pin from this office's Google Business Profile (2026-10-10).
      latitude: 29.5469,
      longitude: -95.5862,
      areaServed: ["Sugar Land", "Missouri City", "Stafford", "First Colony", "Riverstone", "Sienna"],
    },
    {
      slug: "magnolia-cottontop",
      /** The city page this office's Google Business Profile points to. */
      pageSlug: "painters-magnolia-tx",
      // GBP "Share" link, supplied by the owner 2026-10-10.
      mapsUrl: "https://maps.app.goo.gl/WXxysgBJ6CWMrjg18" as string | null,
      label: "Magnolia",
      /** Juan confirmed a staffed office customers can visit, 2026-10-25. */
      locationType: "staffed_office" as LocationType,
      street: "14512 Cottontop Mountain",
      city: "Magnolia",
      state: "TX",
      zip: "77354",
      country: "US",
      // Map pin from this office's Google Business Profile (2026-10-10).
      latitude: 30.2356,
      longitude: -95.7087,
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
    { name: "Residential Remodeling",     slug: "residential-remodeling-houston-tx" },
  ],

  // ─── Trust signals ─────────────────────────────────────
  trust: {
    // Google ratings are per profile, never combined: see data/review-profiles.ts
    // and components/office-reviews.tsx (owner, 2026-10-10).
    warrantyYears: 5,
    yearsInBusiness: new Date().getFullYear() - 2019,
    // Texas does not issue a state occupational license for painting
    // contractors, so the site must never claim to be "licensed."
    // Owner brief 2026-10-25: policy limits, workers' compensation, bonding and
    // customer/project counts are NOT published until a current document
    // (insurance policy, bond, job records) is stored or referenced in the repo.
    // The old fields (liabilityCoverage "$2M", bonded, projectsCompleted 500,
    // crewExperienceYears 15) were removed so nothing can render them.
    insured: true,
    // Checked 2026-10-07 on bbb.org: the profile (file opened 2026-10-05) says
    // "NOT BBB Accredited" and "Not Rated". Do not claim accreditation.
    bbbAccredited: false,
  },

  // Payment wording (owner brief 2026-10-25). The company uses a deposit and a
  // payment schedule, so never say "no upfront payment", "no money upfront",
  // "nothing due until complete/approved", "pay when satisfied". Never publish
  // percentages or a fixed schedule unless an owner-approved file authorizes it.
  paymentPolicy: {
    short: "Clear Written Payment Terms",
    /** For small components. */
    shortLine: "Free written estimates with clear scope and payment terms.",
    badgeSubtitle: "Your approved estimate states the scope, deposit requirements and payment schedule before work begins.",
    sentence:
      "Free written estimates are available. Before work begins, your approved estimate states the scope, deposit requirements and payment schedule.",
  },

  // Insurance wording (owner brief 2026-10-25). Do not publish limits, workers'
  // compensation, bonding or specialty coverage without current documents.
  insurance: {
    sentence:
      "Houston Superior Painting maintains business insurance. Current proof of insurance is available upon request, and when required, approved customers may receive a certificate of insurance before work begins.",
    short: "Current proof of insurance available upon request.",
    licenseNote:
      "Texas does not issue a state painting-contractor license. Customers may request current proof of business insurance.",
  },

  // Warranty wording (owner brief 2026-10-25). Do not describe the warranty as
  // transferable, lifetime, covering materials, manufacturer defects, fading,
  // moisture or substrate failure, or wood repairs unless the signed warranty
  // document confirms it.
  warranty: {
    years: 5,
    summary:
      "Qualifying painting projects include a five-year written workmanship warranty, subject to the coverage, exclusions and conditions in the signed estimate or warranty document.",
    short: "Five-year written workmanship warranty on qualifying painting projects.",
    controlsNote:
      "The signed warranty provided with the customer's project documents controls if there is any difference between this website summary and the project-specific terms.",
  },

  // Houston Superior Epoxy is a separate sister brand (owner brief 2026-10-25).
  // Its services, warranty, prices and phone never appear on this site.
  sisterBrand: {
    name: "Houston Superior Epoxy",
    url: "https://houstonsuperiorepoxy.com",
    sentence:
      "Garage-floor coating services and warranty terms are provided separately by our sister company, Houston Superior Epoxy.",
  },

  // ─── Brands / partners ─────────────────────────────────
  // Brands we use. Juan confirmed Farrow & Ball 2026-10-07. These are products
  // we apply, not partner programs: never say "preferred contractor/partner".
  paintPartners: ["Sherwin-Williams", "Benjamin Moore", "Farrow & Ball"],

  // Cabinet, trim and door coatings. Owner 2026-10-14 (reverses the Oct 12
  // "Command only"): name all three. Never say Benjamin Moore Advance. Full cure
  // on kitchen cabinets is 7–10 days (owner, 2026-10-11).
  cabinetFinish: {
    products: [
      "Benjamin Moore Command",
      "Sherwin-Williams Emerald Urethane Trim Enamel",
      "Renner wood coatings (qualifying cabinet systems)",
    ],
    sentence:
      "Benjamin Moore Command or Sherwin-Williams Emerald Urethane Trim Enamel over a bonding primer, with Renner wood coatings for qualifying cabinet systems",
    cureDays: "7–10 days",
  },

  // Founder page extras (owner brief 2026-10-14). Each renders on /about ONLY when
  // filled with owner-approved content; empty values show nothing publicly.
  founderProfile: {
    photo: null as null | { src: string; alt: string; width: number; height: number },
    videoUrl: null as null | string,
    statement: null as null | string,
    timeline: [] as { year: string; text: string }[],
    community: [] as string[],
  },

  // Warranty sentence (owner brief 2026-10-25); same text as warranty.summary.
  warrantyTermsSentence:
    "Qualifying painting projects include a five-year written workmanship warranty, subject to the coverage, exclusions and conditions in the signed estimate or warranty document.",

  // Insurance wording (owner brief 2026-10-25), English and Spanish.
  insuranceProof: {
    en: "Current proof of insurance is available upon request. When required, approved customers may receive a certificate of insurance before work begins.",
    es: "Hay comprobante vigente de seguro disponible cuando lo solicite. Cuando el proyecto lo requiera, los clientes aprobados pueden recibir un certificado de seguro antes de comenzar el trabajo.",
  },

  // Specialty finishes Juan confirmed we offer (2026-10-07), beyond the
  // services list below. Fine to name on pages; prices are quoted on site.
  specialtyFinishes: [
    "Venetian plaster",
    "Roman Clay",
    "Limewash",
    "Faux finishes",
    "Metallic finishes",
    "Lacquer",
    "Grasscloth and wallcovering",
  ],

  // ─── Social / SameAs (for Organization schema) ─────────
  social: {
    // The listing this pointed to (place 0x1c94ce195628f7bf) no longer exists on Google
    // (checked 2026-10-10). Now the Katy profile, which holds most of the reviews.
    googleMaps: "https://maps.app.goo.gl/zcUY9dT1KYdoPmiy6",
    facebook: "https://www.facebook.com/houstonsuperiorpainting",
    instagram: "https://www.instagram.com/houstonsuperiorpainting",
    // Yelp removed 2026-10-07: the listing could not be confirmed (yelp.com
    // blocks automated checks). Re-add only after confirming it is ours.
    // BBB: the old URL (no -0915-90077903 suffix) 404s. This is a directory
    // listing, not accreditation (see trust.bbbAccredited).
    bbb: "https://www.bbb.org/us/tx/cypress/profile/painting-contractors/houston-superior-painting-0915-90077903",
  },
} as const;

// ─── Convenience helpers ──────────────────────────────────
export const PHONE_HREF = `tel:${BUSINESS.phoneTel}`;
export const SMS_HREF   = `sms:${BUSINESS.phoneTel}`;
export const MAIL_HREF  = `mailto:${BUSINESS.email}`;

export const FULL_ADDRESS = `${BUSINESS.primaryAddress.street}, ${BUSINESS.primaryAddress.city}, ${BUSINESS.primaryAddress.state} ${BUSINESS.primaryAddress.zip}`;

export const SAME_AS_URLS = Object.values(BUSINESS.social);

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

// ─── Offices ────────────────────────────────────────────────
export type Office = (typeof BUSINESS.locations)[number]

/** The office whose GBP lands on this city page, or undefined for the 18 no-office city pages. */
export function officeForPage(pageSlug: string): Office | undefined {
  return BUSINESS.locations.find((l) => l.pageSlug === pageSlug)
}

export function officeAddressLine(o: Office): string {
  return `${o.street}, ${o.city}, ${o.state} ${o.zip}`
}

/** GBP link when known, otherwise a Maps search for the exact address. */
export function officeMapsUrl(o: Office): string {
  return o.mapsUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${BUSINESS.name}, ${officeAddressLine(o)}`)}`
}

/** Office city pages, HQ first — used for the footer Locations list, /contact and llms.txt. */
export const OFFICE_PAGES = [
  { name: "Cypress (HQ)", slug: "painters-cypress-tx" },
  { name: "Houston", slug: "painters-houston-tx" },
  { name: "Katy", slug: "painters-katy-tx" },
  { name: "Sugar Land", slug: "painters-sugar-land-tx" },
  { name: "Magnolia", slug: "painters-magnolia-tx" },
] as const

/** The six core services every money page links to (skeleton "6 service pages"). */
export const CORE_SERVICES = [
  { name: "Interior Painting", slug: "interior-painting-houston-tx" },
  { name: "Exterior Painting", slug: "exterior-painting-houston-tx" },
  { name: "Cabinet Refinishing", slug: "cabinet-refinishing-houston-tx" },
  { name: "Drywall Repair", slug: "drywall-repair-houston-tx" },
  { name: "Limewash & Brick Painting", slug: "limewash-brick-painting-houston-tx" },
  { name: "Soft Washing", slug: "soft-washing-houston-tx" },
] as const

// Pricing lives in lib/pricing.ts (the one pricing source); re-exported here so
// existing imports keep working.
export { PRICES_2026, PRICING_DISCLAIMER, PRICING_META, PRICE_UNITS, RATES, interiorBudgetFor } from "./pricing"

/**
 * Street address to print for a location, or null. Owner brief 2026-10-25
 * (phase 7): only an owner-verified staffed office, or the headquarters business
 * address, is printed; every other location is described as a service area.
 */
export function publicAddressLine(o: Office): string | null {
  return isVerifiedOffice(o) || ("isHeadquarters" in o && o.isHeadquarters) ? officeAddressLine(o) : null
}

/** "Serving Katy and surrounding communities" — the wording for unverified locations. */
export function servingLine(o: Office): string {
  return `Serving ${o.city} and surrounding communities`
}
