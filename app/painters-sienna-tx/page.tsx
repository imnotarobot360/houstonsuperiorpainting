import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { generateLocationBusinessSchema } from "@/components/structured-data"
// This page shipped with no Header and no Footer, unlike its siblings —
// meaning no site navigation and none of the footer's internal links.
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "House Painters Sienna TX | Missouri City Painting",
  description:
    "House painters serving Sienna in Missouri City, TX. Interior, exterior, and cabinet painting with HOA architectural review support. Free estimates.",
  alternates: {
    canonical: "https://houstonsuperiorpainting.com/painters-sienna-tx",
  },
  openGraph: {
    title: "House Painters in Sienna | Missouri City, TX",
    description:
      "Painting contractors serving Sienna, Missouri City. Stucco and brick expertise, HOA color approval help, 5-year warranty.",
    type: "website",
  },
}

const siennaData = {
  city: "Sienna",
  state: "TX",
  heroHeadline: "House Painters Serving Sienna",
  heroDescription:
    "Painting contractors who know Sienna's architectural guidelines, its stucco-and-stone facades, and the HOA approval process that comes with them.",

  // Deliberately written around what is specific to Sienna — builder-grade
  // stucco, the Residential Association's architectural review, and the
  // community's newer housing stock — rather than restating the generic
  // Missouri City copy. Near-duplicate text across a parent city page and its
  // neighborhood page is what triggers cannibalization.
  aboutCity: `Sienna is one of Fort Bend County's largest master-planned communities, and painting a home here is rarely just a question of color. Most of Sienna was built from the early 2000s onward by builders like Perry Homes, David Weekley, Highland Homes, and Toll Brothers, which means a housing stock dominated by stucco, cast stone, and brick elevations rather than the older wood siding found closer to central Houston. Each of those surfaces wants a different preparation and a different coating.

Stucco is the one that catches homeowners out. Builder-applied stucco in Sienna is often finished with a thin acrylic coat that chalks and hairline-cracks after a decade of Gulf Coast heat cycling. Painting over it without addressing those cracks traps moisture behind the finish. We patch and bridge them with an elastomeric coating that stays flexible through Houston's expansion and contraction, so the repair does not telegraph through the new paint a year later.

The second Sienna-specific factor is the architectural review process. The Sienna Residential Association reviews exterior color changes, and approval is required before work begins — not after. We prepare submittals with manufacturer color codes and sheen specifications, and we schedule the project around the review timeline so your crew is not sitting idle waiting on a decision.

Sienna's newer construction also means many homes are hitting their first repaint window at the same time. Original builder paint is typically a single coat of contractor-grade product over minimal primer. A proper two-coat repaint with full surface preparation is usually the difference between five more years and fifteen.`,

  neighborhoods: [
    "Sawmill Lake",
    "Brushy Lake",
    "Sienna Steep Bank Village",
    "Sienna Village of Anderson Springs",
    "Sienna Village of Destrehan",
    "Sienna Village of Waters Lake",
    "Parkway Place",
    "Avalon at Sienna",
    "Bees Creek",
    "Sienna Point",
  ],

  services: [
    {
      title: "Exterior Painting",
      description:
        "Stucco, cast stone, and brick elevations prepared properly — crack bridging, masonry primer, and elastomeric or acrylic topcoats rated for Gulf Coast heat.",
      href: "/exterior-painting-houston-tx",
    },
    {
      title: "Interior Painting",
      description:
        "Two-story entries, open-plan great rooms, and the tall stairwell walls common in Sienna floor plans, finished without lap marks or roller stipple.",
      href: "/interior-painting-houston-tx",
    },
    {
      title: "Cabinet Refinishing",
      description:
        "Spray-finished cabinet refinishing for Sienna kitchens — a fraction of replacement cost, with a factory-smooth result that holds up to daily use.",
      href: "/cabinet-refinishing-houston-tx",
    },
    {
      title: "Drywall Repair",
      description:
        "Settlement cracks and nail pops are common in newer Fort Bend construction on clay soil. We repair the cause before we paint over the symptom.",
      href: "/drywall-repair-houston-tx",
    },
    {
      title: "Limewash Brick",
      description:
        "Softening a red-brick Sienna elevation with a breathable European limewash finish, without the permanence of solid masonry paint.",
      href: "/limewash-brick-painting-houston-tx",
    },
    {
      title: "Pressure Washing",
      description:
        "Driveways, patios, and stucco washed down before painting — and on its own for the mildew that Fort Bend humidity leaves on north-facing walls.",
      href: "/pressure-washing-houston-tx",
    },
  ],

  whyChooseUs: [
    "Experienced with Sienna Residential Association color submittals",
    "Stucco crack repair and elastomeric coating specialists",
    "Premium Sherwin-Williams & Benjamin Moore paints",
    "5-year warranty on residential work",
    "Detailed written estimates with no hidden costs",
    "Clean, background-checked crews",
    "Fully insured",
  ],

  testimonial: {
    quote:
      "Our stucco had hairline cracks all along the west side and two other companies just wanted to paint over them. Houston Superior Painting explained why that would fail, repaired them first, and handled the HOA color submittal for us. Two summers later it still looks new.",
    author: "Michael & Priya S.",
    location: "Sawmill Lake, Sienna",
  },

  faqs: [
    {
      question: "Do I need HOA approval to repaint my house in Sienna?",
      answer:
        "Yes. The Sienna Residential Association requires architectural review approval for exterior color changes before work starts. We provide manufacturer color codes and sheen details for your submittal, and we plan the schedule around the review window so nothing stalls mid-project.",
    },
    {
      question: "How do you handle cracked stucco in Sienna homes?",
      answer:
        "We open and patch hairline cracks, then bridge them with a flexible elastomeric coating rather than filling them with rigid caulk. Rigid patches re-crack within a season because Houston's heat cycling keeps moving the substrate. Wider structural cracks get assessed before we quote.",
    },
    {
      question: "How much does exterior painting cost in Sienna?",
      answer:
        "Most Sienna homes fall between $4,500 and $12,000 for exterior work, driven mainly by square footage, stucco versus brick, how much trim and soffit is involved, and the amount of crack repair needed. Every estimate is free and itemized.",
    },
    {
      question: "Why is my builder paint failing after only a few years?",
      answer:
        "Original builder paint in newer communities like Sienna is usually one thin coat of contractor-grade product over minimal primer, which is enough to look good at closing but not to last. A full two-coat repaint over properly primed surfaces typically triples the service life.",
    },
    {
      question: "Do you also serve the rest of Missouri City?",
      answer:
        "Yes. Sienna is one of several Missouri City communities we work in — you can see our full coverage on our Missouri City painting page, which includes Riverstone, Lake Olympia, and Quail Valley.",
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
