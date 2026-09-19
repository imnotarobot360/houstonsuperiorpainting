import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/limewash-decorative-finishes-the-heights',
  },
  title: "Limewash & Decorative Finishes The Heights",
  description: "Premium limewash and decorative finishes in The Heights, Houston. European-style elegance. Free quote — call (346) 594-5960.",
}

export default function LimewashHeightsPage() {
  return (
    <GeoServicePageTemplate
      service="Limewash & Decorative Finishes"
      serviceSlug="limewash-decorative-finishes"
      zone="The Heights, Houston, TX"
      zoneSlug="the-heights"
      metaTitle="Limewash & Decorative Finishes The Heights | Houston Superior Painting"
      metaDescription="Premium limewash and decorative finishes in The Heights, Houston."
      h1="Limewash & Decorative Finishes in The Heights, Houston, TX"
      heroSubheading="Bring European elegance to your Heights home with authentic limewash and decorative finishes — timeless beauty, breathable walls, and a look that only improves with age."
      introLocal="The Heights is known for its distinctive character, and limewash finishes complement that aesthetic perfectly. Whether you're refreshing a historic bungalow's exterior or adding Roman Clay to a modern new build, Houston Superior Painting brings authentic European techniques to The Heights, Woodland Heights, and Norhill."
      serviceOverview="Our limewash and decorative finish services include authentic lime-based washes for brick and stucco, Roman Clay and Venetian plaster for interior walls, and specialty texture techniques. We use premium materials from Romabio, Portola Paints, and Master of Plaster. A typical project takes 3 to 7 business days."
      whyChooseUs={[
        "Authentic limewash technique using premium lime-based materials.",
        "Experience with historic Heights architecture and contemporary new builds.",
        "EPA Lead-Safe Certified for pre-1978 homes common in The Heights.",
        "Trained in Roman Clay, Venetian plaster, and specialty decorative techniques.",
        "Breathable finishes essential for Houston's humid climate."
      ]}
      priceRange="$5,500 – $18,000"
      priceMin={5500}
      priceMax={18000}
      priceDetails="Limewash and decorative finishes in The Heights typically range from $5,500 to $18,000, depending on home size and finish complexity."
      faqs={[
        {
          question: "What is limewash?",
          answer: "Limewash is an ancient finish made from limestone that creates beautiful depth and character."
        },
        {
          question: "Is limewash appropriate for historic Heights homes?",
          answer: "Yes — limewash has been used for centuries and complements historic architecture beautifully."
        },
        {
          question: "Can you limewash my brick bungalow?",
          answer: "Yes — limewash is perfect for brick and creates a durable, breathable finish."
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
          question: "How does limewash age?",
          answer: "Limewash develops a beautiful patina over time and can last 15-20+ years."
        }
      ]}
      testimonials={[
        {
          quote: "They gave our 1920s bungalow a beautiful limewashed exterior. It fits the Heights perfectly.",
          name: "Amanda S.",
          location: "Woodland Heights"
        },
        {
          quote: "The Roman Clay accent wall is stunning. True craftsmanship.",
          name: "Chris & Kelly M.",
          location: "The Heights"
        },
        {
          quote: "They understood the historic character of our home and enhanced it beautifully.",
          name: "Daniel R.",
          location: "Norhill"
        }
      ]}
      relatedPages={[
        { title: "Limewash Memorial", href: "/limewash-decorative-finishes-memorial" },
        { title: "Limewash Tanglewood", href: "/limewash-decorative-finishes-tanglewood" },
        { title: "Limewash Bellaire", href: "/limewash-decorative-finishes-bellaire-west-university" },
        { title: "Limewash Sugar Land", href: "/limewash-decorative-finishes-sugar-land" },
        { title: "Limewash Katy", href: "/limewash-decorative-finishes-katy-cinco-ranch" },
        { title: "Limewash Cypress", href: "/limewash-decorative-finishes-cypress-bridgeland" }
      ]}
      warrantyYears={5}
      warrantyType="Limewash"
    />
  )
}
