// Structured data for Houston Superior Painting.
// Organization/WebSite/Person: homepage only. LocalBusiness: one per office, on /locations/[slug].

import { BUSINESS, SAME_AS_URLS, SERVICE_AREAS } from "@/lib/business"
import { LOCATIONS, locationUrl, type OfficeLocation } from "@/lib/locations"

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

const ORG_ID = `${BUSINESS.url}/#organization`
const OWNER_ID = `${BUSINESS.url}/about#juan-serra`

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: BUSINESS.hours.monday.open,
    closes: BUSINESS.hours.monday.close,
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: BUSINESS.hours.saturday.open,
    closes: BUSINESS.hours.saturday.close,
  },
] as const

// Brand entity. Rendered on the homepage only. It carries no street address:
// each office is its own LocalBusiness on /locations/[slug] and hangs off this
// node through `department` / `parentOrganization`.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  url: BUSINESS.url,
  logo: { "@type": "ImageObject", url: BUSINESS.logo },
  image: BUSINESS.ogImage,
  telephone: BUSINESS.phoneE164,
  email: BUSINESS.email,
  slogan: BUSINESS.slogan,
  foundingDate: String(BUSINESS.founded),
  foundingLocation: { "@type": "Place", name: "Cypress, Texas" },
  founder: { "@id": OWNER_ID },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: BUSINESS.phoneE164,
    contactType: "customer service",
    areaServed: "US-TX",
    availableLanguage: ["English", "Spanish"],
  },
  areaServed: AREA_SERVED,
  department: LOCATIONS.map((loc) => ({ "@id": locationBusinessId(loc) })),
  sameAs: SAME_AS_URLS,
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BUSINESS.url}/#website`,
  url: BUSINESS.url,
  name: BUSINESS.name,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-US",
}

export const ownerPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": OWNER_ID,
  name: BUSINESS.founder.name,
  givenName: "Juan",
  familyName: "Serra",
  jobTitle: BUSINESS.founder.jobTitle,
  worksFor: { "@id": ORG_ID },
  url: `${BUSINESS.url}/about`,
  description: BUSINESS.founder.bio,
  knowsAbout: [
    "Interior Painting",
    "Exterior Painting",
    "Cabinet Refinishing",
    "Surface Preparation",
    "Coatings for Humid Climates",
  ],
}

export function locationBusinessId(loc: OfficeLocation): string {
  return `${locationUrl(loc)}#localbusiness`
}

/**
 * One LocalBusiness per Google Business Profile office. Rendered only on that
 * office's /locations/[slug] page. `hasMap` and `sameAs` appear only when the
 * office has a GBP link we have confirmed is ours; `geo` only when verified.
 */
export function generateOfficeSchema(loc: OfficeLocation) {
  const url = locationUrl(loc)
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HousePainter"],
    "@id": locationBusinessId(loc),
    name: loc.gbpName,
    url,
    telephone: loc.phoneE164,
    email: BUSINESS.email,
    image: `${BUSINESS.url}${loc.photo.src}`,
    logo: BUSINESS.logo,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.street,
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.zip,
      addressCountry: "US",
    },
    ...(loc.latitude !== null && loc.longitude !== null
      ? { geo: { "@type": "GeoCoordinates", latitude: loc.latitude, longitude: loc.longitude } }
      : {}),
    openingHoursSpecification: OPENING_HOURS,
    areaServed: [
      { "@type": "City", name: loc.city },
      ...loc.neighborhoods.map((name) => ({ "@type": "Place", name })),
    ],
    parentOrganization: { "@id": ORG_ID },
    ...(loc.gbpUrl ? { hasMap: loc.gbpUrl, sameAs: [loc.gbpUrl] } : {}),
  }
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
    "provider": { "@id": ORG_ID },
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

/**
 * Service node for a city/neighborhood landing page (/painters-*-tx).
 *
 * City pages are service-area pages, not offices, so they must NOT emit a
 * LocalBusiness — that would claim a branch at an address we don't have there.
 * The real offices are the five LocalBusiness nodes on /locations/[slug].
 */
export function generateLocationBusinessSchema(options: {
  city: string
  slug: string
  description?: string
  areas?: readonly string[]
}) {
  const { city, slug, description, areas } = options
  const servedNames = areas && areas.length > 0 ? areas : [city]
  const areaServed = servedNames.map((name) => ({
    "@type": NEIGHBORHOOD_AREAS.has(name) ? ("Neighborhood" as const) : ("City" as const),
    name,
    containedInPlace: { "@type": "State" as const, name: "Texas" },
  }))
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BUSINESS.url}/${slug}#service`,
    name: `House Painting in ${city}, TX`,
    serviceType: "House Painting",
    description: description ?? `Interior and exterior house painting in ${city}, TX`,
    provider: { "@id": ORG_ID },
    areaServed: areaServed.length === 1 ? areaServed[0] : areaServed,
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
  "@type": "Organization",
  "@id": ORG_ID,
  "name": BUSINESS.name,
  "url": BUSINESS.url,
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

// Homepage-only brand graph: Organization + WebSite + owner + services.
// Deliberately NOT in the root layout — per-office LocalBusiness nodes live on
// /locations/[slug], and a sitewide business node would collide with them.
export function HomepageStructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      ownerPersonSchema,
      ...Object.values(serviceSchemas),
      {
        "@type": "WebPage",
        "@id": `${BUSINESS.url}/#webpage`,
        url: BUSINESS.url,
        about: { "@id": ORG_ID },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".quick-answer", ".hero-h1"],
        },
      },
    ].map((node) => {
      const { ["@context"]: _ctx, ...rest } = node as Record<string, unknown>
      return rest
    }),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
