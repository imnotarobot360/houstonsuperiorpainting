// Lightweight GA4 event helpers.
// Safe to call anywhere on the client — no-ops if gtag isn't loaded.

import { OPENAI_EVENTS, measureOpenAI, newEventId } from "@/lib/openai-ads"
import { getAttribution, getOppref } from "@/lib/attribution"

// Prefer the env var, but fall back to the known property ID so analytics
// works without extra env setup. A GA4 Measurement ID is public by design.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-JHH1X8LD8E"

// Same convention as GA_ID: a Meta Pixel ID ships in the page source anyway,
// so an env override is a convenience, not a secret.
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1089287971750305"

type GtagArgs = [string, string, Record<string, unknown>?]

declare global {
  interface Window {
    gtag?: (...args: GtagArgs) => void
    dataLayer?: unknown[]
    fbq?: {
      (method: "track" | "trackCustom", event: string, params?: Record<string, unknown>): void
      (method: "init", pixelId: string): void
      callMethod?: (...args: unknown[]) => void
      queue?: unknown[]
      loaded?: boolean
      version?: string
    }
  }
}

/**
 * Events mirrored to our own database as well as GA4.
 *
 * Only the funnel events, because this exists to answer one question — where
 * paid traffic drops out — and every extra name is a row written on every
 * visit. Must stay in step with the allow-list in app/api/events/route.ts,
 * which rejects anything not listed there.
 */
const SERVER_LOGGED_EVENTS = new Set([
  "landing_page_view",
  "funnel_started",
  "funnel_step_complete",
  "form_started",
  "generate_lead",
  "calendar_viewed",
  "appointment_time_selected",
  "appointment_booked",
  "phone_click",
])

/**
 * Random per-visit id, held in sessionStorage.
 *
 * Not a user identifier and deliberately not persistent: sessionStorage dies
 * with the tab, so it cannot be used to recognise someone across visits. Its
 * only job is letting the drop-off report follow a single visit from one step
 * to the next.
 */
function getSessionId(): string | null {
  if (typeof window === "undefined") return null
  try {
    const key = "hsp_sid"
    let id = window.sessionStorage.getItem(key)
    if (!id) {
      id = Math.random().toString(36).slice(2) + Date.now().toString(36)
      window.sessionStorage.setItem(key, id)
    }
    return id
  } catch {
    // Private browsing modes can throw on sessionStorage access. Losing the
    // session id costs us step-to-step joining, not the event itself.
    return null
  }
}

/**
 * Fire-and-forget copy of a funnel event into our own database.
 *
 * `sendBeacon` rather than `fetch`, because these fire on interactions that
 * often navigate away — a phone tap being the obvious one. A `fetch` from a
 * page that is unloading gets cancelled, which would systematically
 * under-report exactly the events we most want to measure.
 */
function logFunnelEvent(name: string, params: Record<string, unknown>) {
  if (typeof window === "undefined") return

  try {
    const attribution = getAttribution()
    const body = JSON.stringify({
      name,
      service: params.service,
      sessionId: getSessionId(),
      // Click events carry their origin in `event_label` for GA4; reuse it so
      // the stored row can distinguish a header tap from a sticky-bar tap.
      location: params.event_label,
      step: params.step,
      value: params.value,
      oppref: attribution.oppref,
      utmSource: attribution.utmSource,
      utmMedium: attribution.utmMedium,
      utmCampaign: attribution.utmCampaign,
      utmTerm: attribution.utmTerm,
      utmContent: attribution.utmContent,
      gclid: attribution.gclid,
      landingPage: attribution.landingPage,
    })

    if (typeof navigator.sendBeacon === "function") {
      navigator.sendBeacon("/api/events", new Blob([body], { type: "application/json" }))
      return
    }

    void fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {})
  } catch {
    // Telemetry must never be able to break the funnel it is measuring.
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  // Mirrored before the gtag guard on purpose: our own log should not go dark
  // just because an ad blocker or a slow network stopped gtag from loading.
  if (SERVER_LOGGED_EVENTS.has(name)) logFunnelEvent(name, params)

  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", name, params)
}

/**
 * Fires a Meta Pixel event. `standard: false` routes through `trackCustom`,
 * which is required for any event name outside Meta's fixed standard list —
 * `track` silently drops unrecognized names.
 */
export function trackPixel(
  event: string,
  params: Record<string, unknown> = {},
  standard = true,
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return
  window.fbq(standard ? "track" : "trackCustom", event, params)
}

