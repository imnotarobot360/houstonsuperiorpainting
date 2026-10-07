import { BUSINESS } from "@/lib/business"
import { OfficeCityPage, officeCityMetadata, type OfficeCityPageData } from "@/components/aeo/office-city-page"

export const metadata = officeCityMetadata({
  city: "Magnolia",
  slug: "painters-magnolia-tx",
  title: "House Painters in Magnolia TX | Houston Superior Painting",
  description:
    "Interior, exterior & cabinet painting in Magnolia, TX. $2M general liability + workers' comp, 5-year warranty. Free estimates: (346) 594-5960.",
  // No Magnolia-specific OG image exists; the site cover is used.
})

// TODO(juan): add 2–3 real Magnolia jobs with photos to lib/projects.ts (neighborhood like "Audubon, Magnolia");
// the "Recent Magnolia projects" section renders automatically when they exist.
const DATA: OfficeCityPageData = {
  city: "Magnolia",
  slug: "painters-magnolia-tx",
  areasPhrase: "Magnolia, Pinehurst, and Montgomery",
  serviceBlurbs: {
    "interior-painting-houston-tx": "Full interior repaints for Magnolia homes, from one room to the whole house.",
    "exterior-painting-houston-tx": "Exterior repaints for wood siding, brick, and acreage homes, with full prep.",
    "cabinet-refinishing-houston-tx": "Sprayed cabinet finishes that update a Magnolia kitchen without a remodel.",
    "drywall-repair-houston-tx": "Cracks, nail pops, and water damage patched and texture-matched before paint.",
    "limewash-brick-painting-houston-tx": "Limewash or painted brick for a softer look on Magnolia brick homes.",
    "soft-washing-houston-tx": "Low-pressure washing that removes pine pollen, sap film, and mildew before paint.",
  },
  neighborhoods: [
    { name: "Audubon", note: "A newer master-planned community in Magnolia with HOA design guidelines for exterior colors." },
    { name: "Woodtrace", note: "A wooded master-planned community on the Magnolia–Pinehurst side with mostly newer homes." },
    { name: "Mostyn Manor", note: "A large-lot Magnolia community where homes sit among mature trees." },
    { name: "Magnolia Ridge", note: "A Magnolia neighborhood of larger lots, where exterior prep often starts with washing off pollen and mildew." },
    { name: "High Meadow Ranch", note: "An acreage community with wooded lots and custom homes." },
    { name: "Escondido", note: "A gated Magnolia community of larger homes on wooded lots." },
    { name: "Lake Windcrest", note: "A wooded lakeside community with larger lots and a mix of brick and siding homes." },
    { name: "Downtown Magnolia", note: "The older part of town, with more wood-sided homes and trim that often needs repair before paint." },
    { name: "Decker Prairie", note: "The area around Magnolia and Pinehurst with a mix of acreage homes and smaller subdivisions." },
    { name: "Woodforest (Montgomery)", note: "A large master-planned community in neighboring Montgomery." },
  ],
  prep: [
    "Many Magnolia homes sit on large, wooded lots, and the pines leave pollen and sap on siding, trim, and gutters every spring. Paint does not stick to that film, so we soft-wash the whole exterior and let it dry before any prep or primer goes on.",
    "There is also more wood siding and more acreage homes here, often with barns, fences, or detached garages. Bare or weathered wood needs scraping and an oil- or bonding primer before the finish coats, and we plan the schedule around the extra square footage so nothing sits primed and unpainted.",
  ],
  areasAnswer:
    "All of Magnolia, including Audubon, Woodtrace, Mostyn Manor, Magnolia Ridge, High Meadow Ranch, Escondido, Lake Windcrest, Downtown Magnolia, and Decker Prairie. We also cover nearby Pinehurst, Montgomery, Tomball, and The Woodlands.",
  // The previous version of this page said 2–3 weeks; kept to avoid over-promising.
  startAnswer:
    "We typically book Magnolia jobs 2–3 weeks out. Acreage properties with several buildings can take more planning. We confirm the exact start date at the estimate.",
  nearby: ["painters-tomball-tx", "painters-the-woodlands-tx", "painters-cypress-tx", "painters-champions-forest-tx"],
  officeNote: BUSINESS.officialSiteDisclaimer,
}

export default function PaintersMagnoliaTX() {
  return <OfficeCityPage data={DATA} />
}
