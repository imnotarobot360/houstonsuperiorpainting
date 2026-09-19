// Comprehensive structured data for Houston Superior Painting
// Includes LocalBusiness, Service, Organization, WebSite, FAQPage, Person, HowTo, and Speakable schemas

import { BUSINESS, SERVICE_AREAS } from "@/lib/business"

// Places in SERVICE_AREAS that are neighborhoods / master-planned communities
// rather than incorporated or census-designated places. Typing River Oaks or
// Sienna as schema.org "City" is factually wrong and weakens the signal, so the
// distinction the hand-written list already made is preserved here.
const NEIGHBORHOOD_AREAS = new Set([
  "Memorial",
  "The Heights",
  "Cinco Ranch",
  "Energy Corridor",
  "River Oaks",
  "Champions Forest",
  "Cypress Creek",
  "Memorial Villages",
  "Sienna",
  "Riverstone",
])

/**
 * Every served place, derived from the single SERVICE_AREAS list in
 * lib/business.ts.
 *
 * This used to be a hand-maintained 14-entry array that had fallen 9 areas
 * behind SERVICE_AREAS (missing Magnolia, Tomball, Missouri City, River Oaks,
 * Champions Forest, Cypress Creek, Memorial Villages, Sienna, Riverstone) — the
 * exact drift the comment above SERVICE_AREAS warns about, where a page exists
 * and ranks but the business never claims to serve it. Deriving it means adding
 * a service area updates the schema automatically.
 */
const AREA_SERVED = SERVICE_AREAS.map(({ name }) => ({
  "@type": NEIGHBORHOOD_AREAS.has(name) ? ("Neighborhood" as const) : ("City" as const),
  name,
  // Anchor the primary city to the state; the rest inherit context from it.
  ...(name === "Houston"
    ? { containedInPlace: { "@type": "State" as const, name: "Texas" } }
    : {}),
}))

// Canonical HQ coordinates. Previously three different lat/long pairs were
// hardcoded across this file and the city pages; conflicting geo in schema
// muddies the local-ranking signal, so everything now reads from one place.
const HQ_GEO = {
  latitude: BUSINESS.primaryAddress.latitude,
  longitude: BUSINESS.primaryAddress.longitude,
}

// Canonical @id for the JJ Semo Person entity. Same class of bug as HQ_GEO:
// the codebase referenced this person under TWO different @ids — the full
// definition lives at `/about#jjsemo` (jjSemoPersonSchema, emitted on every
// page by <StructuredData /> in the root layout), but `founder` here, the
// Organization `founder`, and the blog post template all pointed at
// `/#jjsemo`, an @id nothing ever defines. The result was one real person
// described as two entities with conflicting job titles, which splits author
// and founder authority rather than consolidating it onto one entity.
const JJ_SEMO_ID = "https://houstonsuperiorpainting.com/about#jjsemo"

// Canonical postal address + hours as schema.org nodes. Extracted for the same
// reason as HQ_GEO: these were inlined per-schema, and any copy that drifted
// produced conflicting NAP across pages, which weakens local ranking signals
// instead of reinforcing them. Google wants the SAME name/address/phone
// everywhere; service-area coverage is expressed via `areaServed`, not by
// varying the address per page.
const HQ_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.primaryAddress.street,
  addressLocality: BUSINESS.primaryAddress.city,
  addressRegion: BUSINESS.primaryAddress.state,
  postalCode: BUSINESS.primaryAddress.zip,
  addressCountry: BUSINESS.primaryAddress.country,
} as const

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "19:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "08:00",
    closes: "16:00",
  },
] as const

export const businessInfo = {
  name: "Houston Superior Painting",
  legalName: "Houston Superior Painting LLC",
  alternateName: ["Houston Superior Painting LLC", "JJ Semo Painting"],
  url: "https://houstonsuperiorpainting.com",
  telephone: "+1-346-594-5960",
  email: "info@houstonsuperiorpainting.com",
  foundingDate: "2019",
  priceRange: "$$",
  address: {
    street: "14150 Huffmeister Rd, Suite 410",
    city: "Cypress",
    state: "TX",
    zip: "77429",
    country: "US"
  },
  geo: HQ_GEO,
  socialProfiles: [
    "https://www.google.com/maps/place/Houston+Superior+Painting/@29.7143308,-95.4349558,17z/data=!4m8!3m7!1s0x1c94ce195628f7bf:0xcc8b6e63c1c05fe7!8m2!3d29.7143308!4d-95.4349558!9m1!1b1!16s%2Fg%2F11y71l36d3",
    "https://www.facebook.com/houstonsuperiorpainting",
    "https://www.instagram.com/houstonsuperiorpainting",
    "https://www.yelp.com/biz/houston-superior-painting",
    "https://www.bbb.org/us/tx/cypress/profile/painting-contractors/houston-superior-painting"
  ]
}

