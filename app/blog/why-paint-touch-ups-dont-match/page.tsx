import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-10-25.

const D: GuideArticleData = {
  path: "/blog/why-paint-touch-ups-dont-match",
  title: "Why Paint Touch-Ups Don't Match, and How to Fix Them",
  description:
    "Flashing, sheen, aging and application are why paint touch-ups show. When a touch-up can work, and when to repaint the whole wall instead.",
  h1: "Why paint touch-ups don't match, and how to fix them",
  eyebrow: "Paint guide",
  published: "2026-10-25",
  updated: "2026-10-25",
  quickAnswer: (
    <>
      Touch-ups usually show because of sheen, not color. Fresh paint over a small spot dries with a different gloss
      than the paint around it (called flashing), the original paint has aged and faded, and a brush or small roller
      leaves a different texture than the original application. Even the exact same can of paint can show. Small
      touch-ups work best on flat or matte walls; on eggshell, satin or a patched area, repainting the wall from corner to
      corner is usually what makes the repair disappear.
    </>
  ),
  sections: [
    {
      title: "The four reasons touch-ups show",
      body: (
        <Bullets
          items={[
            <><strong>Sheen (flashing).</strong> A small patch of fresh paint dries shinier or duller than the surrounding wall, especially on eggshell, satin and semi-gloss. You see it most in raking light from a window.</>,
            <><strong>Aging.</strong> Paint on the wall has faded, yellowed or collected dirt since it went on; the paint in the can has not.</>,
            <><strong>Application.</strong> The original wall was rolled or sprayed in full coats. A brush or a small foam roller leaves a different texture and film thickness.</>,
            <><strong>Different paint.</strong> A new can, even with the same color name, can differ from the original batch, sheen or product line.</>,
          ]}
        />
      ),
    },
    {
      title: "Why patches make it worse",
      body: (
        <p>
          Bare joint compound soaks up paint differently from the painted wall around it, so a patched spot flashes even
          more. It needs a primer first, then paint. Texture matters too: a smooth patch on an orange-peel or knockdown wall
          shows in side light no matter what the paint does. See{" "}
          <Link href="/blog/primer-vs-two-coats-paint-houston">primer or two coats of paint</Link> and{" "}
          <Link href="/blog/drywall-repair-before-painting">drywall repair before painting</Link>.
        </p>
      ),
    },
    {
      title: "When a touch-up can work",
      body: (
        <Steps
          items={[
            { title: "Use the original paint", text: "the same product, color and sheen, ideally from the same batch. Stir it well." },
            { title: "Keep it small", text: "a nail hole or a scuff, not a patch the size of your hand." },
            { title: "Copy the application", text: "use the same kind of roller nap the wall was rolled with, and feather the edges out lightly." },
            { title: "Prime repairs first", text: "any spackle or joint compound gets a coat of primer before paint." },
            { title: "Flat walls are forgiving", text: "touch-ups blend far better on flat or matte paint than on eggshell or satin." },
          ]}
        />
      ),
    },
    {
      title: "When to repaint the whole wall",
      body: (
        <p>
          If the touch-up is large, on an eggshell or satin wall, over a repair, or still visible after it dries, repaint the
          wall from corner to corner. The eye reads a wall as one surface, so a full wall with a break at the corners looks
          right even if the next wall is slightly different. The same rule applies to ceilings, where small touch-ups are
          very hard to hide.
        </p>
      ),
    },
    {
      title: "How to make future touch-ups easier",
      body: (
        <Bullets
          items={[
            "Keep the leftover paint, sealed, in a place that doesn't freeze or bake; write the room, product, color and sheen on the lid.",
            "Choose flat or matte on ceilings and on walls where you expect touch-ups, and a scrubbable product where walls get washed.",
            "Ask your painter to list the products, colors and sheens for every room. Our written estimates do.",
          ]}
        />
      ),
    },
  ],
  faqs: [
    {
      q: "Why does my touch-up look shiny even though it's the same paint?",
      a: "That is flashing: a small patch of fresh paint dries with a different sheen than the aged, fully cured paint around it. It is most visible on eggshell, satin and semi-gloss in side light.",
    },
    {
      q: "Can you touch up eggshell or satin paint?",
      a: "Small spots sometimes, but sheen differences show easily. For anything larger than a nail hole, repainting the wall from corner to corner usually looks better.",
    },
    {
      q: "Do I need primer to touch up a patch?",
      a: "Yes. Bare spackle or joint compound absorbs paint differently and flashes through. Prime the patch, then paint.",
    },
    {
      q: "How long can I keep leftover paint for touch-ups?",
      a: "Sealed and stored where it won't freeze or overheat, latex paint often lasts a few years. If it smells sour, has hard lumps or won't mix smooth, don't use it.",
    },
  ],
  limitations: (
    <>General guidance. How well a touch-up blends depends on the product, sheen, age of the paint and the light in the room.</>
  ),
  related: [
    { label: "Paint finishes explained", href: "/blog/paint-finishes-matte-eggshell-satin-semi-gloss" },
    { label: "Primer or two coats of paint?", href: "/blog/primer-vs-two-coats-paint-houston" },
    { label: "Drywall repair before painting", href: "/blog/drywall-repair-before-painting" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: `Get a written estimate from ${BUSINESS.name}`,
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