// Semantic conversion helpers used across the site.
// Each one reports to GA4 and to the Meta Pixel so ad optimization and
// analytics stay in agreement about what counts as a conversion.
/**
 * A tap on any `tel:` link.
 *
 * Carries the campaign attribution with it. Without this, a call driven by ad
 * spend arrives at the office as an anonymous ring — the number is the same on
 * every page, so there is otherwise nothing tying it back to the campaign,
 * ad group or keyword that paid for it.
 *
 * This is a **micro-conversion, not an appointment**. Someone tapping a phone
 * link has shown intent; they have not booked anything, and they may not even
 * complete the call. Bidding on it as though it were a booked estimate would
 * optimise toward the cheaper, weaker signal. `appointment_booked` remains the
 * only event that means a visit is on the calendar.
 *
 * `location` distinguishes where on the page the tap happened, which is the
 * only way to tell a header tap from a last-resort tap inside an error state.
 *
 * No PII: the caller's own number is not known at tap time and the business
 * number is not worth recording, so neither is sent.
 *
 * Call this only from the delegated `tel:` handler in `GoogleAnalytics`, which
 * already fires for every phone link on the page. Adding an `onClick` to an
 * individual link reports the same tap twice.
 */
export function trackPhoneClick(location: string, service?: string) {
  const attribution = getAttribution()

  trackEvent("phone_click", {
    conversion: true,
    event_category: "contact",
    event_label: location,
    // Which funnel earned the call. Without it the stored row has a null
    // service and the call cannot be credited to the page that produced it.
    service,
    // Flattened rather than nested — GA4 drops object-valued parameters.
    oppref: attribution.oppref,
    utm_source: attribution.utmSource,
    utm_medium: attribution.utmMedium,
    utm_campaign: attribution.utmCampaign,
    // ChatGPT and Google Ads both pass the ad group and ad/keyword identifiers
    // through utm_content and utm_term, so these two are the ad-level detail.
    utm_content: attribution.utmContent,
    utm_term: attribution.utmTerm,
    gclid: attribution.gclid,
    landing_page: attribution.landingPage,
  })

  trackPixel("Contact", { content_name: location, method: "phone" })
}

export function trackTextClick(location: string) {
  trackEvent("text_click", { conversion: true, event_category: "contact", event_label: location })
  trackPixel("Contact", { content_name: location, method: "sms" })
}

export function trackEmailClick(location: string) {
  trackEvent("email_click", { conversion: true, event_category: "contact", event_label: location })
  trackPixel("Contact", { content_name: location, method: "email" })
}

export function trackEstimateClick(location: string) {
  trackEvent("estimate_cta_click", { conversion: true, event_category: "lead", event_label: location })
  // Intent, not a submitted lead — kept distinct from Lead so the two don't
  // inflate each other in Ads reporting.
  trackPixel("InitiateCheckout", { content_name: location, content_category: "estimate_request" })
}

/**
 * Estimate-funnel step events, for finding where paid traffic drops out.
 *
 * These are diagnostic, not conversions: `conversion: true` is deliberately
 * absent so they can't be mistaken for a lead in Ads reporting. The two real
 * conversions in this funnel stay `generate_lead` and `appointment_booked`.
 *
 * Every event carries `service` so each landing page can be read separately —
 * a drop-off at the calendar on epoxy means something different than the same
 * drop on interior.
 *
 * Naming note: the four events that already existed keep their original names
 * (`estimate_service_selected`, `funnel_step_complete`, `generate_lead`,
 * `appointment_booked`) even where the spec proposed slightly different ones.
 * Renaming would orphan existing GA4 history and silently break any Ads
 * conversion already keyed to `generate_lead`, which is a GA4 recommended
 * event name. Continuity is worth more than matching a doc exactly.
 *
 * No PII: names, phone numbers, emails and addresses are never passed here.
 */
export function trackFunnelStep(
  name:
    | "landing_page_view"
    | "funnel_started"
    | "form_started"
    | "calendar_viewed"
    | "appointment_time_selected",
  service: string,
  params: Record<string, unknown> = {},
) {
  trackEvent(name, { event_category: "estimate_funnel", service, ...params })
}

export function trackFormSubmit(formName: string, gaParams: Record<string, unknown> = {}) {
  // `gaParams` lets a caller add its own dimensions (the funnel passes `service`)
  // without firing a SECOND `generate_lead`, which would inflate the GA4
  // conversion count.
  trackEvent("generate_lead", { conversion: true, event_category: "lead", event_label: formName, ...gaParams })
  trackPixel("Lead", { content_name: formName })
}

