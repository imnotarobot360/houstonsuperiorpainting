import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS } from "@/lib/business"

export const metadata: Metadata = {
  title: "Limewash & Decorative Finishes Katy & Cinco Ranch, TX",
  description: "Limewash for brick and stucco, plus Venetian plaster and decorative interior finishes in Katy and Cinco Ranch, TX. Priced on-site; the estimate is free.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/limewash-decorative-finishes-katy-cinco-ranch",
  },
}

export default function LimewashKatyPage() {
  return (
    <GeoServicePageTemplate
      service="Limewash & Decorative Finishes"
      serviceSlug="limewash-decorative-finishes"
      zone="Katy & Cinco Ranch, TX"
      zoneSlug="katy-cinco-ranch"
      metaTitle="Limewash & Decorative Finishes Katy & Cinco Ranch, TX"
      metaDescription="Limewash for brick and stucco, plus Venetian plaster and decorative interior finishes in Katy and Cinco Ranch, TX. Priced on-site; the estimate is free."
      h1="Limewash & Decorative Finishes in Katy and Cinco Ranch, TX"
      heroSubheading="Limewash for brick and stucco, and plaster-style decorative finishes for interior walls, applied with careful prep and backed by a 5-year written workmanship warranty."
      introLocal="Brick fronts are common across Cinco Ranch, Cross Creek Ranch and the rest of Katy, and limewash is a way to soften red or orange brick without the solid, painted look. For brick that has already been painted, see our brick painting page for Katy."
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
          question: "How much does limewash cost in Katy?",
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
          quote: "They transformed our Cinco Ranch home with limewash. We get compliments constantly.",
          name: "Michelle & David R.",
          location: "Cinco Ranch"
        },
        {
          quote: "The Roman Clay accent wall is the highlight of our home.",
          name: "Brandon T.",
          location: "Cross Creek Ranch"
        },
        {
          quote: "Professional and talented. They delivered exactly what we wanted.",
          name: "Sandra L.",
          location: "Firethorne"
        }
      ]}
      relatedPages={[
        { title: "Venetian plaster", href: "/venetian-plaster-houston-tx" },
        { title: "Brick painting in Katy", href: "/brick-painting-katy" },
        { title: "Exterior painting in Katy & Cinco Ranch", href: "/exterior-painting-katy-cinco-ranch" },
        { title: "Limewash in Cypress & Bridgeland", href: "/limewash-decorative-finishes-cypress-bridgeland" },
        { title: "Limewash in Sugar Land", href: "/limewash-decorative-finishes-sugar-land" },
        { title: "Painters in Katy, TX (Katy office)", href: "/painters-katy-tx" }
      ]}
      warrantyYears={5}
      warrantyType="Workmanship"
    />
  )
}
