import Link from "next/link"
import { OfficeCityPage, officeCityMetadata, COST_GUIDE_PATH, type OfficeCityPageData } from "@/components/aeo/office-city-page"
import { BUSINESS, PHONE_HREF, PRICES_2026, officeAddressLine, officeForPage } from "@/lib/business"

export const metadata = officeCityMetadata({
  city: "Katy",
  slug: "painters-katy-tx",
  title: "House Painters in Katy, TX | Cinco Ranch & Firethorne",
  description:
    "House painters in Katy, TX for Cinco Ranch, Firethorne, Cross Creek Ranch & Seven Meadows. $2M insured, 5-year warranty. (346) 594-5960",
  ogImage: "https://houstonsuperiorpainting.com/images/og/og-painters-katy.jpg",
})

const T = BUSINESS.trust
const OFFICE = officeAddressLine(officeForPage("painters-katy-tx")!)

// TODO(juan): add real Katy jobs with photos to lib/projects.ts (neighborhood like "Cinco Ranch, Katy");
// the "Recent Katy projects" section renders automatically when they exist.
const DATA: OfficeCityPageData = {
  city: "Katy",
  slug: "painters-katy-tx",
  quickAnswer: (
    <>
      Houston Superior Painting paints homes across Katy&apos;s master-planned communities from our office at {OFFICE}.
      Since {BUSINESS.founded} our crews have handled interiors, exteriors and kitchen cabinets on the brick and Hardie
      homes typical of Cinco Ranch, Firethorne, Cross Creek Ranch and Seven Meadows. We are insured for{" "}
      {T.liabilityCoverage}, the estimate is free, you pay nothing until you approve it, and the work carries a{" "}
      {T.warrantyYears}-year workmanship warranty. Call <a href={PHONE_HREF}>{BUSINESS.phone}</a>.
    </>
  ),
  neighborhoods: [
    {
      name: "Cinco Ranch",
      note: "one of the largest master-planned communities in the Katy area, with homes from the 1990s onward that are now due for second and third repaints.",
    },
    {
      name: "Firethorne",
      note: "an established community off FM 1463 with brick and fiber-cement homes, where trim and siding joints usually need fresh caulk.",
    },
    {
      name: "Cross Creek Ranch",
      note: "a newer master-planned community along FM 1463 on the Fulshear side, often painting for the first time since the builder.",
    },
    {
      name: "Seven Meadows",
      note: "a community near Cinco Ranch off the Grand Parkway with two-story brick homes and tall Hardie gables.",
    },
  ],
  prep: [
    "Katy is flat and open, so many walls get full Gulf Coast sun all afternoon and stay humid overnight. Builder-grade paint on south- and west-facing Hardie siding chalks and fades first. We wash the chalk off, re-caulk where siding meets brick, and spot-prime bare fiber cement so the new coat bonds instead of peeling.",
    "Nearly every Katy community has an HOA that approves exterior colors. We work from your approved color list and submit the request before work starts.",
  ],
  products: (
    <>
      On Katy exteriors we use Sherwin-Williams Duration or Emerald. Interiors get Benjamin Moore, and cabinets get Benjamin
      Moore Advance or Sherwin-Williams Emerald Urethane.
    </>
  ),
  pricesNote: (
    <>
      A two-story Katy home of 2,500 sq ft often runs {PRICES_2026.exterior2500TwoStory} outside. These are typical ranges,
      not a quote; the <Link href={COST_GUIDE_PATH}>Houston painting cost guide</Link> breaks them down by home size.
    </>
  ),
  faqs: [
    {
      q: "Is there a Katy office?",
      a: `Yes. Our Katy office is at ${OFFICE}. Call ${BUSINESS.phone} to set up a free estimate.`,
    },
    {
      q: "Do you handle HOA color approval in Cinco Ranch and Cross Creek Ranch?",
      a: "Yes. We pick colors from your community's approved list and submit the request with you before any exterior work begins, so the crew is not waiting on a decision.",
    },
    {
      q: "What does it cost to paint a two-story house exterior in Katy?",
      a: `A 2,500 sq ft two-story exterior typically runs ${PRICES_2026.exterior2500TwoStory} in 2026. Rotted trim and heavy caulk failure add to that, and both are priced in writing before work starts.`,
    },
    {
      q: "Do you paint Hardie siding?",
      a: "Yes. Fiber-cement siding is most of what we paint in Katy. It needs washing, fresh caulk at the joints and spot priming of any bare edges before two finish coats.",
    },
  ],
  cta: {
    title: "Get a free painting estimate in Katy",
    body: (
      <>
        Call <a href={PHONE_HREF} className="underline">{BUSINESS.phone}</a> or{" "}
        <a href={BUSINESS.scheduler.embedUrl} target="_blank" rel="noopener noreferrer" className="underline">
          book a walkthrough
        </a>
        . We will look at your home, then send a written, itemized price.
      </>
    ),
  },
  nearby: ["painters-cinco-ranch-tx", "painters-fulshear-tx", "painters-richmond-tx", "painters-cypress-tx"],
}

export default function PaintersKatyTX() {
  return <OfficeCityPage data={DATA} />
}
