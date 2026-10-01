import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  title: "House Painters Tomball TX — Houston Superior Painting",
  description: "Professional painters in Tomball TX. Interior, exterior, cabinet painting for Lakewood Forest, Northpointe, Augusta Pines. 5-year warranty. Free estimates.",
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/painters-tomball-tx',
  },
  openGraph: {
    title: "House Painters Tomball TX — Houston Superior Painting",
    description: "Professional painters in Tomball TX. Interior, exterior, cabinet painting for Lakewood Forest, Northpointe, Augusta Pines. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/painters-tomball-tx",
    siteName: "Houston Superior Painting",
    type: "website",
    images: [{
      url: "https://houstonsuperiorpainting.com/images/og/og-painters-tomball.jpg",
      width: 1200,
      height: 630,
      alt: "Painters Tomball TX - Houston Superior Painting",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "House Painters Tomball TX — Houston Superior Painting",
    description: "Professional painters in Tomball TX. Interior, exterior, cabinet painting for Lakewood Forest, Northpointe, Augusta Pines.",
    images: ["https://houstonsuperiorpainting.com/images/og/og-painters-tomball.jpg"],
  },
}

export default function PaintersTomballTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocationBusinessSchema({
  city: "Tomball",
  slug: "painters-tomball-tx",
  areas: ["Tomball", "Magnolia", "Spring", "The Woodlands"],
          }))
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate
          city="Tomball"
          state="TX"
          heroHeadline="Professional House Painters in Tomball, TX"
          heroDescription="Transform your Tomball home with Houston Superior Painting. From historic downtown properties to new construction in master-planned communities, we deliver exceptional results with meticulous attention to detail."
          aboutCity={`Tomball has evolved from a historic railroad town into one of Northwest Houston's most desirable communities. The city blends small-town Texas charm with modern amenities, featuring everything from renovated historic homes near Main Street to contemporary builds in master-planned communities like Northpointe and Augusta Pines.

The Tomball area experiences the same challenging climate as the greater Houston region—intense summer heat, high humidity year-round, and occasional severe weather. These conditions demand painting contractors who understand proper surface preparation, moisture management, and product selection for lasting results.

Houston Superior Painting has served Tomball homeowners since 2019, building a reputation for quality craftsmanship and reliable service. Whether you're updating a charming bungalow in Old Town Tomball, refreshing a family home in Lakewood Forest, or painting a new build in Creekside Park, we bring the expertise and premium materials needed for beautiful, durable finishes.

We are fully insured, use Sherwin-Williams and Benjamin Moore paints exclusively, and back every project with our 5-year quality guarantee. Our team understands Tomball's diverse architectural styles—from traditional Texas ranch homes to craftsman-style builds and modern farmhouses.`}
          whyChooseUs={[
            "Tomball expertise: Trusted by homeowners throughout the area",
            "Historic home experience: Proper techniques for older properties",
            "Master-planned community knowledge: We know Northpointe, Augusta Pines, and more",
            "Premium materials: Sherwin-Williams and Benjamin Moore exclusively",
            "Clean, respectful crews: We protect your home and landscaping",
            "5-year warranty: Complete confidence in our work"
          ]}
        services={[
          {
            title: "Interior Painting",
            description: "Transform your Tomball home's interior with flawless walls and ceilings. From single rooms to complete repaints, we deliver brush-mark-free results.",
            href: "/interior-painting-houston-tx"
          },
          {
            title: "Exterior House Painting",
            description: "Protect your Tomball home from Texas heat, humidity, and storms with premium exterior coatings that maintain their beauty for years.",
            href: "/exterior-painting-houston-tx"
          },
          {
            title: "Cabinet Refinishing",
            description: "Update your Tomball kitchen with factory-smooth cabinet finishes. A fraction of replacement cost with stunning results.",
            href: "/cabinet-refinishing-houston-tx"
          },
          {
            title: "Drywall Repair",
            description: "Fix cracks, settling damage, and imperfections before painting for flawless results.",
            href: "/drywall-repair-houston-tx"
          },
          {
            title: "Pressure Washing",
            description: "Professional pressure washing for Tomball homes. Clean driveways, patios, and siding before painting.",
            href: "/pressure-washing-houston-tx"
          },
          {
            title: "Limewash Brick",
            description: "Transform your Tomball brick home with elegant European limewash finishes.",
            href: "/limewash-brick-painting-houston-tx"
          },
          {
            title: "Commercial Painting",
            description: "Professional painting for Tomball businesses along Main Street and FM 2920.",
            href: "/commercial-painting-houston-tx"
          },
          {
            title: "Garage Floor Epoxy",
            description: "Durable epoxy coatings for Tomball garages that resist stains and last for years.",
            href: "https://houstonsuperiorepoxy.com/"
          }
        ]}
        neighborhoods={[
          "Downtown Tomball",
          "Lakewood Forest",
          "Northpointe",
          "Augusta Pines",
          "Creekside Park",
          "Rosehill",
          "Decker Prairie",
          "Spring Creek",
          "Willow Creek Farms",
          "Timber Lane",
          "Cherry Street Historic District",
          "Tomball Town Center"
        ]}
        faqs={[
          {
            question: "How much does it cost to paint a house in Tomball?",
            answer: `Interior painting in Tomball typically runs ${PRICES_2026.interiorPerSqFt} per square foot, while exterior painting ranges from ${PRICES_2026.exteriorPerSqFt} per square foot. A 2,500 sq ft home interior runs ${PRICES_2026.fullInterior2500}, and a 2,500 sq ft two-story exterior ${PRICES_2026.exterior2500TwoStory}. We provide free detailed estimates for all Tomball properties.`
          },
          {
            question: "Do you paint historic homes in Old Town Tomball?",
            answer: "Absolutely. We have extensive experience with Tomball's historic properties near Main Street and the Cherry Street area. We use appropriate techniques and materials that preserve the character of older homes while providing modern protection."
          },
          {
            question: "How long does exterior paint last in Tomball's climate?",
            answer: "With proper preparation and premium paints, exterior paint in Tomball lasts 7-10 years. We use Sherwin-Williams Duration and SuperPaint specifically formulated for Texas heat and humidity, backed by our 5-year guarantee."
          },
          {
            question: "Do you work in the newer Tomball subdivisions?",
            answer: "Yes, we serve all Tomball communities including Northpointe, Augusta Pines, Lakewood Forest, Creekside Park, and newer developments along FM 2920 and Tomball Parkway."
          },
          {
            question: "Can you match paint colors for touch-ups on my Tomball home?",
            answer: "Yes, we use professional color-matching technology to perfectly match existing paint colors. This is especially helpful for touch-ups, accent walls, or when repainting a single room to match the rest of your home."
          },
          {
            question: "What's the best time of year to paint exteriors in Tomball?",
            answer: "Spring (March-May) and fall (September-November) offer the best conditions for exterior painting in Tomball—moderate temperatures and lower humidity. However, we can paint year-round by adjusting our schedule around weather conditions."
          }
        ]}
        testimonial={{
          quote: "We needed painters who could work with our 1940s Tomball cottage—original wood siding, detailed trim, the works. These guys were careful, thorough, and the results are stunning. Our neighbors keep stopping to compliment the house!",
          author: "Mark and Linda T.",
          location: "Old Town Tomball"
        }}
      />
      </main>
      <Footer />
    </>
  )
}
