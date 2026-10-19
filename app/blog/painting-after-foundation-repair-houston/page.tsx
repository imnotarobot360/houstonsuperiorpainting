import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-10-31.
// No waiting-period number is stated as fact: the foundation contractor or
// engineer sets it. We do not give structural advice.

const D: GuideArticleData = {
  path: "/blog/painting-after-foundation-repair-houston",
  title: "Painting After Foundation Repair: Cracks, Drywall and Timing",
  description:
    "Houston clay soil and foundation repair: why to wait before repairing cracks, what to fix first, and how to plan the repaint so cracks don't come back.",
  h1: "Painting after foundation repair: cracks, drywall and waiting times",
  eyebrow: "Repair guide",
  published: "2026-10-31",
  updated: "2026-10-31",
  quickAnswer: (
    <>
      After foundation repair, wait before patching and painting. Leveling a slab moves the house, and drywall cracks,
      sticking doors and trim gaps can keep changing for a while. Ask your foundation contractor or engineer how long to
      wait, then repair cracks properly (taped and mudded, not just caulked), caulk trim gaps with a flexible sealant,
      prime the repairs and repaint whole walls. Painting too early means the cracks often reappear.
    </>
  ),
  sections: [
    {
      title: "Why Houston homes crack",
      body: (
        <p>
          Much of the Houston area sits on expansive clay that swells when wet and shrinks in drought, so slabs move with the
          seasons. That movement shows up inside as diagonal cracks above doors and windows, cracks along drywall seams,
          gaps at crown molding and baseboards, and doors that stick or won&apos;t latch. Foundation repair addresses the
          cause; the cosmetic repairs come after.
        </p>
      ),
    },
    {
      title: "Why to wait after foundation repair",
      body: (
        <Bullets
          items={[
            "Leveling the slab moves walls and openings; some new cracks can appear and some old ones can close.",
            "The house can keep adjusting for a period afterward. Your foundation contractor or engineer can tell you how long to wait for your home.",
            "Repairing and painting before movement settles means paying to repair the same cracks twice.",
          ]}
        />
      ),
    },
    {
      title: "What to fix, in order",
      body: (
        <Steps
          items={[
            { title: "Doors and windows", text: "have sticking doors adjusted once the house has settled, so trim and jambs are repaired in their final position." },
            { title: "Drywall cracks", text: "open small cracks slightly, tape them with mesh or paper tape, mud, and sand. Caulk alone on a drywall crack usually reopens." },
            { title: "Trim gaps", text: "fill gaps at crown, casings and baseboards with a flexible, paintable sealant." },
            { title: "Texture", text: "match the wall texture over the repairs. See how painters match wall texture." },
            { title: "Prime and paint", text: "prime every repair, then repaint whole walls so the sheen is even." },
          ]}
        />
      ),
    },
    {
      title: "Exterior cracks",
      body: (
        <p>
          Outside, foundation movement can open gaps in caulk joints, mortar and stucco. Seal and repair them before an
          exterior repaint so water stays out. Cracked brick, mortar or stucco may need a mason or stucco repair first. See{" "}
          <Link href="/stucco-painting-houston-tx">stucco painting and repair</Link> and{" "}
          <Link href="/exterior-painting-houston-tx">exterior painting</Link>.
        </p>
      ),
    },
    {
      title: "How we handle it",
      body: (
        <p>
          We look at the cracks before quoting and ask when the foundation work was done. If the house may still be moving,
          we will tell you, and the estimate lists the crack repairs, trim caulking and the walls being repainted. We do not
          assess foundations; that is for your foundation contractor or a structural engineer. See{" "}
          <Link href="/drywall-repair-houston-tx">drywall repair in Houston</Link> and{" "}
          <Link href="/blog/how-painters-match-wall-texture">how painters match wall texture</Link>.{" "}
          {BUSINESS.paymentPolicy.sentence}
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How long should I wait to paint after foundation repair?",
      a: "Ask your foundation contractor or engineer; it depends on the repair and the house. Repairing and painting before movement settles often means the cracks come back.",
    },
    {
      q: "Can I just caulk drywall cracks before painting?",
      a: "Not for lasting results. Drywall cracks should be taped, mudded and sanded; caulk alone usually reopens. Use flexible sealant for trim gaps instead.",
    },
    {
      q: "Why do my walls crack in the same places?",
      a: "Cracks above doors and windows and along seams follow where the house moves. Houston's expansive clay soil makes seasonal movement common.",
    },
    {
      q: "Do painters fix foundation cracks?",
      a: "Painters repair the cosmetic damage: drywall cracks, trim gaps and texture. The foundation itself needs a foundation contractor or structural engineer.",
    },
  ],
  limitations: (
    <>General guidance, not structural advice. Your foundation contractor or engineer decides when the house is ready for cosmetic repairs.</>
  ),
  related: [
    { label: "Drywall repair in Houston", href: "/drywall-repair-houston-tx" },
    { label: "How painters match wall texture", href: "/blog/how-painters-match-wall-texture" },
    { label: "Drywall repair cost", href: "/blog/drywall-repair-cost-houston" },
    { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
  ],
  ctaTitle: "Get a written estimate for crack repair and painting",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
