import { type NextRequest, NextResponse } from "next/server"
import {
  OPENAI_EVENTS,
  OPENAI_EVENTS_ENDPOINT,
  OPENAI_PIXEL_ID,
  buildUserData,
} from "@/lib/openai-ads"

/**
 * Server-side ChatGPT Ads Conversions API relay.
 *
 * Why this exists alongside the browser pixel: OpenAI states the Conversions
 * API "is a more reliable tracking source than the pixel alone." Ad blockers,
 * Safari ITP, and abandoned tabs all eat browser events. The server call does
 * not miss. Sending both, deduplicated by a shared event ID, is the documented
 * pattern.
 *
 * The API key is server-only and never reaches the client. Events must be sent
 * "from your server only" per spec.
 */

/** Event names this route will forward. Anything else is rejected. */
const ALLOWED_EVENTS = new Set<string>([
  OPENAI_EVENTS.leadCreated.name,
  OPENAI_EVENTS.appointmentScheduled.name,
])

/** Maps each allowed event to its required data shape. */
const EVENT_DATA_TYPE: Record<string, string> = {
  [OPENAI_EVENTS.leadCreated.name]: OPENAI_EVENTS.leadCreated.type,
  [OPENAI_EVENTS.appointmentScheduled.name]: OPENAI_EVENTS.appointmentScheduled.type,
}

interface ConversionBody {
  eventId?: string
  eventName?: string
  oppref?: string
  sourceUrl?: string
  email?: string
  zip?: string
  city?: string
  /** Assigned lead value in cents, if the caller wants to weight conversions. */
  amountCents?: number
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_ADS_API_KEY

  // Not configured yet. This is an expected state, not an error: the funnel is
  // live before ChatGPT Ads access is granted. Report it as skipped so the
  // client can carry on and the lead is never blocked on tracking.
  if (!apiKey || !OPENAI_PIXEL_ID) {
    return NextResponse.json({ ok: true, skipped: "not_configured" })
  }

  let body: ConversionBody
  try {
    body = (await request.json()) as ConversionBody
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 })
  }

  const eventName = body.eventName || OPENAI_EVENTS.leadCreated.name
  if (!ALLOWED_EVENTS.has(eventName)) {
    return NextResponse.json({ ok: false, error: "unsupported_event" }, { status: 400 })
  }
  if (!body.eventId) {
    // The shared ID is what prevents double-counting against the browser pixel,
    // so a missing one is a hard error rather than something to paper over.
    return NextResponse.json({ ok: false, error: "missing_event_id" }, { status: 400 })
  }

  const user = await buildUserData({
    email: body.email,
    zip: body.zip,
    city: body.city,
  })

  // Improves match rate; both fields are explicitly supported server-side only.
  const forwardedFor = request.headers.get("x-forwarded-for")
  const ip = forwardedFor?.split(",")[0]?.trim()
  if (ip) user.ip_address = ip
  const userAgent = request.headers.get("user-agent")
  if (userAgent) user.user_agent = userAgent

  const data: Record<string, unknown> = { type: EVENT_DATA_TYPE[eventName] }
  if (typeof body.amountCents === "number" && Number.isInteger(body.amountCents)) {
    // Monetary values are integers in the currency's minor unit.
    data.amount = body.amountCents
    data.currency = "USD"
  }

  // `oppref` falls back to the first-party cookie: the spec notes the API,
  // unlike the pixel, does not capture it for us.
  const oppref =
    body.oppref ||
    request.cookies.get("hsp_oppref")?.value ||
    request.cookies.get("__oppref")?.value

  const event: Record<string, unknown> = {
    id: body.eventId,
    type: eventName,
    timestamp_ms: Date.now(),
    action_source: "web",
    source_url: body.sourceUrl || request.headers.get("referer") || undefined,
    data,
    user,
  }
  if (oppref) event.oppref = oppref

  try {
    const response = await fetch(
      `${OPENAI_EVENTS_ENDPOINT}?pid=${encodeURIComponent(OPENAI_PIXEL_ID)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          integration_source: "houston_superior_painting",
          events: [event],
        }),
      },
    )

    if (!response.ok) {
      const detail = await response.text()
      console.error("[v0] OpenAI Conversions API rejected event:", response.status, detail)
      return NextResponse.json(
        { ok: false, error: "upstream_rejected", status: response.status },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[v0] OpenAI Conversions API request failed:", error)
    return NextResponse.json({ ok: false, error: "request_failed" }, { status: 502 })
  }
}
