import type { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LuxuryHero } from "@/components/luxury/luxury-hero"
import {
  LuxuryAssurance,
  LuxuryTrust,
  LuxuryServices,
  LuxuryBeforeAfter,
  LuxuryProcess,
  LuxuryProjects,
  LuxuryTestimonials,
  LuxuryInsights,
  LuxuryCTA,
} from "@/components/luxury/sections"
import { LocationsSection } from "@/components/locations-section"
import FAQ from "@/components/faq"
import Link from "next/link"
import { OFFICE_PAGES, PRICES_2026 } from "@/lib/business"

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://houstonsuperiorpainting.com/',
  },
}

const homeFaqs = [
  {
    q: "How much does it cost to paint a house in Houston?",
    a: `Interior painting in Houston typically costs ${PRICES_2026.interiorPerSqFt} per square foot of floor area, and a full interior on a 2,500 sq ft home runs ${PRICES_2026.fullInterior2500} in 2026. Exterior painting runs ${PRICES_2026.exteriorPerSqFt} per square foot of floor area (${PRICES_2026.exteriorPerHome} per home) depending on size, siding type, stories, and condition; a 2,500 sq ft two-story exterior typically runs ${PRICES_2026.exterior2500TwoStory}. We provide free detailed estimates with itemized costs and no hidden fees.`,
  },
  {
    q: "How long does exterior paint last in Houston's climate?",
    a: "Plan to repaint a Houston exterior every 5 to 7 years, and interiors every 7 to 10. Proper preparation and premium coatings are what get you to the long end of that range in Houston's humid subtropical climate. We use Sherwin-Williams Duration and Emerald, formulated for maximum durability against Houston's high humidity, intense UV exposure, and sudden temperature changes. Our 5-year warranty covers any workmanship issues.",
  },
  {
    q: "Do you offer free estimates in Katy, Cypress, and Sugar Land?",
    a: "Yes! We provide free, no-obligation estimates throughout the Greater Houston area including Katy, Cypress, Sugar Land, The Woodlands, Richmond, Fulshear, Magnolia, Tomball, and all surrounding communities. Our detailed quotes include itemized costs, timeline, paint specifications, and warranty information. Schedule online or call (346) 594-5960.",
  },
  {
    q: "What areas in Houston do you serve?",
    a: "We serve the entire Greater Houston metropolitan area including Houston, Katy, Cypress, Sugar Land, The Woodlands, Magnolia, Tomball, Pearland, Missouri City, Richmond, Fulshear, Memorial, The Heights, Bellaire, and River Oaks. If you're within 45 miles of Houston, we can help with your painting project.",
  },
  {
    q: "Are you insured for painting in Texas?",
    a: "Yes, Houston Superior Painting is fully insured with $2 million general liability coverage. We're also bonded for your protection and carry workers' compensation insurance. Certificates of insurance are available upon request for HOA requirements or property managers.",
  },
  {
    q: "How long does it take to paint a house interior?",
    a: "A typical 2,500 sq ft home interior takes 3–5 days with a crew of three for a complete paint job including walls, ceilings, trim, and doors. Smaller projects like single rooms take 1-2 days. We work efficiently while never rushing preparation—proper prep is what makes paint last. We'll provide a specific timeline in your estimate.",
  },
  {
    q: "What paint brands do you use?",
    a: "We exclusively use premium paints from Sherwin-Williams and Benjamin Moore. For interiors, we use Benjamin Moore Aura or Regal Select. For exteriors in Houston's climate, we use Sherwin-Williams Duration or Emerald. For cabinets, we use Benjamin Moore Advance or Sherwin-Williams Emerald Urethane Trim Enamel for a factory-smooth finish.",
  },
  {
    q: "Do I need to move furniture before you paint?",
    a: "We handle all furniture moving and protection as part of our service. Our crews move furniture to the center of rooms, cover everything with plastic sheeting and drop cloths, and return items to their original positions upon completion. We also cover floors, remove outlet covers, and mask all areas not being painted.",
  },
  {
    q: "What's included in your exterior painting service?",
    a: "Our exterior painting includes: pressure washing, scraping and sanding loose paint, wood rot repair (minor), caulking gaps and cracks, priming bare wood and problem areas, two coats of premium exterior paint, trim and fascia painting, and cleanup. Major repairs are quoted separately. We also offer stucco, brick, and hardie board painting.",
  },
  {
    q: "Do you require payment upfront?",
    a: "Not before you approve the estimate. Estimates are free and we don't collect any money until you approve the written estimate. After you approve, we collect a down payment to schedule the job, and the balance is due after the final walkthrough. We accept all major credit cards and checks, and offer financing options for larger projects.",
  },
]

export default function Home() {
  return (
    <>
      <Header overHero />
      <LuxuryHero />
      <LuxuryAssurance />
      <LuxuryTrust />
      <LuxuryServices />
      <LuxuryBeforeAfter />
      <LuxuryProcess />
      <LuxuryProjects />
      <LuxuryTestimonials />
      <LuxuryInsights />
      {/*
        Placed here (champagne) between LuxuryInsights (bg-background) and FAQ
        (bg-white) so no two adjacent sections share a background.
      */}
      <LocationsSection />
      <HomeKeyLinks />
      <FAQ items={homeFaqs} variant="default" />
      <LuxuryCTA />
      <Footer />
    </>
  )
}

/**
 * Compact internal-link block for the homepage linking map
 * (docs/aeo-seo-plan-2026-09.md): the five office city pages with keyword
 * anchors, plus the cost guide, About, and the estimate page. The six core
 * service pages are already linked from LuxuryServices above.
 */
function HomeKeyLinks() {
  return (
    <section aria-labelledby="home-key-links" className="bg-background py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2">
        <div>
          <h2 id="home-key-links" className="font-display text-2xl text-foreground mb-4">
            Our five painting offices
          </h2>
          <ul className="space-y-2 font-manrope text-base">
            {OFFICE_PAGES.map((o) => (
              <li key={o.slug}>
                <Link href={`/${o.slug}`} className="text-foreground underline-offset-4 hover:text-gold-deep hover:underline">
                  House painters in {o.name.replace(" (HQ)", "")}, TX{o.name.includes("(HQ)") ? " (headquarters)" : ""}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl text-foreground mb-4">Plan your painting project</h2>
          <ul className="space-y-2 font-manrope text-base">
            <li>
              <Link href="/houston-painting-cost-guide" className="text-foreground underline-offset-4 hover:text-gold-deep hover:underline">
                Houston painting cost guide (2026 prices)
              </Link>
            </li>
            <li>
              <Link href="/painting-estimate-houston" className="text-foreground underline-offset-4 hover:text-gold-deep hover:underline">
                Free painting estimate in Houston
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-foreground underline-offset-4 hover:text-gold-deep hover:underline">
                About Houston Superior Painting and owner Juan Serra
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
