/**
 * ChatGPT Ads measurement.
 *
 * Built to OpenAI's published spec:
 *   https://developers.openai.com/ads/measurement-pixel
 *   https://developers.openai.com/ads/conversions-api
 *   https://developers.openai.com/ads/supported-events
 *
 * Two integrations, deliberately paired:
 *   - Browser pixel  → `oaiq("measure", ...)`, fast but lossy (ad blockers, ITP).
 *   - Conversions API → server-side, reliable. OpenAI recommends it "when
 *     possible for more accurate insights."
 *
 * Both send the SAME `event_id` / `id`, which is how OpenAI deduplicates the
 * pair. Without that shared ID every lead would be double-counted and CPA would
 * read half of reality.
 *
 * ── Activation ──────────────────────────────────────────────────────────────
 * Browser pixel:    LIVE. The Pixel ID is committed below (it is public by
 *                   design — it ships in the page source of every site that
 *                   installs one).
 * Conversions API:  DORMANT until OPENAI_ADS_API_KEY is set as a project env
 *                   var. That one IS a secret: never commit it and never give
 *                   it a NEXT_PUBLIC_ prefix, which would publish it to every
 *                   visitor. Generate it from the conversions tab in Ads
 *                   Manager; no code change is needed to switch it on.
 *
 * Running the pixel alone is safe but under-reports, since ad blockers and ITP
 * drop browser events. The relay no-ops rather than throwing, and a tracking
 * failure can never block a lead — the form submits first.
 */

/**
 * The live ChatGPT Ads pixel for houstonsuperiorpainting.com.
 *
 * Committed as the default rather than kept env-only, because a pixel ID is
 * public by design — it ships in the page source of every site that installs
 * one, so there is nothing to protect. Hardcoding the default means the pixel
 * works in preview and production without a deploy-time variable, while the
 * env var still wins if it is ever set (useful for a staging pixel).
 *
 * This is the opposite of OPENAI_ADS_API_KEY below, which is a real secret and
 * must never be committed or given a NEXT_PUBLIC_ prefix.
 */
export const OPENAI_PIXEL_ID =
  process.env.NEXT_PUBLIC_OPENAI_PIXEL_ID || "3cw25g7Vfbtg9cZFN7g8c6"

export const OPENAI_PIXEL_SDK = "https://bzrcdn.openai.com/sdk/oaiq.min.js"
export const OPENAI_EVENTS_ENDPOINT = "https://bzr.openai.com/v1/events"

/**
 * Standard event names from OpenAI's taxonomy, with the data `type` each one
 * requires. Using a standard event beats a custom one because only standard
 * events feed conversion-optimized bidding.
 */
export const OPENAI_EVENTS = {
  /** A user submits a lead form or requests contact. */
  leadCreated: { name: "lead_created", type: "customer_action" },
  /** A user books a meeting, demo, or consultation. */
  appointmentScheduled: { name: "appointment_scheduled", type: "customer_action" },
  /** A user lands on or views an important page. */
  pageViewed: { name: "page_viewed", type: "contents" },
} as const

type OaiqArgs =
  | ["init", Record<string, unknown>]
  | ["consent", boolean]
  | ["measure", string, Record<string, unknown>, Record<string, unknown>?]

declare global {
  interface Window {
    oaiq?: { (...args: OaiqArgs): void; q?: unknown[] }
  }
}

export function isOpenAIPixelEnabled(): boolean {
  return Boolean(OPENAI_PIXEL_ID)
}

/**
 * Generates an ID shared between the browser pixel and the server event so
 * OpenAI can collapse the two into one conversion.
 */
export function newEventId(prefix = "lead"): string {
  const rand =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2)
  return `${prefix}_${Date.now()}_${rand}`
}

/**
 * SHA-256 hex, lowercase — the only format OpenAI accepts for matching fields.
 * Uses Web Crypto, which is available in the browser and in Node's runtime.
 */
