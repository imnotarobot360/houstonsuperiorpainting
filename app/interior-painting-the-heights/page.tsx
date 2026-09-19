import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/interior-painting-the-heights',
  },
  title: "Interior Painting The Heights | Houston Superior Painting",
  description: "Premium interior painting in The Heights, Houston. 5-star reviews, written warranty, family-owned. Free quote — call (346) 594-5960.",
}

export default function InteriorPaintingHeightsPage() {
  return (
    <GeoServicePageTemplate
      service="Interior Painting"
      serviceSlug="interior-painting"
      zone="The Heights, Houston, TX"
      zoneSlug="the-heights"
      metaTitle="Interior Painting The Heights | Houston Superior Painting"
      metaDescription="Premium interior painting in The Heights, Houston. 5-star reviews, written warranty, family-owned."
      h1="Interior Painting in The Heights, Houston, TX"
      heroSubheading="The painting team Heights homeowners trust to deliver flawless interior painting — prepped properly, finished beautifully, and warrantied in writing."
      introLocal="When Heights homeowners search for a painter, they're looking for a team that understands the unique architectural character of this historic neighborhood. From beautifully restored Victorian homes to sleek modern new construction, Houston Superior Painting has completed projects throughout The Heights, Woodland Heights, and Norhill, and our process respects the craftsmanship these homes deserve."
      serviceOverview="Our interior painting service in The Heights includes the full scope, from consultation through final inspection. We use premium-tier materials — Sherwin-Williams Emerald, Benjamin Moore Aura, and Behr Marquee (low-VOC) — selected for their durability in Houston's humid climate. A typical project takes 3 to 7 business days, and every job is backed by our 3-year written workmanship warranty + free touch-ups during the first 12 months."
      whyChooseUs={[
        "We know the architectural styles of The Heights — historic bungalows, Craftsman homes, Victorian restorations, and modern new builds — and how to finish each substrate correctly.",
        "EPA Lead-Safe Certified for pre-1978 homes, which are common in The Heights.",
        "Daily SMS photo updates so you can monitor progress from anywhere.",
        "Bilingual foreman dedicated to your job, with a direct phone line.",
        "3-year written workmanship warranty + free touch-ups during the first 12 months."
      ]}
      priceRange="$4,200 – $16,800"
      priceMin={4200}
      priceMax={16800}
      priceDetails="Interior painting in The Heights typically ranges from $4,200 to $16,800 for a whole-home repaint, depending on square footage, ceiling height, trim complexity, and historic detailing. Single rooms typically run $550 to $1,500."
      faqs={[
        {
          question: "How long does an interior painting project take in The Heights?",
          answer: "For a typical Heights home (1,800 to 4,500 sqft), a full interior repaint takes between 3 and 6 business days. Historic homes with detailed trim may take slightly longer."
        },
        {
          question: "Are you certified to work on older Heights homes?",
          answer: "Yes — we are EPA Lead-Safe RRP Certified, which is required for homes built before 1978. Many Heights bungalows and Victorian homes fall into this category."
        },
        {
          question: "Will I need to move out during the project?",
          answer: "No. We work room by room and use low-VOC paint. We protect floors and furniture with drop cloths and plastic sheeting."
        },
        {
          question: "How much does interior painting cost in The Heights?",
          answer: "Interior painting typically ranges from $4,200 to $16,800 for a whole-home repaint. Single rooms run $550 to $1,500."
        },
        {
          question: "Do you have experience with historic homes?",
          answer: "Yes — we've painted dozens of historic Heights homes, including Victorian restorations with original millwork. We understand how to properly prep and paint these surfaces."
        },
        {
          question: "What's included in your warranty?",
          answer: "Every project includes a 3-year written workmanship warranty plus 12 months of free touch-ups. The warranty is transferable."
        }
      ]}
      testimonials={[
        {
          quote: "They understood the character of our 1920s bungalow and delivered a beautiful finish that respects the home's history.",
          name: "Amanda S.",
          location: "Woodland Heights"
        },
        {
          quote: "Professional, punctual, and the results exceeded our expectations. The Heights deserves painters who get it.",
          name: "Chris & Kelly M.",
          location: "The Heights"
        },
        {
          quote: "The prep work on our Victorian trim was meticulous. You can tell they take pride in their craft.",
          name: "Daniel R.",
          location: "Norhill"
        }
      ]}
      relatedPages={[
        { title: "Interior Painting Memorial", href: "/interior-painting-memorial" },
        { title: "Interior Painting Tanglewood", href: "/interior-painting-tanglewood" },
        { title: "Interior Painting Bellaire", href: "/interior-painting-bellaire-west-university" },
        { title: "Interior Painting Sugar Land", href: "/interior-painting-sugar-land" },
        { title: "Interior Painting Katy", href: "/interior-painting-katy-cinco-ranch" },
        { title: "Interior Painting Cypress", href: "/interior-painting-cypress-bridgeland" }
      ]}
      warrantyYears={3}
      warrantyType="Interior"
    />
  )
}
