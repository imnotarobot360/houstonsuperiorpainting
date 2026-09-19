import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/limewash-decorative-finishes-memorial',
  },
  title: "Limewash & Decorative Finishes Memorial",
  description: "Premium limewash and decorative finishes in Memorial, Houston. European-style elegance for your home. Free quote — call (346) 594-5960.",
}

export default function LimewashMemorialPage() {
  return (
    <GeoServicePageTemplate
      service="Limewash & Decorative Finishes"
      serviceSlug="limewash-decorative-finishes"
      zone="Memorial, Houston, TX"
      zoneSlug="memorial"
      metaTitle="Limewash & Decorative Finishes Memorial | Houston Superior Painting"
      metaDescription="Premium limewash and decorative finishes in Memorial, Houston. European-style elegance."
      h1="Limewash & Decorative Finishes in Memorial, Houston, TX"
      heroSubheading="Bring European elegance to your Memorial home with authentic limewash and decorative finishes — timeless beauty, breathable walls, and a look that only improves with age."
      introLocal="Memorial homeowners appreciate distinctive design. Limewash and decorative finishes offer a sophisticated alternative to conventional paint, creating depth, texture, and character that standard finishes simply cannot match. Houston Superior Painting has applied limewash and decorative finishes throughout Memorial Park, Hunters Creek Village, and Bunker Hill, transforming homes with authentic European techniques."
      serviceOverview="Our limewash and decorative finish services include authentic lime-based washes for brick and stucco, Roman Clay and Venetian plaster for interior walls, and specialty texture techniques. We use premium materials from Romabio, Portola Paints, and Master of Plaster. A typical project takes 3 to 7 business days, and every application is backed by our craftsmanship guarantee."
      whyChooseUs={[
        "Authentic limewash technique using premium lime-based materials, not latex imitations.",
        "Experience with Memorial's brick colonials, stucco homes, and contemporary architecture.",
        "Trained in Roman Clay, Venetian plaster, and specialty decorative techniques.",
        "Daily SMS photo updates so you can monitor progress from anywhere.",
        "Breathable finishes that allow moisture to escape — essential for Houston's humid climate."
      ]}
      priceRange="$8,000 – $25,000"
      priceMin={8000}
      priceMax={25000}
      priceDetails="Limewash and decorative finishes in Memorial typically range from $8,000 to $25,000, depending on home size, substrate type, and finish complexity. Exterior limewash for brick ranges from $4-8 per sqft; interior Roman Clay ranges from $12-20 per sqft."
      faqs={[
        {
          question: "What is limewash and why choose it?",
          answer: "Limewash is an ancient finish made from limestone. It creates a soft, mottled appearance with beautiful depth and character. Unlike paint, it's breathable (allowing moisture to escape), naturally antimicrobial, and ages gracefully over time."
        },
        {
          question: "How long does limewash last?",
          answer: "Authentic limewash can last 15-20+ years on exterior surfaces. It develops a beautiful patina over time and can be refreshed with additional coats when desired."
        },
        {
          question: "Can you limewash my brick home?",
          answer: "Yes — limewash is ideal for brick. It penetrates and bonds with the porous surface, creating a durable finish that won't peel or flake like paint."
        },
        {
          question: "What decorative interior finishes do you offer?",
          answer: "We offer Roman Clay, Venetian plaster, lime plaster, and specialty texture techniques. Each creates unique depth and character for interior walls."
        },
        {
          question: "How much does limewash cost?",
          answer: "Exterior limewash typically ranges from $4-8 per sqft; interior decorative finishes range from $12-20 per sqft depending on technique."
        },
        {
          question: "Is limewash better than painting brick?",
          answer: "Yes — limewash is breathable and allows moisture to escape, while paint traps moisture which can cause damage over time. Limewash also creates a more sophisticated, European aesthetic."
        }
      ]}
      testimonials={[
        {
          quote: "They transformed our red brick colonial into a stunning white limewashed masterpiece. The finish has beautiful character.",
          name: "Catherine M.",
          location: "Hunters Creek Village"
        },
        {
          quote: "The Roman Clay finish in our living room is absolutely stunning. It's like living in a European villa.",
          name: "David & Lauren P.",
          location: "Memorial Park"
        },
        {
          quote: "They understood exactly what we wanted. The limewash has that perfect aged European look.",
          name: "Marcus T.",
          location: "Bunker Hill"
        }
      ]}
      relatedPages={[
        { title: "Limewash Tanglewood", href: "/limewash-decorative-finishes-tanglewood" },
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
