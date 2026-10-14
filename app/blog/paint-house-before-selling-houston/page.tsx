import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Owner brief 2026-10-14 (HSP-search-demand-and-missing-blogs-2026.md, draft 2).
// No prices or ROI claims: none are owner-confirmed for pre-sale work.

const D: GuideArticleData = {
  path: "/blog/paint-house-before-selling-houston",
  title: "Should You Paint Before Selling a Houston Home?",
  description:
    "Should you paint your Houston home before listing it? Which rooms and exterior areas matter most, what to skip, and how to avoid over-improving.",
  h1: "Should you paint your Houston home before selling?",
  eyebrow: "Selling guide",
  published: "2026-10-14",
  updated: "2026-10-14",
  quickAnswer: (
    <>
      Paint before selling when stains, patches, bold colors or worn exterior trim make the house look poorly kept. The
      goal is not a dream palette; it is to remove distractions so buyers see a clean, cared-for home. Focus on the entry,
      main living areas, kitchen, bathrooms, trim and the street-facing exterior, and skip rooms that are already neutral
      and in good shape. Ask your real-estate agent what competing listings look like before you set the scope.
    </>
  ),
  sections: [
    {
      title: "Paint the areas buyers notice first",
      body: (
        <Bullets
          items={[
            <>
              <strong>Entry and main living areas.</strong> Buyers decide quickly. Scuffed entry walls and patchy
              living-room touch-ups make the whole interior feel neglected.
            </>,
            <>
              <strong>Kitchen and bathrooms.</strong> These rarely need a full repaint. Clean walls, repaired moisture
              damage and an even finish matter more than a trendy color.
            </>,
            <>
              <strong>Trim and doors.</strong> Dirty or chipped trim makes fresh walls look unfinished. Sometimes cleaning
              and spot repainting are enough; sometimes a whole run of trim needs one consistent finish.
            </>,
            <>
              <strong>Front entrance and street-facing walls.</strong> Peeling trim, failed caulk, a faded front door and
              visible wood damage hurt curb appeal. Fix the damage before painting over it.
            </>,
          ]}
        />
      ),
    },
    {
      title: "When a full repaint is not worth it",
      body: (
        <Bullets
          items={[
            "The existing colors are neutral and in good condition.",
            "Marks clean off without damaging the finish.",
            "Touch-ups blend in under normal light.",
            "The next owner is likely to renovate anyway.",
            "The cost would be more than the presentation benefit.",
          ]}
        />
      ),
    },
    {
      title: "Why touch-ups sometimes look worse",
      body: (
        <p>
          Paint changes as it ages. Sunlight, cleaning and wear, plus differences in batch and sheen, can make a correct
          color match still show. If a touch-up flashes when light hits the wall from the side, repainting that whole
          wall usually looks more even than more patching.
        </p>
      ),
    },
    {
      title: "Choose colors for the house you are selling",
      body: (
        <p>
          Neutral does not have to mean bright white. Lighting, flooring, countertops and other fixed finishes decide
          whether a warm white, a light greige or another soft neutral works best. Try samples on the wall and look at
          them in the morning and in the evening before you approve a color.
        </p>
      ),
    },
    {
      title: "Ask for a pre-sale scope, not a luxury repaint",
      body: (
        <>
          <p>Tell the estimator the house is going on the market. A good written scope separates:</p>
          <Steps
            items={[
              { title: "Essential repairs", text: "damage a buyer or inspector will notice." },
              { title: "High-impact painting", text: "the rooms and surfaces that change the first impression." },
              { title: "Optional upgrades", text: "work that helps but can be skipped." },
              { title: "Clean, don't paint", text: "areas where cleaning alone is enough." },
            ]}
          />
          <p>
            That keeps the job tied to the sale instead of growing into an open-ended renovation. See an{" "}
            <Link href="/projects/richmond-two-story-great-room">interior we repainted in Richmond</Link>, and what an{" "}
            <Link href="/interior-painting-cost-houston">interior repaint costs in Houston</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "Should I paint the entire house before listing it?",
      a: "Not necessarily. Put the money into visibly worn rooms, patchy walls, strong personal colors and exterior damage that affects the first impression. Rooms that are already neutral and clean can often be left alone.",
    },
    {
      q: "Should I paint my kitchen cabinets before selling?",
      a: "Cabinet refinishing can transform a kitchen, but it costs more than painting walls. Weigh the condition of the cabinets, what competing listings look like, and whether the existing boxes and layout are worth keeping.",
    },
    {
      q: "Should I hire the cheapest painter for a pre-sale job?",
      a: "Compare the written scopes, not just the totals. A low price may leave out repairs, protection, named products or the work needed for an even finish.",
    },
    {
      q: "What colors sell best?",
      a: "Soft neutrals that suit the home's flooring, counters and light. Test samples on the wall in morning and evening light before choosing; a color that looks right on a chip can look cold or yellow in the room.",
    },
  ],
  limitations: (
    <>
      This is general guidance, not real-estate or pricing advice. Whether painting pays off depends on the home, the
      neighborhood and the market; ask your agent. Your written estimate from {BUSINESS.name} sets the scope, price and
      payment schedule before you approve the project.
    </>
  ),
  related: [
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
    { label: "Interior painting cost in Houston", href: "/interior-painting-cost-houston" },
    { label: "Exterior painting in Houston", href: "/exterior-painting-houston-tx" },
    { label: "Get a written estimate", href: "/painting-estimate-houston" },
  ],
  ctaTitle: "Get a written pre-sale painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
