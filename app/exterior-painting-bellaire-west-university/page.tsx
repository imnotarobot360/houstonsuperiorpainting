import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/exterior-painting-bellaire-west-university',
  },
  title: "Exterior Painting Bellaire & West University TX",
  description: "Exterior house painting in Bellaire and West University Place, TX: washing, wood repair, priming and a 5-year written warranty. Free written estimate.",
}

export default function ExteriorPaintingBellaireWestUPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="Bellaire & West University, TX"
      zoneSlug="bellaire-west-university"
      metaTitle="Exterior Painting Bellaire & West University TX"
      metaDescription="Exterior house painting in Bellaire and West University Place, TX: washing, wood repair, priming and a 5-year written warranty. Free written estimate."
      h1="Exterior Painting in Bellaire and West University Place, TX"
      heroSubheading="Washing, repairs, caulking and priming before any paint goes on, Sherwin-Williams and Benjamin Moore exterior paints, and a 5-year written workmanship warranty."
      introLocal="Bellaire and West University Place are separate cities surrounded by Houston, with original mid-century homes, often brick with painted wood trim, alongside newer, larger rebuilds with siding or stucco. Each needs different prep, and Houston's humidity and heat are hard on exterior paint, so we look at the house before pricing it."
      serviceOverview="Exterior work starts with pressure washing and scraping loose paint, then wood repair, caulking and spot-priming before the finish coats. Houston's humidity, heat and summer storms are hard on exterior paint, so we schedule coats around rain and follow each paint maker's temperature and humidity limits."
      whyChooseUs={[
        "Prep planned for both original mid-century homes and newer rebuilds, including wood trim, siding and stucco.",
        "Rotted siding, trim and fascia are found at the estimate and listed in the written scope before work starts.",
        "Sherwin-Williams and Benjamin Moore exterior paints, chosen for the surface.",
        "Insured with $2M general liability plus workers' comp, and a 5-year written workmanship warranty.",
      ]}
      priceDetails={`Exterior work typically falls around ${PRICES_2026.exteriorPerSqFt} per square foot. Height, siding type, the amount of wood repair and how much of the house is unpainted brick all change the total; the free written estimate gives you the exact number.`}
      faqs={[
        {
          question: "How much does exterior painting cost in Bellaire and West University Place?",
          answer: `Our published range for a typical whole-house exterior is ${PRICES_2026.exteriorPerHome}; a 2,500 sq ft two-story runs about ${PRICES_2026.exterior2500TwoStory}. Height, siding and repairs move the number, so the free written estimate is the real price.`,
        },
        {
          question: "What paint do you use on exteriors?",
          answer: "Sherwin-Williams and Benjamin Moore exterior paints, chosen for the surface: wood siding and trim, fiber cement, stucco or masonry.",
        },
        {
          question: "Do you repair wood rot before painting?",
          answer: "Yes. Wood rot repair is one of our services. We check siding, trim and fascia during the estimate, and any repairs are listed in the written scope before work starts.",
        },
        {
          question: "How long does an exterior repaint take?",
          answer: "It depends on the size and height of the home, the amount of prep and repair, and the weather. We tell you the expected duration with the written estimate and schedule coats around rain.",
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
          quote: "They understood the character of our 1960s Bellaire home and delivered a beautiful, lasting finish.",
          name: "Jennifer K.",
          location: "Bellaire"
        },
        {
          quote: "Professional and thorough. The prep work on our wood siding was exceptional.",
          name: "Michael & Sarah T.",
          location: "West University Place"
        },
        {
          quote: "Our home looks amazing. The 5-year warranty gave us confidence in their work.",
          name: "Robert L.",
          location: "West University Place"
        }
      ]}
      relatedPages={[
        { title: "Exterior Painting Memorial", href: "/exterior-painting-memorial" },
        { title: "Exterior Painting Tanglewood", href: "/exterior-painting-tanglewood" },
        { title: "Exterior Painting The Heights", href: "/exterior-painting-the-heights" },
        { title: "Exterior Painting Sugar Land", href: "/exterior-painting-sugar-land" },
        { title: "Exterior Painting Katy", href: "/exterior-painting-katy-cinco-ranch" },
        { title: "Exterior Painting Cypress", href: "/exterior-painting-cypress-bridgeland" }
      ]}
      warrantyYears={5}
      warrantyType="Exterior"
    />
  )
}
