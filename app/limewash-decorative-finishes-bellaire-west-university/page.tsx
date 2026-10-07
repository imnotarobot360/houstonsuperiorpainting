import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/limewash-decorative-finishes-bellaire-west-university',
  },
  title: "Limewash Brick Bellaire & West University TX",
  description: "Limewash for brick and decorative finishes in Bellaire and West University Place, TX. Priced after an on-site look; free estimate, nothing due upfront.",
}

export default function LimewashBellaireWestUPage() {
  return (
    <GeoServicePageTemplate
      service="Limewash & Decorative Finishes"
      serviceSlug="limewash-decorative-finishes"
      zone="Bellaire & West University, TX"
      zoneSlug="bellaire-west-university"
      metaTitle="Limewash Brick Bellaire & West University TX"
      metaDescription="Limewash for brick and decorative finishes in Bellaire and West University Place, TX. Priced after an on-site look; free estimate, nothing due upfront."
      h1="Limewash & Decorative Finishes in Bellaire and West University Place, TX"
      heroSubheading="Limewash for brick, stone and stucco, and decorative finishes such as Venetian plaster for interior walls, priced after an on-site look."
      introLocal="Bellaire and West University Place have many brick homes, from original mid-century ranches to newer builds. Limewash can soften the color of unpainted brick, but it is not the right product for every wall, so we look at the brick before quoting."
      serviceOverview="Limewash is a mineral finish made from lime and water, often tinted. It soaks into porous masonry instead of forming a film on top, giving brick and stone a soft, matte, uneven look. It works best on unpainted, unsealed masonry. Indoors we also apply decorative finishes such as Venetian plaster. Because the result depends on the surface, we look at it in person before quoting."
      whyChooseUs={[
        "A check of whether your brick has been painted or sealed before, which decides whether limewash will work.",
        "An on-site look at the masonry or walls before anything is quoted.",
        "A free written estimate, with nothing due until you approve it.",
        "Insured with $2M general liability plus workers' comp, and a 5-year written workmanship warranty.",
      ]}
      priceDetails="Limewash and decorative finishes are priced after an on-site look. The surface (brick, stone, stucco or interior wall), its condition, whether it has been painted or sealed before, and the look you want all change the scope, so we don't publish a range. The estimate is free."
      faqs={[
        {
          question: "What is limewash?",
          answer: "Limewash is a mineral finish made from lime and water, often tinted. It soaks into porous brick, stone or stucco instead of forming a film on top, which gives a soft, matte, slightly uneven look.",
        },
        {
          question: "Can limewash go on any brick?",
          answer: "It works best on unpainted, unsealed brick, stone and stucco. Masonry that has been painted or sealed usually needs a different product, which we check during the estimate.",
        },
        {
          question: "How does limewash age?",
          answer: "Limewash weathers gradually, especially on surfaces that get a lot of rain, and it can be refreshed with another coat. Some homeowners like the softer look as it wears; others plan for periodic touch-ups.",
        },
        {
          question: "Is limewash better than painting brick?",
          answer: "Neither is better in every case. Paint forms a film and gives a solid, uniform color. Limewash is breathable and lets the texture and some of the brick color show through. The right choice depends on the look you want and the condition of the masonry.",
        },
        {
          question: "How much does limewash cost in Bellaire and West University?",
          answer: "Limewash and decorative finishes are priced after an on-site look, because the surface, its condition and the look you want change the scope. The estimate is free and nothing is due until you approve it.",
        },
        {
          question: "What decorative finishes do you offer?",
          answer: "For interior walls we offer Venetian plaster, Roman Clay, and faux and metallic finishes; for bare brick, limewash. Each is priced after an on-site look, and the estimate is free.",
        },
        {
          question: "When do I pay?",
          answer: "The estimate is free and nothing is due until you approve the written estimate. After approval there is a down payment, and the balance is due after the final walkthrough.",
        },
      ]}
      testimonials={[
        {
          quote: "They transformed our 1960s brick ranch beautifully. The limewash look is perfect.",
          name: "Jennifer K.",
          location: "Bellaire"
        },
        {
          quote: "Roman Clay in our entry is a showstopper. Worth the investment.",
          name: "Michael & Sarah T.",
          location: "West University Place"
        },
        {
          quote: "Professional and talented. They understood exactly what we wanted.",
          name: "Robert L.",
          location: "West University Place"
        }
      ]}
      relatedPages={[
        { title: "Limewash Memorial", href: "/limewash-decorative-finishes-memorial" },
        { title: "Limewash Tanglewood", href: "/limewash-decorative-finishes-tanglewood" },
        { title: "Limewash The Heights", href: "/limewash-decorative-finishes-the-heights" },
        { title: "Limewash Sugar Land", href: "/limewash-decorative-finishes-sugar-land" },
        { title: "Limewash Katy", href: "/limewash-decorative-finishes-katy-cinco-ranch" },
        { title: "Limewash Cypress", href: "/limewash-decorative-finishes-cypress-bridgeland" }
      ]}
      warrantyYears={5}
      warrantyType="Limewash"
    />
  )
}
