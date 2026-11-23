import { ChatLauncher } from '@/components/chat-launcher'
import { SiteMain } from '@/components/site-main'
import { StructuredData } from '@/components/structured-data'
import { StickyMobileCTA } from '@/components/sticky-mobile-cta'
import { StickyCTA } from '@/components/sticky-cta'
import { ExitIntent } from '@/components/exit-intent'
import { ChatWidgetOffset } from '@/components/chat-widget-offset'
import { OpenAIPixel } from '@/components/openai-pixel'
import { SiteTracking } from '@/components/root/site-tracking'
import { fontVariables } from '@/lib/fonts'

/**
 * The <html> document for the Houston Superior Painting site, shared by the
 * English root layout (app/(site)/layout.tsx) and the Spanish one
 * (app/(es)/layout.tsx).
 *
 * The site has several root layouts (route groups) instead of one layout that
 * reads request headers: calling headers() in the root layout made EVERY route
 * dynamic and served it with Cache-Control: private, no-store (audit
 * 2026-11-22). The language and the painting chrome are now fixed per route
 * group, so pages prerender as static HTML. Never call headers()/cookies()
 * here or in a root layout: it turns the whole site dynamic again.
 */
export function PaintingRootLayout({
  lang,
  children,
}: {
  lang: 'en' | 'es-US'
  children: React.ReactNode
}) {
  return (
    <html lang={lang} className={`${fontVariables} bg-background`}>
      <head>
        {/* ChatGPT Ads pixel. Placed first in <head> per OpenAI's guidance so a
            conversion firing early in page load isn't dropped. Site-wide on
            purpose: an ad click can land anywhere, and the attribution capture
            inside it must run on every route or the oppref click ID is lost. */}
        <OpenAIPixel />
        {/* Painting schema + favicon links. These are raw <link> elements, so
            Next's metadata dedupe would NOT override them from a child route;
            that is why the epoxy subtree has its own root layout without them. */}
        <StructuredData />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        {/* No sitewide hreflang: it told Google every page's English version was the
            homepage. hreflang now lives only on pages that have a Spanish twin
            (homepage <-> /es), via each page's metadata.alternates.languages. */}
      </head>
      <body className="min-h-screen font-sans antialiased">
        <SiteMain>{children}</SiteMain>
        <StickyMobileCTA />
        <StickyCTA />
        <ExitIntent />
        <ChatWidgetOffset />
        <SiteTracking />
        {/* LeadConnector chat: a lightweight button that loads the real widget
            only when tapped (page speed, owner decision 2026-10-27). The widget
            injects itself client-side, so there is no server-rendered <script>
            for loader.js to mutate (that caused hydration mismatches before).
            Painting-branded, so the epoxy root layout leaves it out. */}
        <ChatLauncher />
      </body>
    </html>
  )
}
