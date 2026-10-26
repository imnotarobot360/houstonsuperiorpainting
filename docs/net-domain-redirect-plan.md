# houstonsuperiorpainting.net → .com (owner brief 2026-10-25, phase 8)

## Status: already in place, verified 2026-10-25

`houstonsuperiorpainting.net` and `www.houstonsuperiorpainting.net` are attached to the same Vercel account as the
.com site. Vercel answers every .net request with a **308 permanent redirect** to the same path and query string on
`https://houstonsuperiorpainting.com`. No code change was needed.

Verified with `node scripts/check-net-redirects.mjs` (read-only GET requests), 24/24 passing:

| Request | Hops | Result |
|---|---|---|
| `https://houstonsuperiorpainting.net/<path>?<query>` | 308 | same path + query on .com |
| `https://www.houstonsuperiorpainting.net/<path>` | 308 | same path on .com |
| `http://houstonsuperiorpainting.net/<path>` | 308 (http→https on .net), 308 | same path on .com |
| `http://www.houstonsuperiorpainting.net/<path>` | 308, 308 | same path on .com |
| `.net/does-not-exist-404-check` | 308 | .com returns 404 (no soft-404, no redirect to the homepage) |

Paths tested: `/`, `/painters-katy-tx`, `/warranty`, `/blog/paint-warranty-texas`,
`/painting-estimate-houston?utm_source=test&utm_medium=check` (UTM parameters preserved), and a 404 path.

## Site source

- The audit rule `net-domain` (`scripts/audit-content-consistency.mjs`) fails the build's test step if
  `houstonsuperiorpainting.net` appears anywhere in served copy, canonicals, schema or `llms.txt`. It currently finds 0.
- Canonical URLs, Open Graph URLs, the sitemap and JSON-LD `@id`s all use `https://houstonsuperiorpainting.com`.

## Optional improvement (owner decision)

The plain-http .net URLs take two hops (http→https on .net, then .net→.com). Google follows both, so this is not an
error. To make it one hop, add a redirect for `http://*.houstonsuperiorpainting.net` straight to the .com in the
Vercel domain settings (Project → Settings → Domains → houstonsuperiorpainting.net → Redirect to
houstonsuperiorpainting.com, 308). That is a hosting setting, not a code change, so it is not part of this branch.

## Keep doing

- Keep the .net domain registered and renewing. Letting it lapse would let someone else serve content on it.
- Re-run `node scripts/check-net-redirects.mjs` after any Vercel domain change.
- In Google Search Console, if the .net property exists, leave it; the 308s carry its signals to the .com.
