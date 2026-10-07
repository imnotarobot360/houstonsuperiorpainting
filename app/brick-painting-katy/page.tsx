import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS } from "@/lib/business"

export const metadata: Metadata = {
  title: "Brick Painting in Katy, TX | Houston Superior Painting",
  description: "Brick painting in Katy, TX: cleaning, efflorescence treatment, masonry primer and breathable masonry paint. Priced on-site; 5-year written warranty.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/brick-painting-katy",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Brick Painting in Katy, TX | Houston Superior Painting",
    description: "Brick painting in Katy, TX: cleaning, efflorescence treatment, masonry primer and breathable masonry paint. Priced on-site; 5-year written warranty.",
    url: "https://houstonsuperiorpainting.com/brick-painting-katy",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function BrickPaintingKatyPage() {
  return (
    <GeoServicePageTemplate
      service="Brick Painting"
      serviceSlug="brick-painting"
      zone="Katy"
      zoneSlug="katy"
      metaTitle="Brick Painting in Katy, TX | Houston Superior Painting"
      metaDescription="Brick painting in Katy, TX: cleaning, efflorescence treatment, masonry primer and breathable masonry paint. Priced on-site; 5-year written warranty."
      h1="Brick Painting in Katy, TX"
      heroSubheading="Painted brick done the way masonry needs: cleaned, treated, primed and coated with a breathable masonry paint, backed by a 5-year written workmanship warranty."
      introLocal="Brick fronts are common across Katy, from Cinco Ranch to the newer communities to the west, and much of it is red or orange brick that owners now want in white, gray or a warm neutral. Painting brick is a long-term decision, because removing paint from brick later is hard, so we talk through painting versus limewash at the estimate."
      serviceOverview="Brick painting starts with washing the masonry and treating any efflorescence (the white mineral deposit that comes through brick and mortar), then letting it dry. Cracked or missing mortar is noted before we start. We apply a masonry primer and finish with a breathable masonry paint so moisture inside the wall can escape instead of pushing the paint off. Your written estimate lists the walls, products, color and schedule."
      whyChooseUs={[
        "Founded in 2019 by owner Juan Serra and headquartered in Cypress, TX.",
        "Cleaning and efflorescence treatment before any primer goes on.",
        "Breathable masonry primer and paint, so trapped moisture doesn't blister the finish.",
        `Insured: ${BUSINESS.trust.liabilityCoverage} general liability plus workers' comp.`,
        "5-year written workmanship warranty.",
        "No upfront payment: the estimate is free and nothing is due until you approve it in writing."
      ]}
      priceDetails="Brick painting is priced after an on-site look. The amount of brick, how many stories, its condition, mortar repairs and the color change all affect the cost, so we don't publish a range for this work. The estimate is free."
      faqs={[
        {
          question: "Is painting brick a good idea?",
          answer: "It can be, if it is done with breathable masonry products over clean, dry brick. The trade-off is that painted brick needs repainting over time and is hard to return to bare brick, so we also discuss limewash, which soaks in rather than coating the surface.",
        },
        {
          question: "Can I change my brick from red to white or gray?",
          answer: "Yes. Painted brick can be any color. White, gray and warm neutrals are popular. Check your HOA's approved colors first if you live in a community with one.",
        },
        {
          question: "How much does brick painting cost in Katy?",
          answer: "We price brick painting after an on-site look, because the amount of brick, its condition and any mortar repair change the cost too much for a useful published range. The estimate is free.",
        },
        {
          question: "Do Katy HOAs allow painted brick?",
          answer: "It depends on the HOA. Many require approval for any exterior color change, and some restrict painting brick. Get approval before the job is scheduled.",
        },
        {
          question: "What is the difference between painting brick and limewashing it?",
          answer: "Paint forms a solid, opaque coat of color. Limewash soaks into bare brick and leaves a softer, mottled look with some of the brick showing through. Limewash only works on unpainted, unsealed brick.",
        },
        {
          question: "What warranty do you give?",
          answer: "Every brick painting job comes with a 5-year written workmanship warranty. The full warranty terms are included with your written estimate, so you can read them before you approve the work.",
        }
      ]}
      testimonials={[
        {
          quote: "They transformed our dated orange brick into a beautiful warm white. Our home looks completely different — in the best way.",
          name: "Jessica & Brian M.",
          location: "Cinco Ranch"
        },
        {
          quote: "The HOA approved our color quickly, and the finished result exceeded our expectations. Highly recommend.",
          name: "David P.",
          location: "Cross Creek Ranch"
        },
        {
          quote: "Professional, clean, and the quality is excellent. Our neighbors are asking for their number.",
          name: "Linda T.",
          location: "Elyson"
        }
      ]}
      relatedPages={[
        { title: "Limewash and brick painting", href: "/limewash-brick-painting-houston-tx" },
        { title: "Limewash in Katy & Cinco Ranch", href: "/limewash-decorative-finishes-katy-cinco-ranch" },
        { title: "Exterior painting in Katy & Cinco Ranch", href: "/exterior-painting-katy-cinco-ranch" },
        { title: "Brick painting in Memorial", href: "/brick-painting-memorial" },
        { title: "Painters in Katy, TX (Katy office)", href: "/painters-katy-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Workmanship"
    />
  )
}
