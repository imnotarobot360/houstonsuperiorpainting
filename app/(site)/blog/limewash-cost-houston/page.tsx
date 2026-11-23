import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, PriceTable } from "@/components/aeo/blocks"
import { PRICES_2026 as P } from "@/lib/business"

const D: GuideArticleData = {
  path: "/blog/limewash-cost-houston",
  title: "Limewash Brick Cost in Houston (2026) | Per Square Foot",
  description: `Limewashing brick in Houston costs ${P.limewashPerSqFt} per square foot of brick in 2026, about ${P.limewashHome2500} for a typical 2,500 sq ft home. What moves the price.`,
  h1: "Limewash brick cost in Houston (2026)",
  eyebrow: "Cost guide",
  published: "2026-10-11",
  updated: "2026-10-11",
  quickAnswer: (
    <>
      Limewashing brick in Houston typically costs {P.limewashPerSqFt} per square foot of brick face in 2026, which works
      out to about {P.limewashHome2500} for the brick on a typical 2,500 sq ft home. The price is set by the area of brick,
      how porous it is, the look you want and how much cleaning and repair the brick needs first.
    </>
  ),
  sections: [
    {
      title: "2026 price range",
      body: (
        <PriceTable
          head={["Project", "Typical 2026 Houston range"]}
          rows={[
            ["Limewash, per sq ft of brick face", P.limewashPerSqFt],
            ["Typical 2,500 sq ft home", P.limewashHome2500],
          ]}
        />
      ),
    },
    {
      title: "What moves the price",
      body: (
        <Bullets
          items={[
            <><strong>Brick area:</strong> priced by the square feet of brick face, not the home&apos;s living area.</>,
            <><strong>Porosity:</strong> thirsty brick absorbs more limewash and may need more coats.</>,
            <><strong>The look:</strong> a heavier, more opaque finish takes more material and time than a light wash.</>,
            <><strong>Prep:</strong> brick must be cleaned, efflorescence treated and damaged mortar repaired first.</>,
            <><strong>Height and access:</strong> two-story brick and chimneys need more staging.</>,
          ]}
        />
      ),
    },
    {
      title: "Limewash, German smear or paint?",
      body: (
        <p>
          Limewash soaks into the brick and gives a soft, matte, breathable finish. German smear uses mortar and covers more
          of the brick. Paint gives a solid, uniform color. Each has different costs and upkeep; see{" "}
          <Link href="/blog/limewash-vs-german-smear-houston">limewash vs German smear</Link> and{" "}
          <Link href="/blog/painting-brick-houston">when to paint brick</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    { q: "How much does it cost to limewash a house in Houston?", a: `About ${P.limewashHome2500} for the brick on a typical 2,500 sq ft home in 2026, or ${P.limewashPerSqFt} per square foot of brick face.` },
    { q: "Why is limewash priced by brick area?", a: "Because the work is on the brick face. Two homes with the same living area can have very different amounts of brick." },
    { q: "Does the brick need prep before limewash?", a: "Yes. It is cleaned, efflorescence is treated and damaged mortar is repaired so the limewash bonds evenly." },
    { q: "Is limewash cheaper than painting brick?", a: "It depends on the brick and the look. Compare both in your estimate; our painting-brick guide explains the trade-offs." },
  ],
  limitations: <>Prices are typical 2026 Houston ranges, not a quote. Brick condition and the finish you choose set the final price.</>,
  related: [
    { label: "Limewash & brick painting", href: "/limewash-brick-painting-houston-tx" },
    { label: "Limewash vs German smear", href: "/blog/limewash-vs-german-smear-houston" },
    { label: "Painting brick in Houston", href: "/blog/painting-brick-houston" },
    { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
  ],
  ctaTitle: "Get a free limewash estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