// 9.1 LocalBusiness + PaintingContractor (Homepage) - Primary Schema
export const homepageGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "HousePainter", "PaintingService"],
      "@id": "https://houstonsuperiorpainting.com/#business",
      "name": "Houston Superior Painting",
      "alternateName": ["Houston Superior Painting LLC", "JJ Semo Painting"],
      "description": "Professional interior, exterior, cabinet, and commercial painting contractor serving Houston, Katy, Cypress, Sugar Land, Richmond, Fulshear, Pearland, Memorial, The Heights, and The Woodlands TX. Founded 2019 by JJ Semo. 5-year exterior warranty.",
      "url": "https://houstonsuperiorpainting.com",
      "logo": "https://houstonsuperiorpainting.com/images/logo.png",
      "image": "https://houstonsuperiorpainting.com/images/og-cover.jpg",
      "telephone": "+1-346-594-5960",
      "email": "info@houstonsuperiorpainting.com",
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Check, Credit Card, ACH, Financing",
      "founder": {
        "@type": "Person",
        "@id": JJ_SEMO_ID,
        "name": "JJ Semo",
        "jobTitle": "Founder & Lead Painter",
        "worksFor": { "@id": "https://houstonsuperiorpainting.com/#business" },
        "image": "https://houstonsuperiorpainting.com/images/jj-semo.jpg",
        "knowsAbout": ["Interior Painting", "Exterior Painting", "Cabinet Refinishing", "Limewash", "Drywall Repair", "Houston Climate Coatings"]
      },
      "foundingDate": "2019",
      "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 5, "maxValue": 15 },
      "address": HQ_ADDRESS,
      "geo": {
        "@type": "GeoCoordinates",
        ...HQ_GEO
      },
      "openingHoursSpecification": OPENING_HOURS,
      "areaServed": AREA_SERVED,
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": { "@type": "GeoCoordinates", ...HQ_GEO },
        "geoRadius": "60000"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Painting & Remodeling Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Painting", "url": "https://houstonsuperiorpainting.com/interior-painting-houston-tx" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Painting", "url": "https://houstonsuperiorpainting.com/exterior-painting-houston-tx" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cabinet Refinishing", "url": "https://houstonsuperiorpainting.com/cabinet-refinishing-houston-tx" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drywall Repair", "url": "https://houstonsuperiorpainting.com/drywall-repair-houston-tx" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pressure Washing", "url": "https://houstonsuperiorpainting.com/pressure-washing-houston-tx" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limewash & Brick Painting", "url": "https://houstonsuperiorpainting.com/limewash-brick-painting-houston-tx" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Painting", "url": "https://houstonsuperiorpainting.com/commercial-painting-houston-tx" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Load Bearing Wall Removal", "url": "https://houstonsuperiorpainting.com/load-bearing-wall-removal-houston-tx" } }
        ]
      },
      "sameAs": [
        "https://share.google/7dcztUU2XgDoOiWDf",
        "https://www.google.com/maps/place/Houston+Superior+Painting/@29.7143308,-95.4349558,17z/data=!4m8!3m7!1s0x1c94ce195628f7bf:0xcc8b6e63c1c05fe7!8m2!3d29.7143308!4d-95.4349558!9m1!1b1!16s%2Fg%2F11y71l36d3",
        "https://www.facebook.com/profile.php?id=61572995980133",
        "https://www.instagram.com/houstonsuperiorpainting/",
        "https://www.yelp.com/biz/houston-superior-painting",
        "https://www.bbb.org/us/tx/cypress/profile/painting-contractors/houston-superior-painting"
      ],
      "knowsLanguage": ["en", "es"],
      "slogan": "Old-School Preparation. Premium Long-Lasting Results."
    },
    // 9.9 WebSite Schema
    {
      "@type": "WebSite",
      "@id": "https://houstonsuperiorpainting.com/#website",
      "url": "https://houstonsuperiorpainting.com",
      "name": "Houston Superior Painting",
      "publisher": { "@id": "https://houstonsuperiorpainting.com/#organization" },
      "inLanguage": "en-US"
    },
    // 9.4 BreadcrumbList — REMOVED, deliberately.
    //
    // This node was labelled "(Homepage)" but homepageGraphSchema is rendered by
    // <StructuredData /> in the ROOT LAYOUT, so it shipped on all ~131 pages
    // carrying a single item: "Home". That is wrong two ways:
    //   1. A one-item breadcrumb conveys no hierarchy, so it can never earn a
    //      breadcrumb rich result — it is pure noise on every page.
    //   2. On pages that emit a real trail (blog posts render
    //      Home > Blog > Title), this shipped a SECOND, contradictory
    //      BreadcrumbList claiming the same page has no ancestry.
    //
    // Pages that want a breadcrumb call generateBreadcrumbSchema() with their
    // real trail. The homepage needs none: it is the root, and Google ignores a
    // trail whose only entry is the page itself.
    // 9.5 Speakable Schema
    {
      "@type": "WebPage",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".quick-answer", ".hero-h1", ".pricing-snippet", ".warranty-snippet"]
      }
    }
  ]
}

