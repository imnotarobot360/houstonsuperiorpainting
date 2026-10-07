import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS } from "@/lib/business"

export const metadata: Metadata = {
  title: "Memorial Brick Painting | Houston Superior Painting",
  description: "Brick painting and limewash for Memorial homes in Houston: cleaning, mortar repair and masonry primer. Priced after an on-site look. Free estimate.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/brick-painting-memorial",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Memorial Brick Painting | Houston Superior Painting",
    description: "Brick painting and limewash for Memorial homes in Houston: cleaning, mortar repair and masonry primer. Priced after an on-site look. Free estimate.",
    url: "https://houstonsuperiorpainting.com/brick-painting-memorial",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function BrickPaintingMemorialPage() {
  return (
    <GeoServicePageTemplate
      service="Brick Painting"
      serviceSlug="brick-painting"
      zone="Memorial"
      zoneSlug="memorial"
      metaTitle={"Memorial Brick Painting | Houston Superior Painting"}
      metaDescription={"Brick painting and limewash for Memorial homes in Houston: cleaning, mortar repair and masonry primer. Priced after an on-site look. Free estimate."}
      h1={"Brick Painting in Memorial, TX"}
      heroSubheading={"Painting or limewashing dated brick on Memorial homes, with the cleaning and masonry prep that keeps the new finish from peeling."}
      introLocal={"Many Memorial homes have brick that is sound but dated in color. Painting it is one way to change the look without re-siding, but it is a long-term decision: once brick is painted, getting back to bare brick is difficult and expensive. The other common option is limewash, which soaks into bare brick and lets more of it show through. We look at your brick, mortar and any existing coating before recommending either."}
      serviceOverview={"Brick painting starts with cleaning the masonry, treating efflorescence (the white salt deposits that come from moisture) and repairing cracked or missing mortar. We then apply a masonry primer and finish coats made for brick. Moisture is the main thing to watch: if water is getting into the wall from a leak, a gutter or poor drainage, it needs to be fixed first, or any coating can blister and peel. Brick painting is priced after an on-site look, and the written estimate lists the prep, products and coats."}
      whyChooseUs={[
        "We check mortar, moisture and existing coatings before recommending paint or limewash.",
        "Efflorescence treated and mortar repaired before any coating goes on.",
        "Masonry primer and paints made for brick.",
        "Both solid paint and limewash available, so the recommendation fits your brick.",
        "A written estimate with the prep, products and coats spelled out.",
      ]}
      priceDetails={"We don't publish a price range for brick painting. The cost depends on the surface, its condition, the area and the technique, so it is priced after an on-site look. The estimate is free, and nothing is due until you approve it."}
      faqs={[
        {
          question: "Should I paint or limewash my brick?",
          answer: "Masonry paint gives a solid, uniform color. Limewash gives a softer, varied look with more of the brick showing through, but it needs bare, unsealed brick. Both are hard to reverse, so we look at the brick and show you a sample before you decide.",
        },
        {
          question: "Will painting my brick hurt resale value?",
          answer: "It depends on the house and the buyer. Painted brick suits some styles well, but it adds future maintenance because it will eventually need repainting, and it is hard to reverse. Treat it as a long-term design choice.",
        },
        {
          question: "How long does painted brick last?",
          answer: "It depends mostly on prep, moisture and sun exposure. Brick that is clean, dry and properly primed holds paint far better than brick with moisture problems, which is why we check for moisture before painting.",
        },
        {
          question: "Can you paint brick that has cracked or missing mortar?",
          answer: "Yes, after it is repaired. Cracked or missing mortar is repointed before painting, and that repair is listed in your written estimate.",
        },
        {
          question: "How much does brick painting cost in Memorial?",
          answer: "We don't publish a price range for brick painting, because the cost depends on the surface, its condition, the area and the technique. We price it after an on-site look, and the estimate is free.",
        },
        {
          question: "Do I have to pay anything before work starts?",
          answer: `${BUSINESS.paymentPolicy.sentence}`,
        },
      ]}
      testimonials={[
        {
          quote: "They transformed our dated red brick Colonial into an elegant painted white exterior. The difference is remarkable.",
          name: "The Morrison Family",
          location: "Hunters Creek"
        },
        {
          quote: "Professional from consultation to completion. They helped us choose the perfect warm gray that complements our neighborhood.",
          name: "Catherine & Robert L.",
          location: "Piney Point Village"
        },
        {
          quote: "Excellent prep work and beautiful results. Our 30-year-old brick looks brand new.",
          name: "Dr. James W.",
          location: "Bunker Hill"
        }
      ]}
      relatedPages={[
        { title: "Limewash & Brick Painting Houston", href: "/limewash-brick-painting-houston-tx" },
        { title: "Exterior Painting Memorial", href: "/exterior-painting-memorial" },
        { title: "Exterior Painting Houston", href: "/exterior-painting-houston-tx" },
        { title: "Painters in Memorial", href: "/painters-memorial-tx" },
        { title: "Brick Painting Katy", href: "/brick-painting-katy" },
      ]}
      warrantyYears={5}
      warrantyType="Brick Painting"
    />
  )
}
