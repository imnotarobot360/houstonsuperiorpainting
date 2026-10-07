import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Interior Painting Katy & Cinco Ranch, TX | Free Estimate",
  description: "Interior painting in Katy and Cinco Ranch, TX: walls, ceilings, trim and doors. Free written estimate, fully insured, 5-year workmanship warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/interior-painting-katy-cinco-ranch",
  },
}

export default function InteriorPaintingKatyPage() {
  return (
    <GeoServicePageTemplate
      service="Interior Painting"
      serviceSlug="interior-painting"
      zone="Katy & Cinco Ranch, TX"
      zoneSlug="katy-cinco-ranch"
      metaTitle="Interior Painting Katy & Cinco Ranch, TX | Free Estimate"
      metaDescription="Interior painting in Katy and Cinco Ranch, TX: walls, ceilings, trim and doors. Free written estimate, fully insured, 5-year workmanship warranty."
      h1="Interior Painting in Katy and Cinco Ranch, TX"
      heroSubheading="Walls, ceilings, trim and doors painted with careful prep, protected floors and furniture, and a 5-year written workmanship warranty."
      introLocal="Much of the area, including Cinco Ranch, Cross Creek Ranch and Elyson, is two-story suburban housing, often with tall family rooms and open stairwells. Those high walls need taller ladders or scaffolding and careful cut lines where colors meet, and we price that access into the written estimate up front."
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
          question: "How much does interior painting cost in Katy?",
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
          quote: "They did an amazing job on our Cinco Ranch home. Professional, on time, and the results are beautiful.",
          name: "Michelle & David R.",
          location: "Cinco Ranch"
        },
        {
          quote: "Great experience from estimate to completion. The crew was courteous and cleaned up perfectly every day.",
          name: "Brandon T.",
          location: "Cross Creek Ranch"
        },
        {
          quote: "Our 15-year-old home looks brand new. The attention to prep work made all the difference.",
          name: "Sandra L.",
          location: "Firethorne"
        }
      ]}
      relatedPages={[
        { title: "Interior painting cost guide", href: "/interior-painting-cost-houston" },
        { title: "Drywall repair", href: "/drywall-repair-houston-tx" },
        { title: "Cabinet refinishing in Katy & Cinco Ranch", href: "/cabinet-refinishing-katy-cinco-ranch" },
        { title: "Exterior painting in Katy & Cinco Ranch", href: "/exterior-painting-katy-cinco-ranch" },
        { title: "Interior painting in Cypress & Bridgeland", href: "/interior-painting-cypress-bridgeland" },
        { title: "Interior painting in Sugar Land", href: "/interior-painting-sugar-land" },
        { title: "Painters in Katy, TX (Katy office)", href: "/painters-katy-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Workmanship"
    />
  )
}
