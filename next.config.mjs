/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Serve modern, smaller formats automatically (AVIF first, WebP fallback).
    // Next.js/Vercel then resizes, converts, and lazy-loads images on demand,
    // which is the biggest Core Web Vitals win for this image-heavy site.
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2678400, // cache optimized images for 31 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        // Security headers applied site-wide
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self'",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return {
      // beforeFiles so the epoxy host maps to /epoxy before any static file or
      // page route on the main site is considered.
      //
      // NOTE: the two host rewrites below are now DEAD CODE. The epoxy brand
      // moved to its own domain (houstonsuperiorepoxy.com) and
      // epoxy.houstonsuperiorpainting.com 308s there at the Vercel domain
      // level — verified: that response carries no x-matched-path, so the
      // request never reaches this app and these rules never match. They are
      // kept only because app/epoxy/* is still on disk as a reference; if the
      // subdomain's domain-level redirect is ever removed, these would resume
      // serving the old microsite and re-open the duplicate-content hole that
      // the /epoxy redirect below closes. Delete both together with app/epoxy/.
      beforeFiles: [
        // Houston Superior Epoxy subdomain -> /epoxy subtree.
        // The URL stays on epoxy.houstonsuperiorpainting.com; only the internal
        // path is rewritten, so visitors never see "/epoxy".
        {
          source: '/',
          has: [{ type: 'host', value: 'epoxy.houstonsuperiorpainting.com' }],
          destination: '/epoxy',
        },
        {
          // 'epoxy' MUST stay in this exclusion list. Without it, /epoxy on the
          // epoxy host is rewritten again to /epoxy/epoxy — which does not
          // exist — so the subdomain 404s while the same route still returns
          // 200 on the apex. Also excludes _vercel so Vercel's internal
          // endpoints (insights, speed-insights) resolve normally.
          source: '/:path((?!_next|_vercel|images|api|favicon|robots|sitemap|epoxy).*)',
          has: [{ type: 'host', value: 'epoxy.houstonsuperiorpainting.com' }],
          destination: '/epoxy/:path',
        },
      ],
    }
  },
  async redirects() {
    return [
      // Canonical host: 308 redirect www -> apex to close the duplicate-host hole
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.houstonsuperiorpainting.com' }],
        destination: 'https://houstonsuperiorpainting.com/:path*',
        permanent: true,
      },

      // ─── Epoxy brand migration ────────────────────────────────────────
      // The epoxy brand now lives on its own apex domain, houstonsuperiorepoxy.com.
      // The former home, epoxy.houstonsuperiorpainting.com, 308s there at the
      // Vercel domain level, so every destination below points at the NEW domain
      // directly — routing through the old subdomain would make each of these a
      // two-hop chain, and authority bleeds on every hop.
      //
      // The new domain 308s all non-root paths to `/`, so destinations are the
      // bare root rather than a mirrored path.

      // /epoxy is the old on-site microsite. It stayed HTTP 200 after the brand
      // moved, competing with the new domain for "garage epoxy houston" while
      // its canonical pointed at a subdomain that now redirects away — so the
      // duplicate outranked its own canonical target. 301, since the page was
      // indexed and internally linked.
      { source: '/epoxy', destination: 'https://houstonsuperiorepoxy.com/', permanent: true },

      // Consolidate epoxy authority onto the new domain so the two properties
      // never compete for "garage epoxy houston". The old page ranked and was
      // linked from 31 internal pages, so this must be a permanent 301.
      {
        source: '/garage-epoxy-houston-tx',
        destination: 'https://houstonsuperiorepoxy.com/',
        permanent: true,
      },

      // The estimate funnels were briefly built under /estimate/* before being
      // consolidated onto the live /chatgpt/* ad URLs. These are 307s, not 301s:
      // the paths were never advertised or indexed, so there is no authority to
      // pass, and a temporary redirect keeps the paths reusable later.
      { source: '/estimate/interior', destination: '/chatgpt/interior-painting-houston', permanent: false },
      { source: '/estimate/exterior', destination: '/chatgpt/exterior-painting-houston', permanent: false },
      { source: '/estimate/cabinets', destination: '/chatgpt/cabinet-refinishing-houston', permanent: false },
      { source: '/estimate/epoxy', destination: '/chatgpt/garage-epoxy-houston', permanent: false },

      // Service page redirects (old URLs without -tx to new URLs with -tx)
      { source: '/interior-painting-houston', destination: '/interior-painting-houston-tx', permanent: true },
      { source: '/exterior-painting-houston', destination: '/exterior-painting-houston-tx', permanent: true },
      { source: '/cabinet-refinishing-houston', destination: '/cabinet-refinishing-houston-tx', permanent: true },
      { source: '/cabinet-painting-houston-tx', destination: '/cabinet-refinishing-houston-tx', permanent: true },
      { source: '/drywall-repair-houston', destination: '/drywall-repair-houston-tx', permanent: true },
      { source: '/commercial-painting-houston', destination: '/commercial-painting-houston-tx', permanent: true },
      { source: '/pressure-washing-houston', destination: '/pressure-washing-houston-tx', permanent: true },
      { source: '/limewash-brick-painting-houston', destination: '/limewash-brick-painting-houston-tx', permanent: true },
      { source: '/load-bearing-wall-removal-houston', destination: '/load-bearing-wall-removal-houston-tx', permanent: true },

      // ─── Duplicate location pages ─────────────────────────────────────
      // Two city pages existed at two URLs each, competing for the same query.
      // Winner chosen by internal link equity in each pair so the redirect
      // points at the stronger URL rather than away from it:
      //   painters-houston-tx  (14 inbound) beats painters-in-houston-tx (8)
      //   painters-cypress-tx  (26 inbound) beats house-painters-cypress-tx (0)
      // 301 because both losing URLs were indexed. The page files stay on disk
      // but are now unreachable — app/sitemap.ts derives its exclusions from
      // these rules, so neither is advertised any more.
      { source: '/painters-in-houston-tx', destination: '/painters-houston-tx', permanent: true },
      { source: '/house-painters-cypress-tx', destination: '/painters-cypress-tx', permanent: true },

      // Shorthand variants for the two newest location pages. The canonical
      // URLs (/painters-sienna-tx, /painters-riverstone-tx) return 200, but the
      // shorthand forms people actually type or link — bare community name, and
      // the slug without the -tx suffix — were hard 404s. Both communities are
      // widely referred to as just "Sienna" and "Riverstone" locally, so these
      // are likely inbound-link and manual-entry shapes. 301 so any existing
      // link equity consolidates onto the canonical URL.
      { source: '/sienna', destination: '/painters-sienna-tx', permanent: true },
      { source: '/painters-sienna', destination: '/painters-sienna-tx', permanent: true },
      { source: '/riverstone', destination: '/painters-riverstone-tx', permanent: true },
      { source: '/painters-riverstone', destination: '/painters-riverstone-tx', permanent: true },

      // Legacy WordPress URLs (old site structure) -> current routes
      // These reclaim SEO authority from old indexed URLs and prevent duplicate content
      { source: '/residential', destination: '/residential-painters-houston', permanent: true },
      { source: '/residential-painting', destination: '/residential-painters-houston', permanent: true },
      { source: '/commercial', destination: '/commercial-painting-houston-tx', permanent: true },
      { source: '/commercial-painting', destination: '/commercial-painting-houston-tx', permanent: true },
      { source: '/cabinet-painting-and-refinishing', destination: '/cabinet-refinishing-houston-tx', permanent: true },
      { source: '/cabinet-painting', destination: '/cabinet-refinishing-houston-tx', permanent: true },
      { source: '/cabinet-refinishing', destination: '/cabinet-refinishing-houston-tx', permanent: true },
      { source: '/guide-to-cabinet-painting-process', destination: '/cabinet-refinishing-houston-tx', permanent: true },
      { source: '/cabinet-painting-guide', destination: '/cabinet-refinishing-houston-tx', permanent: true },
      { source: '/cabinet-painting-process', destination: '/cabinet-refinishing-houston-tx', permanent: true },
      { source: '/pressure-washing', destination: '/pressure-washing-houston-tx', permanent: true },
      { source: '/interior-painting', destination: '/interior-painting-houston-tx', permanent: true },
      { source: '/exterior-painting', destination: '/exterior-painting-houston-tx', permanent: true },
      { source: '/drywall-repair', destination: '/drywall-repair-houston-tx', permanent: true },
      { source: '/drywall', destination: '/drywall-repair-houston-tx', permanent: true },
      { source: '/limewash', destination: '/limewash-brick-painting-houston-tx', permanent: true },
      { source: '/brick-painting', destination: '/limewash-brick-painting-houston-tx', permanent: true },
      // Points straight at the epoxy domain, not via /garage-epoxy-houston-tx —
      // that would be a two-hop chain, which bleeds authority on each hop.
      { source: '/garage-epoxy', destination: 'https://houstonsuperiorepoxy.com/', permanent: true },
      { source: '/residential-exterior-painting', destination: '/exterior-painting-houston-tx', permanent: true },
      { source: '/commercial-interior-painting', destination: '/commercial-painting-houston-tx', permanent: true },
      { source: '/trim-painting', destination: '/interior-painting-houston-tx', permanent: true },
      { source: '/garage-door-painting', destination: '/exterior-painting-houston-tx', permanent: true },
      // /faq is now a real page (the FAQ hub) — the old '/faq' -> '/#faq' rule was removed.
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/services', destination: '/', permanent: true },
      { source: '/our-work', destination: '/', permanent: true },
      { source: '/gallery', destination: '/', permanent: true },
      { source: '/portfolio', destination: '/', permanent: true },

      // ─── Limewash / brick consolidation ───────────────────────────────
      // Four legacy limewash/brick slugs (none of which exist as pages) fold
      // into the single canonical /limewash-brick-painting-houston-tx so they
      // never split ranking for the same intent. These use the -houston-tx
      // suffix and are distinct from the bare /limewash and /brick-painting
      // WordPress rules above; both shapes coexist. 301 — treated as indexed.
      { source: '/limewash-decorative-finishes-houston-tx', destination: '/limewash-brick-painting-houston-tx', permanent: true },
      { source: '/limewash-german-smear-houston-tx', destination: '/limewash-brick-painting-houston-tx', permanent: true },
      { source: '/limewash-houston-tx', destination: '/limewash-brick-painting-houston-tx', permanent: true },
      { source: '/brick-painting-houston-tx', destination: '/limewash-brick-painting-houston-tx', permanent: true },

      // ─── Luxury painting consolidation ────────────────────────────────
      // The -tx-suffixed and split interior/exterior luxury slugs collapse onto
      // the canonical /luxury-house-painters-houston (verified 200). 301.
      { source: '/luxury-house-painters-houston-tx', destination: '/luxury-house-painters-houston', permanent: true },
      { source: '/luxury-interior-painting-houston-tx', destination: '/luxury-house-painters-houston', permanent: true },
      { source: '/luxury-exterior-painting-houston-tx', destination: '/luxury-house-painters-houston', permanent: true },

      // ─── AEO plan, Sep 2026: consolidate cannibalizing posts ─────────
      // Each loser 301s to the page that owns the query, so one URL per intent.
      // See docs/aeo-seo-plan-2026-09.md.
      { source: '/painting-houston', destination: '/painters-houston-tx', permanent: true },
      // Replaced by the fuller brand comparison (Sep 30, 2026); one URL for this query.
      { source: '/blog/sherwin-williams-vs-benjamin-moore-texas-heat', destination: '/blog/benjamin-moore-vs-sherwin-williams', permanent: true },
      // /locations/* was a parallel set of office pages (v0 PR #3). The plan keeps
      // the existing /painters-*-tx URLs as the office pages, so these 301 there.
      { source: '/locations/:slug(cypress|houston|katy|sugar-land|magnolia)', destination: '/painters-:slug-tx', permanent: true },
      { source: '/locations', destination: '/service-areas', permanent: true },
      { source: '/blog/house-painting-cost-houston-2026', destination: '/houston-painting-cost-guide', permanent: true },
      { source: '/blog/interior-painting-cost-houston-tx', destination: '/interior-painting-cost-houston', permanent: true },
      { source: '/blog/exterior-painting-cost-houston-tx-2026', destination: '/exterior-house-painting-houston-cost-guide', permanent: true },
      { source: '/blog/best-time-to-paint-houston-home-exterior', destination: '/blog/best-time-to-paint-house-houston', permanent: true },
      { source: '/blog/how-to-choose-best-painters-houston', destination: '/questions-to-ask-before-hiring-painters', permanent: true },
      { source: '/blog/licensed-vs-unlicensed-painters', destination: '/questions-to-ask-before-hiring-painters', permanent: true },
      // Three near-duplicate paint-color-trend slugs (none built as pages) fold
      // into the single canonical best-paint-colors page so they never split
      // ranking for the same intent.
      { source: '/blog/paint-color-trends-houston-homes-2026', destination: '/best-paint-colors-houston-homes', permanent: true },
      { source: '/blog/paint-colors-houston-homes-2026', destination: '/best-paint-colors-houston-homes', permanent: true },
      { source: '/blog/houston-paint-color-trends-2026', destination: '/best-paint-colors-houston-homes', permanent: true },
      // Garage epoxy content belongs to the epoxy brand's own domain.
      { source: '/blog/garage-epoxy-coating-houston-tx', destination: 'https://houstonsuperiorepoxy.com/', permanent: true },
      { source: '/blog/garage-epoxy-flooring-houston-tx', destination: 'https://houstonsuperiorepoxy.com/', permanent: true },

      // ─── Duplicate-post merge, Oct 2026 ───────────────────────────────
      // Each pair targeted the same query. The loser's unique content was folded
      // into the winner, then the loser 301s there so one URL owns the intent.
      { source: '/blog/interior-paint-colors-houston-2026', destination: '/blog/best-interior-paint-colors-houston-homes', permanent: true },
      { source: '/blog/cabinet-painting-vs-replacement', destination: '/blog/cabinet-refinishing-vs-replacement-houston', permanent: true },
      { source: '/blog/best-painting-company-katy-tx', destination: '/blog/painters-near-me-katy-tx', permanent: true },
      { source: '/blog/best-painters-houston-tx', destination: '/questions-to-ask-before-hiring-painters', permanent: true },
      { source: '/blog/how-often-repaint-home-houston-climate', destination: '/how-often-paint-house-houston', permanent: true },
      { source: '/blog/best-exterior-paints-houston-humidity', destination: '/best-exterior-paint-houston-weather', permanent: true },
      // The epoxy domain already publishes these two topics; send each to its
      // exact counterpart (trailing slash = that site's canonical, so one hop).
      { source: '/blog/epoxy-vs-polyaspartic-houston', destination: 'https://houstonsuperiorepoxy.com/resources/epoxy-vs-polyaspartic-houston/', permanent: true },
      { source: '/blog/home-depot-vs-professional-garage-floor-epoxy', destination: 'https://houstonsuperiorepoxy.com/resources/diy-epoxy-kit-vs-professional-installation/', permanent: true },

      // Cypress interior page renamed to the community-scoped canonical URL.
      { source: '/interior-painting-cypress-tx', destination: '/interior-painting-cypress-bridgeland', permanent: true },
    ]
  },
}

export default nextConfig
