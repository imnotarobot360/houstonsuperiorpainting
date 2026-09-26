import type { Metadata } from "next"
import Link from "next/link"
import { ServiceSkeleton, serviceUrl } from "@/components/aeo/service-skeleton"
import { generateServiceSchema } from "@/components/structured-data"
import { BUSINESS } from "@/lib/business"

const SLUG = "drywall-repair-houston-tx"
const URL = serviceUrl(SLUG)
const TITLE = "Drywall Repair Houston TX | 2026 Prices & Texture Matching"
const DESCRIPTION =
  "Drywall repair in Houston costs $200–$2,500 in 2026: patches, water damage, and orange peel or knockdown texture matching, primed and painted. (346) 594-5960."
const OG_IMAGE = "https://houstonsuperiorpainting.com/images/og/og-drywall-repair.jpg"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: BUSINESS.name,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Drywall repair in Houston, TX" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
}

// Min/max match the price table below (small hole patch → room-size water damage).
const serviceSchema = generateServiceSchema({
  name: "Drywall Repair in Houston, TX",
  slug: SLUG,
  description:
    "Drywall repair in Houston, Katy, Cypress, Sugar Land and nearby Texas cities: crack repair, hole patching, water damage repair, and texture matching (orange peel, knockdown, smooth), primed and painted to match.",
  serviceType: "Drywall Repair",
  minPrice: 200,
  maxPrice: 2500,
  subServices: ["Crack Repair", "Hole Patching", "Water Damage Repair", "Texture Matching", "Popcorn Ceiling Removal"],
})

const faqs = [
  {
    q: "How much does drywall repair cost in Houston in 2026?",
    a: "Drywall repair in Houston runs $200–$2,500 in 2026. A fist-sized hole costs $200–$400, a small water-damage repair $400–$900, and a room-size water-damage repair $900–$2,500, including texture match, primer, and paint.",
  },
  {
    q: "How long does drywall repair take?",
    a: "Most small repairs are done in one day. Water damage and full-room re-texturing take two to four days because joint compound has to dry between coats, and it dries slower in Houston humidity.",
  },
  {
    q: "Can you match my existing wall texture?",
    a: "Yes. We match orange peel, knockdown, smooth, hand-trowel skip, and Spanish lace. We test the texture on a hidden spot first so the repair disappears after paint.",
  },
  {
    q: "Do you repair water damage from roof leaks or pipe bursts?",
    a: "Yes, once the leak itself is fixed. We cut out the wet drywall, treat any mold we find, hang new board, tape, mud, texture-match, prime, and paint.",
  },
  {
    q: "How many coats do you apply?",
    a: "Usually three coats of joint compound, sanded between coats, then a coat of primer and two coats of finish paint matched to the wall.",
  },
  {
    q: "Do you paint over the drywall repair?",
    a: "Yes. Every repair is primed and painted. For a small patch we paint the repair area; when an exact color match isn't possible we paint the whole wall corner to corner so no difference shows.",
  },
  {
    q: "Is drywall repair included with interior painting?",
    a: "Light repairs such as nail pops, hairline cracks, and small patches are included with our interior painting. Larger repairs are priced as separate lines on the same estimate.",
  },
  {
    q: "Are you licensed and insured in Texas?",
    a: "Texas does not license painters. We carry $2M general liability and workers' compensation, and the certificate of insurance comes with every estimate.",
  },
  {
    q: "What does the 5-year warranty cover?",
    a: "Peeling, blistering, and flaking caused by our workmanship. It does not cover damage from water intrusion, settling, or surfaces you asked us not to prep.",
  },
  {
    q: "Do you require a deposit?",
    a: "Only after you approve the estimate. The estimate is free and we collect nothing before you approve it. Once you approve, a down payment schedules the job, and the balance is due after the final walkthrough.",
  },
  {
    q: "How do I get an estimate?",
    a: `Call ${BUSINESS.phone} or request an estimate online. Send photos for a quick range, or we come out, find the cause of the damage, and send a written scope within 24 hours.`,
  },
]

