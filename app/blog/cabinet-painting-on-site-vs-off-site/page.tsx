import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-04.
// The site states we remove doors and spray them flat; WHERE we spray is not
// confirmed by the owner, so the post compares both approaches neutrally and
// says the estimate states the process.

const D: GuideArticleData = {
  path: "/blog/cabinet-painting-on-site-vs-off-site",
  title: "Cabinet Painting On-Site vs. Off-Site: What's the Difference?",
  description:
    "Spraying cabinet doors in a shop vs. at your home: finish quality, time without doors, dust and odor, cost, and the questions to ask your cabinet painter.",
  h1: "Cabinet painting on-site vs. off-site",
  eyebrow: "Cabinet guide",
  published: "2026-11-04",
  updated: "2026-11-04",
  quickAnswer: (
    <>
      In both approaches, a careful painter removes the doors and drawer fronts and sprays them flat, while the cabinet
      boxes are painted in place. The difference is where the doors are sprayed. <strong>Off-site</strong> means a shop or
      spray booth: controlled dust and drying, but your kitchen is without doors longer and they travel.{" "}
      <strong>On-site</strong> means a temporary spray area at your home: no transport and often a shorter timeline, but
      more setup and containment. Either can give an excellent finish; the prep and products matter more than the location.
    </>
  ),
  sections: [
    {
      title: "Side by side",
      body: (
        <div className="not-prose my-4 overflow-x-auto">
          <table className="w-full text-left text-sm border border-border">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 font-semibold"></th>
                <th className="p-3 font-semibold">Off-site (shop)</th>
                <th className="p-3 font-semibold">On-site (at home)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dust and drying", "Controlled spray booth and drying racks", "Temporary containment; depends on setup"],
                ["Time without doors", "Usually longer (transport, shop schedule)", "Often shorter"],
                ["Odor and overspray at home", "Mostly on the boxes only", "More, contained to the work area"],
                ["Risk to doors", "Transport and handling", "Less handling"],
                ["Cabinet boxes", "Painted in place either way", "Painted in place"],
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
      title: "What matters more than location",
      body: (
        <Bullets
          items={[
            "Degreasing: kitchen grease that isn't removed is one of the most common reasons cabinet paint fails.",
            "Sanding and a bonding primer made for cabinets.",
            `A cabinet-grade enamel, such as ${BUSINESS.cabinetFinish.products[0]} or ${BUSINESS.cabinetFinish.products[1]}, not wall paint.`,
            "Doors and drawer fronts removed and finished flat, so the finish levels without runs.",
            `Cure time: about ${BUSINESS.cabinetFinish.cureDays} of gentle use after reinstallation.`,
          ]}
        />
      ),
    },
    {
      title: "Questions to ask your cabinet painter",
      body: (
        <Bullets
          items={[
            "Where will the doors and drawer fronts be sprayed, and how are they labeled and returned to the right openings?",
            "How long will the kitchen be without doors?",
            "How is the kitchen protected from dust and overspray while the boxes are painted?",
            "What primer and enamel will you use, and how many coats?",
            "Is grain filling, new hardware or repair work included?",
          ]}
        />
      ),
    },
    {
      title: "How it shows up on our estimate",
      body: (
        <p>
          Our cabinet estimates list the prep, products, coats, where and how the doors are finished, the expected timeline,
          and anything quoted separately (such as grain filling or new hardware). See{" "}
          <Link href="/cabinet-refinishing-houston-tx">cabinet refinishing in Houston</Link>,{" "}
          <Link href="/blog/cabinet-painting-company-houston-guide">how to choose a cabinet painting company</Link> and{" "}
          <Link href="/blog/fill-oak-grain-before-painting-cabinets">filling oak grain</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Is off-site cabinet painting better?",
      a: "Not automatically. A shop gives more control over dust and drying, but on-site spraying with good containment can give an excellent finish. Prep, primer and enamel matter more than location.",
    },
    {
      q: "How long will my kitchen be without cabinet doors?",
      a: "It depends on the process and the size of the kitchen. Off-site usually takes longer than on-site; your estimate should state the timeline.",
    },
    {
      q: "Are cabinet boxes painted on-site?",
      a: "Yes. In either approach, the cabinet frames and boxes are painted in place; only the doors and drawer fronts can be taken away.",
    },
    {
      q: "Should cabinet doors be sprayed or brushed?",
      a: "Spraying the doors flat gives the smoothest finish. Boxes are often sprayed or brushed and rolled, depending on the setup.",
    },
  ],
  limitations: <>General guidance. Your written estimate states the process, timeline and products for your kitchen.</>,
  related: [
    { label: "Cabinet refinishing in Houston", href: "/cabinet-refinishing-houston-tx" },
    { label: "How to choose a cabinet painting company", href: "/blog/cabinet-painting-company-houston-guide" },
    { label: "Should you fill oak grain?", href: "/blog/fill-oak-grain-before-painting-cabinets" },
    { label: "Cabinet paint cure time", href: "/blog/cabinet-paint-cure-time-houston" },
  ],
  ctaTitle: "Get a written cabinet painting estimate",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
