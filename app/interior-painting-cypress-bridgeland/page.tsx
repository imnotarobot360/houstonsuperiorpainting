import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Interior Painting Cypress & Bridgeland, TX | Free Estimate",
  description: "Interior painting in Cypress and Bridgeland, TX: walls, ceilings, trim and doors. Free written estimate, fully insured, 5-year workmanship warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/interior-painting-cypress-bridgeland",
  },
}

export default function InteriorPaintingCypressPage() {
  return (
    <GeoServicePageTemplate
      service="Interior Painting"
      serviceSlug="interior-painting"
      zone="Cypress & Bridgeland, TX"
      zoneSlug="cypress-bridgeland"
      metaTitle="Interior Painting Cypress & Bridgeland, TX | Free Estimate"
      metaDescription="Interior painting in Cypress and Bridgeland, TX: walls, ceilings, trim and doors. Free written estimate, fully insured, 5-year workmanship warranty."
      h1="Interior Painting in Cypress and Bridgeland, TX"
      heroSubheading="Walls, ceilings, trim and doors painted with careful prep, protected floors and furniture, and a 5-year written workmanship warranty."
      introLocal="Houston Superior Painting is headquartered in Cypress, so Bridgeland, Towne Lake, Fairfield and the rest of the Cypress area are close to home for our crews. Many homes here are newer builds in master-planned communities, and builders often use a flat wall paint that scuffs easily and doesn't wipe clean. The first repaint is a good time to move kitchens, halls and kids' rooms to a more washable sheen."
      serviceOverview="An interior job covers the walls, ceilings, trim and doors you choose. We move and cover furniture, protect floors, fill nail pops and drywall cracks, caulk open trim joints and spot-prime repairs before the finish coats go on, using Sherwin-Williams or Benjamin Moore paint. Your written estimate lists the rooms, surfaces, product, sheen and schedule."
      whyChooseUs={[
        "Founded in 2019 by owner Juan Serra and headquartered in Cypress, TX.",
        "Prep is written into the estimate: patching, caulking and spot-priming, not just the finish coats.",
        "Furniture moved or covered, floors protected and work areas cleaned each day.",
        `Insured: ${BUSINESS.trust.liabilityCoverage} general liability plus workers' comp.`,
        "5-year written workmanship warranty.",
        "No upfront payment: the estimate is free and nothing is due until you approve it in writing."
      ]}
      priceDetails={`For a whole home, about ${PRICES_2026.interiorPerSqFt} per square foot of floor area is a reasonable rule of thumb. Ceiling height, how much trim and how many doors are included, color changes and drywall repair move the number, and your free written estimate itemizes it.`}
      faqs={[
        {
          question: "How much does interior painting cost in Cypress?",
          answer: `A whole-home interior of about 2,500 sq ft typically runs ${PRICES_2026.fullInterior2500}, and a single room ${PRICES_2026.singleRoom}. These are our published 2026 Greater Houston ranges; your written estimate is free and itemized after we see the home.`,
        },
        {
          question: "How long does an interior repaint take?",
          answer: "It depends on the size of the home, which surfaces are included and how much repair the walls need. A single room is often done in a day; a whole home takes longer. The schedule is written into your estimate.",
        },
        {
          question: "Do I need to move out while you paint?",
          answer: "No. We work room by room, protect floors and furniture, and clean up the work areas at the end of each day, so most homeowners stay in the house.",
        },
        {
          question: "What paint do you use?",
          answer: "Sherwin-Williams and Benjamin Moore. The product and sheen are matched to the room: more washable finishes for kitchens, baths, halls and kids' rooms, flat finishes for ceilings. The exact product is listed on your estimate.",
        },
        {
          question: "What warranty do you give?",
          answer: "Every interior job comes with a 5-year written workmanship warranty. The full warranty terms are included with your written estimate, so you can read them before you approve the work.",
        },
        {
          question: "When do I pay?",
          answer: "The estimate is free, and nothing is due until you approve the written estimate. A down payment is collected at that point, and the balance is due after the final walkthrough.",
        }
      ]}
      testimonials={[
        {
          quote: "Outstanding work on our Bridgeland home. They were professional, efficient, and the finish is perfect.",
          name: "Rachel & Mark H.",
          location: "Bridgeland"
        },
        {
          quote: "Best painting experience we've had. The team was respectful of our home and delivered excellent results.",
          name: "Kevin P.",
          location: "Towne Lake"
        },
        {
          quote: "They transformed our builder-grade walls into something special. Highly recommend.",
          name: "Amy J.",
          location: "Fairfield"
        }
      ]}
      relatedPages={[
        { title: "Interior painting cost guide", href: "/interior-painting-cost-houston" },
        { title: "Drywall repair", href: "/drywall-repair-houston-tx" },
        { title: "Cabinet refinishing in Cypress & Bridgeland", href: "/cabinet-refinishing-cypress-bridgeland" },
        { title: "Exterior painting in Cypress & Bridgeland", href: "/exterior-painting-cypress-bridgeland" },
        { title: "Interior painting in Katy & Cinco Ranch", href: "/interior-painting-katy-cinco-ranch" },
        { title: "Interior painting in Sugar Land", href: "/interior-painting-sugar-land" },
        { title: "Painters in Cypress, TX (headquarters)", href: "/painters-cypress-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Workmanship"
    />
  )
}
