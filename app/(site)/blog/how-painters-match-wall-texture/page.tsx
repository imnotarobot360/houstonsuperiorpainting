import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-10-30.
// Price only from PRICES_2026.drywallRepair.

const D: GuideArticleData = {
  path: "/blog/how-painters-match-wall-texture",
  title: "How Painters Match an Existing Wall Texture",
  description:
    "Why drywall patches show, how orange peel and knockdown are matched, and why painting the whole wall is what makes a repair disappear.",
  h1: "How painters match an existing wall texture",
  eyebrow: "Repair guide",
  published: "2026-10-30",
  updated: "2026-10-30",
  quickAnswer: (
    <>
      A good texture match copies three things: the pattern (orange peel, knockdown or smooth), the size and spacing of
      the texture, and how flat or raised it is. Painters do it with a spray hopper or aerosol texture, adjusted and
      tested on scrap board first, then feather it into the surrounding wall. Even a good match usually needs the whole
      wall repainted from corner to corner, because fresh paint over a repair shows a different sheen.
    </>
  ),
  sections: [
    {
      title: "Why patches show",
      body: (
        <p>
          A drywall patch can be flat and solid and still show: smooth compound sits in the middle of a textured wall, or
          the new texture is the wrong size, or the paint over it dries with a different sheen. In side light from a window,
          any of these jumps out. Matching the texture solves the first two; painting the whole wall solves the third.
        </p>
      ),
    },
    {
      title: "How the match is done",
      body: (
        <Steps
          items={[
            { title: "Repair the substrate", text: "fix the damage, tape and mud the patch, and sand it flush with the surrounding wall." },
            { title: "Read the existing texture", text: "is it orange peel, knockdown or smooth? How big are the bumps, how far apart, how flat are the knockdown plateaus?" },
            { title: "Test on scrap", text: "adjust the mix, air pressure and nozzle on a piece of drywall until the pattern matches." },
            { title: "Apply and feather", text: "spray the patch and blend lightly past its edges so there is no hard line; for knockdown, flatten with a trowel at the right moment." },
            { title: "Let it dry, then prime", text: "texture compound needs to dry fully, then a primer seals it so it takes paint like the rest of the wall." },
            { title: "Paint the whole wall", text: "corner to corner, so the sheen is even across the surface." },
          ]}
        />
      ),
    },
    {
      title: "Orange peel vs. knockdown matching",
      body: (
        <p>
          Orange peel is usually the easier match: it is a fine spatter, so getting the droplet size right is most of the
          job. Knockdown takes more skill: the spatter size, how long it sets before it is knocked down, and the trowel
          pressure all change the look. Smooth walls are the hardest, because there is no texture to hide the patch edges;
          they often need skim-coating a wider area. See{" "}
          <Link href="/blog/orange-peel-vs-knockdown-vs-smooth-walls">orange peel vs. knockdown vs. smooth walls</Link>.
        </p>
      ),
    },
    {
      title: "What it costs",
      body: (
        <p>
          Texture matching is part of drywall repair, which typically runs {P.drywallRepair} in Houston depending on the
          number and size of repairs and how much repainting follows. See{" "}
          <Link href="/drywall-repair-houston-tx">drywall repair in Houston</Link> and{" "}
          <Link href="/blog/drywall-repair-cost-houston">drywall repair cost</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can you match orange peel texture?",
      a: "Yes. It is usually the easier texture to match: a spray texture adjusted to the same droplet size, feathered into the wall, primed and painted.",
    },
    {
      q: "Why can I still see my drywall patch after painting?",
      a: "The texture may not match, the patch may not have been primed, or only the patch was painted, so it dries with a different sheen. Matching texture, priming and painting the whole wall fixes it.",
    },
    {
      q: "Do I need to repaint the whole wall after a drywall repair?",
      a: "Usually, yes. Painting corner to corner keeps the sheen even so the repair disappears.",
    },
    {
      q: "Is smooth wall repair harder than textured?",
      a: "Yes. With no texture to hide the edges, smooth walls often need skim-coating over a wider area and careful sanding.",
    },
  ],
  limitations: <>General guidance. How invisible a repair can be depends on the existing texture, lighting and paint.</>,
  related: [
    { label: "Drywall repair in Houston", href: "/drywall-repair-houston-tx" },
    { label: "Orange peel vs. knockdown vs. smooth", href: "/blog/orange-peel-vs-knockdown-vs-smooth-walls" },
    { label: "Why touch-ups don't match", href: "/blog/why-paint-touch-ups-dont-match" },
    { label: "Drywall repair cost", href: "/blog/drywall-repair-cost-houston" },
  ],
  ctaTitle: "Get a written estimate for drywall repair and painting",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
