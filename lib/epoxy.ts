// lib/epoxy.ts
// Single source of truth for the Houston Superior Epoxy brand, which lives on
// its own domain (houstonsuperiorepoxy.com). Reuses the parent company's real NAP
// from lib/business.ts so phone/email/address can never drift between the two
// properties — only the brand identity and service catalog differ.

import { BUSINESS, EPOXY_URL } from "./business";

export const EPOXY = {
  name: "Houston Superior Epoxy",
  parent: BUSINESS.name,
  // Shared with the parent site's nav/footer via business.ts so the two can
  // never disagree about where the epoxy brand lives.
  url: EPOXY_URL,
  tagline: "Showroom Floors. Industrial Strength.",
  // NAP is inherited — never redeclare it.
  phoneDisplay: BUSINESS.phone,
  phoneHref: `tel:${BUSINESS.phoneTel}`,
  smsHref: `sms:${BUSINESS.phoneTel}`,
  phoneE164: BUSINESS.phoneE164,
  email: BUSINESS.email,
  // Owner-confirmed 2026-10-09 for houstonsuperiorepoxy.com. No review figures:
  // ratings are per Google office profile and belong to the painting company.
  warranty: "Limited Lifetime Workmanship Warranty",
  foundedYear: 2019,

  // ─── Scheduler (Houston Superior Groups — Contractor ERP) ─────────
  // The epoxy brand has its OWN booking page, separate from the parent
  // painting company's, so appointments land on the epoxy calendar with the
  // epoxy service list. Do not point this at BUSINESS.scheduler.
  scheduler: {
    bookingUrl: "https://app.houstonsuperiorgroups.com/book/houston-superior-epoxy",
    label: "Houston Superior Epoxy Scheduler",
  },
} as const;

export const PHONE_HREF = EPOXY.phoneHref;
export const SMS_HREF = EPOXY.smsHref;

/* ─── Why Us ───────────────────────────────────────────── */

export const WHY_US: Array<{ title: string; body: string; icon: string }> = [
  {
    icon: "grinder",
    title: "Diamond Grinding, Never Acid Etching",
    body: "We mechanically open the concrete with industrial diamond tooling so the coating locks into the slab. Acid etching and pressure washing leave a slick surface that peels.",
  },
  {
    icon: "crack",
    title: "Full Crack & Spall Repair",
    body: "Every crack, pit, and control joint is cut out and filled with structural polyurea before a drop of coating goes down. Houston's shifting clay soil makes this non-negotiable.",
  },
  {
    icon: "layers",
    title: "Industrial Epoxy Build Coat",
    body: "100% solids industrial epoxy at 12–16 mils — four to six times the thickness of a big-box DIY kit — for genuine impact and abrasion resistance.",
  },
  {
    icon: "shield",
    title: "Polyaspartic Topcoat",
    body: "A UV-stable polyaspartic wear layer goes over the flake. It will not amber or yellow in Texas sun, and it resists hot tire pickup that destroys ordinary epoxy.",
  },
  {
    icon: "flask",
    title: "Chemical & Stain Resistant",
    body: "Gasoline, brake fluid, motor oil, road salt, and pool chemicals wipe clean off the sealed surface instead of soaking into bare concrete.",
  },
  {
    icon: "tire",
    title: "Hot Tire Pickup Proof",
    body: "Tires leave a Houston driveway at 140°F+. Our topcoat's thermal stability means it will not lift or delaminate when you pull into the garage.",
  },
  {
    icon: "sun",
    title: "UV Stable, Won't Yellow",
    body: "Standard epoxy ambers within a season of indirect sun exposure. Polyaspartic keeps light greys and whites looking true for years.",
  },
  {
    icon: "award",
    title: "Written Warranty",
    body: "Residential garage systems carry our written Limited Lifetime Workmanship Warranty, from a company serving Houston since 2019.",
  },
];

/* ─── Services ─────────────────────────────────────────── */

