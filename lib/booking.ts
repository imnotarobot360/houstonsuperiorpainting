import type { FunnelService } from "./funnel-config"

/**
 * The InsightPaint (Houston Superior Groups ERP) booking contract.
 *
 * ── Why this file exists, and the risk it carries ──────────────────────────
 *
 * The ERP has no published API. Everything here was reverse-engineered from
 * the booking widget's own client bundle, so it is a *private* contract that
 * InsightPaint can change without warning or a version bump.
 *
 * That is why every caller must be able to fall back to the plain
 * `BUSINESS.scheduler.embedUrl` iframe. The iframe is slower and uglier, but it
 * is the vendor's own supported surface — if these endpoints move, the iframe
 * keeps taking bookings while this file gets fixed. Never make in-funnel
 * booking the *only* path to a booked appointment.
 *
 * Verified against the live API on 2026-08-19.
 */

const ERP_BASE = "https://app.houstonsuperiorgroups.com/api/book"

/**
 * Booking *pages*, which are not the same thing as services.
 *
 * Epoxy is sold under its own brand on its own booking page, so it has its own
 * page slug. Every painting service shares the main page. Sending an epoxy
 * booking to the main page would put it on the painting crew's calendar.
 */
const PAGE_SLUG = {
  painting: "houston-superior",
  epoxy: "houston-superior-epoxy",
} as const

/**
 * ERP service ids, keyed by our own funnel service.
 *
 * These are opaque uuids — there is no way to derive them, and a wrong id books
 * the wrong crew for the wrong duration. Re-verify against
 * `GET /api/book/{page}` if bookings ever land on the wrong calendar.
 *
 * Note the main page also exposes a second, older "Garage Epoxy Estimate"
 * (`6a116b2c…`, slug `exterior-estimate`). It is NOT used: epoxy estimates go
 * to the dedicated epoxy page below. The duplicate is a data-entry artifact in
 * InsightPaint and should be retired there, not worked around here.
 */
const SERVICE = {
  interior: {
    page: PAGE_SLUG.painting,
    id: "2fe5197a-27d9-4a91-9046-a56937b64abc",
    name: "In-Person Estimate Interior Painting",
  },
  exterior: {
    page: PAGE_SLUG.painting,
    id: "3a421d5f-1de3-4054-9040-da90c935ab4c",
    name: "In-Person Estimate Exterior Painting",
  },
  cabinets: {
    page: PAGE_SLUG.painting,
    id: "2a841414-f1b7-4a99-9c5b-392d71c5ba22",
    name: "Cabinet Estimate",
  },
  epoxy: {
    page: PAGE_SLUG.epoxy,
    id: "d4917f6b-21da-4cde-b1b9-998dc286dd37",
    name: "Free Epoxy Estimate",
  },
} as const satisfies Record<FunnelService, { page: string; id: string; name: string }>

export function getErpService(service: FunnelService) {
  return SERVICE[service]
}

/** How far ahead to ask for availability. The ERP caps this server-side. */
export const SLOT_WINDOW_DAYS = 21

// ── Wire types ─────────────────────────────────────────────────────────────

/**
 * A single bookable slot.
 *
 * `date` and `time` are pre-formatted by the ERP in the *business's* timezone
 * (America/Chicago). Always render those two strings directly. Deriving the
 * display time from `start` with browser-local formatting would show a customer
 * on holiday in another timezone a time that does not match their appointment.
 */
export interface ErpSlot {
  /** ISO instant, e.g. "2026-08-21T14:00:00.000Z". Send this back to book. */
  start: string
  end: string
  /** Business-local calendar date, "YYYY-MM-DD". */
  date: string
  /** Business-local 24h time, "HH:MM". */
  time: string
}

export interface ErpDay {
  date: string
  slots: ErpSlot[]
}

export interface SlotsResponse {
  timezone: string
  days: ErpDay[]
  total: number
  /** Set by the ERP when there is genuinely nothing bookable. */
  no_availability_reason?: string | null
}

// ── Availability ───────────────────────────────────────────────────────────

/**
 * Fetch real availability. Throws on any non-OK response so the caller can
 * fall back to the iframe rather than render an empty calendar, which would
 * look like "this company has no availability" instead of "we broke".
 */
