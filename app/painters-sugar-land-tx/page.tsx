import { OfficeCityPage, officeCityMetadata, type OfficeCityPageData } from "@/components/aeo/office-city-page"

export const metadata = officeCityMetadata({
  city: "Sugar Land",
  slug: "painters-sugar-land-tx",
  title: "House Painters in Sugar Land TX | Houston Superior Painting",
  description:
    "House painters from our Sugar Land office on University Blvd. Interior, exterior, cabinets. $2M insured, 5-year warranty. Free estimates: (346) 594-5960.",
  ogImage: "https://houstonsuperiorpainting.com/images/og/og-painters-sugar-land.jpg",
})

// TODO(juan): add 2–3 real Sugar Land jobs with photos to lib/projects.ts (neighborhood like "First Colony, Sugar Land");
// the "Recent Sugar Land projects" section renders automatically when they exist.
const DATA: OfficeCityPageData = {
  city: "Sugar Land",
  slug: "painters-sugar-land-tx",
  areasPhrase: "Sugar Land, Missouri City, and Stafford",
  serviceBlurbs: {
    "interior-painting-houston-tx": "Full interior repaints, from a single room to the whole house, walls to trim.",
    "exterior-painting-houston-tx": "Exterior repaints with rotted trim repaired first and colors matched to HOA rules.",
    "cabinet-refinishing-houston-tx": "Sprayed cabinet finishes that modernize an older Sugar Land kitchen.",
    "drywall-repair-houston-tx": "Settling cracks, water stains, and old anchor holes patched and texture-matched.",
    "limewash-brick-painting-houston-tx": "Limewash or mineral paint to refresh dated brick without hiding its texture.",
    "soft-washing-houston-tx": "Low-pressure washing that removes mildew and chalk before a repaint.",
  },
  neighborhoods: [
    { name: "First Colony", note: "Sugar Land's largest master-planned community, with many homes from the 1980s and 1990s that are now on their second or third repaint." },
    { name: "Sugar Creek", note: "One of Sugar Land's older established neighborhoods, with mature trees and more original wood trim." },
    { name: "Sweetwater", note: "An established community of larger custom homes where detailed trim work is a big part of the job." },
    { name: "Telfair", note: "A newer master-planned community near US-59 with HOA design guidelines for exterior colors." },
    { name: "Riverstone", note: "A master-planned community near the Brazos River that spans Sugar Land and Missouri City, with HOA review of exterior colors." },
    { name: "Imperial", note: "Newer homes built around the historic Imperial Sugar site near downtown Sugar Land." },
    { name: "New Territory", note: "A 1990s master-planned community now part of Sugar Land, where many homes are due for exterior repaints." },
    { name: "Greatwood", note: "A master-planned community with a Sugar Land address in unincorporated Fort Bend County." },
    { name: "Commonwealth", note: "An established Sugar Land neighborhood where older homes often need trim repair before an exterior repaint." },
    { name: "Sienna (Missouri City)", note: "A large master-planned community in Missouri City, served from our Sugar Land office." },
  ],
  prep: [
    "Much of Sugar Land, especially First Colony, was built in the 1980s and 1990s. Those homes have wood trim, fascia, and window sills that have been through several Houston summers and repaints. Before we paint, we probe the trim for soft wood, replace what has rotted, and prime the new wood, because paint over rot fails within a season or two.",
    "Sugar Land HOAs are strict about exterior colors, and some require specific brands or sheens. We pull your community's approved color list and submit the ARC form before work starts, so the job is not held up waiting on approval.",
  ],
  areasAnswer:
    "All of Sugar Land, including First Colony, Sugar Creek, Sweetwater, Telfair, Riverstone, Imperial, New Territory, Greatwood, and Commonwealth. From the Sugar Land office we also cover Missouri City, Sienna, and Stafford.",
  // The previous version of this page said 2–3 weeks; kept to avoid over-promising.
  startAnswer:
    "We typically book Sugar Land jobs 2–3 weeks out. We confirm the exact start date at the estimate and can sometimes fit in urgent projects sooner.",
  nearby: [
    "painters-missouri-city-tx",
    "painters-riverstone-tx",
    "painters-sienna-tx",
    "painters-richmond-tx",
    "painters-houston-tx",
  ],
}

export default function PaintersSugarLandTX() {
  return <OfficeCityPage data={DATA} />
}
