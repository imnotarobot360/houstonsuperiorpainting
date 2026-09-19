import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/interior-painting-bellaire-west-university',
  },
  title: "Interior Painting Bellaire & West University",
  description: "Premium interior painting in Bellaire and West University Place, Houston. 5-star reviews, written warranty. Free quote — call (346) 594-5960.",
}

export default function InteriorPaintingBellaireWestUPage() {
  return (
    <GeoServicePageTemplate
      service="Interior Painting"
      serviceSlug="interior-painting"
      zone="Bellaire & West University, TX"
      zoneSlug="bellaire-west-university"
      metaTitle="Interior Painting Bellaire & West University | Houston Superior Painting"
      metaDescription="Premium interior painting in Bellaire and West University Place, Houston. 5-star reviews, written warranty."
      h1="Interior Painting in Bellaire and West University Place, Houston, TX"
      heroSubheading="The painting team Bellaire and West University homeowners trust to deliver flawless interior painting — prepped properly, finished beautifully, and warrantied in writing."
      introLocal="When Bellaire and West University homeowners search for a painter, they're looking for a team that understands the unique architectural character of these established neighborhoods. From the classic ranch homes of Bellaire to the stately properties of West University Place, Houston Superior Painting has completed projects throughout these communities, and our process is built around preparation — the one thing that separates a 2-year paint job from a 10-year one."
      serviceOverview="Our interior painting service includes the full scope, from consultation through final inspection. We use premium-tier materials — Sherwin-Williams Emerald, Benjamin Moore Aura, and Behr Marquee (low-VOC) — selected for their durability in Houston's humid climate. A typical project takes 3 to 7 business days, and every job is backed by our 3-year written workmanship warranty + free touch-ups during the first 12 months."
      whyChooseUs={[
        "We know the architectural styles of Bellaire and West U — from 1950s ranch homes to contemporary new construction — and how to finish each substrate correctly.",
        "Familiar with local permit requirements and neighborhood guidelines.",
        "Daily SMS photo updates so you can monitor progress from anywhere.",
        "Bilingual foreman dedicated to your job, with a direct phone line.",
        "3-year written workmanship warranty + free touch-ups during the first 12 months."
      ]}
      priceRange="$5,800 – $18,500"
      priceMin={5800}
      priceMax={18500}
      priceDetails="Interior painting in Bellaire and West University typically ranges from $5,800 to $18,500 for a whole-home repaint, depending on square footage, ceiling height, and trim complexity. Single rooms typically run $600 to $1,600."
      faqs={[
        {
          question: "How long does an interior painting project take in Bellaire or West U?",
          answer: "For a typical home (2,500 to 5,000 sqft), a full interior repaint takes between 3 and 6 business days. We schedule a dedicated crew and work consecutive days."
        },
        {
          question: "What paint brands do you use?",
          answer: "We use Sherwin-Williams Emerald, Benjamin Moore Aura, and Behr Marquee. All are low-VOC and safe to be home during application."
        },
        {
          question: "Will I need to move out during the project?",
          answer: "No. We work room by room and use low-VOC paint. We protect floors and furniture with drop cloths and plastic sheeting."
        },
        {
          question: "How much does interior painting cost in Bellaire?",
          answer: "Interior painting typically ranges from $5,800 to $18,500 for a whole-home repaint. Single rooms run $600 to $1,600."
        },
        {
          question: "Do you provide color consultation?",
          answer: "Yes — every full-home project includes a complimentary color consultation with physical samples and digital mockups."
        },
        {
          question: "What's included in your warranty?",
          answer: "Every project includes a 3-year written workmanship warranty plus 12 months of free touch-ups. The warranty is transferable."
        }
      ]}
      testimonials={[
        {
          quote: "Outstanding work on our 1960s ranch home in Bellaire. They understood the character of our home and delivered a perfect finish.",
          name: "Jennifer K.",
          location: "Bellaire"
        },
        {
          quote: "Professional from start to finish. The daily photo updates gave us peace of mind while at work.",
          name: "Michael & Sarah T.",
          location: "West University Place"
        },
        {
          quote: "The attention to detail on our trim work was exceptional. Highly recommend for any West U homeowner.",
          name: "Robert L.",
          location: "West University Place"
        }
      ]}
      relatedPages={[
        { title: "Interior Painting Memorial", href: "/interior-painting-memorial" },
        { title: "Interior Painting Tanglewood", href: "/interior-painting-tanglewood" },
        { title: "Interior Painting The Heights", href: "/interior-painting-the-heights" },
        { title: "Interior Painting Sugar Land", href: "/interior-painting-sugar-land" },
        { title: "Interior Painting Katy", href: "/interior-painting-katy-cinco-ranch" },
        { title: "Interior Painting Cypress", href: "/interior-painting-cypress-bridgeland" }
      ]}
      warrantyYears={3}
      warrantyType="Interior"
    />
  )
}
