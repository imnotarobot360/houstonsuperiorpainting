// Area-specific content for the service × area pages (components/geo-service-page-template.tsx).
//
// Why: these pages shared ~70% of their text once the city name was swapped
// (docs/content-consolidation-plan.csv). Juan chose to rewrite them with local
// detail rather than merge them (2026-10-25).
//
// Rules for this file:
//   - `homes` and `approvals` hold general, publicly known facts about the area
//     (housing age and type, HOA / city review). Keep them qualitative: no lot
//     sizes, years or counts unless sourced.
//   - Project facts come only from lib/projects.ts (confirmed jobs).
//   - Anything Juan has not confirmed is listed in docs/area-notes-review.md.
//   - Never a price here: prices come from lib/pricing.ts.
//   - No lead-safe / EPA RRP claims (CLAUDE.md: not confirmed).

import { officeAddressLine, officeForPage } from "@/lib/business"

const addressOf = (pageSlug: string) => {
  const o = officeForPage(pageSlug)
  return o ? officeAddressLine(o) : ""
}

export type AreaService = "interior-painting" | "exterior-painting" | "cabinet-refinishing"

export interface AreaNotes {
  /** What the housing stock is like, in plain words. */
  homes: string
  /** HOA, deed-restriction or city review that affects the work, if any. */
  approvals: string
  /** What we plan for on this kind of job in this area. 2–4 points each. */
  byService: Record<AreaService, string[]>
  /** Area-specific questions; added ahead of the page's general FAQs. */
  faqs: { question: string; answer: string }[]
}

