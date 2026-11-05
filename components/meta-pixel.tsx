"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { META_PIXEL_ID, trackPixel } from "@/lib/analytics"

/**
 * Meta Pixel (Facebook) base install.
 *
 * The inline loader fires the first `PageView` itself, so the effect below
 * skips its initial run and only reports subsequent route changes. Without
 * that, App Router client-side navigations would never be counted — the
 * loader script runs once per hard load, not per soft navigation.
 */
export function MetaPixel() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (!META_PIXEL_ID) return
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    trackPixel("PageView")
  }, [pathname])

  if (!META_PIXEL_ID) return null

  return (
    <>
      {/* Owner brief 2026-11-05, phase 7 (TBT): Meta's standard snippet, split
          in two. The fbq queue stub runs right away (no network), so init,
          PageView and any early events queue; fbevents.js itself waits until the
          page has loaded and then sends the queue. */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,n){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[]}(window);
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <Script id="meta-pixel-sdk" src="https://connect.facebook.net/en_US/fbevents.js" strategy="lazyOnload" />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element -- 1x1 tracking
            beacon; next/image cannot be used inside <noscript>. */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
