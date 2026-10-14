import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Owner brief 2026-10-14 (draft 3). Deliberately no blanket "primer plus two coats"
// promise: the estimate names the coating system for each surface.

const D: GuideArticleData = {
  path: "/blog/primer-vs-two-coats-paint-houston",
  title: "Do You Need Primer or Two Coats of Paint? Houston Guide",
  description:
    "Primer and two coats are not interchangeable. When Houston walls, ceilings, trim and exteriors need primer, and how painters define complete coverage.",
  h1: "Do you need primer or two coats of paint?",
  eyebrow: "Paint guide",
  published: "2026-10-14",
  updated: "2026-10-14",
  quickAnswer: (
    <>
      Primer and finish paint do different jobs. Primer helps paint stick, seals patches and bare surfaces, and blocks
      stains; finish paint gives the color, sheen and protection. Bare drywall, repairs, stains, glossy surfaces, bare
      wood, metal and masonry usually need primer. A sound, previously painted wall getting a similar color often does
      not. How many finish coats you need depends on the product, the colors and the surface, so a good estimate names
      the system for each surface rather than promising &quot;two coats&quot; everywhere.
    </>
  ),
  sections: [
    {
      title: "When primer is usually needed",
      body: (
        <Bullets
          items={[
            <>
              <strong>Bare drywall and patches.</strong> Joint compound soaks up paint differently from painted wall, so
              unprimed patches show through as dull or shiny spots (called flashing).
            </>,
            <>
              <strong>Water, smoke and other stains.</strong> Fix the source first, then use a stain-blocking primer so
              the stain does not bleed through.
            </>,
            <>
              <strong>Glossy or slick surfaces.</strong> Cabinets, trim, old oil-based paint and factory finishes need
              cleaning, sanding and a bonding primer.
            </>,
            <>
              <strong>Bare wood, metal or masonry.</strong> Each needs a primer made for its risks: tannin bleed in wood,
              rust on metal, moisture and alkali in masonry.
            </>,
            <>
              <strong>Big color changes.</strong> A primer, sometimes tinted, can help, but the number of finish coats
              still depends on the products and colors.
            </>,
          ]}
        />
      ),
    },
    {
      title: "Is one finish coat ever enough?",
      body: (
        <p>
          It can be, when the existing paint is sound, the new color is close, and the product covers evenly. One coat
          should never be used to hide poor prep or leave uneven color and sheen.
        </p>
      ),
    },
    {
      title: "Are two finish coats always required?",
      body: (
        <p>
          No single rule fits every surface. New work, big color changes, repaired walls and sun-beaten exteriors may need
          a different system from a same-color refresh. The estimate should name either the coat system or a clear
          standard: even color and sheen with no patches showing.
        </p>
      ),
    },
    {
      title: "What to ask your painter",
      body: (
        <>
          <Steps
            items={[
              { title: "Prep", text: "what will be cleaned, sanded or repaired." },
              { title: "Primer", text: "where primer goes, and which one." },
              { title: "Products", text: "the exact primer and finish paint." },
              { title: "Coats", text: "the planned number of coats on each surface." },
              { title: "Fixes", text: "how thin coverage or flashing will be corrected." },
              { title: "Price", text: "whether paint and primer are included." },
            ]}
          />
          <p>
            See how we prep and paint on our <Link href="/interior-painting-process-houston">interior painting process</Link>{" "}
            page.
          </p>
        </>
      ),
    },
    {
      title: "What about paint-and-primer-in-one?",
      body: (
        <p>
          It usually means good coverage over a compatible, already painted surface. It does not replace a specialty
          primer on stains, bare materials, slick finishes or other problem surfaces.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Does every drywall patch need primer?",
      a: "Bare joint compound should normally be sealed before the finish coat. Otherwise the patch soaks up paint differently and shows through as a dull or shiny spot.",
    },
    {
      q: "Can latex paint go over old oil-based trim?",
      a: "Not directly. The old finish should be cleaned and scuffed, and a compatible bonding primer applied first; otherwise the new paint can peel.",
    },
    {
      q: "Why do dark colors need more coats?",
      a: "Colorant, the paint's base and the color underneath all affect coverage. A tinted primer or an extra finish coat may be needed for an even result.",
    },
    {
      q: "Is primer included in a painting estimate?",
      a: `It should be stated, not assumed. ${BUSINESS.name}'s written estimate lists the prep, primer, products and coats before you approve the project.`,
    },
  ],
  limitations: (
    <>
      General guidance. The right primer and number of coats depend on the surface and the products, and the
      manufacturer&apos;s instructions control. Your written estimate names the coating system for your project.
    </>
  ),
  related: [
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
    { label: "Interior painting process", href: "/interior-painting-process-houston" },
    { label: "Drywall repair before painting", href: "/blog/drywall-repair-before-painting" },
    { label: "Interior project in Richmond", href: "/projects/richmond-interior-arches-repaint" },
  ],
  ctaTitle: "Get a written painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
