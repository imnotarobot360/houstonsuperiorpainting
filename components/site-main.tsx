"use client"

import { useHidesStickyCta } from "@/lib/focused-routes"

/**
 * The app's <main> wrapper.
 *
 * Exists only to own one piece of conditional padding. The global `pb-20` on
 * mobile is there to clear the fixed StickyMobileCTA bar; where that bar is
 * suppressed, the same padding becomes an 80px strip of dead space under the
 * footer with nothing in it.
 *
 * This must track the *sticky CTA* flag specifically, since the padding exists
 * for that bar. Keying it to the interruption flag would drop the padding on
 * the /chatgpt/* funnels while the bar is still rendered, letting it cover the
 * end of the page.
 */
export function SiteMain({ children }: { children: React.ReactNode }) {
  const focused = useHidesStickyCta()

  return <main className={focused ? undefined : "pb-20 md:pb-0"}>{children}</main>
}