/** The three flagship systems, shown as image cards. */
export const SERVICES_FEATURED: Array<{
  id: string;
  title: string;
  blurb: string;
  priceFrom: string;
  image: string;
  imageAlt: string;
  bullets: string[];
}> = [
  {
    id: "garage-epoxy",
    title: "Garage Epoxy",
    blurb:
      "Full-flake garage systems with a polyaspartic topcoat. The showroom floor most Houston homeowners are actually after.",
    priceFrom: "From $4.50 / sq ft",
    image: "/images/epoxy/hero-luxury-garage.png",
    imageAlt:
      "Luxury residential garage with a high-gloss charcoal epoxy flake floor",
    bullets: [
      "Diamond-ground prep",
      "Limited Lifetime Workmanship Warranty",
      "Hot tire pickup proof",
    ],
  },
  {
    id: "commercial-epoxy",
    title: "Commercial & Warehouse",
    blurb:
      "Retail, restaurant, showroom, medical, and high-build warehouse systems rated for forklift traffic and heavy point loading.",
    priceFrom: "Custom quoted",
    image: "/images/epoxy/gallery-commercial.png",
    imageAlt:
      "Large warehouse with a seamless light grey high-gloss epoxy floor and yellow safety striping",
    bullets: [
      "Night and weekend installs",
      "Zero operational downtime",
      "OSHA safety line striping",
    ],
  },
  {
    id: "metallic-epoxy",
    title: "Metallic Epoxy",
    blurb:
      "Pearlescent marbled floors with real depth and movement. A statement finish for showrooms, retail, and man caves.",
    priceFrom: "Custom quoted",
    image: "/images/epoxy/gallery-metallic.png",
    imageAlt:
      "Metallic epoxy floor with swirling copper, bronze and charcoal pigments under a high-gloss coat",
    bullets: [
      "No two floors identical",
      "Mirror-gloss finish",
      "Custom color blending",
    ],
  },
];

/** Supporting services, shown as a compact list. */
export const SERVICES_MORE: Array<{ title: string; body: string }> = [
  {
    title: "Decorative Flake Systems",
    body: "Full-broadcast vinyl chip in eight designer blends. Slip resistant, seamless, easy to clean.",
  },
  {
    title: "Polyaspartic Floors",
    body: "One-day cure systems. Drive on the floor in 24 hours instead of waiting most of a week.",
  },
  {
    title: "Concrete Grinding",
    body: "Diamond surface profiling and old coating removal, dust-controlled with HEPA extraction.",
  },
  {
    title: "Concrete Repairs",
    body: "Spall, pit, joint, and crack rebuilding to bring a failing slab back to a coatable surface.",
  },
  {
    title: "Patio & Pool Deck Coatings",
    body: "UV-stable exterior systems with anti-slip additive for Houston sun and standing water.",
  },
];

/* ─── 8-Step Process ───────────────────────────────────── */

export const PROCESS: Array<{ number: number; title: string; body: string }> = [
  {
    number: 1,
    title: "Inspection",
    body: "We moisture-test the slab, map every crack and spall, check for existing coatings and sealers, and confirm the system your concrete can actually hold.",
  },
  {
    number: 2,
    title: "Diamond Grinding",
    body: "Industrial planetary grinders with diamond tooling open the concrete to a CSP-2 profile. HEPA extraction keeps the dust out of your home.",
  },
  {
    number: 3,
    title: "Crack Repair",
    body: "Cracks are chased out into a V-groove, vacuumed, and filled with structural polyurea that cures harder than the surrounding slab.",
  },
  {
    number: 4,
    title: "Concrete Preparation",
    body: "Control joints are treated, low spots are leveled, oil-contaminated areas are degreased, and the entire slab is vacuumed twice.",
  },
  {
    number: 5,
    title: "Industrial Primer",
    body: "A deep-penetrating moisture-tolerant primer soaks into the open concrete and creates the mechanical bond the whole system depends on.",
  },
  {
    number: 6,
    title: "Decorative Flake Broadcast",
    body: "Vinyl chip is hand-broadcast to full rejection into the wet epoxy base coat, so the color is consistent edge to edge with no thin spots.",
  },
  {
    number: 7,
    title: "Scrape and Vacuum",
    body: "Once cured, the excess flake is scraped back and vacuumed to a uniform texture. This is the step budget installers skip, and you feel it underfoot.",
  },
  {
    number: 8,
    title: "Polyaspartic Topcoat",
    body: "Two coats of UV-stable polyaspartic seal the flake, delivering the gloss, the chemical resistance, and the hot tire durability.",
  },
];

/* ─── Flake Colors ───────────────��───�����─────────────────── */

export type FlakeColor = {
  id: string;
  name: string;
  image: string;
  description: string;
  /** Marks our most-requested blends so the grid can badge them. */
  popular?: boolean;
};

