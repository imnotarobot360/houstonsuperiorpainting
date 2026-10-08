import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Memorial Exterior Painting | Houston Superior Painting",
  description: "Exterior painting in Memorial, Houston: wash, wood repair, caulk, prime and paint. Free written estimate. Insured, 5-year written warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/exterior-painting-memorial",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Memorial Exterior Painting | Houston Superior Painting",
    description: "Exterior painting in Memorial, Houston: wash, wood repair, caulk, prime and paint. Free written estimate. Insured, 5-year written warranty.",
    url: "https://houstonsuperiorpainting.com/exterior-painting-memorial",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function ExteriorPaintingMemorialPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="Memorial, Houston, TX"
      zoneSlug="memorial"
      metaTitle={"Memorial Exterior Painting | Houston Superior Painting"}
      metaDescription={"Exterior painting in Memorial, Houston: wash, wood repair, caulk, prime and paint. Free written estimate. Insured, 5-year written warranty."}
      h1={"Exterior Painting in Memorial, Houston, TX"}
      heroSubheading={"Exterior painting for Memorial homes, prepared for Houston's sun, humidity and storms and backed by a 5-year written warranty."}
      introLocal={"Memorial's mature trees shade many homes, which keeps siding and trim damp and invites mildew and wood rot, while unshaded south- and west-facing walls take the brunt of the sun. Homes range from older brick ranches with wood trim to large newer rebuilds with stucco, stone and fiber-cement. Exterior work in the Memorial Villages may also be subject to that village's or your HOA's rules, so check before you choose colors."}
      serviceOverview={"Exterior painting in Memorial includes washing the house, scraping loose paint, repairing or replacing rotted wood, caulking open joints, spot-priming bare areas and applying the finish coats to siding, trim, doors and fascia. Plants, walkways and windows are covered while we work. We use Sherwin-Williams and Benjamin Moore exterior paints, with the product listed on your written estimate, and every job carries our 5-year written workmanship warranty."}
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
          question: "How much does exterior painting cost in Memorial?",
          answer: `Our published range for a typical whole-house exterior is ${PRICES_2026.exteriorPerHome}, and a 2,500 sq ft two-story typically runs ${PRICES_2026.exterior2500TwoStory}. Siding type, number of stories, wood repair and trim detail decide where your home falls, and your exact price is set in a free written estimate.`,
        },
        {
          question: "Do you repair wood rot before painting?",
          answer: "Yes. Rotted wood is repaired or replaced and primed before the finish coats, and the repair is listed in your written estimate.",
        },
        {
          question: "Should I paint or limewash my brick?",
          answer: "It depends on the look you want and the condition of the brick. Limewash soaks into bare brick and lets it show through; masonry paint gives a solid color. Both are hard to undo, so we look at the brick and talk through the options first.",
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
          quote: "They transformed our Memorial home's exterior. The prep work was exceptional and the 5-year warranty gave us confidence.",
          name: "Catherine M.",
          location: "Hunters Creek Village"
        },
        {
          quote: "Professional from start to finish. They handled our HOA submittal and the results are stunning.",
          name: "David & Lauren P.",
          location: "Memorial Park"
        },
        {
          quote: "Our home looks brand new. The attention to detail on the wood trim was impressive.",
          name: "Marcus T.",
          location: "Bunker Hill"
        }
      ]}
      relatedPages={[
        { title: "Exterior Painting Houston", href: "/exterior-painting-houston-tx" },
        { title: "Interior Painting Memorial", href: "/interior-painting-memorial" },
        { title: "Brick Painting Memorial", href: "/brick-painting-memorial" },
        { title: "Painters in Memorial", href: "/painters-memorial-tx" },
        { title: "Exterior Painting Bellaire & West University", href: "/exterior-painting-bellaire-west-university" },
        { title: "Wood Rot Repair", href: "/wood-rot-repair-houston-tx" },
      ]}
      warrantyYears={5}
      warrantyType="Exterior"
    />
  )
}
