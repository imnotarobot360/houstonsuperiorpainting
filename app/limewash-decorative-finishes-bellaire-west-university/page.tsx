import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/limewash-decorative-finishes-bellaire-west-university',
  },
  title: "Limewash & Decorative Finishes Bellaire & West University",
  description: "Premium limewash and decorative finishes in Bellaire and West University Place. Free quote — call (346) 594-5960.",
}

export default function LimewashBellaireWestUPage() {
  return (
    <GeoServicePageTemplate
      service="Limewash & Decorative Finishes"
      serviceSlug="limewash-decorative-finishes"
      zone="Bellaire & West University, TX"
      zoneSlug="bellaire-west-university"
      metaTitle="Limewash & Decorative Finishes Bellaire & West University | Houston Superior Painting"
      metaDescription="Premium limewash and decorative finishes in Bellaire and West University Place."
      h1="Limewash & Decorative Finishes in Bellaire and West University Place, Houston, TX"
      heroSubheading="Bring European elegance to your home with authentic limewash and decorative finishes — timeless beauty, breathable walls, and a look that only improves with age."
      introLocal="Bellaire and West University homeowners appreciate distinctive design. Limewash and decorative finishes offer a sophisticated alternative to conventional paint, creating depth, texture, and character. Houston Superior Painting has applied limewash and decorative finishes throughout these neighborhoods, transforming both mid-century homes and new construction."
      serviceOverview="Our limewash and decorative finish services include authentic lime-based washes for brick and stucco, Roman Clay and Venetian plaster for interior walls, and specialty texture techniques. We use premium materials from Romabio, Portola Paints, and Master of Plaster. A typical project takes 3 to 7 business days."
      whyChooseUs={[
        "Authentic limewash technique using premium lime-based materials.",
        "Experience with both mid-century brick homes and contemporary new builds.",
        "Trained in Roman Clay, Venetian plaster, and specialty decorative techniques.",
        "Daily SMS photo updates so you can monitor progress.",
        "Breathable finishes essential for Houston's humid climate."
      ]}
      priceRange="$6,500 – $20,000"
      priceMin={6500}
      priceMax={20000}
      priceDetails="Limewash and decorative finishes in Bellaire and West University typically range from $6,500 to $20,000, depending on home size and finish complexity."
      faqs={[
        {
          question: "What is limewash?",
          answer: "Limewash is an ancient finish made from limestone that creates beautiful depth and character."
        },
        {
          question: "How long does limewash last?",
          answer: "Authentic limewash can last 15-20+ years and develops a beautiful patina."
        },
        {
          question: "Can you limewash my brick home?",
          answer: "Yes — limewash is ideal for brick and creates a durable, breathable finish."
        },
        {
          question: "What interior finishes do you offer?",
          answer: "We offer Roman Clay, Venetian plaster, lime plaster, and specialty textures."
        },
        {
          question: "How much does limewash cost?",
          answer: "Exterior limewash ranges from $4-8 per sqft; interior finishes from $12-20 per sqft."
        },
        {
          question: "Is limewash better than painting brick?",
          answer: "Yes — limewash is breathable and creates a more sophisticated aesthetic."
        }
      ]}
      testimonials={[
        {
          quote: "They transformed our 1960s brick ranch beautifully. The limewash look is perfect.",
          name: "Jennifer K.",
          location: "Bellaire"
        },
        {
          quote: "Roman Clay in our entry is a showstopper. Worth the investment.",
          name: "Michael & Sarah T.",
          location: "West University Place"
        },
        {
          quote: "Professional and talented. They understood exactly what we wanted.",
          name: "Robert L.",
          location: "West University Place"
        }
      ]}
      relatedPages={[
        { title: "Limewash Memorial", href: "/limewash-decorative-finishes-memorial" },
        { title: "Limewash Tanglewood", href: "/limewash-decorative-finishes-tanglewood" },
        { title: "Limewash The Heights", href: "/limewash-decorative-finishes-the-heights" },
        { title: "Limewash Sugar Land", href: "/limewash-decorative-finishes-sugar-land" },
        { title: "Limewash Katy", href: "/limewash-decorative-finishes-katy-cinco-ranch" },
        { title: "Limewash Cypress", href: "/limewash-decorative-finishes-cypress-bridgeland" }
      ]}
      warrantyYears={5}
      warrantyType="Limewash"
    />
  )
}
