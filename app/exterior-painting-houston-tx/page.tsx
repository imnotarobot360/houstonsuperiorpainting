import type { Metadata } from "next"
import Link from "next/link"
import { ServiceSkeleton, serviceUrl } from "@/components/aeo/service-skeleton"
import { generateServiceSchema } from "@/components/structured-data"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

const SLUG = "exterior-painting-houston-tx"
const URL = serviceUrl(SLUG)
const TITLE = "Exterior Painting Houston TX | 2026 Prices & Process"
const DESCRIPTION =
  "Exterior house painting in Houston costs $1.50–$4/sq ft in 2026; a 2,500 sq ft two-story runs $5,500–$9,000. 5-year warranty. Call (346) 594-5960."
const OG_IMAGE = "https://houstonsuperiorpainting.com/images/og/og-exterior-painting.jpg"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: BUSINESS.name,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Exterior house painting in Houston, TX" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
}

// Min/max match the price table below (1,500 sq ft one-story → 4,000+ sq ft two-story).
// howToSchemas.exteriorPainting (5 steps) was dropped: it no longer matches the
// 4 visible process steps on this page.
const serviceSchema = generateServiceSchema({
  name: "Exterior Painting in Houston, TX",
  slug: SLUG,
  description:
    "Exterior house painting in Houston, Katy, Cypress, Sugar Land and nearby Texas cities on brick, stucco, HardiePlank, and wood siding. Pressure wash, scrape, caulk, prime, and two coats. 5-year workmanship warranty.",
  serviceType: "Exterior Painting",
  minPrice: 2500,
  maxPrice: 14000,
  subServices: ["House Painting", "Siding Painting", "Stucco Painting", "Brick Painting", "Trim & Fascia", "Front & Garage Doors"],
})

const faqs = [
  {
    q: "How much does exterior painting cost in Houston in 2026?",
    a: `Exterior painting in Houston runs ${PRICES_2026.exteriorPerSqFt} per square foot of floor area in 2026. A 2,500 sq ft two-story home costs ${PRICES_2026.exterior2500TwoStory}. Wood rot repair and stucco crack repair are priced separately.`,
  },
  {
    q: "How long does exterior painting take for a 2,500 sq ft home?",
    a: "Four to six working days for a typical 2,500 sq ft two-story home, depending on how much scraping and repair the siding needs and on the weather.",
  },
  {
    q: "Do you use Sherwin-Williams or Benjamin Moore?",
    a: "Mostly Sherwin-Williams Duration or Emerald on exteriors because both hold up to Gulf Coast sun and moisture. We also use Benjamin Moore Aura or Regal Select exterior when a homeowner or HOA prefers it.",
  },
  {
    q: "What prep do you do before painting in Houston humidity?",
    a: "We pressure wash to kill mildew, let the siding dry, scrape and sand loose paint, replace rotted wood, caulk every gap, and prime bare wood and repairs. We don't paint when humidity is above 85% or surfaces are above 90°F.",
  },
  {
    q: "How many coats do you apply?",
    a: "Two full coats over primed repairs, sprayed and back-rolled so the paint gets into the texture of brick, stucco, and siding.",
  },
  {
    q: "Do I need to be home during exterior painting?",
    a: "No. We need gates unlocked and access to an outdoor water spigot and outlet. We cover plants and move light patio furniture ourselves.",
  },
  {
    q: "Are you licensed and insured in Texas?",
    a: "Texas does not license painters. We carry $2M general liability and workers' compensation, and the certificate of insurance comes with every estimate.",
  },
  {
    q: "What does the 5-year warranty cover?",
    a: "Peeling, blistering, and flaking caused by our workmanship. It does not cover damage from water intrusion, settling, or surfaces you asked us not to prep.",
  },
  {
    q: "Can you match my HOA-approved colors?",
    a: "Yes. We pull your HOA's approved color list and submit the ARC form for Katy, Cypress, Sugar Land, and Woodlands communities before work starts.",
  },
  {
    q: "What time of year is best for exterior painting in Houston?",
    a: "October through April. Summer afternoons are too hot and humid for paint to cure properly.",
  },
  {
    q: "Do you require a deposit?",
    a: "No. You pay when the walkthrough is done and you're satisfied.",
  },
  {
    q: "How do I get an estimate?",
    a: `Call ${BUSINESS.phone} or request an estimate online. We walk every elevation with you and send a written scope with prep, product, and coat count within 24 hours.`,
  },
]

