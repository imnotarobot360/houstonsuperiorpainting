import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/cabinet-refinishing-tanglewood',
  },
  title: "Cabinet Refinishing Tanglewood | Houston Superior Painting",
  description: "Premium cabinet refinishing in Tanglewood, Houston. Transform your kitchen for a fraction of replacement cost. Free quote — call (346) 594-5960.",
}

export default function CabinetRefinishingTanglewoodPage() {
  return (
    <GeoServicePageTemplate
      service="Cabinet Refinishing"
      serviceSlug="cabinet-refinishing"
      zone="Tanglewood, Houston, TX"
      zoneSlug="tanglewood"
      metaTitle="Cabinet Refinishing Tanglewood | Houston Superior Painting"
      metaDescription="Premium cabinet refinishing in Tanglewood, Houston. Transform your kitchen for a fraction of replacement cost."
      h1="Cabinet Refinishing in Tanglewood, Houston, TX"
      heroSubheading="Transform your Tanglewood kitchen with professional cabinet refinishing — factory-smooth finishes, 5-year warranty, and completed in days, not weeks."
      introLocal="Tanglewood homeowners appreciate the value of smart upgrades. Cabinet refinishing transforms your kitchen for a fraction of the cost of full replacement. Houston Superior Painting has refinished cabinets throughout Tanglewood proper, Briargrove, and Briar Hollow, delivering factory-quality finishes that modernize kitchens while respecting your investment."
      serviceOverview="Our cabinet refinishing process includes thorough degreasing, sanding, priming with bonding primer, and multiple coats of premium cabinet-grade paint. We use Sherwin-Williams Emerald Urethane and Benjamin Moore Advance. A typical kitchen takes 4 to 6 business days, and every project is backed by our 5-year cabinet warranty."
      whyChooseUs={[
        "Factory-quality finishes achieved through meticulous preparation and premium materials.",
        "Save 60-70% compared to cabinet replacement while achieving a similar transformation.",
        "5-year written cabinet warranty covering adhesion, durability, and finish quality.",
        "Daily SMS photo updates so you can monitor progress from anywhere.",
        "Minimal kitchen downtime — most projects complete in 4-6 business days."
      ]}
      priceRange="$4,200 – $11,500"
      priceMin={4200}
      priceMax={11500}
      priceDetails="Cabinet refinishing in Tanglewood typically ranges from $4,200 to $11,500, depending on kitchen size, cabinet style, and finish complexity."
      faqs={[
        {
          question: "How long does cabinet refinishing take?",
          answer: "A typical Tanglewood kitchen takes 4 to 6 business days."
        },
        {
          question: "What paint do you use on cabinets?",
          answer: "We use Sherwin-Williams Emerald Urethane and Benjamin Moore Advance — the gold standard for cabinet finishes."
        },
        {
          question: "Can I use my kitchen during the project?",
          answer: "We work to minimize disruption. You'll have partial access most days."
        },
        {
          question: "How much does cabinet refinishing cost in Tanglewood?",
          answer: "Cabinet refinishing typically ranges from $4,200 to $11,500."
        },
        {
          question: "How long will the finish last?",
          answer: "With proper care, our cabinet finishes last 10-15 years, backed by our 5-year warranty."
        },
        {
          question: "Can you change the color of my cabinets?",
          answer: "Yes — we can refinish cabinets in any color with full color consultation included."
        }
      ]}
      testimonials={[
        {
          quote: "Our kitchen looks completely transformed. The white finish is smooth and professional.",
          name: "Jennifer R.",
          location: "Tanglewood proper"
        },
        {
          quote: "Saved a fortune compared to new cabinets and the results are stunning.",
          name: "Michael & Sarah K.",
          location: "Briargrove"
        },
        {
          quote: "Meticulous attention to detail. Every cabinet door is flawless.",
          name: "Robert L.",
          location: "Briar Hollow"
        }
      ]}
      relatedPages={[
        { title: "Cabinet Refinishing Memorial", href: "/cabinet-refinishing-memorial" },
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
