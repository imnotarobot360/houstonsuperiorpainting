import { type NextRequest, NextResponse } from "next/server"
import { getLeadForm } from "@/lib/lead-forms"

/**
 * TEST destination for the exterior visualizer (owner brief 2026-10-16).
 *
 * Exists only on the local dev server (or a non-production deployment with
 * VISUALIZER_TEST_INBOX=on); it returns 404 everywhere else. It receives
 * exactly what /api/leads would receive, applies the same checks and the same
 * answer allow-list, and keeps the result in this server's memory (the last 20
 * requests, photos as name/type/size only). Nothing is written to the
 * database, and no email, SMS or ERP alert is sent. GET lists what arrived,
 * so a test can confirm every field.
 */

type Received = {
  at: string
  service: string
  name: string
  phone: string
  email: string
  address: string
  smsConsent: boolean
  answers: Record<string, string>
  droppedAnswerKeys: string[]
  photos: { name: string; type: string; size: number }[]
}

const inbox: Received[] = []
const ALLOWED_IMAGE = /^image\/(jpeg|png|webp)$/i
// Local dev server only, unless a non-production deployment opts in. Never on
// Vercel production, even with the flag.
const enabled = () =>
  process.env.VERCEL_ENV !== "production" && (process.env.NODE_ENV === "development" || process.env.VISUALIZER_TEST_INBOX === "on")

function str(form: FormData, key: string, max = 500) {
  const v = form.get(key)
  return typeof v === "string" ? v.trim().slice(0, max) : ""
}

export async function POST(request: NextRequest) {
  if (!enabled()) return NextResponse.json({ ok: false, error: "Not found." }, { status: 404 })
  const form = await request.formData()
  if (str(form, "website", 200)) return NextResponse.json({ ok: true, publicToken: null })

  const service = str(form, "service", 40)
  const config = getLeadForm(service)
  if (!config) return NextResponse.json({ ok: false, error: "Unknown service." }, { status: 400 })
  const name = str(form, "name", 120)
  const phone = str(form, "phone", 40)
  if (name.length < 2) return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 })
  if (phone.replace(/\D/g, "").length < 10) return NextResponse.json({ ok: false, error: "Please enter a valid phone number." }, { status: 400 })

  // Same allow-list and 200-character cap as /api/leads.
  let parsed: Record<string, unknown> = {}
  try {
    parsed = JSON.parse(str(form, "answers", 4000) || "{}") as Record<string, unknown>
  } catch {
    parsed = {}
  }
  const allowed = new Set(config.questions.map((q) => q.id))
  const answers: Record<string, string> = {}
  const dropped: string[] = []
  for (const [k, v] of Object.entries(parsed)) {
    if (!allowed.has(k) || typeof v !== "string") dropped.push(k)
    else answers[k] = v.slice(0, 200)
  }

  const photos = form
    .getAll("photos")
    .filter((f): f is File => f instanceof File && f.size > 0)
    .slice(0, 6)
    .filter((f) => ALLOWED_IMAGE.test(f.type) && f.size <= 10 * 1024 * 1024)
    .map((f) => ({ name: f.name, type: f.type, size: f.size }))

  const received: Received = {
    at: new Date().toISOString(),
    service: config.service,
    name,
    phone,
    email: str(form, "email", 200),
    address: str(form, "address", 300),
    smsConsent: form.get("smsConsent") === "true",
    answers,
    droppedAnswerKeys: dropped,
    photos,
  }
  inbox.unshift(received)
  inbox.length = Math.min(inbox.length, 20)
  return NextResponse.json({ ok: true, publicToken: `test-${Date.now()}`, photoCount: photos.length, received })
}

export async function GET() {
  if (!enabled()) return NextResponse.json({ ok: false, error: "Not found." }, { status: 404 })
  return NextResponse.json({ ok: true, count: inbox.length, inbox })
}
