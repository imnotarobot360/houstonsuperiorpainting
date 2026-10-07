import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
import { BUSINESS, PRICES_2026 } from "@/lib/business"
// This page shipped with no Header and no Footer, unlike its siblings —
// meaning no site navigation and none of the footer's internal links.
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "House Painters in Sienna TX | Houston Superior Painting",
  description:
    "House painters serving Sienna in Missouri City, TX. Interior, exterior, stucco and cabinet painting, plus help with HOA color submittals. Free estimates.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/painters-sienna-tx",
  },
  openGraph: { images: [{ url: "https://houstonsuperiorpainting.com/images/og-cover.jpg", width: 1200, height: 630, alt: "Houston Superior Painting" }],
    title: "House Painters in Sienna | Missouri City, TX",
    description:
      "Painting for Sienna homes in Missouri City: brick, stucco and siding prep, HOA color submittal help, 5-year workmanship warranty.",
    type: "website",
  },
}

const siennaData = {
  city: "Sienna",
  state: "TX",
  heroHeadline: "House Painters Serving Sienna",
  heroDescription:
    "Interior, exterior and cabinet painting for Sienna homes in Missouri City, with prep for brick, stucco and siding and help preparing your HOA color submittal.",

  quickAnswer: `Houston Superior Painting paints homes in Sienna, Missouri City. Exterior painting typically runs ${PRICES_2026.exteriorPerHome} per home (a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}), and interior painting ${PRICES_2026.interiorPerSqFt}/sq ft. Sienna's residential association reviews exterior color changes, so get approval before work starts; we provide the color codes and sheens for your submittal. Insured, 5-year workmanship warranty. Call ${BUSINESS.phone} for a free estimate.`,

  // Deliberately written around what is specific to Sienna — its newer
  // housing stock, stucco and masonry elevations, and the association's
  // architectural review — rather than restating the generic Missouri City
  // copy. Near-duplicate text across a parent city page and its neighborhood
  // page is what triggers cannibalization.
  aboutCity: `Sienna is a large master-planned community in Missouri City, built mostly since the late 1990s. Homes are typically brick, often with stucco or cast stone accents, painted fiber-cement or wood siding, and plenty of trim and soffit. Each of those surfaces needs different preparation and a different coating.

Stucco is the one that most often catches homeowners out. Over time it can chalk and develop hairline cracks. Painting over cracks without treating them can trap moisture and let the cracks show back through, so we clean the surface, patch and bridge hairline cracks with a flexible coating, and have wider cracks assessed before quoting.

The second Sienna-specific factor is architectural review. The community's residential association reviews exterior color changes, and approval is needed before work begins. We provide manufacturer color codes and sheen details for your submittal, and schedule the job once you have approval.

Many Sienna homes are now due for their first repaint. Original builder paint is often a light coat, so a proper repaint with full surface preparation and two finish coats makes a real difference in how long it lasts. Houston Superior Painting was founded in 2019 and is headquartered in Cypress, with an office in Sugar Land. Every estimate is free and written, and nothing is due until you approve it.`,

  neighborhoods: [
    "Sienna Steep Bank Village",
    "Sienna Village of Anderson Springs",
    "Sienna Village of Destrehan",
    "Sienna Village of Waters Lake",
    "Avalon at Sienna",
  ],

  services: [
    {
      title: "Exterior Painting",
      description:
        "Brick trim, siding, soffits and stucco prepared properly: washing, crack repair, primer and finish coats suited to Houston heat and humidity.",
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
        "Two-story entries, open-plan great rooms and tall stairwell walls, finished without lap marks.",
      href: "/interior-painting-houston-tx",
    },
    {
      title: "Cabinet Refinishing",
      description:
        "Spray-finished cabinet refinishing as an alternative to replacing sound cabinet boxes.",
      href: "/cabinet-refinishing-houston-tx",
    },
    {
      title: "Drywall Repair",
      description:
        "Settlement cracks and nail pops repaired before painting.",
      href: "/drywall-repair-houston-tx",
    },
    {
      title: "Limewash Brick",
      description:
        "A breathable limewash finish to soften a brick elevation, priced after an on-site look.",
      href: "/limewash-brick-painting-houston-tx",
    },
    {
      title: "Pressure Washing",
      description:
        "Driveways, patios and walls washed before painting, or on their own for mildew on shaded walls.",
      href: "/pressure-washing-houston-tx",
    },
  ],

  whyChooseUs: [
    "Help preparing color codes and sheen details for HOA submittals",
    "Stucco crack repair before painting, not paint over cracks",
    "Sherwin-Williams and Benjamin Moore paints",
    "5-year written workmanship warranty",
    "Detailed written estimates",
    "Insured: $2M general liability plus workers' comp",
  ],

  faqs: [
    {
      question: "Do I need HOA approval to repaint my house in Sienna?",
      answer:
        "Yes. Sienna's residential association reviews exterior color changes, and approval is needed before work starts. We provide manufacturer color codes and sheen details for your submittal and schedule the job once it is approved.",
    },
    {
      question: "How do you handle cracked stucco in Sienna homes?",
      answer:
        "We clean the surface, patch hairline cracks and bridge them with a flexible coating rather than rigid caulk, which tends to re-crack as the wall moves with heat. Wider cracks are assessed before we quote.",
    },
    {
      question: "How much does exterior painting cost in Sienna?",
      answer:
        `Most Sienna homes fall within ${PRICES_2026.exteriorPerHome} for exterior work (a 2,500 sq ft two-story is typically ${PRICES_2026.exterior2500TwoStory}), driven mainly by size, stucco versus brick, how much trim and soffit is involved, and the amount of crack repair needed. Every estimate is free and written.`,
    },
    {
      question: "Why is my builder paint failing after only a few years?",
      answer:
        "Original builder paint is often a light coat over minimal primer. It looks fine at closing but does not hold up as well as a repaint with full surface preparation, primer where needed, and two finish coats.",
    },
    {
      question: "Do you also serve the rest of Missouri City?",
      answer:
        "Yes. Sienna is one of several Missouri City communities we work in. Our Missouri City painting page covers the rest of the city, including Lake Olympia and Quail Valley.",
    },
  ],
}

export default function PaintersSiennaTX() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateLocationBusinessSchema({
              city: "Sienna",
              slug: "painters-sienna-tx",
              description:
                "House painters serving Sienna in Missouri City, TX — interior, exterior, stucco, and cabinet painting.",
            }),
          ),
        }}
      />
      <Header />
      <main>
        <LocationPageTemplate {...siennaData} />
      </main>
      <Footer />
    </>
  )
}
