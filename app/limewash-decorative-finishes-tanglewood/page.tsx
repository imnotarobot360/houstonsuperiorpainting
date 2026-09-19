import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/limewash-decorative-finishes-tanglewood',
  },
  title: "Limewash & Decorative Finishes Tanglewood",
  description: "Premium limewash and decorative finishes in Tanglewood, Houston. European-style elegance. Free quote — call (346) 594-5960.",
}

export default function LimewashTanglewoodPage() {
  return (
    <GeoServicePageTemplate
      service="Limewash & Decorative Finishes"
      serviceSlug="limewash-decorative-finishes"
      zone="Tanglewood, Houston, TX"
      zoneSlug="tanglewood"
      metaTitle="Limewash & Decorative Finishes Tanglewood | Houston Superior Painting"
      metaDescription="Premium limewash and decorative finishes in Tanglewood, Houston. European-style elegance."
      h1="Limewash & Decorative Finishes in Tanglewood, Houston, TX"
      heroSubheading="Bring European elegance to your Tanglewood home with authentic limewash and decorative finishes — timeless beauty, breathable walls, and a look that only improves with age."
      introLocal="Tanglewood homeowners appreciate sophisticated design. Limewash and decorative finishes offer an elegant alternative to conventional paint, creating depth, texture, and character that standard finishes cannot match. Houston Superior Painting has applied limewash and decorative finishes throughout Tanglewood proper, Briargrove, and Briar Hollow."
      serviceOverview="Our limewash and decorative finish services include authentic lime-based washes for brick and stucco, Roman Clay and Venetian plaster for interior walls, and specialty texture techniques. We use premium materials from Romabio, Portola Paints, and Master of Plaster. A typical project takes 3 to 7 business days."
      whyChooseUs={[
        "Authentic limewash technique using premium lime-based materials.",
        "Experience with Tanglewood's traditional brick colonials and transitional architecture.",
        "Trained in Roman Clay, Venetian plaster, and specialty decorative techniques.",
        "Daily SMS photo updates so you can monitor progress.",
        "Breathable finishes essential for Houston's humid climate."
      ]}
      priceRange="$7,500 – $22,000"
      priceMin={7500}
      priceMax={22000}
      priceDetails="Limewash and decorative finishes in Tanglewood typically range from $7,500 to $22,000, depending on home size, substrate type, and finish complexity."
      faqs={[
        {
          question: "What is limewash?",
          answer: "Limewash is an ancient finish made from limestone that creates a soft, mottled appearance with beautiful depth and character."
        },
        {
          question: "How long does limewash last?",
          answer: "Authentic limewash can last 15-20+ years and develops a beautiful patina over time."
        },
        {
          question: "Can you limewash my brick home?",
          answer: "Yes — limewash is ideal for brick and creates a durable finish that won't peel."
        },
        {
          question: "What interior finishes do you offer?",
          answer: "We offer Roman Clay, Venetian plaster, lime plaster, and specialty texture techniques."
        },
        {
          question: "How much does limewash cost?",
          answer: "Exterior limewash ranges from $4-8 per sqft; interior finishes range from $12-20 per sqft."
        },
        {
          question: "Is limewash better than painting brick?",
          answer: "Yes — limewash is breathable and creates a more sophisticated aesthetic."
        }
      ]}
      testimonials={[
        {
          quote: "The limewash transformed our brick home beautifully. European elegance in Tanglewood.",
          name: "Jennifer R.",
          location: "Tanglewood proper"
        },
        {
          quote: "Roman Clay in our dining room is stunning. Worth every penny.",
          name: "Michael & Sarah K.",
          location: "Briargrove"
        },
        {
          quote: "They understood our vision perfectly. The finish has incredible depth.",
          name: "Robert L.",
          location: "Briar Hollow"
        }
      ]}
      relatedPages={[
        { title: "Limewash Memorial", href: "/limewash-decorative-finishes-memorial" },
        { title: "Limewash Bellaire", href: "/limewash-decorative-finishes-bellaire-west-university" },
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
