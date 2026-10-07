import type { Metadata } from "next"
import { GeoServicePageTemplate } from "@/components/geo-service-page-template"
import { BUSINESS } from "@/lib/business"

export const metadata: Metadata = {
  title: "Limewash & Decorative Finishes in Memorial, Houston, TX",
  description: "Limewash for brick and Venetian plaster for interior walls in Memorial, Houston. Priced after an on-site look. Free estimate, nothing due up front.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/limewash-decorative-finishes-memorial",
  },
  openGraph: {
    images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "Limewash & Decorative Finishes in Memorial, Houston, TX",
    description: "Limewash for brick and Venetian plaster for interior walls in Memorial, Houston. Priced after an on-site look. Free estimate, nothing due up front.",
    url: "https://houstonsuperiorpainting.com/limewash-decorative-finishes-memorial",
    siteName: "Houston Superior Painting",
    type: "website",
  },
}

export default function LimewashMemorialPage() {
  return (
    <GeoServicePageTemplate
      service="Limewash & Decorative Finishes"
      serviceSlug="limewash-decorative-finishes"
      zone="Memorial, Houston, TX"
      zoneSlug="memorial"
      metaTitle={"Limewash & Decorative Finishes in Memorial, Houston, TX"}
      metaDescription={"Limewash for brick and Venetian plaster for interior walls in Memorial, Houston. Priced after an on-site look. Free estimate, nothing due up front."}
      h1={"Limewash & Decorative Finishes in Memorial, Houston, TX"}
      heroSubheading={"Limewash for brick and Venetian plaster for interior walls in Memorial homes, priced after we see the surface."}
      introLocal={"Memorial has many brick homes, and limewash is a common way to update brick without the flat, solid look of paint. Limewash soaks into bare, unsealed brick and wears gradually. It does not behave the same way over brick that has been painted or sealed, so the first step is checking what is on your brick now. Inside, Venetian plaster can add depth and texture to a feature wall or a room."}
      serviceOverview={"Exterior limewash starts with cleaning the brick and checking for paint, sealers and mortar damage. The limewash is brushed on in thin coats and can be washed back while wet to let more of the brick show through, so we recommend approving a sample area before the whole house is done. For interiors we offer Venetian plaster. Because results depend heavily on the surface, these finishes are priced after an on-site look, and the written estimate spells out the product, technique and number of coats."}
      whyChooseUs={[
        "We check whether your brick is bare, painted or sealed before recommending limewash.",
        "A sample area first, so you can see how much brick shows through before committing.",
        "Mortar and masonry problems identified before any finish goes on.",
        "Venetian plaster available for interior feature walls.",
        "A written estimate with the product, technique and number of coats spelled out.",
      ]}
      priceDetails={"We don't publish a price range for limewash or decorative finishes. The cost depends on the surface, its condition, the area and the technique, so it is priced after an on-site look. The estimate is free, and nothing is due until you approve it."}
      faqs={[
        {
          question: "What is limewash?",
          answer: "Limewash is a coating made from slaked lime and water, often tinted. On bare masonry it soaks in rather than forming a film on top, which gives the soft, varied look. It wears gradually over time and can be refreshed with another coat.",
        },
        {
          question: "Can you limewash painted or sealed brick?",
          answer: "Not in the usual way. Limewash needs bare, porous masonry to bond. Over painted or sealed brick it will not soak in, so the coating has to come off first or a different product is needed. We check your brick before recommending anything.",
        },
        {
          question: "Should I limewash or paint my brick?",
          answer: "It depends on the look you want and on the brick. Limewash gives a softer, varied finish and lets the brick show through; masonry paint gives a solid, even color. Both are hard to undo, so it is worth seeing a sample first.",
        },
        {
          question: "How much does limewash and decorative finishes cost in Memorial?",
          answer: "We don't publish a price range for limewash and decorative finishes, because the cost depends on the surface, its condition, the area and the technique. We price it after an on-site look, and the estimate is free.",
        },
        {
          question: "What decorative finishes do you offer for interior walls?",
          answer: "For interior walls we offer Venetian plaster, Roman Clay, and faux and metallic finishes; for bare brick, limewash. Each is priced after an on-site look, and the estimate is free.",
        },
        {
          question: "Do I have to pay anything before work starts?",
          answer: `${BUSINESS.paymentPolicy.sentence}`,
        },
      ]}
      testimonials={[
        {
          quote: "They transformed our red brick colonial into a stunning white limewashed masterpiece. The finish has beautiful character.",
          name: "Catherine M.",
          location: "Hunters Creek Village"
        },
        {
          quote: "The Roman Clay finish in our living room is absolutely stunning. It's like living in a European villa.",
          name: "David & Lauren P.",
          location: "Memorial Park"
        },
        {
          quote: "They understood exactly what we wanted. The limewash has that perfect aged European look.",
          name: "Marcus T.",
          location: "Bunker Hill"
        }
      ]}
      relatedPages={[
        { title: "Limewash & Brick Painting Houston", href: "/limewash-brick-painting-houston-tx" },
        { title: "Venetian Plaster", href: "/venetian-plaster-houston-tx" },
        { title: "Brick Painting Memorial", href: "/brick-painting-memorial" },
        { title: "Exterior Painting Memorial", href: "/exterior-painting-memorial" },
        { title: "Painters in Memorial", href: "/painters-memorial-tx" },
        { title: "Limewash Tanglewood", href: "/limewash-decorative-finishes-tanglewood" },
        { title: "Limewash Bellaire & West University", href: "/limewash-decorative-finishes-bellaire-west-university" },
        { title: "Limewash The Heights", href: "/limewash-decorative-finishes-the-heights" },
      ]}
      warrantyYears={5}
      warrantyType="Limewash"
    />
  )
}
