import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Rewritten 2026-10-12 around Benjamin Moore Command; 2026-10-14 owner added Emerald Urethane + Renner as cabinet finishes
// (High Performance Command® Waterborne Acrylic Urethane, HP3920 satin / HP3900 gloss).
// Manufacturer figures from benjaminmoore.com product page HP3920 (checked 2026-10-12):
// touch 15 min, recoat 1 h, vertical surfaces ready 1 h, foot traffic 4 h, < 50 g/L VOC,
// applies as low as 35°F, 350–450 sq ft/gal, interior/exterior, tagged Cabinet/Door/Trim.
// Owner (2026-10-11): kitchen cabinets take 7–10 days to fully cure.
// Company-specific schedules (days on site, when doors go back on) are set by the estimate.

const COMMAND_URL =
  "https://www.benjaminmoore.com/en-us/product/high-performance-command-waterborne-acrylic-urethane-satin/HP3920"

const D: GuideArticleData = {
  path: "/blog/cabinet-paint-cure-time-houston",
  title: "Cabinet Paint Cure Time: Benjamin Moore Command (7–10 Days)",
  description:
    "Benjamin Moore Command dries in 15 minutes and recoats in an hour, but painted kitchen cabinets take 7–10 days to fully cure. What that means for your kitchen.",
  h1: "How long do painted cabinets take to cure?",
  eyebrow: "Cabinet guide",
  published: "2026-10-11",
  updated: "2026-10-14",
  quickAnswer: (
    <>
      Painted kitchen cabinets take 7–10 days to fully cure. One of the cabinet finishes we spray is Benjamin Moore
      Command®, a waterborne acrylic urethane that is dry to the touch in about 15 minutes and ready for its next coat in about an
      hour. Doors and drawers can go back on and be used carefully soon after the final coat, but the finish keeps
      hardening for 7–10 days, and Houston humidity pushes that toward the longer end.
    </>
  ),
  sections: [
    {
      title: "Dry, recoat and cure are three different things",
      body: (
        <Bullets
          items={[
            <>
              <strong>Dry to the touch:</strong> the surface will not smudge if you brush it lightly. It is still soft
              underneath.
            </>,
            <>
              <strong>Recoat:</strong> the earliest the next coat can go on without disturbing the one below.
            </>,
            <>
              <strong>Full cure:</strong> the film has reached its full hardness and resistance to scuffs, cleaners and
              stacking. Before then it can dent, mark or stick to itself.
            </>,
          ]}
        />
      ),
    },
    {
      title: "Why Benjamin Moore Command works on cabinets",
      body: (
        <>
          <p>
            Command® is Benjamin Moore&apos;s waterborne acrylic urethane. The urethane makes the cured film harder and
            more resistant to scuffs and cleaning than ordinary wall or trim paint, which is what cabinet doors, drawer
            fronts and edges need. Benjamin Moore lists it for cabinets, doors and trim, for interior and exterior use,
            in satin or gloss.
          </p>
          <p>
            It is also a practical product for an occupied home: it is low-odor and low-VOC (under 50 g/L), cleans up
            with water, and dries fast enough that we can apply several coats without leaving your kitchen out of
            service for weeks.
          </p>
        </>
      ),
    },
    {
      title: "Benjamin Moore Command: drying and cure times",
      body: (
        <div className="not-prose my-6">
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left text-base">
              <thead className="bg-midnight text-soft-white">
                <tr>
                  {["Stage", "Benjamin Moore Command"].map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Dry to the touch (manufacturer)", "About 15 minutes"],
                  ["Ready to recoat (manufacturer)", "About 1 hour"],
                  ["Vertical surfaces in service (manufacturer)", "About 1 hour"],
                  ["Full cure on kitchen cabinets (our experience in Houston)", "7–10 days"],
                ].map((r) => (
                  <tr key={r[0]} className="border-t border-border odd:bg-card">
                    <th scope="row" className="px-4 py-3 font-medium text-foreground">
                      {r[0]}
                    </th>
                    <td className="px-4 py-3 text-foreground/90">{r[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Manufacturer times are for standard conditions; temperature, humidity and film thickness change them. Fast
            drying is not the same as fully cured: the finish keeps hardening for days after it feels dry.
          </p>
        </div>
      ),
    },
    {
      title: "How we apply it",
      body: (
        <Steps
          items={[
            { title: "Remove and label", text: "doors, drawer fronts and hardware come off and are labeled." },
            { title: "Clean and degrease", text: "every surface is degreased; paint will not bond to kitchen grease." },
            { title: "Sand and prime", text: "the old finish is scuffed and a bonding primer goes on so the topcoat grips." },
            {
              title: "Spray Command",
              text: "thin, even coats of Command are sprayed, with time between coats for each to dry. Thin coats dry and cure better than heavy ones.",
            },
            { title: "Reinstall", text: "doors and drawers go back on once the final coat has dried, and the cure continues in place." },
          ]}
        />
      ),
    },
    {
      title: "Why cabinets take longer to cure in Houston",
      body: (
        <>
          <p>
            Waterborne finishes like Command dry as water leaves the film. Houston&apos;s humid air slows that, and cool
            or closed-up rooms slow it more. Doors pressed against frames before the finish hardens can stick (painters
            call this blocking).
          </p>
          <p>
            Running the air conditioning, keeping air moving and spraying thin coats all help. We plan the schedule
            around the weather rather than a fixed number of hours.
          </p>
        </>
      ),
    },
    {
      title: "How to treat new cabinets during the 7–10 day cure",
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
      title: "What your estimate says",
      body: (
        <p>
          Our <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing</Link> estimates name the primer and the
          topcoat product, the sheen, the number of coats and the schedule, including when the doors go back on. The work
          carries a {BUSINESS.trust.warrantyYears}-year written workmanship warranty under the terms in the estimate. See
          finished kitchens on our <Link href="/projects">projects page</Link>, and{" "}
          <Link href="/blog/cabinet-painting-company-houston-guide">how to choose a cabinet painting company</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How long before I can use my kitchen cabinets after painting?",
      a: "You can use them carefully once the final coat is dry and the doors are back on. Benjamin Moore Command dries to the touch in about 15 minutes, but the finish takes 7–10 days to fully cure, so treat the cabinets gently during that time.",
    },
    {
      q: "How long does cabinet paint take to fully cure?",
      a: "Plan on 7–10 days for kitchen cabinets to fully cure, whether we spray Benjamin Moore Command or Sherwin-Williams Emerald Urethane. Houston humidity, cool temperatures and thick coats lengthen curing.",
    },
    {
      q: "What paint do you use on kitchen cabinets?",
      a: "Benjamin Moore Command or Sherwin-Williams Emerald Urethane Trim Enamel over a bonding primer, and Renner wood coatings on qualifying cabinet systems. Your estimate names the exact product.",
    },
    {
      q: "Why are my freshly painted cabinet doors sticking?",
      a: "Usually because the paint is dry on the surface but not fully cured, and the door is pressing against the frame or bumpers. Close the doors gently, keep air moving, and the sticking normally stops as the finish hardens.",
    },
  ],
  limitations: (
    <>
      Manufacturer times are Benjamin Moore&apos;s published figures for standard conditions. The 7–10 day cure is our
      experience on Houston kitchen cabinets, not a guarantee for every kitchen. Your written estimate sets the schedule
      for your project. Checked October 2026.
    </>
  ),
  sources: [{ label: "Benjamin Moore: High Performance Command® Waterborne Acrylic Urethane (product page)", url: COMMAND_URL }],
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