// NOTE: The homepage FAQPage is intentionally NOT part of this sitewide graph.
// The homepage renders its own content-matching FAQPage via <FAQ items={homeFaqs} />
// in app/page.tsx. Keeping a second FAQPage here would (a) duplicate FAQPage markup
// on the homepage and (b) inject an unrelated FAQPage on every route through the
// sitewide layout, which violates Google's FAQ rich-result guidelines.

// 9.7 Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://houstonsuperiorpainting.com/#organization",
  "name": "Houston Superior Painting",
  "url": "https://houstonsuperiorpainting.com",
  "logo": "https://houstonsuperiorpainting.com/images/logo.png",
  "sameAs": [
    "https://www.facebook.com/houstonsuperiorpainting",
    "https://www.instagram.com/houstonsuperiorpainting",
    "https://www.google.com/maps/place/Houston+Superior+Painting/@29.7143308,-95.4349558,17z/data=!4m8!3m7!1s0x1c94ce195628f7bf:0xcc8b6e63c1c05fe7"
  ],
  "founder": { "@id": JJ_SEMO_ID },
  "foundingDate": "2019",
  "foundingLocation": { "@type": "Place", "name": "Cypress, Texas" }
}

// 9.6 Person Schema (JJ Semo)
export const jjSemoPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://houstonsuperiorpainting.com/about#jjsemo",
  "name": "JJ Semo",
  "givenName": "JJ",
  "familyName": "Semo",
  "jobTitle": "Founder & Lead Painter",
  "worksFor": { "@id": "https://houstonsuperiorpainting.com/#business" },
  "founderOf": { "@id": "https://houstonsuperiorpainting.com/#business" },
  "image": "https://houstonsuperiorpainting.com/images/jj-semo.jpg",
  "url": "https://houstonsuperiorpainting.com/about",
  "knowsAbout": [
    "Interior Painting",
    "Exterior Painting",
    "Cabinet Refinishing",
    "Limewash and German Smear Techniques",
    "Drywall Repair and Texture Matching",
    "Houston Climate Coatings",
    "Sherwin-Williams Premium Products",
    "Benjamin Moore Premium Products"
  ],
  "alumniOf": "Painting Industry Apprenticeship",
  "description": "JJ Semo founded Houston Superior Painting in 2019 in Cypress, TX. With years of hands-on experience in residential and commercial painting, JJ leads the company's prep-first philosophy and personally oversees quality control on every project.",
  "areaServed": "Greater Houston, Texas"
}

// 9.2 Service Schema Generator
export function generateServiceSchema(options: {
  name: string;
  slug: string;
  description: string;
  serviceType: string;
  minPrice: number;
  maxPrice: number;
  subServices?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://houstonsuperiorpainting.com/${options.slug}#service`,
    "name": options.name,
    "description": options.description,
    "serviceType": options.serviceType,
    "provider": { "@id": "https://houstonsuperiorpainting.com/#business" },
    "areaServed": [
      { "@type": "City", "name": "Houston" },
      { "@type": "City", "name": "Katy" },
      { "@type": "City", "name": "Cypress" },
      { "@type": "City", "name": "Sugar Land" },
      { "@type": "City", "name": "Pearland" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": options.minPrice,
        "maxPrice": options.maxPrice,
        "priceCurrency": "USD"
      },
      "availability": "https://schema.org/InStock"
    },
    ...(options.subServices && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `${options.serviceType} Options`,
        "itemListElement": options.subServices.map(service => ({
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": service }
        }))
      }
    })
  }
}

