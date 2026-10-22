import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2027-01-25.
// No trim-only exterior price confirmed; uses townhomeDoorAndTrim as the
// nearest confirmed range only for townhomes, otherwise quoted per job.

const D: GuideArticleData = {
  path: "/blog/painting-exterior-trim-only-houston",
  title: "Painting Just the Exterior Trim: A Budget Refresh",
  description:
    "When a trim-only exterior repaint makes sense, what it includes (fascia, soffits, windows, doors), how it buys time before a full exterior, and when it doesn't.",
  h1: "Painting just the exterior trim: a budget refresh",
  eyebrow: "Exterior guide",
  published: "2027-01-25",
  updated: "2027-01-25",
  quickAnswer: (
    <>
      On many Houston homes, especially brick homes, the trim wears out long before the walls: fascia, soffits, window
      frames, doors and garage doors take the sun and rain. Painting only the trim, with caulk and wood repairs, refreshes
      the whole look for much less than a full exterior and protects the wood. It makes sense when the body is brick or
      still in good shape; if the siding is peeling too, a full exterior is the better value.
    </>
  ),
  sections: [
    {
      title: "What a trim-only job includes",
      body: (
        <Bullets
          items={[
            "Fascia, soffits and rake boards.",
            "Window frames, sills and shutters.",
            "Front door, garage door and frames.",
            "Caulk at joints and around windows; wood rot repairs where found.",
          ]}
        />
      ),
    },
    {
      title: "When it makes sense",
      body: (
        <Bullets
          items={[
            "Brick homes, where the trim is the only painted surface.",
            "The body color is fine but trim is peeling, faded or cracked.",
            "You want a new trim or door color without repainting everything.",
            "Not when: siding is also failing, or you're changing the whole color scheme.",
          ]}
        />
      ),
    },
    {
      title: "What it costs",
      body: (
        <p>
          Trim-only jobs are quoted per home, because the amount of trim and repairs varies so much; on townhomes, door and
          trim work typically runs {P.townhomeDoorAndTrim} as a 2026 planning range. See{" "}
          <Link href="/blog/soffit-fascia-painting-houston">soffit and fascia painting</Link>,{" "}
          <Link href="/blog/window-trim-sill-painting-houston">window trim and sills</Link>,{" "}
          <Link href="/blog/caulking-before-exterior-painting-houston">caulking</Link> and{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting in Houston</Link>. {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can you paint just the exterior trim?",
      a: "Yes. On brick homes, or when the body is still in good shape, a trim-only repaint is a common, lower-cost refresh.",
    },
    {
      q: "What does exterior trim painting include?",
      a: "Usually fascia, soffits, window frames and sills, doors, garage doors and shutters, plus caulk and wood repairs.",
    },
    {
      q: "Is painting trim only worth it?",
      a: "When the walls are brick or still sound, yes: it protects the wood and updates the look for less than a full exterior.",
    },
    {
      q: "Can I change my trim color without painting the house?",
      a: "Yes, as long as the new trim color works with the existing body, brick and roof. Check HOA rules first.",
    },
  ],
  limitations: <>General guidance; prices are 2026 planning ranges, and trim-only jobs are quoted per home.</>,
  related: [
    { label: "Soffit and fascia painting", href: "/blog/soffit-fascia-painting-houston" },
    { label: "Window trim and sills", href: "/blog/window-trim-sill-painting-houston" },
    { label: "Trim and door colors for red brick", href: "/blog/trim-door-colors-red-brick-house-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written exterior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
