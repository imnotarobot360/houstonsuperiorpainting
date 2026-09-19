import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/cabinet-refinishing-the-heights',
  },
  title: "Cabinet Refinishing The Heights | Houston Superior Painting",
  description: "Premium cabinet refinishing in The Heights, Houston. Transform your kitchen for a fraction of replacement cost. Free quote — call (346) 594-5960.",
}

export default function CabinetRefinishingHeightsPage() {
  return (
    <GeoServicePageTemplate
      service="Cabinet Refinishing"
      serviceSlug="cabinet-refinishing"
      zone="The Heights, Houston, TX"
      zoneSlug="the-heights"
      metaTitle="Cabinet Refinishing The Heights | Houston Superior Painting"
      metaDescription="Premium cabinet refinishing in The Heights, Houston. Transform your kitchen."
      h1="Cabinet Refinishing in The Heights, Houston, TX"
      heroSubheading="Transform your Heights kitchen with professional cabinet refinishing — factory-smooth finishes, 5-year warranty, and completed in days, not weeks."
      introLocal="Heights homeowners blend historic character with modern updates. Cabinet refinishing is the perfect way to modernize your kitchen while preserving the charm of your home. Houston Superior Painting has refinished cabinets throughout The Heights, Woodland Heights, and Norhill, delivering factory-quality finishes that complement both historic bungalows and new construction."
      serviceOverview="Our cabinet refinishing process includes thorough degreasing, sanding, priming with bonding primer, and multiple coats of premium cabinet-grade paint. We use Sherwin-Williams Emerald Urethane and Benjamin Moore Advance. A typical kitchen takes 4 to 6 business days, and every project is backed by our 5-year cabinet warranty."
      whyChooseUs={[
        "Experience with both historic Heights kitchens and modern new builds.",
        "Factory-quality finishes through meticulous preparation and premium materials.",
        "Save 60-70% compared to cabinet replacement.",
        "5-year written cabinet warranty covering adhesion and durability.",
        "Minimal kitchen downtime — most projects complete in 4-6 business days."
      ]}
      priceRange="$3,500 – $9,800"
      priceMin={3500}
      priceMax={9800}
      priceDetails="Cabinet refinishing in The Heights typically ranges from $3,500 to $9,800, depending on kitchen size and cabinet style."
      faqs={[
        {
          question: "How long does cabinet refinishing take?",
          answer: "A typical Heights kitchen takes 4 to 6 business days."
        },
        {
          question: "What paint do you use on cabinets?",
          answer: "We use Sherwin-Williams Emerald Urethane and Benjamin Moore Advance."
        },
        {
          question: "Can you work with older cabinet styles?",
          answer: "Yes — we've refinished cabinets of all ages and styles throughout The Heights."
        },
        {
          question: "How much does cabinet refinishing cost in The Heights?",
          answer: "Cabinet refinishing typically ranges from $3,500 to $9,800."
        },
        {
          question: "How long will the finish last?",
          answer: "With proper care, our finishes last 10-15 years, backed by our 5-year warranty."
        },
        {
          question: "Can you match historic color palettes?",
          answer: "Yes — we can match any color and offer consultation for historically appropriate choices."
        }
      ]}
      testimonials={[
        {
          quote: "They transformed our 1920s bungalow kitchen beautifully. The cabinets look brand new.",
          name: "Amanda S.",
          location: "Woodland Heights"
        },
        {
          quote: "Smart update that modernized our kitchen while keeping the Heights character.",
          name: "Chris & Kelly M.",
          location: "The Heights"
        },
        {
          quote: "Exceptional finish quality. Highly recommend for any Heights homeowner.",
          name: "Daniel R.",
          location: "Norhill"
        }
      ]}
      relatedPages={[
        { title: "Cabinet Refinishing Memorial", href: "/cabinet-refinishing-memorial" },
        { title: "Cabinet Refinishing Tanglewood", href: "/cabinet-refinishing-tanglewood" },
        { title: "Cabinet Refinishing Bellaire", href: "/cabinet-refinishing-bellaire-west-university" },
        { title: "Cabinet Refinishing Sugar Land", href: "/cabinet-refinishing-sugar-land" },
        { title: "Cabinet Refinishing Katy", href: "/cabinet-refinishing-katy-cinco-ranch" },
        { title: "Cabinet Refinishing Cypress", href: "/cabinet-refinishing-cypress-bridgeland" }
      ]}
      warrantyYears={3}
      warrantyType="Cabinet"
    />
  )
}