// Pre-defined Service Schemas
export const serviceSchemas = {
  interiorPainting: generateServiceSchema({
    name: "Interior Painting in Houston, TX",
    slug: "interior-painting-houston-tx",
    description: "Professional interior painting services in Houston, Katy, Cypress and surrounding TX cities. Walls, ceilings, trim, doors, and accent walls with premium Sherwin-Williams and Benjamin Moore paints. 5-year warranty.",
    serviceType: "Interior Painting",
    minPrice: 2000,
    maxPrice: 8500,
    subServices: ["Wall Painting", "Ceiling Painting", "Trim & Molding", "Door Painting", "Accent Walls", "Whole-Home Repaints"]
  }),
  exteriorPainting: generateServiceSchema({
    name: "Exterior Painting in Houston, TX",
    slug: "exterior-painting-houston-tx",
    description: "Durable exterior house painting built for Houston's heat, humidity, UV, and storms. Premium elastomeric and acrylic coatings that resist fading, peeling, and cracking. 5-year warranty.",
    serviceType: "Exterior Painting",
    minPrice: 3500,
    maxPrice: 12000,
    subServices: ["House Painting", "Siding Painting", "Stucco Painting", "Brick Painting", "Trim & Fascia", "Fence & Deck Staining"]
  }),
  cabinetRefinishing: generateServiceSchema({
    name: "Cabinet Refinishing & Painting in Houston, TX",
    slug: "cabinet-refinishing-houston-tx",
    description: "Professional kitchen and bathroom cabinet refinishing in Houston, Katy, Cypress and surrounding TX cities. Factory-finish spray techniques, grain filling, premium cabinet-grade enamels, 5-year warranty.",
    serviceType: "Cabinet Refinishing",
    minPrice: 3000,
    maxPrice: 8000,
    subServices: ["Kitchen Cabinet Refinishing", "Bathroom Vanity Painting", "Two-Tone Cabinet Painting", "Oak Cabinet Grain Filling"]
  }),
  drywallRepair: generateServiceSchema({
    name: "Drywall Repair in Houston, TX",
    slug: "drywall-repair-houston-tx",
    description: "Expert drywall repair services including crack repair, hole patching, water damage repair, and texture matching (orange peel, knockdown, smooth) before painting.",
    serviceType: "Drywall Repair",
    minPrice: 200,
    maxPrice: 2500,
    subServices: ["Crack Repair", "Hole Patching", "Water Damage Repair", "Texture Matching", "Skim Coating"]
  }),
  pressureWashing: generateServiceSchema({
    name: "Pressure Washing in Houston, TX",
    slug: "pressure-washing-houston-tx",
    description: "Professional pressure washing and soft-wash services for houses, driveways, patios, fences, and siding. Essential preparation before any exterior painting project.",
    serviceType: "Pressure Washing",
    minPrice: 150,
    maxPrice: 800,
    subServices: ["House Washing", "Driveway Cleaning", "Patio & Deck Cleaning", "Fence Cleaning", "Pre-Paint Preparation"]
  }),
  limewashBrickPainting: generateServiceSchema({
    name: "Limewash & Brick Painting in Houston, TX",
    slug: "limewash-brick-painting-houston-tx",
    description: "Authentic limewash and German smear finishes for brick homes in Houston. Also offering solid brick painting and specialty decorative finishes. Breathable, elegant, European-style results.",
    serviceType: "Limewash & Decorative Finishes",
    minPrice: 4000,
    maxPrice: 15000,
    subServices: ["Traditional Limewash", "German Smear", "Roman Clay", "Venetian Plaster", "Solid Brick Painting"]
  }),
  commercialPainting: generateServiceSchema({
    name: "Commercial Painting in Houston, TX",
    slug: "commercial-painting-houston-tx",
    description: "Professional commercial painting for offices, retail spaces, restaurants, HOAs, and industrial facilities. After-hours and weekend scheduling available to minimize business disruption.",
    serviceType: "Commercial Painting",
    minPrice: 5000,
    maxPrice: 50000,
    subServices: ["Office Painting", "Retail Store Painting", "Restaurant Painting", "HOA & Multi-Family", "Industrial Facilities"]
  }),
  loadBearingWallRemoval: generateServiceSchema({
    name: "Load Bearing Wall Removal in Houston, TX",
    slug: "load-bearing-wall-removal-houston-tx",
    description: "Professional load-bearing wall removal with proper engineering and permits. Open up your Houston home's floor plan safely. Includes structural beam installation, drywall, texture matching, and painting.",
    serviceType: "Load Bearing Wall Removal",
    minPrice: 5000,
    maxPrice: 15000,
    subServices: ["Wall Removal", "Beam Installation", "Structural Engineering", "Permit Handling", "Drywall & Paint Finishing"]
  })
}

