import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/limewash-decorative-finishes-the-heights',
  },
  title: "Limewash & Decorative Finishes The Heights",
  description: "Limewash for brick chimneys, walls and newer brick homes, plus decorative finishes, in the Houston Heights. Priced after an on-site look; free estimate.",
}

export default function LimewashHeightsPage() {
  return (
    <GeoServicePageTemplate
      service="Limewash & Decorative Finishes"
      serviceSlug="limewash-decorative-finishes"
      zone="The Heights, Houston, TX"
      zoneSlug="the-heights"
      metaTitle="Limewash & Decorative Finishes The Heights"
      metaDescription="Limewash for brick chimneys, walls and newer brick homes, plus decorative finishes, in the Houston Heights. Priced after an on-site look; free estimate."
      h1="Limewash & Decorative Finishes in The Heights, Houston, TX"
      heroSubheading="Limewash for brick, stone and stucco, and decorative finishes such as Venetian plaster for interior walls, priced after an on-site look."
      introLocal="Most original Heights homes are wood-sided, so limewash here is usually for brick chimneys, foundations, garden walls, newer brick construction, or interior walls. It is not the right product for every surface, so we look before quoting."
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
          question: "How much does limewash cost in The Heights?",
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
          quote: "They gave our 1920s bungalow a beautiful limewashed exterior. It fits the Heights perfectly.",
          name: "Amanda S.",
          location: "Woodland Heights"
        },
        {
          quote: "The Roman Clay accent wall is stunning. True craftsmanship.",
          name: "Chris & Kelly M.",
          location: "The Heights"
        },
        {
          quote: "They understood the historic character of our home and enhanced it beautifully.",
          name: "Daniel R.",
          location: "Norhill"
        }
      ]}
      relatedPages={[
        { title: "Limewash Memorial", href: "/limewash-decorative-finishes-memorial" },
        { title: "Limewash Tanglewood", href: "/limewash-decorative-finishes-tanglewood" },
        { title: "Limewash Bellaire", href: "/limewash-decorative-finishes-bellaire-west-university" },
        { title: "Limewash Sugar Land", href: "/limewash-decorative-finishes-sugar-land" },
        { title: "Limewash Katy", href: "/limewash-decorative-finishes-katy-cinco-ranch" },
        { title: "Limewash Cypress", href: "/limewash-decorative-finishes-cypress-bridgeland" }
      ]}
      warrantyYears={5}
      warrantyType="Limewash"
    />
  )
}
