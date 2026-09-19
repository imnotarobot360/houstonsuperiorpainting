// IndexNow submission helper.
//
// IndexNow lets us notify search engines (Bing, Yandex, Seznam, Naver, and
// others in the shared network) the moment content is added or updated, instead
// of waiting for the next crawl. Google does not currently consume IndexNow,
// but it is verified separately via Search Console (DNS).
//
// The key below must match the verification file served at
// /<key>.txt (see public/1420b82ee04537fa3207aa41a201f7f7.txt).

export const INDEXNOW_KEY = "1420b82ee04537fa3207aa41a201f7f7"

export const SITE_HOST = "houstonsuperiorpainting.com"
const SITE_ORIGIN = `https://${SITE_HOST}`
const KEY_LOCATION = `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`

// Single shared IndexNow endpoint. Submissions are relayed to all participating
// engines, so we only need to call one.
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"

export type IndexNowResult = {
  ok: boolean
  status: number
  submitted: string[]
  error?: string
}

/**
 * Normalize a path or absolute URL into an absolute URL on this site's host.
 * Returns null for URLs that belong to a different host (IndexNow rejects
 * mixed-host batches).
 */
function toAbsoluteUrl(input: string): string | null {
  try {
    const url = input.startsWith("http")
      ? new URL(input)
      : new URL(input.startsWith("/") ? input : `/${input}`, SITE_ORIGIN)

    if (url.host !== SITE_HOST) return null
    return url.toString()
  } catch {
    return null
  }
}

/**
 * Submit one or more URLs to IndexNow. Accepts paths ("/blog/foo") or absolute
 * URLs. Invalid or off-host entries are dropped. Safe to call from server
 * actions, route handlers, or build scripts.
 */
export async function submitToIndexNow(urls: string | string[]): Promise<IndexNowResult> {
  const list = Array.isArray(urls) ? urls : [urls]
  const urlList = Array.from(
    new Set(list.map(toAbsoluteUrl).filter((u): u is string => Boolean(u))),
  )

  if (urlList.length === 0) {
    return { ok: false, status: 400, submitted: [], error: "No valid same-host URLs to submit." }
  }

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList,
      }),
    })

    // IndexNow returns 200 (accepted) or 202 (accepted, key validation pending).
    const ok = res.status === 200 || res.status === 202
    return {
      ok,
      status: res.status,
      submitted: urlList,
      error: ok ? undefined : `IndexNow responded with ${res.status}`,
    }
  } catch (err) {
    return {
      ok: false,
      status: 0,
      submitted: urlList,
      error: err instanceof Error ? err.message : "Unknown IndexNow error",
    }
  }
}
