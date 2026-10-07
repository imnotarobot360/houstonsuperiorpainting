// lib/projects.ts
// Case-study data for the /projects portfolio section.
// Each entry maps to a real before/after image pair in /public/images.
// Content is structured for EEAT + rich snippets (problem → process → result).

export interface ProjectStat {
  label: string
  value: string
}

export interface CaseStudy {
  slug: string
  title: string
  neighborhood: string
  service: string
  serviceSlug: string
  /** Short summary used on the index card + meta description. */
  summary: string
  heroImage: string
  /** Optional: some jobs only have finished photos. Without it, no before/after slider renders. */
  beforeImage?: string
  afterImage: string
  beforeAlt?: string
  afterAlt: string
  /** Extra finished-job photos, shown as a gallery on the project page. */
  gallery?: { src: string; alt: string }[]
  /** Quick-glance project facts. */
  stats: ProjectStat[]
  /**
   * The write-up sections below are optional. Leave a section out rather than
   * describing work, products or conditions nobody has confirmed for this job.
   */
  /** The homeowner's problem / starting condition. */
  challenge?: string
  /** Ordered steps describing how the crew approached the work. */
  approach?: { title: string; detail: string }[]
  /** Products / materials specified. */
  products?: string[]
  /** Outcome paragraph. */
  results?: string
  testimonial?: { quote: string; name: string }
  /**
   * True when the before/after images have not been confirmed as photos of this
   * job. These three entries use square 1024x1024 PNGs that read as generated
   * illustrations, unlike the phone-camera JPEGs on the other three. Until Juan
   * confirms (or replaces) them, they are not used as local proof on city pages.
   */
  photosNeedReview?: boolean
  metaTitle: string
  metaDescription: string
}

