import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/interior-painting-tanglewood',
  },
  title: "Interior Painting Tanglewood, Houston TX",
  description: "Interior painting in Tanglewood, Houston: prep for large homes and detailed trim, Sherwin-Williams and Benjamin Moore paints, 5-year warranty. Free estimate.",
}

export default function InteriorPaintingTanglewoodPage() {
  return (
    <GeoServicePageTemplate
      service="Interior Painting"
      serviceSlug="interior-painting"
      zone="Tanglewood, Houston, TX"
      zoneSlug="tanglewood"
      metaTitle="Interior Painting Tanglewood, Houston TX"
      metaDescription="Interior painting in Tanglewood, Houston: prep for large homes and detailed trim, Sherwin-Williams and Benjamin Moore paints, 5-year warranty. Free estimate."
      h1="Interior Painting in Tanglewood, Houston, TX"
      heroSubheading="Careful prep, Sherwin-Williams and Benjamin Moore paints, and a 5-year written workmanship warranty, with nothing due until you approve the written estimate."
      introLocal="Tanglewood, near Uptown and the Galleria, has wooded lots and a mix of original ranch homes and large newer houses built on rebuilt lots. Larger homes with tall ceilings, stairwells and detailed trim take more setup and prep, and we plan for that after walking through the house."
      serviceOverview="Interior work covers walls, ceilings, trim and doors. Furniture is moved or covered, holes and cracks are patched, surfaces are sanded and spot-primed, and finish coats go on in Sherwin-Williams or Benjamin Moore paint, with a more washable sheen where rooms take more wear."
      whyChooseUs={[
        "Prep and setup planned for larger homes with tall ceilings, stairwells and detailed trim.",
        "A free, written, itemized estimate after an on-site walkthrough.",
        "Sherwin-Williams and Benjamin Moore paints, including low-VOC options.",
        "Insured with $2M general liability plus workers' comp, and a 5-year written workmanship warranty.",
      ]}
      priceDetails={`Most interior work falls around ${PRICES_2026.interiorPerSqFt} per square foot. Larger homes, tall ceilings, detailed trim and drywall repair raise the total; the free written estimate gives you the exact number.`}
      faqs={[
        {
          question: "How much does interior painting cost in Tanglewood?",
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
          question: "My house was built before 1978. Does that matter?",
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
          quote: "They prepped my Tanglewood home better than the previous painter — and it shows two years later.",
          name: "Catherine M.",
          location: "Tanglewood proper"
        },
        {
          quote: "On schedule, on budget, and the finish quality matched what we'd expect from a custom builder.",
          name: "David & Lauren P.",
          location: "Briargrove"
        },
        {
          quote: "Every other painter walked in with a price. Houston Superior walked in with a plan.",
          name: "Marcus T.",
          location: "Briar Hollow"
        }
      ]}
      relatedPages={[
        { title: "Interior Painting Memorial", href: "/interior-painting-memorial" },
        { title: "Interior Painting Bellaire", href: "/interior-painting-bellaire-west-university" },
        { title: "Interior Painting The Heights", href: "/interior-painting-the-heights" },
        { title: "Interior Painting Sugar Land", href: "/interior-painting-sugar-land" },
        { title: "Interior Painting Katy", href: "/interior-painting-katy-cinco-ranch" },
        { title: "Interior Painting Cypress", href: "/interior-painting-cypress-bridgeland" }
      ]}
      warrantyYears={5}
      warrantyType="Interior"
    />
  )
}
