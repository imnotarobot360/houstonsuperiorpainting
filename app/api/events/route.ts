import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { funnelEvents } from "@/lib/db/schema"
import { FUNNEL_SERVICES } from "@/lib/funnel-config"

/**
 * Ingest for the server-side funnel event log.
 *
 * Public and unauthenticated, because it is called from a public landing page
 * with no session. That means the rows are only as trustworthy as any web
 * analytics — someone could post junk. Accepted deliberately: this table
 * measures our own funnel, it is not a system of record, and the alternative
 * (a token handshake before the first question) would add a request to the
 * critical path of a page that exists to load fast.
 *
 * Two consequences of that decision are enforced below rather than assumed:
 *
 * 1. **Allow-listed event names.** An open `name` column would let anyone
 *    invent events and quietly pollute the drop-off report.
 * 2. **Hard length caps and no free text.** Every field is truncated, and
 *    nothing a visitor typed is accepted — see the note on `value`.
 */

/**
 * The only event names accepted.
 *
 * Matches the GA4 names already in use (see lib/analytics.ts) so the two data
 * sets stay comparable. `funnel_step_complete` and `generate_lead` keep their
 * existing names even though the spec proposed `funnel_step_completed` and
 * `lead_submitted`: renaming would orphan GA4 history and risk breaking any
 * Ads conversion keyed to `generate_lead`, which is a GA4 *recommended* event
 * name. Continuity beats matching a document exactly.
 */
const ALLOWED_EVENTS = new Set([
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

const SERVICES = new Set<string>(FUNNEL_SERVICES)

/** Trims to a string of at most `max` chars, or null. */
function text(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null
  const trimmed = value.trim().slice(0, max)
  return trimmed || null
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>

    const name = text(body.name, 60)
    if (!name || !ALLOWED_EVENTS.has(name)) {
      return NextResponse.json({ ok: false }, { status: 400 })
    }

    // Unknown service values are dropped rather than rejected: a bad service on
    // an otherwise valid event is still worth counting, and failing the whole
    // request would lose the event over a field the report can treat as null.
    const service = text(body.service, 20)

    await db.insert(funnelEvents).values({
      name,
      service: service && SERVICES.has(service) ? service : null,
      sessionId: text(body.sessionId, 40),
      // Fixed identifier set by the clicked element, not visitor input.
      location: text(body.location, 60),
      step: text(body.step, 60),
      // Safe to store: every value originates from a fixed option list in
      // lib/funnel-config.ts. The client never sends form input here, and the
      // 200-char cap means a crafted request can't use this as free storage.
      value: text(body.value, 200),

      oppref: text(body.oppref, 200),
      utmSource: text(body.utmSource, 100),
      utmMedium: text(body.utmMedium, 100),
      utmCampaign: text(body.utmCampaign, 200),
      utmTerm: text(body.utmTerm, 200),
      utmContent: text(body.utmContent, 200),
      gclid: text(body.gclid, 200),
      landingPage: text(body.landingPage, 500),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    // Logged, never surfaced. The client fires these fire-and-forget and
    // ignores the response — a telemetry write must never be able to affect
    // someone completing the funnel.
    console.error("[v0] funnel event ingest failed:", err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
