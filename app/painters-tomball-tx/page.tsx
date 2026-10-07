import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { PRICES_2026 } from "@/lib/business"

const TITLE = "House Painters in Tomball TX | Houston Superior Painting"
const DESCRIPTION =
  "Interior, exterior & cabinet painting in Tomball, TX, from our Cypress HQ. $2M general liability + workers' comp, 5-year warranty. Call (346) 594-5960."
const OG_IMAGE = "https://houstonsuperiorpainting.com/images/og/og-painters-tomball.jpg"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-tomball-tx',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://houstonsuperiorpainting.com/painters-tomball-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: OG_IMAGE,
      width: 1200,
      height: 630,
      alt: "Painters Tomball TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
}

export default function PaintersTomballTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Tomball",
  slug: "painters-tomball-tx",
  areas: ["Tomball", "Magnolia", "Spring", "The Woodlands"],
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Tomball"
          state="TX"
          heroHeadline="House Painters in Tomball, TX"
          heroDescription="Interior, exterior, and cabinet painting for Tomball homes, from older houses near downtown to newer master-planned communities. Insured, with a 5-year workmanship warranty."
          quickAnswer={`Houston Superior Painting paints interiors, exteriors, and kitchen cabinets and repairs drywall in Tomball, TX, including Old Town Tomball, Northpointe, Augusta Pines, and Rosehill. We are headquartered in nearby Cypress, and our crews work across Northwest Houston and Greater Houston. In 2026 a full interior on a 2,500 sq ft home runs ${PRICES_2026.fullInterior2500} and a 2,500 sq ft two-story exterior runs ${PRICES_2026.exterior2500TwoStory}. We carry $2M general liability + workers' comp and give a 5-year workmanship warranty. For a free estimate, call (346) 594-5960 or request one online.`}
          aboutCity={`Tomball started as a railroad town, and its housing still reflects that: older homes near Main Street and downtown, many with wood siding and detailed trim, alongside newer master-planned communities such as Northpointe and Augusta Pines.

Older wood-sided homes need the most prep. We probe siding, trim, and window sills for soft wood, replace what has rotted, scrape loose paint, and prime bare wood before the finish coats, because paint over rot or loose paint fails quickly. Homes built before 1978 may contain lead paint, which federal rules require be disturbed only by an EPA-certified renovation firm, so ask any painter about that before work on an older home begins.

Tomball has the same heat, humidity, and heavy rain as the rest of Greater Houston, and wooded lots add shade and mildew. We wash off mildew and chalk and let the surfaces dry fully before painting. Tomball is a short drive from our Cypress headquarters.`}
          whyChooseUs={[
            "Free on-site estimate with a written scope; nothing is due until you approve it",
            "Insured: $2M general liability + workers' comp, with certificates available for your HOA",
            "5-year written workmanship warranty",
            "Sherwin-Williams and Benjamin Moore paints",
            "Wood-rot repair and full prep on older wood-sided homes",
            "Founded in 2019 and headquartered in nearby Cypress",
          ]}
        services={[
          {
            title: "Interior Painting",
            description: "Walls, ceilings, trim, and doors, from a single room to a whole-home repaint.",
            href: "/interior-painting-houston-tx"
          },
          {
            title: "Exterior House Painting",
            description: "Wash, scrape, repair, caulk, and prime before the finish coats on wood siding, brick, and trim.",
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
            description: "Cleaning for driveways, patios, and siding, and the first step before exterior paint.",
            href: "/pressure-washing-houston-tx"
          },
          {
            title: "Limewash Brick",
            description: "Limewash or painted brick for Tomball brick homes, priced after an on-site look.",
            href: "/limewash-brick-painting-houston-tx"
          },
          {
            title: "Commercial Painting",
            description: "Painting for Tomball businesses and commercial properties.",
            href: "/commercial-painting-houston-tx"
          },
          {
            title: "Garage Floor Epoxy",
            description: "Garage floor epoxy is handled by our separate epoxy brand, Houston Superior Epoxy.",
            href: "https://houstonsuperiorepoxy.com/"
          }
        ]}
        neighborhoods={[
          "Downtown Tomball",
          "Lakewood Forest",
          "Northpointe",
          "Augusta Pines",
          "Creekside Park",
          "Rosehill",
          "Decker Prairie",
          "Spring Creek",
          "Willow Creek Farms",
          "Timber Lane",
          "Cherry Street Historic District",
          "Tomball Town Center"
        ]}
        faqs={[
          {
            question: "How much does it cost to paint a house in Tomball?",
            answer: `In 2026 interior painting typically runs ${PRICES_2026.interiorPerSqFt} per square foot and exterior painting ${PRICES_2026.exteriorPerSqFt} per square foot. A 2,500 sq ft home interior runs ${PRICES_2026.fullInterior2500}, and a 2,500 sq ft two-story exterior ${PRICES_2026.exterior2500TwoStory}. Your free written estimate gives the exact price.`
          },
          {
            question: "Do you paint older homes in Old Town Tomball?",
            answer: "Yes. On older homes we check siding, trim, and sills for rot, replace soft wood, scrape loose paint, and prime bare wood before painting. If the home was built before 1978, ask about lead paint before any work begins, since federal rules require an EPA-certified renovation firm to disturb it."
          },
          {
            question: "How long does exterior paint last in Tomball's climate?",
            answer: "With full prep and a premium exterior paint such as Sherwin-Williams Duration, plan on roughly five to seven years before a full repaint, longer on shaded walls. Our 5-year warranty covers peeling, blistering, and flaking caused by our workmanship."
          },
          {
            question: "Do you work in the newer Tomball subdivisions?",
            answer: "Yes. We serve Tomball communities including Northpointe, Augusta Pines, Rosehill, Lakewood Forest, and Creekside Park. For HOA communities we can pull the approved color list and help with the approval paperwork."
          },
          {
            question: "Can you match paint colors for touch-ups on my Tomball home?",
            answer: "Usually, yes. If you have the original color name or a leftover can, we use it; if not, the paint store can color-match a sample. Older or sun-faded paint may not blend perfectly, so for exteriors we often recommend repainting a full wall section."
          },
          {
            question: "What's the best time of year to paint exteriors in Tomball?",
            answer: "Spring and fall usually give the best conditions, with milder temperatures and lower humidity. We can paint other times of year by scheduling around rain, dew, and afternoon heat."
          }
        ]}
      />
      </main>
      <Footer />
    </>
  )
}
