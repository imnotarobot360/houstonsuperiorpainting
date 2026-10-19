import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-10-29.
// No prices: texture changes are priced after an on-site look.

const D: GuideArticleData = {
  path: "/blog/orange-peel-vs-knockdown-vs-smooth-walls",
  title: "Orange Peel vs. Knockdown vs. Smooth Walls: Houston Textures",
  description:
    "The common Houston wall textures, how each looks with paint, what each hides, and what changing from one texture to another involves.",
  h1: "Orange peel vs. knockdown vs. smooth walls",
  eyebrow: "Wall guide",
  published: "2026-10-29",
  updated: "2026-10-29",
  quickAnswer: (
    <>
      Most Houston homes have one of three wall finishes. <strong>Orange peel</strong> is a fine, bumpy spray texture
      like the skin of an orange; it is common, hides small flaws and touches up reasonably well.{" "}
      <strong>Knockdown</strong> is a heavier spray texture flattened with a trowel into irregular plateaus; it hides more
      and is common in many Houston-area builder homes. <strong>Smooth</strong> (level 5) walls look clean and modern but
      show every flaw and are the hardest to repair invisibly. Paint sheen affects how each one looks.
    </>
  ),
  sections: [
    {
      title: "The three textures compared",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 font-semibold">Texture</th>
                <th className="p-3 font-semibold">Look</th>
                <th className="p-3 font-semibold">Hides flaws</th>
                <th className="p-3 font-semibold">Repairs</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Orange peel", "Fine, even bumps", "Small ones", "Matchable with spray texture"],
                ["Knockdown", "Flattened, irregular splatter", "More", "Matchable, but takes skill"],
                ["Smooth (level 5)", "Flat, clean, modern", "Very little", "Hardest to hide"],
              ].map((r) => (
                <tr key={r[0]} className="border-t border-border">
                  {r.map((c, i) => (
                    <td key={i} className={`p-3 ${i ? "text-muted-foreground" : "font-medium"}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      title: "How paint sheen changes each texture",
      body: (
        <Bullets
          items={[
            "Flat and matte paints make texture look softer and hide flaws; they are the safest choice on smooth walls and ceilings.",
            "Eggshell is the usual compromise for living areas: a little washability without highlighting every bump.",
            "Satin and semi-gloss catch light on every peak of orange peel or knockdown, which can look busy on large walls.",
          ]}
        />
      ),
    },
    {
      title: "Changing texture",
      body: (
        <>
          <p>
            Going from knockdown or orange peel to smooth means skim-coating the walls with joint compound, sanding and
            priming before paint. It is a drywall finishing job, takes days of drying and dust control, and is priced after
            an on-site look. Going from smooth to textured is simpler, but the room still needs protection from spray.
          </p>
          <p>
            Popcorn ceilings are a separate case; see{" "}
            <Link href="/blog/popcorn-ceiling-removal-houston">popcorn ceiling removal and painting</Link>.
          </p>
        </>
      ),
    },
    {
      title: "Which is best?",
      body: (
        <p>
          There is no single best: smooth walls suit modern and high-end finishes where lighting is controlled; orange peel
          and knockdown are practical for busy households and hide the small dings of everyday life. If you are repairing
          just part of a wall, the right answer is usually to match what is already there. See{" "}
          <Link href="/drywall-repair-houston-tx">drywall repair in Houston</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What is the most common wall texture in Houston?",
      a: "Orange peel and knockdown are both very common in Houston-area homes; smooth walls are more common in custom and higher-end homes.",
    },
    {
      q: "Does knockdown texture look dated?",
      a: "It depends on the home and the finish. A soft knockdown with matte or eggshell paint still looks clean; very heavy texture with a shiny paint can look busy.",
    },
    {
      q: "Can textured walls be made smooth?",
      a: "Yes, by skim-coating with joint compound, sanding and priming. It is a drywall finishing job and is priced after seeing the walls.",
    },
    {
      q: "What paint sheen is best for textured walls?",
      a: "Matte or eggshell for most rooms; satin or semi-gloss highlights every peak of the texture.",
    },
  ],
  limitations: <>General guidance. Texture names vary by region and crew; the walls themselves decide what a repair or change takes.</>,
  related: [
    { label: "Drywall repair in Houston", href: "/drywall-repair-houston-tx" },
    { label: "Paint finishes explained", href: "/blog/paint-finishes-matte-eggshell-satin-semi-gloss" },
    { label: "Why touch-ups don't match", href: "/blog/why-paint-touch-ups-dont-match" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: `Get a written estimate from ${BUSINESS.name}`,
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
