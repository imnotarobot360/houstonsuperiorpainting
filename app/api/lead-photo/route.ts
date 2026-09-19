import { get } from "@vercel/blob"
import { eq } from "drizzle-orm"
import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"

/**
 * Streams a customer photo out of the private Blob store.
 *
 * Private blobs aren't fetchable by URL, so they have to be served through a
 * route like this one. The access rule: the caller must present the owning
 * lead's `publicToken` AND the requested pathname must be listed on that lead.
 *
 * Checking the pathname against the row is the important half. Without it,
 * anyone holding one valid token could pass any other pathname and read other
 * customers' photos.
 */
export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get("pathname")
  const token = request.nextUrl.searchParams.get("token")

  if (!pathname || !token) {
    return NextResponse.json({ error: "Missing pathname or token" }, { status: 400 })
  }

  try {
    const [lead] = await db
      .select({ photoPaths: leads.photoPaths })
      .from(leads)
      .where(eq(leads.publicToken, token))
      .limit(1)

    const owned = Array.isArray(lead?.photoPaths) && (lead.photoPaths as string[]).includes(pathname)
    if (!owned) {
      // Same response for "no such lead" and "not your photo" so the endpoint
      // can't be used to probe which pathnames exist.
      return new NextResponse("Not found", { status: 404 })
    }

    const result = await get(pathname, {
      access: "private",
      ifNoneMatch: request.headers.get("if-none-match") ?? undefined,
    })

    if (!result) return new NextResponse("Not found", { status: 404 })

    if (result.statusCode === 304) {
      return new NextResponse(null, {
        status: 304,
        headers: { ETag: result.blob.etag, "Cache-Control": "private, no-cache" },
      })
    }

    return new NextResponse(result.stream, {
      headers: {
        "Content-Type": result.blob.contentType,
        ETag: result.blob.etag,
        "Cache-Control": "private, no-cache",
      },
    })
  } catch (err) {
    console.error("[v0] lead photo fetch failed:", err)
    return NextResponse.json({ error: "Failed to serve file" }, { status: 500 })
  }
}
