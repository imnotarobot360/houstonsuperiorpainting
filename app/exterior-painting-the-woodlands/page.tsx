import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "The Woodlands Exterior Painting | Houston Superior Painting",
  description: "Exterior painting in The Woodlands, TX: wood, stucco, brick and fiber-cement, with color info for DRC review. Free estimate. 5-year warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/exterior-painting-the-woodlands",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "The Woodlands Exterior Painting | Houston Superior Painting",
    description: "Exterior painting in The Woodlands, TX: wood, stucco, brick and fiber-cement, with color info for DRC review. Free estimate. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/exterior-painting-the-woodlands",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function ExteriorPaintingTheWoodlandsPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="The Woodlands"
      zoneSlug="the-woodlands"
      metaTitle={"The Woodlands Exterior Painting | Houston Superior Painting"}
      metaDescription={"Exterior painting in The Woodlands, TX: wood, stucco, brick and fiber-cement, with color info for DRC review. Free estimate. 5-year warranty."}
      h1={"Exterior House Painters in The Woodlands, TX"}
      heroSubheading={"Exterior painting for homes under The Woodlands' tree canopy, prepared for shade, moisture and Houston heat, with color information ready for your Design Review Committee application."}
      introLocal={"The Woodlands' heavy tree cover keeps many homes shaded and damp, which encourages mildew, algae and wood rot on siding and trim, especially on the shaded sides of the house. Exterior color changes are reviewed by The Woodlands' Residential Design Review Committee, so settle the color before scheduling. Homes range from wood-sided houses in the earlier villages to brick, stucco and fiber-cement in newer ones, and each surface needs its own prep."}
      serviceOverview={"Exterior painting in The Woodlands includes washing the house, scraping loose paint, repairing or replacing rotted wood, caulking open joints, spot-priming bare areas and applying the finish coats to siding, trim, doors and fascia. Plants, walkways and windows are covered while we work. We use Sherwin-Williams and Benjamin Moore exterior paints, with the product listed on your written estimate, and every job carries our 5-year written workmanship warranty."}
      whyChooseUs={[
        "Washing, scraping, caulking and spot-priming are part of the scope, not add-ons.",
        "Wood repair, if your home needs it, is listed and priced in the written estimate.",
        "Landscaping, walkways and windows covered, and the site cleaned at the end of each day.",
        "Sherwin-Williams and Benjamin Moore exterior paints.",
        "A written estimate that lists surfaces, repairs, prep and products.",
      ]}
      priceDetails={`Our published range for a typical whole-house exterior is ${PRICES_2026.exteriorPerHome}. A 2,500 sq ft two-story typically runs ${PRICES_2026.exterior2500TwoStory}, or about ${PRICES_2026.exteriorPerSqFt} per square foot of floor area. Siding type, number of stories, wood repair and trim detail move the price within that range. The written estimate is free.`}
      faqs={[
        {
          question: "How much does exterior painting cost in The Woodlands?",
          answer: `Our published range for a typical whole-house exterior is ${PRICES_2026.exteriorPerHome}, and a 2,500 sq ft two-story typically runs ${PRICES_2026.exterior2500TwoStory}. Siding type, number of stories, wood repair and trim detail decide where your home falls, and your exact price is set in a free written estimate.`,
        },
        {
          question: "Do I need approval to change my exterior color?",
          answer: "Exterior color changes in The Woodlands go through the Residential Design Review Committee. Check the current requirements with The Woodlands Township before you commit to a color. We can give you the color names and product information for your application.",
        },
        {
          question: "Do you treat mildew before painting?",
          answer: "Yes. Mildew and algae are washed off and treated before painting, because paint applied over them does not bond well and the growth can come back through the new coat.",
        },
        {
          question: "Do you repair wood rot?",
          answer: "Yes. Rotted siding and trim are repaired or replaced and primed before painting, and the repair is listed in your written estimate.",
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
          quote: "They navigated the DRC process smoothly and the color matching was perfect. Our home looks incredible.",
          name: "Michael & Susan K.",
          location: "Sterling Ridge"
        },
        {
          quote: "Outstanding work on our two-story. The prep work was thorough and the finish is flawless.",
          name: "David R.",
          location: "Alden Bridge"
        },
        {
          quote: "Professional, timely, and the results speak for themselves. Highly recommend.",
          name: "Jennifer L.",
          location: "Creekside Park"
        }
      ]}
      relatedPages={[
        { title: "Exterior Painting Houston", href: "/exterior-painting-houston-tx" },
        { title: "Interior Painting The Woodlands", href: "/interior-painting-the-woodlands" },
        { title: "Painters in The Woodlands", href: "/painters-the-woodlands-tx" },
        { title: "Exterior Painting Cypress & Bridgeland", href: "/exterior-painting-cypress-bridgeland" },
        { title: "Wood Rot Repair", href: "/wood-rot-repair-houston-tx" },
        { title: "Pressure Washing", href: "/pressure-washing-houston-tx" },
        { title: "Limewash & Brick Painting Houston", href: "/limewash-brick-painting-houston-tx" },
      ]}
      warrantyYears={5}
      warrantyType="Exterior"
    />
  )
}
