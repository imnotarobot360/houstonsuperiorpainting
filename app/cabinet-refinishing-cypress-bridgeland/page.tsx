import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/cabinet-refinishing-cypress-bridgeland',
  },
  title: "Cabinet Refinishing Cypress & Bridgeland | Free Estimates",
  description: "Premium cabinet refinishing in Cypress and Bridgeland, TX. Transform your kitchen. Free quote — call (346) 594-5960.",
}

export default function CabinetRefinishingCypressPage() {
  return (
    <GeoServicePageTemplate
      service="Cabinet Refinishing"
      serviceSlug="cabinet-refinishing"
      zone="Cypress & Bridgeland, TX"
      zoneSlug="cypress-bridgeland"
      metaTitle="Cabinet Refinishing Cypress & Bridgeland | Houston Superior Painting"
      metaDescription="Premium cabinet refinishing in Cypress and Bridgeland, TX. Transform your kitchen."
      h1="Cabinet Refinishing in Cypress and Bridgeland, TX"
      heroSubheading="Transform your Cypress kitchen with professional cabinet refinishing — factory-smooth finishes, 5-year warranty, and completed in days, not weeks."
      introLocal="Cypress and Bridgeland homeowners know that kitchen updates deliver strong ROI. Cabinet refinishing transforms your kitchen for a fraction of the cost of full replacement. Houston Superior Painting has refinished cabinets throughout Bridgeland, Towne Lake, Fairfield, and Cypress Creek Lakes, delivering factory-quality finishes that modernize kitchens and add lasting value."
      serviceOverview="Our cabinet refinishing process includes thorough degreasing, sanding, priming with bonding primer, and multiple coats of premium cabinet-grade paint. We use Sherwin-Williams Emerald Urethane and Benjamin Moore Advance. A typical kitchen takes 4 to 6 business days, and every project is backed by our 5-year cabinet warranty."
      whyChooseUs={[
        "Experience with the contemporary finishes common in newer Cypress construction.",
        "Factory-quality finishes through meticulous preparation and premium materials.",
        "Save 60-70% compared to cabinet replacement.",
        "5-year written cabinet warranty covering adhesion and durability.",
        "Minimal kitchen downtime — most projects complete in 4-6 business days."
      ]}
      priceRange="$3,400 – $9,800"
      priceMin={3400}
      priceMax={9800}
      priceDetails="Cabinet refinishing in Cypress typically ranges from $3,400 to $9,800, depending on kitchen size and cabinet style."
      faqs={[
        {
          question: "How long does cabinet refinishing take?",
          answer: "A typical Cypress kitchen takes 4 to 6 business days."
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
          question: "How much does cabinet refinishing cost in Cypress?",
          answer: "Cabinet refinishing typically ranges from $3,400 to $9,800."
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
          quote: "Our Bridgeland kitchen looks completely transformed. Amazing value.",
          name: "Rachel & Mark H.",
          location: "Bridgeland"
        },
        {
          quote: "Professional and efficient. The finish quality is exceptional.",
          name: "Kevin P.",
          location: "Towne Lake"
        },
        {
          quote: "Transformed our builder-grade cabinets beautifully. Highly recommend.",
          name: "Amy J.",
          location: "Fairfield"
        }
      ]}
      relatedPages={[
        { title: "Cabinet Refinishing Memorial", href: "/cabinet-refinishing-memorial" },
        { title: "Cabinet Refinishing Tanglewood", href: "/cabinet-refinishing-tanglewood" },
        { title: "Cabinet Refinishing Bellaire", href: "/cabinet-refinishing-bellaire-west-university" },
        { title: "Cabinet Refinishing The Heights", href: "/cabinet-refinishing-the-heights" },
        { title: "Cabinet Refinishing Sugar Land", href: "/cabinet-refinishing-sugar-land" },
        { title: "Cabinet Refinishing Katy", href: "/cabinet-refinishing-katy-cinco-ranch" }
      ]}
      warrantyYears={3}
      warrantyType="Cabinet"
    />
  )
}
