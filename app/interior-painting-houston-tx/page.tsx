import type { Metadata } from "next"
import Link from "next/link"
import { ServiceSkeleton, serviceUrl } from "@/components/aeo/service-skeleton"
import { generateServiceSchema } from "@/components/structured-data"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

const SLUG = "interior-painting-houston-tx"
const URL = serviceUrl(SLUG)
const TITLE = "Interior Painting Houston TX | 2026 Prices & Process"
const DESCRIPTION =
  "Interior painting in Houston costs $2.50–$4.50/sq ft in 2026, or $4,000–$8,000 for a 2,500 sq ft home. Two coats, 5-year warranty. Call (346) 594-5960."
const OG_IMAGE = "https://houstonsuperiorpainting.com/images/og/og-interior-painting.jpg"

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
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Interior painting in Houston, TX" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
}

// Min/max match the price table below (accent wall → 4,000+ sq ft interior).
const serviceSchema = generateServiceSchema({
  name: "Interior Painting in Houston, TX",
  slug: SLUG,
  description:
    "Interior painting in Houston, Katy, Cypress, Sugar Land and nearby Texas cities: walls, ceilings, trim, doors, and accent walls. Full prep and two coats of Sherwin-Williams or Benjamin Moore. 5-year workmanship warranty.",
  serviceType: "Interior Painting",
  minPrice: 150,
  maxPrice: 14000,
  subServices: ["Wall Painting", "Ceiling Painting", "Trim & Baseboards", "Door Painting", "Accent Walls", "Whole-Home Repaints"],
})

const faqs = [
  {
    q: "How much does interior painting cost in Houston in 2026?",
    a: `Interior painting in Houston runs ${PRICES_2026.interiorPerSqFt} per square foot of floor area in 2026. A 12×14 room costs ${PRICES_2026.singleRoom}, and a full 2,500 sq ft interior costs ${PRICES_2026.fullInterior2500}, including prep and premium paint.`,
  },
  {
    q: "How long does interior painting take for a 2,500 sq ft home?",
    a: "Three to five days for a 2,500 sq ft home with a crew of three. A single room is usually done in one day.",
  },
  {
    q: "Do you use Sherwin-Williams or Benjamin Moore?",
    a: "Both. Benjamin Moore Aura or Regal Select on most walls, Sherwin-Williams Emerald where you need the most washable finish, and a cabinet-grade enamel on trim and doors. Low-VOC options are available.",
  },
  {
    q: "What prep do you do before painting in Houston humidity?",
    a: "We patch nail holes and cracks, sand, caulk gaps at trim and baseboards, and spot-prime stains and bare patches. In bathrooms and kitchens we clean off any mildew and use a mildew-resistant primer and a satin finish so the paint stands up to steam.",
  },
  {
    q: "How many coats do you apply?",
    a: "Two full finish coats on walls, ceilings, and trim, plus primer on bare drywall, patches, and stains. We inspect under bright light between coats.",
  },
  {
    q: "Do I need to move furniture or be home?",
    a: "No. We move and wrap furniture ourselves, cover floors, and put everything back when we finish. Most families stay in the house during the job because we work room by room with low-VOC paint.",
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
    a: `Call ${BUSINESS.phone} or request an estimate online. We walk the house with you and send a written scope with square footage, product, and coat count within 24 hours.`,
  },
]

