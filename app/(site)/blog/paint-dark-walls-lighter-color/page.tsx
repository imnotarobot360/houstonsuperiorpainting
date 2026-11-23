import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-11.

const D: GuideArticleData = {
  path: "/blog/paint-dark-walls-lighter-color",
  title: "How to Paint Over Dark Walls With a Light Color",
  description:
    "Going from navy, red or charcoal to white or a soft neutral: why it takes more coats, when a tinted primer helps, and how to avoid a patchy result.",
  h1: "How to paint over dark walls with a light color",
  eyebrow: "Paint guide",
  published: "2026-11-11",
  updated: "2026-11-11",
  quickAnswer: (
    <>
      Covering a dark wall with a light color takes more than two coats of paint on its own. The reliable approach is a
      primer first, often tinted toward the new color (a gray-tinted primer for very dark or saturated colors), then two
      finish coats. Skipping the primer usually means three or four coats and a patchy, uneven result, especially with
      reds, which are hard to cover.
    </>
  ),
  sections: [
    {
      title: "Why dark colors are hard to cover",
      body: (
        <p>
          Light paints contain less pigment that blocks the color underneath, so a dark wall &quot;ghosts&quot; through,
          especially at the edges and in corners where the coat is thinner. Deep reds and bright colors are the hardest,
          because their colorants show through light paint as a pink or muddy tint.
        </p>
      ),
    },
    {
      title: "The right process",
      body: (
        <Steps
          items={[
            { title: "Clean and repair", text: "wash scuffs and greasy spots, patch holes and sand." },
            { title: "Prime", text: "a quality primer, tinted toward the new color; for very dark or saturated colors, a gray-tinted primer often covers best." },
            { title: "Cut in carefully", text: "corners and edges are where the old color shows most, so they get full coverage." },
            { title: "Two finish coats", text: "of the new color, rolled evenly with the right drying time between coats." },
            { title: "Check in daylight", text: "look for shadows of the old color before calling it done." },
          ]}
        />
      ),
    },
    {
      title: "Does 'paint and primer in one' work?",
      body: (
        <p>
          Self-priming paints cover well over similar colors, but going from very dark to light is exactly where a separate,
          tinted primer still earns its keep. See{" "}
          <Link href="/blog/primer-vs-two-coats-paint-houston">primer or two coats of paint</Link>.
        </p>
      ),
    },
    {
      title: "Dark accent walls and ceilings",
      body: (
        <p>
          Many Houston homes have a dark accent wall from a few years ago. Painting it to match the rest of the room usually
          means primer plus two coats on that wall, and repainting the adjoining walls if the color has aged. See{" "}
          <Link href="/accent-wall-ideas-houston">accent wall ideas</Link>.
        </p>
      ),
    },
    {
      title: "Cost",
      body: (
        <p>
          A big color change takes more primer, paint and labor than a same-color refresh, so it is priced higher. As a
          planning range a single room typically runs {P.singleRoom}; your written estimate notes the color change and the
          coats planned. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How many coats to cover a dark wall with white?",
      a: "Usually a primer, often tinted, plus two finish coats. Without primer it can take three or four coats and still look patchy.",
    },
    {
      q: "What primer is best for covering dark colors?",
      a: "A quality primer tinted toward the new color; for very dark or saturated colors, a gray-tinted primer often covers best.",
    },
    {
      q: "Why is red paint so hard to cover?",
      a: "Red colorants show through light paint as a pink or muddy tint. A tinted primer before the finish coats solves it.",
    },
    {
      q: "Can I skip primer if I use paint and primer in one?",
      a: "Over a similar color, often yes. Going from dark to light, a separate tinted primer still gives a better, more even result.",
    },
  ],
  limitations: <>General guidance. Coverage depends on the colors, products and the existing surface.</>,
  related: [
    { label: "Primer or two coats of paint?", href: "/blog/primer-vs-two-coats-paint-houston" },
    { label: "Accent wall ideas", href: "/accent-wall-ideas-houston" },
    { label: "Cost to paint a room", href: "/cost-to-paint-a-room-houston" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written interior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
