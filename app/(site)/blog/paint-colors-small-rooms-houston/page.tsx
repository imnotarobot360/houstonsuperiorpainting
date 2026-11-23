import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-07.
// Colors from data/sw-colors.json; LRVs only where verified (SW API).

const D: GuideArticleData = {
  path: "/blog/paint-colors-small-rooms-houston",
  title: "Paint Colors That Make a Small Room Feel Bigger",
  description:
    "Light colors, low contrast, ceilings and trim: what actually makes a small room feel larger, the colors to sample, and when a dark color works in a small space.",
  h1: "Paint colors that make a small room feel bigger",
  eyebrow: "Color guide",
  published: "2027-01-07",
  updated: "2027-01-07",
  quickAnswer: (
    <>
      Light colors with a high light reflectance (LRV) bounce more light around a small room, so it feels larger. Low
      contrast helps too: when walls, trim and ceiling are close in color, the edges of the room blur. A ceiling a little
      lighter than the walls makes it feel higher. But a small room doesn&apos;t have to be white: a deep color on every
      surface can make a powder room or study feel cozy and intentional rather than cramped.
    </>
  ),
  sections: [
    {
      title: "Colors to sample",
      body: (
        <Bullets
          items={[
            <><strong>Soft whites:</strong> Alabaster SW 7008 or Pure White SW 7005.</>,
            <><strong>Light neutrals:</strong> Agreeable Gray SW 7029 (LRV about 60) or Repose Gray SW 7015 (about 58).</>,
            <><strong>Light colors:</strong> Sea Salt SW 6204 (LRV about 63), a soft green-blue that reads airy.</>,
          ]}
        />
      ),
    },
    {
      title: "What actually makes a room feel bigger",
      body: (
        <Bullets
          items={[
            "Light colors with a higher LRV reflect more light.",
            "Low contrast between walls and trim, or trim painted the wall color.",
            "A ceiling the same as, or lighter than, the walls.",
            "The same color carried into the next room, so walls don't stop at the doorway.",
            "Good lighting: paint can't fix a dark room on its own.",
          ]}
        />
      ),
    },
    {
      title: "When dark works",
      body: (
        <p>
          Powder rooms, studies and media rooms can go deep on purpose: walls, trim and ceiling in one dark color blur the
          corners and feel enveloping. See <Link href="/blog/should-trim-be-same-color-as-walls">color drenching</Link> and{" "}
          <Link href="/blog/north-vs-south-facing-room-paint-colors-houston">how light direction changes color</Link>.
        </p>
      ),
    },
    {
      title: "Choosing",
      body: (
        <p>
          Test samples in the room in the morning and evening. See{" "}
          <Link href="/blog/repose-gray-vs-agreeable-gray-houston">Repose Gray vs. Agreeable Gray</Link>,{" "}
          <Link href="/blog/ceiling-paint-color-white-vs-color">ceiling colors</Link> and our{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What paint color makes a small room look bigger?",
      a: "Light colors with a high LRV, such as soft whites, light greiges and pale blue-greens, with low contrast between walls, trim and ceiling.",
    },
    {
      q: "Should a small room be painted white?",
      a: "Not necessarily. Light colors help, but a soft color or even a deep color drenched on every surface can work well.",
    },
    {
      q: "Does painting the ceiling the wall color make a room look smaller?",
      a: "Not usually; matching or lightening the ceiling blurs the edges. A ceiling much darker than the walls can make it feel lower.",
    },
    {
      q: "What is LRV?",
      a: "Light reflectance value: how much light a color reflects, from 0 (black) to 100 (white). Higher LRV colors feel lighter.",
    },
  ],
  limitations: <>Design guidance; LRVs from Sherwin-Williams where stated. Test colors in your own light.</>,
  related: [
    { label: "Repose Gray vs. Agreeable Gray", href: "/blog/repose-gray-vs-agreeable-gray-houston" },
    { label: "Should trim match the walls?", href: "/blog/should-trim-be-same-color-as-walls" },
    { label: "Ceiling paint: white vs. color", href: "/blog/ceiling-paint-color-white-vs-color" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
