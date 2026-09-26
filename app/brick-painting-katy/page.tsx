import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  title: "Brick Painting Katy TX — Houston Superior Painting",
  description: "Professional brick painting in Katy, TX. Transform dated brick with modern colors. Cinco Ranch, Cross Creek, Elyson. 5-year warranty. Free estimates.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/brick-painting-katy",
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Brick Painting Katy TX — Houston Superior Painting",
    description: "Professional brick painting in Katy, TX. Transform dated brick with modern colors. Cinco Ranch, Cross Creek, Elyson. 5-year warranty.",
    url: "https://houstonsuperiorpainting.com/brick-painting-katy",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function BrickPaintingKatyPage() {
  return (
    <GeoServicePageTemplate
      service="Brick Painting"
      serviceSlug="brick-painting"
      zone="Katy"
      zoneSlug="katy"
      metaTitle="Brick Painting Katy TX — Houston Superior Painting"
      metaDescription="Professional brick painting in Katy, TX. Transform dated brick with modern colors. Cinco Ranch, Cross Creek, Elyson. 5-year warranty."
      h1="Brick Painting in Katy, TX"
      heroSubheading="Transform your dated brick exterior with a fresh, modern look — professional brick painting for Katy homeowners."
      introLocal="Many Katy homes built in the 1990s and 2000s feature brick exteriors in colors that now feel dated. Brick painting offers a cost-effective way to dramatically update your home's curb appeal without the expense of re-bricking or siding. Houston Superior Painting serves homeowners throughout Cinco Ranch, Cross Creek Ranch, Elyson, and the greater Katy area with professional brick painting that lasts."
      serviceOverview="Our brick painting service in Katy includes thorough cleaning, masonry primer application, and premium elastomeric or mineral-based paint specifically formulated for brick. We ensure proper adhesion and moisture management so your painted brick looks beautiful for years. Projects typically take 3-6 days, backed by our 5-year warranty."
      whyChooseUs={[
        "Experience painting brick throughout Katy — Cinco Ranch, Cross Creek Ranch, Elyson, Firethorne, and beyond.",
        "Proper prep work including cleaning, efflorescence treatment, and masonry primer.",
        "Premium paints specifically formulated for brick — elastomeric and mineral-based options.",
        "Understanding of Houston's humidity and its effects on painted brick.",
        "5-year written workmanship warranty on all brick painting projects."
      ]}
      priceRange="$4,500 – $15,000"
      priceMin={4500}
      priceMax={15000}
      priceDetails="Brick painting in Katy typically ranges from $4,500 to $15,000 depending on home size, brick condition, and color choices. Partial brick painting or accent areas start around $2,000."
      faqs={[
        {
          question: "Is painting brick a good idea?",
          answer: "Yes — when done properly with the right products. Modern masonry paints are breathable and flexible, allowing moisture to escape while providing lasting color. We use premium products designed specifically for brick."
        },
        {
          question: "How long does painted brick last?",
          answer: "With proper preparation and quality paint, painted brick typically lasts 15-20+ years. We use premium elastomeric and mineral-based paints designed for long-term durability."
        },
        {
          question: "Can I change my brick from red to white or gray?",
          answer: "Absolutely — we can transform any brick color. White, gray, and warm neutrals are popular choices in Katy. We'll help you select colors that complement your home and meet HOA requirements."
        },
        {
          question: "How much does brick painting cost in Katy?",
          answer: "Brick painting typically ranges from $4,500 to $15,000 depending on home size and brick condition. We provide detailed written estimates after an in-person inspection."
        },
        {
          question: "Do Katy HOAs allow brick painting?",
          answer: "Most Katy HOAs allow brick painting with approved colors. We're familiar with requirements in Cinco Ranch, Cross Creek Ranch, Elyson, and other communities and can help with the approval process."
        },
        {
          question: "What's the difference between brick painting and limewash?",
          answer: "Brick painting provides solid color coverage, while limewash creates a soft, antiqued European look that allows some brick variation to show through. We offer both options."
        }
      ]}
      testimonials={[
        {
          quote: "They transformed our dated orange brick into a beautiful warm white. Our home looks completely different — in the best way.",
          name: "Jessica & Brian M.",
          location: "Cinco Ranch"
        },
        {
          quote: "The HOA approved our color quickly, and the finished result exceeded our expectations. Highly recommend.",
          name: "David P.",
          location: "Cross Creek Ranch"
        },
        {
          quote: "Professional, clean, and the quality is excellent. Our neighbors are asking for their number.",
          name: "Linda T.",
          location: "Elyson"
        }
      ]}
      relatedPages={[
        { title: "Limewash Services Katy", href: "/limewash-decorative-finishes-katy-cinco-ranch" },
        { title: "Exterior Painting Katy", href: "/exterior-painting-katy-cinco-ranch" },
        { title: "Painters Katy TX", href: "/painters-katy-tx" },
        { title: "Brick Painting Memorial", href: "/brick-painting-memorial" },
        { title: "Limewash & Brick Houston", href: "/limewash-brick-painting-houston-tx" },
        { title: "Exterior Painting Houston", href: "/exterior-painting-houston-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Brick Painting"
    />
  )
}