// 9.8 HowTo Schema Generator
export function generateHowToSchema(options: {
  name: string;
  description: string;
  totalTime: string;
  estimatedCost: number;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": options.name,
    "description": options.description,
    "totalTime": options.totalTime,
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": options.estimatedCost.toString() },
    "step": options.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  }
}

// Pre-defined HowTo Schemas
export const howToSchemas = {
  cabinetRefinishing: generateHowToSchema({
    name: "Our Cabinet Refinishing Process",
    description: "How Houston Superior Painting refinishes kitchen cabinets in Houston, TX in 4 steps.",
    totalTime: "P5D",
    estimatedCost: 5500,
    steps: [
      { name: "Remove and label", text: "We remove every door, drawer, and hardware piece, labeling each for perfect reinstallation." },
      { name: "Clean and degrease", text: "Industrial degreasing removes years of cooking oils, smoke, and grime that prevent paint adhesion." },
      { name: "Sand, fill grain, prime", text: "We sand all surfaces, fill grain on oak cabinets, and apply specialized bonding primers." },
      { name: "Spray cabinet-grade enamel", text: "Multiple coats of premium cabinet enamel sprayed in controlled conditions create a glass-smooth, factory-quality finish." }
    ]
  }),
  exteriorPainting: generateHowToSchema({
    name: "Our Exterior Painting Process",
    description: "How Houston Superior Painting prepares and paints exterior homes in Houston's climate.",
    totalTime: "P7D",
    estimatedCost: 7500,
    steps: [
      { name: "Pressure wash", text: "We pressure wash all surfaces to remove dirt, mildew, and loose paint that would cause adhesion failure." },
      { name: "Scrape and sand", text: "All peeling or flaking paint is scraped off and sanded smooth. Bare wood is treated with primer." },
      { name: "Caulk and repair", text: "We caulk all gaps, seams, and cracks. Rotted wood is replaced. Nail holes are filled." },
      { name: "Prime problem areas", text: "Bare wood, stains, and repaired areas receive specialized primers for proper adhesion and stain blocking." },
      { name: "Apply finish coats", text: "Two coats of premium exterior paint are applied for maximum durability and coverage." }
    ]
  })
}

// 9.4 BreadcrumbList Schema Generator
/**
 * LocalBusiness schema for a single city/neighborhood landing page.
 *
 * The city pages each hand-rolled this block inline, which is how two of them
 * (`painters-houston-tx`, `painters-missouri-city-tx`) ended up shipping with no
 * LocalBusiness at all while their 19 siblings had one — and why the hardcoded
 * copies drifted from BUSINESS (several still inline the phone number as a
 * literal). Reads NAP from BUSINESS so a phone or address change propagates.
 *
 * Emits a node that MERGES INTO the canonical "#business" entity rather than a
 * standalone per-city business. See the comment in the function body for why.
 * `address` is not restated here: it resolves from the canonical node, which is
 * present on the same page via <StructuredData /> in the root layout.
 */
