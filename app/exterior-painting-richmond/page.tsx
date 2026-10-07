import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Exterior Painting Richmond TX | Houston Superior Painting",
  description: "Exterior house painting in Richmond, TX: wash, repair, caulk, prime and paint siding and trim. Free written estimate. Insured, 5-year warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/exterior-painting-richmond",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Exterior Painting Richmond TX | Houston Superior Painting",
    description: "Exterior house painting in Richmond, TX: wash, repair, caulk, prime and paint siding and trim. Free written estimate. Insured, 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/exterior-painting-richmond",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function ExteriorPaintingRichmondPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="Richmond"
      zoneSlug="richmond"
      metaTitle={"Exterior Painting Richmond TX | Houston Superior Painting"}
      metaDescription={"Exterior house painting in Richmond, TX: wash, repair, caulk, prime and paint siding and trim. Free written estimate. Insured, 5-year warranty."}
      h1={"Exterior House Painters in Richmond, TX"}
      heroSubheading={"Exterior painting for Richmond homes, with the washing, wood repair and caulking that Houston's heat, humidity and storms make necessary."}
      introLocal={"Richmond has everything from older frame houses near the historic downtown to brick-and-siding homes in master-planned communities such as Pecan Grove, Greatwood and Long Meadow Farms. On most of these homes paint fails first where water and sun hit hardest: fascia, window trim, the bottoms of siding boards and the south- and west-facing walls. We check those areas before quoting and price any repairs into the written estimate, rather than painting over soft wood or open joints."}
      serviceOverview={"Exterior painting in Richmond includes washing the house, scraping loose paint, repairing or replacing rotted wood, caulking open joints, spot-priming bare areas and applying the finish coats to siding, trim, doors and fascia. Plants, walkways and windows are covered while we work. We use Sherwin-Williams and Benjamin Moore exterior paints, with the product listed on your written estimate, and every job carries our 5-year written workmanship warranty."}
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
          question: "How much does exterior painting cost in Richmond?",
          answer: `Our published range for a typical whole-house exterior is ${PRICES_2026.exteriorPerHome}, and a 2,500 sq ft two-story typically runs ${PRICES_2026.exterior2500TwoStory}. Siding type, number of stories, wood repair and trim detail decide where your home falls, and your exact price is set in a free written estimate.`,
        },
        {
          question: "Does my HOA need to approve the color?",
          answer: "Many Richmond communities, including master-planned ones like Pecan Grove and Long Meadow Farms, have HOA rules on exterior colors. Check your HOA's guidelines before you choose. We can give you the exact color names and product information to include with your application.",
        },
        {
          question: "Can you paint brick or stucco?",
          answer: "Yes. Brick and stucco need masonry primers and paints, and painted brick is hard to reverse, so we talk through solid paint versus limewash before you decide.",
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
          quote: "They transformed our Pecan Grove home. The prep work was thorough and the paint has held up beautifully.",
          name: "Robert & Janet H.",
          location: "Pecan Grove"
        },
        {
          quote: "Professional from start to finish. Our home looks amazing and the price was fair.",
          name: "Michelle T.",
          location: "Long Meadow Farms"
        },
        {
          quote: "Great communication, quality work, and they protected our landscaping perfectly.",
          name: "David K.",
          location: "Greatwood"
        }
      ]}
      relatedPages={[
        { title: "Exterior Painting Houston", href: "/exterior-painting-houston-tx" },
        { title: "Interior Painting Richmond", href: "/interior-painting-richmond" },
        { title: "Painters in Richmond", href: "/painters-richmond-tx" },
        { title: "Exterior Painting Sugar Land", href: "/exterior-painting-sugar-land" },
        { title: "Exterior Painting Fulshear", href: "/exterior-painting-fulshear" },
        { title: "Exterior Painting Katy & Cinco Ranch", href: "/exterior-painting-katy-cinco-ranch" },
        { title: "Pressure Washing", href: "/pressure-washing-houston-tx" },
        { title: "Wood Rot Repair", href: "/wood-rot-repair-houston-tx" },
      ]}
      warrantyYears={5}
      warrantyType="Exterior"
    />
  )
}
