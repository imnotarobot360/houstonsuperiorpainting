import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/exterior-painting-katy-cinco-ranch',
  },
  title: "Exterior Painting Katy & Cinco Ranch | Houston Superior Painting",
  description: "Premium exterior painting in Katy and Cinco Ranch, TX. 5-year warranty, 5-star reviews. Free quote — call (346) 594-5960.",
}

export default function ExteriorPaintingKatyPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="Katy & Cinco Ranch, TX"
      zoneSlug="katy-cinco-ranch"
      metaTitle="Exterior Painting Katy & Cinco Ranch | Houston Superior Painting"
      metaDescription="Premium exterior painting in Katy and Cinco Ranch, TX. 5-year warranty, 5-star reviews."
      h1="Exterior Painting in Katy and Cinco Ranch, TX"
      heroSubheading="The painting team Katy homeowners trust to deliver flawless exterior painting — prepped for Houston weather, finished beautifully, and backed by a 5-year written warranty."
      introLocal="When Katy and Cinco Ranch homeowners search for an exterior painter, they're looking for a team that understands the master-planned communities throughout the area — Cinco Ranch, Cross Creek Ranch, Elyson, and Firethorne. Houston Superior Painting has protected and beautified exteriors throughout Katy with coatings engineered to withstand Houston's demanding climate."
      serviceOverview="Our exterior painting service in Katy includes the full scope: power washing, wood rot repair, caulking, priming, and finish coats with premium exterior-grade materials. We use Sherwin-Williams Duration, SuperPaint, and Benjamin Moore Aura Exterior. A typical project takes 4 to 7 business days, and every job is backed by our 5-year written exterior warranty."
      whyChooseUs={[
        "We know Katy communities — Cinco Ranch, Cross Creek Ranch, Elyson, Firethorne — and how to work with each HOA.",
        "Experience with both new construction touch-ups and full repaints on 10-20 year old homes.",
        "5-year written exterior warranty — the longest in the Houston metro area.",
        "Daily SMS photo updates so you can monitor progress from anywhere.",
        "Bilingual foreman dedicated to your job, with a direct phone line."
      ]}
      priceRange="$5,800 – $19,500"
      priceMin={5800}
      priceMax={19500}
      priceDetails="Exterior painting in Katy typically ranges from $5,800 to $19,500 for a complete repaint, depending on home size, stories, substrate type, and prep complexity."
      faqs={[
        {
          question: "How long does an exterior project take in Katy?",
          answer: "For a typical Katy home (2,800 to 5,000 sqft), a full exterior repaint takes between 4 and 7 business days, weather permitting."
        },
        {
          question: "What paint brands do you use for exteriors?",
          answer: "We use Sherwin-Williams Duration and SuperPaint, as well as Benjamin Moore Aura Exterior."
        },
        {
          question: "Do you work with Katy area HOAs?",
          answer: "Yes — we're familiar with the HOA requirements in Cinco Ranch, Cross Creek Ranch, Elyson, and other Katy communities."
        },
        {
          question: "How much does exterior painting cost in Katy?",
          answer: "Exterior painting typically ranges from $5,800 to $19,500 for a complete repaint."
        },
        {
          question: "What's included in your 5-year warranty?",
          answer: "Our warranty covers peeling, flaking, blistering, and adhesion failures caused by improper preparation or application."
        },
        {
          question: "When should I repaint my Katy home's exterior?",
          answer: "Most Katy homes need repainting every 7-10 years. Signs include fading, chalking, peeling, or visible wear on trim and siding."
        }
      ]}
      testimonials={[
        {
          quote: "They did an amazing job on our Cinco Ranch home. The prep work and finish quality exceeded our expectations.",
          name: "Michelle & David R.",
          location: "Cinco Ranch"
        },
        {
          quote: "Our 15-year-old home looks brand new. The 5-year warranty gave us confidence.",
          name: "Brandon T.",
          location: "Cross Creek Ranch"
        },
        {
          quote: "Professional, on time, and outstanding results. Highly recommend for any Katy homeowner.",
          name: "Sandra L.",
          location: "Firethorne"
        }
      ]}
      relatedPages={[
        { title: "Exterior Painting Memorial", href: "/exterior-painting-memorial" },
        { title: "Exterior Painting Tanglewood", href: "/exterior-painting-tanglewood" },
        { title: "Exterior Painting Bellaire", href: "/exterior-painting-bellaire-west-university" },
        { title: "Exterior Painting The Heights", href: "/exterior-painting-the-heights" },
        { title: "Exterior Painting Sugar Land", href: "/exterior-painting-sugar-land" },
        { title: "Exterior Painting Cypress", href: "/exterior-painting-cypress-bridgeland" }
      ]}
      warrantyYears={5}
      warrantyType="Exterior"
    />
  )
}
