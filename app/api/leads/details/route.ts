import { eq } from "drizzle-orm"
import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"
import { getLeadForm } from "@/lib/lead-forms"

/**
 * Adds the optional second-step details to a lead that already exists (quick
 * estimate and commercial forms): email, address, and allow-listed answers such
 * as timeframe, description and preferred contact method.
 *
 * Keyed by publicToken, exactly like /api/leads/photos: only someone who just
 * submitted the lead holds it. Answers are MERGED, never replaced, and only keys
 * the form's config allows are stored. Photos go through /api/leads/photos.
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      publicToken?: unknown
      email?: unknown
      address?: unknown
      zip?: unknown
      answers?: unknown
    }
    const token = typeof body.publicToken === "string" ? body.publicToken : ""
    if (token.length < 8) return NextResponse.json({ ok: false, error: "Missing request." }, { status: 400 })

    const [lead] = await db
      .select({ service: leads.service, answers: leads.answers })
      .from(leads)
      .where(eq(leads.publicToken, token))
      .limit(1)
    if (!lead) return NextResponse.json({ ok: false, error: "Request not found." }, { status: 404 })

    const config = getLeadForm(lead.service)
    const allowed = new Set(config?.questions.map((q) => q.id) ?? [])
    const incoming = body.answers && typeof body.answers === "object" ? (body.answers as Record<string, unknown>) : {}
    const added = Object.fromEntries(
      Object.entries(incoming)
        .filter(([k, v]) => allowed.has(k) && typeof v === "string" && v.trim())
        .map(([k, v]) => [k, (v as string).trim().slice(0, k === "description" ? 2000 : 200)]),
    )

    const text = (v: unknown, max: number) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : null)
    const email = text(body.email, 200)
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 })
    }

    const update: Partial<typeof leads.$inferInsert> = {
      answers: { ...((lead.answers ?? {}) as Record<string, string>), ...added },
    }
    if (email) update.email = email
    const address = text(body.address, 300)
    if (address) update.address = address
    const zip = text(body.zip, 20)
    if (zip) update.zip = zip

    await db.update(leads).set(update).where(eq(leads.publicToken, token))
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[leads/details] failed:", err)
    return NextResponse.json({ ok: false, error: "Something went wrong. Please call us." }, { status: 500 })
  }
}
