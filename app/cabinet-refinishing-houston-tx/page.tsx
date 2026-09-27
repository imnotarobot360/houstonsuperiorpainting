import type { Metadata } from "next"
import Link from "next/link"
import { ServiceSkeleton, serviceUrl } from "@/components/aeo/service-skeleton"
import { generateServiceSchema } from "@/components/structured-data"
import { BUSINESS, PRICES_2026 } from "@/lib/business"

const SLUG = "cabinet-refinishing-houston-tx"
const URL = serviceUrl(SLUG)
const TITLE = "Cabinet Refinishing Houston TX | 2026 Prices & Process"
const DESCRIPTION =
  "Kitchen cabinet painting in Houston costs $100–$175 per door in 2026, or $3,000–$6,500 per kitchen. Sprayed enamel, 5-year warranty. Call (346) 594-5960."
const OG_IMAGE = "https://houstonsuperiorpainting.com/images/og/og-cabinet-refinishing.jpg"

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Canonical is this URL. /cabinet-refinishing-houston is a redirect here.
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: BUSINESS.name,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Kitchen cabinet refinishing in Houston, TX" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
}

// Min/max match the price table below (galley kitchen → large kitchen with island).
const serviceSchema = generateServiceSchema({
  name: "Cabinet Refinishing & Painting in Houston, TX",
  slug: SLUG,
  description:
    "Kitchen and bathroom cabinet painting in Houston, Katy, Cypress, Sugar Land and nearby Texas cities. Degrease, sand, bonding primer, and sprayed cabinet-grade enamel. 5-year workmanship warranty.",
  serviceType: "Cabinet Refinishing",
  minPrice: 2200,
  maxPrice: 9000,
  subServices: ["Kitchen Cabinet Refinishing", "Bathroom Vanity Painting", "Two-Tone Cabinet Painting", "Oak Cabinet Grain Filling"],
})

const faqs = [
  {
    q: "How much does cabinet painting cost in Houston in 2026?",
    a: `Cabinet painting in Houston runs $100–$175 per door and drawer front in 2026. Most kitchens cost ${PRICES_2026.cabinetsPerKitchen}; an average kitchen with 15–25 doors runs ${PRICES_2026.cabinetsAverage}.`,
  },
  {
    q: "How long does cabinet refinishing take?",
    a: "Most kitchens take three to five days. Large kitchens or oak cabinets that need grain filling can take longer, because each coat of enamel needs time to cure in Houston humidity.",
  },
  {
    q: "Do you use Sherwin-Williams or Benjamin Moore?",
    a: "Both. Benjamin Moore Advance or Sherwin-Williams Emerald Urethane Trim Enamel over a bonding primer. Both cure hard, level smoothly, and hold up to daily cleaning.",
  },
  {
    q: "What prep do you do before painting cabinets in Houston humidity?",
    a: "We remove and label every door, drawer, and hinge, degrease every surface, sand, fill oak grain if you want a smooth look, and apply a bonding primer. We give each coat full dry time before the next instead of rushing it in humid weather.",
  },
  {
    q: "How many coats do you apply?",
    a: "One coat of bonding primer and two coats of sprayed cabinet enamel, with a light sanding between coats.",
  },
  {
    q: "Can I use my kitchen during cabinet refinishing?",
    a: "Yes, with limits. Your countertops, sink, and appliances stay usable, but you'll be without cabinet doors for a few days while they are finished.",
  },
  {
    q: "Can you paint oak cabinets?",
    a: "Yes. Oak has open grain that shows through paint, so we offer grain filling before primer for a smooth, modern finish. Without it, the grain texture stays visible under the color.",
  },
  {
    q: "Are you insured in Texas?",
    a: "Texas does not license painters. We carry $2M general liability and workers' compensation, and the certificate of insurance comes with every estimate.",
  },
  {
    q: "What does the 5-year warranty cover?",
    a: "Peeling, blistering, and flaking caused by our workmanship. It does not cover damage from water intrusion, settling, or surfaces you asked us not to prep.",
  },
  {
    q: "Do you require a deposit?",
    a: "Only after you approve the estimate. The estimate is free and we collect nothing before you approve it. Once you approve, a down payment schedules the job, and the balance is due after the final walkthrough.",
  },
  {
    q: "How do I get an estimate?",
    a: `Call ${BUSINESS.phone} or request an estimate online. We count doors and drawer fronts on site and send a written scope with product and coat count within 24 hours.`,
  },
]

