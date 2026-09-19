import { NextResponse } from "next/server"
import { eq } from "drizzle-orm"
import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"
import { createBooking, fetchQuestions, resolveAnswers, splitName } from "@/lib/booking"
import { getFunnel } from "@/lib/funnel-config"

/**
 * Create an appointment for an already-saved lead.
 *
 * Takes a `publicToken` rather than raw customer details so the contact info
 * sent to the ERP is the row we already stored, not whatever the client
 * posts — a client-supplied name/phone here would let anyone book appointments
 * on the crew's calendar with arbitrary details.
 */
export async function POST(request: Request) {
  let payload: { publicToken?: string; start?: string; address?: string }
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "bad_json" }, { status: 400 })
  }

  const { publicToken, start } = payload
  if (!publicToken || !start) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 })
  }

  // The street address is the one field the ERP will not book without, and the
  // funnel deliberately doesn't ask for it until this step — so it arrives here
  // from the client rather than from the stored lead.
  const address = payload.address?.trim().slice(0, 200) ?? ""

  // Reject anything that isn't a real instant before touching the ERP.
  if (Number.isNaN(Date.parse(start))) {
    return NextResponse.json({ error: "bad_start" }, { status: 400 })
  }

  const [lead] = await db.select().from(leads).where(eq(leads.publicToken, publicToken)).limit(1)
  if (!lead) {
    return NextResponse.json({ error: "unknown_lead" }, { status: 404 })
  }

  const funnel = getFunnel(lead.service)
  if (!funnel) {
    return NextResponse.json({ error: "unknown_service" }, { status: 400 })
  }

  // Already booked: return success without creating a duplicate. Protects
  // against a double-tapped confirm button putting two visits on the calendar.
  if (lead.appointmentStart) {
    return NextResponse.json({ ok: true, alreadyBooked: true })
  }

  // Prefer what was just typed; fall back to anything already on the lead.
  const projectAddress = address || lead.address || ""
  if (!projectAddress) {
    return NextResponse.json({ error: "missing_address" }, { status: 400 })
  }

  const { firstName, lastName } = splitName(lead.name)

  const answers = (lead.answers ?? {}) as Record<string, string>
  const description = [
    `${funnel.label} estimate requested via ${lead.landingPage ?? "site"}.`,
    ...Object.entries(answers).map(([k, v]) => `${k}: ${v}`),
  ].join("\n")

  // Some services (garage epoxy today) carry a *required* intake question that
  // the ERP enforces on booking. Answer it from what the customer already told
  // us in the funnel; if we can't, hand off to the iframe, which renders the
  // question properly instead of failing the POST.
  const questions = await fetchQuestions(lead.service as never)
  const { answers: erpAnswers, missingRequired } = resolveAnswers(questions, answers)

  if (missingRequired.length > 0) {
    console.log("[v0] unanswerable required ERP question(s):", missingRequired.join("; "))
    return NextResponse.json({ error: "booking_failed", message: "Additional details required." }, { status: 502 })
  }

  const result = await createBooking({
    service: lead.service as never,
    start,
    answers: erpAnswers,
    firstName,
    lastName,
    phone: lead.phone,
    email: lead.email ?? undefined,
    address: projectAddress,
    zip: lead.zip ?? undefined,
    smsConsent: lead.smsConsent,
    description,
  })

  if (!result.ok) {
    console.log("[v0] ERP booking rejected:", result.message)
    // Three distinct outcomes for the client:
    //   409 — slot gone, refresh availability and let them pick again
    //   429 — rate limited, transient, offer a retry (the iframe would fail too)
    //   502 — real failure, fall back to the vendor iframe
    const status = result.slotTaken ? 409 : result.rateLimited ? 429 : 502
    const error = result.slotTaken ? "slot_taken" : result.rateLimited ? "rate_limited" : "booking_failed"

    return NextResponse.json({ error, message: result.message }, { status })
  }

  // The appointment now exists on the ERP calendar. Our own bookkeeping is
  // secondary: if this write fails the customer is still booked, so log it and
  // report success rather than telling them it did not work.
  try {
    await db
      .update(leads)
      .set({
        appointmentStart: new Date(start),
        appointmentBookedAt: new Date(),
        // Persist the address too: the office needs it to run the visit, and
        // this is the first point in the funnel where we have it.
        address: projectAddress,
      })
      .where(eq(leads.publicToken, publicToken))
  } catch (error) {
    console.log("[v0] booked on ERP but local update failed:", error instanceof Error ? error.message : error)
  }

  return NextResponse.json({ ok: true })
}
