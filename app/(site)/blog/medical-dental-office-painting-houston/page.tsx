import Link from "next/link"
import { GuideArticle, guideMetadata, type GuideArticleData } from "@/components/aeo/guide-article"
import { Bullets, Steps } from "@/components/aeo/blocks"
import { BUSINESS, PRICES_2026 as P } from "@/lib/business"

// Daily calendar post (lib/blog-schedule.ts), publishes 2026-11-08.
// No claims of healthcare-specific certifications, infection-control
// credentials or past medical projects (none confirmed).

const D: GuideArticleData = {
  path: "/blog/medical-dental-office-painting-houston",
  title: "Painting Medical and Dental Offices While They Stay Open",
  description:
    "How to repaint a Houston medical or dental practice without closing: scheduling around patients, low-odor products, cleanable finishes and protecting equipment.",
  h1: "Painting medical and dental offices while they stay open",
  eyebrow: "Commercial guide",
  published: "2026-11-08",
  updated: "2026-11-08",
  quickAnswer: (
    <>
      Most medical and dental offices are repainted without closing: the work is done after hours or on weekends, room by
      room, with low-odor water-based products and finishes that stand up to frequent cleaning. The keys are a written
      phasing plan agreed with the practice, protection for equipment and furniture, clear rules for which rooms are off
      limits, and a clean, ventilated space ready for patients each morning.
    </>
  ),
  sections: [
    {
      title: "Schedule around patients",
      body: (
        <Steps
          items={[
            { title: "Map the space", text: "waiting room, front desk, exam or operatory rooms, sterilization, labs, offices and restrooms." },
            { title: "Phase it", text: "agree which rooms are painted each night or weekend so the practice can always see patients." },
            { title: "Set the hours", text: "after closing or on days the practice is closed; see after-hours commercial painting." },
            { title: "Handoff each morning", text: "rooms clean, furniture back, ventilated and ready, with a short note to the office manager." },
          ]}
        />
      ),
    },
    {
      title: "Products and finishes",
      body: (
        <Bullets
          items={[
            "Low-odor, low-VOC water-based paints, with ventilation, so rooms are comfortable for patients and staff the next day.",
            "Durable, scrubbable finishes (often eggshell or satin) in exam rooms, hallways and restrooms that are cleaned often.",
            "Semi-gloss or enamel on doors, frames and trim that take constant contact.",
            "Ask the practice which cleaning products they use, so the finish chosen holds up to them.",
          ]}
        />
      ),
    },
    {
      title: "Protecting equipment and records",
      body: (
        <p>
          Dental chairs, imaging equipment, computers and records areas should be covered or worked around, never moved
          without the practice&apos;s approval. Agree in advance which rooms the crew may not enter (for example,
          sterilization or records rooms), who supervises access, and how keys and alarms are handled. Clinical equipment
          should be moved or disconnected by the practice or its vendors, not by painters.
        </p>
      ),
    },
    {
      title: "Odor, dust and cleanup",
      body: (
        <p>
          Painting itself creates little dust, but patching and sanding do. Do repairs early in the schedule, contain the
          area, and clean thoroughly before handing rooms back. Running the HVAC with good airflow overnight helps clear any
          paint odor before patients arrive.
        </p>
      ),
    },
    {
      title: "Planning and pricing",
      body: (
        <p>
          As planning ranges, office walls run about {P.commercialOffice} per square foot of wall area, and after-hours work
          often adds {P.commercialAfterHoursPremium} to the labor. Our written proposal lists the phasing, hours, products,
          protection and any rooms excluded. {BUSINESS.insuranceProof.en} See{" "}
          <Link href="/blog/after-hours-commercial-painting-houston">after-hours commercial painting</Link>,{" "}
          <Link href="/blog/commercial-office-painting-houston">painting an occupied office</Link> and{" "}
          <Link href="/commercial-painting-houston-tx">commercial painting in Houston</Link>.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "Can a dental office be painted without closing?",
      a: "Usually yes, by painting after hours or on weekends, room by room, with low-odor paint and a clean, ventilated handoff each morning.",
    },
    {
      q: "What paint finish is best for exam rooms?",
      a: "A durable, scrubbable eggshell or satin for walls, and semi-gloss or enamel for doors and trim, chosen to hold up to the practice's cleaning products.",
    },
    {
      q: "Is paint odor a problem for patients?",
      a: "Low-odor, low-VOC water-based paints and overnight ventilation keep it minimal. Painting after hours gives the space time to air out.",
    },
    {
      q: "Who moves medical equipment before painting?",
      a: "The practice or its equipment vendors. Painters cover and work around equipment and should never move or disconnect it without approval.",
    },
  ],
  limitations: <>General guidance. Each practice&apos;s phasing, rules and products are agreed in writing before work starts.</>,
  related: [
    { label: "Commercial painting in Houston", href: "/commercial-painting-houston-tx" },
    { label: "After-hours commercial painting", href: "/blog/after-hours-commercial-painting-houston" },
    { label: "Painting an occupied office", href: "/blog/commercial-office-painting-houston" },
    { label: "How to compare commercial painting bids", href: "/blog/compare-commercial-painting-bids-houston" },
  ],
  ctaTitle: "Request a written commercial proposal",
}

export const metadata = guideMetadata(D)
export default function Page() {
  return <GuideArticle d={D} />
}
