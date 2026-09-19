import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/exterior-painting-tanglewood',
  },
  title: "Exterior Painting Tanglewood | Houston Superior Painting",
  description: "Premium exterior painting in Tanglewood, Houston. 5-year warranty, 5-star reviews, family-owned. Free quote — call (346) 594-5960.",
}

export default function ExteriorPaintingTanglewoodPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="Tanglewood, Houston, TX"
      zoneSlug="tanglewood"
      metaTitle="Exterior Painting Tanglewood | Houston Superior Painting"
      metaDescription="Premium exterior painting in Tanglewood, Houston. 5-year warranty, 5-star reviews."
      h1="Exterior Painting in Tanglewood, Houston, TX"
      heroSubheading="The painting team Tanglewood homeowners trust to deliver flawless exterior painting — prepped for Houston weather, finished beautifully, and backed by a 5-year written warranty."
      introLocal="When Tanglewood homeowners search for an exterior painter, they're looking for a team that understands the unique challenges of Houston's climate and the architectural standards of the neighborhood. From traditional brick colonials to contemporary new builds, Houston Superior Painting has protected and beautified exteriors throughout Tanglewood, Briargrove, and Briar Hollow with coatings engineered to last."
      serviceOverview="Our exterior painting service in Tanglewood includes the full scope: power washing, wood rot repair, caulking, priming, and finish coats with premium exterior-grade materials. We use Sherwin-Williams Duration, SuperPaint, and Benjamin Moore Aura Exterior. A typical project takes 5 to 10 business days, and every job is backed by our 5-year written exterior warranty."
      whyChooseUs={[
        "We know Tanglewood architecture — traditional brick colonials, transitional remodels, contemporary new builds — and how to protect each substrate.",
        "Familiar with local architectural review processes and neighborhood standards.",
        "5-year written exterior warranty — the longest in the Houston metro area.",
        "Daily SMS photo updates so you can monitor progress from anywhere.",
        "Bilingual foreman dedicated to your job, with a direct phone line."
      ]}
      priceRange="$7,800 – $24,500"
      priceMin={7800}
      priceMax={24500}
      priceDetails="Exterior painting in Tanglewood typically ranges from $7,800 to $24,500 for a complete repaint, depending on home size, stories, substrate type, and prep complexity."
      faqs={[
        {
          question: "How long does an exterior painting project take in Tanglewood?",
          answer: "For a typical Tanglewood home, a full exterior repaint takes between 5 and 10 business days, weather permitting."
        },
        {
          question: "What paint brands do you use for exteriors?",
          answer: "We use Sherwin-Williams Duration and SuperPaint, as well as Benjamin Moore Aura Exterior — all formulated for Houston's climate."
        },
        {
          question: "Do you repair wood rot before painting?",
          answer: "Yes — wood rot repair is included. We use epoxy consolidants for minor damage and replace boards for significant rot."
        },
        {
          question: "How much does exterior painting cost in Tanglewood?",
          answer: "Exterior painting typically ranges from $7,800 to $24,500 for a complete repaint."
        },
        {
          question: "What's included in your 5-year warranty?",
          answer: "Our 5-year exterior warranty covers peeling, flaking, blistering, and adhesion failures caused by improper preparation or application."
        },
        {
          question: "Do you handle pressure washing?",
          answer: "Yes — professional power washing is included to remove dirt, mildew, and loose paint before we begin."
        }
      ]}
      testimonials={[
        {
          quote: "Outstanding exterior work on our Tanglewood home. The 5-year warranty sealed the deal for us.",
          name: "Jennifer R.",
          location: "Tanglewood proper"
        },
        {
          quote: "They handled the entire project professionally. Our home looks better than when it was new.",
          name: "Michael & Sarah K.",
          location: "Briargrove"
        },
        {
          quote: "The prep work was thorough and the finish is flawless. Highly recommend.",
          name: "Robert L.",
          location: "Briar Hollow"
        }
      ]}
      relatedPages={[
        { title: "Exterior Painting Memorial", href: "/exterior-painting-memorial" },
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
