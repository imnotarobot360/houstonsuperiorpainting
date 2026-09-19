import { type NextRequest, NextResponse } from "next/server"

/**
 * Records an SMS program opt-in.
 *
 * This endpoint validates the submitted consent and returns success. The
 * submission is logged server-side so it can be forwarded to a CRM or persisted
 * to a database. To keep a durable, auditable consent record (recommended for
 * carrier/CTA compliance), connect a database and write each record here.
 */
export async function POST(request: NextRequest) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const { name, phone, consent } = (body ?? {}) as {
    name?: string
    phone?: string
    consent?: boolean
  }

  // Require explicit consent.
  if (consent !== true) {
    return NextResponse.json(
      { error: "You must agree to receive text messages to opt in." },
      { status: 400 },
    )
  }

  // Validate the name.
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Please enter your full name." }, { status: 400 })
  }

  // Validate the phone number (10 digits for US numbers).
  const digits = (phone ?? "").replace(/\D/g, "")
  const normalized = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits
  if (normalized.length !== 10) {
    return NextResponse.json(
      { error: "Please enter a valid 10-digit US mobile number." },
      { status: 400 },
    )
  }

  const record = {
    name: name.trim(),
    phone: `+1${normalized}`,
    consent: true,
    consentText:
      "I agree to receive transactional text messages from Houston Superior Painting. Msg & data rates may apply. Reply STOP to opt out.",
    source: "web:/sms-consent",
    timestamp: new Date().toISOString(),
    ip: request.headers.get("x-forwarded-for") ?? "unknown",
    userAgent: request.headers.get("user-agent") ?? "unknown",
  }

  // Server-side audit log of the opt-in event.
  console.log("[v0] SMS consent opt-in recorded:", record)

  return NextResponse.json({ success: true })
}
