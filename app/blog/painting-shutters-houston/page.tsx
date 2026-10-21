import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-24.
// Owner confirmed 2026-10-21: we paint all types of shutters (wood, composite
// and vinyl). Vinyl color limits follow the owner's vinyl-safe rule.

const D: GuideArticleData = {
  path: "/blog/painting-shutters-houston",
  title: "Painting Shutters: Wood, Composite and Vinyl",
  description:
    "How wood, composite and vinyl shutters are prepped and painted, taking them down vs. painting in place, vinyl-safe colors, and shutter colors that last in Houston sun.",
  h1: "Painting shutters: wood, composite and vinyl",
  eyebrow: "Exterior guide",
  published: "2026-12-24",
  updated: "2026-12-24",
  quickAnswer: (
    <>
      All three common shutter materials can be painted, and we paint all of them. Wood shutters need sanding, repairs and
      primer on bare spots. Composite shutters need cleaning and a bonding primer. Vinyl shutters need careful cleaning and a
      vinyl-safe color, because very dark colors can absorb enough Houston sun to warp vinyl. Shutters are often taken down
      to paint every edge, then rehung with fresh fasteners.
    </>
  ),
  sections: [
    {
      title: "By material",
      body: (
        <Bullets
          items={[
            <><strong>Wood:</strong> scrape loose paint, repair or replace soft slats, prime bare wood, then two coats of exterior paint.</>,
            <><strong>Composite or fiberglass:</strong> clean well, scuff-sand, use a bonding primer, then exterior paint.</>,
            <><strong>Vinyl:</strong> clean off chalk and mildew, use a product rated for vinyl, and choose a vinyl-safe color no darker than the manufacturer allows.</>,
          ]}
        />
      ),
    },
    {
      title: "How it is done",
      body: (
        <Steps
          items={[
            { title: "Take them down", text: "usually, so the back edges and the wall behind them get painted too." },
            { title: "Clean", text: "dirt, chalk and mildew off every slat." },
            { title: "Repair and prime", text: "as the material needs." },
            { title: "Paint", text: "often sprayed, so louvers get an even coat without drips." },
            { title: "Rehang", text: "with new fasteners where old ones are rusted or stripped." },
          ]}
        />
      ),
    },
    {
      title: "Colors that last in Houston sun",
      body: (
        <p>
          Black, charcoal, deep green, navy and bronze are the classic shutter colors. On wood and composite, deep colors
          work with a fade-resistant exterior product. On vinyl, use only colors the manufacturer rates as vinyl-safe. See{" "}
          <Link href="/blog/trim-door-colors-red-brick-house-houston">trim, door and shutter colors for red brick</Link> and{" "}
          <Link href="/blog/exterior-paint-color-mistakes-houston">exterior color mistakes</Link>.
        </p>
      ),
    },
    {
      title: "Getting it done",
      body: (
        <p>
          Shutters are usually painted with the trim or the whole exterior, and can also be done on their own. Your written
          estimate lists them separately. See <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link>{" "}
          and <Link href="/blog/hoa-exterior-paint-rules-houston-suburbs">HOA exterior paint rules</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can vinyl shutters be painted?",
      a: "Yes, with good cleaning, a product suitable for vinyl and a vinyl-safe color. Very dark colors can make vinyl warp in strong sun.",
    },
    {
      q: "Do shutters need to come down to be painted?",
      a: "Usually it's better: every edge gets painted, the wall behind them is covered, and worn fasteners can be replaced.",
    },
    {
      q: "What color should shutters be?",
      a: "Black, charcoal, deep green, navy and bronze are classic. Pick one that works with the roof and brick, and check HOA rules.",
    },
    {
      q: "Do you paint composite and vinyl shutters?",
      a: "Yes. We paint wood, composite and vinyl shutters, with the prep each one needs.",
    },
  ],
  limitations: <>General guidance; the shutter manufacturer&apos;s color limits and your HOA&apos;s rules apply.</>,
  related: [
    { label: "Trim and door colors for red brick", href: "/blog/trim-door-colors-red-brick-house-houston" },
    { label: "Exterior color mistakes", href: "/blog/exterior-paint-color-mistakes-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Painting a front door in Houston sun", href: "/blog/front-door-paint-houston-sun" },
  ],
  ctaTitle: "Get a written exterior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