export default function DrywallRepairHoustonPage() {
  return (
    <ServiceSkeleton
      slug={SLUG}
      serviceName="Drywall Repair"
      h1="Drywall Repair in Houston, TX"
      quickAnswer={
        <>
          Drywall repair in Houston costs $200–$2,500 in 2026: $200–$400 for a fist-sized hole, $400–$900 for small
          water damage, and up to $2,500 for a room-size water-damage repair. {BUSINESS.name} patches, matches orange
          peel or knockdown texture, primes, and paints to match. Free estimates: {BUSINESS.phone}.
        </>
      }
      beforeAfter={{
        before: "/images/drywall-before-1.jpg",
        after: "/images/drywall-after-1.jpg",
        beforeAlt: "Damaged drywall in a Houston home before repair",
        afterAlt: "Same wall after drywall repair, texture match, and paint",
      }}
      whoFor={
        <p>
          Houston homeowners with cracked, dented, or water-stained walls and ceilings: settling cracks at door
          corners, nail pops, doorknob holes, seams that bubbled after an AC leak, or ceilings stained by a roof leak.
          We also scrape popcorn ceilings and skim-coat textured walls smooth. Most customers pair a repair with a
          repaint through our <Link href="/interior-painting-houston-tx">interior painting service</Link> so the
          whole room matches.
        </p>
      }
      processTitle="Our drywall repair process in Houston"
      steps={[
        {
          title: "Find the cause and prep",
          text: "We diagnose why the wall failed — settling, water, or impact — and confirm any leak is fixed first. Floors and furniture are covered, and dust containment goes up for larger repairs. Damaged or wet board is cut out cleanly.",
        },
        {
          title: "Patch with the right product",
          text: "New drywall is screwed in flush and taped. Mold is treated where we find it. We use setting-type compound for deep fills and water-damaged areas, and lightweight compound for finish coats.",
        },
        {
          title: "Build coats and match texture",
          text: "Multiple coats of joint compound, feathered and sanded between coats, then texture sprayed or troweled to match: orange peel, knockdown, smooth, or specialty. Stain-blocking primer and two coats of finish paint follow.",
        },
        {
          title: "Walkthrough",
          text: "You look at the repair in daylight with the crew lead before final payment. If you can find the patch, we redo it.",
        },
      ]}
      risks={[
        <>
          <strong>Foundation settling.</strong> Houston&apos;s clay soil shrinks and swells, so diagonal cracks at door
          and window corners come back if they are only caulked. We tape and mud them.
        </>,
        <>
          <strong>Water damage and flashing leaks.</strong> Roof, window-flashing, plumbing, and AC-drain leaks stain
          ceilings and soften drywall. The source has to be fixed before we patch, or the stain returns.
        </>,
        <>
          <strong>Mold behind wet drywall.</strong> Board that stays wet for more than a couple of days in Houston
          humidity can grow mold. We cut out wet sections instead of painting over them.
        </>,
        <>
          <strong>Humidity and dry times.</strong> Joint compound dries slower in humid air. Rushing primer over damp
          mud causes cracking and flashing (dull spots) in the finish.
        </>,
      ]}
      costTitle="Drywall repair cost in Houston (2026)"
      price={{
        head: ["Repair", "2026 Houston range", "Typical time"],
        rows: [
          ["Small hole patch (fist-sized)", "$200–$400", "1 day"],
          ["Doorknob hole repair", "$250–$500", "1 day"],
          ["Ceiling crack repair (single room)", "$300–$800", "1–2 days"],
          ["Water damage repair (small)", "$400–$900", "2–3 days"],
          ["Water damage repair (room-size)", "$900–$2,500", "3–5 days"],
          ["Full-room re-texture (orange peel or knockdown)", "$650–$1,500", "2–3 days"],
          ["Popcorn ceiling removal (per room)", "$650–$1,400", "1–2 days"],
        ],
        note: "Includes texture match, primer, and paint. Final price depends on damage extent, ceiling height, and whether mold treatment is needed. Older popcorn ceilings may need asbestos testing before removal.",
      }}
      costGuide={{ label: "Houston painting cost guide", href: "/houston-painting-cost-guide" }}
      paints={
        <>
          <p>
            <strong>Joint compound:</strong> setting-type compound for deep fills and water-damaged areas (it hardens
            chemically, so humidity doesn&apos;t stall it) and lightweight compound for the finish coats.{" "}
            <strong>Primer:</strong> drywall primer over new board and mud, and a stain-blocking primer over water
            stains so they don&apos;t bleed through. <strong>Finish paint:</strong> Benjamin Moore Aura or Regal Select,
            or Sherwin-Williams Emerald or Duration Home, matched to your existing wall color and sheen.
          </p>
          <p>
            Why it matters in Houston: patches that skip primer &quot;flash&quot; (show as dull spots) under strong
            light, and water stains bleed through ordinary paint. Priming every repair is what makes it invisible.
          </p>
        </>
      }
      faqs={faqs}
      related={[
        { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
        { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
        { label: "Wallpaper removal in Houston", href: "/wallpaper-removal-houston-tx" },
      ]}
      schema={[serviceSchema]}
    />
  )
}
