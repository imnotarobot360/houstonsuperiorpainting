import type { ReactNode } from "react"
import { OpenAIPixel } from "@/components/openai-pixel"
import { SiteMain } from "@/components/site-main"
import { SiteTracking } from "@/components/root/site-tracking"
import { fontVariables } from "@/lib/fonts"
import { baseMetadata } from "@/lib/site-metadata"
import "@/app/globals.css"

/**
 * Root layout for the old epoxy microsite (/epoxy). A separate root layout so
 * none of the Houston Superior Painting chrome reaches it: no painting
 * Organization/LocalBusiness schema, favicon, sticky CTAs, exit intent or chat
 * widget, so crawlers never see two competing business entities on one page.
 * (/epoxy currently 308s to houstonsuperiorepoxy.com in next.config.mjs.)
 *
 * Wraps the subtree in .epoxy-theme, which redefines the raw design tokens
 * (see app/globals.css) so every semantic utility resolves to the black/orange
 * epoxy palette instead of the parent painting brand's.
 */
export const metadata = baseMetadata

export default function EpoxyRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fontVariables} bg-background`}>
      <head>
        <OpenAIPixel />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <SiteMain>
          <div className="epoxy-theme min-h-screen">{children}</div>
        </SiteMain>
        <SiteTracking />
      </body>
    </html>
  )
}