export type FlakeSeries = {
  id: string;
  name: string;
  blurb: string;
  colors: FlakeColor[];
};

/**
 * Swatches are cropped from the manufacturer's own printed flake charts, so the
 * names and spellings below intentionally match the vendor sheets (including
 * "Gernet") rather than being normalized — customers cross-reference them.
 * All blends are the 1/4 in. standard inventory size.
 */
export const FLAKE_SERIES: FlakeSeries[] = [
  {
    id: "stone",
    name: "Stone Series",
    blurb:
      "Quarried-stone tones — cool slates, warm sandstones, and true blacks.",
    colors: [
      {
        id: "basalt",
        name: "Basalt",
        image: "/images/epoxy/flakes/basalt.webp",
        description:
          "Cool blue-grey slate with steel highlights. Reads modern under LED shop lights.",
      },
      {
        id: "schist",
        name: "Schist",
        image: "/images/epoxy/flakes/schist.webp",
        description:
          "Soft white with pale grey veining. The brightest floor we install.",
      },
      {
        id: "obsidian",
        name: "Obsidian",
        image: "/images/epoxy/flakes/obsidian.webp",
        description:
          "Warm taupe and sandstone cut with slate blue. Unexpectedly versatile.",
      },
      {
        id: "gernet",
        name: "Gernet",
        image: "/images/epoxy/flakes/gernet.webp",
        description:
          "Deep russet and cocoa with mauve undertones. Rich and earthy.",
      },
      {
        id: "pumice",
        name: "Pumice",
        image: "/images/epoxy/flakes/pumice.webp",
        description: "Blush, cream, and slate. Warm without reading pink.",
      },
      {
        id: "dolerite",
        name: "Dolerite",
        image: "/images/epoxy/flakes/dolerite.webp",
        description:
          "Rose-tan stone against charcoal. High contrast, warm base.",
      },
      {
        id: "carbon",
        name: "Carbon",
        image: "/images/epoxy/flakes/carbon.webp",
        description:
          "Near-black charcoal on black. The darkest blend on the board.",
      },
      {
        id: "lanai-grey",
        name: "Lanai Grey",
        image: "/images/epoxy/flakes/lanai-grey.webp",
        description:
          "Clean mid-grey with white and graphite. A safe, timeless default.",
        popular: true,
      },
      {
        id: "sable",
        name: "Sable",
        image: "/images/epoxy/flakes/sable.webp",
        description:
          "Warm camel and driftwood browns. Hides Houston dust well.",
      },
    ],
  },
  {
    id: "signature",
    name: "Signature Series",
    blurb:
      "Our broadest range — neutrals that disappear, plus a few that do not.",
    colors: [
      {
        id: "coyote",
        name: "Coyote",
        image: "/images/epoxy/flakes/coyote.webp",
        description:
          "Cream and tan speckled with black and rust. Busy enough to hide everything.",
        popular: true,
      },
      {
        id: "rocky-arrow",
        name: "Rocky Arrow",
        image: "/images/epoxy/flakes/rocky-arrow.webp",
        description:
          "Quiet grey-taupe neutral. Almost no contrast, very forgiving.",
      },
      {
        id: "stone-wash",
        name: "Stone Wash",
        image: "/images/epoxy/flakes/stone-wash.webp",
        description:
          "Cool greys lifted with navy blue flake. Subtle color, still neutral.",
      },
      {
        id: "dovetail",
        name: "Dovetail",
        image: "/images/epoxy/flakes/dovetail.webp",
        description:
          "Warm greige with soft charcoal. Pairs with almost any wall color.",
      },
      {
        id: "stargazer",
        name: "Stargazer",
        image: "/images/epoxy/flakes/stargazer.webp",
        description: "Light cool grey and white. Bright, clean, showroom-like.",
      },
      {
        id: "shoreline",
        name: "Shoreline",
        image: "/images/epoxy/flakes/shoreline.webp",
        description: "Sand and cream punctuated with black. Warm and coastal.",
      },
      {
        id: "tidal-wave",
        name: "Tidal Wave",
        image: "/images/epoxy/flakes/tidal-wave.webp",
        description:
          "Slate blue over cream and grey. Our boldest blue without going loud.",
      },
      {
        id: "creekbed",
        name: "Creekbed",
        image: "/images/epoxy/flakes/creekbed.webp",
        description:
          "Tan, olive, and cream river tones. Excellent at hiding dust and leaves.",
        popular: true,
      },
      {
        id: "madras",
        name: "Madras",
        image: "/images/epoxy/flakes/madras.webp",
        description:
          "Taupe and grey with cream lift. Warm neutral, low contrast.",
      },
      {
        id: "stony-creek",
        name: "Stony Creek",
        image: "/images/epoxy/flakes/stony-creek.webp",
        description:
          "Light grey and white with charcoal grit. Crisp and utilitarian.",
      },
      {
        id: "portobello",
        name: "Portobello",
        image: "/images/epoxy/flakes/portobello.webp",
        description:
          "Espresso base with tan and peach flake. Deep, warm, dramatic.",
      },
      {
        id: "stonehenge",
        name: "Stonehenge",
        image: "/images/epoxy/flakes/stonehenge.webp",
        description:
          "Balanced grey, white, and charcoal. The classic garage grey.",
        popular: true,
      },
      {
        id: "daredevil",
        name: "Daredevil",
        image: "/images/epoxy/flakes/daredevil.webp",
        description:
          "Black and white shot through with true red. For shops with an identity.",
      },
      {
        id: "safari",
        name: "Safari",
        image: "/images/epoxy/flakes/safari.webp",
        description: "Camel and khaki with soft brown. Warm, even, and calm.",
      },
      {
        id: "nightfall",
        name: "Nightfall",
        image: "/images/epoxy/flakes/nightfall.webp",
        description: "Charcoal and slate green over black. Moody and modern.",
      },
      {
        id: "gravel",
        name: "Gravel",
        image: "/images/epoxy/flakes/gravel.webp",
        description:
          "Pale grey and white with a light touch. Opens up a dim garage.",
      },
      {
        id: "cabin-fever",
        name: "Cabin Fever",
        image: "/images/epoxy/flakes/cabin-fever.webp",
        description: "Soft grey-green and white. Quiet, slightly organic.",
      },
      {
        id: "outback",
        name: "Outback",
        image: "/images/epoxy/flakes/outback.webp",
        description:
          "Camel and cream broken up with black. Warm with real contrast.",
      },
    ],
  },
];

