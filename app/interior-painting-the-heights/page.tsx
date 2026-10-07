import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/interior-painting-the-heights',
  },
  title: "Interior Painting The Heights, Houston TX",
  description: "Interior painting in the Houston Heights: prep for plaster, old trim and new builds, Sherwin-Williams and Benjamin Moore paints, 5-year warranty.",
}

export default function InteriorPaintingHeightsPage() {
  return (
    <GeoServicePageTemplate
      service="Interior Painting"
      serviceSlug="interior-painting"
      zone="The Heights, Houston, TX"
      zoneSlug="the-heights"
      metaTitle="Interior Painting The Heights, Houston TX"
      metaDescription="Interior painting in the Houston Heights: prep for plaster, old trim and new builds, Sherwin-Williams and Benjamin Moore paints, 5-year warranty."
      h1="Interior Painting in The Heights, Houston, TX"
      heroSubheading="Careful prep, Sherwin-Williams and Benjamin Moore paints, and a 5-year written workmanship warranty, with nothing due until you approve the written estimate."
      introLocal="The Heights has many early-1900s bungalows and Victorian homes, alongside newer townhomes and rebuilds. Older homes often have plaster walls, original wood trim and many layers of old paint, which take more prep than new drywall. We walk through each home before pricing it."
      serviceOverview="Interior work covers walls, ceilings, trim and doors. Furniture is moved or covered, holes and cracks are patched, surfaces are sanded and spot-primed, and finish coats go on in Sherwin-Williams or Benjamin Moore paint, with a more washable sheen where rooms take more wear."
      whyChooseUs={[
        "Careful prep on older plaster, wood trim and built-ins in early-1900s homes.",
        "A free, written, itemized estimate after an on-site walkthrough.",
        "Sherwin-Williams and Benjamin Moore paints, including low-VOC options.",
        "Insured with $2M general liability plus workers' comp, and a 5-year written workmanship warranty.",
      ]}
      priceDetails={`Most interior work falls around ${PRICES_2026.interiorPerSqFt} per square foot. Larger homes, tall ceilings, detailed trim and drywall repair raise the total; the free written estimate gives you the exact number.`}
      faqs={[
        {
          question: "How much does interior painting cost in The Heights?",
          answer: `Our published range for a whole-home interior of about 2,500 sq ft is ${PRICES_2026.fullInterior2500}, and a single room typically runs ${PRICES_2026.singleRoom}. Ceiling height, trim and repairs move the number, so the free written estimate is the real price.`,
        },
        {
          question: "What paint do you use?",
          answer: "Sherwin-Williams and Benjamin Moore interior paints. Both brands make low-VOC lines, and we choose the product and sheen for each room, for example a more washable finish for kitchens, baths and trim.",
        },
        {
          question: "Do I need to move out during the project?",
          answer: "Usually not. We cover floors and furniture, work through the house in sections, and clean the work areas at the end of each day.",
        },
        {
          question: "How long does an interior repaint take?",
          answer: "It depends on the size of the home, ceiling heights, the amount of trim and how much patching is needed. We tell you the expected duration when we give you the written estimate.",
        },
        {
          question: "My Heights home was built before 1978. Does that matter?",
          answer: "Homes built before 1978 may contain lead paint. Federal rules require that it be disturbed only by an EPA-certified renovation firm, so ask any painter for their certification before sanding or scraping begins.",
        },
        {
          question: "What does the warranty cover?",
          answer: "Every project comes with a 5-year written workmanship warranty. The terms are written out with your estimate, so you can read them before you approve anything.",
        },
        {
          question: "When do I pay?",
          answer: "The estimate is free and nothing is due until you approve the written estimate. After approval there is a down payment, and the balance is due after the final walkthrough.",
        },
      ]}
      testimonials={[
        {
          quote: "They understood the character of our 1920s bungalow and delivered a beautiful finish that respects the home's history.",
          name: "Amanda S.",
          location: "Woodland Heights"
        },
        {
          quote: "Professional, punctual, and the results exceeded our expectations. The Heights deserves painters who get it.",
          name: "Chris & Kelly M.",
          location: "The Heights"
        },
        {
          quote: "The prep work on our Victorian trim was meticulous. You can tell they take pride in their craft.",
          name: "Daniel R.",
          location: "Norhill"
        }
      ]}
      relatedPages={[
        { title: "Interior Painting Memorial", href: "/interior-painting-memorial" },
        { title: "Interior Painting Tanglewood", href: "/interior-painting-tanglewood" },
        { title: "Interior Painting Bellaire", href: "/interior-painting-bellaire-west-university" },
        { title: "Interior Painting Sugar Land", href: "/interior-painting-sugar-land" },
        { title: "Interior Painting Katy", href: "/interior-painting-katy-cinco-ranch" },
        { title: "Interior Painting Cypress", href: "/interior-painting-cypress-bridgeland" }
      ]}
      warrantyYears={5}
      warrantyType="Interior"
    />
  )
}
