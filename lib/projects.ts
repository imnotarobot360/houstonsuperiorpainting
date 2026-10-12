// lib/projects.ts
// Case-study data for the /projects portfolio section.
// Each entry maps to a real before/after image pair in /public/images.
// Content is structured for EEAT + rich snippets (problem → process → result).

import { SERVICE_AREAS, type ServiceArea } from "./business"

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
  /*
   * Optional case-study fields (see docs/case-study-template.md). Every one is
   * rendered only when present. Fill a field only with facts Juan has confirmed
   * for this job; leave it out otherwise. Never a street address, house number,
   * plate, person or another company's sign: neighborhood or ZIP only.
   */
  /** e.g. "Two-story single-family home", "Single-story office suite". */
  propertyType?: string
  /** One-line scope, e.g. "Full exterior: siding, trim, doors and garage door". */
  scope?: string
  /** Condition of the surfaces before work started. */
  existingCondition?: string
  /** Preparation steps actually done on this job, in order. */
  preparation?: string[]
  /** Repairs actually done (wood rot, drywall, caulk, etc.). */
  repairs?: string[]
  /** Paint colors, ONLY when the homeowner authorized publishing them. */
  colors?: string[]
  /** How long the job took on site, e.g. "6 working days". */
  timeline?: string
  /** Job-specific obstacles (weather, occupied home, HOA approval...). */
  challenges?: string
  /** Completion date, YYYY-MM-DD. Shown as month + year. */
  dateCompleted?: string
  /** Extra city pages to link from this project (slugs from SERVICE_AREAS). */
  relatedServiceAreas?: ServiceArea["slug"][]
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
    // Stock /images/luxury photo, not a job photo; unconfirmed by the owner (2026-10-12).
    photosNeedReview: true,
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
    // Stock /images/luxury photo, not a job photo; unconfirmed by the owner (2026-10-12).
    photosNeedReview: true,
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
    // Stock /images/luxury photo, not a job photo; unconfirmed by the owner (2026-10-12).
    photosNeedReview: true,
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
      "Benjamin Moore Command waterborne acrylic urethane",
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
    // Job photos supplied by Juan on 2026-10-12 ("interior painting in richmond"):
    // a second Richmond home, a two-story great room, foyer and dining room.
    // Finished photos only; scope, products and timeline unconfirmed, so left out.
    // Dining-room shot cropped to drop a wall mirror and its reflections; one wall
    // close-up skipped (uneven lighting made the finish look patchy).
    slug: "richmond-two-story-great-room",
    title: "Two-Story Great Room Interior in Richmond, TX",
    neighborhood: "Richmond, TX",
    service: "Interior Painting",
    serviceSlug: "interior-painting-houston-tx",
    summary:
      "A completed interior painting job in a Richmond home with a two-story great room: tall taupe walls, white crown molding and trim, the foyer and stair wall, and the dining room.",
    heroImage: "/images/projects/richmond-great-room/01-great-room-fireplace.jpg",
    afterImage: "/images/projects/richmond-great-room/01-great-room-fireplace.jpg",
    afterAlt: "Two-story great room in Richmond with taupe walls, white crown molding and baseboards around a stone fireplace",
    gallery: [
      { src: "/images/projects/richmond-great-room/02-foyer-and-stairs.jpg", alt: "Wide view of the foyer with taupe walls, white columns, trim and stair skirt" },
      { src: "/images/projects/richmond-great-room/03-two-story-ceiling.jpg", alt: "Two-story ceiling and white crown molding above the great room fireplace and tall windows" },
      { src: "/images/projects/richmond-great-room/04-columns-and-stair-wall.jpg", alt: "White columns and door casing beside the stair wall, with taupe walls and white baseboards" },
      { src: "/images/projects/richmond-great-room/05-french-doors-wall.jpg", alt: "Tall taupe wall beside white French doors and the upstairs overlook" },
      { src: "/images/projects/richmond-great-room/06-balcony-wall-crown.jpg", alt: "Upper great room wall with white crown molding and the trimmed balcony opening" },
      { src: "/images/projects/richmond-great-room/07-ceiling-and-overlook.jpg", alt: "Great room ceiling, crown molding and the white overlook railing and panels" },
      { src: "/images/projects/richmond-great-room/08-dining-room.jpg", alt: "Dining room with taupe walls, white chair rail and wainscot panels and tall windows" },
    ],
    stats: [
      { label: "Location", value: "Richmond, TX" },
      { label: "Service", value: "Interior" },
      { label: "Areas shown", value: "Great room, foyer, dining" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Two-Story Great Room Painting in Richmond, TX",
    metaDescription:
      "Photos of a completed interior painting job in Richmond, TX: a two-story great room with tall walls and crown molding, the foyer and stair wall, and the dining room.",
  },
  {
    // Job photos supplied by Juan on 2026-10-12; he confirmed the sage kitchen and
    // the blue vanity are the same Richmond house. Cropped to drop a ladder in the
    // hallway and foreground clutter. Doors are shown open while drying.
    // Finished photos only; products and timeline unconfirmed, so left out.
    slug: "richmond-sage-green-kitchen-cabinets",
    title: "Sage Green Kitchen Cabinets and Blue Vanity in Richmond",
    neighborhood: "Richmond, TX",
    service: "Cabinet Refinishing",
    serviceSlug: "cabinet-refinishing-houston-tx",
    summary:
      "Raised-panel kitchen cabinets and island painted sage green in a Richmond home, plus the primary bathroom vanity in blue.",
    heroImage: "/images/projects/richmond-sage-kitchen/01-sage-kitchen-corner.jpg",
    afterImage: "/images/projects/richmond-sage-kitchen/01-sage-kitchen-corner.jpg",
    afterAlt: "Richmond kitchen with raised-panel upper and lower cabinets painted sage green under dark granite counters",
    gallery: [
      { src: "/images/projects/richmond-sage-kitchen/02-sage-kitchen-wide.jpg", alt: "Wide view of the sage green kitchen cabinets and island, doors open while the finish dries" },
      { src: "/images/projects/richmond-sage-kitchen/03-sage-upper-cabinets.jpg", alt: "Sage green upper cabinets around the microwave, with crown molding painted to match" },
      { src: "/images/projects/richmond-sage-kitchen/04-sage-island.jpg", alt: "Angled kitchen island with raised-panel doors and drawers painted sage green" },
      { src: "/images/projects/richmond-sage-kitchen/05-blue-bathroom-vanity.jpg", alt: "Double bathroom vanity with raised-panel doors and drawers painted blue" },
    ],
    stats: [
      { label: "Location", value: "Richmond, TX" },
      { label: "Service", value: "Cabinets" },
      { label: "Areas shown", value: "Kitchen, island, vanity" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Sage Green Kitchen Cabinets in Richmond, TX",
    metaDescription:
      "Photos of raised-panel kitchen cabinets and an island painted sage green in Richmond, TX, plus a bathroom vanity painted blue.",
  },
  {
    // Job photos supplied by Juan on 2026-10-12 (a different Richmond house).
    // Small originals; cropped to drop a crew member, a broom and paint cans.
    // Finished photos only; products and timeline unconfirmed, so left out.
    slug: "richmond-two-tone-kitchen-cabinets",
    title: "Two-Tone White and Black Kitchen Cabinets in Richmond",
    neighborhood: "Richmond, TX",
    service: "Cabinet Refinishing",
    serviceSlug: "cabinet-refinishing-houston-tx",
    summary:
      "A two-tone kitchen in Richmond: white shaker uppers, near-black lowers, tall pantry cabinets and a large island, with brass pulls.",
    heroImage: "/images/projects/richmond-two-tone-kitchen/01-two-tone-kitchen-island.jpg",
    afterImage: "/images/projects/richmond-two-tone-kitchen/01-two-tone-kitchen-island.jpg",
    afterAlt: "Richmond kitchen with white shaker upper cabinets, near-black lower and tall cabinets, and a dark island",
    gallery: [
      { src: "/images/projects/richmond-two-tone-kitchen/02-two-tone-kitchen-pantry-wall.jpg", alt: "White upper cabinets beside near-black tall cabinets around the refrigerator" },
    ],
    stats: [
      { label: "Location", value: "Richmond, TX" },
      { label: "Service", value: "Cabinets" },
      { label: "Colors", value: "White and black" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Two-Tone Kitchen Cabinets in Richmond, TX",
    metaDescription:
      "Photos of a two-tone kitchen in Richmond, TX: white shaker upper cabinets, near-black lowers and tall cabinets, and a large dark island.",
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
  {
    // Job photos supplied by Juan on 2026-10-07: a second, separate interior
    // job in Richmond, TX. Finished photos only; scope and products unconfirmed.
    slug: "richmond-interior-arches-repaint",
    title: "Interior Painting in a Richmond Home with Arched Halls",
    neighborhood: "Richmond, TX",
    service: "Interior Painting",
    serviceSlug: "interior-painting-houston-tx",
    summary:
      "A completed interior painting job in a Richmond home, photographed after the work: the living room, kitchen and breakfast area, arched hallways, dining room, study and a bedroom.",
    heroImage: "/images/projects/richmond-interior-arches/01-living-room-fireplace.jpg",
    afterImage: "/images/projects/richmond-interior-arches/01-living-room-fireplace.jpg",
    afterAlt: "Open living room with white walls and baseboards, arched openings and a stone fireplace",
    gallery: [
      { src: "/images/projects/richmond-interior-arches/02-kitchen-and-breakfast-area.jpg", alt: "Kitchen and breakfast area with white walls and a white island base beside dark cabinets" },
      { src: "/images/projects/richmond-interior-arches/03-arched-hallway.jpg", alt: "Hallway through two arched openings with white walls and baseboards" },
      { src: "/images/projects/richmond-interior-arches/04-arched-entry-hall.jpg", alt: "Arched entry hall leading to the front door, with white walls and baseboards" },
      { src: "/images/projects/richmond-interior-arches/05-dining-room.jpg", alt: "Dining room with white walls and baseboards and tall windows" },
      { src: "/images/projects/richmond-interior-arches/06-study.jpg", alt: "Small study with light walls, white baseboards and window trim" },
      { src: "/images/projects/richmond-interior-arches/07-bedroom-vaulted-ceiling.jpg", alt: "Bedroom with a vaulted ceiling, light gray walls and white double doors" },
    ],
    stats: [
      { label: "Location", value: "Richmond, TX" },
      { label: "Service", value: "Interior" },
      { label: "Areas shown", value: "Living, kitchen, halls, bedroom" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Interior Painting Project with Arched Halls in Richmond, TX",
    metaDescription:
      "Photos of a completed interior painting job in a Richmond, TX home: living room, kitchen, arched hallways, dining room, study and bedroom.",
  },
  {
    // Before/after photos supplied by Juan on 2026-10-07: commercial office
    // repaint in Cypress, TX. The client is NOT named: a photo showing the
    // business name on a window was left out, and a whiteboard with notes was
    // cropped off. Scope beyond what the photos show is unconfirmed.
    slug: "cypress-commercial-office-repaint",
    title: "Commercial Office Repaint in Cypress",
    neighborhood: "Cypress, TX",
    service: "Commercial Painting",
    serviceSlug: "commercial-painting-houston-tx",
    summary:
      "A commercial office in Cypress repainted from scuffed off-white to a soft blue: hallways, private offices and the break room.",
    heroImage: "/images/projects/cypress-commercial-office/01-after-hallway.jpg",
    beforeImage: "/images/projects/cypress-commercial-office/00-before-hallway.jpg",
    afterImage: "/images/projects/cypress-commercial-office/01-after-hallway.jpg",
    beforeAlt: "Office hallway before painting, with scuffed and marked off-white walls",
    afterAlt: "The same office hallway after painting, with clean soft-blue walls",
    gallery: [
      { src: "/images/projects/cypress-commercial-office/02-after-long-hallway.jpg", alt: "Long office hallway after painting, with soft-blue walls" },
      { src: "/images/projects/cypress-commercial-office/03-after-office.jpg", alt: "Private office with freshly painted soft-blue walls" },
      { src: "/images/projects/cypress-commercial-office/04-after-office-window.jpg", alt: "Office with soft-blue walls painted around a recessed window" },
      { src: "/images/projects/cypress-commercial-office/05-after-private-office.jpg", alt: "Private office with soft-blue walls" },
      { src: "/images/projects/cypress-commercial-office/06-after-break-room.jpg", alt: "Break room with freshly painted soft-blue walls" },
    ],
    stats: [
      { label: "Location", value: "Cypress, TX" },
      { label: "Service", value: "Commercial" },
      { label: "Areas shown", value: "Halls, offices, break room" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Commercial Office Repaint in Cypress, TX",
    metaDescription:
      "Before and after: a Cypress, TX commercial office repainted from scuffed off-white to soft blue, including hallways, offices and the break room.",
  },
  {
    // Job photos supplied by Juan on 2026-10-12 ("exterior commercial paint in
    // houston"). Street numbers and license plates blurred. Tenant signs are left
    // as photographed but never named in the text (no implied endorsement).
    // Finished photos only; scope, products and timeline unconfirmed. A separate
    // yellow storefront in the same batch is held until Juan confirms it.
    slug: "houston-retail-center-exterior",
    title: "Retail Center Exterior Painting in Houston",
    neighborhood: "Houston, TX",
    service: "Commercial Painting",
    serviceSlug: "commercial-painting-houston-tx",
    summary:
      "A Houston retail strip center painted outside: tan stucco body, white cornices, arches and trim, orange column accents and green block bases, along storefronts on both wings.",
    heroImage: "/images/projects/houston-retail-center/01-center-entry-tower.jpg",
    afterImage: "/images/projects/houston-retail-center/01-center-entry-tower.jpg",
    afterAlt: "Retail center entry tower with tan stucco, white cornice and arch, stone veneer, orange columns and green block bases",
    gallery: [
      { src: "/images/projects/houston-retail-center/02-storefront-row.jpg", alt: "Row of storefronts with tan stucco walls, white trim band and decorative tiles, orange columns and green bases" },
      { src: "/images/projects/houston-retail-center/03-entry-arch.jpg", alt: "Storefront entry under a white arch, with orange columns and green block bases" },
      { src: "/images/projects/houston-retail-center/04-end-unit.jpg", alt: "End unit of the retail center with tan stucco, white cornice and arch" },
      { src: "/images/projects/houston-retail-center/05-long-storefront.jpg", alt: "Long storefront wing with tan stucco, white cornice and orange and green column accents" },
      { src: "/images/projects/houston-retail-center/06-center-overview.jpg", alt: "Overview of the retail center wings with tan stucco and white trim" },
    ],
    stats: [
      { label: "Location", value: "Houston, TX" },
      { label: "Service", value: "Commercial exterior" },
      { label: "Surfaces shown", value: "Stucco, trim, columns" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Retail Center Exterior Painting in Houston, TX",
    metaDescription:
      "Photos of a Houston retail strip center painted outside: tan stucco, white cornices and arches, orange column accents and green block bases.",
  },
  {
    // Job photos supplied by Juan on 2026-10-07: exterior painting in West
    // University. The house number was blurred and a security-company yard sign
    // cropped out. Finished photos only; whether the dark trim, gutters and
    // garage door were part of our scope is unconfirmed, so only the painted
    // brick is claimed.
    slug: "west-university-painted-brick-exterior",
    title: "Painted Brick Exterior in West University",
    neighborhood: "West University, Houston",
    service: "Exterior Painting",
    serviceSlug: "exterior-painting-houston-tx",
    summary:
      "A two-story brick home in West University painted white, photographed after the work: the arched entry, front steps and garage elevation.",
    heroImage: "/images/projects/west-university-painted-brick/01-front-and-garage.jpg",
    afterImage: "/images/projects/west-university-painted-brick/01-front-and-garage.jpg",
    afterAlt: "Two-story West University home with white painted brick, an arched entry and a dark garage door under oak branches",
    gallery: [
      { src: "/images/projects/west-university-painted-brick/02-front-entry.jpg", alt: "White painted brick front elevation with an arched entry, black front door and black window frames" },
      { src: "/images/projects/west-university-painted-brick/03-entry-and-garage.jpg", alt: "Painted brick entry steps, arched porch and garage with a black standing-seam metal roof accent" },
      { src: "/images/projects/west-university-painted-brick/04-garage-elevation.jpg", alt: "Garage elevation with white painted brick around an arched opening and a black garage door" },
    ],
    stats: [
      { label: "Location", value: "West University" },
      { label: "Service", value: "Exterior" },
      { label: "Surface", value: "Painted brick" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Painted Brick Exterior in West University, Houston",
    metaDescription:
      "Photos of a West University, Houston home with its brick painted white: the arched entry, front steps and garage elevation.",
  },
  {
    // Job photos supplied by Juan on 2026-10-07: kitchen cabinets in Cypress, TX.
    // Finished photos only; products and colors unconfirmed.
    slug: "cypress-two-tone-kitchen-cabinets",
    title: "Two-Tone Kitchen Cabinet Painting in Cypress",
    neighborhood: "Cypress, TX",
    service: "Cabinet Refinishing",
    serviceSlug: "cabinet-refinishing-houston-tx",
    summary:
      "A Cypress kitchen with blue painted lower cabinets, peninsula and island, and white painted upper cabinets, photographed after the work.",
    heroImage: "/images/projects/cypress-two-tone-kitchen/01-kitchen-perimeter-and-island.jpg",
    afterImage: "/images/projects/cypress-two-tone-kitchen/01-kitchen-perimeter-and-island.jpg",
    afterAlt: "Cypress kitchen with blue painted lower cabinets and island, white painted upper cabinets and granite counters",
    gallery: [
      {
        src: "/images/projects/cypress-two-tone-kitchen/02-kitchen-peninsula-and-island.jpg",
        alt: "Blue painted peninsula with open end shelves, a blue island and white painted upper cabinets around a wall oven",
      },
    ],
    stats: [
      { label: "Location", value: "Cypress, TX" },
      { label: "Service", value: "Cabinets" },
      { label: "Finish", value: "Two-tone" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Two-Tone Kitchen Cabinets in Cypress, TX",
    metaDescription:
      "Photos of a Cypress, TX kitchen with blue painted lower cabinets and island and white painted uppers.",
  },
  {
    // Job photos supplied by Juan on 2026-10-11: "cabinets in cypress". A photo with
    // people in the background was left out. Finished photos only; scope, products
    // and colors unconfirmed.
    slug: "cypress-white-teal-kitchen-cabinets",
    title: "White Kitchen Cabinets with a Teal Island in Cypress",
    neighborhood: "Cypress, TX",
    service: "Cabinet Refinishing",
    serviceSlug: "cabinet-refinishing-houston-tx",
    summary:
      "A Cypress kitchen with white raised-panel cabinets, a matching range hood and a teal island under a reclaimed-wood top, photographed after the work.",
    heroImage: "/images/projects/cypress-white-teal-kitchen/01-kitchen-through-arch.jpg",
    afterImage: "/images/projects/cypress-white-teal-kitchen/01-kitchen-through-arch.jpg",
    afterAlt: "Cypress kitchen seen through an arch: white raised-panel cabinets, beadboard bar panels and a teal island",
    gallery: [
      {
        src: "/images/projects/cypress-white-teal-kitchen/02-teal-island-white-uppers.jpg",
        alt: "Teal island with fluted posts below white upper cabinets with glass doors",
      },
      {
        src: "/images/projects/cypress-white-teal-kitchen/03-teal-island-detail.jpg",
        alt: "Close view of the teal island drawers, beadboard panel and fluted corner posts",
      },
      {
        src: "/images/projects/cypress-white-teal-kitchen/04-range-wall-and-hood.jpg",
        alt: "White cabinets and a white wood range hood with beadboard detail around the cooktop",
      },
      {
        src: "/images/projects/cypress-white-teal-kitchen/05-uppers-and-wall-ovens.jpg",
        alt: "White upper cabinets and the tall cabinet around the double wall ovens",
      },
    ],
    stats: [
      { label: "Location", value: "Cypress, TX" },
      { label: "Service", value: "Cabinets" },
      { label: "Finish", value: "White and teal" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "White Kitchen Cabinets and Teal Island in Cypress, TX",
    metaDescription:
      "Photos of a Cypress, TX kitchen with white raised-panel cabinets, a white range hood and a teal island.",
  },
  {
    // Job photos supplied by Juan on 2026-10-12: "exterior house in bellaire". Cropped tight to
    // remove paint buckets, plywood, cords and a ladder; a photo with a crew member left out.
    // Scope, products and colors unconfirmed.
    slug: "bellaire-painted-brick-ranch",
    title: "Painted Brick Ranch Exterior in Bellaire",
    neighborhood: "Bellaire, Houston",
    service: "Exterior Painting",
    serviceSlug: "exterior-painting-houston-tx",
    summary:
      "A one-story Bellaire ranch home with gray painted brick and white trim, windows and porch post, photographed after the work.",
    heroImage: "/images/projects/bellaire-painted-brick-ranch/01-painted-brick-front.jpg",
    afterImage: "/images/projects/bellaire-painted-brick-ranch/01-painted-brick-front.jpg",
    afterAlt: "Bellaire ranch home with gray painted brick walls, white trim and white divided-light windows",
    gallery: [
      {
        src: "/images/projects/bellaire-painted-brick-ranch/02-painted-brick-side.jpg",
        alt: "Side of the gray painted brick ranch with white window trim, fascia and porch post",
      },
    ],
    stats: [
      { label: "Location", value: "Bellaire" },
      { label: "Service", value: "Painted brick" },
      { label: "Finish", value: "Gray, white trim" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Painted Brick Ranch Exterior in Bellaire, TX",
    metaDescription: "Photos of a Bellaire ranch home with gray painted brick and white trim, windows and porch post.",
  },
  {
    // Job photos supplied by Juan on 2026-10-12: "exterior painting in katy" (two houses; Juan
    // confirmed both are in Katy). House number and two small yard signs blurred.
    // Scope, products and colors unconfirmed.
    slug: "katy-tan-stucco-exterior",
    title: "Tan Stucco Exterior Painting in Katy",
    neighborhood: "Katy, TX",
    service: "Exterior Painting",
    serviceSlug: "exterior-painting-houston-tx",
    summary:
      "A two-story Katy home with tan stucco, a stone-clad turret entry, dark brown trim, shutters and garage doors, photographed after the work.",
    heroImage: "/images/projects/katy-tan-stucco-exterior/01-front-and-garages.jpg",
    afterImage: "/images/projects/katy-tan-stucco-exterior/01-front-and-garages.jpg",
    afterAlt: "Katy two-story home with tan stucco walls, dark brown trim and shutters, and brown garage doors",
    gallery: [
      {
        src: "/images/projects/katy-tan-stucco-exterior/02-turret-and-entry.jpg",
        alt: "Tan stucco turret with stone base, dark trim around the arched windows and a brown single garage door",
      },
    ],
    stats: [
      { label: "Location", value: "Katy, TX" },
      { label: "Service", value: "Exterior" },
      { label: "Finish", value: "Tan, brown trim" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Tan Stucco Exterior Painting in Katy, TX",
    metaDescription: "Photos of a Katy, TX home with tan painted stucco, dark brown trim and shutters, and a stone turret entry.",
  },
  {
    // Second Katy house from the same 2026-10-12 batch. House number blurred; a parked car
    // cropped out; a photo shadow cropped out. Photos with a license plate or lawn-chair
    // clutter left out. Scope, products and colors unconfirmed.
    slug: "katy-white-stucco-exterior",
    title: "White Stucco Exterior Painting in Katy",
    neighborhood: "Katy, TX",
    service: "Exterior Painting",
    serviceSlug: "exterior-painting-houston-tx",
    summary:
      "A two-story Katy home with white stucco, an arched entry, white trim and gutters, and a rear patio with a pergola, photographed after the work.",
    heroImage: "/images/projects/katy-white-stucco-exterior/01-front-entry-arch.jpg",
    afterImage: "/images/projects/katy-white-stucco-exterior/01-front-entry-arch.jpg",
    afterAlt: "Katy two-story home with white stucco walls, an arched front entry and white trim behind palm trees",
    gallery: [
      {
        src: "/images/projects/katy-white-stucco-exterior/02-rear-patio-and-pergola.jpg",
        alt: "Back of the white stucco home with a second-floor balcony, covered patio and wood pergola",
      },
      {
        src: "/images/projects/katy-white-stucco-exterior/03-side-elevation.jpg",
        alt: "Side elevation of the white stucco home with white gutters, downspouts and a side door",
      },
    ],
    stats: [
      { label: "Location", value: "Katy, TX" },
      { label: "Service", value: "Exterior" },
      { label: "Finish", value: "White" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "White Stucco Exterior Painting in Katy, TX",
    metaDescription: "Photos of a Katy, TX home with white painted stucco, white trim and gutters, and a rear patio with a pergola.",
  },
  {
    // Job photos supplied by Juan on 2026-10-12: "exterior paint, stucco in west university".
    // House number blurred; a parked car cropped out; three photos with ladders/car left out.
    // Scope, products and colors unconfirmed.
    slug: "west-university-stucco-exterior",
    title: "Stucco Exterior Painting in West University",
    neighborhood: "West University, Houston",
    service: "Stucco Painting",
    serviceSlug: "stucco-painting-houston-tx",
    summary:
      "A two-story West University home with white painted stucco, stone accents, dark trim and dormers, photographed after the work.",
    heroImage: "/images/projects/west-university-stucco-exterior/01-front-stucco-and-stone.jpg",
    afterImage: "/images/projects/west-university-stucco-exterior/01-front-stucco-and-stone.jpg",
    afterAlt: "West University home with white painted stucco, a stone entry tower and dark window trim",
    gallery: [
      {
        src: "/images/projects/west-university-stucco-exterior/02-garage-wing-and-dormers.jpg",
        alt: "White stucco garage wing with an arched header, two dormers and a dark garage door",
      },
      {
        src: "/images/projects/west-university-stucco-exterior/03-side-elevation.jpg",
        alt: "Side elevation of the white stucco garage wing with dark gutters and downspouts",
      },
    ],
    stats: [
      { label: "Location", value: "West University" },
      { label: "Service", value: "Stucco exterior" },
      { label: "Finish", value: "White, dark trim" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Stucco Exterior Painting in West University, Houston",
    metaDescription: "Photos of a West University home with white painted stucco, stone accents and dark trim.",
  },
  {
    // Job photos supplied by Juan on 2026-10-12: "cabinets in bellaire". Two photos cropped
    // to remove a spray bottle and broom handle in the sink; a mid-job photo (ladder, drop
    // cloths) and a cluttered counter photo left out. Scope, products, colors unconfirmed.
    slug: "bellaire-white-glass-front-cabinets",
    title: "White Glass-Front Kitchen Cabinets in Bellaire",
    neighborhood: "Bellaire, Houston",
    service: "Cabinet Refinishing",
    serviceSlug: "cabinet-refinishing-houston-tx",
    summary:
      "A Bellaire kitchen with white glass-front upper cabinets and white beadboard base cabinets, photographed after the work.",
    heroImage: "/images/projects/bellaire-white-glass-cabinets/01-glass-front-uppers.jpg",
    afterImage: "/images/projects/bellaire-white-glass-cabinets/01-glass-front-uppers.jpg",
    afterAlt: "Bellaire kitchen with a run of white glass-front upper cabinets under a vaulted ceiling",
    gallery: [
      {
        src: "/images/projects/bellaire-white-glass-cabinets/02-glass-cabinets-by-refrigerator.jpg",
        alt: "White glass-front cabinets with mullions mounted beside the refrigerator",
      },
      {
        src: "/images/projects/bellaire-white-glass-cabinets/03-beadboard-base-cabinets.jpg",
        alt: "White beadboard base cabinet door and drawer at the end of the counter",
      },
    ],
    stats: [
      { label: "Location", value: "Bellaire" },
      { label: "Service", value: "Cabinets" },
      { label: "Finish", value: "White" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "White Glass-Front Kitchen Cabinets in Bellaire, TX",
    metaDescription: "Photos of a Bellaire kitchen with white glass-front upper cabinets and white beadboard base cabinets.",
  },
  {
    // Job photos supplied by Juan on 2026-10-11: "cabinets in sienna". Uppers photo
    // cropped to remove coffee items; island close-up cropped to remove counter items.
    // Photos with towels, boxes, dishes or a paint can left out. Scope, products and
    // colors unconfirmed.
    slug: "sienna-white-kitchen-cabinets",
    title: "White Raised-Panel Kitchen Cabinets in Sienna",
    neighborhood: "Sienna, TX",
    service: "Cabinet Refinishing",
    serviceSlug: "cabinet-refinishing-houston-tx",
    summary:
      "A Sienna kitchen with white raised-panel cabinets, black hardware and black granite counters, photographed after the work.",
    heroImage: "/images/projects/sienna-white-kitchen/01-white-cabinet-wall.jpg",
    afterImage: "/images/projects/sienna-white-kitchen/01-white-cabinet-wall.jpg",
    afterAlt: "Sienna kitchen wall of white raised-panel cabinets with black bar pulls and a black granite counter",
    gallery: [
      {
        src: "/images/projects/sienna-white-kitchen/02-long-cabinet-run.jpg",
        alt: "Long run of white upper and lower cabinets along the kitchen wall toward the hallway",
      },
      {
        src: "/images/projects/sienna-white-kitchen/03-uppers-and-wall-oven.jpg",
        alt: "White upper cabinets with crown molding around the corner and above the wall oven",
      },
      {
        src: "/images/projects/sienna-white-kitchen/04-island-door-detail.jpg",
        alt: "Close view of the white raised-panel doors and drawer fronts on the island",
      },
    ],
    stats: [
      { label: "Location", value: "Sienna, TX" },
      { label: "Service", value: "Cabinets" },
      { label: "Finish", value: "White" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "White Kitchen Cabinets in Sienna, TX",
    metaDescription: "Photos of a Sienna, TX kitchen with white raised-panel cabinets, black hardware and black granite counters.",
  },
  {
    // Job photos supplied by Juan on 2026-10-11: "cabinets in the heights" (two
    // kitchens; Juan confirmed both are in The Heights). Close-up with counter
    // clutter and low-res duplicates left out. Scope, products, colors unconfirmed.
    slug: "heights-charcoal-kitchen-cabinets",
    title: "Charcoal Shaker Kitchen Cabinets in The Heights",
    neighborhood: "The Heights, Houston",
    service: "Cabinet Refinishing",
    serviceSlug: "cabinet-refinishing-houston-tx",
    summary:
      "A Heights kitchen with charcoal shaker cabinets, a white waterfall island and a farmhouse sink, photographed after the work.",
    heroImage: "/images/projects/heights-charcoal-kitchen/01-charcoal-cabinets-waterfall-island.jpg",
    afterImage: "/images/projects/heights-charcoal-kitchen/01-charcoal-cabinets-waterfall-island.jpg",
    afterAlt: "Heights kitchen with charcoal shaker upper and lower cabinets, white counters and a white waterfall island",
    gallery: [
      {
        src: "/images/projects/heights-charcoal-kitchen/02-sink-wall-and-range.jpg",
        alt: "Charcoal shaker cabinets around the farmhouse sink, range and refrigerator",
      },
    ],
    stats: [
      { label: "Location", value: "The Heights" },
      { label: "Service", value: "Cabinets" },
      { label: "Finish", value: "Charcoal" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Charcoal Kitchen Cabinets in The Heights, Houston",
    metaDescription: "Photos of a Heights, Houston kitchen with charcoal shaker cabinets and a white waterfall island.",
  },
  {
    // Second Heights kitchen (same 2026-10-11 batch). Island photo cropped to remove
    // a bleach jug; two photos with cleaning supplies on the counter left out.
    slug: "heights-white-beadboard-kitchen-cabinets",
    title: "White Beadboard Kitchen Cabinets in The Heights",
    neighborhood: "The Heights, Houston",
    service: "Cabinet Refinishing",
    serviceSlug: "cabinet-refinishing-houston-tx",
    summary:
      "A Heights kitchen with white beadboard cabinets, a beadboard island with open shelves and a lattice wine rack, and matching built-ins, photographed after the work.",
    heroImage: "/images/projects/heights-white-beadboard-kitchen/01-kitchen-and-built-ins.jpg",
    afterImage: "/images/projects/heights-white-beadboard-kitchen/01-kitchen-and-built-ins.jpg",
    afterAlt: "Heights kitchen with white beadboard cabinets and black counters, a lattice-end island and white built-in shelves",
    gallery: [
      {
        src: "/images/projects/heights-white-beadboard-kitchen/02-beadboard-island.jpg",
        alt: "White beadboard island with open end shelves under a black granite top",
      },
    ],
    stats: [
      { label: "Location", value: "The Heights" },
      { label: "Service", value: "Cabinets" },
      { label: "Finish", value: "White" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "White Beadboard Kitchen Cabinets in The Heights, Houston",
    metaDescription: "Photos of a Heights, Houston kitchen with white beadboard cabinets, a beadboard island and built-ins.",
  },
  {
    // Job photos supplied by Juan on 2026-10-11: "cabinets in katy". Kitchen photo
    // cropped to remove a ladder; a dining-room photo with a broom on the floor was
    // left out. Finished photos only; scope, products and colors unconfirmed.
    slug: "katy-white-navy-kitchen-cabinets",
    title: "White and Navy Kitchen Cabinets in Katy",
    neighborhood: "Katy, TX",
    service: "Cabinet Refinishing",
    serviceSlug: "cabinet-refinishing-houston-tx",
    summary:
      "A Katy kitchen with white shaker cabinets and a navy island, plus white built-in cabinets beside the living-room fireplace, photographed after the work.",
    heroImage: "/images/projects/katy-cabinets-built-ins/01-white-kitchen-navy-island.jpg",
    afterImage: "/images/projects/katy-cabinets-built-ins/01-white-kitchen-navy-island.jpg",
    afterAlt: "Katy kitchen with white shaker cabinets to the ceiling, glass-front uppers and a navy island with a white counter",
    gallery: [
      {
        src: "/images/projects/katy-cabinets-built-ins/02-wall-ovens-and-uppers.jpg",
        alt: "White cabinets around double wall ovens and stacked glass-front uppers beside the range hood",
      },
      {
        src: "/images/projects/katy-cabinets-built-ins/03-living-room-built-in.jpg",
        alt: "White shaker built-in cabinet with a stone top and two oak floating shelves",
      },
      {
        src: "/images/projects/katy-cabinets-built-ins/04-fireplace-wall-built-ins.jpg",
        alt: "Living-room fireplace wall with white built-in cabinets and oak floating shelves on both sides",
      },
    ],
    stats: [
      { label: "Location", value: "Katy, TX" },
      { label: "Service", value: "Cabinets" },
      { label: "Finish", value: "White and navy" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "White and Navy Kitchen Cabinets in Katy, TX",
    metaDescription:
      "Photos of a Katy, TX kitchen with white shaker cabinets and a navy island, plus white living-room built-ins.",
  },
  {
    // Job photos supplied by Juan on 2026-10-08: exterior painting in Magnolia,
    // TX. Cropped to remove another contractor's yard sign, our van and
    // construction debris. Finished photos only; scope and products unconfirmed.
    slug: "magnolia-exterior-siding-repaint",
    title: "Exterior Painting on a Wooded Magnolia Home",
    neighborhood: "Magnolia, TX",
    service: "Exterior Painting",
    serviceSlug: "exterior-painting-houston-tx",
    summary:
      "A two-story home on a wooded Magnolia lot with green lap siding and yellow trim, photographed after the exterior work.",
    heroImage: "/images/projects/magnolia-exterior-siding/01-front-and-porch.jpg",
    afterImage: "/images/projects/magnolia-exterior-siding/01-front-and-porch.jpg",
    afterAlt: "Two-story Magnolia home with green lap siding, yellow trim, a turret roof and a wraparound porch among pine trees",
    gallery: [
      {
        src: "/images/projects/magnolia-exterior-siding/02-garage-and-side.jpg",
        alt: "Garage wing and side gable with green lap siding, yellow trim and round gable vents",
      },
    ],
    stats: [
      { label: "Location", value: "Magnolia, TX" },
      { label: "Service", value: "Exterior" },
      { label: "Home", value: "Two-story, wooded lot" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Exterior Painting Project in Magnolia, TX",
    metaDescription:
      "Photos of a two-story Magnolia, TX home with green lap siding and yellow trim on a wooded lot, after exterior painting.",
  },
  {
    // Job photos supplied by Juan on 2026-10-08: exterior painting in Pearland,
    // TX. House number, a license plate and a security-company sign blurred.
    // Finished photos only; scope and products unconfirmed.
    slug: "pearland-exterior-hardie-repaint",
    title: "Exterior Painting on a Pearland Hardie Home",
    neighborhood: "Pearland, TX",
    service: "Exterior Painting",
    serviceSlug: "exterior-painting-houston-tx",
    summary:
      "A one-story Pearland home with sage-green lap and shingle siding and cream trim, gutters and garage door, photographed after the exterior work.",
    heroImage: "/images/projects/pearland-exterior-hardie/01-side-elevation.jpg",
    afterImage: "/images/projects/pearland-exterior-hardie/01-side-elevation.jpg",
    afterAlt: "Pearland home with sage-green lap siding, a shingle-siding accent panel, cream window trim and cream downspouts",
    gallery: [
      { src: "/images/projects/pearland-exterior-hardie/02-front-and-garage.jpg", alt: "Front of the home with a sage-green gable, cream trim around the garage openings and a cream garage door" },
      { src: "/images/projects/pearland-exterior-hardie/03-front-corner.jpg", alt: "Front corner with sage-green siding, cream trim and columns at the entry" },
      { src: "/images/projects/pearland-exterior-hardie/04-garage-angle.jpg", alt: "Garage elevation with sage-green siding, a round gable vent and cream trim and gutters" },
    ],
    stats: [
      { label: "Location", value: "Pearland, TX" },
      { label: "Service", value: "Exterior" },
      { label: "Siding", value: "Lap and shingle" },
      { label: "Warranty", value: "5 years" },
    ],
    metaTitle: "Exterior Painting Project in Pearland, TX",
    metaDescription:
      "Photos of a Pearland, TX home after exterior painting: sage-green lap and shingle siding with cream trim, gutters and garage door.",
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

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/

/** The project's dateCompleted when it is a real YYYY-MM-DD date, else undefined. */
export function getCompletedDate(project: CaseStudy): string | undefined {
  const m = project.dateCompleted?.match(ISO_DATE)
  if (!m) return undefined
  const d = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]))
  if (d.getUTCFullYear() !== +m[1] || d.getUTCMonth() !== +m[2] - 1 || d.getUTCDate() !== +m[3]) return undefined
  return project.dateCompleted
}

/** "March 2026" for a valid dateCompleted (UTC, so no timezone day-shift). */
export function formatCompletedMonth(project: CaseStudy): string | undefined {
  const iso = getCompletedDate(project)
  if (!iso) return undefined
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
}

/** Related city pages, resolved against SERVICE_AREAS (unknown slugs dropped, no duplicates). */
export function getRelatedServiceAreas(
  project: CaseStudy,
  exclude: string[] = [],
): { name: string; slug: string }[] {
  const seen = new Set(exclude)
  const out: { name: string; slug: string }[] = []
  for (const slug of project.relatedServiceAreas ?? []) {
    if (seen.has(slug)) continue
    const area = SERVICE_AREAS.find((a) => a.slug === slug)
    if (!area) continue
    seen.add(slug)
    out.push({ name: area.name, slug: area.slug })
  }
  return out
}
