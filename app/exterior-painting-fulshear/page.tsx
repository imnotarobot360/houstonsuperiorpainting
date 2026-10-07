import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Exterior Painting Fulshear TX | Houston Superior Painting",
  description: "Exterior house painting in Fulshear, TX: siding, trim, stucco and brick, with color info for your HOA. Free written estimate. 5-year warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/exterior-painting-fulshear",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Exterior Painting Fulshear TX | Houston Superior Painting",
    description: "Exterior house painting in Fulshear, TX: siding, trim, stucco and brick, with color info for your HOA. Free written estimate. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/exterior-painting-fulshear",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function ExteriorPaintingFulshearPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="Fulshear"
      zoneSlug="fulshear"
      metaTitle={"Exterior Painting Fulshear TX | Houston Superior Painting"}
      metaDescription={"Exterior house painting in Fulshear, TX: siding, trim, stucco and brick, with color info for your HOA. Free written estimate. 5-year warranty."}
      h1={"Exterior House Painters in Fulshear, TX"}
      heroSubheading={"Exterior painting for Fulshear homes, prepared for Houston's sun, humidity and storms and planned around your HOA's color rules."}
      introLocal={"Fulshear's master-planned communities, including Cross Creek Ranch, Fulbrook and Jordan Ranch, typically have HOA guidelines for exterior colors, so the color decision usually starts with your HOA's approved palette or application process. Many homes here combine fiber-cement siding, stucco, brick or stone, and each surface needs its own prep and primer. Even on newer homes, caulk at trim and window joints shrinks and opens up in the heat, which is where water gets in."}
      serviceOverview={"Exterior painting in Fulshear includes washing the house, scraping loose paint, repairing or replacing rotted wood, caulking open joints, spot-priming bare areas and applying the finish coats to siding, trim, doors and fascia. Plants, walkways and windows are covered while we work. We use Sherwin-Williams and Benjamin Moore exterior paints, with the product listed on your written estimate, and every job carries our 5-year written workmanship warranty."}
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
          question: "How much does exterior painting cost in Fulshear?",
          answer: `Our published range for a typical whole-house exterior is ${PRICES_2026.exteriorPerHome}, and a 2,500 sq ft two-story typically runs ${PRICES_2026.exterior2500TwoStory}. Siding type, number of stories, wood repair and trim detail decide where your home falls, and your exact price is set in a free written estimate.`,
        },
        {
          question: "Do you help with HOA color approval?",
          answer: "Check your HOA's exterior color guidelines before you choose. We can give you the exact color names and product information to include with your application, and we schedule the work after the colors are approved.",
        },
        {
          question: "Can you paint stucco, stone and fiber-cement on the same house?",
          answer: "Yes. Mixed exteriors are common in Fulshear. Each surface gets the prep and primer it needs, and stone is usually left unpainted unless you want it coated.",
        },
        {
          question: "How long does an exterior repaint take?",
          answer: "It depends on the size of the house, the number of stories, how much wood repair is needed and the weather. The schedule is set in your written estimate, and rain days move it back because paint should not go on wet surfaces.",
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
          quote: "Outstanding work on our Cross Creek Ranch home. They navigated the HOA process smoothly and the results are beautiful.",
          name: "Michael & Lisa D.",
          location: "Cross Creek Ranch"
        },
        {
          quote: "Professional crew, excellent communication, and the quality is exceptional. Highly recommend.",
          name: "Patricia W.",
          location: "Fulbrook"
        },
        {
          quote: "They transformed our home's curb appeal. The neighbors have been asking for their number.",
          name: "James T.",
          location: "Weston Lakes"
        }
      ]}
      relatedPages={[
        { title: "Exterior Painting Houston", href: "/exterior-painting-houston-tx" },
        { title: "Interior Painting Fulshear", href: "/interior-painting-fulshear" },
        { title: "Painters in Fulshear", href: "/painters-fulshear-tx" },
        { title: "Exterior Painting Katy & Cinco Ranch", href: "/exterior-painting-katy-cinco-ranch" },
        { title: "Exterior Painting Richmond", href: "/exterior-painting-richmond" },
        { title: "Exterior Painting Sugar Land", href: "/exterior-painting-sugar-land" },
        { title: "Stucco Painting & Repair", href: "/stucco-painting-houston-tx" },
      ]}
      warrantyYears={5}
      warrantyType="Exterior"
    />
  )
}
