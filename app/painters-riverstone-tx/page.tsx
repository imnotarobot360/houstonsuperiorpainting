import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { BUSINESS, PRICES_2026 } from "@/lib/business"
// This page shipped with no Header and no Footer, unlike its 20 siblings —
// meaning no site navigation and none of the footer's internal links.
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "House Painters Riverstone TX | Sugar Land Painting",
  description:
    "House painters serving Riverstone in Sugar Land and Missouri City, TX. Interior, exterior and cabinet painting with HOA submittal help. Free estimates.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/painters-riverstone-tx",
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters in Riverstone | Sugar Land, TX",
    description:
      "Painting for Riverstone homes: mildew and moisture-aware prep near the lakes, HOA color submittal help, 5-year workmanship warranty.",
    type: "website",
  },
}

const riverstoneData = {
  city: "Riverstone",
  state: "TX",
  heroHeadline: "House Painters Serving Riverstone",
  heroDescription:
    "Interior, exterior and cabinet painting across Riverstone's lakefront and inland sections, from HOA color submittals to the extra mildew prep that comes with living near the water.",

  // Feeds the data-speakable Quick Answer section used for voice and AI answers.
  quickAnswer:
    `Houston Superior Painting paints homes in Riverstone, which straddles the Sugar Land and Missouri City line. Interiors typically run ${PRICES_2026.interiorPerSqFt} per square foot (${PRICES_2026.fullInterior2500} for a 2,500 sq ft home) and exteriors ${PRICES_2026.exteriorPerHome}. Homes on the lakes often need mildew washing and treatment before priming, and exterior color changes need HOA approval before work starts. Insured, 5-year workmanship warranty. Call ${BUSINESS.phone} for a free estimate.`,

  // Riverstone's distinguishing factor versus Sienna is water: the community is
  // built around lakes, which means more mildew pressure on shaded elevations.
  // Content is built around that rather than reusing the Sienna or Sugar Land
  // narrative.
  aboutCity: `Riverstone is a master-planned community that spans the Sugar Land and Missouri City line, built around a series of lakes, with the Brazos River nearby. Most homes were built from the 2000s onward and are typically brick, with stucco or cast stone accents, painted siding, and plenty of trim and soffit.

The lakes affect exterior paint. Shaded walls near water stay damp longer, so mildew builds up faster, especially on north-facing elevations. Those surfaces need to be washed and treated before primer; painting over mildew seals it in and the discoloration comes back through the new paint. Humid days also slow drying, so coats are scheduled around the weather rather than the clock. Deep, saturated colors fade fastest in full sun, which is worth keeping in mind for front doors and accent walls.

Two other things are worth checking before a repaint. Stucco can develop hairline cracks, often at window and door corners, as the ground and wall move; those should be patched and bridged with a flexible coating rather than just painted over. And lawn sprinklers that spray the house can leave a chalky white band of hard-water minerals along the bottom of the wall, which has to be removed before primer so the new paint bonds. Adjusting the spray heads keeps it from coming back.

Exterior color changes go through the community's architectural review before work begins, and some sections have their own added guidelines. We provide color codes and sheen details for your submittal. Houston Superior Painting was founded in 2019 and is headquartered in Cypress, with an office in Sugar Land. Every estimate is free and written, and nothing is due until you approve it.`,

  neighborhoods: [
    "The Manors at Riverstone",
    "Avalon at Riverstone",
    "Chelsea Harbour",
    "Waters Edge",
  ],

  services: [
    {
      title: "Exterior Painting",
      description:
        "Exterior repaints with mildew washing and treatment before priming, crack repair, and coats scheduled around humidity.",
      href: "/exterior-painting-houston-tx",
    },
    {
      title: "Stucco Painting & Repair",
      description:
        "Hairline crack repair and flexible coatings for stucco elevations and accents.",
      href: "/stucco-painting-houston-tx",
    },
    {
      title: "Interior Painting",
      description:
        "Two-story window walls and open great rooms, with proper staging for the high work.",
      href: "/interior-painting-houston-tx",
    },
    {
      title: "Cabinet Refinishing",
      description:
        "Spray-finished cabinets as an alternative to replacing sound cabinet boxes.",
      href: "/cabinet-refinishing-houston-tx",
    },
    {
      title: "Pressure Washing",
      description:
        "Clearing mildew and algae from siding, stucco, patios and walkways.",
      href: "/pressure-washing-houston-tx",
    },
    {
      title: "Drywall Repair",
      description:
        "Settlement cracks and nail pops repaired before finish coats go on.",
      href: "/drywall-repair-houston-tx",
    },
  ],

  whyChooseUs: [
    "Help preparing color codes and sheen details for HOA submittals",
    "Mildew washing and treatment before priming on shaded, lakeside walls",
    "Stucco crack repair before painting",
    "Sherwin-Williams and Benjamin Moore paints",
    "5-year written workmanship warranty",
    "Insured: $2M general liability plus workers' comp",
  ],

  faqs: [
    {
      question: "Does living near the lakes in Riverstone affect exterior paint?",
      answer:
        "Yes. Shaded walls near water stay damp longer, which encourages mildew, so those surfaces need washing and treatment before primer. Humid days also slow drying, so coats are scheduled around the weather.",
    },
    {
      question: "Do I need HOA approval to repaint in Riverstone?",
      answer:
        "Yes. Exterior color changes go through architectural review before work starts, and some sections have added guidelines. We supply color codes and sheen details for the submittal and schedule the job once it is approved.",
    },
    {
      question: "How much does painting cost in Riverstone?",
      answer:
        `Exterior projects generally run ${PRICES_2026.exteriorPerHome} (a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}) and interiors ${PRICES_2026.interiorPerSqFt} per square foot, depending on size, stucco versus brick, trim, and how much mildew treatment or crack repair is needed. Estimates are free and written.`,
    },
    {
      question: "Why does mildew keep coming back on my shaded walls?",
      answer:
        "Usually because it was painted over rather than removed. Mildew needs to be washed and treated so the surface is clean before primer goes on; otherwise the discoloration works back through the new paint.",
    },
    {
      question: "Why does the stucco on my home keep cracking after painting?",
      answer:
        "Because the wall is moving and ordinary paint is not flexible enough to move with it. Hairline cracks need to be opened and patched, and walls with ongoing movement are better served by a flexible, elastomeric-type coating.",
    },
    {
      question: "What is the chalky white band along the bottom of my exterior walls?",
      answer:
        "Usually hard-water minerals from lawn sprinklers hitting the house. It resists normal washing and keeps new paint from bonding, so it has to be removed before primer. Redirecting the spray heads keeps it from coming back.",
    },
    {
      question: "Do you serve the rest of Sugar Land and Missouri City?",
      answer:
        "Yes. Riverstone straddles both, and our Sugar Land and Missouri City painting pages cover the surrounding communities.",
    },
  ],
}

export default function PaintersRiverstoneTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateLocationBusinessSchema({
              city: "Riverstone",
              slug: "painters-riverstone-tx",
              description:
                "House painters serving Riverstone in Sugar Land and Missouri City, TX — interior, exterior, and cabinet painting.",
            }),
          ),
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate {...riverstoneData} />
      </main>
      <Footer />
    </>
  )
}
