import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Second-wave post #8 from the owner's search-demand plan (HSP-search-demand-and-
// missing-blogs-2026.md), written 2026-10-19. Mold facts are quoted from EPA's
// "A Brief Guide to Mold, Moisture, and Your Home" (checked 2026-10-19). No
// prices: water-damage repairs are quoted after an on-site look.

const EPA_MOLD = "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home"

const D: GuideArticleData = {
  path: "/blog/paint-over-water-stains-houston",
  title: "Can You Paint Over Water Stains? What Must Be Fixed First",
  description:
    "Painting over a water stain only works after the leak is fixed, the area is dry, mold is ruled out and a stain-blocking primer goes on. A Houston painter's checklist.",
  h1: "Can you paint over water stains? What must be fixed first",
  eyebrow: "Repair guide",
  published: "2026-10-19",
  updated: "2026-10-19",
  quickAnswer: (
    <>
      Yes, but not straight away. Regular paint over a water stain usually lets the brown ring bleed back through, and
      painting over an active leak or mold hides a problem that keeps growing. The order is: stop the leak, let the
      drywall dry completely, check for mold and soft or sagging drywall, repair what is damaged, seal the stain with a
      stain-blocking primer, then paint the whole ceiling or wall so the patch does not show.
    </>
  ),
  sections: [
    {
      title: "Why water stains come back through paint",
      body: (
        <p>
          The brown ring is minerals and dissolved material the water carried out of the drywall, insulation or wood above.
          They are water-soluble, so a water-based paint pulls them back to the surface as it dries. That is why a stain
          you painted over last month can reappear. A stain-blocking primer seals them in; finish paint alone does not,
          including most &quot;paint and primer in one&quot; products. See{" "}
          <Link href="/blog/primer-vs-two-coats-paint-houston">primer or two coats of paint</Link>.
        </p>
      ),
    },
    {
      title: "Before you paint: the five checks",
      body: (
        <Steps
          items={[
            {
              title: "Stop the source",
              text: "roof leak, AC drain line or condensation, plumbing above, a window or a bathroom seal. In Houston, AC condensate lines and storm-driven roof leaks are the usual suspects. If the leak is still active, any paint is temporary.",
            },
            {
              title: "Let it dry completely",
              text: "the stain can look dry while the drywall behind it is still wet. Paint over damp drywall can blister and peel. A moisture meter reading, or simply waiting several days after the leak is fixed, avoids that.",
            },
            {
              title: "Rule out mold",
              text: "dark spotting, a musty smell or a stain that keeps spreading are warning signs. EPA's guidance is not to paint or caulk moldy surfaces: clean the mold and dry the area first. Larger areas need a mold professional.",
            },
            {
              title: "Check the drywall",
              text: "press gently. Soft, sagging, crumbling or bubbled drywall, or tape that has lifted, needs to be cut out and replaced or repaired, not painted. Wet ceiling insulation above it may also need replacing.",
            },
            {
              title: "Then prime and paint",
              text: "seal the stain and every repair with a stain-blocking primer, then paint the whole ceiling or wall in the finish coats your estimate names, so the touch-up does not flash.",
            },
          ]}
        />
      ),
    },
    {
      title: "What EPA says about water damage and mold",
      body: (
        <Bullets
          items={[
            <>Dry water-damaged areas and items <strong>within 24–48 hours</strong> to prevent mold growth.</>,
            <><strong>Do not paint or caulk moldy surfaces.</strong> Clean up the mold and dry the surface first; paint over mold is likely to peel.</>,
            <>Absorbent materials such as <strong>ceiling tiles</strong> may have to be thrown away if they become moldy.</>,
            <>If mold covers <strong>more than about 10 square feet</strong>, EPA points to its professional remediation guidance.</>,
          ]}
        />
      ),
    },
    {
      title: "Why spot-painting a water stain often shows",
      body: (
        <p>
          Even a perfectly sealed stain can leave a visible square if only that spot is painted. Ceiling paint ages and
          yellows, the new patch has a different sheen, and textured ceilings show any repair in raking light. Painting the
          whole ceiling plane (corner to corner) is usually what makes the repair disappear. On textured ceilings the
          texture may need to be matched first; on popcorn ceilings, see{" "}
          <Link href="/blog/popcorn-ceiling-removal-houston">popcorn ceiling removal and painting</Link>.
        </p>
      ),
    },
    {
      title: "Exterior water stains and Houston storms",
      body: (
        <p>
          Outside, water stains on soffits, fascia and trim usually mean water is getting behind the paint: a gutter
          overflow, a missing drip edge or open joints. Painting over it without finding the cause leads to peeling and
          wood rot. Soft or crumbling wood needs to be replaced before painting; see{" "}
          <Link href="/wood-rot-repair-houston-tx">wood rot repair</Link> and{" "}
          <Link href="/blog/why-paint-peels-bubbles-houston">why paint peels and bubbles</Link>.
        </p>
      ),
    },
    {
      title: "Insurance and documentation",
      body: (
        <p>
          If the stain came from a storm, a roof leak or a burst pipe, photograph it (with a date) before anything is
          repaired, and check your homeowner&apos;s policy before work starts. Your insurer may want to see the damage
          first. We can document what we find and list the repair and painting separately on the written estimate.
        </p>
      ),
    },
    {
      title: "How we handle water-stained ceilings and walls",
      body: (
        <p>
          We look at the stain before quoting: whether the source is fixed, whether the area is dry, and whether the
          drywall is sound. If the drywall is damaged we include the{" "}
          <Link href="/drywall-repair-houston-tx">drywall repair</Link>; if we see signs of mold, we tell you, and it
          needs to be handled before we paint. The written estimate names the stain-blocking primer, the repair and the
          area being painted. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can I just spray a stain blocker on a water stain?",
      a: "A stain-blocking primer is the right product, but only after the leak is fixed, the drywall is completely dry and there is no mold. Then paint the whole ceiling or wall so the patch does not show.",
    },
    {
      q: "How long should a water-stained ceiling dry before painting?",
      a: "Until the drywall is dry all the way through, not just on the surface. That is often several days after the leak is fixed; a moisture meter reading is the reliable test. Paint on damp drywall can blister and peel.",
    },
    {
      q: "Is it safe to paint over mold?",
      a: "No. EPA advises not to paint or caulk moldy surfaces: clean the mold and dry the area first. Paint over mold is likely to peel, and larger moldy areas need a mold professional.",
    },
    {
      q: "Why did the water stain come back after I painted?",
      a: "Water stains contain water-soluble material that bleeds through regular paint, or the leak is still active. Fix the source, let it dry, seal the stain with a stain-blocking primer and repaint.",
    },
    {
      q: "Do I need to replace drywall with a water stain?",
      a: "Not if it is dry and firm. Drywall that is soft, sagging, crumbling or bubbled, or that has lifted tape, should be cut out and repaired before painting.",
    },
  ],
  limitations: (
    <>
      General guidance, not a mold assessment or an insurance opinion. Mold facts are from EPA&apos;s published guidance,
      checked October 2026. Hidden damage behind a wall or ceiling can only be judged on site.
    </>
  ),
  sources: [{ label: "EPA: A Brief Guide to Mold, Moisture, and Your Home", url: EPA_MOLD }],
  related: [
    { label: "Primer or two coats of paint?", href: "/blog/primer-vs-two-coats-paint-houston" },
    { label: "Drywall repair in Houston", href: "/drywall-repair-houston-tx" },
    { label: "Why paint peels and bubbles", href: "/blog/why-paint-peels-bubbles-houston" },
    { label: "Popcorn ceiling removal and painting", href: "/blog/popcorn-ceiling-removal-houston" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written estimate for the repair and repaint",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
