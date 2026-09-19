import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/cabinet-refinishing-memorial',
  },
  title: "Cabinet Refinishing Memorial | Houston Superior Painting",
  description: "Premium cabinet refinishing in Memorial, Houston. Transform your kitchen for a fraction of replacement cost. Free quote — call (346) 594-5960.",
}

export default function CabinetRefinishingMemorialPage() {
  return (
    <GeoServicePageTemplate
      service="Cabinet Refinishing"
      serviceSlug="cabinet-refinishing"
      zone="Memorial, Houston, TX"
      zoneSlug="memorial"
      metaTitle="Cabinet Refinishing Memorial | Houston Superior Painting"
      metaDescription="Premium cabinet refinishing in Memorial, Houston. Transform your kitchen for a fraction of replacement cost."
      h1="Cabinet Refinishing in Memorial, Houston, TX"
      heroSubheading="Transform your Memorial kitchen with professional cabinet refinishing — factory-smooth finishes, 5-year warranty, and completed in days, not weeks."
      introLocal="Memorial homeowners understand quality. When it comes to updating your kitchen, cabinet refinishing offers a smart alternative to the $40,000+ cost of full cabinet replacement. Houston Superior Painting has refinished cabinets throughout Memorial Park, Hunters Creek Village, and Bunker Hill, delivering factory-quality finishes that transform kitchens and add lasting value to your home."
      serviceOverview="Our cabinet refinishing process includes thorough degreasing, sanding, priming with bonding primer, and multiple coats of premium cabinet-grade paint. We use Sherwin-Williams Emerald Urethane and Benjamin Moore Advance — the gold standard for cabinet finishes. A typical kitchen takes 4 to 6 business days, and every project is backed by our 5-year cabinet warranty."
      whyChooseUs={[
        "Factory-quality finishes achieved through meticulous preparation and premium materials.",
        "Save 60-70% compared to cabinet replacement while achieving a similar transformation.",
        "5-year written cabinet warranty covering adhesion, durability, and finish quality.",
        "Daily SMS photo updates so you can monitor progress from anywhere.",
        "Minimal kitchen downtime — most projects complete in 4-6 business days."
      ]}
      priceRange="$4,500 – $12,000"
      priceMin={4500}
      priceMax={12000}
      priceDetails="Cabinet refinishing in Memorial typically ranges from $4,500 to $12,000, depending on kitchen size, cabinet style, and finish complexity. This represents 60-70% savings compared to full cabinet replacement."
      faqs={[
        {
          question: "How long does cabinet refinishing take?",
          answer: "A typical Memorial kitchen takes 4 to 6 business days. We work efficiently while never rushing the preparation or cure times that ensure a lasting finish."
        },
        {
          question: "What paint do you use on cabinets?",
          answer: "We use Sherwin-Williams Emerald Urethane and Benjamin Moore Advance — the gold standard for cabinet finishes. Both are extremely durable and provide a factory-smooth finish."
        },
        {
          question: "Can I use my kitchen during the project?",
          answer: "We work to minimize disruption. You'll have partial access to your kitchen most days, though some areas will be off-limits during active work and curing."
        },
        {
          question: "How much does cabinet refinishing cost in Memorial?",
          answer: "Cabinet refinishing typically ranges from $4,500 to $12,000, representing 60-70% savings compared to full replacement."
        },
        {
          question: "How long will the finish last?",
          answer: "With proper care, our cabinet finishes last 10-15 years. We back every project with a 5-year written warranty covering adhesion and durability."
        },
        {
          question: "Can you change the color of my cabinets?",
          answer: "Yes — we can refinish cabinets in any color. White, off-white, and navy are popular choices. We provide color samples during consultation."
        }
      ]}
      testimonials={[
        {
          quote: "They transformed our dated oak cabinets into a beautiful white kitchen. The finish is flawless — looks like new cabinets.",
          name: "Catherine M.",
          location: "Hunters Creek Village"
        },
        {
          quote: "Saved us over $30,000 compared to replacing our Memorial kitchen cabinets. The results exceeded our expectations.",
          name: "David & Lauren P.",
          location: "Memorial Park"
        },
        {
          quote: "The attention to detail was incredible. Every drawer, every door — perfect finish throughout.",
          name: "Marcus T.",
          location: "Bunker Hill"
        }
      ]}
      relatedPages={[
        { title: "Cabinet Refinishing Tanglewood", href: "/cabinet-refinishing-tanglewood" },
        { title: "Cabinet Refinishing Bellaire", href: "/cabinet-refinishing-bellaire-west-university" },
        { title: "Cabinet Refinishing The Heights", href: "/cabinet-refinishing-the-heights" },
        { title: "Cabinet Refinishing Sugar Land", href: "/cabinet-refinishing-sugar-land" },
        { title: "Cabinet Refinishing Katy", href: "/cabinet-refinishing-katy-cinco-ranch" },
        { title: "Cabinet Refinishing Cypress", href: "/cabinet-refinishing-cypress-bridgeland" }
      ]}
      warrantyYears={3}
      warrantyType="Cabinet"
    />
  )
}
