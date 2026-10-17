// Address → house photo for the exterior visualizer (owner brief 2026-10-16).
// SERVER ONLY: the Google key never reaches the browser. The browser calls
// /api/visualizer/address and /api/visualizer/streetview, which call Google.
//
// Provider: Google Maps Platform
//   - Geocoding API          (address → coordinates)
//   - Street View Static API (metadata: is there a panorama? + the image)
// Env: GOOGLE_MAPS_API_KEY (already set in Vercel Production). As of
// 2026-10-16 both APIs are NOT enabled on that key's Google Cloud project
// (REQUEST_DENIED "This API is not activated on your API project"). Enable
// them in Google Cloud Console → APIs & Services, and allow them in the key's
// API restrictions. Until then the routes answer `api_disabled` and the page
// offers photo upload instead.
//
// Terms: Street View images are not stored. The image route sets
// Cache-Control: no-store, and the lead stores the panorama id and camera
// angles, not the image, unless NEXT_PUBLIC_VISUALIZER_ATTACH_STREETVIEW is
// "true" (needs the owner's sign-off on Google's terms).

export type ProviderError = "not_configured" | "api_disabled" | "not_found" | "no_imagery" | "provider_error"

export type AddressLookup =
  | {
      ok: true
      formattedAddress: string
      location: { lat: number; lng: number }
      pano: { id: string; lat: number; lng: number; date: string | null; copyright: string }
      heading: number
    }
  | { ok: false; error: ProviderError; message: string }

export function streetViewKey() {
  return process.env.GOOGLE_MAPS_API_KEY || ""
}

/** Compass bearing from the camera to the house, so the photo faces it. */
export function bearing(from: { lat: number; lng: number }, to: { lat: number; lng: number }) {
  const r = Math.PI / 180
  const y = Math.sin((to.lng - from.lng) * r) * Math.cos(to.lat * r)
  const x = Math.cos(from.lat * r) * Math.sin(to.lat * r) - Math.sin(from.lat * r) * Math.cos(to.lat * r) * Math.cos((to.lng - from.lng) * r)
  return (Math.atan2(y, x) / r + 360) % 360
}

function mapStatus(status: string): ProviderError {
  if (status === "REQUEST_DENIED") return "api_disabled"
  if (status === "ZERO_RESULTS" || status === "NOT_FOUND") return "not_found"
  return "provider_error"
}

export const PROVIDER_MESSAGES: Record<ProviderError, string> = {
  not_configured: "Address search isn't set up yet. Please upload a photo of your home instead.",
  api_disabled: "Address search isn't available yet. Please upload a photo of your home instead.",
  not_found: "We couldn't find that address. Check it, or upload a photo of your home instead.",
  no_imagery: "There's no street-level photo for that address. Please upload a photo of your home instead.",
  provider_error: "Address search isn't responding right now. Please try again, or upload a photo instead.",
}

const fail = (error: ProviderError): AddressLookup => ({ ok: false, error, message: PROVIDER_MESSAGES[error] })

export async function lookupAddress(address: string, fetchImpl: typeof fetch = fetch): Promise<AddressLookup> {
  const key = streetViewKey()
  if (!key) return fail("not_configured")

  const geo = (await (
    await fetchImpl(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&components=country:US&key=${key}`)
  ).json()) as { status: string; results?: { formatted_address: string; geometry: { location: { lat: number; lng: number } } }[] }
  if (geo.status !== "OK" || !geo.results?.length) return fail(mapStatus(geo.status))
  const top = geo.results[0]
  const location = top.geometry.location

  const meta = (await (
    await fetchImpl(
      `https://maps.googleapis.com/maps/api/streetview/metadata?location=${location.lat},${location.lng}&radius=60&source=outdoor&key=${key}`,
    )
  ).json()) as { status: string; pano_id?: string; location?: { lat: number; lng: number }; date?: string; copyright?: string }
  if (meta.status !== "OK" || !meta.pano_id || !meta.location) {
    return fail(meta.status === "ZERO_RESULTS" || meta.status === "NOT_FOUND" ? "no_imagery" : mapStatus(meta.status))
  }

  return {
    ok: true,
    formattedAddress: top.formatted_address,
    location,
    pano: { id: meta.pano_id, lat: meta.location.lat, lng: meta.location.lng, date: meta.date ?? null, copyright: meta.copyright ?? "© Google" },
    heading: Math.round(bearing(meta.location, location)),
  }
}

export type Camera = { pano: string; heading: number; pitch: number; fov: number }

/** Validates and clamps camera parameters from the query string. */
export function parseCamera(params: URLSearchParams): Camera | null {
  const pano = params.get("pano") ?? ""
  if (!/^[A-Za-z0-9_-]{10,100}$/.test(pano)) return null
  const num = (k: string, d: number) => {
    const v = Number(params.get(k))
    return Number.isFinite(v) ? v : d
  }
  return {
    pano,
    heading: ((Math.round(num("heading", 0)) % 360) + 360) % 360,
    pitch: Math.max(-20, Math.min(40, Math.round(num("pitch", 5)))),
    fov: Math.max(30, Math.min(120, Math.round(num("fov", 80)))),
  }
}

export function streetViewImageUrl(c: Camera, key: string) {
  return `https://maps.googleapis.com/maps/api/streetview?size=640x640&pano=${encodeURIComponent(c.pano)}&heading=${c.heading}&pitch=${c.pitch}&fov=${c.fov}&source=outdoor&return_error_code=true&key=${key}`
}
