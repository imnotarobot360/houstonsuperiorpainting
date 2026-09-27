import { BUSINESS } from "./business"
import { EPOXY } from "./epoxy"

/**
 * Single source of truth for all four estimate funnels.
 *
 * Every service-specific difference — questions, options, copy, imagery, which
 * booking calendar to use — lives in this file. `components/estimate-funnel.tsx`
 * renders whatever it finds here, so adding a question or a whole new service
 * is a config edit, not a component edit. This is the whole reason the funnel
 * is not four copy-pasted forms.
 */

export type FunnelService = "interior" | "exterior" | "cabinets" | "epoxy"

export interface FunnelQuestion {
  /** Stable key. Persisted into leads.answers — renaming it orphans old data. */
  id: string
  question: string
  /** Short helper shown under the question. Optional. */
  hint?: string
  options: string[]

  /**
   * Render this question on the same screen as the one before it.
   *
   * Grouping is declared here rather than by nesting questions into step
   * arrays so that `questions` stays a flat list. The flat order is what the
   * office notification email and `leads.answers` are built from, and both
   * would break if the shape changed. See `questionSteps()`.
   *
   * Two cheap related questions on one screen read as less work than two
   * screens, which is the entire point: perceived length drives abandonment
   * more than actual question count does.
   */
  groupWithPrevious?: boolean

  /**
   * Allow several options at once.
   *
   * Stored as a `string[]`, so anything reading `answers` must tolerate both
   * shapes. Multi-select questions cannot auto-advance — there is no way to
   * know someone is finished choosing — so any step containing one gets an
   * explicit Continue button.
   */
  multiSelect?: boolean

  /**
   * Let the visitor continue without answering.
   *
   * Only for genuinely optional detail. A required question with no answer
   * blocks the Continue button on a grouped step.
   */
  optional?: boolean
}

export interface FunnelConfig {
  service: FunnelService
  /** Human label used in emails, the confirmation page and the DB. */
  label: string
  /** Legacy segment under /estimate/. Kept only so the old URLs can redirect. */
  slug: string

  /**
   * Live ad landing segment under /chatgpt/.
   *
   * These are the URLs in running ChatGPT Ads campaigns — changing one breaks
   * live traffic, so they are treated as fixed. Note the cabinet slug says
   * "refinishing", not "painting".
   */
  adSlug: string
  /** Preserved verbatim from the pages these funnels replaced. */
  metaTitle: string
  metaDescription: string

  // ── Landing page copy ───────────────────────────────────────────────────
  eyebrow: string
  h1: string
  subhead: string
  /** 3 short proof points shown under the hero. Kept to verifiable claims. */
  proofPoints: string[]
  /** Hero/section image. Must exist in /public/images. */
  heroImage: string
  heroImageAlt: string

  // ── Funnel questions (steps 1..n) ───────────────────────────────────────
  questions: FunnelQuestion[]

  /**
   * Small link shown under the first question only, for visitors whose job this
   * funnel is not built to quote.
   *
   * The one sanctioned exit on these pages. Deliberately scoped to step one: by
   * step two someone has invested taps and should be finishing, and an escape
   * hatch there costs more leads than it rescues.
   */
  firstStepNote?: {
    text: string
    linkLabel: string
    href: string
  }

  /** Prompt shown on the optional photo step. */
  photoPrompt: string

  /**
   * Booking calendar for this service.
   *
   * Epoxy has its own calendar with its own service list (see lib/epoxy.ts,
   * which explicitly warns against pointing it at the parent). Sending an
   * epoxy lead to the painting calendar would book the wrong crew.
   */
  bookingUrl: string
  bookingLabel: string
}

/** Timeline question is identical across services, so it's defined once. */
const TIMELINE_QUESTION: FunnelQuestion = {
  id: "timeline",
  question: "When are you hoping to start?",
  hint: "An honest answer here helps us give you a realistic date.",
  options: ["As soon as possible", "Within 30 days", "1–3 months", "Just planning ahead"],
}

