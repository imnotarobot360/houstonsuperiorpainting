import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  title: "Luxury Exterior Painting River Oaks TX",
  description: "Premium exterior painting for River Oaks estates. Historic preservation expertise, custom color matching, master craftsmen. Free consultation.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/luxury-exterior-painting-river-oaks",
  },
  openGraph: {
    title: "Luxury Exterior Painting River Oaks TX — Houston Superior Painting",
    description: "Premium exterior painting for River Oaks estates. Historic preservation expertise, custom color matching, master craftsmen.",
    url: "https://houstonsuperiorpainting.com/luxury-exterior-painting-river-oaks",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function LuxuryExteriorPaintingRiverOaksPage() {
  return (
    <GeoServicePageTemplate
      service="Luxury Exterior Painting"
      serviceSlug="luxury-exterior-painting"
      zone="River Oaks"
      zoneSlug="river-oaks"
      metaTitle="Luxury Exterior Painting River Oaks TX — Houston Superior Painting"
      metaDescription="Premium exterior painting for River Oaks estates. Historic preservation expertise, custom color matching, master craftsmen."
      h1="Luxury Exterior Painting in River Oaks, TX"
      heroSubheading="Exceptional exterior painting for Houston's most prestigious neighborhood — preserving architectural heritage while providing lasting protection."
      introLocal="River Oaks represents the pinnacle of Houston residential architecture — historic Georgian mansions, Mediterranean villas, French chateaux, and contemporary masterpieces line its legendary boulevards. These exceptional properties require painters who understand both historic preservation techniques and modern high-performance coatings. Houston Superior Painting brings the expertise, premium materials, and meticulous attention to detail that River Oaks estates demand."
      serviceOverview="Our luxury exterior painting service addresses the unique requirements of River Oaks properties. We specialize in historic color restoration, custom finish matching, and premium coating systems that protect against Houston's demanding climate. We use the finest exterior products including Fine Paints of Europe, Benjamin Moore's MoorGard Low Lustre, and Sherwin-Williams Duration — applied with master-level technique and backed by comprehensive warranties."
      whyChooseUs={[
        "Deep experience with River Oaks' diverse architectural styles — Georgian, Mediterranean, French, Tudor, and contemporary.",
        "Historic preservation expertise including period-appropriate color matching and restoration techniques.",
        "Premium exterior products including Fine Paints of Europe and Benjamin Moore's finest lines.",
        "Coordination with architects, historic consultants, and property managers.",
        "Comprehensive 5-year warranty with dedicated priority service."
      ]}
      priceRange="$25,000 – $200,000+"
      priceMin={25000}
      priceMax={200000}
      priceDetails="Luxury exterior painting in River Oaks varies significantly based on property size, architectural complexity, and restoration requirements. Projects typically range from $25,000 to $200,000+. We provide detailed proposals after a thorough on-site assessment."
      faqs={[
        {
          question: "Do you have experience with historic River Oaks homes?",
          answer: "Yes — we specialize in River Oaks' historic properties including Georgian, Mediterranean, French, and Tudor styles. We understand period-appropriate colors, techniques, and preservation requirements."
        },
        {
          question: "What exterior products do you use on luxury properties?",
          answer: "We use the finest exterior products including Fine Paints of Europe, Benjamin Moore's MoorGard and Regal lines, and Sherwin-Williams Duration — selected for their durability and exceptional finish quality."
        },
        {
          question: "Can you match historic colors?",
          answer: "Absolutely. We provide professional color matching and can work from historic palettes, existing samples, or coordinate with historic preservation consultants."
        },
        {
          question: "How do you protect landscaping on large estates?",
          answer: "We use comprehensive protection systems including custom covering for specimen plantings, careful staging, and daily cleanup. We coordinate with your landscape team when needed."
        },
        {
          question: "Do you work with architects and property managers?",
          answer: "Yes — we regularly coordinate with architects, historic consultants, and property managers. We provide detailed documentation and attend coordination meetings as needed."
        },
        {
          question: "What warranty do you provide on River Oaks projects?",
          answer: "All luxury exterior projects include our comprehensive 5-year workmanship warranty with dedicated priority service. We maintain detailed project records and provide complete documentation."
        }
      ]}
      testimonials={[
        {
          quote: "They restored our 1930s Georgian home beautifully. The attention to historic detail was exceptional.",
          name: "The Bradford Estate",
          location: "River Oaks"
        },
        {
          quote: "Outstanding work on our Mediterranean villa. They understood exactly what the architecture required.",
          name: "Ambassador & Mrs. Stevens",
          location: "River Oaks"
        },
        {
          quote: "Professional, discreet, and the quality is museum-grade. We've engaged them for three properties now.",
          name: "The Crawford Family Trust",
          location: "River Oaks Boulevard"
        }
      ]}
      relatedPages={[
        { title: "Luxury House Painters Houston", href: "/luxury-house-painters-houston" },
        { title: "Luxury Interior Painting Memorial", href: "/luxury-interior-painting-memorial" },
        { title: "Painters River Oaks TX", href: "/painters-river-oaks-tx" },
        { title: "Exterior Painting Tanglewood", href: "/exterior-painting-tanglewood" },
        { title: "Limewash & Brick Painting", href: "/limewash-brick-painting-houston-tx" },
        { title: "Cabinet Refinishing Houston", href: "/cabinet-refinishing-houston-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Luxury Exterior"
    />
  )
}
