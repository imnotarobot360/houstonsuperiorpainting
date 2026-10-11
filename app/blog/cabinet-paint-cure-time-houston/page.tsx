import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Figures from the manufacturers (checked 2026-10-11):
// - Sherwin-Williams Emerald Urethane Trim Enamel PDS: touch 1 h, recoat 4 h @ 77°F / 50% RH; no full-cure figure.
// - Benjamin Moore Advance product pages: dry 4–6 h, recoat 16 h, return to service 7 days, apply 50–90°F.
// Company-specific day counts (days on site, when doors go back on) are NOT stated: the estimate sets them.

const D: GuideArticleData = {
  path: "/blog/cabinet-paint-cure-time-houston",
  title: "How Long Do Painted Cabinets Take to Cure? | Houston Guide",
  description:
    "Dry is not cured. Dry, recoat and return-to-service times for Benjamin Moore Advance and Sherwin-Williams Emerald Urethane, why Houston humidity slows them, and how to care for new cabinets.",
  h1: "How long do painted cabinets take to cure?",
  eyebrow: "Cabinet guide",
  published: "2026-10-11",
  updated: "2026-10-11",
  quickAnswer: (
    <>
      Painted cabinets are dry to the touch within hours, but the finish keeps hardening for days. Benjamin Moore lists
      Advance as dry in 4–6 hours, ready to recoat in 16 hours and returned to service in 7 days. Sherwin-Williams lists
      Emerald Urethane Trim Enamel as dry to the touch in 1 hour and ready to recoat in 4 hours at 77°F and 50% humidity.
      Houston humidity and thick coats slow both, so treat the first week gently.
    </>
  ),
  sections: [
    {
      title: "Dry, recoat and cure are three different things",
      body: (
        <Bullets
          items={[
            <><strong>Dry to the touch:</strong> the surface will not smudge if you brush it lightly. It is still soft underneath.</>,
            <><strong>Recoat:</strong> the earliest the next coat can go on without disturbing the one below.</>,
            <><strong>Return to service / cure:</strong> the film is hard enough for normal use. Before then it can dent, mark or stick to itself.</>,
          ]}
        />
      ),
    },
    {
      title: "Manufacturer times for the cabinet paints we use",
      body: (
        <div className="not-prose my-6">
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-base">
              <thead className="bg-midnight text-soft-white">
                <tr>
                  {["Stage", "Benjamin Moore Advance", "Sherwin-Williams Emerald Urethane"].map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Dry to the touch", "4–6 hours", "1 hour"],
                  ["Ready to recoat", "16 hours", "4 hours"],
                  ["Return to service", "7 days", "Not stated on the data sheet"],
                  ["Conditions", "Apply at 50–90°F", "Times at 77°F, 50% humidity"],
                ].map((r) => (
                  <tr key={r[0]} className="border-t border-border odd:bg-card">
                    <th scope="row" className="px-4 py-3 font-medium text-foreground">
                      {r[0]}
                    </th>
                    <td className="px-4 py-3 text-foreground/90">{r[1]}</td>
                    <td className="px-4 py-3 text-foreground/90">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Both manufacturers note that temperature, humidity and film thickness change these times. Check the data sheet for
            your exact product and sheen.
          </p>
        </div>
      ),
    },
    {
      title: "Why cabinets take longer to cure in Houston",
      body: (
        <>
          <p>
            Waterborne cabinet paints dry as water leaves the film. Houston&apos;s humid air slows that, and cool or
            closed-up rooms slow it more. Thick coats take longer than thin ones, and doors stacked or hung too soon can
            stick to their frames (painters call this blocking).
          </p>
          <p>
            Running the air conditioning, keeping air moving, and spraying thin, even coats all help. A good cabinet painter
            plans the schedule around these conditions rather than a fixed number of hours.
          </p>
        </>
      ),
    },
    {
      title: "How to treat new cabinets in the first week",
      body: (
        <Bullets
          items={[
            "Open and close doors and drawers gently; do not let them slam.",
            "Wipe spills with a soft, damp cloth. Skip scrubbing pads and strong cleaners.",
            "Keep tape, sticky notes and adhesive hooks off the doors.",
            "Do not hang heavy towels or bags on door edges.",
            "Load dishes and pantry items back carefully so nothing scrapes the inside faces.",
            "Keep the house cool and the air moving; it helps the finish harden.",
          ]}
        />
      ),
    },
    {
      title: "What your estimate should say",
      body: (
        <p>
          Ask for the primer and topcoat by name, the number of coats, and the schedule: when doors and drawer fronts are
          removed, when they go back on, and when the kitchen can be used normally. Our{" "}
          <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing</Link> estimates name the products and the
          schedule in writing, and the work carries a {BUSINESS.trust.warrantyYears}-year written workmanship warranty under
          the terms in the estimate. For choosing a painter, see{" "}
          <Link href="/blog/cabinet-painting-company-houston-guide">how to choose a cabinet painting company</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How long before I can use my kitchen cabinets after painting?",
      a: "You can usually use them carefully once the final coat is dry to the touch and the doors are back on, but the finish keeps hardening for days. Benjamin Moore lists 7 days to return to service for Advance. Treat the cabinets gently for the first week.",
    },
    {
      q: "How long does cabinet paint take to fully cure?",
      a: "It depends on the product and conditions. Benjamin Moore lists Advance at 7 days to return to service. Sherwin-Williams lists drying and recoat times for Emerald Urethane but no full-cure figure on its data sheet. Humidity, cool temperatures and thick coats lengthen curing.",
    },
    {
      q: "Why are my freshly painted cabinet doors sticking?",
      a: "Usually because the paint is dry on the surface but not cured, and the door is pressing against the frame or bumpers. Leave the doors closed gently, keep air moving, and the sticking normally stops as the finish hardens.",
    },
    {
      q: "Can I clean painted cabinets right away?",
      a: "Wipe spills with a soft, damp cloth. Wait until the finish has cured before scrubbing or using stronger cleaners.",
    },
  ],
  limitations: (
    <>
      Times are the manufacturers&apos; published figures under stated conditions, not a promise for your kitchen. Your
      written estimate sets the schedule for your project. Checked October 2026.
    </>
  ),
  sources: [
    { label: "Benjamin Moore: Advance Interior Paint, Semi-Gloss (dry, recoat, return to service)", url: "https://benjaminmoore.com/en-ca/product/K793" },
    { label: "Benjamin Moore: Advance Interior Paint, Satin (recoat, application temperature)", url: "https://www.benjaminmoore.com/en-us/product/0792" },
    { label: "Sherwin-Williams: Emerald Urethane Trim Enamel product data sheet", url: "https://www.sherwin-williams.com/document/PDS/en/035777948040/" },
  ],
  related: [
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "How to choose a cabinet painting company", href: "/blog/cabinet-painting-company-houston-guide" },
    { label: "Cost to paint kitchen cabinets", href: "/blog/cost-to-paint-kitchen-cabinets-houston-tx" },
    { label: "Houston painting cost guide", href: "/houston-painting-cost-guide" },
  ],
  ctaTitle: "Get a free cabinet refinishing estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
