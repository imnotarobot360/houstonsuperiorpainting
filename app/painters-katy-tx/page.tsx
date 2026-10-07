import Link from "next/link"
import { OfficeCityPage, officeCityMetadata, type OfficeCityPageData } from "@/components/aeo/office-city-page"

export const metadata = officeCityMetadata({
  city: "Katy",
  slug: "painters-katy-tx",
  title: "House Painters in Katy TX | Houston Superior Painting",
  description:
    "Interior, exterior & cabinet painting in Katy, TX. $2M general liability + workers' comp, 5-year warranty. Free estimates: (346) 594-5960.",
  ogImage: "https://houstonsuperiorpainting.com/images/og/og-painters-katy.jpg",
})

// TODO(juan): add 2–3 real Katy jobs with photos to lib/projects.ts (neighborhood like "Cinco Ranch, Katy");
// the "Recent Katy projects" section renders automatically when they exist.
const DATA: OfficeCityPageData = {
  city: "Katy",
  slug: "painters-katy-tx",
  areasPhrase: "Katy, Cinco Ranch, and Fulshear",
  serviceBlurbs: {
    "interior-painting-houston-tx": "Repaints that replace flat builder-grade paint with washable finishes, walls to trim.",
    "exterior-painting-houston-tx": "Brick, Hardie siding, and trim repainted in HOA-approved colors with full prep.",
    "cabinet-refinishing-houston-tx": "Sprayed cabinet finishes that update a Katy kitchen without new boxes or doors.",
    "drywall-repair-houston-tx": "Settling cracks, nail pops, and corner-bead damage fixed and texture-matched.",
    "limewash-brick-painting-houston-tx": "Limewash or painted brick to update the brick fronts common across Katy.",
    "soft-washing-houston-tx": "Low-pressure washing that cleans siding, soffits, and brick before paint.",
  },
  neighborhoods: [
    { name: "Cinco Ranch", note: "One of the largest master-planned communities in the Katy area, with homes built from the 1990s onward and HOA review of exterior colors." },
    { name: "Cross Creek Ranch", note: "A newer master-planned community along FM 1463 on the Fulshear side of Katy." },
    { name: "Elyson", note: "A newer master-planned community in north Katy with HOA design guidelines for exterior colors." },
    { name: "Cane Island", note: "A master-planned community inside Katy city limits, north of I-10, with mostly newer construction." },
    { name: "Firethorne", note: "An established master-planned community off FM 1463 with brick and fiber-cement homes." },
    { name: "Seven Meadows", note: "A master-planned community near Cinco Ranch off the Grand Parkway with two-story brick homes." },
    { name: "Grand Lakes", note: "An established Katy-area neighborhood south of I-10 where many homes are due for a second repaint." },
    { name: "Old Katy", note: "The historic area around downtown Katy, with older homes and more wood siding and trim than the master-planned communities." },
    { name: "Tamarron", note: "A newer master-planned community on the Fulshear side of Katy." },
    { name: "Nottingham Country", note: "An older, established Katy-area neighborhood where trim repair is often part of an exterior repaint." },
  ],
  prep: [
    "Katy is mostly master-planned communities built from the 2000s through the 2020s, and nearly every one has an HOA that controls exterior colors. We pull the approved color list and submit the ARC form before work starts, so the job is not held up waiting on approval.",
    "Most of these homes are brick with Hardie (fiber-cement) siding and wood or composite trim. The brick rarely needs paint, but the siding and trim on south- and west-facing walls take the full afternoon sun and chalk and fade first. We wash off the chalk, re-caulk the joints where siding meets brick, and prime any bare spots so the new coat bonds instead of peeling.",
  ],
  areasAnswer:
    "All of Katy, including Cinco Ranch, Cross Creek Ranch, Elyson, Cane Island, Firethorne, Seven Meadows, Grand Lakes, Old Katy, Tamarron, and Nottingham Country. We also cover nearby Fulshear, Richmond, and Rosenberg.",
  nearby: [
    "painters-cinco-ranch-tx",
    "painters-fulshear-tx",
    "painters-richmond-tx",
    "painters-cypress-tx",
    "painters-sugar-land-tx",
  ],
  nearbyNote: (
    <>
      Comparing contractors? Read our guide to finding{" "}
      <Link href="/blog/painters-near-me-katy-tx">painters near me in Katy</Link>.
    </>
  ),
}

export default function PaintersKatyTX() {
  return <OfficeCityPage data={DATA} />
}
