import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/limewash-decorative-finishes-katy-cinco-ranch',
  },
  title: "Limewash & Decorative Finishes Katy & Cinco Ranch",
  description: "Premium limewash and decorative finishes in Katy and Cinco Ranch, TX. Free quote — call (346) 594-5960.",
}

export default function LimewashKatyPage() {
  return (
    <GeoServicePageTemplate
      service="Limewash & Decorative Finishes"
      serviceSlug="limewash-decorative-finishes"
      zone="Katy & Cinco Ranch, TX"
      zoneSlug="katy-cinco-ranch"
      metaTitle="Limewash & Decorative Finishes Katy & Cinco Ranch | Houston Superior Painting"
      metaDescription="Premium limewash and decorative finishes in Katy and Cinco Ranch, TX."
      h1="Limewash & Decorative Finishes in Katy and Cinco Ranch, TX"
      heroSubheading="Bring European elegance to your Katy home with authentic limewash and decorative finishes — timeless beauty, breathable walls, and a look that only improves with age."
      introLocal="Katy and Cinco Ranch homeowners seeking distinctive design are discovering limewash and decorative finishes. These sophisticated techniques offer an elegant alternative to conventional paint. Houston Superior Painting has applied limewash and decorative finishes throughout Cinco Ranch, Cross Creek Ranch, Elyson, and Firethorne."
      serviceOverview="Our limewash and decorative finish services include authentic lime-based washes for brick and stucco, Roman Clay and Venetian plaster for interior walls, and specialty texture techniques. We use premium materials from Romabio, Portola Paints, and Master of Plaster. A typical project takes 3 to 7 business days."
      whyChooseUs={[
        "Authentic limewash technique using premium lime-based materials.",
        "Experience with Katy's diverse home styles and substrates.",
        "Trained in Roman Clay, Venetian plaster, and specialty decorative techniques.",
        "Daily SMS photo updates so you can monitor progress.",
        "Breathable finishes essential for Houston's humid climate."
      ]}
      priceRange="$5,500 – $17,000"
      priceMin={5500}
      priceMax={17000}
      priceDetails="Limewash and decorative finishes in Katy typically range from $5,500 to $17,000, depending on home size and finish complexity."
      faqs={[
        {
          question: "What is limewash?",
          answer: "Limewash is an ancient finish made from limestone that creates beautiful depth and character."
        },
        {
          question: "Can you limewash my brick home?",
          answer: "Yes — limewash is perfect for brick and creates a durable, breathable finish."
        },
        {
          question: "How long does limewash last?",
          answer: "Authentic limewash can last 15-20+ years and develops a beautiful patina."
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
          question: "Is limewash a good investment?",
          answer: "Yes — limewash adds distinctive curb appeal and can increase home value."
        }
      ]}
      testimonials={[
        {
          quote: "They transformed our Cinco Ranch home with limewash. We get compliments constantly.",
          name: "Michelle & David R.",
          location: "Cinco Ranch"
        },
        {
          quote: "The Roman Clay accent wall is the highlight of our home.",
          name: "Brandon T.",
          location: "Cross Creek Ranch"
        },
        {
          quote: "Professional and talented. They delivered exactly what we wanted.",
          name: "Sandra L.",
          location: "Firethorne"
        }
      ]}
      relatedPages={[
        { title: "Limewash Memorial", href: "/limewash-decorative-finishes-memorial" },
        { title: "Limewash Tanglewood", href: "/limewash-decorative-finishes-tanglewood" },
        { title: "Limewash Bellaire", href: "/limewash-decorative-finishes-bellaire-west-university" },
        { title: "Limewash The Heights", href: "/limewash-decorative-finishes-the-heights" },
        { title: "Limewash Sugar Land", href: "/limewash-decorative-finishes-sugar-land" },
        { title: "Limewash Cypress", href: "/limewash-decorative-finishes-cypress-bridgeland" }
      ]}
      warrantyYears={5}
      warrantyType="Limewash"
    />
  )
}
