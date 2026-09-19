/**
 * Ad-click attribution capture.
 *
 * Two things matter here, and they are independent:
 *
 * 1. `oppref` — OpenAI's opaque click identifier. The Measurement Pixel captures
 *    this from the landing-page URL and stores it in a first-party `__oppref`
 *    cookie automatically. The Conversions API explicitly does NOT:
 *    "Unlike the pixel, the API does not capture `oppref` for you."
 *    So we capture it ourselves into `hsp_oppref`. This also means click IDs are
 *    preserved even while the pixel is switched off (no Pixel ID yet), so no
 *    attribution data is lost before ChatGPT Ads goes live.
 *
 * 2. UTM / campaign params — first-touch, stored for the session so the lead
 *    payload can report which campaign produced it.
 *
 * First-touch wins: a visitor who lands from an ad and then browses to three
 * more pages must still be credited to that ad, so we never overwrite an
 * existing value with a later, emptier one.
 */

const OPPREF_COOKIE = "hsp_oppref"
/** OpenAI's own cookie, read as a fallback once the pixel is live. */
const OPENAI_OPPREF_COOKIE = "__oppref"
const UTM_STORAGE_KEY = "hsp_attribution"

/** Click window is 30 days, so the click ID must outlive a single session. */
const OPPREF_MAX_AGE_DAYS = 30

export interface Attribution {
  oppref?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  utmTerm?: string
  gclid?: string
  landingPage?: string
  referrer?: string
}

function readCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : undefined
}

function writeCookie(name: string, value: string, maxAgeDays: number) {
  if (typeof document === "undefined") return
  const secure = window.location.protocol === "https:" ? "; Secure" : ""
  document.cookie =
    `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAgeDays * 86400}` +
    `; SameSite=Lax${secure}`
}

/**
 * Reads the OpenAI click identifier. Prefers our own cookie, then falls back to
 * the one the pixel SDK sets, so attribution survives either integration being
 * the only one present.
 */
export function getOppref(): string | undefined {
  return readCookie(OPPREF_COOKIE) || readCookie(OPENAI_OPPREF_COOKIE)
}

/**
 * Captures `oppref` and campaign params from the current URL. Safe to call on
 * every route change — it only ever fills in blanks.
 */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return {}

  const params = new URLSearchParams(window.location.search)

  // oppref → long-lived cookie, first-touch.
  const incomingOppref = params.get("oppref")
  if (incomingOppref && !getOppref()) {
    writeCookie(OPPREF_COOKIE, incomingOppref, OPPREF_MAX_AGE_DAYS)
  }

  const stored = getStoredAttribution()

  // Only treat this as a new campaign touch if the URL actually carries one.
  const hasCampaignParams =
    params.has("utm_source") || params.has("utm_campaign") || params.has("gclid")

  if (hasCampaignParams && !stored.utmSource && !stored.gclid) {
    const fresh: Attribution = {
      utmSource: params.get("utm_source") || undefined,
      utmMedium: params.get("utm_medium") || undefined,
      utmCampaign: params.get("utm_campaign") || undefined,
      utmContent: params.get("utm_content") || undefined,
      utmTerm: params.get("utm_term") || undefined,
      gclid: params.get("gclid") || undefined,
      landingPage: window.location.pathname,
      referrer: document.referrer || undefined,
    }
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fresh))
    } catch {
      // Private-mode / storage-disabled browsers: attribution is a nice-to-have,
      // never a reason to break the page.
    }
    return { ...fresh, oppref: getOppref() }
  }

  return { ...stored, oppref: getOppref() }
}

function getStoredAttribution(): Attribution {
  if (typeof window === "undefined") return {}
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Attribution) : {}
  } catch {
    return {}
  }
}

/** Full attribution for attaching to a lead submission. */
export function getAttribution(): Attribution {
  return { ...getStoredAttribution(), oppref: getOppref() }
}

/** Flattens attribution into readable lines for the lead notification email. */
export function formatAttribution(attr: Attribution): string {
  const parts: string[] = []
  if (attr.utmSource) parts.push(`source: ${attr.utmSource}`)
  if (attr.utmMedium) parts.push(`medium: ${attr.utmMedium}`)
  if (attr.utmCampaign) parts.push(`campaign: ${attr.utmCampaign}`)
  if (attr.utmContent) parts.push(`content: ${attr.utmContent}`)
  if (attr.utmTerm) parts.push(`term: ${attr.utmTerm}`)
  if (attr.gclid) parts.push(`gclid: ${attr.gclid}`)
  if (attr.oppref) parts.push(`openai_click: ${attr.oppref}`)
  if (attr.landingPage) parts.push(`landing: ${attr.landingPage}`)
  if (attr.referrer) parts.push(`referrer: ${attr.referrer}`)
  return parts.length ? parts.join(" | ") : "direct / no campaign params"
}
