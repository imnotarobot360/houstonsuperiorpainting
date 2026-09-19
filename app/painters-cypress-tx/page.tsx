import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Painters Cypress TX — Houston Superior Painting",
  description: "Professional painters in Cypress TX. Interior, exterior, cabinet painting for Bridgeland, Towne Lake, Cypress Creek. 5-year warranty. Free estimates.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-cypress-tx',
  },
  openGraph: {
    title: "Painters Cypress TX — Houston Superior Painting",
    description: "Professional painters in Cypress TX. Interior, exterior, cabinet painting for Bridgeland, Towne Lake, Cypress Creek. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/painters-cypress-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-painters-cypress.jpg",
      width: 1200,
      height: 630,
      alt: "Painters Cypress TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painters Cypress TX — Houston Superior Painting",
    description: "Professional painters in Cypress TX. Interior, exterior, cabinet painting for Bridgeland, Towne Lake, Cypress Creek.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-painters-cypress.jpg"],
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Cypress',
    'geo.position': '29.9745;-95.6445',
    'ICBM': '29.9745, -95.6445',
  },
}

export default function PaintersCypressTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Cypress",
  slug: "painters-cypress-tx",
  description: "Professional interior, exterior, and cabinet painting services in Cypress, TX. Serving Bridgeland, Towne Lake, Cypress Creek Lakes, and all Cypress neighborhoods.",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Cypress"
          state="TX"
          heroHeadline="Trusted House Painters in Cypress, Texas"
          heroDescription="From Bridgeland to Cypress Creek Lakes, Cypress homeowners trust us for meticulous craftsmanship and reliable service. Experience the difference professional expertise makes."
          quickAnswer="Houston Superior Painting provides professional house painting in Cypress, TX. Interior painting costs $2.50-4.50/sq ft. Exterior painting costs $3,500-12,000 depending on home size. We serve Bridgeland, Towne Lake, Cypress Creek Lakes, Fairfield, and all Cypress neighborhoods. 5-year exterior warranty, 5-star Google rating, free estimates. Call (346) 594-5960."
          aboutCity={`Cypress is one of the Houston area's fastest-growing communities, and we've grown right alongside it. From painting new construction homes in Bridgeland to refreshing established properties in Cypress Creek, we know this area inside and out.

Cypress homeowners appreciate quality and value—and that's exactly what we deliver. Our crews understand the unique challenges of painting in Northwest Houston: the intense summer heat that can cause paint to fail prematurely, the humidity that requires proper preparation, and the occasional severe weather that demands durable exterior coatings.

We've built strong relationships with Cypress families over the years, with many customers calling us back for additional projects or referring us to their neighbors. That word-of-mouth reputation means everything to us, and we work hard to earn it on every single job.`}
          whyChooseUs={[
            "Cypress specialists: Hundreds of homes painted throughout Northwest Houston",
            "New construction expertise: We fix builder-grade paint jobs and make them flawless",
            "Premium durability: Paints and coatings designed to withstand Texas weather",
            "Flexible scheduling: We work around your family's routine",
            "Transparent pricing: Detailed estimates with no hidden fees",
            "Satisfaction guaranteed: We're not done until you're thrilled with the results"
          ]}
          services={[
            {
              title: "Interior Painting",
              description: "Elevate your Cypress home's interior with expert color selection and flawless application. From accent walls to whole-home repaints.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior House Painting",
              description: "Shield your Cypress home from sun, rain, and humidity with premium exterior paints that maintain their beauty for years.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing",
              description: "Give your Cypress kitchen a modern update. Our spray-applied finishes create a smooth, durable surface at a fraction of replacement cost.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair",
              description: "Fix cracks, nail pops, and settling damage in your Cypress home before painting for flawless results.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing",
              description: "Professional pressure washing for Cypress homes. Clean and prep surfaces before painting.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick",
              description: "Transform your Cypress brick home with authentic European limewash finishes.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting",
              description: "Professional painting for Cypress businesses, offices, and retail spaces. Minimal disruption with maximum impact.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy",
              description: "Durable epoxy coatings for Cypress garages that resist chemicals and look stunning.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Bridgeland",
            "Cypress Creek Lakes",
            "Towne Lake",
            "Fairfield",
            "Lakewood Forest",
            "Cypress Mill",
            "Longwood",
            "Cypress Crossing",
            "Black Horse Ranch",
            "Riata Ranch",
            "Preserve at Cypress Creek",
            "Stone Gate"
          ]}
          testimonial={{
            quote: "Living in Bridgeland, I wanted painters who understood newer homes. They identified and fixed issues with our builder paint job that I hadn't even noticed. The attention to detail was impressive.",
            author: "Jennifer L.",
            location: "Bridgeland, Cypress"
          }}
          faqs={[
            {
              question: "What areas of Cypress do you serve?",
              answer: "We serve all of Cypress including Bridgeland, Towne Lake, Cypress Creek Lakes, Fairfield, Lakewood Forest, and all surrounding communities. If you're in the Cypress-Tomball area, we can help."
            },
            {
              question: "How do you handle Cypress's hot summers when painting exteriors?",
              answer: "We schedule exterior work during optimal conditions—early morning or evening in summer—and use high-quality paints rated for extreme heat. We never paint in conditions that could compromise the finish."
            },
            {
              question: "Can you match my existing paint color?",
              answer: "Absolutely. We use professional color-matching technology to match any existing color. We can also help you select new colors with our complimentary color consultation."
            },
            {
              question: "Do you offer financing for painting projects in Cypress?",
              answer: "Yes, we offer flexible payment options for larger projects. Ask about our financing plans when you schedule your free estimate."
            }
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
