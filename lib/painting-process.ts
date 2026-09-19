/**
 * The 8-step interior painting process. Kept as data (rather than inline JSX)
 * so the page body, the HowTo structured data, and any future summary blocks
 * all render from a single source of truth.
 */
export type ProcessStep = {
  number: number
  title: string
  tagline: string
  /** Paragraphs of body copy, rendered in order. */
  body: string[]
  /** Optional checklist rendered as a two-column list. */
  listTitle?: string
  list?: string[]
  /** Optional closing paragraphs shown after the checklist. */
  after?: string[]
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Complete Home Protection",
    tagline: "We treat your home like it's our own",
    body: [
      "A professional painting project begins with protecting everything that matters.",
      "Before we move a single ladder or open a paint can, our crew carefully prepares every work area to ensure your home remains clean, organized, and protected throughout the project.",
    ],
    listTitle: "We carefully protect",
    list: [
      "Hardwood flooring",
      "Luxury vinyl plank flooring",
      "Tile",
      "Carpet",
      "Furniture",
      "Kitchen countertops",
      "Cabinets",
      "Light fixtures",
      "Appliances",
      "Stair railings",
      "Built-in shelving",
      "Decorative finishes",
    ],
    after: [
      "We use professional-grade drop cloths, plastic protection, masking paper, and precision tape — not inexpensive materials that can shift during the project.",
      "Our philosophy is simple: the only thing we should leave behind is beautifully painted walls.",
    ],
  },
  {
    number: 2,
    title: "Professional Surface Preparation",
    tagline: "The step that separates premium painters from average contractors",
    body: [
      "Preparation is where most painting companies cut corners. It's also where the longevity of your paint job is determined.",
      "Rather than painting over imperfections, we restore surfaces so the finished product looks smooth, uniform, and professionally finished.",
    ],
    listTitle: "Our preparation process may include",
    list: [
      "Removing picture hangers and wall anchors",
      "Filling nail holes",
      "Repairing drywall dents",
      "Repairing stress cracks",
      "Patching minor wall damage",
      "Caulking gaps and trim joints",
      "Scraping loose paint",
      "Feather sanding repaired areas",
      "Spot repairs for texture inconsistencies",
    ],
    after: [
      "These seemingly small details are what separate an average paint job from one that immediately looks custom.",
    ],
  },
  {
    number: 3,
    title: "Sanding for a Furniture-Quality Finish",
    tagline: "Smooth walls don't happen by accident",
    body: [
      "Many homeowners don't realize sanding is one of the most overlooked steps in residential painting.",
      "Fresh paint magnifies imperfections. Without proper sanding, every roller mark, drywall repair, and rough patch becomes even more noticeable after the paint dries.",
      "Our painters carefully sand repaired surfaces, trim, doors, and other necessary areas to create a perfectly prepared substrate for the new finish.",
    ],
    listTitle: "Benefits include",
    list: [
      "Better paint adhesion",
      "Smoother walls",
      "Cleaner trim finishes",
      "Reduced roller texture",
      "Invisible drywall repairs",
      "More consistent sheen",
    ],
    after: [
      "It's one of those details homeowners may never see during the process — but they immediately notice in the final result.",
    ],
  },
  {
    number: 4,
    title: "Strategic Priming",
    tagline: "The right foundation creates long-lasting results",
    body: [
      "Primer isn't something we automatically apply everywhere — but it's never skipped when the surface requires it.",
      "Knowing where and when to use primer is one of the biggest differences between experienced professionals and inexperienced painters.",
    ],
    listTitle: "We apply specialty primers whenever necessary, including",
    list: [
      "Fresh drywall repairs",
      "Water stains",
      "Smoke damage",
      "Marker or ink stains",
      "Dark-to-light color transitions",
      "Bare wood",
      "High-porosity surfaces",
      "Areas requiring stain blocking",
    ],
    after: [
      "Using the correct primer ensures better coverage, richer color, more uniform sheen, stronger adhesion, and longer-lasting durability.",
      "It's an investment in the lifespan of your paint — not just its appearance.",
    ],
  },
  {
    number: 5,
    title: "Precision Paint Application",
    tagline: "Where craftsmanship meets premium materials",
    body: [
      "Once every surface has been properly prepared, we begin applying premium-quality coatings using professional application techniques developed through years of experience.",
      "Our painters focus on consistency — not speed. Every wall is carefully rolled for an even finish. Every corner is precision cut. Every transition line is clean. Every room receives the attention necessary to create a seamless appearance from every viewing angle.",
    ],
    listTitle: "Our standard process typically includes two finish coats to achieve",
    list: [
      "Rich, uniform color",
      "Consistent sheen",
      "Complete coverage",
      "Smooth texture",
      "Exceptional durability",
    ],
    after: ["No thin coats. No missed areas. No rushed workmanship. Just clean, consistent craftsmanship."],
  },
  {
    number: 6,
    title: "Fine Finish Trim, Doors & Woodwork",
    tagline: "Details that elevate the entire home",
    body: [
      "Walls may be the largest surfaces in your home — but trim, doors, crown molding, and baseboards are what create a truly refined interior.",
      "These architectural details require specialized products and techniques that differ significantly from wall painting.",
    ],
    listTitle: "For trim and doors, we use premium enamels designed to provide",
    list: [
      "Smooth factory-like finishes",
      "Excellent leveling",
      "Superior scratch resistance",
      "Easy maintenance",
      "Long-lasting beauty",
      "Exceptional durability",
    ],
    after: [
      "When completed correctly, your trim doesn't simply blend into the room — it frames every space with crisp, elegant definition.",
    ],
  },
  {
    number: 7,
    title: "Comprehensive Quality Inspection",
    tagline: "We don't leave until we'd proudly put our name on it",
    body: [
      "Every project concludes with a detailed quality inspection — not because something is expected to be wrong, but because excellence deserves verification.",
    ],
    listTitle: "Before considering the project complete, we inspect every room for",
    list: [
      "Complete wall coverage",
      "Straight cut lines",
      "Uniform sheen",
      "Smooth repaired areas",
      "Trim consistency",
      "Door finishes",
      "Ceiling transitions",
      "Overall appearance",
    ],
    after: [
      "Then we walk the project with you. If there's anything you'd like adjusted — even something minor — we address it before the project is considered complete.",
      "Your satisfaction isn't an afterthought. It's part of our process.",
    ],
  },
  {
    number: 8,
    title: "White-Glove Cleanup",
    tagline: "Because professionalism doesn't end with the last coat",
    body: ["A premium painting experience includes leaving your home looking immaculate."],
    listTitle: "Once painting is complete, our crew carefully",
    list: [
      "Removes all masking materials",
      "Vacuums work areas",
      "Sweeps and cleans floors",
      "Reinstalls switch plates and outlet covers",
      "Returns furniture to its original location",
      "Removes project debris",
      "Performs a final cleanliness inspection",
    ],
    after: [
      "When we leave, your home should feel refreshed — not like it just went through a construction project.",
    ],
  },
]