/**
 * Reports a submitted lead to every platform at once: GA4, Meta, and ChatGPT
 * Ads (browser pixel + server Conversions API).
 *
 * The OpenAI pair share one `event_id` so the two sources deduplicate into a
 * single conversion instead of double-counting.
 *
 * Fire-and-forget by design — a tracking failure must never surface to the user
 * or block the redirect to the confirmation page. The lead itself is already
 * safely submitted by the time this runs.
 */
export async function trackLeadCreated(options: {
  formName: string
  email?: string
  zip?: string
  city?: string
  /** Assigned value of a lead, in cents, for conversion-value bidding. */
  amountCents?: number
  /**
   * Caller-supplied dedup id. Pass a stable server-issued value (the funnel
   * passes its `publicToken`) so a client retry cannot double-count the same
   * lead. Omit to generate a random one.
   */
  eventId?: string
  /** Extra GA4 dimensions merged into the single `generate_lead` event. */
  gaParams?: Record<string, unknown>
}) {
  const { formName, email, zip, city, amountCents } = options

  trackFormSubmit(formName, options.gaParams)

  const eventId = options.eventId ?? newEventId("lead")

  // Browser side — instant, but lossy.
  measureOpenAI(OPENAI_EVENTS.leadCreated, {}, { event_id: eventId })

  // Server side — reliable. Deduplicated against the call above by event_id.
  try {
    await fetch("/api/conversions/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId,
        eventName: OPENAI_EVENTS.leadCreated.name,
        oppref: getOppref(),
        sourceUrl: typeof window !== "undefined" ? window.location.href : undefined,
        email,
        zip,
        city,
        amountCents,
      }),
      keepalive: true,
    })
  } catch (error) {
    console.error("[v0] Lead conversion relay failed:", error)
  }
}

/**
 * Reports a CONFIRMED appointment to GA4 and ChatGPT Ads (browser pixel +
 * server Conversions API).
 *
 * This is the bottom-of-funnel conversion, and until now it had no call site at
 * all: `appointment_scheduled` was defined in OPENAI_EVENTS and whitelisted in
 * the relay, but booking success only ever fired a GA4 custom event. That is
 * why ChatGPT Ads reported zero appointment conversions regardless of spend.
 *
 * MUST only be called after the backend confirms the booking. See the call site
 * in `booking-calendar.tsx` — it sits inside the `res.ok` branch so a taken slot
 * (409), a throttle (429), or an iframe fallback never reports a conversion.
 *
 * Fire-and-forget: a tracking failure must never delay or break the customer's
 * confirmation screen. The appointment is already persisted by the time this runs.
 */
export async function trackAppointmentScheduled(options: {
  /** Server-issued booking token — doubles as the stable dedup key. */
  publicToken: string
  service: string
  email?: string
  zip?: string
  city?: string
  /** Assigned value of a booked appointment, in cents. */
  amountCents?: number
}) {
  const { publicToken, service, email, zip, city, amountCents } = options

  // Keep the original GA4 event name so existing GA4 reports and any funnel
  // exploration built on `appointment_booked` stay continuous.
  trackEvent("appointment_booked", { event_category: "estimate_funnel", conversion: true, service })

  // Deterministic id derived from the booking token: a double-submit or a retry
  // resolves to the same conversion instead of inflating the count. Namespaced
  // with `appt_` so it cannot collide with the `lead_created` event, which uses
  // the bare publicToken as its id.
  const eventId = `appt_${publicToken}`

  // Browser side — instant, but lossy (ad blockers, Safari ITP).
  //
  // The data object stays empty on purpose. The `customer_action` payload only
  // accepts type/amount/currency, and the pixel silently drops the WHOLE event
  // on an unrecognised key — so no `service` here, even though it is useful.
  measureOpenAI(OPENAI_EVENTS.appointmentScheduled, {}, { event_id: eventId })

  // Server side — survives ad blockers. Deduplicated against the pixel by event_id.
  try {
    await fetch("/api/conversions/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId,
        eventName: OPENAI_EVENTS.appointmentScheduled.name,
        oppref: getOppref(),
        sourceUrl: typeof window !== "undefined" ? window.location.href : undefined,
        // Match-quality signals only. Never send a phone number, even hashed —
        // OpenAI's conversion spec forbids it.
        email,
        zip,
        city,
        amountCents,
      }),
      keepalive: true,
    })
  } catch (error) {
    console.error("[v0] Appointment conversion relay failed:", error)
  }
}
