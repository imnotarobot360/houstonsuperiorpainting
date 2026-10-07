import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Memorial Interior Painting | Houston Superior Painting",
  description: "Interior painting in Memorial, Houston: walls, ceilings, trim and doors, with prep done first. Free written estimate. Insured, 5-year warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/interior-painting-memorial",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Memorial Interior Painting | Houston Superior Painting",
    description: "Interior painting in Memorial, Houston: walls, ceilings, trim and doors, with prep done first. Free written estimate. Insured, 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/interior-painting-memorial",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function InteriorPaintingMemorialPage() {
  return (
    <GeoServicePageTemplate
      service="Interior Painting"
      serviceSlug="interior-painting"
      zone="Memorial, Houston, TX"
      zoneSlug="memorial"
      metaTitle={"Memorial Interior Painting | Houston Superior Painting"}
      metaDescription={"Interior painting in Memorial, Houston: walls, ceilings, trim and doors, with prep done first. Free written estimate. Insured, 5-year warranty."}
      h1={"Interior Painting in Memorial, Houston, TX"}
      heroSubheading={"Interior painting for Memorial homes, with the patching, caulking and priming done before paint goes on, and a 5-year written warranty."}
      introLocal={"Memorial mixes older ranch-style and traditional homes with large newer rebuilds, and includes the separate Memorial Villages such as Hunters Creek, Piney Point and Bunker Hill. Older homes usually need more repair before painting (cracked drywall or plaster, gaps at trim, old oil-based finishes), while newer homes tend to have tall ceilings, detailed millwork and open stairwells. You can see a whole-home interior repaint we completed in Memorial further down this page."}
      serviceOverview={"Interior painting in Memorial covers walls, ceilings, trim, doors and closets. Prep comes first: furniture moved or covered, floors protected, holes and cracks patched, gaps caulked and stains spot-primed. We apply Sherwin-Williams or Benjamin Moore paint, and the product line and sheen for each surface are listed on your written estimate. The schedule is also set in writing before work starts, and every job carries our 5-year written workmanship warranty."}
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
          question: "How much does interior painting cost in Memorial?",
          answer: `Our published pricing is ${PRICES_2026.fullInterior2500} for a whole-home interior of about 2,500 sq ft and ${PRICES_2026.singleRoom} for a single room. Ceiling height, trim, color changes and wall repairs move the price within those ranges, and your exact price is set in a free written estimate.`,
        },
        {
          question: "Do I need to move out during an interior repaint?",
          answer: "Usually not. We can work in sections so the rest of the house stays usable, and floors and furniture in the rooms being painted are protected.",
        },
        {
          question: "My home is older. Is lead paint a concern?",
          answer: "It can be. Homes built before 1978 may contain lead paint, and federal rules require that it be disturbed only by an EPA-certified renovation firm, so ask any painter you are considering for their certification. If your home is that old, mention it when you request an estimate so it can be planned for.",
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
          quote: "They prepped my Memorial home better than the previous painter — and it shows two years later. The foreman sent me daily photos which was a huge relief while I was at work.",
          name: "Catherine M.",
          location: "Hunters Creek Village"
        },
        {
          quote: "We've used Houston Superior Painting on two interior painting projects now in Memorial. Both times: on schedule, on budget, and the finish quality matched what we'd expect from a custom builder.",
          name: "David & Lauren P.",
          location: "Memorial Park"
        },
        {
          quote: "What sold me was their preparation. Every other painter walked in with a price. Houston Superior walked in with a plan.",
          name: "Marcus T.",
          location: "Bunker Hill"
        }
      ]}
      relatedPages={[
        { title: "Interior Painting Houston", href: "/interior-painting-houston-tx" },
        { title: "Exterior Painting Memorial", href: "/exterior-painting-memorial" },
        { title: "Cabinet Refinishing Memorial", href: "/cabinet-refinishing-memorial" },
        { title: "Painters in Memorial", href: "/painters-memorial-tx" },
        { title: "Interior Painting Tanglewood", href: "/interior-painting-tanglewood" },
        { title: "Interior Painting Bellaire & West University", href: "/interior-painting-bellaire-west-university" },
        { title: "Interior Painting The Heights", href: "/interior-painting-the-heights" },
      ]}
      warrantyYears={5}
      warrantyType="Interior"
    />
  )
}
