import { type NextRequest, NextResponse } from "next/server"
import { parseCamera, streetViewImageUrl, streetViewKey } from "@/lib/visualizer/streetview"

/**
 * Street View image for the exterior visualizer, proxied so the key stays on
 * the server and the image is same-origin (the canvas can read its pixels).
 * Not cached anywhere (Cache-Control: no-store).
 */
export async function GET(request: NextRequest) {
  const key = streetViewKey()
  if (!key) return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 })
  const camera = parseCamera(request.nextUrl.searchParams)
  if (!camera) return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 })

  try {
    const res = await fetch(streetViewImageUrl(camera, key), { cache: "no-store" })
    const type = res.headers.get("content-type") ?? ""
    if (!res.ok || !type.startsWith("image/")) {
      return NextResponse.json({ ok: false, error: res.status === 403 ? "api_disabled" : "no_imagery" }, { status: res.status === 403 ? 503 : 404 })
    }
    return new NextResponse(await res.arrayBuffer(), {
      headers: { "Content-Type": type, "Cache-Control": "no-store" },
    })
  } catch (err) {
    console.error("[visualizer/streetview] failed:", err)
    return NextResponse.json({ ok: false, error: "provider_error" }, { status: 502 })
  }
}
