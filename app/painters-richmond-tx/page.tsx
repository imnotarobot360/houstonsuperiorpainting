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

const TITLE = "House Painters in Richmond TX | Houston Superior Painting"
const DESCRIPTION =
  "Interior, exterior & cabinet painting in Richmond, TX. $2M general liability + workers' comp, 5-year warranty. Free estimates: (346) 594-5960."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-richmond-tx',
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://houstonsuperiorpainting.com/painters-richmond-tx",
    siteName: "Houston Superior Painting",
    type: "website",
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Richmond',
    'geo.position': '29.5822;-95.7608',
    'ICBM': '29.5822, -95.7608',
  },
}

export default function PaintersRichmondTX() {
  return (
    <>
      <TrustBar hideRating />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Richmond",
  slug: "painters-richmond-tx",
  description: "Professional house painting services in Richmond, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Richmond"
          state="TX"
          heroHeadline="House Painters in Richmond, TX"
          heroDescription="Interior, exterior, and cabinet painting for Richmond homes, from historic downtown to newer communities like Harvest Green and Long Meadow Farms. Insured, with a 5-year workmanship warranty."
          quickAnswer={`Houston Superior Painting paints interiors, exteriors, and kitchen cabinets and repairs drywall in Richmond, TX, including Pecan Grove, Long Meadow Farms, Harvest Green, and historic downtown. We are headquartered in Cypress, and our crews work across Greater Houston and Fort Bend County. In 2026 a full interior on a 2,500 sq ft home runs ${PRICES_2026.fullInterior2500} and a 2,500 sq ft two-story exterior runs ${PRICES_2026.exterior2500TwoStory}. We carry $2M general liability + workers' comp and give a 5-year workmanship warranty. For a free estimate, call (346) 594-5960 or request one online.`}
          aboutCity={`Richmond is the Fort Bend County seat, and its housing ranges from older homes near the historic downtown to newer master-planned communities such as Harvest Green, Long Meadow Farms, and Veranda. The two need different work: older homes usually have more wood siding and trim to check for rot before paint, while newer homes are often ready to replace flat builder-grade interior paint with a washable finish.

Richmond sits along the Brazos River and has the same Gulf Coast climate as the rest of Greater Houston: heat, humidity, and heavy rain. Exterior paint holds up when it goes on clean, dry, primed surfaces, so every exterior estimate lists the washing, scraping, caulking, and priming we will do.

Many Richmond communities have HOAs that review exterior colors. We can pull your community's approved color list and help with the approval paperwork before work starts. Homes built before 1978 may contain lead paint, which federal rules require be disturbed only by an EPA-certified renovation firm, so ask any painter about that before work on an older home begins.`}
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
              title: "Interior Painting Richmond",
              description: "Walls, ceilings, trim, and doors, from a single room to a whole-home repaint.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior Painting Richmond",
              description: "Wash, scrape, caulk, and prime before the finish coats on siding, trim, and brick.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing Richmond",
              description: "Sprayed cabinet finishes that update a kitchen without replacing the cabinets.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair Richmond",
              description: "Cracks, nail pops, and settling damage repaired and texture-matched before painting.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing Richmond",
              description: "Cleaning for driveways, sidewalks, and exteriors, and the first step before exterior paint.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick Richmond",
              description: "Limewash or painted brick for Richmond brick homes, priced after an on-site look.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting Richmond",
              description: "Painting for Richmond businesses and commercial properties.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy Richmond",
              description: "Garage floor epoxy is handled by our separate epoxy brand, Houston Superior Epoxy.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Pecan Grove",
            "Long Meadow Farms",
            "Greatwood",
            "Brazos Town Center",
            "Lakes of Bella Terra",
            "Harvest Green",
            "Richmond Heights",
            "Historic Richmond",
            "Veranda",
            "Williams Ranch",
            "Colony Creek",
          ]}
          faqs={[
            {
              question: "How much does it cost to paint a house in Richmond?",
              answer: `In 2026 interior painting typically costs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exteriors run ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. Your free written estimate gives the exact price.`
            },
            {
              question: "Do you serve all of Richmond?",
              answer: "Yes. We paint homes across Richmond, including Pecan Grove, Long Meadow Farms, Greatwood, Harvest Green, Veranda, and historic downtown. Call (346) 594-5960 or request an estimate online to confirm your address."
            },
            {
              question: "Do you work with Richmond HOAs?",
              answer: "Yes. We can pull your community's approved color list and help with the approval paperwork before any exterior work starts, and we can send a certificate of insurance to your HOA."
            },
            {
              question: "What paint do you use for Richmond exteriors?",
              answer: "Sherwin-Williams or Benjamin Moore exterior paints suited to heat, humidity, and mildew, such as Sherwin-Williams Duration or SuperPaint. Our 5-year warranty covers peeling, blistering, and flaking caused by our workmanship."
            },
            {
              question: "How long does a paint job take?",
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
