import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/interior-painting-bellaire-west-university',
  },
  title: "Interior Painting Bellaire & West University TX",
  description: "Interior painting in Bellaire and West University Place, TX: careful prep, Sherwin-Williams and Benjamin Moore paints, 5-year written warranty. Free estimate.",
}

export default function InteriorPaintingBellaireWestUPage() {
  return (
    <GeoServicePageTemplate
      service="Interior Painting"
      serviceSlug="interior-painting"
      zone="Bellaire & West University, TX"
      zoneSlug="bellaire-west-university"
      metaTitle="Interior Painting Bellaire & West University TX"
      metaDescription="Interior painting in Bellaire and West University Place, TX: careful prep, Sherwin-Williams and Benjamin Moore paints, 5-year written warranty. Free estimate."
      h1="Interior Painting in Bellaire and West University Place, TX"
      heroSubheading="Careful prep, Sherwin-Williams and Benjamin Moore paints, and a 5-year written workmanship warranty, with nothing due until you approve the written estimate."
      introLocal="Bellaire and West University Place are separate cities surrounded by Houston, with a mix of original mid-century ranch homes and newer, larger rebuilds. Older homes often need more patching and trim prep; newer homes tend to have taller ceilings and open stairwells that take more setup. We walk through each home before pricing it."
      serviceOverview="Interior work covers walls, ceilings, trim and doors. Furniture is moved or covered, holes and cracks are patched, surfaces are sanded and spot-primed, and finish coats go on in Sherwin-Williams or Benjamin Moore paint, with a more washable sheen where rooms take more wear."
      whyChooseUs={[
        "Patching and spot-priming of the settling cracks and worn trim common in older ranch homes.",
        "A free, written, itemized estimate after an on-site walkthrough.",
        "Sherwin-Williams and Benjamin Moore paints, including low-VOC options.",
        "Insured with $2M general liability plus workers' comp, and a 5-year written workmanship warranty.",
      ]}
      priceDetails={`Most interior work falls around ${PRICES_2026.interiorPerSqFt} per square foot. Larger homes, tall ceilings, detailed trim and drywall repair raise the total; the free written estimate gives you the exact number.`}
      faqs={[
        {
          question: "How much does interior painting cost in Bellaire and West University Place?",
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
          quote: "Outstanding work on our 1960s ranch home in Bellaire. They understood the character of our home and delivered a perfect finish.",
          name: "Jennifer K.",
          location: "Bellaire"
        },
        {
          quote: "Professional from start to finish. The daily photo updates gave us peace of mind while at work.",
          name: "Michael & Sarah T.",
          location: "West University Place"
        },
        {
          quote: "The attention to detail on our trim work was exceptional. Highly recommend for any West U homeowner.",
          name: "Robert L.",
          location: "West University Place"
        }
      ]}
      relatedPages={[
        { title: "Interior Painting Memorial", href: "/interior-painting-memorial" },
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
