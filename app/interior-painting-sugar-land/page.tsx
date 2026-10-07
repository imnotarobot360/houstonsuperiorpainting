import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Interior Painting Sugar Land, TX | Free Estimate",
  description: "Interior painting in Sugar Land, TX: walls, ceilings, trim and doors. Free written estimate, fully insured, 5-year workmanship warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/interior-painting-sugar-land",
  },
}

export default function InteriorPaintingSugarLandPage() {
  return (
    <GeoServicePageTemplate
      service="Interior Painting"
      serviceSlug="interior-painting"
      zone="Sugar Land, TX"
      zoneSlug="sugar-land"
      metaTitle="Interior Painting Sugar Land, TX | Free Estimate"
      metaDescription="Interior painting in Sugar Land, TX: walls, ceilings, trim and doors. Free written estimate, fully insured, 5-year workmanship warranty."
      h1="Interior Painting in Sugar Land, TX"
      heroSubheading="Walls, ceilings, trim and doors painted with careful prep, protected floors and furniture, and a 5-year written workmanship warranty."
      introLocal="Sugar Land runs from older neighborhoods to master-planned communities such as First Colony, Riverstone and Sweetwater, so wall condition varies a lot from house to house. In a home built before 1978, older layers may contain lead paint, and federal rules require that it be disturbed only by an EPA-certified renovation firm, so ask any painter you hire for that certification before sanding or scraping."
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
          question: "How much does interior painting cost in Sugar Land?",
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
          quote: "They transformed our Riverstone home beautifully. Professional crew, excellent communication, and the finish is flawless.",
          name: "Lisa & Tom W.",
          location: "Riverstone"
        },
        {
          quote: "Best painters we've ever hired. The daily updates and attention to detail made all the difference.",
          name: "Priya S.",
          location: "Sweetwater"
        },
        {
          quote: "They handled everything with our HOA and delivered a perfect result. Highly recommend.",
          name: "James K.",
          location: "First Colony"
        }
      ]}
      relatedPages={[
        { title: "Interior painting cost guide", href: "/interior-painting-cost-houston" },
        { title: "Drywall repair", href: "/drywall-repair-houston-tx" },
        { title: "Cabinet refinishing in Sugar Land", href: "/cabinet-refinishing-sugar-land" },
        { title: "Exterior painting in Sugar Land", href: "/exterior-painting-sugar-land" },
        { title: "Interior painting in Cypress & Bridgeland", href: "/interior-painting-cypress-bridgeland" },
        { title: "Interior painting in Katy & Cinco Ranch", href: "/interior-painting-katy-cinco-ranch" },
        { title: "Painters in Sugar Land, TX (Sugar Land office)", href: "/painters-sugar-land-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Workmanship"
    />
  )
}