export async function fetchSlots(service: FunnelService, zip?: string): Promise<SlotsResponse> {
  const erp = getErpService(service)
  const url = new URL(`${ERP_BASE}/${erp.page}/slots`)
  url.searchParams.set("service", erp.id)
  url.searchParams.set("days", String(SLOT_WINDOW_DAYS))
  if (zip) url.searchParams.set("zip", zip)

  const res = await fetch(url, {
    headers: { Accept: "application/json" },
    // Availability is perishable. A cached calendar offers slots that are
    // already gone, so the customer picks one and the booking is rejected.
    cache: "no-store",
  })

  if (!res.ok) throw new Error(`ERP slots ${res.status}`)

  const data = (await res.json()) as SlotsResponse
  if (!Array.isArray(data?.days)) throw new Error("ERP slots: unexpected shape")
  return data
}

// ── Per-service intake questions ───────────────────────────────────────────

/**
 * A custom intake question attached to an ERP service.
 *
 * These are configured per service inside InsightPaint, so they differ by
 * booking page and can be edited by the office at any time. The epoxy service
 * has a *required* one; every question on the main painting page is currently
 * optional, which is why painting bookings succeed without answers.
 */
export interface ErpQuestion {
  id: string
  appointment_type_id: string
  label: string
  question_type: "dropdown" | "short_text" | "multi_choice" | string
  options: string[] | null
  required: boolean
  /** Set when this question only applies given another question's answer. */
  depends_on_id: string | null
  depends_on_value: string | null
}

/**
 * Map our funnel's own answer onto the ERP option string it corresponds to.
 *
 * Keyed by ERP question label so it survives InsightPaint re-creating a
 * question (which changes the uuid but rarely the wording). The values are the
 * exact ERP option strings — a near-miss is rejected as no answer at all.
 *
 * This deliberately reuses what the customer already told us rather than
 * defaulting, so the estimator sees the real project type.
 */
const ANSWER_MAP: Record<string, { funnelKey: string; options: Record<string, string> }> = {
  "What type of project do you need an estimate for?": {
    funnelKey: "spaceType",
    options: {
      "Residential garage": "Garage Floor",
      "Patio or walkway": "Patio / Outdoor Concrete",
      "Commercial or warehouse": "Commercial Floor",
      "Something else": "Other",
    },
  },
  // Optional, but the funnel already knows the answers — passing them through
  // means the estimator arrives informed instead of re-asking on the phone.
  "What size is your garage?": {
    funnelKey: "size",
    options: {
      "1-car (~250 sq ft)": "1-Car Garage",
      "2-car (~450 sq ft)": "2-Car Garage",
      "3-car (~650 sq ft)": "3-Car Garage",
      Larger: "4+ Car Garage",
      "Not sure yet": "Not Sure",
    },
  },
  "What is currently on the concrete?": {
    funnelKey: "condition",
    options: {
      "Bare and sound": "Bare Concrete",
      "Has an old coating on it": "Old Epoxy / Coating",
      "Not sure yet": "Not Sure",
      // "Some cracks or pitting" describes damage rather than a coating, so it
      // is intentionally absent here — it is reported on the damage question
      // below instead of being forced into a wrong answer.
    },
  },
  "Does the floor have any of the following?": {
    funnelKey: "condition",
    options: {
      "Some cracks or pitting": "Cracks",
    },
  },
}

/**
 * Fetch the intake questions configured for a service.
 *
 * Returns [] on any failure: a missing question list must not block a booking
 * that would otherwise succeed, and `resolveAnswers` treats "no questions" the
 * same as "nothing required".
 */
export async function fetchQuestions(service: FunnelService): Promise<ErpQuestion[]> {
  const erp = getErpService(service)
  try {
    const res = await fetch(`${ERP_BASE}/${erp.page}`, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    })
    if (!res.ok) return []
    const data = (await res.json()) as { questions?: ErpQuestion[] }
    return (data.questions ?? []).filter((q) => q.appointment_type_id === erp.id)
  } catch {
    return []
  }
}

/**
 * Build the ERP `answers` map, and report any required question we can't answer.
 *
 * A question whose `depends_on_*` condition isn't met is skipped entirely — the
 * ERP hides it in that case and does not enforce it.
 *
 * When `missingRequired` comes back non-empty the caller must NOT post: the
 * booking would be rejected. Falling back to the vendor iframe is correct
 * there, because the iframe renders these questions and lets the customer
 * answer them properly. This is what keeps a newly-added required question from
 * silently breaking in-funnel booking.
 */
