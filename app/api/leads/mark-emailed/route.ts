import { eq } from "drizzle-orm"
import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"

/**
 * Flags a lead as emailed.
 *
 * The notification email has to be sent from the browser (Web3Forms' free plan
 * blocks server IPs), so the server can't know whether it landed. The client
 * reports back here, which makes `email_sent = false` a meaningful signal:
 * those are the leads sitting in the database that nobody was told about.
 *
 * Only ever sets the flag — it carries no customer data and can't reveal a
 * lead, so an unauthenticated caller with a valid token gains nothing.
 */
export async function POST(request: NextRequest) {
  try {
    const { publicToken } = (await request.json()) as { publicToken?: string }

    if (!publicToken || typeof publicToken !== "string") {
      return NextResponse.json({ ok: false }, { status: 400 })
    }

    await db.update(leads).set({ emailSent: true }).where(eq(leads.publicToken, publicToken))

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[v0] mark-emailed failed:", err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
