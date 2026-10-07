import type { Metadata } from "next"
import { BUSINESS, PRICES_2026 } from "@/lib/business"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "House Painters Cypress Creek TX | Interior & Exterior",
  description: "House painters for the Cypress Creek area of NW Houston, Klein and Spring: interior, exterior and cabinet painting. Free estimates, 5-year warranty.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-cypress-creek-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters in Cypress Creek TX | Houston Superior Painting",
    description: "Interior, exterior and cabinet painting for Cypress Creek area homeowners. Insured crews, 5-year workmanship warranty.",
    type: "website",
  },
}

const localBusinessSchema = generateLocationBusinessSchema({
  city: "Cypress Creek",
  slug: "painters-cypress-creek-tx",
  description: "Professional house painting services in Cypress Creek area. Interior, exterior, and cabinet refinishing.",
})

export default function PaintersCypressCreekTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Cypress Creek"
          state="TX"
          heroHeadline="House Painters for the Cypress Creek Area"
          heroDescription="Interior, exterior and cabinet painting for neighborhoods along Cypress Creek in Northwest Houston, Klein and Spring, with prep suited to wooded, shaded lots."
          quickAnswer={`Houston Superior Painting paints homes along the Cypress Creek corridor in Northwest Houston, Klein and Spring. Interior painting typically costs ${PRICES_2026.interiorPerSqFt}/sq ft (${PRICES_2026.fullInterior2500} for a 2,500 sq ft home) and exterior painting ${PRICES_2026.exteriorPerHome} per home. Shaded, wooded lots usually need extra washing, caulk and wood repair before painting. Insured, 5-year workmanship warranty. Call ${BUSINESS.phone} for a free estimate.`}
          aboutCity={`Cypress Creek runs across northwest Harris County, and the neighborhoods along it range from established, wooded subdivisions such as Lakewood Forest and Northgate Forest to newer communities such as Gleannloch Farms. Many of the older homes date from the 1970s through the 1990s.

Mature trees and the creek setting shape exterior work. Shade keeps siding and trim damp longer, which encourages mildew and slows drying, and leaves and sap build up on surfaces. Exterior repaints here start with a thorough wash, then caulk replacement, repair of soft or rotted wood, and priming bare spots before the finish coats, scheduled for dry weather.

Inside, older homes often need settling cracks and old water stains repaired and sealed before repainting, and kitchen cabinets are a common update. Many subdivisions in the area are deed-restricted, so check whether your HOA needs to approve an exterior color change before the job is scheduled.

Houston Superior Painting was founded in 2019 and is headquartered in nearby Cypress. Every estimate is free and written, and nothing is due until you approve it.`}
          whyChooseUs={[
            "Prep for shaded, wooded lots: washing, mildew treatment, caulk and wood repair",
            "Interior crack and stain repair before repainting",
            "Sherwin-Williams and Benjamin Moore paints",
            "Insured: $2M general liability plus workers' comp",
            "5-year written workmanship warranty",
            "No upfront payment: nothing is due until you approve the written estimate"
          ]}
          services={[
            {
              title: "Interior Painting",
              description: "Walls, ceilings and trim, from single rooms to complete repaints.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior House Painting",
              description: "Exterior repaints with washing, repair and priming suited to shaded, humid lots.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing",
              description: "Painted cabinet finishes as an alternative to replacing sound cabinet boxes.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair",
              description: "Fix settling cracks, water stains, and other damage before painting.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing",
              description: "Pressure washing to remove mildew and organic debris.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick",
              description: "Limewash finishes for brick homes, priced after an on-site look.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting",
              description: "Painting for businesses along FM 1960 and the Spring area.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy",
              description: "Garage floor coatings through our sister brand, Houston Superior Epoxy.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Champions Forest",
            "Lakewood Forest",
            "Gleannloch Farms",
            "Legends Ranch",
            "Klein",
            "Spring",
            "Champions",
            "Northgate Forest",
            "Cypresswood",
            "Windrose",
            "Cypress Station",
            "Willowbrook"
          ]}
          faqs={[
            {
              question: "How much does house painting cost in the Cypress Creek area?",
              answer: `Interior painting in the Cypress Creek area typically costs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exterior painting runs ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. We provide free written estimates.`
            },
            {
              question: "Can you paint walls that had water damage?",
              answer: "Yes, once the cause is fixed and the wall is dry. Damaged drywall is repaired or replaced, and stains are sealed with a stain-blocking primer before painting so they do not bleed through."
            },
            {
              question: "What areas near Cypress Creek do you serve?",
              answer: "We paint homes along the Cypress Creek corridor, including Champions Forest, Lakewood Forest, Gleannloch Farms, Klein, Spring and surrounding communities."
            },
            {
              question: "How do you handle the wooded environment around Cypress Creek?",
              answer: "Shade keeps surfaces damp and encourages mildew, so we wash and treat surfaces first, replace failed caulk, repair soft wood, prime bare spots, and schedule painting for dry weather so coatings can cure."
            }
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
