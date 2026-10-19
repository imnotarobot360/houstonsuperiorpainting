import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-06.
// No turnaround-time promise (none approved). Prices only from PRICES_2026.

const D: GuideArticleData = {
  path: "/blog/rental-turnover-painting-houston",
  title: "Rental Turnover Painting in Houston: Timeline and Checklist",
  description:
    "For landlords and property managers: a standard color and sheen, a turnover painting checklist, scheduling between tenants and keeping costs predictable.",
  h1: "Rental turnover painting in Houston: timeline and checklist",
  eyebrow: "Property guide",
  published: "2026-11-06",
  updated: "2026-11-06",
  quickAnswer: (
    <>
      The fastest, most predictable rental turnovers use one standard wall color and sheen across every unit, a written
      scope for what gets painted at each turnover (touch-up vs. full repaint), and a painter booked before the tenant
      moves out. Do repairs first, paint second, then clean and do flooring. Keeping the color, product and sheen on file
      makes the next turnover faster and touch-ups blend.
    </>
  ),
  sections: [
    {
      title: "Standardize to save time and money",
      body: (
        <Bullets
          items={[
            "One wall color and one sheen for all units (a durable eggshell is a common choice), one trim color, one ceiling white.",
            "The same product line every time, so touch-ups match and leftover paint is useful.",
            "A written record for each property: rooms, colors, sheens, products and the last repaint date.",
          ]}
        />
      ),
    },
    {
      title: "Touch-up or full repaint?",
      body: (
        <p>
          A short tenancy with clean walls may only need touch-ups and patched nail holes, but touch-ups on eggshell or satin
          often show, so heavily marked walls are usually faster to repaint from corner to corner. Plan a full repaint every
          few tenancies, or when changing color. See{" "}
          <Link href="/blog/why-paint-touch-ups-dont-match">why touch-ups don&apos;t match</Link>.
        </p>
      ),
    },
    {
      title: "Turnover checklist",
      body: (
        <Steps
          items={[
            { title: "Walk the unit at move-out", text: "photograph damage, mark walls for repair and decide touch-up vs. repaint, room by room." },
            { title: "Repairs first", text: "patch holes, fix drywall damage, replace damaged trim and caulk gaps." },
            { title: "Stains", text: "seal water, smoke and marker stains with a stain-blocking primer so they don't bleed through." },
            { title: "Paint", text: "ceilings, then walls, then trim and doors, using the property's standard colors." },
            { title: "Clean and floors", text: "final clean and any flooring work after paint." },
            { title: "Update the record", text: "note what was painted, with which products, and when." },
          ]}
        />
      ),
    },
    {
      title: "Scheduling between tenants",
      body: (
        <p>
          The biggest delay is usually booking, not painting. Schedule the painter as soon as the move-out date is known, and
          give the crew access and working utilities (power, water and air conditioning). How long the work takes depends on
          the unit size and repairs; your estimate should state the planned schedule. For occupied units, see{" "}
          <Link href="/blog/stay-home-during-interior-painting-houston">staying home during interior painting</Link>.
        </p>
      ),
    },
    {
      title: "Planning costs",
      body: (
        <p>
          As 2026 planning ranges, a single room typically runs {P.singleRoom}, and a townhome interior{" "}
          {P.townhomeInterior}. Standardized colors and a repeat scope make each turnover easier to price. Property managers
          with several units can ask for a written scope that covers repeat turnovers. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What color should I paint a rental?",
      a: "One neutral wall color and sheen used in every unit, with a standard trim and ceiling white. It hides wear, appeals to most tenants and makes touch-ups match.",
    },
    {
      q: "What paint sheen is best for rentals?",
      a: "A durable, washable eggshell is a common choice for walls; semi-gloss for trim and doors. Flat paint marks easily in rentals except on ceilings.",
    },
    {
      q: "How often should a rental be repainted?",
      a: "It depends on tenancy length and wear. Many owners touch up between short tenancies and fully repaint every few turnovers or when the walls are heavily marked.",
    },
    {
      q: "Should repairs be done before or after painting?",
      a: "Before. Patch, repair and seal stains first, then paint, then clean and do flooring.",
    },
  ],
  limitations: <>General guidance. Prices are planning ranges, not quotes; the schedule depends on the unit and repairs.</>,
  related: [
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
    { label: "Cost to paint a room", href: "/cost-to-paint-a-room-houston" },
    { label: "Why touch-ups don't match", href: "/blog/why-paint-touch-ups-dont-match" },
    { label: "Small painting jobs in Houston", href: "/small-painting-jobs-houston" },
  ],
  ctaTitle: "Get a written estimate for your rental",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
