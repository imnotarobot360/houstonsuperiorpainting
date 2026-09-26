import { OfficeCityPage, officeCityMetadata, type OfficeCityPageData } from "@/components/aeo/office-city-page"

export const metadata = officeCityMetadata({
  city: "Cypress",
  slug: "painters-cypress-tx",
  title: "House Painters in Cypress TX | Houston Superior Painting",
  description:
    "House painters from our Cypress headquarters on Huffmeister Rd. $2M insured, 5-year warranty, free written estimates in 24 hours. Call (346) 594-5960.",
  ogImage: "https://houstonsuperiorpainting.com/images/og/og-painters-cypress.jpg",
})

const DATA: OfficeCityPageData = {
  city: "Cypress",
  slug: "painters-cypress-tx",
  areasPhrase: "Cypress, Bridgeland, Towne Lake, and Fairfield",
  serviceBlurbs: {
    "interior-painting-houston-tx": "Walls, ceilings, trim, and doors, with furniture protected and floors covered every day.",
    "exterior-painting-houston-tx": "Wash, scrape, caulk, and prime before two finish coats on brick, siding, and trim.",
    "cabinet-refinishing-houston-tx": "Sprayed, factory-smooth cabinet finishes for Cypress kitchens without a remodel.",
    "drywall-repair-houston-tx": "Cracks, nail pops, and water spots patched and texture-matched before paint.",
    "limewash-brick-painting-houston-tx": "Limewash or mineral paint to update the orange and red brick common in Cypress.",
    "soft-washing-houston-tx": "Low-pressure washing to kill the mildew that grows on shaded Cypress siding.",
  },
  neighborhoods: [
    { name: "Bridgeland", note: "A large master-planned community west of US-290 with newer homes and HOA design guidelines for exterior colors." },
    { name: "Towne Lake", note: "A master-planned community built around a large recreational lake, with a mix of brick and fiber-cement homes." },
    { name: "Fairfield", note: "An established master-planned community off US-290 where many homes are due for their first or second full exterior repaint." },
    { name: "Cypress Creek Lakes", note: "A lake-oriented master-planned community with an active HOA and architectural review for color changes." },
    { name: "Coles Crossing", note: "An established Cypress community with mature trees and an HOA that reviews exterior changes." },
    { name: "Blackhorse Ranch", note: "A neighborhood built around a golf course, with larger two-story homes and plenty of exterior trim." },
    { name: "Lakes of Fairhaven", note: "A Cypress subdivision with neighborhood lakes and a mix of one- and two-story brick homes." },
    { name: "Canyon Lakes West", note: "An established Cypress neighborhood where older wood trim often needs repair before repainting." },
    { name: "Lakewood Forest", note: "An older, heavily wooded neighborhood where shade and moisture make mildew prep a priority." },
    { name: "Longwood", note: "An established community with mature trees and homes that often need trim and fascia repair before paint." },
  ],
  prep: [
    "Cypress has more tree cover than most of Greater Houston, and shade is hard on paint. North-facing walls and anything under a canopy stay damp after rain and grow mildew, and paint rolled over mildew peels within a couple of seasons. We soft-wash those walls with a mildewcide first, let them dry fully, and prime any bare wood before the finish coats go on.",
    "Most Cypress homes sit in HOA communities such as Bridgeland, Towne Lake, and Cypress Creek Lakes that restrict exterior colors. We pull the approved color list and submit the ARC form before work starts, so the job is not held up waiting on approval.",
  ],
  areasAnswer:
    "All of Cypress, including Bridgeland, Towne Lake, Fairfield, Cypress Creek Lakes, Coles Crossing, Blackhorse Ranch, Lakes of Fairhaven, Canyon Lakes West, Lakewood Forest, and Longwood. From the Cypress headquarters we also cover Tomball, Champions Forest, Cypress Creek, Spring, and The Woodlands.",
  nearby: [
    "painters-tomball-tx",
    "painters-champions-forest-tx",
    "painters-cypress-creek-tx",
    "painters-the-woodlands-tx",
    "painters-katy-tx",
    "painters-magnolia-tx",
  ],
}

export default function PaintersCypressTX() {
  return <OfficeCityPage data={DATA} />
}
