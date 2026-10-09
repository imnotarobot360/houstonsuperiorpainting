import type { Metadata } from "next"
import Link from "next/link"
import { TrustBar } from "@/components/trust-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { ProblemSelector } from "@/components/problem-selector"
import { PricingSection } from "@/components/pricing-section"
import { SchedulerSection } from "@/components/scheduler-section"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

const DESCRIPTION =
  "House painters in Memorial, Houston: interior, exterior and cabinet painting for large homes with tall ceilings and detailed trim. 5-year warranty."

export const metadata: Metadata = {
  title: "House Painters Memorial TX — Houston Superior Painting",
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-memorial-tx',
  },
  openGraph: {
    title: "House Painters Memorial TX — Houston Superior Painting",
    description: DESCRIPTION,
    url: "https://houstonsuperiorpainting.com/painters-memorial-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-painters-houston.jpg",
      width: 1200,
      height: 630,
      alt: "House Painters Memorial TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Painters Memorial TX — Houston Superior Painting",
    description: DESCRIPTION,
    images: ["https://houstonsuperiorpainting.com/images/og/og-painters-houston.jpg"],
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Memorial',
    'geo.position': '29.7752;-95.5605',
    'ICBM': '29.7752, -95.5605',
  },
}

export default function PaintersMemorialTX() {
  return (
    <>
      <TrustBar hideRating />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Memorial",
  slug: "painters-memorial-tx",
  description: "Premium house painting services in Memorial, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Memorial"
          state="TX"
          heroHeadline="House Painters in Memorial, Houston"
          heroDescription="Interior, exterior and cabinet painting for Memorial-area homes along the Memorial Drive corridor, from established ranch homes to large custom builds with tall ceilings and detailed trim."
          quickAnswer={`Houston Superior Painting paints homes throughout the Memorial area of west Houston. Interior painting typically costs ${PRICES_2026.interiorPerSqFt}/sq ft (${PRICES_2026.fullInterior4000} for homes around 4,000 sq ft) and a two-story exterior around 4,000 sq ft typically runs ${PRICES_2026.exterior4000TwoStory}. Larger homes with extensive millwork are quoted after a walkthrough. Sherwin-Williams and Benjamin Moore products, insured crews, 5-year workmanship warranty. Call ${BUSINESS.phone} for a free estimate.`}
          aboutCity={`Memorial is a wooded area of west Houston along Memorial Drive and Buffalo Bayou, with established neighborhoods such as Memorial Bend, Frostwood and Memorial Thicket, and the separate Memorial Villages cities just to the north. Many original ranch homes have been joined or replaced by large custom builds.

Larger Memorial homes bring their own painting challenges: tall foyer and stairwell walls that need scaffolding or extension equipment, a lot of trim, crown and built-in millwork that has to be cut in by hand, and mature landscaping that has to be protected around the exterior. Shade from the tree canopy also keeps exterior surfaces damp longer, so washing, caulk and wood repair come before any finish coat.

We paint walls, ceilings, trim and cabinets, and we can work from a designer's color and sheen specifications. Specialty finishes such as Venetian plaster, Roman Clay, faux finishes and limewash are priced after an on-site look.

Houston Superior Painting was founded in 2019 and is headquartered in Cypress. Every estimate is free and written, and nothing is due until you approve it.`}
          whyChooseUs={[
            "Equipment and planning for tall ceilings, stairwells and detailed millwork",
            "Can work from designer or architect color and sheen specifications",
            "Landscape and floor protection, with cleanup when the work is done",
            "Sherwin-Williams and Benjamin Moore products",
            "Insured: $2M general liability plus workers' comp",
            "5-year written workmanship warranty"
          ]}
          services={[
            {
              title: "Interior Painting Memorial",
              description: "Walls, ceilings and trim for Memorial homes, including tall rooms and stairwells.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior Painting Memorial",
              description: "Exterior repaints with washing, caulk and wood repair before the finish coats.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing Memorial",
              description: "Painted cabinet finishes in custom colors as an alternative to replacement.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Venetian Plaster & Specialty Finishes Memorial",
              description: "Venetian plaster, Roman Clay and faux finishes for feature walls and rooms, priced after an on-site look.",
              href: "/venetian-plaster-houston-tx"
            },
            {
              title: "Drywall Repair Memorial",
              description: "Repairs to cracks, settling and imperfections before painting.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Limewash Brick Memorial",
              description: "Limewash finishes for brick homes, priced after an on-site look.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Pressure Washing Memorial",
              description: "Cleaning driveways, patios and exteriors before painting or as a standalone service.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Garage Floor Epoxy Memorial",
              description: "Garage floor coatings through our sister brand, Houston Superior Epoxy.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Memorial Bend",
            "Memorial Close",
            "Memorial Drive Estates",
            "Memorial Forest",
            "Memorial Thicket",
            "Stablewood",
            "Frostwood",
            "Bunker Hill Village",
            "Piney Point Village",
            "Hedwig Village",
            "Hunters Creek Village",
            "Spring Valley Village"
          ]}
          faqs={[
            {
              question: "How much does it cost to paint a house in Memorial?",
              answer: `Interior painting in Memorial typically costs ${PRICES_2026.interiorPerSqFt} per square foot; homes around 4,000 sq ft generally run ${PRICES_2026.fullInterior4000} inside. A two-story exterior around 4,000 sq ft typically runs ${PRICES_2026.exterior4000TwoStory}, and larger homes with extensive millwork are quoted after a walkthrough. We provide free written estimates.`
            },
            {
              question: "Do you paint large Memorial homes?",
              answer: "Yes. Large homes mostly add time and equipment: tall walls and stairwells, more trim and millwork, and more exterior surface. We plan those in the written estimate after walking the home."
            },
            {
              question: "What paint brands do you use in Memorial?",
              answer: "We use Sherwin-Williams and Benjamin Moore, choosing the product line for each surface, sheen and exposure."
            },
            {
              question: "Can you work with our designer?",
              answer: "Yes. We can work from a designer's or architect's color and sheen specifications and coordinate scheduling with other trades on a renovation."
            },
            {
              question: "How do you protect landscaping?",
              answer: "We cover beds and shrubs near the work area, protect floors and hardscape with drop cloths and plastic, and clean up when the work is done."
            },
            {
              question: "Do you also serve the Memorial Villages?",
              answer: "Yes. Bunker Hill, Piney Point, Hedwig, Hunters Creek, Spring Valley and Hilshire Village are covered on our Memorial Villages page."
            },
            {
              question: "What warranty do you offer?",
              answer: "Memorial painting projects are backed by our 5-year written workmanship warranty."
            }
          ]}
        />
        <section className="container mx-auto px-4 max-w-4xl pb-12">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Recent Project in Memorial
            </h2>
            <p className="text-foreground leading-relaxed">
              We repainted the interior of a Memorial home with one cohesive palette across walls and trim.{" "}
              <Link
                href="/projects/memorial-whole-home-interior-repaint"
                className="text-primary font-medium hover:underline"
              >
                See the Memorial whole-home interior repaint
              </Link>
              . Also serving the{" "}
              <Link href="/painters-memorial-villages-tx" className="text-primary font-medium hover:underline">
                Memorial Villages
              </Link>{" "}
              and the{" "}
              <Link href="/painters-energy-corridor-tx" className="text-primary font-medium hover:underline">
                Energy Corridor
              </Link>
              .
            </p>
          </div>
        </section>
        <ProblemSelector />
        <PricingSection />
        <SchedulerSection />
      </main>
      <Footer />
    </>
  )
}
