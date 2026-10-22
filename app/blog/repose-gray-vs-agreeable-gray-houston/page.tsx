import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-30.
// Facts from Sherwin-Williams' color service (checked 2026-10-22): LRV
// (Repose Gray 58.22, Agreeable Gray 60.386), descriptions, coordinating
// colors. Swatch image uses SW's published hex (scripts/blog-art/generate.mjs).

const SW = "https://www.sherwin-williams.com/en-us/color/color-family/neutral-paint-colors"

const D: GuideArticleData = {
  path: "/blog/repose-gray-vs-agreeable-gray-houston",
  title: "Repose Gray vs. Agreeable Gray in Houston Homes",
  description:
    "Two of Sherwin-Williams' most popular grays compared: LRV, undertones, coordinating colors, and which suits Houston light, floors and finishes.",
  h1: "Repose Gray vs. Agreeable Gray in Houston homes",
  eyebrow: "Color guide",
  published: "2026-12-30",
  updated: "2026-12-30",
  quickAnswer: (
    <>
      Both are light, warm-leaning grays with almost the same lightness (LRV about 58 for Repose Gray SW 7015 and about 60
      for Agreeable Gray SW 7029). Repose Gray reads as a truer, slightly cooler gray. Agreeable Gray has a beige undertone,
      so it reads warmer and more like greige. With cool white quartz and gray floors, Repose Gray looks crisp; with warm
      wood, cream stone and Houston&apos;s warm afternoon sun, Agreeable Gray usually looks softer.
    </>
  ),
  sections: [
    {
      title: "Side by side",
      body: (
        <>
          <figure className="not-prose my-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/blog/art/repose-gray-vs-agreeable-gray-houston.png"
              alt="Repose Gray SW 7015 and Agreeable Gray SW 7029 swatches side by side"
              width={1200}
              height={675}
              className="w-full rounded-lg border border-border"
            />
            <figcaption className="mt-2 text-xs text-muted-foreground">
              Sherwin-Williams&apos; published on-screen values. Screens vary; compare physical samples.
            </figcaption>
          </figure>
          <div className="not-prose my-4 overflow-x-auto">
            <table className="w-full text-left text-sm border border-border">
              <thead>
                <tr className="bg-muted/40">
                  <th className="p-3"></th>
                  <th className="p-3">Repose Gray SW 7015</th>
                  <th className="p-3">Agreeable Gray SW 7029</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["LRV", "58.2", "60.4"],
                  ["Sherwin-Williams says", "A light gray with \"tranquil tones and soothing warmth\"", "A gray with a beige undertone that gives \"a subtle warmth\""],
                  ["Reads as", "Truer gray, slightly cooler", "Warmer, closer to greige"],
                  ["SW coordinating colors", "Eider White SW 7014, Pavestone SW 7642, Coral Clay SW 9005", "Incredible White SW 7028, Extra White SW 7006, Coral Rose SW 9004"],
                ].map(([a, b, c]) => (
                  <tr key={a} className="border-t border-border">
                    <td className="p-3 font-medium">{a}</td>
                    <td className="p-3 text-muted-foreground">{b}</td>
                    <td className="p-3 text-muted-foreground">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "In Houston light",
      body: (
        <Bullets
          items={[
            <><strong>South and west rooms:</strong> warm sun makes both warmer; Repose Gray stays more neutral.</>,
            <><strong>North rooms:</strong> Repose Gray can look cool and flat; Agreeable Gray keeps more warmth.</>,
            <><strong>Evenings:</strong> both warm up under 2700K bulbs.</>,
          ]}
        />
      ),
    },
    {
      title: "Which to choose",
      body: (
        <p>
          Choose Repose Gray for a cleaner gray with cool or white finishes, and Agreeable Gray for a softer, warmer neutral
          with wood and cream tones. Test both on two walls, morning and evening. See{" "}
          <Link href="/blog/agreeable-gray-vs-accessible-beige-houston">Agreeable Gray vs. Accessible Beige</Link>,{" "}
          <Link href="/blog/north-vs-south-facing-room-paint-colors-houston">north- vs. south-facing rooms</Link> and our{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Is Repose Gray or Agreeable Gray warmer?",
      a: "Agreeable Gray. It has a beige undertone; Repose Gray reads as a truer, slightly cooler gray.",
    },
    {
      q: "Which is lighter, Repose Gray or Agreeable Gray?",
      a: "They're close. Sherwin-Williams lists Agreeable Gray at LRV 60.4 and Repose Gray at 58.2, so Agreeable Gray is a touch lighter.",
    },
    {
      q: "What trim color goes with Repose Gray?",
      a: "Sherwin-Williams suggests Eider White SW 7014 as a complementary trim.",
    },
    {
      q: "Which is better for a north-facing room?",
      a: "Usually Agreeable Gray, because its warmth offsets cool north light. Test both in the room.",
    },
  ],
  limitations: (
    <>
      LRVs, descriptions and coordinating colors are from Sherwin-Williams, checked October 2026; lighting guidance is ours.
      On-screen colors are approximate. {BUSINESS.name} is not affiliated with or sponsored by Sherwin-Williams.
    </>
  ),
  sources: [
    { label: "Sherwin-Williams: Repose Gray SW 7015", url: `${SW}/sw7015-repose-gray` },
    { label: "Sherwin-Williams: Agreeable Gray SW 7029", url: `${SW}/sw7029-agreeable-gray` },
  ],
  related: [
    { label: "Agreeable Gray vs. Accessible Beige", href: "/blog/agreeable-gray-vs-accessible-beige-houston" },
    { label: "North- vs. south-facing rooms", href: "/blog/north-vs-south-facing-room-paint-colors-houston" },
    { label: "Popular Houston paint colors", href: "/best-paint-colors-houston-homes" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
