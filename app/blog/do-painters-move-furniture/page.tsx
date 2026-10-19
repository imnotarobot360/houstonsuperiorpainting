import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-01.
// Our own furniture policy is NOT confirmed by the owner, so the post describes
// common practice and says the written estimate states what is included.

const D: GuideArticleData = {
  path: "/blog/do-painters-move-furniture",
  title: "Do Professional Painters Move and Protect Furniture?",
  description:
    "What painters usually move and cover, what you should handle yourself before painting day, and what your written estimate should say about it.",
  h1: "Do professional painters move and protect furniture?",
  eyebrow: "Prep guide",
  published: "2026-11-01",
  updated: "2026-11-01",
  quickAnswer: (
    <>
      Most professional painters move furniture away from the walls to the middle of the room and cover it, and protect
      floors, but they usually ask you to clear small and valuable items first: décor, electronics, pictures, books and
      anything fragile. Very heavy or specialty pieces (pianos, safes, large aquariums, loaded bookcases) are often
      excluded or need special arrangements. The written estimate should say exactly what the crew will move and protect.
    </>
  ),
  sections: [
    {
      title: "What painters usually handle",
      body: (
        <Bullets
          items={[
            "Moving standard furniture (sofas, beds, tables, dressers) away from walls, usually to the center of the room.",
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
      title: "Items painters often won't move",
      body: (
        <p>
          Pianos, gun safes, large aquariums, waterbeds, fully loaded bookcases and antiques are commonly excluded because
          of weight, value or risk. If something can&apos;t be moved, the crew can usually paint around it or the estimate
          can include a specialty mover. Ask before painting day, not on it.
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
      a: "Most move standard furniture away from the walls and cover it, but ask you to clear small, fragile and valuable items first. The written estimate should say exactly what is included.",
    },
    {
      q: "Should I move furniture before painters come?",
      a: "Clear small items, valuables and electronics, and empty heavy pieces like bookcases. Leave larger furniture to the crew if the estimate includes moving it.",
    },
    {
      q: "Do painters cover floors and furniture?",
      a: "They should. Furniture is covered with plastic or drop cloths and floors are protected throughout the job.",
    },
    {
      q: "Will painters move a piano or a safe?",
      a: "Often not, because of weight and risk. The crew can paint around it, or a specialty mover can be arranged; agree on it before the job.",
    },
  ],
  limitations: <>General guidance on common practice. What is included on your project is the scope in your written estimate.</>,
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
