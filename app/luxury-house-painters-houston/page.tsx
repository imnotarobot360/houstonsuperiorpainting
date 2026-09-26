import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  title: "Luxury House Painters Houston TX — Houston Superior Painting",
  description: "High-end residential painting for Houston's finest homes. River Oaks, Memorial, Tanglewood, West University. Premium materials, master craftsmen.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/luxury-house-painters-houston",
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Luxury House Painters Houston TX — Houston Superior Painting",
    description: "High-end residential painting for Houston's finest homes. River Oaks, Memorial, Tanglewood, West University. Premium materials.",
    url: "https://houstonsuperiorpainting.com/luxury-house-painters-houston",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function LuxuryHousePaintersHoustonPage() {
  return (
    <GeoServicePageTemplate
      service="Luxury House Painting"
      serviceSlug="luxury-house-painters"
      zone="Houston"
      zoneSlug="houston"
      metaTitle="Luxury House Painters Houston TX — Houston Superior Painting"
      metaDescription="High-end residential painting for Houston's finest homes. River Oaks, Memorial, Tanglewood, West University. Premium materials, master craftsmen."
      h1="Luxury House Painters in Houston, TX"
      heroSubheading="Exceptional craftsmanship for exceptional homes — serving River Oaks, Memorial, Tanglewood, West University, and Houston's most distinguished neighborhoods."
      introLocal="Houston's luxury homes demand painters who understand the difference between adequate and exceptional. From historic River Oaks estates to contemporary Memorial mansions, Houston Superior Painting brings the expertise, premium materials, and meticulous attention to detail that discerning homeowners expect. We work seamlessly with architects, designers, and general contractors to deliver flawless results on the most demanding projects."
      serviceOverview="Our luxury painting services encompass everything from specialty finishes and custom color matching to complex multi-phase projects coordinated with renovations. We use the finest materials available — Farrow & Ball, Benjamin Moore's Aura Grand Entrance, Fine Paints of Europe, and Sherwin-Williams Emerald — applied with master-level technique. Every project receives dedicated project management and our comprehensive 5-year warranty."
      whyChooseUs={[
        "Experience with Houston's most prestigious addresses — River Oaks, Memorial Villages, Tanglewood, West University, Piney Point.",
        "Master-level craftsmen skilled in specialty finishes, lacquer work, and decorative techniques.",
        "Seamless coordination with architects, designers, and general contractors.",
        "Premium materials including Farrow & Ball, Fine Paints of Europe, and Benjamin Moore Aura.",
        "Dedicated project manager and daily communication throughout your project.",
        "Comprehensive 5-year warranty with priority service."
      ]}
      priceRange="$15,000 – $150,000+"
      priceMin={15000}
      priceMax={150000}
      priceDetails="Luxury residential painting in Houston varies significantly based on project scope, specialty finishes, and property size. Whole-home repaints for luxury properties typically range from $15,000 to $150,000+. We provide detailed proposals after an in-person consultation."
      faqs={[
        {
          question: "What makes your luxury painting services different?",
          answer: "We bring master-level craftsmen, premium materials (Farrow & Ball, Fine Paints of Europe), dedicated project management, and meticulous attention to detail that luxury homes demand. We also coordinate seamlessly with designers and contractors."
        },
        {
          question: "Do you work with interior designers and architects?",
          answer: "Absolutely. We regularly collaborate with Houston's top designers and architects, following detailed specifications and attending coordination meetings as needed."
        },
        {
          question: "What specialty finishes do you offer?",
          answer: "We offer lacquer finishes, Venetian plaster, limewash, metallic finishes, faux techniques, and custom decorative work. Our craftsmen have decades of combined experience with specialty applications."
        },
        {
          question: "How do you handle large estate projects?",
          answer: "Large projects receive a dedicated project manager, detailed scheduling, and phased execution to minimize disruption. We can also coordinate with other trades and work around renovation schedules."
        },
        {
          question: "What Houston neighborhoods do you serve?",
          answer: "We serve all of Houston's luxury neighborhoods including River Oaks, Memorial Villages, Tanglewood, West University, Piney Point Village, Hunters Creek, Bunker Hill, and beyond."
        },
        {
          question: "What warranty do you provide on luxury projects?",
          answer: "All luxury projects include our comprehensive 5-year workmanship warranty with priority service. We also honor all manufacturer warranties and provide detailed documentation."
        }
      ]}
      testimonials={[
        {
          quote: "They handled our River Oaks renovation flawlessly — coordinated perfectly with our designer and delivered museum-quality finishes.",
          name: "The Henderson Family",
          location: "River Oaks"
        },
        {
          quote: "True craftsmen. The lacquer work in our study is exceptional. They understand luxury.",
          name: "William & Margaret T.",
          location: "Tanglewood"
        },
        {
          quote: "We've renovated three homes with them over the years. Consistently excellent.",
          name: "Dr. & Mrs. Chen",
          location: "Memorial Villages"
        }
      ]}
      relatedPages={[
        { title: "Luxury Interior Painting Memorial", href: "/luxury-interior-painting-memorial" },
        { title: "Luxury Exterior Painting River Oaks", href: "/luxury-exterior-painting-river-oaks" },
        { title: "Interior Painting Tanglewood", href: "/interior-painting-tanglewood" },
        { title: "Cabinet Refinishing Memorial", href: "/cabinet-refinishing-memorial" },
        { title: "Limewash & Decorative Finishes", href: "/limewash-brick-painting-houston-tx" },
        { title: "Painters River Oaks TX", href: "/painters-river-oaks-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Luxury Residential"
    />
  )
}
