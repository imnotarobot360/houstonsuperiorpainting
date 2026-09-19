import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"
import { getFunnel } from "@/lib/funnel-config"

/**
 * Persists an estimate request.
 *
 * Deliberately does NOT send the notification email. Web3Forms' free plan
 * rejects server-side POSTs (see lib/quote-submit.ts), so the email is fired
 * from the browser after this route returns and confirmed back via
 * /api/leads/mark-emailed. Storing the lead first means a Web3Forms outage
 * costs us an email, never the lead itself.
 */

const MAX_PHOTOS = 6
const MAX_PHOTO_BYTES = 10 * 1024 * 1024
const ALLOWED_IMAGE = /^image\/(jpeg|png|webp|gif|heic|heif)$/i

/** URL-safe, unguessable token. This is what the confirmation page keys on. */
function newPublicToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(24))
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("")
}

function str(form: FormData, key: string, max = 500) {
  const value = form.get(key)
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData()

    // ── Validate ────────────────────────────────────────────────────────────
    const service = str(form, "service", 40)
    const config = getFunnel(service)
    if (!config) {
      return NextResponse.json({ ok: false, error: "Unknown service." }, { status: 400 })
    }

    const name = str(form, "name", 120)
    const phone = str(form, "phone", 40)
    if (name.length < 2) {
      return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 })
    }
    if (phone.replace(/\D/g, "").length < 10) {
      return NextResponse.json({ ok: false, error: "Please enter a valid phone number." }, { status: 400 })
    }

    const email = str(form, "email", 200)
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 })
    }

    // Only keep answers to questions this service actually asks, so a crafted
    // request can't stuff arbitrary JSON into the row.
    //
    // Multi-select questions send an array, which is flattened to a
    // comma-joined string here rather than stored as an array. Everything
    // downstream — the confirmation page, the office email, and the ERP booking
    // payload in lib/booking.ts — is typed `Record<string, string>`, and an
    // array reaching the confirmation page would render as concatenated text
    // with no separators. Normalising once at the boundary keeps that contract
    // intact instead of teaching three consumers about a second shape.
    //
    // Note the previous `typeof value === "string"` filter dropped arrays
    // outright, so a multi-select answer was silently lost on the way in.
    let answers: Record<string, string> = {}
    try {
      const parsed = JSON.parse(str(form, "answers", 4000) || "{}") as Record<string, unknown>
      const allowed = new Set(config.questions.map((q) => q.id))

      const flatten = (value: unknown): string | null => {
        if (typeof value === "string") return value.slice(0, 200)
        if (Array.isArray(value)) {
          const parts = value.filter((v): v is string => typeof v === "string")
          return parts.length ? parts.join(", ").slice(0, 400) : null
        }
        return null
      }

      answers = Object.fromEntries(
        Object.entries(parsed)
          .filter(([key]) => allowed.has(key))
          .map(([key, value]) => [key, flatten(value)])
          .filter((entry): entry is [string, string] => entry[1] !== null),
      )
    } catch {
      answers = {}
    }

    let attribution: Record<string, unknown> = {}
    try {
      attribution = JSON.parse(str(form, "attribution", 4000) || "{}") as Record<string, unknown>
    } catch {
      attribution = {}
    }
    const attr = (key: string) => {
      const value = attribution[key]
      return typeof value === "string" && value ? value.slice(0, 500) : null
    }

    // ── Photos ──────────────────────────────────────────────────────────────
    const publicToken = newPublicToken()
    const files = form
      .getAll("photos")
      .filter((f): f is File => f instanceof File && f.size > 0)
      .slice(0, MAX_PHOTOS)

    const photoPaths: string[] = []
    for (const file of files) {
      if (file.size > MAX_PHOTO_BYTES) continue
      // Trust the sniffed type, not the extension.
      if (!ALLOWED_IMAGE.test(file.type)) continue
      try {
        // Private store: customers' homes are not public content. `pathname`
        // is what we persist — a raw blob URL isn't fetchable anyway.
        const blob = await put(`leads/${publicToken}/${file.name}`, file, {
          access: "private",
          addRandomSuffix: true,
        })
        photoPaths.push(blob.pathname)
      } catch (err) {
        // A failed photo must never cost us the lead.
        console.error("[v0] photo upload failed:", err)
      }
    }

    // ── Persist ─────────────────────────────────────────────────────────────
    const [row] = await db
      .insert(leads)
      .values({
        publicToken,
        service: config.service,
        answers,
        name,
        phone,
        email: email || null,
        zip: str(form, "zip", 20) || null,
        address: str(form, "address", 300) || null,
        smsConsent: form.get("smsConsent") === "true",
        photoPaths,
        oppref: attr("oppref"),
        utmSource: attr("utm_source") ?? attr("utmSource"),
        utmMedium: attr("utm_medium") ?? attr("utmMedium"),
        utmCampaign: attr("utm_campaign") ?? attr("utmCampaign"),
        utmTerm: attr("utm_term") ?? attr("utmTerm"),
        utmContent: attr("utm_content") ?? attr("utmContent"),
        gclid: attr("gclid"),
        fbclid: attr("fbclid"),
        landingPage: attr("landingPage") ?? attr("landing_page"),
        referrer: attr("referrer"),
        userAgent: request.headers.get("user-agent")?.slice(0, 500) ?? null,
      })
      .returning({ publicToken: leads.publicToken })

    return NextResponse.json({ ok: true, publicToken: row.publicToken, photoCount: photoPaths.length })
  } catch (err) {
    console.error("[v0] lead insert failed:", err)
    return NextResponse.json(
      { ok: false, error: "We couldn't save that. Please call us and we'll take your details." },
      { status: 500 },
    )
  }
}
