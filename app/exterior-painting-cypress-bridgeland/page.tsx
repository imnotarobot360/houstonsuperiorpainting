import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Exterior Painting Cypress & Bridgeland, TX | Free Estimate",
  description: "Exterior house painting in Cypress and Bridgeland, TX: washing, caulking, wood rot repair and priming. Fully insured, 5-year written warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/exterior-painting-cypress-bridgeland",
  },
}

export default function ExteriorPaintingCypressPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="Cypress & Bridgeland, TX"
      zoneSlug="cypress-bridgeland"
      metaTitle="Exterior Painting Cypress & Bridgeland, TX | Free Estimate"
      metaDescription="Exterior house painting in Cypress and Bridgeland, TX: washing, caulking, wood rot repair and priming. Fully insured, 5-year written warranty."
      h1="Exterior Painting in Cypress and Bridgeland, TX"
      heroSubheading="Exterior repaints prepped for Houston heat and humidity: washed, caulked, repaired and primed before the finish coats, with a 5-year written workmanship warranty."
      introLocal="Houston Superior Painting is headquartered in Cypress, so Bridgeland, Towne Lake, Fairfield and the rest of the Cypress area are close to home for our crews. Many homes here are brick with fiber-cement siding and trim on the upper floors and gables. On those homes the paint usually fails first at the trim: caulk joints open up, and the bottoms of trim boards and garage door frames take on water. Houston's humidity and summer heat are hard on exterior paint everywhere in the region, which is why prep matters more than the paint can."
      serviceOverview="An exterior job starts with washing the house and removing mildew. We scrape loose paint, replace rotted trim where needed, caulk open joints, prime bare wood and repairs, then apply the finish coats with Sherwin-Williams or Benjamin Moore exterior paint. Landscaping, walkways and windows are protected while we work. Your written estimate lists the surfaces, repairs, product and schedule."
      whyChooseUs={[
        "Founded in 2019 by owner Juan Serra and headquartered in Cypress, TX.",
        "Wood rot repair and caulking are written into the estimate alongside the paint work.",
        "Plants, walkways and windows protected; work areas cleaned each day.",
        `Insured: ${BUSINESS.trust.liabilityCoverage} general liability plus workers' comp.`,
        "5-year written workmanship warranty.",
        "No upfront payment: the estimate is free and nothing is due until you approve it in writing."
      ]}
      priceDetails={`Another way to think about it: roughly ${PRICES_2026.exteriorPerSqFt} per square foot of floor area. Number of stories, siding type, the amount of wood rot to repair and how much trim there is all move the price, and your free written estimate itemizes it.`}
      faqs={[
        {
          question: "How much does exterior painting cost in Cypress?",
          answer: `Most whole-house exteriors run ${PRICES_2026.exteriorPerHome}, and a 2,500 sq ft two-story is typically about ${PRICES_2026.exterior2500TwoStory}. These are our published 2026 Greater Houston ranges; your written estimate is free and itemized after we see the house.`,
        },
        {
          question: "Does my HOA need to approve the colors?",
          answer: "In most master-planned communities, yes. Get your HOA's color approval before the job is scheduled. If your HOA has an approved palette, bring it to the estimate and we will quote with those colors.",
        },
        {
          question: "When is the best time to paint an exterior here?",
          answer: "Exterior paint can go on most of the year in the Houston area. What matters is the weather on the day: we don't paint in rain or when rain is expected before the coating dries, and in summer it helps to avoid coating walls in direct midday sun.",
        },
        {
          question: "Do you repair wood rot before painting?",
          answer: "Yes. Rotted trim, fascia and siding boards are replaced before painting, because paint over rot fails quickly. Repairs found during the estimate are written into it.",
        },
        {
          question: "What warranty do you give?",
          answer: "Every exterior job comes with a 5-year written workmanship warranty. The full warranty terms are included with your written estimate, so you can read them before you approve the work.",
        },
        {
          question: "When do I pay?",
          answer: "The estimate is free, and nothing is due until you approve the written estimate. A down payment is collected at that point, and the balance is due after the final walkthrough.",
        }
      ]}
      testimonials={[
        {
          quote: "Outstanding work on our Bridgeland home. Professional crew and the 5-year warranty sealed the deal.",
          name: "Rachel & Mark H.",
          location: "Bridgeland"
        },
        {
          quote: "They handled our HOA requirements and delivered a flawless finish. Highly recommend.",
          name: "Kevin P.",
          location: "Towne Lake"
        },
        {
          quote: "Our home looks brand new. The prep work was thorough and the results speak for themselves.",
          name: "Amy J.",
          location: "Fairfield"
        }
      ]}
      relatedPages={[
        { title: "Exterior painting cost guide", href: "/exterior-house-painting-houston-cost-guide" },
        { title: "Wood rot repair", href: "/wood-rot-repair-houston-tx" },
        { title: "Soft washing", href: "/soft-washing-houston-tx" },
        { title: "Limewash and decorative finishes in Cypress & Bridgeland", href: "/limewash-decorative-finishes-cypress-bridgeland" },
        { title: "Exterior painting in Katy & Cinco Ranch", href: "/exterior-painting-katy-cinco-ranch" },
        { title: "Exterior painting in Sugar Land", href: "/exterior-painting-sugar-land" },
        { title: "Painters in Cypress, TX (headquarters)", href: "/painters-cypress-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Workmanship"
    />
  )
}