export const FUNNELS: Record<FunnelService, FunnelConfig> = {
  interior: {
    service: "interior",
    label: "Interior Painting",
    slug: "interior",
    adSlug: "interior-painting-houston",
    metaTitle: "Professional Interior Painting in Houston | Free Estimate",
    metaDescription:
      "Detailed preparation, premium coatings and clean professional finishes for Houston-area homes. Free written estimate, no obligation.",
    eyebrow: "Interior painting · Houston",
    h1: "Get your interior painting estimate",
    subhead:
      "Answer a few questions and we'll come measure, walk the rooms with you, and put a written line-item price in your hands.",
    proofPoints: [
      "Written line-item estimate — not a lump sum",
      `${BUSINESS.trust.warrantyYears}-year written warranty`,
      "Furniture moved and floors covered before we open a can",
    ],
    heroImage: "/images/luxury/project-interior.png",
    heroImageAlt: "Freshly painted Houston living room with clean trim lines",
    /**
     * Interior questions mirror the dedicated paid estimator
     * (components/interior/interior-estimator.tsx) so every answer it submits
     * persists into `leads.answers` and renders on the confirmation page and
     * the office email. The paid estimator drives its own conditional UI (room
     * counts vs. sq ft for `size`) and reuses these ids; the shared organic
     * funnel renders these option lists directly.
     */
    questions: [
      {
        id: "scope",
        question: "What would you like painted?",
        options: ["Whole interior", "Several rooms", "One or two rooms", "Walls & trim only", "Something else"],
      },
      {
        id: "size",
        question: "About how large is the project?",
        hint: "A rough answer is fine — we confirm everything on-site.",
        options: [
          "Under 1,500 sq ft",
          "1,500 – 2,499 sq ft",
          "2,500 – 3,499 sq ft",
          "3,500 – 4,499 sq ft",
          "4,500+ sq ft",
          "Not sure",
        ],
      },
      {
        id: "includes",
        question: "What should we include?",
        hint: "This is what changes the price the most.",
        multiSelect: true,
        options: ["Walls", "Ceilings", "Baseboards & trim", "Doors & closets", "Crown molding", "Drywall / texture repairs"],
      },
      {
        id: "prep",
        question: "How much prep does your home need?",
        hint: "Prep is the difference between a coat that lasts and one that peels.",
        options: [
          "Good condition — cosmetic only",
          "Some repairs needed",
          "Heavy prep — lots of repairs",
          "Not sure",
        ],
      },
      {
        id: "timeline",
        question: "When would you like to start?",
        options: ["As soon as possible", "Within 1 – 2 weeks", "Within a month", "1 – 3 months", "Just researching prices"],
      },
    ],
    photoPrompt: "Photos of the rooms help us price trim and ceiling work before we arrive.",
    bookingUrl: BUSINESS.scheduler.embedUrl,
    bookingLabel: BUSINESS.scheduler.label,
  },

  exterior: {
    service: "exterior",
    label: "Exterior Painting",
    slug: "exterior",
    adSlug: "exterior-painting-houston",
    metaTitle: "Houston Exterior Painting Built for the Texas Climate | Free Estimate",
    metaDescription:
      "Professional surface preparation, premium exterior coatings and durable finishes designed for Houston heat, humidity and weather. Free written estimate.",
    eyebrow: "Exterior painting · Houston",
    h1: "Get your exterior painting estimate",
    subhead:
      "Houston heat and humidity punish a bad prep job. Tell us about your home and we'll quote the prep in writing, line by line.",
    proofPoints: [
      "Prep itemised in writing — wash, scrape, caulk, prime",
      `${BUSINESS.trust.warrantyYears}-year written warranty`,
      "We paint in the weather window, not through the storm",
    ],
    heroImage: "/images/exterior-after-1.jpg",
    heroImageAlt: "Repainted Houston home exterior with fresh trim and siding",
    questions: [
      {
        id: "scope",
        question: "What are we painting?",
        options: ["Whole exterior", "Siding only", "Trim and doors only", "Not sure yet"],
      },
      {
        id: "stories",
        question: "How tall is the house?",
        hint: "Height decides the access equipment, which is a real cost line.",
        options: ["Single-story", "Two-story", "Three-story or more", "Not sure yet"],
      },
      {
        id: "condition",
        question: "How is the current paint holding up?",
        hint: "Peeling and bare wood need more prep — this is where quotes differ most.",
        options: ["Still sound, just dated", "Some peeling or cracking", "Bare wood showing", "Not sure yet"],
      },
      TIMELINE_QUESTION,
    ],
    photoPrompt: "A few photos of the worst-looking wall let us price prep accurately.",
    bookingUrl: BUSINESS.scheduler.embedUrl,
    bookingLabel: BUSINESS.scheduler.label,
  },

  cabinets: {
    service: "cabinets",
    label: "Cabinet Refinishing",
    slug: "cabinets",
    // "refinishing", not "painting" — this is the live ad URL.
    adSlug: "cabinet-refinishing-houston",
    metaTitle: "Transform Your Kitchen Without Replacing Your Cabinets | Houston",
    metaDescription:
      "Professional cabinet refinishing with detailed preparation and durable spray-applied finishes. Free written estimate in Houston, Katy and Cypress.",
    eyebrow: "Cabinet refinishing · Houston",
    h1: "Get your cabinet refinishing estimate",
    subhead:
      "Refinishing your existing boxes costs a fraction of replacement. Tell us about your kitchen and we'll quote it in writing.",
    proofPoints: [
      "A fraction of the cost of new cabinets",
      `${BUSINESS.trust.warrantyYears}-year written warranty`,
      "Doors sprayed for a factory-smooth finish, not brushed",
    ],
    heroImage: "/images/luxury/project-kitchen.png",
    heroImageAlt: "Refinished white kitchen cabinets in a Houston home",
    questions: [
      {
        id: "scope",
        question: "Which cabinets are we refinishing?",
        options: ["Kitchen only", "Kitchen and island", "Kitchen and bathrooms", "Not sure yet"],
      },
      {
        id: "doorCount",
        question: "Roughly how many doors and drawers?",
        hint: "A rough count is fine — we verify it when we measure.",
        options: ["Under 20", "20–35", "35–50", "Over 50", "No idea"],
      },
      {
        id: "finish",
        question: "What finish are you after?",
        options: ["Painted white or off-white", "Painted a colour", "Stained wood", "Still deciding"],
      },
      TIMELINE_QUESTION,
    ],
    photoPrompt: "A wide shot of your kitchen lets us count doors and spot any repairs.",
    bookingUrl: BUSINESS.scheduler.embedUrl,
    bookingLabel: BUSINESS.scheduler.label,
  },

  epoxy: {
    service: "epoxy",
    label: "Epoxy Flooring",
    slug: "epoxy",
    // New page — no live ads pointed here yet. Named to match the siblings.
    // Safe alongside the /garage-epoxy-houston-tx -> subdomain 301 because this
    // page is noindex, so it never competes for that organic term.
    adSlug: "garage-epoxy-houston",
    metaTitle: "Houston Garage Epoxy Flooring | Free Estimate",
    metaDescription:
      "Diamond-ground preparation and durable epoxy floor coatings for Houston garages, patios and commercial slabs. Free written estimate.",
    eyebrow: "Epoxy flooring · Houston",
    h1: "Get your garage floor estimate",
    // The old subhead said a properly prepped epoxy floor "stops being a
    // coating and starts being part of the slab". Epoxy is a coating bonded to
    // the surface — it does not become the concrete — and claiming otherwise in
    // an ad-funded headline is the kind of overstatement that invites a
    // warranty argument later. What actually sells is durability and the
    // preparation that delivers it, both of which are defensible.
    subhead:
      "Diamond-ground preparation and a hard-wearing coating built for Houston humidity. Tell us about your garage and we'll put a written price in your hands.",
    proofPoints: [
      "Diamond-ground preparation, not an acid wash",
      `${BUSINESS.trust.warrantyYears}-year written warranty`,
      "Written line-item estimate before any work starts",
    ],
    heroImage: "/images/epoxy/hero-luxury-garage.png",
    heroImageAlt: "Finished epoxy garage floor with a high-gloss flake finish",
    /**
     * Three screens, not four questions.
     *
     * The funnel used to open with "What space are we coating?" — a question
     * that asks the visitor to categorise their own job before they have been
     * told anything. Nearly all of this traffic is a homeowner with a garage,
     * so leading with "what size is your garage" confirms they are in the right
     * place and is answerable without a thought. The rare non-garage enquiry is
     * served by the "Other concrete area" option and the commercial link below,
     * rather than by taxing every visitor with a sorting question.
     *
     * Note there is no separate square-footage question. Car count already
     * establishes the area closely enough to quote from, and asking for both is
     * asking the same thing twice — the plan called for a sq ft step, and it was
     * dropped once the two questions were written next to each other.
     */
    questions: [
      {
        // Kept as `size`, not renamed to `garageSize` — same meaning as the
        // question it replaces, so existing rows stay readable.
        id: "size",
        question: "What size is your garage?",
        options: [
          "1-car (~250 sq ft)",
          "2-car (~450 sq ft)",
          "3-car (~650 sq ft)",
          "4-car or larger",
          "Other concrete area",
          "Not sure",
        ],
      },
      {
        id: "condition",
        question: "What's the floor like right now?",
        hint: "Cracks and old coatings change the prep, which is most of the cost.",
        // Multi-select because these genuinely co-occur: a slab with an old
        // peeling coating usually has cracks too. Forcing one answer made
        // people pick the worst problem and hid the rest until we arrived.
        multiSelect: true,
        options: [
          "Bare concrete",
          "Cracks or pitting",
          "Oil or rust stains",
          "Old coating peeling up",
          "Not sure",
        ],
      },
      {
        id: "finish",
        question: "Any finish you have in mind?",
        hint: "No wrong answer — we bring samples either way.",
        // Grouped with the condition question above. Both are quick taps about
        // the same floor, so splitting them across two screens made the funnel
        // read as longer than it is.
        groupWithPrevious: true,
        optional: true,
        options: ["Flake / speckled", "Solid colour", "High-gloss clear", "Show me the options"],
      },
      TIMELINE_QUESTION,
    ],
    // Commercial work is a different crew, a different quote and a different
    // calendar. One quiet link is enough: making it prominent would invite
    // residential visitors to second-guess which funnel they belong in.
    firstStepNote: {
      text: "Looking for commercial or warehouse epoxy?",
      linkLabel: "Contact us here",
      href: "/contact",
    },
    photoPrompt: "Photos of the slab — especially any cracks or old coating — help us price prep.",
    // Epoxy has its own calendar and its own service list. See lib/epoxy.ts.
    bookingUrl: EPOXY.scheduler.bookingUrl,
    bookingLabel: EPOXY.scheduler.label,
  },
}

