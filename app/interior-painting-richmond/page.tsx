import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Interior Painting Richmond TX | Houston Superior Painting",
  description: "Interior painting in Richmond, TX: walls, ceilings, trim and doors. Free written estimate, nothing due until you approve. Insured, 5-year warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/interior-painting-richmond",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Interior Painting Richmond TX | Houston Superior Painting",
    description: "Interior painting in Richmond, TX: walls, ceilings, trim and doors. Free written estimate, nothing due until you approve. Insured, 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/interior-painting-richmond",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function InteriorPaintingRichmondPage() {
  return (
    <GeoServicePageTemplate
      service="Interior Painting"
      serviceSlug="interior-painting"
      zone="Richmond"
      zoneSlug="richmond"
      metaTitle={"Interior Painting Richmond TX | Houston Superior Painting"}
      metaDescription={"Interior painting in Richmond, TX: walls, ceilings, trim and doors. Free written estimate, nothing due until you approve. Insured, 5-year warranty."}
      h1={"Interior Painters in Richmond, TX"}
      heroSubheading={"Interior painting for Richmond homes, from older houses near the historic downtown to newer builds in communities like Pecan Grove, Greatwood and Long Meadow Farms."}
      introLocal={"Richmond mixes older homes near its historic downtown with newer houses in master-planned communities such as Pecan Grove, Greatwood and Long Meadow Farms. Older homes often need more prep before paint goes on: settled cracks patched, gaps at trim caulked and stains primed. Newer homes often have flat builder-grade paint that scuffs easily and benefits from a more washable finish. We look at the walls before quoting, so the estimate reflects the prep your home actually needs."}
      serviceOverview={"Interior painting in Richmond covers walls, ceilings, trim, doors and closets. Prep comes first: furniture moved or covered, floors protected, holes and cracks patched, gaps caulked and stains spot-primed. We apply Sherwin-Williams or Benjamin Moore paint, and the product line and sheen for each surface are listed on your written estimate. The schedule is also set in writing before work starts, and every job carries our 5-year written workmanship warranty."}
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
          question: "How much does interior painting cost in Richmond?",
          answer: `Our published pricing is ${PRICES_2026.fullInterior2500} for a whole-home interior of about 2,500 sq ft and ${PRICES_2026.singleRoom} for a single room. Ceiling height, trim, color changes and wall repairs move the price within those ranges, and your exact price is set in a free written estimate.`,
        },
        {
          question: "How long does an interior repaint take?",
          answer: "It depends on the number of rooms, ceiling height, trim and how much repair the walls need. The schedule is set in your written estimate before work starts, so you can plan around it.",
        },
        {
          question: "What paint do you use?",
          answer: "We use Sherwin-Williams and Benjamin Moore paints. The product line and sheen for each surface are written into your estimate, so you know exactly what is going on your home.",
        },
        {
          question: "My home is older. Is lead paint a concern?",
          answer: "It can be. Homes built before 1978 may contain lead paint, and federal rules require that it be disturbed only by an EPA-certified renovation firm, so ask any painter you are considering for their certification. If your home is that old, mention it when you request an estimate so it can be planned for.",
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
          quote: "They transformed our 20-year-old Pecan Grove home. The prep work made all the difference — it looks brand new.",
          name: "Carlos & Maria G.",
          location: "Pecan Grove"
        },
        {
          quote: "Professional, on time, and excellent results. We've already recommended them to neighbors.",
          name: "Jennifer S.",
          location: "Long Meadow Farms"
        },
        {
          quote: "Great experience from estimate to completion. Very reasonable pricing for the quality.",
          name: "Thomas R.",
          location: "Greatwood"
        }
      ]}
      relatedPages={[
        { title: "Interior Painting Houston", href: "/interior-painting-houston-tx" },
        { title: "Exterior Painting Richmond", href: "/exterior-painting-richmond" },
        { title: "Painters in Richmond", href: "/painters-richmond-tx" },
        { title: "Interior Painting Sugar Land", href: "/interior-painting-sugar-land" },
        { title: "Interior Painting Fulshear", href: "/interior-painting-fulshear" },
        { title: "Interior Painting Katy & Cinco Ranch", href: "/interior-painting-katy-cinco-ranch" },
        { title: "Cabinet Refinishing Houston", href: "/cabinet-refinishing-houston-tx" },
      ]}
      warrantyYears={5}
      warrantyType="Interior"
    />
  )
}
