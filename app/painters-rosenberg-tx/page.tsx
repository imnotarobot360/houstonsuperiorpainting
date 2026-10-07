import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "House Painters Rosenberg TX | Interior & Exterior Painting",
  description: "House painters in Rosenberg, TX: interior, exterior and cabinet painting for older homes and new subdivisions in Fort Bend County. 5-year warranty.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-rosenberg-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters in Rosenberg TX | Houston Superior Painting",
    description: "Interior and exterior painting for Rosenberg, TX homeowners. Insured crews, 5-year workmanship warranty, free estimates.",
    type: "website",
  },
}

const localBusinessSchema = generateLocationBusinessSchema({
  city: "Rosenberg",
  slug: "painters-rosenberg-tx",
  description: "Professional house painting services in Rosenberg, TX. Interior, exterior, cabinet refinishing for this growing Fort Bend community.",
})

export default function PaintersRosenbergTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Rosenberg"
          state="TX"
          heroHeadline="House Painters Serving Rosenberg, Texas"
          heroDescription="Interior, exterior and cabinet painting for Rosenberg homes, from older houses near downtown to newer subdivisions across Fort Bend County."
          quickAnswer={`Houston Superior Painting paints homes in Rosenberg, TX. Interior painting typically costs ${PRICES_2026.interiorPerSqFt}/sq ft (${PRICES_2026.fullInterior2500} for a 2,500 sq ft home) and exterior painting ${PRICES_2026.exteriorPerHome} per home. Older homes need more prep than new ones, and that shows up in the written estimate. Insured, 5-year workmanship warranty, and nothing is due until you approve the estimate. Call ${BUSINESS.phone} for a free estimate.`}
          aboutCity={`Rosenberg grew up as a railroad town on the Brazos River and is now one of Fort Bend County's faster-growing cities. Older homes near the historic downtown sit alongside newer subdivisions on the city's edges.

Older homes here often have wood siding and trim that need scraping, wood repair, caulk and primer before repainting. Newer homes are usually brick with painted siding, trim and soffits, and tend to need cleaning, caulk touch-up and good coverage on their first repaint. Houston's humidity and summer heat are hard on exterior paint, which is why prep, not just the paint, decides how long a job lasts.

Newer subdivisions often have HOAs that require approval before an exterior color change, so get that approval before the job is scheduled. We can provide the product names and color codes your association asks for.

Houston Superior Painting was founded in 2019 and is headquartered in Cypress, with an office in Sugar Land. Every estimate is free and written, and nothing is due until you approve it.`}
          whyChooseUs={[
            "Written estimates with the full scope spelled out",
            "Thorough preparation: washing, scraping, caulk, wood repair and priming",
            "Sherwin-Williams and Benjamin Moore products",
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
              description: "Exterior repaints with cleaning, repair and priming before the finish coats.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing",
              description: "Painted cabinet finishes as an alternative to replacing sound cabinet boxes.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair",
              description: "Fix cracks, nail pops, and settling damage before painting.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing",
              description: "Pressure washing for driveways, patios, and siding.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick",
              description: "Limewash finishes for brick homes, priced after an on-site look.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting",
              description: "Painting for Rosenberg businesses and commercial properties.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy",
              description: "Garage floor coatings through our sister brand, Houston Superior Epoxy.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Downtown Rosenberg",
            "Summer Lakes",
            "Bonbrook Plantation",
            "Walnut Creek",
            "Bridlewood Estates",
            "Richmond area"
          ]}
          faqs={[
            {
              question: "How much does it cost to paint a house in Rosenberg, TX?",
              answer: `Interior painting in Rosenberg typically costs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exterior painting runs ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. We provide free written estimates.`
            },
            {
              question: "Do you serve all of Rosenberg and surrounding areas?",
              answer: "Yes. We paint homes throughout Rosenberg and nearby Fort Bend communities such as Richmond, Sugar Land and Fulshear."
            },
            {
              question: "What's the best time to paint exteriors in Rosenberg?",
              answer: "Spring and fall usually bring milder temperatures and lower humidity, which make exterior work easier. We paint year-round and schedule around rain and temperature so coatings can cure properly."
            },
            {
              question: "How does payment work?",
              answer: "Estimates are free. Nothing is due until you approve the written estimate; then a down payment is due, and the balance is due after the final walkthrough."
            }
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
