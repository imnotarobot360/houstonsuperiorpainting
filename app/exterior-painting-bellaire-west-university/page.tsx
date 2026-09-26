import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/exterior-painting-bellaire-west-university',
  },
  title: "Exterior Painting Bellaire & West University | Free Estimates",
  description: "Premium exterior painting in Bellaire and West University Place. 5-year warranty, 5-star reviews. Free quote — call (346) 594-5960.",
}

export default function ExteriorPaintingBellaireWestUPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="Bellaire & West University, TX"
      zoneSlug="bellaire-west-university"
      metaTitle="Exterior Painting Bellaire & West University | Houston Superior Painting"
      metaDescription="Premium exterior painting in Bellaire and West University Place. 5-year warranty, 5-star reviews."
      h1="Exterior Painting in Bellaire and West University Place, Houston, TX"
      heroSubheading="The painting team Bellaire and West University homeowners trust to deliver flawless exterior painting — prepped for Houston weather, finished beautifully, and backed by a 5-year written warranty."
      introLocal="When Bellaire and West University homeowners search for an exterior painter, they're looking for a team that understands both the classic ranch homes built in the 1950s-60s and the contemporary new construction throughout these neighborhoods. Houston Superior Painting has protected and beautified exteriors throughout Bellaire and West U with coatings engineered for Houston's demanding climate."
      serviceOverview="Our exterior painting service includes the full scope: power washing, wood rot repair, caulking, priming, and finish coats with premium exterior-grade materials. We use Sherwin-Williams Duration, SuperPaint, and Benjamin Moore Aura Exterior. A typical project takes 4 to 8 business days, and every job is backed by our 5-year written exterior warranty."
      whyChooseUs={[
        "Experience with both classic mid-century homes and contemporary new construction in Bellaire and West U.",
        "Familiar with local permit requirements and neighborhood guidelines.",
        "5-year written exterior warranty — the longest in the Houston metro area.",
        "Daily SMS photo updates so you can monitor progress from anywhere.",
        "Bilingual foreman dedicated to your job, with a direct phone line."
      ]}
      priceRange="$6,200 – $21,000"
      priceMin={6200}
      priceMax={21000}
      priceDetails="Exterior painting in Bellaire and West University typically ranges from $6,200 to $21,000 for a complete repaint, depending on home size, stories, substrate type, and prep complexity."
      faqs={[
        {
          question: "How long does an exterior painting project take?",
          answer: "For a typical home in Bellaire or West U, a full exterior repaint takes between 4 and 8 business days, weather permitting."
        },
        {
          question: "What paint brands do you use for exteriors?",
          answer: "We use Sherwin-Williams Duration and SuperPaint, as well as Benjamin Moore Aura Exterior."
        },
        {
          question: "Do you repair wood rot before painting?",
          answer: "Yes — wood rot repair is included in our scope, especially important for older Bellaire homes with wood siding."
        },
        {
          question: "How much does exterior painting cost?",
          answer: "Exterior painting typically ranges from $6,200 to $21,000 for a complete repaint."
        },
        {
          question: "What's included in your 5-year warranty?",
          answer: "Our warranty covers peeling, flaking, blistering, and adhesion failures caused by improper preparation or application."
        },
        {
          question: "Do you handle older homes with lead paint?",
          answer: "Yes — we are EPA Lead-Safe RRP Certified for pre-1978 homes, which is common in Bellaire."
        }
      ]}
      testimonials={[
        {
          quote: "They understood the character of our 1960s Bellaire home and delivered a beautiful, lasting finish.",
          name: "Jennifer K.",
          location: "Bellaire"
        },
        {
          quote: "Professional and thorough. The prep work on our wood siding was exceptional.",
          name: "Michael & Sarah T.",
          location: "West University Place"
        },
        {
          quote: "Our home looks amazing. The 5-year warranty gave us confidence in their work.",
          name: "Robert L.",
          location: "West University Place"
        }
      ]}
      relatedPages={[
        { title: "Exterior Painting Memorial", href: "/exterior-painting-memorial" },
        { title: "Exterior Painting Tanglewood", href: "/exterior-painting-tanglewood" },
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
