import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-02.
// No stair price: none confirmed in PRICES_2026, so it is quoted per job.

const D: GuideArticleData = {
  path: "/blog/painting-stair-railings-banisters-spindles",
  title: "Painting Stair Railings, Banisters and Spindles",
  description:
    "Two-tone stairs, a stained handrail with painted spindles, the right enamel for hand traffic, and why stair railings take longer to paint than they look.",
  h1: "Painting stair railings, banisters and spindles",
  eyebrow: "Interior guide",
  published: "2026-12-02",
  updated: "2026-12-02",
  quickAnswer: (
    <>
      Stair railings are one of the most-touched surfaces in a house, so they need a hard, washable trim enamel over good
      prep, not wall paint. The most popular update is two-tone: a dark stained or painted handrail with white or color
      spindles and risers. Railings take longer than they look, because every spindle has four sides and tight corners, and
      a handrail has to be left alone while it cures.
    </>
  ),
  sections: [
    {
      title: "Popular looks",
      body: (
        <Bullets
          items={[
            <><strong>Dark handrail, white spindles:</strong> classic and practical, since the dark rail hides hand marks.</>,
            <><strong>All one color:</strong> white for a clean, light look, or black or charcoal for a modern one.</>,
            <><strong>Painted risers, stained treads:</strong> often paired with a painted railing; a runner is another option.</>,
            <><strong>Metal balusters:</strong> wrought-iron spindles can be repainted too; they need cleaning and a metal-suitable primer where bare or rusty.</>,
          ]}
        />
      ),
    },
    {
      title: "How it is done",
      body: (
        <Steps
          items={[
            { title: "Clean the handrail", text: "hand oils build up on rails and keep paint from bonding." },
            { title: "Scuff-sand", text: "dull any clear finish or glossy paint so the primer grips." },
            { title: "Fill and caulk", text: "fill dents and caulk gaps where spindles meet the rail and treads." },
            { title: "Prime", text: "a bonding primer over stained or glossy surfaces; stain-blocking where wood may bleed." },
            { title: "Two coats of enamel", text: "brushed, or sprayed with the stairwell fully masked." },
          ]}
        />
      ),
    },
    {
      title: "Restaining a handrail",
      body: (
        <p>
          A stained handrail usually has to be sanded to bare wood to take new stain evenly, which is slower than painting
          it. Painting the handrail a dark color gives a similar look with less sanding, but it is permanent. Ask for both
          options in the estimate.
        </p>
      ),
    },
    {
      title: "Living with it during the job",
      body: (
        <Bullets
          items={[
            "In most homes the stairs stay usable: painters work one side or section at a time.",
            "Fresh enamel feels dry within hours but is soft for days; go easy on the handrail at first.",
            "Pets and kids are the biggest risk to a fresh railing; plan for them.",
          ]}
        />
      ),
    },
    {
      title: "Stairwell walls",
      body: (
        <p>
          Railings are often painted with the stairwell walls, which may need ladders or planks over the stairs. See{" "}
          <Link href="/blog/painting-high-ceilings-foyers-stairwells-houston">painting high ceilings, foyers and stairwells</Link>{" "}
          and <Link href="/blog/paint-stained-wood-trim-houston">painting stained trim</Link>. Stairs are quoted per job,
          because the number of spindles and the condition vary so much. See{" "}
          <Link href="/interior-painting-houston-tx">interior painting in Houston</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What paint is best for stair railings?",
      a: "A durable trim enamel in satin or semi-gloss over a bonding primer. Wall paint is too soft for handrails.",
    },
    {
      q: "Can you paint over a stained banister?",
      a: "Yes, after cleaning, scuff-sanding and a bonding primer. Painting it is permanent; going back to stain means stripping.",
    },
    {
      q: "How long before you can use a freshly painted handrail?",
      a: "It is usually dry to the touch within hours, but enamel takes days to harden. Use it gently for the first several days.",
    },
    {
      q: "Why does painting stair spindles take so long?",
      a: "Each spindle has four sides, curves and tight joints, and they all need sanding, filling, caulking and two coats.",
    },
  ],
  limitations: <>General guidance. Cure times depend on the product and conditions; your estimate lists the scope.</>,
  related: [
    { label: "Painting high ceilings and stairwells", href: "/blog/painting-high-ceilings-foyers-stairwells-houston" },
    { label: "Should you paint stained trim?", href: "/blog/paint-stained-wood-trim-houston" },
    { label: "Painting interior doors", href: "/blog/painting-interior-doors-houston" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written interior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
