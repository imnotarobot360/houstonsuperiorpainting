// Comprehensive structured data for Houston Superior Painting
// Sitewide: Organization + WebSite + Person. LocalBusiness only on the 5 office city pages.

import { BUSINESS, SERVICE_AREAS, officeForPage, officeMapsUrl, type Office } from "@/lib/business"

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

export const ORG_ID = "https://houstonsuperiorpainting.com/#organization"
export const WEBSITE_ID = "https://houstonsuperiorpainting.com/#website"
// Canonical @id for the owner. Every author/founder reference points here so
// the Person is one entity site-wide.
export const OWNER_ID = BUSINESS.founder.id

const OFFICE_HOURS = [
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

const SAME_AS = [
  BUSINESS.social.googleMaps,
  BUSINESS.social.facebook,
  BUSINESS.social.instagram,
  BUSINESS.social.yelp,
  BUSINESS.social.bbb,
]

/**
 * Sitewide entity graph: Organization + WebSite + owner Person.
 *
 * LocalBusiness is deliberately NOT here. The business has five Google Business
 * Profiles, and each one gets its own LocalBusiness node on its own city page
 * (officeLocalBusinessSchema below). A single sitewide LocalBusiness carrying
 * the Cypress address told Google every page was the Cypress office.
 */
export const siteGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: BUSINESS.name,
      legalName: BUSINESS.legalName,
      url: BUSINESS.url,
      logo: BUSINESS.logo,
      image: BUSINESS.ogImage,
      description:
        "Residential and commercial painting contractor founded in 2019 by Juan Serra, headquartered in Cypress, TX, serving Greater Houston from five offices. Interior painting, exterior painting, cabinet refinishing, drywall repair, limewash and stucco finishes, soft washing. $2M liability insurance, 5-year workmanship warranty.",
      telephone: BUSINESS.phoneE164,
      email: BUSINESS.email,
      foundingDate: String(BUSINESS.founded),
      foundingLocation: { "@type": "Place", name: "Cypress, Texas" },
      founder: { "@id": OWNER_ID },
      slogan: BUSINESS.slogan,
      knowsLanguage: ["en", "es"],
      areaServed: AREA_SERVED,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: BUSINESS.phoneE164,
        contactType: "customer service",
        areaServed: "US-TX",
        availableLanguage: ["English", "Spanish"],
      },
      // The five offices, each a LocalBusiness defined on its own city page.
      subOrganization: BUSINESS.locations.map((l) => ({
        "@id": `${BUSINESS.url}/${l.pageSlug}#location`,
      })),
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: BUSINESS.url,
      name: BUSINESS.name,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    },
    ownerPersonNode(),
  ],
}

/** The owner as a schema.org Person node (no @context, for use inside a graph). */
export function ownerPersonNode() {
  const f = BUSINESS.founder
  return {
    "@type": "Person",
    "@id": OWNER_ID,
    name: f.name,
    givenName: f.givenName,
    familyName: f.familyName,
    jobTitle: f.jobTitle,
    worksFor: { "@id": ORG_ID },
    url: f.url,
    ...(f.image ? { image: f.image } : {}),
    description: f.bio,
    knowsAbout: [
      "Interior Painting",
      "Exterior Painting",
      "Cabinet Refinishing",
      "Drywall Repair",
      "Limewash and Stucco Finishes",
      "Painting in Houston's Gulf Coast climate",
    ],
    knowsLanguage: ["en", "es"],
  }
}

/** Author reference for Article / BlogPosting nodes. */
export const AUTHOR_REF = { "@type": "Person", "@id": OWNER_ID, name: BUSINESS.founder.name } as const
export const PUBLISHER_REF = { "@id": ORG_ID } as const

/**
 * LocalBusiness for one of the five offices, emitted ONLY on that office's
 * city page. Name, address, phone and hours must match that office's Google
 * Business Profile exactly. No aggregateRating: a hard-coded rating that
 * drifts from Google is a manual-action risk.
 */
export function officeLocalBusinessSchema(office: Office) {
  const pageUrl = `${BUSINESS.url}/${office.pageSlug}`
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HousePainter"],
    "@id": `${pageUrl}#location`,
    name: BUSINESS.name,
    url: pageUrl,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    image: BUSINESS.ogImage,
    logo: BUSINESS.logo,
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: office.street,
      addressLocality: office.city,
      addressRegion: office.state,
      postalCode: office.zip,
      addressCountry: office.country,
    },
    ...(office.latitude != null && office.longitude != null
      ? { geo: { "@type": "GeoCoordinates", latitude: office.latitude, longitude: office.longitude } }
      : {}),
    hasMap: officeMapsUrl(office),
    openingHoursSpecification: OFFICE_HOURS,
    areaServed: office.areaServed.map((name) => ({
      "@type": NEIGHBORHOOD_AREAS.has(name) ? "Neighborhood" : "City",
      name,
    })),
    priceRange: "$$",
    knowsLanguage: ["en", "es"],
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
 * Schema for a city landing page.
 *
 * - The five office pages (Houston, Cypress, Katy, Sugar Land, Magnolia) get a
 *   full LocalBusiness for that office — see officeLocalBusinessSchema.
 * - The other city pages have no Google Business Profile, so they get NO
 *   address and NO LocalBusiness: only a reference to the Organization with
 *   areaServed, which merges into the sitewide Organization node by @id.
 */
export function generateLocationBusinessSchema(options: {
  city: string
  slug: string
  description?: string
  areas?: readonly string[]
}) {
  const office = officeForPage(options.slug)
  if (office) return officeLocalBusinessSchema(office)

  const servedNames = options.areas && options.areas.length > 0 ? options.areas : [options.city]
  const areaServed = servedNames.map((name) => ({
    "@type": NEIGHBORHOOD_AREAS.has(name) ? ("Neighborhood" as const) : ("City" as const),
    name,
    containedInPlace: { "@type": "State" as const, name: "Texas" },
  }))
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: BUSINESS.name,
    url: BUSINESS.url,
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

// Review/AggregateRating schema was removed on purpose. The 4.9 / 200+ figure
// belongs to one Google Business Profile, and a hard-coded rating that drifts
// from Google is a manual-action risk. Link to each office's Google reviews
// instead. Kept as a no-op so old imports don't break.
export function ReviewStructuredData() {
  return null
}

/** Sitewide schema, injected by the root layout on every painting page. */
export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraphSchema) }}
    />
  )
}

/** Inline JSON-LD helper. */
export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
