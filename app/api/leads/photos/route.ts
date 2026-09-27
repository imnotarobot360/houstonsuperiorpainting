import { put } from "@vercel/blob"
import { eq } from "drizzle-orm"
import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"

/**
 * Appends photos to a lead that already exists, keyed by its publicToken.
 *
 * The interior funnel captures the lead (and fires the Lead conversion) BEFORE
 * offering "send photos", so photos can't ride along in the original
 * /api/leads request. This route lets the customer attach them afterwards
 * without losing them.
 *
 * Access model matches the rest of the leads surface: the unguessable
 * publicToken is the credential. Someone must already hold a valid token to
 * add photos to that lead, and photos are written to the same private
 * leads/<token>/ blob prefix so /api/lead-photo can serve them back.
 */

const MAX_PHOTOS = 6
const MAX_PHOTO_BYTES = 10 * 1024 * 1024
const ALLOWED_IMAGE = /^image\/(jpeg|png|webp|gif|heic|heif)$/i

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData()

    const publicToken = form.get("publicToken")
    if (typeof publicToken !== "string" || publicToken.length < 8) {
      return NextResponse.json({ ok: false, error: "Missing request token." }, { status: 400 })
    }

    const [lead] = await db
      .select({ photoPaths: leads.photoPaths })
      .from(leads)
      .where(eq(leads.publicToken, publicToken))
      .limit(1)

    if (!lead) {
      return NextResponse.json({ ok: false, error: "Request not found." }, { status: 404 })
    }

    const existing = Array.isArray(lead.photoPaths) ? (lead.photoPaths as string[]) : []
    const room = MAX_PHOTOS - existing.length
    if (room <= 0) {
      return NextResponse.json({ ok: false, error: `You can attach up to ${MAX_PHOTOS} photos.` }, { status: 400 })
    }

    const files = form
      .getAll("photos")
      .filter((f): f is File => f instanceof File && f.size > 0)
      .slice(0, room)

    if (files.length === 0) {
      return NextResponse.json({ ok: false, error: "No photos received." }, { status: 400 })
    }

    const added: string[] = []
    for (const file of files) {
      if (file.size > MAX_PHOTO_BYTES) continue
      if (!ALLOWED_IMAGE.test(file.type)) continue
      try {
        const blob = await put(`leads/${publicToken}/${file.name}`, file, {
          access: "private",
          addRandomSuffix: true,
        })
        added.push(blob.pathname)
      } catch (err) {
        console.error("[v0] lead photo append failed:", err)
      }
    }

    if (added.length === 0) {
      return NextResponse.json(
        { ok: false, error: "We couldn't process those images. Try JPG or PNG under 10MB." },
        { status: 400 },
      )
    }

    await db
      .update(leads)
      .set({ photoPaths: [...existing, ...added] })
      .where(eq(leads.publicToken, publicToken))

    return NextResponse.json({ ok: true, photoCount: existing.length + added.length })
  } catch (err) {
    console.error("[v0] lead photo append failed:", err)
    return NextResponse.json({ ok: false, error: "Something went wrong uploading photos." }, { status: 500 })
  }
}