export const AREA_NOTES: Record<string, AreaNotes> = {
  "katy-cinco-ranch": {
    homes:
      "Cinco Ranch and the neighborhoods around it are master-planned communities built mostly from the 1990s on, so many homes are now on their first or second repaint. Our Katy jobs include stucco exteriors in tan and in white, and painted kitchens on two-story family homes.",
    approvals:
      "Cinco Ranch, Cross Creek Ranch and most Katy-area communities have an HOA, and exterior color changes usually need architectural approval first. We give you the color names, codes and sheens for the application and schedule exterior work after approval.",
    byService: {
      "interior-painting": [
        "Two-story family rooms and stairwells with tall walls: we plan ladders, planks or scaffolding before the first day.",
        "Builder-grade flat paint that scuffs easily: we usually recommend a washable matte or eggshell in halls and kids' rooms.",
        "Open floor plans where one wall color runs through several rooms, so the color and sheen are chosen once for the whole space.",
      ],
      "exterior-painting": [
        "Stucco: cracks are sealed before coating, and we use a masonry-rated or elastomeric product where the stucco moves.",
        "Fiber-cement siding and wood trim over brick: caulk joints and rotted trim are repaired before paint.",
        "HOA color approval is built into the schedule, not left until the week of the job.",
      ],
      "cabinet-refinishing": [
        "Stained oak and maple builder cabinets from the 1990s and 2000s: degreased, sanded and primed with a bonding primer so the new color holds.",
        "Two-tone kitchens, such as white perimeter with a navy island, as on our Katy white and navy kitchen.",
        "Large kitchens with islands and built-ins: your estimate counts every door, drawer and panel.",
      ],
    },
    faqs: [
      {
        question: "Do I need HOA approval to paint my house in Cinco Ranch?",
        answer:
          "For a color change, usually yes: most Katy-area HOAs, including Cinco Ranch, review exterior colors. Repainting in the same approved colors often needs no new approval, but check your community's rules. We give you the color codes and sheens for the application.",
      },
    ],
  },

  "cypress-bridgeland": {
    homes:
      "Cypress is where we are headquartered. It mixes established 1980s and 1990s subdivisions with newer master-planned communities such as Bridgeland. Our Cypress jobs include wood rot repair and repainting on an older home, two painted kitchens, and a commercial office.",
    approvals:
      "Bridgeland and most newer Cypress communities have HOA design guidelines, and exterior color changes usually need approval. Older subdivisions may only have deed restrictions. We check which applies before scheduling exterior work.",
    byService: {
      "interior-painting": [
        "Newer Bridgeland homes with builder flat paint and open plans: one consistent color and sheen plan across the main living area.",
        "Older Cypress homes with textured walls and wood trim that may need priming before a color change.",
        "We are based in Cypress, so estimate visits and touch-ups after the walkthrough are close by.",
      ],
      "exterior-painting": [
        "Older homes: rotted fascia, trim and siding are repaired before paint, as on our Cypress wood rot repair job.",
        "Brick-and-siding homes: siding and trim are prepped and caulked; brick is left unpainted unless you ask for painted brick or limewash.",
        "HOA color approval is scheduled before the start date in Bridgeland and similar communities.",
      ],
      "cabinet-refinishing": [
        "Two-tone and color kitchens, such as our Cypress two-tone and white-and-teal kitchens.",
        "Stained builder cabinets: degreased, sanded and bonding-primed before a cabinet-grade enamel.",
        "Doors and drawer fronts are removed, labeled and sprayed in a contained area at your home.",
      ],
    },
    faqs: [
      {
        question: "Where are you located in Cypress?",
        answer:
          `Our headquarters is at ${addressOf("painters-cypress-tx")}. Estimates are done at your home anywhere in Cypress and Bridgeland.`,
      },
    ],
  },

  "sugar-land": {
    homes:
      "Sugar Land's established neighborhoods, such as First Colony, have many brick homes from the 1980s and 1990s, while Telfair, Riverstone and nearby Sienna are newer. We have finished kitchens and interiors in neighboring Sienna and Richmond.",
    approvals:
      "Most Sugar Land neighborhoods have an HOA, and exterior color changes typically need approval. We provide color names, codes and sheens for the application.",
    byService: {
      "interior-painting": [
        "Larger two-story homes with formal rooms, tall entries and stairwells: we plan access equipment and protect floors and banisters.",
        "Moving from the beige and tan palettes common in 1990s homes to lighter neutrals usually takes a primer or two full coats.",
        "Occupied homes: we work room by room so the kitchen and bedrooms stay usable.",
      ],
      "exterior-painting": [
        "Brick homes with painted wood trim, soffits and garage doors: the painted areas are prepped, caulked and repaired.",
        "Wood trim near gutters and roof lines checked for rot before paint.",
        "HOA approval for color changes scheduled ahead of the start date.",
      ],
      "cabinet-refinishing": [
        "Oak and cherry-stained cabinets from the 1990s and 2000s: extra degreasing and a bonding primer before color.",
        "White and light kitchens, as on our Sienna white kitchen, need a stain-blocking primer over wood that bleeds through.",
        "Islands, built-in desks and butler's pantries counted in the estimate.",
      ],
    },
    faqs: [
      {
        question: "Do you have an office in Sugar Land?",
        answer:
          `Yes. Our Sugar Land office is at ${addressOf("painters-sugar-land-tx")}. Estimates are done at your home.`,
      },
    ],
  },

  "bellaire-west-university": {
    homes:
      "Bellaire and West University Place are their own small cities inside Houston, with mid-century ranch homes next to newer, larger builds. Our jobs here include painted-brick exteriors in both cities, stucco repair and coating, a glass-front kitchen in Bellaire and a cabinet refinish in West University.",
    approvals:
      "Bellaire and West University Place are separate cities from Houston, and some streets have deed restrictions. Painting usually needs no permit, but we confirm what applies before larger exterior work.",
    byService: {
      "interior-painting": [
        "Newer homes with tall ceilings, millwork and paneled trim that need careful caulking and a smooth enamel finish.",
        "Older ranch homes with plaster or textured walls that need repair before paint.",
        "Moving from dark or saturated colors to light ones planned with a primer coat.",
      ],
      "exterior-painting": [
        "Painted brick: masonry-rated paint over clean, dry brick, as on our Bellaire ranch and West University brick jobs.",
        "Stucco: cracks sealed and an elastomeric coating where the stucco moves, as on our Bellaire and West University stucco jobs.",
        "Tight lots and close neighbors: landscaping, fences and neighboring driveways are covered and protected.",
      ],
      "cabinet-refinishing": [
        "Glass-front and detailed doors that need careful masking and spraying, as on our Bellaire glass-front kitchen.",
        "Custom kitchens in newer homes where the cabinet boxes are worth keeping and only the color changes.",
        "Doors are sprayed in a contained area at your home; nothing leaves the site.",
      ],
    },
    faqs: [
      {
        question: "Can you paint brick on a Bellaire or West University home?",
        answer:
          "Yes. We have painted brick exteriors in both cities. The brick is cleaned, repaired and allowed to dry, then coated with a masonry-rated paint. Limewash is another option if you want a softer, breathable look.",
      },
    ],
  },

  "the-heights": {
    homes:
      "The Heights has some of Houston's oldest homes: early 1900s bungalows and Victorians with wood siding and trim, plus newer townhomes. Our Heights jobs include a siding repaint, a painted-brick bungalow, two painted kitchens and a wallpaper removal and repaint.",
    approvals:
      "Parts of the Heights are in city historic districts or have deed restrictions that cover some exterior changes. We check what applies to your street before exterior work.",
    byService: {
      "interior-painting": [
        "Original plaster, shiplap and wood trim in older homes: cracks and gaps repaired before paint.",
        "Old wallpaper removed, the walls skim-coated and primed, as on our Heights wallpaper removal job.",
        "Doors, transoms and original trim with many coats of paint: loose paint removed and sanded smooth.",
      ],
      "exterior-painting": [
        "Wood siding with many coats of old paint: loose paint scraped and sanded, bare wood primed.",
        "Rotted siding, trim and porch parts repaired or replaced before paint.",
        "Deep porches and tall gables: access planned at the estimate.",
      ],
      "cabinet-refinishing": [
        "Smaller bungalow kitchens and beadboard doors, as on our Heights white beadboard kitchen.",
        "Dark colors such as charcoal, as on our Heights charcoal kitchen, need even spray coats to look uniform.",
        "Older cabinets with layers of paint: loose finish removed so the new coat bonds.",
      ],
    },
    faqs: [
      {
        question: "Can you repaint old wood siding in the Heights?",
        answer:
          "Yes. Loose paint is scraped and sanded, rotted boards are repaired or replaced, and bare wood is primed before two finish coats. We have repainted wood siding and a painted-brick bungalow in the Heights.",
      },
    ],
  },

  memorial: {
    homes:
      "Memorial and the Memorial Villages have many large homes with high ceilings, tall entries and a lot of trim. Our whole-home interior repaint in Memorial covered 14 rooms in a 4,200 sq ft home.",
    approvals:
      "The Memorial Villages (such as Bunker Hill, Piney Point and Hunters Creek) are separate small cities, and many streets have deed restrictions. We check what applies before exterior work.",
    byService: {
      "interior-painting": [
        "Whole-home repaints planned room by room so you can stay in the house, as on our Memorial whole-home job.",
        "High ceilings, two-story entries and stairwells: access equipment planned at the estimate.",
        "Trim, built-ins and doors finished in a durable enamel.",
      ],
      "exterior-painting": [
        "Large homes with mixed materials: wood trim, siding, stucco and brick each prepped for its own product.",
        "Heavy tree cover means mildew on shaded sides: washed and treated before paint.",
        "Long timelines planned around rain and your household schedule.",
      ],
      "cabinet-refinishing": [
        "Large kitchens with islands, butler's pantries and built-ins counted in the estimate.",
        "Custom cabinetry with detailed profiles masked and sprayed carefully.",
        "Doors sprayed in a contained area at your home.",
      ],
    },
    faqs: [
      {
        question: "Can you repaint a large Memorial home while we live there?",
        answer:
          "Yes. We plan whole-home interiors room by room, so the kitchen and bedrooms stay usable. Our Memorial whole-home repaint covered 14 rooms in a lived-in 4,200 sq ft home.",
      },
    ],
  },

  fulshear: {
    homes:
      "Fulshear has grown fast, with master-planned communities such as Cross Creek Ranch and Fulshear Lakes and many homes built in the last 10 to 15 years. We repainted a Fulshear interior whose photos are on our projects page.",
    approvals:
      "Most Fulshear communities have HOA design guidelines, so exterior color changes usually need approval first. We provide the color codes and sheens for the application.",
    byService: {
      "interior-painting": [
        "Newer homes with builder flat paint that marks easily: washable finishes in halls, kitchens and kids' rooms.",
        "Open plans and two-story family rooms: one color plan across connected rooms, with access equipment for tall walls.",
        "Nail pops and settlement cracks common in newer homes repaired before paint.",
      ],
      "exterior-painting": [
        "Newer fiber-cement siding and trim: caulk joints and builder paint checked; most homes are on their first repaint.",
        "HOA color approval scheduled before the start date.",
        "Open, sunny lots mean strong UV on south and west walls, so we use exterior paints rated for fade resistance.",
      ],
      "cabinet-refinishing": [
        "Builder-grade cabinets painted to a custom color without replacing boxes.",
        "MDF and wood doors paint well; thermofoil is checked at the estimate.",
        "Your estimate counts every door, drawer and panel.",
      ],
    },
    faqs: [
      {
        question: "My Fulshear home is only a few years old. Why repaint already?",
        answer:
          "Builder paint is often a single coat of flat paint that scuffs and does not wash well. Many owners repaint in a washable finish and a color they chose themselves.",
      },
    ],
  },

  richmond: {
    homes:
      "Richmond includes older neighborhoods near the historic downtown and newer master-planned communities such as Aliana, Harvest Green and Long Meadow Farms. Our Richmond jobs include several interiors, a two-story great room, interior arches and two painted kitchens.",
    approvals:
      "Most newer Richmond communities have an HOA, and exterior color changes usually need approval. We provide the color details for the application.",
    byService: {
      "interior-painting": [
        "Two-story great rooms with tall walls, as on our Richmond great room job: access equipment planned at the estimate.",
        "Arches, niches and curved walls that need careful cutting-in, as on our Richmond arches job.",
        "Bedrooms, landings and stairwells repainted in one visit when you want the whole upstairs done.",
      ],
      "exterior-painting": [
        "Newer fiber-cement siding and trim on a first or second repaint: caulk joints and builder paint checked.",
        "Brick-and-siding homes: painted areas prepped and caulked, brick left natural unless you choose otherwise.",
        "HOA color approval scheduled before the start date.",
      ],
      "cabinet-refinishing": [
        "Color kitchens, such as our Richmond sage green kitchen, and two-tone kitchens.",
        "Degreasing, sanding and bonding primer before cabinet-grade enamel.",
        "Doors sprayed in a contained area at your home.",
      ],
    },
    faqs: [
      {
        question: "Have you painted homes in Richmond before?",
        answer:
          "Yes. Our projects page has several Richmond jobs, including interiors, a two-story great room, interior arches and two painted kitchens.",
      },
    ],
  },

  "the-woodlands": {
    homes:
      "The Woodlands is known for wooded lots, with many homes from the 1980s through the 2000s set under tall pines. Shade and moisture make mildew and algae on siding and trim common. Our nearest finished exterior is a siding repaint in neighboring Magnolia.",
    approvals:
      "In The Woodlands, exterior color changes generally go through the community's residential design review. We give you the color names, codes and sheens for the application and schedule after approval.",
    byService: {
      "interior-painting": [
        "Homes from the 1980s and 1990s with wood trim and textured walls that may need priming for a color change.",
        "Tall living rooms and stairwells: access equipment planned at the estimate.",
        "Occupied homes repainted room by room.",
      ],
      "exterior-painting": [
        "Shaded siding and trim washed and treated for mildew and algae before any paint.",
        "Wood trim and siding near the ground and under trees checked for rot.",
        "Design review for color changes scheduled before the start date.",
      ],
      "cabinet-refinishing": [
        "Stained oak and maple cabinets from the 1980s to 2000s: degreased, sanded and bonding-primed.",
        "Your estimate counts every door, drawer and panel.",
        "Doors sprayed in a contained area at your home.",
      ],
    },
    faqs: [
      {
        question: "Why does siding in The Woodlands get mildew, and does paint fix it?",
        answer:
          "Shade from tall trees keeps siding damp, so mildew and algae grow on it. Paint over mildew fails, so we wash and treat the surface first. Trimming branches back and keeping gutters clear helps the new paint last.",
      },
    ],
  },
}

/** Notes for a page, or undefined when the zone has none yet. */
export function areaNotesFor(zoneSlug: string, serviceSlug: string) {
  const notes = AREA_NOTES[zoneSlug]
  if (!notes) return undefined
  const key = (["interior-painting", "exterior-painting", "cabinet-refinishing"] as const).find((s) => serviceSlug.startsWith(s))
  return { ...notes, points: key ? notes.byService[key] : [] }
}
