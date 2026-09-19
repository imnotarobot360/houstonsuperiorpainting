import { NextResponse } from "next/server"
import { fetchSlots } from "@/lib/booking"
import { getFunnel } from "@/lib/funnel-config"

/**
 * Availability proxy.
 *
 * Server-side rather than a direct browser call for two reasons: the ERP sets
 * no CORS headers for this origin, and the reverse-engineered endpoint shape
 * stays out of the client bundle so a vendor change is a one-file fix here.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const service = searchParams.get("service") ?? ""
  const zip = searchParams.get("zip") ?? undefined

  // Validate against our own funnel config, never trusting the query string to
  // name an ERP service id.
  if (!getFunnel(service)) {
    return NextResponse.json({ error: "unknown_service" }, { status: 400 })
  }

  try {
    const data = await fetchSlots(service as never, zip)
    return NextResponse.json(data, {
      // Availability is perishable; a CDN copy would offer gone slots.
      headers: { "Cache-Control": "no-store" },
    })
  } catch (error) {
    console.log("[v0] booking slots failed:", error instanceof Error ? error.message : error)
    // 502, not 200-with-empty-days: the client must be able to tell "we broke"
    // from "genuinely no availability" so it can fall back to the iframe.
    return NextResponse.json({ error: "erp_unavailable" }, { status: 502 })
  }
}
