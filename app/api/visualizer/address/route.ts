import { type NextRequest, NextResponse } from "next/server"
import { lookupAddress } from "@/lib/visualizer/streetview"

/**
 * Exterior visualizer: address → coordinates → nearest Street View panorama.
 * Returns the panorama id and a heading that faces the house; the image itself
 * comes from /api/visualizer/streetview. The Google key stays on the server.
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { address?: unknown }
    const address = typeof body.address === "string" ? body.address.trim().slice(0, 200) : ""
    if (address.length < 5) {
      return NextResponse.json({ ok: false, error: "not_found", message: "Please enter the full street address." }, { status: 400 })
    }
    const result = await lookupAddress(address)
    if (!result.ok) console.warn("[visualizer/address]", result.error)
    return NextResponse.json(result, { status: result.ok ? 200 : result.error === "not_found" || result.error === "no_imagery" ? 404 : 503 })
  } catch (err) {
    console.error("[visualizer/address] failed:", err)
    return NextResponse.json(
      { ok: false, error: "provider_error", message: "Address search isn't responding right now. Please upload a photo instead." },
      { status: 502 },
    )
  }
}