export function generateLocationBusinessSchema(options: {
  /** Display name of the city, e.g. "Missouri City". */
  city: string
  /** Route slug without a leading slash, e.g. "painters-missouri-city-tx". */
  slug: string
  description?: string
  /**
   * Optional explicit list of served place names. Use when a page covers
   * several distinct municipalities rather than one — e.g. the Memorial
   * Villages page legitimately serves Bunker Hill Village, Piney Point
   * Village, Hedwig Village, Hunters Creek Village and Spring Valley Village.
   * Defaults to `[city]`.
   */
  areas?: readonly string[]
}) {
  const { city, description, areas } = options
  const servedNames = areas && areas.length > 0 ? areas : [city]
  const areaServed = servedNames.map((name) => ({
    "@type": NEIGHBORHOOD_AREAS.has(name) ? ("Neighborhood" as const) : ("City" as const),
    name,
    containedInPlace: { "@type": "State" as const, name: "Texas" },
  }))

  // A REFERENCE to the one canonical business entity, not a second copy of it.
  //
  // This previously emitted a page-scoped entity (@id ".../{slug}#business")
  // carrying a full duplicate of the name, address, geo, hours, phone, logo and
  // sameAs on all 23 city pages. That produced 23 distinct LocalBusiness
  // entities with byte-identical NAP — which reads as 23 branch locations for a
  // business that has exactly one office, and dilutes the entity Google should
  // be consolidating signals onto.
  //
  // Reusing the canonical "#business" @id makes this a JSON-LD node reference:
  // the canonical node (with address, geo, hours, aggregateRating) is already on
  // every page via <StructuredData /> in the root layout, and same-@id nodes
  // merge into one entity. So the required `address` still resolves — it is
  // simply inherited from the canonical node rather than restated 23 times.
  //
  // Only the genuinely page-specific facts are stated here.
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HousePainter"],
    "@id": `${businessInfo.url}/#business`,
    name: businessInfo.name,
    description: description ?? `Professional house painting services in ${city}, TX`,
    areaServed: areaServed.length === 1 ? areaServed[0] : areaServed,

    // NOTE: aggregateRating is intentionally absent. The site-wide review score
    // lives on the canonical entity (ratingSchema), which merges in by @id.
    // Restating it per city page would claim each area was independently
    // reviewed, risking a manual action under Google's review-snippet policy.
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

// WebPage Schema Generator with Speakable
export function generateWebPageSchema(options: {
  name: string;
  description: string;
  url: string;
  breadcrumb?: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": options.name,
    "description": options.description,
    "url": options.url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Houston Superior Painting",
      "url": "https://houstonsuperiorpainting.com"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".quick-answer", ".hero-h1", ".pricing-snippet", ".warranty-snippet"]
    },
    "breadcrumb": options.breadcrumb ? generateBreadcrumbSchema(options.breadcrumb) : undefined
  }
}

// Review/AggregateRating schema. Rendered ONLY on pages that visibly display
// reviews (homepage + about) to comply with Google's review snippet guidelines,
// which prohibit review markup on pages that don't show the reviews to users.
export const ratingSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HousePainter"],
  "@id": "https://houstonsuperiorpainting.com/#business",
  "name": "Houston Superior Painting",
  "url": "https://houstonsuperiorpainting.com",
  // Sourced from BUSINESS.trust so the rating can never drift from the rest of
  // the site. This is still hand-maintained: update BUSINESS.trust whenever the
  // real Google Business Profile numbers change, or wire it to the Places API.
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": String(BUSINESS.trust.googleRating),
    "reviewCount": String(BUSINESS.trust.reviewCount),
    "bestRating": "5",
    "worstRating": "1"
  },
  // NOTE: the individual `review` entries were removed on 2026-08-17, and the
  // key is intentionally absent rather than an empty array — emitting
  // "review": [] tells Google there are zero reviews, which is worse than
  // saying nothing.
  //
  // Two hardcoded testimonials ("Sarah Mitchell", "Michael Thompson") could not
  // be traced to any verifiable Google or Yelp review. Google's review-snippet
  // policy requires review markup to reflect genuine reviews that are actually
  // displayed on the page; fabricated or unattributable entries risk a manual
  // action against the whole domain.
  //
  // To restore reviews, add a `review` array of real review text with reviewer
  // names as they appear publicly, and make sure those same reviews render
  // visibly on the page that injects this schema.
}

// Inject AggregateRating + Review markup. Use ONLY on homepage and about pages
// where the reviews are actually shown to visitors.
export function ReviewStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
    />
  )
}

// Component to inject all schemas
export function StructuredData() {
  return (
    <>
      {/* Homepage Graph Schema with LocalBusiness, WebSite, BreadcrumbList, and Speakable */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageGraphSchema) }}
      />
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Person Schema for JJ Semo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jjSemoPersonSchema) }}
      />
      {/* Service Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas.interiorPainting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas.exteriorPainting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas.cabinetRefinishing) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas.drywallRepair) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas.pressureWashing) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas.limewashBrickPainting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas.commercialPainting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas.loadBearingWallRemoval) }}
      />
    </>
  )
}
