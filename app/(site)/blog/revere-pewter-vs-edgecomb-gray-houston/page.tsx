import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-11.
// Facts from Benjamin Moore's color pages (checked 2026-10-22): LRV (Revere
// Pewter HC-172 55.05, Edgecomb Gray HC-173 63.09) and on-screen hex (CBC6B8,
// D9D3C4). Both are in BM's Historical Colors (HC). Undertone guidance is ours.

const BM = "https://www.benjaminmoore.com/en-us/paint-colors/color"

const D: GuideArticleData = {
  path: "/blog/revere-pewter-vs-edgecomb-gray-houston",
  title: "Revere Pewter vs. Edgecomb Gray in Houston Homes",
  description:
    "Two of Benjamin Moore's most popular greiges compared: LRV, how warm each reads, and how they look with Houston light, floors and finishes.",
  h1: "Revere Pewter vs. Edgecomb Gray in Houston homes",
  eyebrow: "Color guide",
  published: "2027-01-11",
  updated: "2027-01-11",
  quickAnswer: (
    <>
      Both are warm greiges from Benjamin Moore&apos;s Historical Colors. The big difference is depth: Edgecomb Gray HC-173
      (LRV 63.09) is noticeably lighter and softer, while Revere Pewter HC-172 (LRV 55.05) is a deeper, more grounded
      greige that shows more contrast against white trim. In bright, warm Houston rooms both read warm; Edgecomb Gray can
      look almost off-white in strong sun, and Revere Pewter holds its color better. In darker or north-facing rooms,
      Edgecomb Gray keeps the space lighter.
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
              src="/images/blog/art/revere-pewter-vs-edgecomb-gray-houston.png"
              alt="Revere Pewter HC-172 and Edgecomb Gray HC-173 swatches side by side"
              width={1200}
              height={675}
              className="w-full rounded-lg border border-border"
            />
            <figcaption className="mt-2 text-xs text-muted-foreground">
              Benjamin Moore&apos;s published on-screen values. Screens vary; compare physical samples.
            </figcaption>
          </figure>
          <div className="not-prose my-4 overflow-x-auto">
            <table className="w-full text-left text-sm border border-border">
              <thead>
                <tr className="bg-muted/40">
                  <th className="p-3"></th>
                  <th className="p-3">Revere Pewter HC-172</th>
                  <th className="p-3">Edgecomb Gray HC-173</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["LRV", "55.05", "63.09"],
                  ["Collection", "Historical Colors", "Historical Colors"],
                  ["Reads as", "Deeper, grounded greige", "Light, soft greige"],
                  ["Contrast with white trim", "Clear", "Gentle"],
                  ["Best in", "Bright rooms, open plans, exteriors", "Dimmer rooms, small spaces, whole-house"],
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
      title: "In Houston homes",
      body: (
        <Bullets
          items={[
            "Strong south and west sun can wash Edgecomb Gray out to near-white; Revere Pewter keeps more color.",
            "North-facing and interior rooms stay lighter with Edgecomb Gray.",
            "Both work with warm wood floors; with cool gray LVP, test them side by side, because both lean warm.",
          ]}
        />
      ),
    },
    {
      title: "Which to choose",
      body: (
        <p>
          Choose Revere Pewter for more presence and contrast, and Edgecomb Gray for a lighter, airier whole-house neutral.
          Sample both on two walls. See <Link href="/blog/repose-gray-vs-agreeable-gray-houston">Repose Gray vs. Agreeable Gray</Link>{" "}
          for the Sherwin-Williams equivalents,{" "}
          <Link href="/blog/north-vs-south-facing-room-paint-colors-houston">north- vs. south-facing rooms</Link> and our{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Is Revere Pewter darker than Edgecomb Gray?",
      a: "Yes. Benjamin Moore lists Revere Pewter at LRV 55.05 and Edgecomb Gray at 63.09, so Edgecomb Gray is clearly lighter.",
    },
    {
      q: "Are Revere Pewter and Edgecomb Gray warm or cool?",
      a: "Both are warm greiges; Revere Pewter reads deeper and more grounded, Edgecomb Gray lighter and softer.",
    },
    {
      q: "Which is better for a dark room?",
      a: "Usually Edgecomb Gray, because its higher LRV keeps the room lighter.",
    },
    {
      q: "Can Revere Pewter be used outside?",
      a: "Yes, in an exterior product. Strong sun makes it look lighter than on an indoor sample, so test it on the house.",
    },
  ],
  limitations: (
    <>
      LRVs and screen values are from Benjamin Moore&apos;s color pages, checked October 2026; how each reads is our
      guidance. On-screen colors are approximate. {BUSINESS.name} is not affiliated with or sponsored by Benjamin Moore.
    </>
  ),
  sources: [
    { label: "Benjamin Moore: Revere Pewter HC-172", url: `${BM}/hc-172/revere-pewter` },
    { label: "Benjamin Moore: Edgecomb Gray HC-173", url: `${BM}/hc-173/edgecomb-gray` },
  ],
  related: [
    { label: "Repose Gray vs. Agreeable Gray", href: "/blog/repose-gray-vs-agreeable-gray-houston" },
    { label: "Colors for small rooms", href: "/blog/paint-colors-small-rooms-houston" },
    { label: "Popular Houston paint colors", href: "/best-paint-colors-houston-homes" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