export const PROJECTS: CaseStudy[] = [
  {
    slug: "memorial-whole-home-interior-repaint",
    title: "Whole-Home Interior Repaint in Memorial",
    neighborhood: "Memorial, Houston",
    service: "Interior Painting",
    serviceSlug: "interior-painting-houston-tx",
    summary:
      "A dated 4,200 sq ft Memorial home transformed with a warm, cohesive whole-home palette, flawless trim, and museum-grade wall prep.",
    heroImage: "/images/luxury/project-interior.png",
    beforeImage: "/images/interior-before-1.jpg",
    afterImage: "/images/interior-after-1.jpg",
    beforeAlt: "Memorial living room with dated tan walls before interior repainting",
    afterAlt: "Memorial living room with fresh warm-white walls after interior repainting",
    stats: [
      { label: "Scope", value: "4,200 sq ft" },
      { label: "Timeline", value: "9 days" },
      { label: "Rooms", value: "14" },
      { label: "Finish", value: "Matte + Satin" },
    ],
    challenge:
      "The homeowners had lived with builder-grade tan walls and yellowed trim for over a decade. Years of touch-ups had left visible flashing, roller marks, and mismatched sheens throughout the open-concept first floor. They wanted a single, cohesive palette that felt bright and current without losing the warmth of the home.",
    approach: [
      {
        title: "Color consultation & sampling",
        detail:
          "We developed a three-color whole-home palette and tested large samples on multiple walls, viewing them under the home's morning and evening light before committing.",
      },
      {
        title: "Full surface prep",
        detail:
          "Every wall was washed, sanded, and skim-coated where needed. We filled and sanded over 300 nail holes and old anchor points, then spot-primed all repairs for a uniform substrate.",
      },
      {
        title: "Trim & ceiling restoration",
        detail:
          "Yellowed trim was deglossed, caulked, and repainted in a durable satin. Ceilings were cut in and rolled to eliminate the old flashing.",
      },
      {
        title: "Two-coat finish & walkthrough",
        detail:
          "Walls received two full coats of premium matte. We finished with a daylight walkthrough, correcting every flagged detail before final sign-off.",
      },
    ],
    products: [
      "Sherwin-Williams Emerald Matte (walls)",
      "Sherwin-Williams ProClassic Satin (trim & doors)",
      "Sherwin-Williams Eminence Flat (ceilings)",
    ],
    results:
      "The first floor now reads as one continuous, light-filled space. Uniform sheen and crisp trim lines replaced a decade of patchy touch-ups, and the warm-white palette brightened the home while keeping it inviting.",
    testimonial: {
      quote:
        "From the consultation to the final walkthrough, the experience felt genuinely white-glove. The prep work on our Memorial home was extraordinary.",
      name: "Catherine R., Memorial",
    },
    metaTitle: "Memorial Whole-Home Interior Repaint | Houston Superior Painting",
    metaDescription:
      "See how we repainted a 4,200 sq ft Memorial home with a cohesive whole-home palette, museum-grade prep, and flawless trim. Before & after case study.",
  },
  {
    slug: "river-oaks-exterior-restoration",
    title: "Exterior Restoration in River Oaks",
    neighborhood: "River Oaks, Houston",
    service: "Exterior Painting",
    serviceSlug: "exterior-painting-houston-tx",
    summary:
      "A stately River Oaks home protected and refreshed with full exterior prep, rot repair, and a premium weather-resistant finish built for Houston humidity.",
    heroImage: "/images/luxury/hero-estate.png",
    beforeImage: "/images/exterior-before-1.jpg",
    afterImage: "/images/exterior-after-1.jpg",
    beforeAlt: "River Oaks home exterior with faded, chalking paint before restoration",
    afterAlt: "River Oaks home exterior with crisp new finish after restoration",
    stats: [
      { label: "Scope", value: "Full exterior" },
      { label: "Timeline", value: "12 days" },
      { label: "Stories", value: "2" },
      { label: "Warranty", value: "5 years" },
    ],
    challenge:
      "Houston's sun and humidity had taken a toll — the south- and west-facing elevations were chalking and fading, caulk lines had failed, and two fascia boards showed early wood rot. The owners wanted lasting protection, not just a cosmetic refresh.",
    approach: [
      {
        title: "Wash & inspection",
        detail:
          "We soft-washed the entire envelope and documented every failed caulk joint, crack, and rot point during a detailed walkaround.",
      },
      {
        title: "Repairs & re-caulk",
        detail:
          "Rotted fascia was replaced, gaps were re-caulked with a premium elastomeric sealant, and all bare wood was spot-primed.",
      },
      {
        title: "Prime & protect",
        detail:
          "Chalking areas were sealed with a bonding primer to guarantee adhesion in Houston's heat before topcoats went on.",
      },
      {
        title: "Two-coat weather finish",
        detail:
          "We applied two coats of a 100% acrylic exterior finish engineered for UV and moisture resistance, backed by our 5-year workmanship warranty.",
      },
    ],
    products: [
      "Sherwin-Williams Duration Exterior Acrylic",
      "Sherwin-Williams Extreme Bond Primer",
      "Premium elastomeric sealant",
    ],
    results:
      "The home regained its presence on the street with a clean, even finish and crisp trim lines. More importantly, the failed caulk and rot were corrected, protecting the substrate through Houston's next several storm seasons.",
    testimonial: {
      quote:
        "Meticulous, communicative, and respectful of our home throughout. The finish on our River Oaks exterior still looks immaculate.",
      name: "Robert H., River Oaks",
    },
    metaTitle: "River Oaks Exterior Paint Restoration | Houston Superior Painting",
    metaDescription:
      "A River Oaks exterior restoration with rot repair, re-caulking, and a premium weather-resistant finish for Houston humidity. Before & after case study.",
  },
  {
    slug: "west-university-kitchen-cabinet-refinishing",
    title: "Kitchen Cabinet Refinishing in West University",
    neighborhood: "West University, Houston",
    service: "Cabinet Refinishing",
    serviceSlug: "cabinet-refinishing-houston-tx",
    summary:
      "Tired oak cabinets transformed into a magazine-worthy kitchen with a sprayed, factory-smooth finish — at a fraction of replacement cost.",
    heroImage: "/images/luxury/project-kitchen.png",
    beforeImage: "/images/cabinet-before-1.jpg",
    afterImage: "/images/cabinet-after-1.jpg",
    beforeAlt: "West University kitchen with dated orange oak cabinets before refinishing",
    afterAlt: "West University kitchen with smooth painted cabinets after refinishing",
    stats: [
      { label: "Doors", value: "38" },
      { label: "Timeline", value: "6 days" },
      { label: "Method", value: "Sprayed" },
      { label: "Finish", value: "Cabinet enamel" },
    ],
    challenge:
      "The kitchen's orange-toned oak cabinets dated the entire first floor. The owners loved their layout and solid boxes but dreaded the cost and disruption of a full replacement. They wanted a smooth, durable, painted finish — with no brush marks and no grain telegraphing through.",
    approach: [
      {
        title: "Remove & label",
        detail:
          "Every door and drawer front was removed, labeled, and taken to our controlled spray space; boxes were masked off on site.",
      },
      {
        title: "Degrease, sand & grain-fill",
        detail:
          "We degreased years of cooking residue, scuff-sanded all surfaces, and grain-filled the open oak so the final finish would be glass-smooth.",
      },
      {
        title: "Bonding primer",
        detail:
          "A specialty bonding primer was sprayed and sanded to lock adhesion to the slick original finish.",
      },
      {
        title: "Sprayed cabinet enamel",
        detail:
          "Multiple thin coats of a self-leveling cabinet enamel were sprayed for a factory-smooth, durable surface, then reinstalled with new soft-close hardware.",
      },
    ],
    products: [
      "BIN / specialty bonding primer",
      "Sherwin-Williams Emerald Urethane Trim Enamel",
      "Grain filler & fine-finish abrasives",
    ],
    results:
      "The kitchen now looks fully renovated. The sprayed enamel finish is smooth and hard-wearing, the dated orange tone is gone, and the homeowners kept their quality cabinet boxes — saving tens of thousands versus replacement.",
    testimonial: {
      quote:
        "The cabinet refinishing transformed our kitchen into something out of a design magazine. Flawless, durable, and beautifully done.",
      name: "Daniel & Priya M., West University",
    },
    metaTitle: "West U Kitchen Cabinet Refinishing | Houston Superior Painting",
    metaDescription:
      "See a West University kitchen transformed with sprayed, factory-smooth cabinet refinishing — no brush marks, no grain. Before & after case study.",
  },
  {
    slug: "bellaire-stucco-repair-elastomeric-coating",
    photosNeedReview: true,
    title: "Stucco Repair & Elastomeric Coating in Bellaire",
    neighborhood: "Bellaire, Houston",
    service: "Stucco Painting & Repair",
    serviceSlug: "stucco-painting-houston-tx",
    summary:
      "Cracked, water-stained stucco repaired and sealed with a flexible elastomeric coating that bridges hairline cracks and waterproofs the wall.",
    heroImage: "/images/stucco-after-1.png",
    beforeImage: "/images/stucco-before-1.png",
    afterImage: "/images/stucco-after-1.png",
    beforeAlt: "Bellaire home with cracked and water-stained stucco before repair",
    afterAlt: "Bellaire home with smooth, freshly coated stucco after repair",
    stats: [
      { label: "Cracks sealed", value: "40+" },
      { label: "Timeline", value: "7 days" },
      { label: "Coating", value: "Elastomeric" },
      { label: "Warranty", value: "5 years" },
    ],
    challenge:
      "Spider cracks and hairline fractures had spread across the elevation, and water staining near the base hinted at moisture intrusion. A standard repaint would have cracked again within a season — the owners needed a real waterproofing solution.",
    approach: [
      {
        title: "Diagnose the cause",
        detail:
          "We traced cracking and staining to moisture movement, then mapped every crack and compromised area before any patching began.",
      },
      {
        title: "Crack repair & patching",
        detail:
          "Cracks were cut out, cleaned, and filled with a flexible patching compound, feathered smooth to match the surrounding texture.",
      },
      {
        title: "Masonry primer",
        detail:
          "A high-alkali masonry primer sealed the substrate and ensured the coating bonded uniformly across old and new material.",
      },
      {
        title: "Elastomeric topcoat",
        detail:
          "We applied a thick, flexible elastomeric coating that bridges hairline cracks and forms a waterproof, breathable membrane built for Houston storms.",
      },
    ],
    products: [
      "Flexible cementitious patching compound",
      "Loxon masonry primer",
      "Elastomeric high-build coating",
    ],
    results:
      "The wall is now smooth, uniform, and sealed against water. The elastomeric membrane flexes with seasonal movement instead of cracking, addressing the moisture issue at its source rather than hiding it.",
    metaTitle: "Bellaire Stucco Repair & Elastomeric Coating | Case Study",
    metaDescription:
      "A Bellaire stucco restoration: 40+ cracks sealed and a waterproof elastomeric coating built for Houston storms. Before & after case study.",
  },
  {
    slug: "heights-wallpaper-removal-modern-repaint",
    photosNeedReview: true,
    title: "Wallpaper Removal & Modern Repaint in The Heights",
    neighborhood: "The Heights, Houston",
    service: "Wallpaper Removal",
    serviceSlug: "wallpaper-removal-houston-tx",
    summary:
      "Layers of dated floral wallpaper removed, walls skim-coated smooth, and a bright modern palette applied to bring a Heights bungalow into the present.",
    heroImage: "/images/wallpaper-after-1.png",
    beforeImage: "/images/wallpaper-before-1.png",
    afterImage: "/images/wallpaper-after-1.png",
    beforeAlt: "The Heights room with dated floral wallpaper before removal",
    afterAlt: "The Heights room with smooth, freshly painted walls after wallpaper removal",
    stats: [
      { label: "Walls", value: "6 rooms" },
      { label: "Timeline", value: "5 days" },
      { label: "Repair", value: "Full skim coat" },
      { label: "Finish", value: "Modern matte" },
    ],
    challenge:
      "Decades-old floral wallpaper — in places doubled up — covered the main living areas. Peeling seams and adhesive residue meant a simple paint-over was impossible. The owners wanted clean, smooth, contemporary walls without damaging the original plaster.",
    approach: [
      {
        title: "Gentle steam removal",
        detail:
          "We scored and steam-removed every layer of paper, working carefully to protect the underlying plaster from gouging.",
      },
      {
        title: "Adhesive cleanup",
        detail:
          "All old paste was washed and neutralized — a step skipped by many crews that otherwise causes paint to bubble later.",
      },
      {
        title: "Skim coat & sand",
        detail:
          "Walls were skim-coated to erase texture and seam lines, then sanded smooth and primed for a flawless base.",
      },
      {
        title: "Modern repaint",
        detail:
          "Two coats of a washable modern matte brought the rooms into the present with a clean, even finish.",
      },
    ],
    products: [
      "Professional wallpaper steamer & solvent",
      "Skim-coat joint compound",
      "Sherwin-Williams Emerald Matte",
    ],
    results:
      "The bungalow's main rooms are now smooth, bright, and contemporary. With the adhesive fully removed and walls skim-coated, the new finish is durable and free of the bubbling that plagues quick wallpaper paint-overs.",
    metaTitle: "Heights Wallpaper Removal & Repaint | Houston Superior Painting",
    metaDescription:
      "See a Houston Heights bungalow transformed: dated wallpaper removed, walls skim-coated smooth, and a modern palette applied. Before & after case study.",
  },
  {
    slug: "cypress-wood-rot-repair-exterior-repaint",
    photosNeedReview: true,
    title: "Wood Rot Repair & Exterior Repaint in Cypress",
    neighborhood: "Cypress, TX",
    service: "Wood Rot Repair",
    serviceSlug: "wood-rot-repair-houston-tx",
    summary:
      "Rotted fascia, soffits, and trim replaced and repainted to look original — with the moisture source corrected so the rot doesn't return.",
    heroImage: "/images/wood-rot-after-1.png",
    beforeImage: "/images/wood-rot-before-1.png",
    afterImage: "/images/wood-rot-after-1.png",
    beforeAlt: "Cypress home with rotted fascia and peeling trim before repair",
    afterAlt: "Cypress home with restored, freshly painted trim after wood rot repair",
    stats: [
      { label: "Boards replaced", value: "60+ ft" },
      { label: "Timeline", value: "8 days" },
      { label: "Areas", value: "Fascia + soffits" },
      { label: "Warranty", value: "5 years" },
    ],
    challenge:
      "Years of Houston humidity and a few clogged gutters had rotted long runs of fascia and several soffit panels. Paint was peeling around the worst areas, and the owners worried the damage was spreading into the roof structure.",
    approach: [
      {
        title: "Assess & source moisture",
        detail:
          "We probed all suspect wood, identified the full extent of the rot, and traced the moisture to failed gutter sections.",
      },
      {
        title: "Replace damaged wood",
        detail:
          "Rotted fascia and soffit boards were removed and replaced with primed, rot-resistant material, matched to the existing profiles.",
      },
      {
        title: "Correct the cause",
        detail:
          "We addressed the drainage issue and re-sealed joints so water is directed away from the wood — preventing the rot from returning.",
      },
      {
        title: "Prime & repaint",
        detail:
          "New and existing trim was primed, caulked, and painted to a seamless match so the repair is invisible from the street.",
      },
    ],
    products: [
      "Primed rot-resistant trim board",
      "Exterior wood primer & sealant",
      "Sherwin-Williams Duration Exterior Acrylic",
    ],
    results:
      "The trim line is restored and indistinguishable from original, the peeling is gone, and — most importantly — the moisture source was corrected so the new wood is protected. The repair is backed by our 5-year workmanship warranty.",
    metaTitle: "Cypress Wood Rot Repair & Exterior Repaint | Case Study",
    metaDescription:
      "A Cypress wood rot repair: rotted fascia and soffits replaced, the moisture source corrected, and trim repainted to match. Before & after case study.",
  },
  {
    // Job photos supplied by Juan on 2026-10-07: a completed interior job in
    // Richmond, TX. Finished photos only (no before shots), and no confirmed
    // scope, products, size or timeline yet, so those sections are left out
    // rather than guessed. Add them here once Juan confirms the details.
    slug: "richmond-interior-repaint",
    title: "Interior Painting in a Richmond, TX Home",
    neighborhood: "Richmond, TX",
    service: "Interior Painting",
    serviceSlug: "interior-painting-houston-tx",
    summary:
      "A completed interior painting job in a two-story Richmond home, photographed after the work: bedrooms, the upstairs landing and the stairwell.",
    heroImage: "/images/projects/richmond-interior/01-bedroom-wide.jpg",
    afterImage: "/images/projects/richmond-interior/01-bedroom-wide.jpg",
    afterAlt: "Richmond bedroom with freshly painted greige walls, white crown molding, baseboards and door",
    gallery: [
      { src: "/images/projects/richmond-interior/05-bedroom-window.jpg", alt: "Second Richmond bedroom with greige walls, white crown molding and window trim" },
      { src: "/images/projects/richmond-interior/04-landing-to-bedroom.jpg", alt: "Upstairs landing with greige walls and white door casing opening into a bedroom" },
      { src: "/images/projects/richmond-interior/06-landing-doors.jpg", alt: "Upstairs landing with white two-panel doors and greige walls beside the stair railing" },
      { src: "/images/projects/richmond-interior/03-pocket-door-bath-hall.jpg", alt: "White pocket door and casing opening to a tiled hallway" },
      { src: "/images/projects/richmond-interior/02-pocket-door.jpg", alt: "Close-up of a white two-panel pocket door and casing against greige walls" },
      { src: "/images/projects/richmond-interior/09-stairs-lower-flight.jpg", alt: "Staircase with white stair skirt board and greige walls" },
      { src: "/images/projects/richmond-interior/08-stairs-railing.jpg", alt: "Stairwell wall in greige with white skirt board below the railing" },
      { src: "/images/projects/richmond-interior/10-stair-handrail.jpg", alt: "Stairwell wall with a white handrail backer board and greige walls" },
      { src: "/images/projects/richmond-interior/07-stairwell-from-below.jpg", alt: "Two-story stairwell seen from below, with white crown molding and greige walls" },
    ],
    stats: [
      { label: "Location", value: "Richmond, TX" },
      { label: "Service", value: "Interior" },
      { label: "Areas shown", value: "Bedrooms, landing, stairs" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Interior Painting Project in Richmond, TX",
    metaDescription:
      "Photos of a completed interior painting job in a two-story Richmond, TX home: bedrooms, the upstairs landing and the stairwell.",
  },
  {
    // Job photos supplied by Juan on 2026-10-07 (exterior painting in The
    // Heights). Cropped to remove a person, part of the house number and the
    // street-side bins. Finished photos only; scope and products unconfirmed.
    slug: "heights-exterior-siding-repaint",
    title: "Exterior Painting on a Two-Story Heights Home",
    neighborhood: "The Heights, Houston",
    service: "Exterior Painting",
    serviceSlug: "exterior-painting-houston-tx",
    summary:
      "A completed exterior painting job on a two-story home in The Heights, photographed after the work: the front elevation, the side porch and the front entry.",
    heroImage: "/images/projects/heights-exterior-siding/01-front-elevation.jpg",
    afterImage: "/images/projects/heights-exterior-siding/01-front-elevation.jpg",
    afterAlt: "Two-story Heights home with gray lap siding, shingle-style gables and cream trim, balcony and columns",
    gallery: [
      { src: "/images/projects/heights-exterior-siding/02-side-porch.jpg", alt: "Long side porch with gray siding, cream trim and columns, a gray porch floor and a stained wood ceiling" },
      { src: "/images/projects/heights-exterior-siding/03-front-door.jpg", alt: "Front entry with gray siding, cream door casing and crown, and a gray porch floor" },
    ],
    stats: [
      { label: "Location", value: "The Heights" },
      { label: "Service", value: "Exterior" },
      { label: "Home", value: "Two-story" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Exterior Painting Project in The Heights, Houston",
    metaDescription:
      "Photos of a completed exterior painting job on a two-story home in The Heights, Houston: siding, trim, porch and front entry.",
  },
  {
    // Job photos supplied by Juan on 2026-10-07 (exterior painting in The
    // Heights). A realtor's sign was cropped out. Finished photos only.
    slug: "heights-painted-brick-bungalow",
    title: "Painted Brick Bungalow Exterior in The Heights",
    neighborhood: "The Heights, Houston",
    service: "Exterior Painting",
    serviceSlug: "exterior-painting-houston-tx",
    summary:
      "A completed exterior painting job on a brick bungalow in The Heights, photographed after the work: white painted brick and gable with black trim, columns and window frames.",
    heroImage: "/images/projects/heights-painted-brick-bungalow/01-corner-view.jpg",
    afterImage: "/images/projects/heights-painted-brick-bungalow/01-corner-view.jpg",
    afterAlt: "Heights bungalow with white painted brick, a white gable and black porch columns, fascia and window trim",
    gallery: [
      { src: "/images/projects/heights-painted-brick-bungalow/02-front-porch.jpg", alt: "Front of the bungalow: white painted brick and gable with black columns, beams and window frames" },
    ],
    stats: [
      { label: "Location", value: "The Heights" },
      { label: "Service", value: "Exterior" },
      { label: "Surfaces shown", value: "Brick, gable, trim" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Painted Brick Bungalow in The Heights, Houston",
    metaDescription:
      "Photos of a completed exterior painting job on a Heights bungalow: white painted brick and gable with black trim, columns and window frames.",
  },
  {
    // Job photos supplied by Juan on 2026-10-07: interior job in Fulshear, TX.
    // One shot cropped to remove a person. Finished photos only; scope,
    // products and colors unconfirmed. Fulshear borders Katy, so Katy pages
    // show this as a nearby project — always labelled Fulshear, never Katy.
    slug: "fulshear-interior-repaint",
    title: "Interior Painting in a Fulshear, TX Home",
    neighborhood: "Fulshear, TX",
    service: "Interior Painting",
    serviceSlug: "interior-painting-houston-tx",
    summary:
      "A completed interior painting job in a Fulshear home, photographed after the work: the living room and fireplace wall, the entry and dining area, a home office and a bedroom.",
    heroImage: "/images/projects/fulshear-interior/01-living-room.jpg",
    afterImage: "/images/projects/fulshear-interior/01-living-room.jpg",
    afterAlt: "Fulshear living room with beige walls, taupe crown molding and baseboards, and a white stone fireplace",
    gallery: [
      { src: "/images/projects/fulshear-interior/02-living-room-fireplace-wall.jpg", alt: "Living room fireplace wall with arched transom windows, beige walls and taupe crown molding" },
      { src: "/images/projects/fulshear-interior/03-painted-stone-fireplace.jpg", alt: "White stone fireplace with a wood mantel beside taupe baseboards" },
      { src: "/images/projects/fulshear-interior/04-view-to-kitchen.jpg", alt: "View from the living room to the kitchen, with beige walls and taupe crown molding" },
      { src: "/images/projects/fulshear-interior/05-entry-to-living-dining.jpg", alt: "Entry hall opening to the living and dining areas, with taupe trim on columns and baseboards" },
      { src: "/images/projects/fulshear-interior/06-home-office-wall-molding.jpg", alt: "Home office with beige walls and taupe picture-frame wall molding" },
      { src: "/images/projects/fulshear-interior/07-bedroom-accent-wall.jpg", alt: "Bedroom with cream walls, a navy accent wall and two-tone tray-ceiling crown molding" },
      { src: "/images/projects/fulshear-interior/08-living-room-wide.jpg", alt: "Wide view of the living room toward the entry, with beige walls and taupe trim" },
    ],
    stats: [
      { label: "Location", value: "Fulshear, TX" },
      { label: "Service", value: "Interior" },
      { label: "Areas shown", value: "Living, office, bedroom" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Interior Painting Project in Fulshear, TX",
    metaDescription:
      "Photos of a completed interior painting job in a Fulshear, TX home: living room and fireplace wall, entry, home office and bedroom.",
  },
]

/** Projects whose photos are job photos: the only ones city pages may cite as local proof. */
export const LOCAL_PROOF_PROJECTS: CaseStudy[] = PROJECTS.filter((p) => !p.photosNeedReview)

export function getProject(slug: string): CaseStudy | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug)
}