/** Flat list of every blend, in chart order. */
export const FLAKE_COLORS: FlakeColor[] = FLAKE_SERIES.flatMap((s) => s.colors);

/* ─── Professional vs DIY ���─────────────────────────────── */

export const COMPARISON_ROWS: Array<{
  feature: string;
  ours: string;
  theirs: string;
}> = [
  {
    feature: "Coating Thickness",
    ours: "12–16 mils, 100% solids",
    theirs: "2–3 mils, water-based",
  },
  {
    feature: "Surface Prep",
    ours: "Industrial diamond grinding to CSP-2",
    theirs: "Acid etch from a bottle",
  },
  {
    feature: "Adhesion",
    ours: "Mechanical bond into open concrete",
    theirs: "Surface-level chemical bond",
  },
  {
    feature: "Warranty",
    ours: "Limited Lifetime Workmanship Warranty",
    theirs: "None",
  },
  {
    feature: "UV Stability",
    ours: "Polyaspartic — will not yellow",
    theirs: "Ambers within one season",
  },
  {
    feature: "Hot Tire Resistance",
    ours: "Rated for 140°F+ tire contact",
    theirs: "Common failure point — lifts and peels",
  },
];

/* ─── Pricing ──────────────────────────────────────────── */

/**
 * Rough installed price per square foot (owner-approved 2026-10-04, same as
 * houstonsuperiorepoxy.com): max(sqft x $4.50, $1,000). The written estimate sets the price.
 */
export const RATE_PER_SQFT = 4.5;

/** Mobilization floor — small jobs still need a full crew, truck, and grinder. */
export const PROJECT_MINIMUM = 1000;

export const GARAGE_SIZES: Array<{ id: string; label: string; sqft: number }> =
  [
    { id: "1-car", label: "1-car garage", sqft: 250 },
    { id: "2-car", label: "2-car garage", sqft: 450 },
    { id: "3-car", label: "3-car garage", sqft: 700 },
    { id: "4-car", label: "4-car or shop", sqft: 1000 },
  ];

export function estimateGarageCost(sqft: number) {
  return Math.max(PROJECT_MINIMUM, sqft * RATE_PER_SQFT);
}

/* ─── FAQ ──────────────────────────────────────────────── */

