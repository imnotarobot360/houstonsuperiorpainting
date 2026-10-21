import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-12-14.
// General guidance; no product brand claimed as ours. Prices from PRICES_2026.

const D: GuideArticleData = {
  path: "/blog/painting-cedar-wood-siding-houston",
  title: "Painting or Staining Cedar and Wood Siding in Houston",
  description:
    "Paint vs. solid stain on cedar and wood siding, why cedar needs a tannin-blocking primer, repairing soft boards first, and how each finish holds up in Houston.",
  h1: "Painting or staining cedar and wood siding in Houston",
  eyebrow: "Exterior guide",
  published: "2026-12-14",
  updated: "2026-12-14",
  quickAnswer: (
    <>
      Cedar and other wood siding can be painted or finished with a solid-color stain. Paint forms a thicker film, gives the
      widest color choice and usually lasts longest between repaints when the prep is right. Solid stain soaks in more,
      shows some wood texture and tends to wear by fading rather than peeling. On cedar, the key step either way is a
      stain-blocking (tannin-blocking) primer, or the wood&apos;s natural oils bleed through as brown or orange spots. Soft or
      split boards are repaired before anything goes on.
    </>
  ),
  sections: [
    {
      title: "Paint vs. solid stain",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <thead>
              <tr className="bg-muted/40">
                <th className="p-3"></th>
                <th className="p-3">Exterior paint</th>
                <th className="p-3">Solid-color stain</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Look", "Smooth, uniform color", "Flatter, shows some wood texture"],
                ["Colors", "Any color", "Most colors, often a narrower range"],
                ["How it wears", "Can crack or peel if moisture gets behind it", "Fades and wears gradually"],
                ["Repaint", "Needs scraping where it fails", "Easier to recoat"],
                ["Over old paint", "Yes", "Only over old stain, not over paint"],
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
      title: "Why cedar needs a special primer",
      body: (
        <p>
          Cedar and redwood contain tannins, natural compounds that dissolve in water and bleed through latex paint as
          brown or orange stains, especially around knots and after rain. A stain-blocking exterior primer seals them in.
          Skipping it is one of the most common reasons a fresh paint job on cedar looks blotchy within weeks.
        </p>
      ),
    },
    {
      title: "How it is done",
      body: (
        <Steps
          items={[
            { title: "Inspect and repair", text: "soft, split or rotted boards are replaced; nails are reset." },
            { title: "Clean", text: "a gentle wash removes mildew and dirt; wood dries fully before coating." },
            { title: "Scrape and sand", text: "loose paint comes off; edges are feathered so they don't show." },
            { title: "Prime", text: "stain-blocking primer on bare cedar and knots." },
            { title: "Caulk", text: "joints and trim seams, with a paintable sealant." },
            { title: "Two finish coats", text: "of exterior paint, or solid stain applied as the label directs." },
          ]}
        />
      ),
    },
    {
      title: "Houston conditions",
      body: (
        <Bullets
          items={[
            "Humidity and rain make moisture the main enemy: bottom edges, end grain and boards near the ground fail first.",
            "Mildew grows fast on shaded sides; a mildew-resistant product and good cleaning help.",
            "Strong sun fades dark colors faster on south and west walls.",
          ]}
        />
      ),
    },
    {
      title: "What it costs",
      body: (
        <p>
          Exterior painting in Houston typically runs {P.exteriorPerHome} for a home as a 2026 planning range; wood siding
          with heavy prep or board replacement costs more, and wood rot repair typically runs {P.woodRotRepair}. Your written
          estimate lists the repairs and prep separately. See{" "}
          <Link href="/blog/wood-rot-repair-before-painting-houston">wood rot repair before painting</Link>,{" "}
          <Link href="/blog/caulking-before-exterior-painting-houston">caulking before exterior painting</Link> and{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Is it better to paint or stain cedar siding?",
      a: "Paint gives the most color choice and usually the longest interval between repaints with good prep; solid stain shows more wood texture and wears by fading. Both need sound, clean, dry wood.",
    },
    {
      q: "Why does brown come through paint on cedar?",
      a: "Tannins in the wood bleed through. A stain-blocking exterior primer before painting prevents it.",
    },
    {
      q: "Can you stain over painted siding?",
      a: "No. Stain needs to soak into wood or old stain; over paint, use paint.",
    },
    {
      q: "How long does paint last on cedar siding in Houston?",
      a: "It depends on prep, exposure and product. Shaded, wet and south- or west-facing walls wear fastest; good prep and primer matter most.",
    },
  ],
  limitations: <>General guidance. Product labels control; prices are 2026 planning ranges, not quotes.</>,
  related: [
    { label: "Wood rot repair before painting", href: "/blog/wood-rot-repair-before-painting-houston" },
    { label: "Caulking before exterior painting", href: "/blog/caulking-before-exterior-painting-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Wood rot repair in Houston", href: "/wood-rot-repair-houston-tx" },
  ],
  ctaTitle: "Get a written exterior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
