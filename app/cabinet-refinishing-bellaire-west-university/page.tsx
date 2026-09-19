import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/cabinet-refinishing-bellaire-west-university',
  },
  title: "Cabinet Refinishing Bellaire & West University",
  description: "Premium cabinet refinishing in Bellaire and West University Place. Transform your kitchen. Free quote — call (346) 594-5960.",
}

export default function CabinetRefinishingBellaireWestUPage() {
  return (
    <GeoServicePageTemplate
      service="Cabinet Refinishing"
      serviceSlug="cabinet-refinishing"
      zone="Bellaire & West University, TX"
      zoneSlug="bellaire-west-university"
      metaTitle="Cabinet Refinishing Bellaire & West University | Houston Superior Painting"
      metaDescription="Premium cabinet refinishing in Bellaire and West University Place. Transform your kitchen."
      h1="Cabinet Refinishing in Bellaire and West University Place, Houston, TX"
      heroSubheading="Transform your kitchen with professional cabinet refinishing — factory-smooth finishes, 5-year warranty, and completed in days, not weeks."
      introLocal="Bellaire and West University homeowners know that kitchen updates can dramatically increase home value. Cabinet refinishing offers a smart alternative to the high cost of full replacement. Houston Superior Painting has refinished cabinets throughout these neighborhoods, delivering factory-quality finishes that modernize kitchens while maximizing your investment."
      serviceOverview="Our cabinet refinishing process includes thorough degreasing, sanding, priming with bonding primer, and multiple coats of premium cabinet-grade paint. We use Sherwin-Williams Emerald Urethane and Benjamin Moore Advance. A typical kitchen takes 4 to 6 business days, and every project is backed by our 5-year cabinet warranty."
      whyChooseUs={[
        "Factory-quality finishes achieved through meticulous preparation and premium materials.",
        "Save 60-70% compared to cabinet replacement.",
        "5-year written cabinet warranty covering adhesion, durability, and finish quality.",
        "Daily SMS photo updates so you can monitor progress.",
        "Minimal kitchen downtime — most projects complete in 4-6 business days."
      ]}
      priceRange="$3,800 – $10,500"
      priceMin={3800}
      priceMax={10500}
      priceDetails="Cabinet refinishing in Bellaire and West University typically ranges from $3,800 to $10,500, depending on kitchen size and cabinet style."
      faqs={[
        {
          question: "How long does cabinet refinishing take?",
          answer: "A typical kitchen takes 4 to 6 business days."
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
          question: "How much does cabinet refinishing cost?",
          answer: "Cabinet refinishing typically ranges from $3,800 to $10,500."
        },
        {
          question: "How long will the finish last?",
          answer: "With proper care, our finishes last 10-15 years, backed by our 5-year warranty."
        },
        {
          question: "Can you change the color of my cabinets?",
          answer: "Yes — we can refinish in any color with consultation included."
        }
      ]}
      testimonials={[
        {
          quote: "Our 1960s Bellaire kitchen looks modern and fresh. The transformation is incredible.",
          name: "Jennifer K.",
          location: "Bellaire"
        },
        {
          quote: "Professional and efficient. The finish quality rivals new cabinets.",
          name: "Michael & Sarah T.",
          location: "West University Place"
        },
        {
          quote: "Smart investment that added value to our home.",
          name: "Robert L.",
          location: "West University Place"
        }
      ]}
      relatedPages={[
        { title: "Cabinet Refinishing Memorial", href: "/cabinet-refinishing-memorial" },
        { title: "Cabinet Refinishing Tanglewood", href: "/cabinet-refinishing-tanglewood" },
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