export const FUNNEL_SERVICES = Object.keys(FUNNELS) as FunnelService[]

export function getFunnel(service: string): FunnelConfig | undefined {
  return FUNNELS[service as FunnelService]
}

/**
 * Collapses the flat `questions` list into the screens actually rendered.
 *
 * A question with `groupWithPrevious` joins the previous screen instead of
 * starting a new one. The flag is ignored on the first question, since there is
 * nothing to group with — that would otherwise produce an empty leading step.
 */
export function questionSteps(config: FunnelConfig): FunnelQuestion[][] {
  const steps: FunnelQuestion[][] = []

  for (const question of config.questions) {
    const previous = steps[steps.length - 1]
    if (question.groupWithPrevious && previous) previous.push(question)
    else steps.push([question])
  }

  return steps
}

/**
 * Total steps a funnel shows: question screens + photos + contact + booking.
 *
 * Counts grouped *screens*, not questions, so it stays in agreement with the
 * progress indicator. Grouping four questions into two screens has to lower the
 * displayed total or the bar tells a story the funnel doesn't match.
 */
export function totalSteps(config: FunnelConfig): number {
  return questionSteps(config).length + 3
}

/** Renders an answer for email and display, flattening multi-select arrays. */
export function formatAnswer(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value.length ? value.join(", ") : "—"
  return value ?? "—"
}
