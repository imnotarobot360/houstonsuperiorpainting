import type { Metadata } from "next"
import { BUSINESS, PRICES_2026 } from "@/lib/business"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "House Painters Energy Corridor Houston TX | Free Estimates",
  description: "House painters serving the Energy Corridor in west Houston: interior, exterior and cabinet painting for Briar Forest, Nottingham and nearby homes.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-energy-corridor-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters in Energy Corridor TX | Houston Superior Painting",
    description: "Interior, exterior and cabinet painting for Energy Corridor homeowners. Insured crews, 5-year workmanship warranty.",
    type: "website",
  },
}

const localBusinessSchema = generateLocationBusinessSchema({
  city: "Energy Corridor",
  slug: "painters-energy-corridor-tx",
  description: "Professional house painting services in the Energy Corridor, Houston TX. Interior, exterior, and cabinet refinishing.",
})

export default function PaintersEnergyCorridorTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Energy Corridor"
          state="TX"
          heroHeadline="House Painters for the Energy Corridor"
          heroDescription="Interior, exterior and cabinet painting for homes, townhomes and condos in Houston's Energy Corridor, from Briar Forest and Nottingham Forest to the neighborhoods near Addicks."
          quickAnswer={`Houston Superior Painting paints homes in the Energy Corridor area of west Houston. Interior painting typically costs ${PRICES_2026.interiorPerSqFt}/sq ft (${PRICES_2026.fullInterior2500} for a 2,500 sq ft home) and exterior painting ${PRICES_2026.exteriorPerHome} per home. Homes that have had water damage need the drywall repaired and sealed before painting. Insured, 5-year workmanship warranty. Call ${BUSINESS.phone} for a free estimate.`}
          aboutCity={`The Energy Corridor runs along I-10 in west Houston, near the Addicks and Barker reservoirs. Alongside its office towers are established single-family neighborhoods such as Briar Forest, Nottingham Forest and Thornwood, plus newer townhomes and condos.

Many single-family homes here date from the 1970s through the 1990s, so exterior repaints usually involve replacing failed caulk, repairing rotted trim and siding, and priming bare wood. Inside, common jobs are updating dated colors, repainting trim and refinishing kitchen cabinets.

Parts of the area have flooded in past storms. If your walls have had water damage, the damaged drywall needs to be replaced or repaired and any stains sealed with a stain-blocking primer before paint goes on, or the stains will bleed back through.

For townhomes and condos, exterior work is often controlled by the HOA or property manager, so check what you are allowed to change before scheduling. Houston Superior Painting was founded in 2019 and is headquartered in Cypress. Every estimate is free and written, and nothing is due until you approve it.`}
          whyChooseUs={[
            "Drywall repair and stain-blocking primer before painting water-damaged walls",
            "Exterior prep for older homes: caulk, wood repair and priming",
            "Sherwin-Williams and Benjamin Moore products",
            "Insured: $2M general liability plus workers' comp",
            "5-year written workmanship warranty",
            "No upfront payment: nothing is due until you approve the written estimate"
          ]}
          services={[
            {
              title: "Interior Painting",
              description: "Walls, ceilings and trim, from single rooms to whole-home repaints.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior House Painting",
              description: "Exterior repaints with caulk, wood repair and priming before the finish coats.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing",
              description: "Painted cabinet finishes as an alternative to replacing sound cabinet boxes.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair",
              description: "Repairs to cracks and water-damaged drywall before painting.",
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
              description: "Painting for Energy Corridor businesses and office spaces.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy",
              description: "Garage floor coatings through our sister brand, Houston Superior Epoxy.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Briar Forest",
            "Westchase",
            "Nottingham Forest",
            "Royal Oaks",
            "Eldridge",
            "Addicks",
            "Terry Hershey Park Area",
            "Park Row",
            "West Houston",
            "Memorial West",
            "Town and Country",
            "Spring Branch West"
          ]}
          faqs={[
            {
              question: "How much does house painting cost in the Energy Corridor?",
              answer: `Interior painting in the Energy Corridor typically costs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exterior painting runs ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. We provide free written estimates.`
            },
            {
              question: "Do you paint condos and townhomes in the Energy Corridor?",
              answer: "Yes. We paint single-family homes, townhomes and condos. For exterior work on townhomes and condos, check with your HOA or property manager first, since they often control exterior colors and scheduling."
            },
            {
              question: "Can you paint walls that had water damage?",
              answer: "Yes, once the cause is fixed and the wall is dry. Damaged drywall is repaired or replaced, and stains are sealed with a stain-blocking primer before painting so they do not bleed through."
            },
            {
              question: "Can you work around a move-in or move-out date?",
              answer: "Tell us your date when you request the estimate. The written estimate includes the expected schedule, so you can confirm it fits before approving."
            }
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
