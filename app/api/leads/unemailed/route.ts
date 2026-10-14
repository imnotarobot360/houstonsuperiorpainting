import { and, desc, eq, gt, isNull, lt } from "drizzle-orm"
import { type NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"

/**
 * Leads the office was never emailed about, for the ERP's missed-lead alert.
 *
 * The office email is sent from the visitor's browser after the lead is saved
 * (Web3Forms' free plan blocks server IPs). If the tab closes first, or
 * Web3Forms fails, the lead sits here with `email_sent = false` and nobody is
 * told. InsightPaint polls this every 15 minutes and texts the owner once per
 * lead (it dedupes on the lead token), using its existing owner-alert system.
 *
 * Returns customer contact details, so it is closed unless the caller presents
 * LEADS_ALERT_SECRET (set on both Vercel projects). With the secret unset the
 * endpoint refuses everything rather than falling open.
 *
 * Window: older than 10 minutes (give the browser time to send the email) and
 * newer than 3 days (don't text about ancient history). Leads that booked an
 * appointment are skipped: the ERP already alerted on the booking.
 */
export const dynamic = "force-dynamic"

const SITE = "https://houstonsuperiorpainting.com"

export async function GET(request: NextRequest) {
  const secret = process.env.LEADS_ALERT_SECRET
  const provided = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "")
  if (!secret || provided !== secret) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 })
  }

  const now = Date.now()
  try {
    const rows = await db
      .select({
        publicToken: leads.publicToken,
        service: leads.service,
        name: leads.name,
        phone: leads.phone,
        email: leads.email,
        zip: leads.zip,
        createdAt: leads.createdAt,
      })
      .from(leads)
      .where(
        and(
          eq(leads.emailSent, false),
          isNull(leads.appointmentStart),
          lt(leads.createdAt, new Date(now - 10 * 60 * 1000)),
          gt(leads.createdAt, new Date(now - 3 * 24 * 60 * 60 * 1000)),
        ),
      )
      .orderBy(desc(leads.createdAt))
      .limit(25)

    return NextResponse.json({
      leads: rows.map((r) => ({ ...r, link: `${SITE}/estimate/confirmed/${r.publicToken}` })),
    })
  } catch (err) {
    console.error("[leads/unemailed] query failed:", err)
    return NextResponse.json({ error: "query_failed" }, { status: 500 })
  }
}
