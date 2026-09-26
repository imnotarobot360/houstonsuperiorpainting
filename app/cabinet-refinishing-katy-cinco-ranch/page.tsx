import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/cabinet-refinishing-katy-cinco-ranch',
  },
  title: "Cabinet Refinishing Katy & Cinco Ranch | Free Estimates",
  description: "Premium cabinet refinishing in Katy and Cinco Ranch, TX. Transform your kitchen. Free quote — call (346) 594-5960.",
}

export default function CabinetRefinishingKatyPage() {
  return (
    <GeoServicePageTemplate
      service="Cabinet Refinishing"
      serviceSlug="cabinet-refinishing"
      zone="Katy & Cinco Ranch, TX"
      zoneSlug="katy-cinco-ranch"
      metaTitle="Cabinet Refinishing Katy & Cinco Ranch | Houston Superior Painting"
      metaDescription="Premium cabinet refinishing in Katy and Cinco Ranch, TX. Transform your kitchen."
      h1="Cabinet Refinishing in Katy and Cinco Ranch, TX"
      heroSubheading="Transform your Katy kitchen with professional cabinet refinishing — factory-smooth finishes, 5-year warranty, and completed in days, not weeks."
      introLocal="Katy and Cinco Ranch homeowners know that kitchen updates deliver strong ROI. Cabinet refinishing transforms your kitchen for a fraction of the cost of full replacement. Houston Superior Painting has refinished cabinets throughout Cinco Ranch, Cross Creek Ranch, Elyson, and Firethorne, delivering factory-quality finishes that modernize kitchens and add lasting value."
      serviceOverview="Our cabinet refinishing process includes thorough degreasing, sanding, priming with bonding primer, and multiple coats of premium cabinet-grade paint. We use Sherwin-Williams Emerald Urethane and Benjamin Moore Advance. A typical kitchen takes 4 to 6 business days, and every project is backed by our 5-year cabinet warranty."
      whyChooseUs={[
        "Experience with both new construction updates and 10-20 year old home refreshes.",
        "Factory-quality finishes through meticulous preparation and premium materials.",
        "Save 60-70% compared to cabinet replacement.",
        "5-year written cabinet warranty covering adhesion and durability.",
        "Minimal kitchen downtime — most projects complete in 4-6 business days."
      ]}
      priceRange="$3,600 – $10,200"
      priceMin={3600}
      priceMax={10200}
      priceDetails="Cabinet refinishing in Katy typically ranges from $3,600 to $10,200, depending on kitchen size and cabinet style."
      faqs={[
        {
          question: "How long does cabinet refinishing take?",
          answer: "A typical Katy kitchen takes 4 to 6 business days."
        },
        {
          question: "What paint do you use on cabinets?",
          answer: "We use Sherwin-Williams Emerald Urethane and Benjamin Moore Advance."
        },
        {
          question: "Can I use my kitchen during the project?",
          answer: "We minimize disruption — you'll have partial access most days."
        },
        {
          question: "How much does cabinet refinishing cost in Katy?",
          answer: "Cabinet refinishing typically ranges from $3,600 to $10,200."
        },
        {
          question: "How long will the finish last?",
          answer: "With proper care, our finishes last 10-15 years, backed by our 5-year warranty."
        },
        {
          question: "Can you update builder-grade cabinets?",
          answer: "Yes — we specialize in transforming builder-grade cabinets with premium finishes."
        }
      ]}
      testimonials={[
        {
          quote: "Our Cinco Ranch kitchen looks amazing. Saved a fortune compared to new cabinets.",
          name: "Michelle & David R.",
          location: "Cinco Ranch"
        },
        {
          quote: "They transformed our 15-year-old kitchen beautifully. Professional and efficient.",
          name: "Brandon T.",
          location: "Cross Creek Ranch"
        },
        {
          quote: "Excellent value and outstanding results. Highly recommend.",
          name: "Sandra L.",
          location: "Firethorne"
        }
      ]}
      relatedPages={[
        { title: "Cabinet Refinishing Memorial", href: "/cabinet-refinishing-memorial" },
        { title: "Cabinet Refinishing Tanglewood", href: "/cabinet-refinishing-tanglewood" },
        { title: "Cabinet Refinishing Bellaire", href: "/cabinet-refinishing-bellaire-west-university" },
        { title: "Cabinet Refinishing The Heights", href: "/cabinet-refinishing-the-heights" },
        { title: "Cabinet Refinishing Sugar Land", href: "/cabinet-refinishing-sugar-land" },
        { title: "Cabinet Refinishing Cypress", href: "/cabinet-refinishing-cypress-bridgeland" }
      ]}
      warrantyYears={3}
      warrantyType="Cabinet"
    />
  )
}
