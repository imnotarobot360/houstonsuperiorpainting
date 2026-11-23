import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-01.
// Owner confirmed 2026-10-19: our crews move ALL heavy furniture, except
// expensive or fragile items, which the customer moves.

const D: GuideArticleData = {
  path: "/blog/do-painters-move-furniture",
  title: "Do Professional Painters Move and Protect Furniture?",
  description:
    "Our crews move all heavy furniture and cover it; you handle only expensive or fragile items. What to do before painting day and what the estimate says.",
  h1: "Do professional painters move and protect furniture?",
  eyebrow: "Prep guide",
  published: "2026-11-01",
  updated: "2026-11-01",
  quickAnswer: (
    <>
      Yes. At {BUSINESS.name}, our crews move all the heavy furniture (sofas, beds, dressers, tables, cabinets) away
      from the walls, cover it, and protect the floors. The one exception is anything expensive or fragile, such as
      electronics, artwork, antiques, collectibles, heirlooms and breakables: we ask you to move or pack those yourself,
      so they are handled by the person who knows their value. Your written estimate states what is included.
    </>
  ),
  sections: [
    {
      title: "What our crews handle",
      body: (
        <Bullets
          items={[
            "Moving all heavy furniture (sofas, beds, dressers, tables, cabinets) away from the walls, usually to the center of the room, and putting it back.",
            "Covering furniture with plastic and drop cloths, and covering floors.",
            "Removing and replacing outlet covers, switch plates and, where agreed, light fixtures or hardware.",
            "Taking down and rehanging window treatments and wall-mounted items if the estimate includes it.",
          ]}
        />
      ),
    },
    {
      title: "What you should do before painting day",
      body: (
        <Steps
          items={[
            { title: "Clear small items", text: "décor, photos, books, plants and anything on shelves or tables." },
            { title: "Protect valuables and electronics", text: "unplug and move TVs, computers and fragile or sentimental items yourself." },
            { title: "Empty heavy furniture", text: "empty bookcases, china cabinets and dresser tops so they can be moved safely." },
            { title: "Take down art", text: "unless the estimate says the crew will, and decide which hooks and anchors should stay." },
            { title: "Plan for pets and kids", text: "keep them out of the work area while doors and walls are drying." },
          ]}
        />
      ),
    },
    {
      title: "What we ask you to move: expensive or fragile items",
      body: (
        <p>
          Electronics, artwork, antiques, collectibles, heirlooms, glass and anything breakable stay with you: please move
          or pack them before painting day. If a valuable piece is too big to move yourself, such as a piano or a
          display cabinet, tell us at the walkthrough and we&apos;ll paint around it or plan for a specialty mover.
        </p>
      ),
    },
    {
      title: "What the estimate should say",
      body: (
        <p>
          A clear written estimate lists what the crew will move, cover and protect, what you need to clear, and how
          furniture and floors are protected each day. At {BUSINESS.name}, we go over this during the walkthrough and put it
          in writing. For a full checklist, see{" "}
          <Link href="/blog/how-to-prepare-home-for-interior-painting">how to prepare your home for interior painting</Link>{" "}
          and <Link href="/blog/stay-home-during-interior-painting-houston">staying home during interior painting</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Do painters move furniture?",
      a: "Ours do: our crews move all heavy furniture away from the walls, cover it and put it back. We ask you to move only expensive or fragile items.",
    },
    {
      q: "Should I move furniture before painters come?",
      a: "Move or pack only expensive or fragile items (electronics, artwork, antiques, breakables) and empty shelves and drawers. Leave the heavy furniture to our crew.",
    },
    {
      q: "Do painters cover floors and furniture?",
      a: "They should. Furniture is covered with plastic or drop cloths and floors are protected throughout the job.",
    },
    {
      q: "Will you move a piano or other valuable piece?",
      a: "Valuable and delicate pieces are the exception to what we move. Tell us at the walkthrough: we can paint around it, or you can arrange a specialty mover.",
    },
  ],
  limitations: <>What is included on your project is the scope in your written estimate.</>,
  related: [
    { label: "How to prepare your home for interior painting", href: "/blog/how-to-prepare-home-for-interior-painting" },
    { label: "Staying home during interior painting", href: "/blog/stay-home-during-interior-painting-houston" },
    { label: "Interior painting process", href: "/interior-painting-process-houston" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written interior painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
