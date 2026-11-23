import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-11.
// Color names/codes are Sherwin-Williams colors (data/sw-colors.json); only
// LRVs verified from SW are quoted (Agreeable Gray, Accessible Beige).

const D: GuideArticleData = {
  path: "/blog/north-vs-south-facing-room-paint-colors-houston",
  title: "North- vs. South-Facing Rooms: Choosing Paint Colors in Houston",
  description:
    "How the direction a room faces changes paint color in Houston, and which undertones work in cool north light, strong south sun, and east and west rooms.",
  h1: "North- vs. south-facing rooms: choosing paint colors in Houston",
  eyebrow: "Color guide",
  published: "2026-12-11",
  updated: "2026-12-11",
  quickAnswer: (
    <>
      The direction a room faces changes how paint looks more than almost anything else. North-facing rooms get cool,
      indirect light that makes colors look grayer and darker, so warm undertones help. South-facing rooms get strong, warm
      light most of the day, which brightens colors and pushes warm ones warmer, so cooler or more muted colors stay
      balanced. East rooms are warm in the morning and cooler later; west rooms are the reverse, with Houston&apos;s strong,
      orange late-afternoon sun.
    </>
  ),
  sections: [
    {
      title: "Room by direction",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <thead>
              <tr className="bg-muted/40">
                <th className="p-3">Facing</th>
                <th className="p-3">Light</th>
                <th className="p-3">What tends to work</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["North", "Cool, soft, indirect all day; colors look grayer and darker", "Warm whites and greiges; avoid cool grays that turn flat"],
                ["South", "Bright, warm, strong most of the day", "Cooler or muted colors; whites without much yellow; deep colors hold up well"],
                ["East", "Warm, bright mornings; cooler, dimmer afternoons", "Balanced neutrals; check samples in the afternoon"],
                ["West", "Cooler mornings; strong, orange late-afternoon sun", "Colors that still look right in orange light; avoid very warm yellows and peaches"],
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
      ),
    },
    {
      title: "Colors to sample",
      body: (
        <Bullets
          items={[
            <><strong>North:</strong> Accessible Beige SW 7036 (LRV about 58), Kilim Beige SW 6106, Creamy SW 7012 or Alabaster SW 7008.</>,
            <><strong>South:</strong> Agreeable Gray SW 7029 (LRV about 60), Repose Gray SW 7015, Sea Salt SW 6204 or Pure White SW 7005.</>,
            <><strong>East and west:</strong> balanced greiges such as Agreeable Gray, or soft greens such as Evergreen Fog SW 9130 that look natural in both warm and cool light.</>,
          ]}
        />
      ),
    },
    {
      title: "What else changes the color",
      body: (
        <Bullets
          items={[
            "Trees and neighboring houses: shade makes a south room behave more like a north one.",
            "Window film and low-E glass: common in Houston, they cool and dim incoming light.",
            "Bulbs: warm 2700K versus cool 4000K+ LED changes everything at night.",
            "Floors, counters and furniture reflect their color onto the walls.",
          ]}
        />
      ),
    },
    {
      title: "How to test",
      body: (
        <p>
          Put large samples on at least two walls, including the one facing the window, and look in the morning, late
          afternoon and at night. See <Link href="/blog/agreeable-gray-vs-accessible-beige-houston">Agreeable Gray vs. Accessible Beige</Link>,{" "}
          <Link href="/blog/alabaster-vs-white-dove-vs-chantilly-lace-houston">popular whites compared</Link> and{" "}
          <Link href="/best-paint-colors-houston-homes">popular Houston paint colors</Link>, try ideas in the{" "}
          <Link href="/color-visualizer">color visualizer</Link>, or book a{" "}
          <Link href="/paint-color-consultation-houston">free color consultation</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What color is best for a north-facing room?",
      a: "Colors with warm undertones, such as warm whites, beiges and greiges. Cool grays tend to look flat and dark in north light.",
    },
    {
      q: "What color is best for a south-facing room?",
      a: "Most colors work; cooler or muted colors stay balanced in the warm light, and very yellow whites can look too warm.",
    },
    {
      q: "Why does my paint look different than the sample chip?",
      a: "Light direction, bulbs, window film, and reflections from floors and furniture all change color. Test large samples in the room.",
    },
    {
      q: "Do west-facing rooms need special colors?",
      a: "Check colors in late afternoon, when Houston's strong orange sun hits them; very warm colors can look overpowering then.",
    },
  ],
  limitations: (
    <>
      General guidance. LRVs are from Sherwin-Williams for the two colors noted; every room&apos;s light is different, so
      confirm with physical samples.
    </>
  ),
  related: [
    { label: "Agreeable Gray vs. Accessible Beige", href: "/blog/agreeable-gray-vs-accessible-beige-houston" },
    { label: "Popular whites compared", href: "/blog/alabaster-vs-white-dove-vs-chantilly-lace-houston" },
    { label: "Popular Houston paint colors", href: "/best-paint-colors-houston-homes" },
    { label: "Free color consultation", href: "/paint-color-consultation-houston" },
  ],
  ctaTitle: "Book a color consultation and written estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
