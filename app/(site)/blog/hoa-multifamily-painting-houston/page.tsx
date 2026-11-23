import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-09.
// For boards and property managers (distinct from the homeowner-facing HOA
// rules post). No multifamily project claims (none confirmed).

const D: GuideArticleData = {
  path: "/blog/hoa-multifamily-painting-houston",
  title: "HOA and Multifamily Painting in Houston: Planning and Access",
  description:
    "For HOA boards and property managers: color approvals, phasing buildings, resident notices, parking and access, and keeping a community repaint on track.",
  h1: "HOA and multifamily painting: planning, access and resident communication",
  eyebrow: "Property guide",
  published: "2026-11-09",
  updated: "2026-11-09",
  quickAnswer: (
    <>
      A community repaint goes smoothly when the board approves colors and the full scope in writing before bidding,
      the work is phased building by building, residents get clear notices before their building starts, and one
      contractor contact handles questions. Plan around Houston weather, parking and pets, and get the repair items
      (wood rot, caulking, stucco) priced alongside the paint so there are fewer surprises once scaffolds are up.
    </>
  ),
  sections: [
    {
      title: "Before you bid",
      body: (
        <Steps
          items={[
            { title: "Approve the colors", text: "body, trim, doors and accents, with physical samples on a real building in daylight." },
            { title: "Write the scope", text: "which surfaces, which buildings, prep and repair standards, products and coats or coverage standard." },
            { title: "Repairs", text: "ask bidders to price known wood rot, caulking and stucco repairs, and how hidden damage is handled." },
            { title: "Rules", text: "work hours, noise, parking, ladders near units, and insurance requirements for the association." },
          ]}
        />
      ),
    },
    {
      title: "Phasing buildings",
      body: (
        <Bullets
          items={[
            "Paint one building or block at a time, so most residents are never affected at once.",
            "Wash, repair, prime and paint each building as a sequence before moving on.",
            "Plan around rain: Houston weather means flexible dates and a clear rain-delay process.",
            "Keep a walk-through checklist so each building is signed off before the crew leaves it.",
          ]}
        />
      ),
    },
    {
      title: "Resident communication",
      body: (
        <Steps
          items={[
            { title: "Advance notice", text: "a notice before work starts on each building: dates, hours, what residents need to do." },
            { title: "What to move", text: "patio furniture, plants, grills, decorations and vehicles near the building." },
            { title: "Pets and windows", text: "keep pets inside and windows closed during washing and spraying." },
            { title: "Doors", text: "front doors may need to stay open to dry; agree a schedule with each resident." },
            { title: "One contact", text: "a single contact for questions and concerns, with a quick way to reach them." },
          ]}
        />
      ),
    },
    {
      title: "Access, parking and safety",
      body: (
        <p>
          Lifts, ladders and pressure-washing equipment need space; reserve parking near the active building and mark off
          work zones. Walkways must stay safe or be clearly rerouted. The contractor should provide insurance documentation
          that meets the association&apos;s requirements: {BUSINESS.insuranceProof.en}
        </p>
      ),
    },
    {
      title: "Comparing bids",
      body: (
        <p>
          Give every bidder the same written scope, and compare the repair allowances, products, schedule and exclusions as
          closely as the totals. See{" "}
          <Link href="/blog/compare-commercial-painting-bids-houston">how to compare commercial painting bids</Link>,{" "}
          <Link href="/blog/hoa-exterior-paint-rules-houston-suburbs">HOA exterior paint rules</Link> and{" "}
          <Link href="/commercial-painting-houston-tx">commercial painting in Houston</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How long does it take to repaint a community?",
      a: "It depends on the number and size of buildings, the repairs and the weather. Phasing building by building keeps most residents unaffected at any one time; the contractor's schedule should be in writing.",
    },
    {
      q: "What should residents be told before painting?",
      a: "Dates and hours for their building, what to move away from walls and patios, pets and windows, front-door drying times, and who to contact with questions.",
    },
    {
      q: "Should repairs be included in an HOA painting bid?",
      a: "Yes. Ask bidders to price known repairs (wood rot, caulking, stucco) and explain how hidden damage is priced, so bids are comparable and surprises are fewer.",
    },
    {
      q: "Who approves the colors for an HOA repaint?",
      a: "Usually the board or architectural committee, according to the association's documents. Approve them with physical samples on a building before bidding.",
    },
  ],
  limitations: <>General guidance. Association documents, rules and insurance requirements control how each community repaint is run.</>,
  related: [
    { label: "Commercial painting in Houston", href: "/commercial-painting-houston-tx" },
    { label: "How to compare commercial painting bids", href: "/blog/compare-commercial-painting-bids-houston" },
    { label: "HOA exterior paint rules", href: "/blog/hoa-exterior-paint-rules-houston-suburbs" },
    { label: "Wood rot repair before exterior painting", href: "/blog/wood-rot-repair-before-painting-houston" },
  ],
  ctaTitle: "Request a written proposal for your community",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
