import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-09.
// No paneling price confirmed: quoted per job.

const D: GuideArticleData = {
  path: "/blog/painting-wood-paneling-houston",
  title: "Painting Wood Paneling: Grooves, Primer and Bleed-Through",
  description:
    "How dated wood paneling is cleaned, sanded and primed against tannin bleed, painted for a modern look, and when filling the grooves is worth it.",
  h1: "Painting wood paneling: grooves, primer and bleed-through",
  eyebrow: "Interior guide",
  published: "2026-12-09",
  updated: "2026-12-09",
  quickAnswer: (
    <>
      Painting dark wood paneling is one of the cheapest ways to modernize a den or older Houston home. It works when the
      paneling is clean, firmly attached and primed with a stain-blocking primer, because wood and its old finish can bleed
      yellow-brown through paint. Painted grooves give a cottage, board-and-batten look; filling them for a flat wall takes
      much more work and often shows seams later. Thin photo-printed paneling can be painted too, with a bonding primer.
    </>
  ),
  sections: [
    {
      title: "First, what kind of paneling?",
      body: (
        <Bullets
          items={[
            <><strong>Solid wood boards (tongue and groove, knotty pine):</strong> paints well; knots and resin need a stain-blocking primer.</>,
            <><strong>Wood veneer sheets:</strong> common in 1960s–1980s homes; paints well with sanding and primer.</>,
            <><strong>Photo-printed or vinyl-faced panels:</strong> slick; need a bonding primer and careful testing.</>,
            <><strong>Loose, warped or water-damaged panels:</strong> need to be re-nailed, replaced or removed first.</>,
          ]}
        />
      ),
    },
    {
      title: "How it is done",
      body: (
        <Steps
          items={[
            { title: "Clean", text: "decades of grease, smoke and furniture polish keep paint from sticking." },
            { title: "Scuff-sand", text: "to dull the old finish." },
            { title: "Secure and fill", text: "re-nail loose panels, fill holes, caulk seams at trim and corners." },
            { title: "Stain-blocking primer", text: "stops tannin and knot bleed; spot-prime again if any bleeds through." },
            { title: "Two coats", text: "a washable wall paint; brushing the grooves first, then rolling the faces." },
          ]}
        />
      ),
    },
    {
      title: "Keep or fill the grooves?",
      body: (
        <Bullets
          items={[
            <><strong>Keep them:</strong> the painted grooves read as an intentional paneled or shiplap-style wall. Fastest and most durable.</>,
            <><strong>Fill them:</strong> possible with joint compound or a skim coat, but seasonal movement in wood can crack the filled lines. It is closer to building a new wall surface.</>,
            <><strong>Cover them:</strong> hanging thin drywall over the paneling is sometimes the cleaner answer for a smooth wall.</>,
          ]}
        />
      ),
    },
    {
      title: "Colors",
      body: (
        <p>
          Soft whites and light greige make a dark paneled room feel much bigger; a deep green or navy keeps the cozy, study
          feel while updating it. See <Link href="/blog/should-trim-be-same-color-as-walls">matching trim to walls</Link> and{" "}
          <Link href="/blog/painting-shiplap-board-and-batten-houston">painting shiplap and board and batten</Link>.
        </p>
      ),
    },
    {
      title: "Getting an estimate",
      body: (
        <p>
          Paneling is quoted per job, because prep varies so much: cleaning, repairs, primer coats and whether grooves are
          filled. Your written estimate lists each step. See{" "}
          <Link href="/interior-painting-houston-tx">interior painting in Houston</Link> and{" "}
          <Link href="/blog/latex-paint-over-oil-based-paint">latex paint over oil-based finishes</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can you paint wood paneling?",
      a: "Yes, after cleaning, scuff-sanding and a stain-blocking primer. It is one of the most cost-effective updates for a dated room.",
    },
    {
      q: "Why does paint turn yellow on wood paneling?",
      a: "Tannins and old finishes bleed through latex paint. A stain-blocking primer prevents it.",
    },
    {
      q: "Should you fill the grooves before painting paneling?",
      a: "Usually not. Painted grooves look intentional; filled grooves can crack as the wood moves. For a smooth wall, covering with drywall is often better.",
    },
    {
      q: "Can you paint fake wood paneling?",
      a: "Often, with a bonding primer and a test area first. Printed or vinyl-faced panels are slick and need careful prep.",
    },
  ],
  limitations: <>General guidance; the paneling type and condition decide the right prep and primer.</>,
  related: [
    { label: "Painting shiplap and board and batten", href: "/blog/painting-shiplap-board-and-batten-houston" },
    { label: "Should you paint stained trim?", href: "/blog/paint-stained-wood-trim-houston" },
    { label: "Latex paint over oil-based paint", href: "/blog/latex-paint-over-oil-based-paint" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written interior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
