import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS } from "@/lib/business"

export const metadata: Metadata = {
  title: "River Oaks Exterior Painting | Houston Superior Painting",
  description: "Exterior painting for River Oaks homes in Houston: wood repair, careful prep and color matching on older architecture. Priced after an on-site look.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/luxury-exterior-painting-river-oaks",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "River Oaks Exterior Painting | Houston Superior Painting",
    description: "Exterior painting for River Oaks homes in Houston: wood repair, careful prep and color matching on older architecture. Priced after an on-site look.",
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
      metaTitle={"River Oaks Exterior Painting | Houston Superior Painting"}
      metaDescription={"Exterior painting for River Oaks homes in Houston: wood repair, careful prep and color matching on older architecture. Priced after an on-site look."}
      h1={"Luxury Exterior Painting in River Oaks, TX"}
      heroSubheading={"Exterior painting for River Oaks homes, from older houses with wood windows and detailed trim to newer builds, with prep matched to the age of the house."}
      introLocal={"River Oaks is one of Houston's oldest planned neighborhoods, and many of its homes have older wood windows, cornices, columns and trim alongside brick, stucco and stone. Older wood trim usually needs scraping, sanding, repair and priming before it will hold new paint, and that prep is most of the job. You can see an exterior restoration we completed in River Oaks further down this page."}
      serviceOverview={"Exterior work here covers washing, scraping and sanding loose paint, repairing or replacing rotted wood trim, re-caulking, priming bare wood and applying the finish coats. Where a color has to match existing work, we match it from a sample. We use Sherwin-Williams and Benjamin Moore exterior products, listed on your written estimate, and every job carries our 5-year written workmanship warranty."}
      whyChooseUs={[
        "Prep matched to the age of the house: scraping, sanding and priming bare wood before finish coats.",
        "Rotted trim repaired or replaced and primed before painting.",
        "Colors matched from an existing sample when you want to keep the current scheme.",
        "Landscaping, hardscape and windows protected, and the site cleaned at the end of each day.",
        "A written estimate with repairs, prep and products spelled out.",
      ]}
      priceDetails={"We don't publish a price range for high-end exterior work. The cost depends on the surface, its condition, the area and the technique, so it is priced after an on-site look. The estimate is free, and nothing is due until you approve it."}
      faqs={[
        {
          question: "My home is older. Is lead paint a concern?",
          answer: "It can be. Homes built before 1978 may contain lead paint, and federal rules require that it be disturbed only by an EPA-certified renovation firm, so ask any painter you are considering for their certification. If your home is that old, mention it when you request an estimate so it can be planned for.",
        },
        {
          question: "Can you match our existing exterior colors?",
          answer: "Yes. We can match a color from a sample of the existing paint, or work from a color schedule your architect or designer provides.",
        },
        {
          question: "How do you protect landscaping?",
          answer: "Beds and plants near the house are covered while we wash, scrape and paint, and walkways and windows are protected. Tell us about anything delicate and we will plan around it.",
        },
        {
          question: "Do you work with architects and property managers?",
          answer: "Yes. We can work from an architect's or designer's specifications and send the estimate and schedule to whoever manages the project.",
        },
        {
          question: "How much does high-end exterior painting cost in River Oaks?",
          answer: "We don't publish a price range for high-end exterior painting, because the cost depends on the surface, its condition, the area and the technique. We price it after an on-site look, and the estimate is free.",
        },
        {
          question: "Do I have to pay anything before work starts?",
          answer: `${BUSINESS.paymentPolicy.sentence}`,
        },
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
        { title: "Exterior Painting Houston", href: "/exterior-painting-houston-tx" },
        { title: "Painters in River Oaks", href: "/painters-river-oaks-tx" },
        { title: "Luxury House Painters Houston", href: "/luxury-house-painters-houston" },
        { title: "Luxury Interior Painting Memorial", href: "/luxury-interior-painting-memorial" },
        { title: "Exterior Painting Tanglewood", href: "/exterior-painting-tanglewood" },
        { title: "Wood Rot Repair", href: "/wood-rot-repair-houston-tx" },
        { title: "Limewash & Brick Painting Houston", href: "/limewash-brick-painting-houston-tx" },
      ]}
      warrantyYears={5}
      warrantyType="Luxury Exterior"
    />
  )
}