export default function CabinetRefinishingPage() {
  return (
    <ServiceSkeleton
      slug={SLUG}
      serviceName="Cabinet Refinishing"
      h1="Cabinet Refinishing in Houston, TX"
      quickAnswer={
        <>
          Painting kitchen cabinets in Houston costs $100–$175 per door and drawer front in 2026, or{" "}
          {PRICES_2026.cabinetsPerKitchen} for most kitchens. {BUSINESS.name} degreases, sands, bonding-primes, and
          sprays Benjamin Moore Advance or Sherwin-Williams Emerald Urethane for a factory-smooth finish, with a{" "}
          {BUSINESS.trust.warrantyYears}-year workmanship warranty. Free estimates: {BUSINESS.phone}.
        </>
      }
      beforeAfter={{
        before: "/images/cabinet-before-1.jpg",
        after: "/images/cabinet-after-1.jpg",
        beforeAlt: "Houston kitchen cabinets before refinishing",
        afterAlt: "Same Houston kitchen cabinets after sprayed enamel refinishing",
      }}
      whoFor={
        <p>
          Homeowners whose cabinet boxes are solid but whose finish is dated — golden oak, honey maple, or worn white
          paint — and who want a new color without the cost and weeks of a cabinet replacement. We paint kitchen
          cabinets, islands, bathroom vanities, and laundry and pantry cabinets, including two-tone schemes (one color
          uppers, another lowers). Weighing paint against new cabinets? See{" "}
          <Link href="/blog/cabinet-refinishing-vs-replacement-houston">cabinet refinishing vs. replacement</Link>.
        </p>
      }
      processTitle="Our cabinet refinishing process in Houston"
      steps={[
        {
          title: "Remove, label, and degrease",
          text: "Every door, drawer front, and hinge is removed and labeled for reinstallation. We degrease every surface; paint won't bond over years of cooking oil.",
        },
        {
          title: "Sand, fill, and prime",
          text: "We sand to give the primer tooth, fill oak grain if you want a smooth finish, patch old hardware holes if your new pulls use different spacing, and apply a bonding primer.",
        },
        {
          title: "Spray two coats of enamel",
          text: "Doors and drawer fronts are sprayed flat; boxes are masked and sprayed in place. Two coats of cabinet-grade enamel with a light sanding between for a smooth, brush-mark-free finish.",
        },
        {
          title: "Reinstall and walk through",
          text: "Doors are rehung and adjusted, hardware goes back on, and you inspect every cabinet with the crew lead before final payment.",
        },
      ]}
      risks={[
        <>
          <strong>Humidity slows cure.</strong> Enamel stays soft longer in Houston&apos;s humid air. Rehanging
          doors too soon causes sticking and dents, so we give each coat full dry time.
        </>,
        <>
          <strong>Grease near the stove.</strong> Kitchen grease is the most common reason cabinet paint peels. Every
          surface is degreased before sanding, not after.
        </>,
        <>
          <strong>Water damage under the sink.</strong> Leaks swell particleboard and MDF sink bases. We flag swollen
          or soft panels at the estimate; painting over them won&apos;t hold.
        </>,
        <>
          <strong>Oak grain showing through.</strong> Open-grain oak telegraphs through paint unless it is filled. We
          show you both options before we start.
        </>,
      ]}
      costTitle="Cabinet refinishing cost in Houston (2026)"
      price={{
        head: ["Kitchen size", "2026 Houston range"],
        rows: [
          ["Per door or drawer front", "$100–$175"],
          ["Galley, 10–15 doors", "$2,200–$3,500"],
          ["Average, 15–25 doors", PRICES_2026.cabinetsAverage],
          ["Large with island, 25–40 doors", "$6,000–$9,000+"],
          ["Most Houston kitchens", PRICES_2026.cabinetsPerKitchen],
        ],
        note: "Sprayed cabinet enamel, doors removed and finished flat. Grain filling, heavy repairs, and new hardware installation are quoted separately.",
      }}
      costGuide={{ label: "cost to paint kitchen cabinets in Houston", href: "/blog/cost-to-paint-kitchen-cabinets-houston-tx" }}
      paints={
        <>
          <p>
            <strong>Benjamin Moore Advance</strong> and <strong>Sherwin-Williams Emerald Urethane Trim Enamel</strong>{" "}
            are our cabinet enamels. Both are waterborne, level out like an oil finish, cure harder than wall paint, and
            wipe clean. They go over a bonding primer made for slick factory finishes. Colors can be matched from any
            Sherwin-Williams or Benjamin Moore fan deck.
          </p>
          <p>
            Why it matters in Houston: kitchens here see steam, grease, and humid air all year. A true cabinet enamel
            resists moisture at the sink and dishwasher and holds up to daily scrubbing where ordinary wall paint stays
            soft and chips. We buy at contractor pricing and pass the product through at cost.
          </p>
        </>
      }
      faqs={faqs}
      related={[
        { label: "Interior painting in Houston", href: "/interior-painting-houston-tx" },
        { label: "Drywall repair in Houston", href: "/drywall-repair-houston-tx" },
        { label: "Exterior house painting in Houston", href: "/exterior-painting-houston-tx" },
      ]}
      schema={[serviceSchema]}
    />
  )
}
