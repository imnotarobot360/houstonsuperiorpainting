import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Exterior Painting Katy & Cinco Ranch, TX | Free Estimate",
  description: "Exterior house painting in Katy and Cinco Ranch, TX: washing, caulking, wood rot repair and priming. Fully insured, 5-year written warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/exterior-painting-katy-cinco-ranch",
  },
}

export default function ExteriorPaintingKatyPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="Katy & Cinco Ranch, TX"
      zoneSlug="katy-cinco-ranch"
      metaTitle="Exterior Painting Katy & Cinco Ranch, TX | Free Estimate"
      metaDescription="Exterior house painting in Katy and Cinco Ranch, TX: washing, caulking, wood rot repair and priming. Fully insured, 5-year written warranty."
      h1="Exterior Painting in Katy and Cinco Ranch, TX"
      heroSubheading="Exterior repaints prepped for Houston heat and humidity: washed, caulked, repaired and primed before the finish coats, with a 5-year written workmanship warranty."
      introLocal="Many homes in Cinco Ranch, Cross Creek Ranch, Elyson and the rest of Katy are brick on the lower floor with siding and trim above, so an exterior repaint here is mostly siding, trim, soffits, fascia and doors. Most of these communities have HOAs that require color approval before work starts. Houston's humidity and summer heat are hard on exterior paint everywhere in the region, which is why prep matters more than the paint can."
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
          question: "How much does exterior painting cost in Katy?",
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
          quote: "They did an amazing job on our Cinco Ranch home. The prep work and finish quality exceeded our expectations.",
          name: "Michelle & David R.",
          location: "Cinco Ranch"
        },
        {
          quote: "Our 15-year-old home looks brand new. The 5-year warranty gave us confidence.",
          name: "Brandon T.",
          location: "Cross Creek Ranch"
        },
        {
          quote: "Professional, on time, and outstanding results. Highly recommend for any Katy homeowner.",
          name: "Sandra L.",
          location: "Firethorne"
        }
      ]}
      relatedPages={[
        { title: "Exterior painting cost guide", href: "/exterior-house-painting-houston-cost-guide" },
        { title: "Wood rot repair", href: "/wood-rot-repair-houston-tx" },
        { title: "Soft washing", href: "/soft-washing-houston-tx" },
        { title: "Limewash and brick painting", href: "/limewash-brick-painting-houston-tx" },
        { title: "Exterior painting in Cypress & Bridgeland", href: "/exterior-painting-cypress-bridgeland" },
        { title: "Exterior painting in Sugar Land", href: "/exterior-painting-sugar-land" },
        { title: "Painters in Katy, TX (Katy office)", href: "/painters-katy-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Workmanship"
    />
  )
}