export async function sha256Hex(value: string): Promise<string | undefined> {
  const normalized = value.trim().toLowerCase()
  if (!normalized) return undefined
  try {
    const bytes = new TextEncoder().encode(normalized)
    const digest = await crypto.subtle.digest("SHA-256", bytes)
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
  } catch {
    // Non-secure context (plain http). Matching quality drops; conversions
    // still record. Never throw from a tracking path.
    return undefined
  }
}

/**
 * Matching fields OpenAI accepts. Note what is absent: phone numbers.
 * The spec is explicit — "Don't send raw email addresses, raw external IDs,
 * phone numbers, or phone number hashes." So the phone we collect stays out of
 * the tracking payload entirely, even hashed.
 */
export interface OpenAIUserData {
  email_sha256?: string
  external_id_sha256?: string
  country?: string
  city?: string
  zip_code?: string
  /** Conversions API only — the pixel derives these itself. */
  ip_address?: string
  user_agent?: string
}

export async function buildUserData(input: {
  email?: string
  zip?: string
  city?: string
}): Promise<OpenAIUserData> {
  const user: OpenAIUserData = { country: "US" }
  if (input.email) {
    const hashed = await sha256Hex(input.email)
    if (hashed) user.email_sha256 = hashed
  }
  // ZIP is sent raw per spec (letters, numbers, spaces, hyphens; max 32 chars).
  if (input.zip) user.zip_code = input.zip.trim().slice(0, 32)
  if (input.city) user.city = input.city.trim().toLowerCase().slice(0, 128)
  return user
}

/**
 * Fields the event-data object is allowed to carry. OpenAI validates event data
 * strictly: any unrecognised key makes the SDK drop the entire event, logging
 * only a console warning. A dropped conversion looks exactly like no conversion,
 * so an innocent extra field (a `service` tag, say) silently zeroes out
 * reporting — this was caught live in testing, not in review.
 *
 * `type` is added by measureOpenAI. `currency` is required whenever `amount` is
 * present. Anything else belongs in GA4 or the database, not here.
 */
const ALLOWED_EVENT_DATA: Record<string, Set<string>> = {
  // Every shape permits amount + currency; only the extras differ. Field names
  // are taken verbatim from developers.openai.com/ads/supported-events —
  // note it is `plan_id`, not `plan`.
  customer_action: new Set(["amount", "currency"]),
  contents: new Set(["amount", "currency", "contents"]),
  plan_enrollment: new Set(["amount", "currency", "plan_id", "contents"]),
  custom: new Set(["amount", "currency", "plan_id", "contents"]),
}

/**
 * Fires a browser-side conversion. Silent no-op when the pixel isn't configured
 * or hasn't loaded, so callers never need to guard.
 *
 * Extra keys are stripped rather than forwarded, so a mistaken call loses one
 * dimension of detail instead of the whole conversion.
 */
export function measureOpenAI(
  event: { name: string; type: string },
  data: {
    amount?: number
    currency?: string
    plan_id?: string
    contents?: unknown[]
  } = {},
  options: Record<string, unknown> = {},
) {
  if (typeof window === "undefined" || typeof window.oaiq !== "function") return
  if (!OPENAI_PIXEL_ID) return

  // Unknown shapes fall back to the strictest field set rather than passing
  // everything through, so a new event type can't reintroduce silent drops.
  const allowed = ALLOWED_EVENT_DATA[event.type] ?? ALLOWED_EVENT_DATA.customer_action

  const safe: Record<string, unknown> = { type: event.type }
  for (const [key, value] of Object.entries(data)) {
    if (allowed.has(key) && value !== undefined) {
      safe[key] = value
    } else if (process.env.NODE_ENV === "development") {
      console.warn(
        `[v0] measureOpenAI: dropped unsupported event-data field "${key}" — ` +
          `OpenAI would have rejected the whole "${event.name}" event.`,
      )
    }
  }

  // currency is mandatory alongside amount; sending amount alone is rejected.
  if (safe.amount !== undefined && safe.currency === undefined) {
    safe.currency = "USD"
  }

  window.oaiq("measure", event.name, safe, options)
}
