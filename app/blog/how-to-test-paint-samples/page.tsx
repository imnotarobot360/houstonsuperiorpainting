import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Steps, Bullets } from "@/components/aeo/blocks"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-23.

const D: GuideArticleData = {
  path: "/blog/how-to-test-paint-samples",
  title: "How to Test Paint Samples the Right Way",
  description:
    "Sample boards vs. painting on the wall, how big, where to put them, and when to look: a step-by-step way to choose paint colors with confidence.",
  h1: "How to test paint samples the right way",
  eyebrow: "Color guide",
  published: "2027-01-23",
  updated: "2027-01-23",
  quickAnswer: (
    <>
      Test big, test in place, and look at different times of day. Paint two coats on a large board (or use a large peel-and-
      stick sample) about two feet square, and move it around the room: next to trim, on the darkest and brightest walls,
      and beside floors and counters. Look in the morning, afternoon and at night under your own bulbs, over a few days.
      Avoid judging from small chips or a screen.
    </>
  ),
  sections: [
    {
      title: "Step by step",
      body: (
        <Steps
          items={[
            { title: "Narrow to two or three", text: "testing ten colors at once just confuses the eye." },
            { title: "Make big samples", text: "two coats on a white board about 2 ft × 2 ft, or large peel-and-stick sheets." },
            { title: "Keep a white border", text: "so the old wall color doesn't change how the sample looks." },
            { title: "Move them around", text: "the darkest wall, the brightest wall, next to trim, floors and counters." },
            { title: "Look all day", text: "morning, afternoon and night, under your own bulbs, over two or three days." },
            { title: "Outside, go bigger", text: "exterior samples on two sides of the house, in sun and shade." },
          ]}
        />
      ),
    },
    {
      title: "Common mistakes",
      body: (
        <Bullets
          items={[
            "Painting small patches straight onto a dark wall.",
            "Judging only in the evening, or only in full sun.",
            "Testing in a different sheen than you'll use.",
            "Trusting a phone or computer screen.",
          ]}
        />
      ),
    },
    {
      title: "Get help",
      body: (
        <p>
          See <Link href="/blog/north-vs-south-facing-room-paint-colors-houston">how room direction changes color</Link>,{" "}
          <Link href="/blog/exterior-paint-color-mistakes-houston">exterior color mistakes</Link>, the{" "}
          <Link href="/color-visualizer">color visualizer</Link> for narrowing ideas, and our{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How big should a paint sample be?",
      a: "About two feet square, with two coats, so you see the true color.",
    },
    {
      q: "Should I paint samples directly on the wall?",
      a: "Boards are better: you can move them around, and the old color around a wall patch skews how it looks.",
    },
    {
      q: "How long should I look at paint samples?",
      a: "Two or three days, at different times, including at night under your own bulbs.",
    },
    {
      q: "Are peel-and-stick samples accurate?",
      a: "They're made with real paint and are a convenient way to test large swatches; still check them in different light.",
    },
  ],
  limitations: <>General guidance; screens can&apos;t show true paint color.</>,
  related: [
    { label: "North- vs. south-facing rooms", href: "/blog/north-vs-south-facing-room-paint-colors-houston" },
    { label: "Exterior color mistakes", href: "/blog/exterior-paint-color-mistakes-houston" },
    { label: "Color visualizer", href: "/color-visualizer" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
