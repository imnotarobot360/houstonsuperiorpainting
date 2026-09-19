import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  title: "Exterior Painters The Woodlands TX",
  description: "Professional exterior painting in The Woodlands, TX. Wood, stucco, brick, hardie board. DRC-compliant colors. 5-year warranty. Free estimates.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/exterior-painting-the-woodlands",
  },
  openGraph: {
    title: "Exterior Painters The Woodlands TX — Houston Superior Painting",
    description: "Professional exterior painting in The Woodlands, TX. Wood, stucco, brick, hardie board. DRC-compliant colors. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/exterior-painting-the-woodlands",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function ExteriorPaintingTheWoodlandsPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="The Woodlands"
      zoneSlug="the-woodlands"
      metaTitle="Exterior Painters The Woodlands TX — Houston Superior Painting"
      metaDescription="Professional exterior painting in The Woodlands, TX. Wood, stucco, brick, hardie board. DRC-compliant colors. 5-year warranty."
      h1="Exterior House Painters in The Woodlands, TX"
      heroSubheading="Premium exterior painting built to withstand Houston heat and humidity — with colors that meet The Woodlands Design Review Committee standards."
      introLocal="The Woodlands' lush, tree-lined streets and distinctive architecture require painters who understand both the aesthetic standards and the environmental challenges. From traditional brick homes in Grogan's Mill to contemporary builds in Creekside Park, Houston Superior Painting delivers exterior finishes that protect against Houston's intense UV, humidity, and seasonal storms while meeting DRC guidelines."
      serviceOverview="Our exterior painting service in The Woodlands includes thorough pressure washing, surface repair, caulking, priming, and premium paint application. We use Sherwin-Williams Duration, SuperPaint, and Emerald exterior lines — all formulated for extreme Texas conditions. Projects typically take 4-10 days depending on home size, and every job includes our 5-year exterior warranty."
      whyChooseUs={[
        "Familiar with The Woodlands Design Review Committee requirements and approved color palettes.",
        "Experience with all substrate types — wood siding, stucco, brick, hardie board, and mixed exteriors.",
        "Proper prep work including pressure washing, scraping, sanding, and premium caulking.",
        "We work around your landscaping and protect all surfaces.",
        "5-year written workmanship warranty on all exterior projects."
      ]}
      priceRange="$6,500 – $24,000"
      priceMin={6500}
      priceMax={24000}
      priceDetails="Exterior painting in The Woodlands typically ranges from $6,500 to $24,000 for a complete repaint, depending on home size, substrate condition, trim complexity, and color count. Smaller projects or touch-ups start around $2,500."
      faqs={[
        {
          question: "How long does exterior painting take in The Woodlands?",
          answer: "Most exterior projects in The Woodlands take 5 to 10 business days, including prep, priming, and two coats of paint. Larger estates or homes with extensive wood repair may take longer."
        },
        {
          question: "Do you help with Design Review Committee approval?",
          answer: "Yes — we're familiar with The Woodlands DRC process and can help you select colors from approved palettes. We can also assist with the application if needed."
        },
        {
          question: "What exterior paint do you use?",
          answer: "We use premium Sherwin-Williams exterior paints including Duration, SuperPaint, and Emerald — all formulated for Texas heat and humidity with excellent fade resistance."
        },
        {
          question: "How much does exterior painting cost in The Woodlands?",
          answer: "Exterior painting typically ranges from $6,500 to $24,000 depending on home size and condition. We provide detailed written estimates after an in-person inspection."
        },
        {
          question: "Can you paint brick or stucco exteriors?",
          answer: "Yes — we specialize in all substrate types including brick, stucco, wood, hardie board, and mixed exteriors. We also offer limewash for brick homes."
        },
        {
          question: "What warranty do you offer on exterior painting?",
          answer: "Every exterior project includes our 5-year written workmanship warranty. We also honor manufacturer paint warranties and can provide documentation."
        }
      ]}
      testimonials={[
        {
          quote: "They navigated the DRC process smoothly and the color matching was perfect. Our home looks incredible.",
          name: "Michael & Susan K.",
          location: "Sterling Ridge"
        },
        {
          quote: "Outstanding work on our two-story. The prep work was thorough and the finish is flawless.",
          name: "David R.",
          location: "Alden Bridge"
        },
        {
          quote: "Professional, timely, and the results speak for themselves. Highly recommend.",
          name: "Jennifer L.",
          location: "Creekside Park"
        }
      ]}
      relatedPages={[
        { title: "Interior Painting The Woodlands", href: "/interior-painting-the-woodlands" },
        { title: "Painters The Woodlands TX", href: "/painters-the-woodlands-tx" },
        { title: "Exterior Painting Memorial", href: "/exterior-painting-memorial" },
        { title: "Exterior Painting Katy", href: "/exterior-painting-katy-cinco-ranch" },
        { title: "Exterior Painting Sugar Land", href: "/exterior-painting-sugar-land" },
        { title: "Limewash & Brick Painting", href: "/limewash-brick-painting-houston-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Exterior"
    />
  )
}
