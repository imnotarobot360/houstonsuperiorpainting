import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { PRICES_2026 } from "@/lib/business"

const TITLE = "The Woodlands TX House Painters | Houston Superior Painting"
const DESCRIPTION =
  "Interior, exterior & cabinet painting in The Woodlands, TX. $2M general liability + workers' comp, 5-year warranty. Free estimates: (346) 594-5960."
const OG_IMAGE = "https://houstonsuperiorpainting.com/images/og/og-painters-woodlands.jpg"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-the-woodlands-tx',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://houstonsuperiorpainting.com/painters-the-woodlands-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: OG_IMAGE,
      width: 1200,
      height: 630,
      alt: "Painters The Woodlands TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
}

export default function PaintersTheWoodlandsTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "The Woodlands",
  slug: "painters-the-woodlands-tx",
  description: "Professional house painting services in The Woodlands, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="The Woodlands"
          state="TX"
          heroHeadline="House Painters in The Woodlands, TX"
          heroDescription="Interior, exterior, and cabinet painting for homes in every village of The Woodlands, with prep planned for shade, moisture, and design review. Insured, with a 5-year workmanship warranty."
          quickAnswer={`Houston Superior Painting paints interiors, exteriors, and kitchen cabinets and repairs drywall in The Woodlands, TX, including Panther Creek, Alden Bridge, Sterling Ridge, Cochran's Crossing, and Creekside Park. We are headquartered in Cypress, and our crews work across North Houston and Greater Houston. In 2026 a full interior on a 2,500 sq ft home runs ${PRICES_2026.fullInterior2500} and a 2,500 sq ft two-story exterior runs ${PRICES_2026.exterior2500TwoStory}. We carry $2M general liability + workers' comp and give a 5-year workmanship warranty. For a free estimate, call (346) 594-5960 or request one online.`}
          aboutCity={`The Woodlands is a master-planned community built inside a pine forest, and the tree canopy shapes how a house should be painted. Shaded walls stay damp after rain and grow mildew, pine pollen and sap leave a film on siding and trim, and paint does not bond to either. On an exterior we wash with a mildewcide, let the surfaces dry fully, repair soft wood, and prime bare spots before the finish coats.

Exterior color changes in The Woodlands generally need approval from the community's residential design review process before work starts, and Creekside Park has its own covenants. We can help you choose colors and prepare the paperwork for approval, so plan for that time when you schedule an exterior.

Inside, many Woodlands homes have tall ceilings, two-story entries, and detailed trim. Those add ladder and scaffold time, which your written estimate lists room by room.`}
          whyChooseUs={[
            "Free on-site estimate with a written scope; nothing is due until you approve it",
            "Insured: $2M general liability + workers' comp, with certificates available on request",
            "5-year written workmanship warranty",
            "Sherwin-Williams and Benjamin Moore paints",
            "Mildew washing and drying time built into exterior prep for shaded lots",
            "Help preparing color selections for design review",
          ]}
          services={[
            {
              title: "Interior Painting",
              description: "Walls, ceilings, trim, and doors, including tall ceilings and two-story entries.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior House Painting",
              description: "Mildew washing, wood repair, caulk, and primer before the finish coats.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing",
              description: "Sprayed cabinet finishes that update a kitchen without replacing the cabinets.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair",
              description: "Cracks, settling damage, and water spots repaired and texture-matched before painting.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing",
              description: "Cleaning mildew, pollen, and debris from siding and hard surfaces before painting.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick",
              description: "Limewash or painted brick for Woodlands brick homes, priced after an on-site look.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting",
              description: "Painting for businesses and commercial properties in The Woodlands.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy",
              description: "Garage floor epoxy is handled by our separate epoxy brand, Houston Superior Epoxy.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Panther Creek",
            "Indian Springs",
            "Cochran's Crossing",
            "Grogan's Mill",
            "Sterling Ridge",
            "Alden Bridge",
            "College Park",
            "Creekside Park",
            "Carlton Woods",
            "East Shore",
            "Woodlands Reserve",
            "Capstone"
          ]}
          faqs={[
            {
              question: "Do I need approval to change my exterior color in The Woodlands?",
              answer: "Usually, yes. Exterior color changes in The Woodlands generally go through the community's residential design review before work starts, and Creekside Park has its own covenants. Check with your village or association first; we can help you choose colors and prepare the submission."
            },
            {
              question: "How do you handle painting in The Woodlands' wooded environment?",
              answer: "Shade and tree cover keep walls damp and leave pollen, sap, and mildew on the surface. We wash with a mildewcide, let the house dry fully, repair soft wood, and prime bare spots before painting so the new coat bonds."
            },
            {
              question: "How much does it cost to paint a house in The Woodlands?",
              answer: `In 2026 interior painting typically runs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exteriors run ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. Tall ceilings and detailed trim add time, and your free written estimate gives the exact price.`
            },
            {
              question: "How far in advance should I schedule?",
              answer: "Request your estimate early, especially for spring and fall exteriors and when design review approval is needed. We confirm the start date at the estimate."
            },
            {
              question: "Are you insured?",
              answer: "Yes. We carry $2M general liability + workers' comp and can send a certificate of insurance to you or your association. Texas does not license residential painters, so ask any painter for proof of insurance instead of a license."
            }
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
