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
  // Juan Serra is the owner. No photo of him is used on the site, by choice,
  // so Person schema carries no image.
  founder: {
    name: "Juan Serra",
    givenName: "Juan",
    familyName: "Serra",
    jobTitle: "Owner",
    image: null as string | null,
    bio: "Juan Serra founded Houston Superior Painting in 2019. He runs the company from its Cypress headquarters, oversees crews across five Greater Houston offices, and personally reviews the prep scope on every estimate.",
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
    longitude: -95.6445,
  },

  // ─── All Office Locations (for multi-location schema) ──
  // Each of these five has its own Google Business Profile. Only these five
  // city pages emit LocalBusiness schema (see officeLocalBusinessSchema in
  // components/structured-data.tsx). Address strings must match the GBP
  // character for character.
  locations: [
    {
      slug: "houston-bissonnet",
      /** The city page this office's Google Business Profile points to. */
      pageSlug: "painters-houston-tx",
      // TODO(gbp): replace with this office's GBP "Share → Copy link" URL.
      // Until then a Maps search for the exact address is used for hasMap.
      mapsUrl: null as string | null,
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
      /** The city page this office's Google Business Profile points to. */
      pageSlug: "painters-katy-tx",
      // TODO(gbp): replace with this office's GBP "Share → Copy link" URL.
      // Until then a Maps search for the exact address is used for hasMap.
      mapsUrl: null as string | null,
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
      /** The city page this office's Google Business Profile points to. */
      pageSlug: "painters-cypress-tx",
      // TODO(gbp): replace with this office's GBP "Share → Copy link" URL.
      // Until then a Maps search for the exact address is used for hasMap.
      mapsUrl: null as string | null,
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
      /** The city page this office's Google Business Profile points to. */
      pageSlug: "painters-sugar-land-tx",
      // TODO(gbp): replace with this office's GBP "Share → Copy link" URL.
      // Until then a Maps search for the exact address is used for hasMap.
      mapsUrl: null as string | null,
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
      /** The city page this office's Google Business Profile points to. */
      pageSlug: "painters-magnolia-tx",
      // TODO(gbp): replace with this office's GBP "Share → Copy link" URL.
      // Until then a Maps search for the exact address is used for hasMap.
      mapsUrl: null as string | null,
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

  // Payment policy confirmed by Juan (2026-09). Never state a deposit
  // percentage — none has been set. Never claim "no deposit" or "pay only
  // after completion": a down payment is collected once the estimate is approved.
  paymentPolicy: {
    short: "No Upfront Payment",
    badgeSubtitle: "Nothing due until you approve your estimate",
    sentence:
      "Estimates are free and we don't collect any money until you approve the written estimate. After you approve, we collect a down payment to schedule the job, and the balance is due after the final walkthrough.",
  },

  // ─── Brands / partners ─────────────────────────────────
  paintPartners: ["Sherwin-Williams", "Benjamin Moore"],

  // ─── Social / SameAs (for Organization schema) ─────────
  social: {
    googleMaps:
      "https://www.google.com/maps/place/Houston+Superior+Painting../@29.7143308,-95.4349558,17z/data=!4m8!3m7!1s0x1c94ce195628f7bf:0xcc8b6e63c1c05fe7!8m2!3d29.7143308!4d-95.4349558!9m1!1b1!16s%2Fg%2F11y71l36d3",
    facebook: "https://www.facebook.com/houstonsuperiorpainting",
    instagram: "https://www.instagram.com/houstonsuperiorpainting",
    yelp: "https://www.yelp.com/biz/houston-superior-painting",
    bbb: "https://www.bbb.org/us/tx/cypress/profile/painting-contractors/houston-superior-painting",
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

/** One set of 2026 Houston price ranges. Every page reads from here so no two pages disagree. Review quarterly. */
export const PRICES_2026 = {
  interiorPerSqFt: "$2.50–$4.50",
  exteriorPerSqFt: "$1.50–$4",
  singleRoom: "$300–$800",
  fullInterior2500: "$4,000–$8,000",
  exterior2500TwoStory: "$5,500–$9,000",
  cabinetsPerKitchen: "$3,000–$6,500",
  cabinetsAverage: "$3,500–$5,500",
  trimWholeHome: "$1,200–$3,000",
  exteriorPerHome: "$3,500–$12,000",
  // 2,000 sq ft home (cost guide's exterior table row; interior sits between its 1,500 and 2,500 rows)
  exterior2000OneStory: "$3,500–$5,500",
  exterior2000TwoStory: "$4,500–$7,500",
  exterior2000: "$3,500–$7,500",
  fullInterior2000: "$3,500–$7,000",
  wholeHome2000: "$7,000–$14,500",
  // Remaining cost guide table rows. The instant-estimate calculator (lib/estimate-pricing.ts) is built from these.
  fullInterior1500: "$3,000–$5,500",
  fullInterior4000: "$7,000–$14,000",
  exterior1500OneStory: "$2,500–$4,500",
  exterior1500TwoStory: "$3,500–$6,000",
  exterior2500OneStory: "$4,000–$7,000",
  exterior3000OneStory: "$5,000–$8,000",
  exterior3000TwoStory: "$6,500–$10,500",
  exterior4000OneStory: "$6,500–$10,000",
  exterior4000TwoStory: "$8,500–$14,000",
  cabinetsGalley: "$2,200–$3,500",
  cabinetsLarge: "$6,000–$9,000+",
} as const
