import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS } from "@/lib/business"

export const metadata: Metadata = {
  title: "Limewash & Decorative Finishes Sugar Land, TX",
  description: "Limewash for brick and stucco, plus Venetian plaster and decorative interior finishes in Sugar Land, TX. Priced on-site; the estimate is free.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/limewash-decorative-finishes-sugar-land",
  },
}

export default function LimewashSugarLandPage() {
  return (
    <GeoServicePageTemplate
      service="Limewash & Decorative Finishes"
      serviceSlug="limewash-decorative-finishes"
      zone="Sugar Land, TX"
      zoneSlug="sugar-land"
      metaTitle="Limewash & Decorative Finishes Sugar Land, TX"
      metaDescription="Limewash for brick and stucco, plus Venetian plaster and decorative interior finishes in Sugar Land, TX. Priced on-site; the estimate is free."
      h1="Limewash & Decorative Finishes in Sugar Land, TX"
      heroSubheading="Limewash for brick and stucco, and plaster-style decorative finishes for interior walls, applied with careful prep and backed by a 5-year written workmanship warranty."
      introLocal="Sugar Land has a mix of brick and stucco exteriors, and both can take a lime-based finish when the surface is bare and porous."
      serviceOverview="Limewash is a mineral finish that soaks into bare, porous masonry instead of forming a film on top, which gives brick and stucco a soft, mottled color while letting the wall breathe. It does not bond to brick that has been painted or sealed; for those walls a mineral or masonry paint is the better option. Inside, we also apply Venetian plaster and other decorative wall finishes. We check the surface during the estimate and tell you which finish it can take."
      whyChooseUs={[
        "Founded in 2019 by owner Juan Serra and headquartered in Cypress, TX.",
        "We check the surface first: limewash only works on bare, porous masonry, and we will tell you if yours isn't a candidate.",
        "Venetian plaster and other decorative interior finishes are part of our services.",
        `Insured: ${BUSINESS.trust.liabilityCoverage} general liability plus workers' comp.`,
        "5-year written workmanship warranty.",
        "No upfront payment: the estimate is free and nothing is due until you approve it in writing."
      ]}
      priceDetails="Limewash and decorative finishes are priced after an on-site look. The surface (brick, stucco or interior wall), its condition, whether it has been painted or sealed, the area and the finish you choose all change the cost, so we don't publish a range for this work. The estimate is free."
      faqs={[
        {
          question: "What is limewash?",
          answer: "Limewash is a traditional finish made from slaked lime and water, tinted with mineral pigments. It soaks into porous masonry rather than forming a film, so it gives brick and stucco a soft, uneven color and lets moisture escape.",
        },
        {
          question: "Can my brick be limewashed?",
          answer: "Only if it is bare and porous. Limewash will not bond to brick that has been painted or sealed. For painted brick, a mineral or masonry paint is the better choice. We check the surface during the estimate.",
        },
        {
          question: "How long does limewash last?",
          answer: "Limewash wears away gradually rather than peeling, faster on walls that get the most rain and sun. It can be refreshed with another coat, and some homeowners like the look as it weathers.",
        },
        {
          question: "How much does limewash cost in Sugar Land?",
          answer: "We price limewash and decorative finishes after an on-site look, because the surface, its condition, the area and the finish change the cost too much for a useful published range. The estimate is free.",
        },
        {
          question: "What decorative interior finishes do you offer?",
          answer: "For interior walls we offer Venetian plaster, Roman Clay, and faux and metallic finishes; for bare brick, limewash. Each is priced after an on-site look, and the estimate is free.",
        },
        {
          question: "Does my HOA need to approve limewash?",
          answer: "In most master-planned communities, any change to exterior color needs HOA approval. Get approval before the job is scheduled.",
        }
      ]}
      testimonials={[
        {
          quote: "They transformed our Riverstone home with limewash. The European look is stunning.",
          name: "Lisa & Tom W.",
          location: "Riverstone"
        },
        {
          quote: "Roman Clay in our master bedroom is breathtaking. True artistry.",
          name: "Priya S.",
          location: "Sweetwater"
        },
        {
          quote: "Professional and talented. They delivered exactly what we envisioned.",
          name: "James K.",
          location: "First Colony"
        }
      ]}
      relatedPages={[
        { title: "Venetian plaster", href: "/venetian-plaster-houston-tx" },
        { title: "Exterior painting in Sugar Land", href: "/exterior-painting-sugar-land" },
        { title: "Limewash in Cypress & Bridgeland", href: "/limewash-decorative-finishes-cypress-bridgeland" },
        { title: "Limewash in Katy & Cinco Ranch", href: "/limewash-decorative-finishes-katy-cinco-ranch" },
        { title: "Painters in Sugar Land, TX (Sugar Land office)", href: "/painters-sugar-land-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Workmanship"
    />
  )
}
