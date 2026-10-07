import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/exterior-painting-tanglewood',
  },
  title: "Exterior Painting Tanglewood, Houston TX",
  description: "Exterior house painting in Tanglewood, Houston: mildew washing, wood repair, priming, and a 5-year written warranty. Free written estimate.",
}

export default function ExteriorPaintingTanglewoodPage() {
  return (
    <GeoServicePageTemplate
      service="Exterior Painting"
      serviceSlug="exterior-painting"
      zone="Tanglewood, Houston, TX"
      zoneSlug="tanglewood"
      metaTitle="Exterior Painting Tanglewood, Houston TX"
      metaDescription="Exterior house painting in Tanglewood, Houston: mildew washing, wood repair, priming, and a 5-year written warranty. Free written estimate."
      h1="Exterior Painting in Tanglewood, Houston, TX"
      heroSubheading="Washing, repairs, caulking and priming before any paint goes on, Sherwin-Williams and Benjamin Moore exterior paints, and a 5-year written workmanship warranty."
      introLocal="Tanglewood, near Uptown and the Galleria, is known for large lots and mature trees, with many brick homes and newer rebuilds. Heavy shade keeps some walls damp, which encourages mildew, so washing and prep matter as much as the paint. Houston's humidity and heat add to the wear."
      serviceOverview="Exterior work starts with pressure washing and scraping loose paint, then wood repair, caulking and spot-priming before the finish coats. Houston's humidity, heat and summer storms are hard on exterior paint, so we schedule coats around rain and follow each paint maker's temperature and humidity limits."
      whyChooseUs={[
        "Washing to remove mildew from walls and trim that stay shaded under mature trees.",
        "Rotted siding, trim and fascia are found at the estimate and listed in the written scope before work starts.",
        "Sherwin-Williams and Benjamin Moore exterior paints, chosen for the surface.",
        "Insured with $2M general liability plus workers' comp, and a 5-year written workmanship warranty.",
      ]}
      priceDetails={`Exterior work typically falls around ${PRICES_2026.exteriorPerSqFt} per square foot. Height, siding type, the amount of wood repair and how much of the house is unpainted brick all change the total; the free written estimate gives you the exact number.`}
      faqs={[
        {
          question: "How much does exterior painting cost in Tanglewood?",
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
          quote: "Outstanding exterior work on our Tanglewood home. The 5-year warranty sealed the deal for us.",
          name: "Jennifer R.",
          location: "Tanglewood proper"
        },
        {
          quote: "They handled the entire project professionally. Our home looks better than when it was new.",
          name: "Michael & Sarah K.",
          location: "Briargrove"
        },
        {
          quote: "The prep work was thorough and the finish is flawless. Highly recommend.",
          name: "Robert L.",
          location: "Briar Hollow"
        }
      ]}
      relatedPages={[
        { title: "Exterior Painting Memorial", href: "/exterior-painting-memorial" },
        { title: "Exterior Painting Bellaire", href: "/exterior-painting-bellaire-west-university" },
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
