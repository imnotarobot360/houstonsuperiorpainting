import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-13.
// Price only from PRICES_2026.caulkHeavyAdd.

const D: GuideArticleData = {
  path: "/blog/caulking-before-exterior-painting-houston",
  title: "Caulking Before Exterior Painting in Houston: What and Where",
  description:
    "Which exterior joints should be caulked before painting, which should not, what caulk to use in Houston heat, and why failed caulk causes rot and peeling.",
  h1: "Caulking before exterior painting: what and where",
  eyebrow: "Exterior guide",
  published: "2026-11-13",
  updated: "2026-11-13",
  quickAnswer: (
    <>
      Before an exterior repaint, failed caulk is cut out and joints are re-caulked with a flexible, paintable exterior
      sealant: trim-to-siding joints, butt joints in siding and trim, around windows and doors, and penetrations. Some gaps
      should stay open, such as the bottom lap of lap siding and weep holes in brick. Good caulking keeps water out, which
      is what prevents wood rot and peeling. Heavy caulk failure across a house can add {P.caulkHeavyAdd} to an exterior
      job.
    </>
  ),
  sections: [
    {
      title: "Where to caulk",
      body: (
        <Bullets
          items={[
            "Where trim meets siding, and corner boards.",
            "Butt joints in siding and trim boards.",
            "Around window and door frames (the exterior trim, not the window's weep slots).",
            "Pipe, wire and vent penetrations.",
            "Nail holes in trim, after priming.",
          ]}
        />
      ),
    },
    {
      title: "Where not to caulk",
      body: (
        <Bullets
          items={[
            "The bottom edge of each course of lap siding: it needs to drain and breathe.",
            "Weep holes in brick veneer and weep slots in windows.",
            "Gaps that drain water away, such as under some window sills and drip edges.",
          ]}
        />
      ),
    },
    {
      title: "Doing it right",
      body: (
        <Steps
          items={[
            { title: "Remove failed caulk", text: "cracked, shrunken or loose caulk is cut out, not caulked over." },
            { title: "Clean and prime bare wood", text: "caulk bonds poorly to dirty or bare wood; prime first." },
            { title: "Backer rod for wide gaps", text: "deep gaps get foam backer rod so the caulk bead is the right depth." },
            { title: "Flexible exterior sealant", text: "a paintable, flexible product rated for exterior use and movement." },
            { title: "Cure, then paint", text: "let the caulk cure as the label says before painting over it." },
          ]}
        />
      ),
    },
    {
      title: "Why it matters in Houston",
      body: (
        <p>
          Heat, sun and humidity make wood and siding expand and contract every day, and storms drive rain sideways into any
          open joint. Water behind paint causes peeling and wood rot. See{" "}
          <Link href="/blog/wood-rot-repair-before-painting-houston">wood rot repair before painting</Link> and{" "}
          <Link href="/blog/why-paint-peels-bubbles-houston">why paint peels and bubbles</Link>.
        </p>
      ),
    },
    {
      title: "How it shows up on the estimate",
      body: (
        <p>
          Normal caulking is part of exterior prep. When most butt joints on a house have failed, it is a bigger job, which
          can add {P.caulkHeavyAdd}; the estimate should say which applies. {BUSINESS.paymentPolicy.sentence} See{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Should you caulk before or after painting?",
      a: "Before: clean, prime bare wood, caulk, let it cure, then paint over it.",
    },
    {
      q: "Should the bottom of lap siding be caulked?",
      a: "No. The bottom edge of each siding course needs to drain and breathe; sealing it can trap moisture.",
    },
    {
      q: "What caulk is best for exterior painting in Houston?",
      a: "A flexible, paintable exterior sealant rated for movement, applied over primed, clean joints.",
    },
    {
      q: "Can you caulk over old caulk?",
      a: "Not if it is cracked, shrunken or loose; cut it out first, or the new caulk will fail with it.",
    },
  ],
  limitations: <>General guidance. Follow the sealant manufacturer&apos;s instructions; every house is assessed on site.</>,
  related: [
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Wood rot repair before painting", href: "/blog/wood-rot-repair-before-painting-houston" },
    { label: "Why paint peels and bubbles", href: "/blog/why-paint-peels-bubbles-houston" },
    { label: "HardiePlank painting", href: "/blog/hardieplank-painting-houston" },
  ],
  ctaTitle: "Get a written exterior estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
