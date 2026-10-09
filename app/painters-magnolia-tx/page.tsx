import Link from "next/link"
import { OfficeCityPage, officeCityMetadata, COST_GUIDE_PATH, type OfficeCityPageData } from "@/components/aeo/office-city-page"
import { BUSINESS, PHONE_HREF, officeAddressLine, officeForPage } from "@/lib/business"

export const metadata = officeCityMetadata({
  city: "Magnolia",
  slug: "painters-magnolia-tx",
  title: "House Painters in Magnolia, TX | West Montgomery County",
  description:
    "House painters in Magnolia, TX and west Montgomery County: Stagecoach, Pinehurst & the Tomball area. 5-year warranty. (346) 594-5960",
  // No Magnolia-specific OG image exists; the site cover is used.
})

const T = BUSINESS.trust
const OFFICE = officeAddressLine(officeForPage("painters-magnolia-tx")!)

const DATA: OfficeCityPageData = {
  city: "Magnolia",
  slug: "painters-magnolia-tx",
  quickAnswer: (
    <>
      Houston Superior Painting serves west Montgomery County from our Magnolia office at {OFFICE}. We paint houses in
      Magnolia, Stagecoach, Pinehurst and along the Tomball line, including homes on wooded and acreage lots. Since{" "}
      {BUSINESS.founded} we have kept the same terms: a free written estimate, no money until you approve it,{" "}
      {T.liabilityCoverage} in liability insurance, and a {T.warrantyYears}-year workmanship warranty. Call{" "}
      <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
    </>
  ),
  neighborhoods: [
    {
      name: "Magnolia",
      note: "a mix of newer subdivisions and older wood-sided homes near downtown, many on lots with tall pines.",
    },
    {
      name: "Stagecoach",
      note: "a small town southeast of Magnolia where homes sit on wooded lots and shaded siding stays damp after rain.",
    },
    {
      name: "Pinehurst",
      note: "the community between Magnolia and Tomball, with acreage homes, detached garages and fences alongside smaller subdivisions.",
    },
    {
      name: "Tomball fringe",
      note: (
        <>
          the north and west edges of Tomball, where larger lots meet our Magnolia service area (see{" "}
          <Link href="/painters-tomball-tx">painters in Tomball</Link>).
        </>
      ),
    },
  ],
  prep: [
    "Every spring the pines here coat siding, trim and gutters with pollen and a sticky sap film, and the humid air keeps it there. Paint will not bond to that film. We soft-wash the whole exterior, let it dry, and only then scrape, sand and prime.",
    "Weathered wood siding is more common here than in the newer suburbs closer to Houston. Bare or gray wood gets scraped back to sound paint and primed with a bonding or oil-based primer, and on acreage properties we schedule outbuildings so nothing sits primed but unpainted through a rainy week.",
  ],
  products: (
    <>
      Exteriors in Magnolia get Sherwin-Williams Duration or Emerald for their moisture and UV resistance. Inside, we use
      Benjamin Moore, and for cabinets, Benjamin Moore Advance or Sherwin-Williams Emerald Urethane.
    </>
  ),
  pricesNote: (
    <>
      Acreage homes with detached garages or fences are priced building by building. The{" "}
      <Link href={COST_GUIDE_PATH}>Houston painting cost guide</Link> has the full 2026 tables.
    </>
  ),
  faqs: [
    {
      q: "Do you have an office in Magnolia?",
      a: `Yes. Our Magnolia office is at ${OFFICE}. Call ${BUSINESS.phone} for a free estimate.`,
    },
    {
      q: "Do you paint detached garages and fences on acreage properties?",
      a: "Yes. We can include outbuildings, fences and detached garages in the same estimate as the house, each listed and priced on its own line.",
    },
    {
      q: "When is the best time to paint a Magnolia exterior?",
      a: "Fall through spring is the most reliable window. In heavy pollen season we wash right before prep, and we avoid painting over siding that is still damp from rain or morning dew.",
    },
    {
      q: "Do you work in Stagecoach and Pinehurst?",
      a: "Yes. Our Magnolia office covers Stagecoach, Pinehurst and the Tomball area, along with the rest of west Montgomery County.",
    },
  ],
  cta: {
    title: "Get a free estimate in Magnolia",
    body: (
      <>
        Call <a href={PHONE_HREF} className="underline">{BUSINESS.phone}</a> or{" "}
        <a href={BUSINESS.scheduler.embedUrl} target="_blank" rel="noopener noreferrer" className="underline">
          book a visit online
        </a>
        . We walk the property, house and outbuildings, and send a written price.
      </>
    ),
  },
  nearby: ["painters-tomball-tx", "painters-the-woodlands-tx", "painters-cypress-tx", "painters-champions-forest-tx"],
  officeNote: BUSINESS.officialSiteDisclaimer,
}

export default function PaintersMagnoliaTX() {
  return <OfficeCityPage data={DATA} />
}