export default function ExteriorPaintingHoustonTX() {
  return (
    <ServiceSkeleton
      slug={SLUG}
      serviceName="Exterior Painting"
      h1="Exterior Painting in Houston, TX"
      quickAnswer={
        <>
          Exterior house painting in Houston costs {PRICES_2026.exteriorPerSqFt} per square foot in 2026; a 2,500 sq ft
          two-story home runs {PRICES_2026.exterior2500TwoStory}. {BUSINESS.name} pressure washes, scrapes, caulks,
          primes, and applies two coats of Sherwin-Williams Duration or Emerald, with a{" "}
          {BUSINESS.trust.warrantyYears}-year workmanship warranty. Free estimates: {BUSINESS.phone}.
        </>
      }
      beforeAfter={{
        before: "/images/exterior-before-1.jpg",
        after: "/images/exterior-after-1.jpg",
        beforeAlt: "Houston home with original beige stucco exterior before painting",
        afterAlt: "Same Houston home with fresh white stucco exterior after painting",
        caption: "A Tuscan-style Houston home repainted from beige stucco to white.",
      }}
      whoFor={
        <p>
          Homeowners in Greater Houston whose exterior is fading, chalking, peeling, or growing mildew — or who want a
          new color before selling. We paint brick, stucco, HardiePlank and fiber cement, and wood siding, plus trim,
          fascia, soffits, front doors, and garage doors. Brick owners who want a softer, breathable look should also
          see our <Link href="/limewash-brick-painting-houston-tx">limewash and brick painting</Link> service.
        </p>
      }
      processTitle="Our exterior painting process in Houston"
      steps={[
        {
          title: "Prep",
          text: "Pressure wash to kill mildew, then let it dry. Scrape and sand loose paint, replace rotted wood (priced separately), caulk every gap at windows, doors, and trim, and prime bare wood and repairs. Prep is most of the job on a Houston exterior.",
        },
        {
          title: "Product",
          text: "We match the coating to the surface: Sherwin-Williams Duration or Emerald on siding and trim, masonry or elastomeric coatings on stucco, and breathable masonry paint on brick. Colors are confirmed against your HOA's approved list before we start.",
        },
        {
          title: "Two coats",
          text: "Two full coats, sprayed and back-rolled. We don't paint when humidity is above 85% or surfaces are above 90°F, and we work around morning dew and afternoon storms.",
        },
        {
          title: "Walkthrough",
          text: "You walk every elevation with the crew lead before final payment. We touch up anything you flag on the spot.",
        },
      ]}
      risks={[
        <>
          <strong>Humidity and dew.</strong> Paint applied over damp or chalky surfaces peels early. We wait for
          siding to dry after washing and start after the dew burns off.
        </>,
        <>
          <strong>Sun and chalking.</strong> South- and west-facing walls fade and chalk fastest. Chalky paint must be
          washed off and sealed with primer, or the new coat won&apos;t bond.
        </>,
        <>
          <strong>Flashing and water intrusion.</strong> Failed caulk and missing flashing at windows, doors, and roof
          lines let rain behind the siding and rot the trim. We re-caulk every joint and flag flashing problems for a
          roofer before we paint over them.
        </>,
        <>
          <strong>Mold and mildew.</strong> Mildew grows on shaded north walls and under eaves. It gets killed during
          the wash, not painted over.
        </>,
        <>
          <strong>HOA rules.</strong> HOA communities in Katy, Cypress, and Sugar Land restrict exterior colors and
          require approval before work starts. We handle the ARC submission for you.
        </>,
      ]}
      costTitle="Exterior painting cost in Houston (2026)"
      price={{
        head: ["Home size", "1 story", "2 story"],
        rows: [
          ["1,500 sq ft", "$2,500–$4,500", "$3,500–$6,000"],
          ["2,000 sq ft", "$3,500–$5,500", "$4,500–$7,500"],
          ["2,500 sq ft", "$4,000–$7,000", PRICES_2026.exterior2500TwoStory],
          ["3,000 sq ft", "$5,000–$8,000", "$6,500–$10,500"],
          ["4,000+ sq ft", "$6,500–$10,000", "$8,500–$14,000"],
        ],
        note: "Includes pressure wash, scrape, caulk, prime, and two coats. Wood rot repair runs $75–$150 per linear foot extra. Stucco crack repair and elastomeric coating add $1–$2/sq ft.",
      }}
      costGuide={{ label: "exterior house painting cost guide for Houston", href: "/exterior-house-painting-houston-cost-guide" }}
      paints={
        <>
          <p>
            <strong>Sherwin-Williams Duration and Emerald</strong> for most exteriors — both hold up to Gulf Coast UV
            and moisture and resist mildew. Duration costs about $30 a gallon more than SuperPaint and lasts 3–5 years
            longer in Houston sun. <strong>Benjamin Moore Aura or Regal Select</strong> exterior when an HOA or
            homeowner specifies it. Stucco gets a masonry or elastomeric coating that bridges hairline cracks.
          </p>
          <p>
            Why it matters in Houston: heat, humidity, and afternoon storms break down cheap acrylics fast. Premium
            lines keep their color on sunny elevations and shed water on shaded ones. We buy at contractor pricing and
            pass the product through at cost.
          </p>
        </>
      }
      faqs={faqs}
      related={[
        { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
        { label: "Limewash and brick painting in Houston", href: "/limewash-brick-painting-houston-tx" },
        { label: "Soft washing in Houston", href: "/soft-washing-houston-tx" },
      ]}
      schema={[serviceSchema]}
    />
  )
}
