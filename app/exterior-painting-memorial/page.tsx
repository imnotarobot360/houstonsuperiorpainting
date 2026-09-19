import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/exterior-painting-memorial',
  },
  title: "Exterior Painting Memorial | Houston Superior Painting",
  description: "Premium exterior painting in Memorial, Houston. 5-year warranty, 5-star reviews, family-owned. Free quote — call (346) 594-5960.",
}

export default function ExteriorPaintingMemorialPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="Memorial, Houston, TX"
      zoneSlug="memorial"
      metaTitle="Exterior Painting Memorial | Houston Superior Painting"
      metaDescription="Premium exterior painting in Memorial, Houston. 5-year warranty, 5-star reviews, family-owned."
      h1="Exterior Painting in Memorial, Houston, TX"
      heroSubheading="The painting team Memorial homeowners trust to deliver flawless exterior painting — prepped for Houston weather, finished beautifully, and backed by a 5-year written warranty."
      introLocal="When Memorial homeowners search for an exterior painter, they're looking for a team that understands the unique challenges of Houston's climate — intense UV, humidity, and unpredictable weather. From the stately homes of Hunters Creek Village to contemporary builds in Memorial Park, Houston Superior Painting has protected and beautified exteriors throughout Memorial with coatings engineered to last."
      serviceOverview="Our exterior painting service in Memorial includes the full scope: power washing, wood rot repair, caulking, priming, and finish coats with premium exterior-grade materials. We use Sherwin-Williams Duration, SuperPaint, and Benjamin Moore Aura Exterior — all formulated for Houston's climate. A typical project takes 5 to 10 business days depending on home size, and every job is backed by our 5-year written exterior warranty."
      whyChooseUs={[
        "We know Memorial architecture — Tudor, French country, traditional brick colonial, contemporary — and how to protect each exterior substrate.",
        "Familiar with Memorial Villages HOA requirements — we handle the color approval and submittal package.",
        "5-year written exterior warranty — the longest in the Houston metro area.",
        "Daily SMS photo updates so you can monitor progress from anywhere.",
        "Bilingual foreman dedicated to your job, with a direct phone line."
      ]}
      priceRange="$8,500 – $28,000"
      priceMin={8500}
      priceMax={28000}
      priceDetails="Exterior painting in Memorial typically ranges from $8,500 to $28,000 for a complete repaint, depending on home size, stories, substrate type, and prep complexity. Memorial homes are typically 3,800–7,500 sqft with significant architectural detail."
      faqs={[
        {
          question: "How long does an exterior painting project take in Memorial?",
          answer: "For a typical Memorial home (3,000 to 6,000 sqft), a full exterior repaint takes between 5 and 10 business days, weather permitting. Larger estates or homes with extensive wood trim may take longer."
        },
        {
          question: "What paint brands do you use for exteriors?",
          answer: "We use Sherwin-Williams Duration and SuperPaint, as well as Benjamin Moore Aura Exterior. All are formulated for Houston's UV, humidity, and weather extremes."
        },
        {
          question: "Do you repair wood rot before painting?",
          answer: "Yes — wood rot repair is included in our scope. We use Bondo or epoxy consolidants for minor damage, and replace boards for significant rot. All repairs are primed before finish coats."
        },
        {
          question: "How much does exterior painting cost in Memorial?",
          answer: "Exterior painting in Memorial typically ranges from $8,500 to $28,000 for a complete repaint. We provide a written, line-item estimate with no surprise charges."
        },
        {
          question: "What's included in your 5-year warranty?",
          answer: "Our 5-year exterior warranty covers peeling, flaking, blistering, and adhesion failures caused by improper preparation or application. It's the longest warranty in the Houston metro area."
        },
        {
          question: "Can you help with HOA color approval?",
          answer: "Yes — we're familiar with the Memorial Villages HOA requirements and can prepare the color submittal package for your review and approval."
        }
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
        { title: "Exterior Painting Tanglewood", href: "/exterior-painting-tanglewood" },
        { title: "Exterior Painting Bellaire", href: "/exterior-painting-bellaire-west-university" },
        { title: "Exterior Painting The Heights", href: "/exterior-painting-the-heights" },
        { title: "Exterior Painting Sugar Land", href: "/exterior-painting-sugar-land" },
        { title: "Exterior Painting Katy", href: "/exterior-painting-katy-cinco-ranch" },
        { title: "Exterior Painting Cypress", href: "/exterior-painting-cypress-bridgeland" }
      ]}
      warrantyYears={5}
      warrantyType="Exterior"
    />
  )
}
