import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-23.
// General color guidance; no product claims.

const MISTAKES = [
  {
    t: "Choosing from a tiny chip indoors",
    d: "Outdoor light makes colors look lighter, brighter and cooler than a chip under kitchen lights. Paint large samples on the house and look at them in morning and afternoon sun.",
  },
  {
    t: "Ignoring the roof, brick and stone",
    d: "These don't change, so they set the palette. A warm brown roof or orange brick fights with cool blue-grays; pick body and trim colors that share their undertone.",
  },
  {
    t: "Going too dark on sunny walls",
    d: "Dark colors absorb more heat and fade faster in Houston sun, especially on south and west walls. Dark looks best on doors, shutters and accents, or with a fade-resistant product.",
  },
  {
    t: "Skipping the HOA",
    d: "Many Houston-area HOAs approve exterior colors. Painting first and asking later can mean repainting.",
  },
  {
    t: "Too many colors",
    d: "Body, trim and one accent is usually enough. More than that tends to look busy.",
  },
  {
    t: "Forgetting the garage door and gutters",
    d: "On many homes the garage door is the biggest painted surface on the front. Decide whether it blends with the body or the trim, and plan the gutters too.",
  },
  {
    t: "Stark white trim with warm brick",
    d: "Bright, cool white can make red and orange brick look more orange. A soft or creamy white usually looks better.",
  },
  {
    t: "Not checking the neighbors",
    d: "Your house is seen with the houses beside it. Aim to complement the street, not copy or clash with the house next door.",
  },
]

const D: GuideArticleData = {
  path: "/blog/exterior-paint-color-mistakes-houston",
  title: "Exterior Paint Color Mistakes Houston Homeowners Regret",
  description:
    "Choosing from a tiny chip, ignoring the roof and brick, going too dark in Texas sun, HOA surprises and more: common exterior color mistakes and how to avoid them.",
  h1: "Exterior paint color mistakes Houston homeowners regret",
  eyebrow: "Color guide",
  published: "2026-12-23",
  updated: "2026-12-23",
  quickAnswer: (
    <>
      The most common exterior color regrets come from choosing too fast: picking from a small chip indoors, ignoring the
      roof and brick that won&apos;t change, going too dark on walls that bake in Houston sun, and forgetting HOA approval.
      Test large samples on the house in morning and afternoon light, build the palette around the fixed materials, keep
      to two or three colors, and get HOA approval before work starts.
    </>
  ),
  sections: [
    ...MISTAKES.map((m, i) => ({
      title: `${i + 1}. ${m.t}`,
      body: <p>{m.d}</p>,
    })),
    {
      title: "A safer way to choose",
      body: (
        <Bullets
          items={[
            "Start with what's fixed: roof, brick, stone, windows.",
            "Pick a body color, then a trim, then one accent for the door or shutters.",
            "Sample big swatches on two sides of the house; look at them over a few days.",
            "Get HOA approval in writing before work starts.",
          ]}
        />
      ),
    },
    {
      title: "Get help",
      body: (
        <p>
          See <Link href="/blog/trim-door-colors-red-brick-house-houston">trim and door colors for red brick</Link>,{" "}
          <Link href="/blog/hoa-exterior-paint-rules-houston-suburbs">HOA exterior paint rules</Link>,{" "}
          <Link href="/blog/front-door-paint-houston-sun">front doors in Houston sun</Link> and our exterior color guides for{" "}
          <Link href="/blog/exterior-paint-colors-katy-tx">Katy</Link> and{" "}
          <Link href="/blog/exterior-paint-colors-sugar-land-tx">Sugar Land</Link>. Or book a{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What is the biggest exterior paint color mistake?",
      a: "Choosing from a small chip indoors. Outdoor light changes color a lot; test large samples on the house in morning and afternoon sun.",
    },
    {
      q: "Are dark exterior colors a bad idea in Houston?",
      a: "Not always, but they absorb more heat and fade faster on sunny walls. Many homeowners use dark colors on doors, shutters and accents instead.",
    },
    {
      q: "How many colors should a house exterior have?",
      a: "Usually two or three: a body color, a trim color and one accent for the front door or shutters.",
    },
    {
      q: "Do I need HOA approval to repaint my house?",
      a: "Many Houston-area HOAs require it for color changes. Get approval in writing before work starts.",
    },
  ],
  limitations: <>General color guidance; your HOA&apos;s rules and physical samples on your house decide.</>,
  related: [
    { label: "Trim and door colors for red brick", href: "/blog/trim-door-colors-red-brick-house-houston" },
    { label: "HOA exterior paint rules", href: "/blog/hoa-exterior-paint-rules-houston-suburbs" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
