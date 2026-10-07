import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS } from "@/lib/business"

export const metadata: Metadata = {
  title: "Luxury House Painters Houston TX | Houston Superior Painting",
  description: "High-end interior and exterior painting for larger Houston homes: detailed millwork, older architecture, designer specs. Priced after an on-site look.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/luxury-house-painters-houston",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Luxury House Painters Houston TX | Houston Superior Painting",
    description: "High-end interior and exterior painting for larger Houston homes: detailed millwork, older architecture, designer specs. Priced after an on-site look.",
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
      metaTitle={"Luxury House Painters Houston TX | Houston Superior Painting"}
      metaDescription={"High-end interior and exterior painting for larger Houston homes: detailed millwork, older architecture, designer specs. Priced after an on-site look."}
      h1={"Luxury House Painters in Houston, TX"}
      heroSubheading={"Interior and exterior painting for larger, more detailed Houston homes in neighborhoods such as River Oaks, Memorial, Tanglewood and West University."}
      introLocal={"Larger and older Houston homes bring work that a standard repaint price does not capture: detailed millwork and paneling, tall foyers and stairwells, older wood windows and trim, and finishes specified by a designer or architect. We price this work after walking the house, and the written estimate spells out the scope room by room and surface by surface. Projects with job photos, including a whole-home interior repaint in Memorial and an exterior restoration in River Oaks, are shown further down this page."}
      serviceOverview={"We handle interior walls, ceilings, millwork and built-ins; exterior siding, trim, brick and stucco; cabinet refinishing; and Venetian plaster for feature walls. We follow designer or architect specifications when there are any, and we coordinate our schedule with other trades on a renovation. We use Sherwin-Williams, Benjamin Moore and Farrow & Ball products, listed on your written estimate, and every job carries our 5-year written workmanship warranty."}
      whyChooseUs={[
        "Pricing based on a walkthrough, with the scope written room by room and surface by surface.",
        "Prep-first work on millwork, trim and older surfaces.",
        "Designer and architect color and sheen specifications followed.",
        "Scheduling coordinated with other trades on renovation projects.",
        "Venetian plaster and cabinet refinishing available alongside painting.",
      ]}
      priceDetails={"We don't publish a price range for high-end residential painting. The cost depends on the surface, its condition, the area and the technique, so it is priced after an on-site look. The estimate is free, and nothing is due until you approve it."}
      faqs={[
        {
          question: "How is this different from a standard repaint?",
          answer: "The prep-first process is the same; the difference is scope. Detailed millwork, tall spaces, older surfaces and specified finishes take more prep and more careful work, so we price them after a walkthrough instead of from our standard published ranges.",
        },
        {
          question: "Do you work with interior designers and architects?",
          answer: "Yes. We follow their color and sheen specifications and coordinate the timing of our work with theirs and with other trades.",
        },
        {
          question: "What specialty finishes do you offer?",
          answer: "Venetian plaster, Roman Clay, lacquer, metallic and faux finishes, grasscloth and wallcovering, and limewash for bare brick, alongside interior and exterior painting and cabinet refinishing. Specialty work is priced after an on-site look.",
        },
        {
          question: "How much does high-end residential painting cost in Houston?",
          answer: "We don't publish a price range for high-end residential painting, because the cost depends on the surface, its condition, the area and the technique. We price it after an on-site look, and the estimate is free.",
        },
        {
          question: "Which Houston neighborhoods do you serve?",
          answer: "We work across Houston, including River Oaks, Memorial and the Memorial Villages, Tanglewood, West University and Bellaire, as well as the suburbs listed on our service area pages.",
        },
        {
          question: "Do I have to pay anything before work starts?",
          answer: `${BUSINESS.paymentPolicy.sentence}`,
        },
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
        { title: "Interior Painting Houston", href: "/interior-painting-houston-tx" },
        { title: "Exterior Painting Houston", href: "/exterior-painting-houston-tx" },
        { title: "Cabinet Refinishing Houston", href: "/cabinet-refinishing-houston-tx" },
        { title: "Venetian Plaster", href: "/venetian-plaster-houston-tx" },
        { title: "Luxury Interior Painting Memorial", href: "/luxury-interior-painting-memorial" },
        { title: "Luxury Exterior Painting River Oaks", href: "/luxury-exterior-painting-river-oaks" },
        { title: "Painters in Houston", href: "/painters-houston-tx" },
      ]}
      warrantyYears={5}
      warrantyType="Luxury Residential"
    />
  )
}
