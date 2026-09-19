import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/exterior-painting-the-heights',
  },
  title: "Exterior Painting The Heights | Houston Superior Painting",
  description: "Premium exterior painting in The Heights, Houston. 5-year warranty, 5-star reviews, family-owned. Free quote — call (346) 594-5960.",
}

export default function ExteriorPaintingHeightsPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="The Heights, Houston, TX"
      zoneSlug="the-heights"
      metaTitle="Exterior Painting The Heights | Houston Superior Painting"
      metaDescription="Premium exterior painting in The Heights, Houston. 5-year warranty, EPA Lead-Safe Certified."
      h1="Exterior Painting in The Heights, Houston, TX"
      heroSubheading="The painting team Heights homeowners trust to deliver flawless exterior painting — prepped for Houston weather, finished beautifully, and backed by a 5-year written warranty."
      introLocal="When Heights homeowners search for an exterior painter, they're looking for a team that respects the historic character of the neighborhood while protecting homes from Houston's demanding climate. From beautifully restored Victorian bungalows to sleek modern builds, Houston Superior Painting has protected and beautified exteriors throughout The Heights, Woodland Heights, and Norhill."
      serviceOverview="Our exterior painting service in The Heights includes the full scope: power washing, wood rot repair, caulking, priming, and finish coats with premium exterior-grade materials. We're EPA Lead-Safe Certified for pre-1978 homes, which is essential in The Heights. A typical project takes 5 to 9 business days, and every job is backed by our 5-year written exterior warranty."
      whyChooseUs={[
        "Extensive experience with historic Heights architecture — Victorian, Craftsman, and bungalow restoration.",
        "EPA Lead-Safe RRP Certified for pre-1978 homes — required for much of The Heights housing stock.",
        "5-year written exterior warranty — the longest in the Houston metro area.",
        "Daily SMS photo updates so you can monitor progress from anywhere.",
        "Bilingual foreman dedicated to your job, with a direct phone line."
      ]}
      priceRange="$5,200 – $19,500"
      priceMin={5200}
      priceMax={19500}
      priceDetails="Exterior painting in The Heights typically ranges from $5,200 to $19,500 for a complete repaint, depending on home size, stories, historic detailing, and prep complexity."
      faqs={[
        {
          question: "Are you certified to work on older Heights homes?",
          answer: "Yes — we are EPA Lead-Safe RRP Certified, which is required for homes built before 1978. Many Heights bungalows and Victorian homes require this certification."
        },
        {
          question: "How long does an exterior project take in The Heights?",
          answer: "For a typical Heights home, a full exterior repaint takes between 5 and 9 business days. Historic homes with detailed trim may take longer."
        },
        {
          question: "Do you repair wood rot on historic homes?",
          answer: "Yes — we specialize in wood rot repair for historic Heights homes. We use epoxy consolidants and dutchman repairs to preserve original materials when possible."
        },
        {
          question: "How much does exterior painting cost in The Heights?",
          answer: "Exterior painting typically ranges from $5,200 to $19,500 for a complete repaint."
        },
        {
          question: "What's included in your 5-year warranty?",
          answer: "Our warranty covers peeling, flaking, blistering, and adhesion failures caused by improper preparation or application."
        },
        {
          question: "Can you match historic paint colors?",
          answer: "Yes — we can match original colors or help you select historically appropriate palettes for your Heights home."
        }
      ]}
      testimonials={[
        {
          quote: "They understood our 1920s bungalow and delivered a finish that honors its history. The lead-safe certification was essential.",
          name: "Amanda S.",
          location: "Woodland Heights"
        },
        {
          quote: "Outstanding work on our Victorian exterior. The wood rot repair was exceptional.",
          name: "Chris & Kelly M.",
          location: "The Heights"
        },
        {
          quote: "They preserved the character of our historic home while giving it protection for years to come.",
          name: "Daniel R.",
          location: "Norhill"
        }
      ]}
      relatedPages={[
        { title: "Exterior Painting Memorial", href: "/exterior-painting-memorial" },
        { title: "Exterior Painting Tanglewood", href: "/exterior-painting-tanglewood" },
        { title: "Exterior Painting Bellaire", href: "/exterior-painting-bellaire-west-university" },
        { title: "Exterior Painting Sugar Land", href: "/exterior-painting-sugar-land" },
        { title: "Exterior Painting Katy", href: "/exterior-painting-katy-cinco-ranch" },
        { title: "Exterior Painting Cypress", href: "/exterior-painting-cypress-bridgeland" }
      ]}
      warrantyYears={5}
      warrantyType="Exterior"
    />
  )
}