export const FAQS: Array<{ question: string; answer: string }> = [
  {
    question: "How much does garage epoxy flooring cost in Houston?",
    answer:
      "Rough pricing is $4.50 per square foot with a $1,000 minimum, so a standard two-car garage (about 450 sq ft) is roughly $2,025. Slab repairs and the chosen system can change that; your written estimate sets the final price. Metallic and commercial systems are quoted on site.",
  },
  {
    question: "How long does an epoxy garage floor last?",
    answer:
      "How long a floor lasts depends mostly on surface preparation and use. A coating over diamond-ground concrete holds far better than the same coating over acid-etched or unprepared concrete, which is why we grind every slab.",
  },
  {
    question: "How long before I can park on my new floor?",
    answer:
      "Walk-on and drive-on times depend on the products and the weather; your estimate gives the schedule, and we tell you exactly when the floor is ready for foot traffic and for vehicles.",
  },
  {
    question: "Is epoxy or polyaspartic better for a Houston garage?",
    answer:
      "The best system uses both. Epoxy is the ideal build coat because it is thick, rigid, and bonds aggressively to prepared concrete. Polyaspartic is the ideal topcoat because it is UV stable, cures fast, and resists hot tire pickup. Using polyaspartic alone is thin and expensive; using epoxy alone will amber and can lift under hot tires in the Texas climate.",
  },
  {
    question: "Will epoxy peel off my concrete?",
    answer:
      "Peeling is almost always a preparation failure, not a product failure. Coatings peel when they are applied over a slick, unopened, or contaminated surface — most commonly after acid etching or pressure washing instead of mechanical grinding. We diamond grind every slab, and residential garage systems carry our written Limited Lifetime Workmanship Warranty.",
  },
  {
    question: "Can you coat a garage floor that is already cracked or stained?",
    answer:
      "Yes, and most of the floors we coat are. Cracks are cut into a V-groove and filled with structural polyurea, spalled and pitted areas are rebuilt, and oil-contaminated concrete is degreased and, where necessary, mechanically removed. The repairs are completed and cured before any coating goes down.",
  },
  {
    question: "Does epoxy flooring get slippery when wet?",
    answer:
      "A full flake broadcast creates a naturally textured surface with meaningfully more grip than smooth sealed concrete. For pool decks, commercial kitchens, or entryways where standing water is expected, we can add an aluminum oxide or polymer grit anti-slip additive to the topcoat.",
  },
  {
    question: "Do you install commercial and warehouse epoxy floors?",
    answer:
      "Yes. We install commercial epoxy for retail, restaurant, showroom, medical, and light industrial spaces, and high-build systems engineered for forklift traffic and heavy point loading in warehouses. Commercial work can be scheduled around your business hours.",
  },
  {
    question: "What areas around Houston do you serve?",
    answer:
      "We install epoxy flooring throughout the greater Houston metro, including Cypress, Katy, Tomball, Spring, The Woodlands, Sugar Land, Memorial, Bellaire, West University, River Oaks, Pearland, Richmond, and Jersey Village.",
  },
  {
    question: "Is a garage floor coating worth the money?",
    answer:
      "A coated garage floor stops concrete dusting, resists oil and chemical staining, cleans with a mop instead of a degreaser, brightens the space by reflecting light, and reads as finished square footage to buyers. Over its service life, a professionally installed system is easier to keep clean than bare concrete.",
  },
];

/* ─── Reviews ──────────────────────────────────────────── */

/**
 * Real customer reviews.
 *
 * INTENTIONALLY EMPTY. Paste genuine Google reviews here and they render
 * automatically as cards; until then the section shows a "read our reviews on
 * Google" CTA plus factual trust signals instead of invented testimonials.
 *
 * No rating figures: Google ratings are per painting-company office profile
 * and are never combined or borrowed for the epoxy brand.
 */
export const REVIEWS: Array<{
  name: string;
  location: string;
  quote: string;
  service: string;
}> = [];

/* ─── Service Areas ────────────────────────────────────── */

export const SERVICE_AREAS = [
  "Cypress",
  "Katy",
  "Tomball",
  "Spring",
  "The Woodlands",
  "Sugar Land",
  "Memorial",
  "Bellaire",
  "West University",
  "River Oaks",
  "Pearland",
  "Richmond",
  "Jersey Village",
  "Houston Heights",
  "Champions",
  "Klein",
];
