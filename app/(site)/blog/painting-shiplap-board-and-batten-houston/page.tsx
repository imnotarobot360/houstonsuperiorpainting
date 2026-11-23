import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-23.

const D: GuideArticleData = {
  path: "/blog/painting-shiplap-board-and-batten-houston",
  title: "Painting Shiplap and Board and Batten: Gaps, Caulk and Sheen",
  description:
    "How to paint shiplap and board-and-batten walls inside and out: filling or keeping the gaps, caulking battens, sheen, spraying vs. brushing, and upkeep.",
  h1: "Painting shiplap and board and batten",
  eyebrow: "Paint guide",
  published: "2026-11-23",
  updated: "2026-11-23",
  quickAnswer: (
    <>
      Shiplap and board and batten take longer to paint than flat walls because of every groove, edge and joint. On
      shiplap, the gaps between boards are part of the look, so they are painted, not caulked shut; just make sure paint
      reaches into them. On board and batten, the joints where battens meet the wall are caulked for a clean, built-in
      look. Interior walls usually get satin or eggshell; exterior board and batten needs a durable exterior paint with
      every joint sealed against rain.
    </>
  ),
  sections: [
    {
      title: "Shiplap",
      body: (
        <Bullets
          items={[
            "Paint the grooves first with a brush or by spraying, then roll the faces, so there are no unpainted lines.",
            "Don't caulk the gaps: they're the design and allow for wood movement.",
            "Knotty or raw pine needs a stain-blocking primer so knots don't bleed through light paint.",
            "Satin or eggshell is easier to wipe than flat on a textured board wall.",
          ]}
        />
      ),
    },
    {
      title: "Board and batten",
      body: (
        <Steps
          items={[
            { title: "Fill and sand", text: "nail holes and seams in the battens." },
            { title: "Caulk", text: "where battens meet the wall and the trim, for a crisp built-in look (indoors)." },
            { title: "Prime", text: "bare wood or MDF, especially cut edges, which soak up paint." },
            { title: "Paint", text: "battens and panels together, cutting into the corners; spraying gives the most even finish." },
          ]}
        />
      ),
    },
    {
      title: "Exterior board and batten",
      body: (
        <p>
          Outside, board and batten faces Houston rain and sun. The joints must be sealed with a flexible exterior caulk where
          appropriate (keeping drainage paths open), bare wood and cut ends primed, and the siding finished with a durable
          exterior paint. Wood rot often starts at the bottom of battens near the ground or roofline. See{" "}
          <Link href="/blog/caulking-before-exterior-painting-houston">caulking before exterior painting</Link> and{" "}
          <Link href="/blog/wood-rot-repair-before-painting-houston">wood rot repair before painting</Link>.
        </p>
      ),
    },
    {
      title: "Why it costs more than a flat wall",
      body: (
        <p>
          Grooves, edges and joints multiply the painted surface and slow the work, and the caulking on board and batten adds
          time. Your written estimate prices the feature wall or siding by its actual surface, not just its width. See{" "}
          <Link href="/accent-wall-ideas-houston">accent wall ideas</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Should you caulk shiplap before painting?",
      a: "No. The gaps between shiplap boards are part of the look and allow for movement; paint into them instead.",
    },
    {
      q: "Should board and batten be caulked?",
      a: "Indoors, yes: caulk where battens meet the wall and trim for a clean look. Outside, seal joints against rain but keep drainage paths open.",
    },
    {
      q: "What sheen is best for shiplap?",
      a: "Satin or eggshell, which is easier to wipe than flat on a grooved surface.",
    },
    {
      q: "Do knots in pine shiplap bleed through paint?",
      a: "They can. A stain-blocking primer on knotty or raw pine prevents yellow-brown bleed-through.",
    },
  ],
  limitations: <>General guidance. Materials and conditions vary; follow the product instructions.</>,
  related: [
    { label: "Accent wall ideas", href: "/accent-wall-ideas-houston" },
    { label: "Caulking before exterior painting", href: "/blog/caulking-before-exterior-painting-houston" },
    { label: "Primer or two coats of paint?", href: "/blog/primer-vs-two-coats-paint-houston" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: `Get a written estimate from ${BUSINESS.name}`,
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
