import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "The Woodlands Interior Painting | Houston Superior Painting",
  description: "Interior painting in The Woodlands, TX: walls, ceilings, trim and doors. Free written estimate, nothing due until you approve. 5-year warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/interior-painting-the-woodlands",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "The Woodlands Interior Painting | Houston Superior Painting",
    description: "Interior painting in The Woodlands, TX: walls, ceilings, trim and doors. Free written estimate, nothing due until you approve. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/interior-painting-the-woodlands",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function InteriorPaintingTheWoodlandsPage() {
  return (
    <GeoServicePageTemplate
      service="Interior Painting"
      serviceSlug="interior-painting"
      zone="The Woodlands"
      zoneSlug="the-woodlands"
      metaTitle={"The Woodlands Interior Painting | Houston Superior Painting"}
      metaDescription={"Interior painting in The Woodlands, TX: walls, ceilings, trim and doors. Free written estimate, nothing due until you approve. 5-year warranty."}
      h1={"Interior Painters in The Woodlands, TX"}
      heroSubheading={"Interior painting for homes across The Woodlands' villages, from older homes in Grogan's Mill and Panther Creek to newer builds in Creekside Park."}
      introLocal={"The Woodlands' villages span several decades of construction. Homes in the earlier villages, such as Grogan's Mill and Panther Creek, often have years of touch-ups, older oil-based trim and dated colors, while newer homes in Creekside Park and Sterling Ridge tend to have flat builder-grade paint and tall, open rooms. Oil-based trim needs a bonding primer before it will hold water-based paint, and tall rooms need the right equipment; both are planned for in the written estimate."}
      serviceOverview={"Interior painting in The Woodlands covers walls, ceilings, trim, doors and closets. Prep comes first: furniture moved or covered, floors protected, holes and cracks patched, gaps caulked and stains spot-primed. We apply Sherwin-Williams or Benjamin Moore paint, and the product line and sheen for each surface are listed on your written estimate. The schedule is also set in writing before work starts, and every job carries our 5-year written workmanship warranty."}
      whyChooseUs={[
        "A written estimate that lists the rooms, surfaces, prep and products, so you can compare bids line by line.",
        "Prep before paint: patching, caulking and spot-priming are part of the scope, not extras.",
        "Furniture, floors and fixtures protected, and work areas cleaned at the end of each day.",
        "Sheen matched to each room, with more washable finishes for kitchens, baths and hallways.",
        "Sherwin-Williams and Benjamin Moore paints.",
      ]}
      priceDetails={`Our published range for a whole-home interior of about 2,500 sq ft is ${PRICES_2026.fullInterior2500}. A single room typically runs ${PRICES_2026.singleRoom}, or about ${PRICES_2026.interiorPerSqFt} per square foot of floor area for a whole home. Ceiling height, trim detail, color changes and wall repairs move the price within that range. The written estimate is free.`}
      faqs={[
        {
          question: "How much does interior painting cost in The Woodlands?",
          answer: `Our published pricing is ${PRICES_2026.fullInterior2500} for a whole-home interior of about 2,500 sq ft and ${PRICES_2026.singleRoom} for a single room. Ceiling height, trim, color changes and wall repairs move the price within those ranges, and your exact price is set in a free written estimate.`,
        },
        {
          question: "Can you paint over oil-based trim?",
          answer: "Yes, with the right prep. Glossy oil-based trim is cleaned, scuff-sanded and primed with a bonding primer before the topcoat. Without that step, water-based paint can peel off it.",
        },
        {
          question: "Does interior painting need Design Review Committee approval?",
          answer: "Generally no. The Woodlands' Residential Design Review Committee reviews exterior changes, such as exterior colors. If you are unsure, check with The Woodlands Township before you start.",
        },
        {
          question: "What paint do you use?",
          answer: "We use Sherwin-Williams and Benjamin Moore paints. The product line and sheen for each surface are written into your estimate, so you know exactly what is going on your home.",
        },
        {
          question: "Do I have to pay anything before work starts?",
          answer: `${BUSINESS.paymentPolicy.sentence}`,
        },
        {
          question: "What warranty do you offer?",
          answer: "Every project comes with a 5-year written workmanship warranty, which you receive in writing at the final walkthrough.",
        },
      ]}
      testimonials={[
        {
          quote: "Exceptional work on our Creekside Park home. They handled the 20-foot ceilings and detailed crown molding beautifully.",
          name: "Katherine & James M.",
          location: "Creekside Park"
        },
        {
          quote: "Professional from start to finish. The crew was respectful of our home and the results exceeded our expectations.",
          name: "Robert T.",
          location: "Sterling Ridge"
        },
        {
          quote: "We've used several painters over the years — these guys are by far the best. True craftsmen.",
          name: "Linda P.",
          location: "Alden Bridge"
        }
      ]}
      relatedPages={[
        { title: "Interior Painting Houston", href: "/interior-painting-houston-tx" },
        { title: "Exterior Painting The Woodlands", href: "/exterior-painting-the-woodlands" },
        { title: "Painters in The Woodlands", href: "/painters-the-woodlands-tx" },
        { title: "Interior Painting Cypress & Bridgeland", href: "/interior-painting-cypress-bridgeland" },
        { title: "Interior Painting Memorial", href: "/interior-painting-memorial" },
        { title: "Cabinet Refinishing Houston", href: "/cabinet-refinishing-houston-tx" },
      ]}
      warrantyYears={5}
      warrantyType="Interior"
    />
  )
}