export default function InteriorPaintingHoustonTX() {
  return (
    <ServiceSkeleton
      slug={SLUG}
      serviceName="Interior Painting"
      h1="Interior Painting in Houston, TX"
      quickAnswer={
        <>
          Interior painting in Houston costs {PRICES_2026.interiorPerSqFt} per square foot in 2026:{" "}
          {PRICES_2026.singleRoom} for a single room and {PRICES_2026.fullInterior2500} for a 2,500 sq ft home.{" "}
          {BUSINESS.name} preps, patches, and applies two coats of Sherwin-Williams or Benjamin Moore, backed by a{" "}
          {BUSINESS.trust.warrantyYears}-year workmanship warranty. Free estimates: {BUSINESS.phone}.
        </>
      }
      beforeAfter={{
        before: "/images/interior-before-1.jpg",
        after: "/images/interior-after-1.jpg",
        beforeAlt: "Houston dining room with dated golden-yellow walls before interior painting",
        afterAlt: "Same Houston dining room repainted slate blue with crisp white trim",
        caption: "A Houston dining room: walls, wainscoting, and trim repainted from golden yellow to slate blue.",
      }}
      whoFor={
        <p>
          Homeowners in Houston, Katy, Cypress, Sugar Land, Magnolia, and The Woodlands who want walls, ceilings, trim,
          and doors repainted — a single room, an accent wall, or a full interior before a move-in or sale. We also
          handle closets, stair risers and railings, built-ins, and color drenching (walls, trim, and ceiling in one
          color). If your walls have cracks or water stains, we fix them first as part of the same estimate through our{" "}
          <Link href="/drywall-repair-houston-tx">drywall repair service</Link>.
        </p>
      }
      processTitle="Our interior painting process in Houston"
      steps={[
        {
          title: "Protect and prep",
          text: "Floors covered, furniture moved and wrapped, switch plates removed, vents masked. Then we sand, caulk gaps, patch nail holes and cracks, and spot-prime bare spots and stains.",
        },
        {
          title: "Choose the product and sheen",
          text: "Color consultation is included, with large samples on your walls so you see them in your own light. Typical spec: matte or eggshell walls, satin or semi-gloss trim and doors, satin in kitchens and baths, flat ceilings.",
        },
        {
          title: "Apply two full coats",
          text: "Walls are cut in and rolled; trim and doors are sprayed or brushed with enamel for a smooth finish. We inspect under bright light between coats and touch up before moving on.",
        },
        {
          title: "Clean up and walk through",
          text: "Switch plates back on, floors vacuumed, furniture returned. You walk every room with the crew lead before final payment.",
        },
      ]}
      risks={[
        <>
          <strong>Humidity in baths and kitchens.</strong> Steam from showers and cooking lifts flat paint. We use
          satin and mildew-resistant primer in wet rooms.
        </>,
        <>
          <strong>Mold and mildew.</strong> AC condensation around ceiling vents and exterior walls grows mildew. We
          clean and treat it before priming; painting over it only hides it for a few months.
        </>,
        <>
          <strong>Settling cracks.</strong> Houston&apos;s clay soil moves, so drywall cracks at door corners and
          ceiling seams are common. We tape and patch them instead of filling with caulk.
        </>,
        <>
          <strong>Sun through west windows.</strong> Strong afternoon sun fades cheaper paint on west-facing walls. A
          premium line holds color longer.
        </>,
        <>
          <strong>HOA rules.</strong> Interior colors are yours to pick; HOA approval only applies to exterior work.
        </>,
      ]}
      costTitle="Interior painting cost in Houston (2026)"
      price={{
        head: ["Project", "2026 Houston range", "Typical"],
        rows: [
          ["Single room (12×14)", PRICES_2026.singleRoom, "$500"],
          ["Accent wall", "$150–$400", "$250"],
          ["Full interior, 1,500 sq ft", "$3,000–$5,500", "$4,000"],
          ["Full interior, 2,500 sq ft", PRICES_2026.fullInterior2500, "$6,000"],
          ["Full interior, 4,000+ sq ft", "$7,000–$14,000", "$10,000"],
          ["Trim and baseboards, whole home", PRICES_2026.trimWholeHome, "$2,000"],
          ["Ceilings, whole home", "$1,500–$3,500", "$2,500"],
        ],
        note: "Prices assume two coats of Sherwin-Williams or Benjamin Moore on walls in fair condition. Heavy patching, wallpaper removal, or 12-ft ceilings add 15–30%.",
      }}
      costGuide={{ label: "interior painting cost guide for Houston", href: "/interior-painting-cost-houston" }}
      paints={
        <>
          <p>
            <strong>Benjamin Moore Aura or Regal Select</strong> on most walls and ceilings: both level well, touch up
            cleanly, and come in low-VOC formulas. <strong>Sherwin-Williams Emerald</strong> (or Duration Home) where
            walls get scrubbed — kids&apos; rooms, hallways, mudrooms. Trim and doors get a cabinet-grade enamel such as
            Benjamin Moore Advance for a hard, washable finish.
          </p>
          <p>
            Why it matters in Houston: humid air and constant AC cycling are hard on cheap paint, which scuffs,
            mildews, and flashes at touch-ups. Premium lines stay washable and hold sheen. We buy at contractor pricing
            and pass the product through at cost.
          </p>
        </>
      }
      faqs={faqs}
      related={[
        { label: "Exterior house painting in Houston", href: "/exterior-painting-houston-tx" },
        { label: "Kitchen cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
        { label: "Drywall repair in Houston", href: "/drywall-repair-houston-tx" },
      ]}
      schema={[serviceSchema]}
    />
  )
}
