import type { Metadata } from "next"
import { TrustBar } from "@/components/trust-bar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { ProblemSelector } from "@/components/problem-selector"
import { PricingSection } from "@/components/pricing-section"
import { SchedulerSection } from "@/components/scheduler-section"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { PRICES_2026 } from "@/lib/business"

const TITLE = "House Painters in Pearland TX | Houston Superior Painting"
const DESCRIPTION =
  "Interior, exterior & cabinet painting in Pearland, TX. $2M general liability + workers' comp, 5-year warranty. Free estimates: (346) 594-5960."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-pearland-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://houstonsuperiorpainting.com/painters-pearland-tx",
    siteName: "Houston Superior Painting",
    type: "website",
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Pearland',
    'geo.position': '29.5636;-95.2860',
    'ICBM': '29.5636, -95.2860',
  },
}

export default function PaintersPearlandTX() {
  return (
    <>
      <TrustBar hideRating />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Pearland",
  slug: "painters-pearland-tx",
  description: "Professional house painting services in Pearland, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Pearland"
          state="TX"
          heroHeadline="House Painters in Pearland, TX"
          heroDescription="Interior, exterior, and cabinet painting for Pearland homes, from Old Pearland to Silverlake and Shadow Creek Ranch. Insured, with a 5-year workmanship warranty."
          quickAnswer={`Houston Superior Painting paints interiors, exteriors, and kitchen cabinets and repairs drywall in Pearland, TX, including Silverlake, Shadow Creek Ranch, Southfork, and Southern Trails. We are headquartered in Cypress, and our crews work across Greater Houston. In 2026 a full interior on a 2,500 sq ft home runs ${PRICES_2026.fullInterior2500} and a 2,500 sq ft two-story exterior runs ${PRICES_2026.exterior2500TwoStory}. We carry $2M general liability + workers' comp and give a 5-year workmanship warranty. For a free estimate, call (346) 594-5960 or request one online.`}
          aboutCity={`Pearland's housing runs from older homes in Old Pearland to master-planned communities such as Silverlake, Shadow Creek Ranch, and Southern Trails. Older homes tend to have more wood trim and siding to check for rot before paint. In newer two-story homes, the usual projects are replacing flat builder-grade interior paint with a washable finish and repainting sun-faded siding and trim.

Pearland sits south of Houston, closer to the Gulf, with the same heat, humidity, and heavy rain as the rest of the area. South- and west-facing walls fade and chalk first. On an exterior we wash off the chalk and mildew, re-caulk open joints, and prime bare spots so the new coat bonds instead of peeling.

Many Pearland communities have HOAs that review exterior colors. We can pull your community's approved color list and help with the approval paperwork before work starts.`}
          whyChooseUs={[
            "Free on-site estimate with a written scope; nothing is due until you approve it",
            "Insured: $2M general liability + workers' comp, with certificates available for your HOA",
            "5-year written workmanship warranty",
            "Sherwin-Williams and Benjamin Moore paints",
            "Help with HOA color lists and approval paperwork",
            "Founded in 2019 and headquartered in Cypress, with crews across Greater Houston",
          ]}
          services={[
            {
              title: "Interior Painting Pearland",
              description: "Walls, ceilings, trim, and doors, including replacing flat builder-grade paint with a washable finish.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior Painting Pearland",
              description: "Wash, scrape, caulk, and prime before the finish coats on siding, trim, and brick.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing Pearland",
              description: "Sprayed cabinet finishes that update a kitchen without replacing the cabinets.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair Pearland",
              description: "Cracks, nail pops, and settling damage repaired and texture-matched before painting.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing Pearland",
              description: "Cleaning for driveways, sidewalks, and exteriors, and the first step before exterior paint.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick Pearland",
              description: "Limewash or painted brick for Pearland brick homes, priced after an on-site look.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting Pearland",
              description: "Painting for Pearland businesses and commercial properties.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy Pearland",
              description: "Garage floor epoxy is handled by our separate epoxy brand, Houston Superior Epoxy.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Silverlake",
            "Shadow Creek Ranch",
            "Southfork",
            "Southern Trails",
            "Lakes of Highland Glen",
            "West Oaks",
            "Old Pearland",
            "Sunrise Lakes",
            "Lakes of Savannah",
            "Magnolia Landing"
          ]}
          faqs={[
            {
              question: "How much does it cost to paint a house in Pearland?",
              answer: `In 2026 interior painting typically costs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exteriors run ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. Your free written estimate gives the exact price.`
            },
            {
              question: "Do you work with Pearland HOAs?",
              answer: "Yes. We can pull your community's approved color list and help with the approval paperwork before any exterior work starts, and we can send a certificate of insurance to your HOA."
            },
            {
              question: "What paint do you use for Pearland exteriors?",
              answer: "Sherwin-Williams or Benjamin Moore exterior paints suited to heat, humidity, and mildew, such as Sherwin-Williams Duration or SuperPaint. Our 5-year warranty covers peeling, blistering, and flaking caused by our workmanship."
            },
            {
              question: "Which Pearland areas do you serve?",
              answer: "All of Pearland, including Silverlake, Shadow Creek Ranch, Southfork, Southern Trails, and Old Pearland. Call (346) 594-5960 or request an estimate online to confirm your address."
            },
            {
              question: "How long does a paint job take in Pearland?",
              answer: "It depends on the size of the home and how much prep it needs. Your written estimate states the timeline before any work starts, and exterior work can shift a few days for rain."
            },
            {
              question: "Are you insured?",
              answer: "Yes. We carry $2M general liability + workers' comp and can send a certificate of insurance to you or your HOA. Texas does not license residential painters, so ask any painter for proof of insurance instead of a license."
            }
          ]}
        />
        <ProblemSelector />
        <PricingSection />
        <SchedulerSection />
      </main>
      <Footer />
    </>
  )
}
