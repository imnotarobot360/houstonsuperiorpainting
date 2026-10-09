import Link from "next/link"
import { OfficeCityPage, officeCityMetadata, COST_GUIDE_PATH, type OfficeCityPageData } from "@/components/aeo/office-city-page"
import { BUSINESS, PHONE_HREF, PRICES_2026, officeAddressLine, officeForPage } from "@/lib/business"

export const metadata = officeCityMetadata({
  city: "Sugar Land",
  slug: "painters-sugar-land-tx",
  title: "House Painters in Sugar Land, TX | First Colony & Riverstone",
  description:
    "House painters in Sugar Land, TX: First Colony, Riverstone, Telfair & New Territory. Free estimates, 5-year warranty. (346) 594-5960",
  ogImage: "https://houstonsuperiorpainting.com/images/og/og-painters-sugar-land.jpg",
})

const T = BUSINESS.trust
const OFFICE = officeAddressLine(officeForPage("painters-sugar-land-tx")!)

// TODO(juan): add real Sugar Land jobs with photos to lib/projects.ts (neighborhood like "First Colony, Sugar Land");
// the "Recent Sugar Land projects" section renders automatically when they exist.
const DATA: OfficeCityPageData = {
  city: "Sugar Land",
  slug: "painters-sugar-land-tx",
  quickAnswer: (
    <>
      For Sugar Land homeowners, our office is at {OFFICE}. We repaint interiors and exteriors and refinish cabinets in
      First Colony, Riverstone, Telfair and New Territory, from older homes that need trim repair to newer builds on their
      first repaint. Houston Superior Painting has worked in Fort Bend County since {BUSINESS.founded}, carries{" "}
      {T.liabilityCoverage} in liability coverage, and backs the work with a {T.warrantyYears}-year warranty. The estimate
      is free and no money changes hands until you approve it. Call <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
    </>
  ),
  neighborhoods: [
    {
      name: "First Colony",
      note: "Sugar Land's largest master-planned community, mostly built in the 1980s and 1990s, so many homes are on their second or third repaint.",
    },
    {
      name: "Riverstone",
      note: "a master-planned community near the Brazos River that spans Sugar Land and Missouri City, with HOA review of exterior colors.",
    },
    {
      name: "Telfair",
      note: "a newer community near US-59 where homes are reaching their first repaint and design guidelines set the color palette.",
    },
    {
      name: "New Territory",
      note: "a 1990s community now part of Sugar Land, where wood trim, sills and fascia often need repair before an exterior repaint.",
    },
  ],
  prep: [
    "Older Sugar Land homes have wood trim and window sills that have absorbed decades of Gulf Coast humidity. Paint seals moisture in if the wood underneath is already soft. During prep we probe trim and sills, replace what has rotted, and prime new wood on all sides before caulk and paint.",
    "On newer Telfair and Riverstone homes the issue is different: builder paint on fiber-cement siding wears thin on the sunny sides. Those walls need a thorough wash and spot priming more than carpentry.",
  ],
  products: (
    <>
      For Sugar Land homes we spec Sherwin-Williams Duration or Emerald on exteriors, Benjamin Moore on interior walls and
      trim, and Benjamin Moore Advance or Sherwin-Williams Emerald Urethane on kitchen cabinets.
    </>
  ),
  pricesNote: (
    <>
      Trim and sill repair on older homes is priced separately, in writing. For home-size tables and what is included, read
      the <Link href={COST_GUIDE_PATH}>Houston painting cost guide</Link>.
    </>
  ),
  faqs: [
    {
      q: "Where is your Sugar Land office?",
      a: `It is at ${OFFICE}. Call ${BUSINESS.phone} to book a free estimate at your home.`,
    },
    {
      q: "Do you repair rotted trim on older First Colony homes?",
      a: "Yes. We replace soft trim, sills and fascia before painting and prime the new wood. The repair is listed and priced in your estimate, and anything found mid-job is approved by you first.",
    },
    {
      q: "Can you match HOA colors in Riverstone and Telfair?",
      a: "Yes. We work from your community's approved palette and help you submit the exterior color request before work is scheduled.",
    },
    {
      q: "How much does an interior repaint cost in Sugar Land?",
      a: `Interiors typically run ${PRICES_2026.interiorPerSqFt} per sq ft of floor area in 2026, so a 2,500 sq ft home is usually ${PRICES_2026.fullInterior2500}. Ceiling height, color changes and drywall repair move the price.`,
    },
  ],
  cta: {
    title: "Free painting estimates in Sugar Land",
    body: (
      <>
        Call <a href={PHONE_HREF} className="underline">{BUSINESS.phone}</a> or{" "}
        <a href={BUSINESS.scheduler.embedUrl} target="_blank" rel="noopener noreferrer" className="underline">
          schedule your walkthrough online
        </a>
        . You get an itemized estimate and decide with no deposit due.
      </>
    ),
  },
  nearby: ["painters-missouri-city-tx", "painters-riverstone-tx", "painters-sienna-tx", "painters-richmond-tx"],
}

export default function PaintersSugarLandTX() {
  return <OfficeCityPage data={DATA} />
}
