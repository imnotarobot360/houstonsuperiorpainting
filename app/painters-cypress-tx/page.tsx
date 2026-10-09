import Link from "next/link"
import { OfficeCityPage, officeCityMetadata, COST_GUIDE_PATH, type OfficeCityPageData } from "@/components/aeo/office-city-page"
import { BUSINESS, PHONE_HREF, PRICES_2026, officeAddressLine, officeForPage } from "@/lib/business"

export const metadata = officeCityMetadata({
  city: "Cypress",
  slug: "painters-cypress-tx",
  title: "House Painters in Cypress, TX | Headquarters Crew",
  description:
    "Cypress, TX house painters working from our Huffmeister Rd headquarters. Bridgeland, Towne Lake, Fairfield & Coles Crossing. (346) 594-5960",
  ogImage: "https://houstonsuperiorpainting.com/images/og/og-painters-cypress.jpg",
})

const T = BUSINESS.trust
const OFFICE = officeAddressLine(officeForPage("painters-cypress-tx")!)

const DATA: OfficeCityPageData = {
  city: "Cypress",
  slug: "painters-cypress-tx",
  quickAnswer: (
    <>
      Cypress is home base. {BUSINESS.founder.name} founded Houston Superior Painting here in {BUSINESS.founded}, and our
      headquarters is at {OFFICE}. Crews leave from here every morning for interior, exterior and cabinet work in
      Bridgeland, Towne Lake, Fairfield and Coles Crossing. Every job is covered by {T.liabilityCoverage} liability
      insurance and a {T.warrantyYears}-year workmanship warranty, and nothing is due until you approve the written
      estimate. Call <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
    </>
  ),
  neighborhoods: [
    {
      name: "Bridgeland",
      note: "a large master-planned community west of US-290 with newer homes and design guidelines for exterior colors.",
    },
    {
      name: "Towne Lake",
      note: "built around a recreational lake, with a mix of brick and fiber-cement homes that take a lot of reflected sun and moisture.",
    },
    {
      name: "Fairfield",
      note: "an established community off US-290 where many homes are due for their first or second full exterior repaint.",
    },
    {
      name: "Coles Crossing",
      note: "an older Cypress community with mature trees, where shaded siding and trim need mildew treatment before paint.",
    },
  ],
  prep: [
    "Cypress has more tree cover than most of the Houston area. Walls under a canopy and on the north side stay damp for days after rain, and mildew grows on them. Paint rolled over mildew lets go within a couple of seasons, so those walls get a soft wash with a mildewcide and a full day to dry before primer.",
    "Wood trim and fascia under the trees also soften over time. We probe it during prep and replace rotted sections before painting, with the price approved by you first.",
  ],
  products: (
    <>
      Products are named in the estimate: Sherwin-Williams Duration or Emerald outside, Benjamin Moore inside, and Benjamin
      Moore Advance or Sherwin-Williams Emerald Urethane on cabinets, like the{" "}
      <Link href="/projects/cypress-two-tone-kitchen-cabinets">two-tone kitchen we refinished in Cypress</Link>.
    </>
  ),
  pricesNote: (
    <>
      Ranges are typical for Cypress in 2026, not a quote. A single room runs {PRICES_2026.singleRoom}. See how each number
      is built in the <Link href={COST_GUIDE_PATH}>Houston painting cost guide</Link>.
    </>
  ),
  faqs: [
    {
      q: "Is Cypress your headquarters?",
      a: `Yes. Our headquarters is at ${OFFICE}, and it is where the company started in ${BUSINESS.founded}. Call ${BUSINESS.phone}.`,
    },
    {
      q: "How do you deal with mildew on shaded Cypress homes?",
      a: "We soft-wash shaded walls with a mildewcide, let them dry completely, prime any bare wood, and then apply two finish coats. Painting over live mildew is the most common reason shaded Cypress exteriors peel early.",
    },
    {
      q: "Do you paint in Bridgeland and Towne Lake?",
      a: "Yes, regularly. Both communities review exterior colors, so we choose from the approved list with you and get the request submitted before the crew starts.",
    },
    {
      q: "How much does cabinet refinishing cost in Cypress?",
      a: `Most kitchens run ${PRICES_2026.cabinetsPerKitchen} in 2026, about ${PRICES_2026.cabinetsPerDoor} per door and drawer front. The count of fronts and any color change set the final price.`,
    },
  ],
  cta: {
    title: "Book a free estimate with our Cypress team",
    body: (
      <>
        Call <a href={PHONE_HREF} className="underline">{BUSINESS.phone}</a> or{" "}
        <a href={BUSINESS.scheduler.embedUrl} target="_blank" rel="noopener noreferrer" className="underline">
          pick a time online
        </a>
        . The walkthrough is free and the price comes in writing.
      </>
    ),
  },
  nearby: ["painters-tomball-tx", "painters-champions-forest-tx", "painters-cypress-creek-tx", "painters-katy-tx", "painters-magnolia-tx"],
}

export default function PaintersCypressTX() {
  return <OfficeCityPage data={DATA} />
}
