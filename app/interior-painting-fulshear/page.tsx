import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Interior Painting Fulshear TX | Houston Superior Painting",
  description: "Interior painting in Fulshear, TX, from Cross Creek Ranch to Fulbrook. Free written estimate, nothing due until you approve. Insured, 5-year warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/interior-painting-fulshear",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Interior Painting Fulshear TX | Houston Superior Painting",
    description: "Interior painting in Fulshear, TX, from Cross Creek Ranch to Fulbrook. Free written estimate, nothing due until you approve. Insured, 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/interior-painting-fulshear",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function InteriorPaintingFulshearPage() {
  return (
    <GeoServicePageTemplate
      service="Interior Painting"
      serviceSlug="interior-painting"
      zone="Fulshear"
      zoneSlug="fulshear"
      metaTitle={"Interior Painting Fulshear TX | Houston Superior Painting"}
      metaDescription={"Interior painting in Fulshear, TX, from Cross Creek Ranch to Fulbrook. Free written estimate, nothing due until you approve. Insured, 5-year warranty."}
      h1={"Interior Painters in Fulshear, TX"}
      heroSubheading={"Interior painting for Fulshear homes, from newer builds in Cross Creek Ranch and Jordan Ranch to established homes in Fulbrook and Weston Lakes."}
      introLocal={"Much of Fulshear's housing is newer construction in master-planned communities such as Cross Creek Ranch, Jordan Ranch and Fulbrook on Fulshear Creek. Newer homes commonly have flat builder-grade paint that marks easily, plus nail pops and corner cracks as the house settles in its first few years. A repaint is a good time to fix those and move to a more washable finish in kitchens, hallways and kids' rooms. Open-plan homes with tall ceilings and stairwells also need extension equipment or scaffolding, which we account for in the estimate."}
      serviceOverview={"Interior painting in Fulshear covers walls, ceilings, trim, doors and closets. Prep comes first: furniture moved or covered, floors protected, holes and cracks patched, gaps caulked and stains spot-primed. We apply Sherwin-Williams or Benjamin Moore paint, and the product line and sheen for each surface are listed on your written estimate. The schedule is also set in writing before work starts, and every job carries our 5-year written workmanship warranty."}
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
          question: "How much does interior painting cost in Fulshear?",
          answer: `Our published pricing is ${PRICES_2026.fullInterior2500} for a whole-home interior of about 2,500 sq ft and ${PRICES_2026.singleRoom} for a single room. Ceiling height, trim, color changes and wall repairs move the price within those ranges, and your exact price is set in a free written estimate.`,
        },
        {
          question: "Can you fix nail pops and settling cracks in a newer home?",
          answer: "Yes. Nail pops, corner cracks and small dings are patched, sanded and primed before painting, and that prep is listed in your written estimate.",
        },
        {
          question: "Can you paint two-story foyers and stairwells?",
          answer: "Yes. High walls and stairwells need extension equipment or scaffolding, which is accounted for in your estimate.",
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
          quote: "They did an exceptional job on our Cross Creek Ranch home. Professional crew, beautiful results.",
          name: "Amanda & Chris B.",
          location: "Cross Creek Ranch"
        },
        {
          quote: "Our builder's paint job was disappointing. Houston Superior Painting made it right — our home finally looks the way it should.",
          name: "Kevin M.",
          location: "Fulbrook"
        },
        {
          quote: "Quality work at a fair price. The prep work was thorough and the finish is perfect.",
          name: "Sarah L.",
          location: "Weston Lakes"
        }
      ]}
      relatedPages={[
        { title: "Interior Painting Houston", href: "/interior-painting-houston-tx" },
        { title: "Exterior Painting Fulshear", href: "/exterior-painting-fulshear" },
        { title: "Painters in Fulshear", href: "/painters-fulshear-tx" },
        { title: "Interior Painting Katy & Cinco Ranch", href: "/interior-painting-katy-cinco-ranch" },
        { title: "Interior Painting Richmond", href: "/interior-painting-richmond" },
        { title: "Interior Painting Sugar Land", href: "/interior-painting-sugar-land" },
        { title: "Cabinet Refinishing Houston", href: "/cabinet-refinishing-houston-tx" },
      ]}
      warrantyYears={5}
      warrantyType="Interior"
    />
  )
}