export function resolveAnswers(
  questions: ErpQuestion[],
  funnelAnswers: Record<string, unknown>,
): { answers: Record<string, string>; missingRequired: string[] } {
  const candidates: Record<string, string> = {}

  for (const q of questions) {
    const mapping = ANSWER_MAP[q.label]
    if (!mapping) continue
    const raw = funnelAnswers[mapping.funnelKey]
    if (typeof raw !== "string") continue
    const mapped = mapping.options[raw]
    if (mapped) candidates[q.id] = mapped
  }

  // Drop answers to questions the ERP hides because their trigger answer wasn't
  // given — e.g. don't send a garage size for a patio job.
  const answers: Record<string, string> = {}
  for (const q of questions) {
    if (!candidates[q.id]) continue
    if (q.depends_on_id && candidates[q.depends_on_id] !== q.depends_on_value) continue
    answers[q.id] = candidates[q.id]
  }

  const missingRequired = questions
    .filter((q) => {
      if (!q.required) return false
      // Skip conditional questions whose trigger answer wasn't given.
      if (q.depends_on_id && answers[q.depends_on_id] !== q.depends_on_value) return false
      return !answers[q.id]
    })
    .map((q) => q.label)

  return { answers, missingRequired }
}

// ── Booking ────────────────────────────────────────────────────────────────

export interface BookingRequest {
  service: FunnelService
  /** Must be the exact `start` from a slot the ERP returned. */
  start: string
  firstName: string
  lastName: string
  phone: string
  email?: string
  address?: string
  city?: string
  zip?: string
  smsConsent: boolean
  description?: string
  /** ERP intake answers, keyed by question id. See `resolveAnswers`. */
  answers?: Record<string, string>
}

export interface BookingResult {
  ok: boolean
  /** Present when the slot was taken between load and confirm. */
  slotTaken?: boolean
  /**
   * The ERP rate-limited us (HTTP 429).
   *
   * Worth its own flag because it is transient and self-healing: the right
   * response is "wait a moment and try again", not swapping in the fallback
   * iframe, which posts to the same rate-limited endpoint and would fail too.
   */
  rateLimited?: boolean
  message?: string
}

/**
 * Create the appointment on the ERP calendar.
 *
 * The payload nests customer fields under `form` and carries `hp` (a honeypot)
 * and `terms_accepted` — the ERP rejects the request without the latter, and
 * the customer has already accepted terms to reach this step in the funnel.
 */
export async function createBooking(req: BookingRequest): Promise<BookingResult> {
  const erp = getErpService(req.service)

  const res = await fetch(`${ERP_BASE}/${erp.page}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({
      service_id: erp.id,
      service_name: erp.name,
      start: req.start,
      requested_description: req.description ?? null,
      form: {
        first_name: req.firstName,
        last_name: req.lastName,
        phone: req.phone,
        email: req.email ?? "",
        address: req.address ?? "",
        city: req.city ?? "",
        state: "TX",
        zip: req.zip ?? "",
        project_description: req.description ?? "",
        sms_consent: req.smsConsent,
        terms_accepted: true,
        // Per-service intake answers, keyed by ERP question id.
        answers: req.answers ?? {},
        // Honeypot: must stay empty. A bot that fills every field trips it.
        hp: "",
      },
    }),
  })

  const body = (await res.json().catch(() => ({}))) as { message?: string; error?: string }

  if (!res.ok) {
    const code = body.error ?? ""
    // The ERP returns 409 with slot_taken when someone else booked the slot
    // between calendar load and confirm. That is a normal race, not an outage,
    // and the UI should refresh availability rather than fall back.
    const slotTaken = res.status === 409 || /slot_taken|unavailable/i.test(code + (body.message ?? ""))
    return {
      ok: false,
      slotTaken,
      rateLimited: res.status === 429,
      message: body.message ?? "Could not book that time.",
    }
  }

  return { ok: true }
}

/**
 * Split a single free-text name into the first/last the ERP requires.
 *
 * The funnel asks for one "name" field on purpose — two inputs measurably cost
 * conversions — so the split happens here. Everything after the first token is
 * the last name ("Ana Maria de la Cruz" keeps its surname intact). A
 * single-token name gets "—" because the ERP rejects an empty last_name.
 */
export function splitName(full: string): { firstName: string; lastName: string } {
  const parts = full.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return { firstName: "", lastName: "" }
  if (parts.length === 1) return { firstName: parts[0], lastName: "—" }
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") }
}

/** "2026-08-21" + "14:30" → "Fri, Aug 21 at 2:30 PM" (no timezone math). */
export function formatSlotLabel(date: string, time: string): string {
  const [y, m, d] = date.split("-").map(Number)
  const [hh, mm] = time.split(":").map(Number)
  // Constructed as UTC and formatted as UTC so the browser's own timezone can
  // never shift the business-local values the ERP already resolved.
  const dt = new Date(Date.UTC(y, m - 1, d, hh, mm))
  return dt.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  })
}
