import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "Painters The Woodlands TX — Houston Superior Painting",
  description: "Expert painters in The Woodlands TX. Interior, exterior, cabinet painting for Creekside, Sterling Ridge, Alden Bridge. 5-year warranty. Free estimates.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-the-woodlands-tx',
  },
  openGraph: {
    title: "Painters The Woodlands TX — Houston Superior Painting",
    description: "Expert painters in The Woodlands TX. Interior, exterior, cabinet painting for Creekside, Sterling Ridge, Alden Bridge. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/painters-the-woodlands-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-painters-woodlands.jpg",
      width: 1200,
      height: 630,
      alt: "Painters The Woodlands TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painters The Woodlands TX — Houston Superior Painting",
    description: "Expert painters in The Woodlands TX. Interior, exterior, cabinet painting for Creekside, Sterling Ridge, Alden Bridge.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-painters-woodlands.jpg"],
  },
}

export default function PaintersTheWoodlandsTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "The Woodlands",
  slug: "painters-the-woodlands-tx",
  description: "Professional house painting services in The Woodlands, TX",
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="The Woodlands"
          state="TX"
          heroHeadline="House Painters for The Woodlands, Texas"
          heroDescription="The Woodlands deserves painting professionals who match its standard of excellence. Our meticulous craftsmanship makes us the choice for discerning homeowners."
          aboutCity={`The Woodlands is one of Houston's most prestigious master-planned communities, and painting homes here requires a special level of care and expertise. The beautiful wooded setting, custom architecture, and high property values mean homeowners expect nothing less than exceptional results.

We've earned the trust of homeowners throughout The Woodlands—from the established villages like Panther Creek and Indian Springs to the newer communities in Creekside Park. Our crews understand the unique considerations of painting in this forested environment: proper preparation for homes shaded by trees, moisture management, and selecting colors that complement the natural surroundings.

The Woodlands' strict design standards and architectural review committees mean color selection matters. We're experienced in working within these guidelines and can help you choose colors that will gain approval while achieving your vision. Our attention to detail, clean work practices, and respect for your property align perfectly with what Woodlands residents expect.`}
          whyChooseUs={[
            "The Woodlands expertise: Trusted by homeowners in every village",
            "Design standard knowledge: We help navigate architectural review requirements",
            "Wooded environment experience: Proper prep for shade and moisture conditions",
            "Premium craftsmanship: Custom homes deserve expert execution",
            "Respectful crews: We protect your landscaping and property",
            "5-year warranty: Complete confidence in our work"
          ]}
          services={[
            {
              title: "Interior Painting",
              description: "Elevate your Woodlands home with expertly applied interior finishes. We handle custom details, tall ceilings, and specialty textures with precision.",
              href: "/interior-painting-houston-tx"
            },
            {
              title: "Exterior House Painting",
              description: "Protect your Woodlands home's exterior while enhancing its natural beauty. Coatings designed for wooded, humid environments.",
              href: "/exterior-painting-houston-tx"
            },
            {
              title: "Cabinet Refinishing",
              description: "Transform your kitchen with professional cabinet painting. Factory-quality spray finishes that complement your Woodlands home.",
              href: "/cabinet-refinishing-houston-tx"
            },
            {
              title: "Drywall Repair",
              description: "Fix cracks, settling damage, and imperfections before painting for flawless results.",
              href: "/drywall-repair-houston-tx"
            },
            {
              title: "Pressure Washing",
              description: "Professional pressure washing for Woodlands homes. Clean mold, mildew, and debris from wooded environment.",
              href: "/pressure-washing-houston-tx"
            },
            {
              title: "Limewash Brick",
              description: "Transform your Woodlands brick home with elegant European limewash finishes.",
              href: "/limewash-brick-painting-houston-tx"
            },
            {
              title: "Commercial Painting",
              description: "Professional painting for Woodlands businesses along I-45, Market Street, and surrounding commercial areas.",
              href: "/commercial-painting-houston-tx"
            },
            {
              title: "Garage Floor Epoxy",
              description: "Durable epoxy coatings for Woodlands garages that resist stains and last for years.",
              href: "https://houstonsuperiorepoxy.com/"
            }
          ]}
          neighborhoods={[
            "Panther Creek",
            "Indian Springs",
            "Cochran's Crossing",
            "Grogan's Mill",
            "Sterling Ridge",
            "Alden Bridge",
            "College Park",
            "Creekside Park",
            "Carlton Woods",
            "East Shore",
            "Woodlands Reserve",
            "Capstone"
          ]}
          testimonial={{
            quote: "Finding painters who meet The Woodlands' standards isn't easy. These guys exceeded expectations—the prep work, the paint quality, the cleanup. Our Panther Creek home looks incredible. Worth every penny.",
            author: "Susan and James K.",
            location: "Panther Creek, The Woodlands"
          }}
          faqs={[
            {
              question: "Do you understand The Woodlands' architectural standards?",
              answer: "Yes. We've worked within The Woodlands' design guidelines for years and understand the approval process. We can help you select colors that comply with your village's standards while achieving your aesthetic goals."
            },
            {
              question: "How do you handle painting in The Woodlands' wooded environment?",
              answer: "The tree canopy creates unique conditions—more shade, higher moisture, and organic debris. We adjust our preparation process accordingly, ensuring proper surface cleaning, moisture testing, and primer selection for lasting results."
            },
            {
              question: "What's the typical investment for painting a Woodlands home?",
              answer: `The Woodlands homes often feature custom details that affect pricing. Interior painting typically runs ${PRICES_2026.interiorPerSqFt} per square foot, about ${PRICES_2026.fullInterior2500} for a 2,500 sq ft home. Exteriors run ${PRICES_2026.exteriorPerHome} per home; a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}. We provide detailed estimates specific to your home.`
            },
            {
              question: "How far in advance should I schedule?",
              answer: "We recommend booking 3-4 weeks ahead, especially during peak seasons (spring and fall). However, we understand projects sometimes come up quickly—contact us and we'll do our best to accommodate your timeline."
            }
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
