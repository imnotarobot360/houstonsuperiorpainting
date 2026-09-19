"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import {
  OPENAI_EVENTS,
  OPENAI_PIXEL_ID,
  OPENAI_PIXEL_SDK,
  measureOpenAI,
} from "@/lib/openai-ads"
import { captureAttribution } from "@/lib/attribution"

/**
 * ChatGPT Ads Measurement Pixel.
 *
 * Live — the pixel ID is committed in lib/openai-ads.ts (it is public by
 * design). `debug: true` is added in development only, matching the snippet
 * from Ads Manager without leaving console noise in production.
 *
 * `beforeInteractive` matches OpenAI's guidance to place the snippet "near the
 * top of your <head> to ensure early conversions aren't lost while other
 * content loads" — a conversion firing before the SDK exists would be dropped.
 * The stub queues calls until the real SDK arrives, so ordering is safe either
 * way, but earlier is strictly better.
 */
export function OpenAIPixel() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    // Runs on every route change so a click ID is captured no matter which page
    // the ad points at, and regardless of whether the pixel itself is enabled.
    captureAttribution()
  }, [pathname])

  useEffect(() => {
    if (!OPENAI_PIXEL_ID) return
    // The init snippet reports the first page itself; this effect only covers
    // App Router soft navigations, which fire no new script execution.
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    measureOpenAI(OPENAI_EVENTS.pageViewed, {
      contents: [{ id: pathname, content_type: "page" }],
    })
  }, [pathname])

  if (!OPENAI_PIXEL_ID) return null

  return (
    <Script id="openai-pixel" strategy="beforeInteractive">
      {`
        (function (w, d, s, u) {
          if (w.oaiq) return;
          var q = function () { q.q.push(arguments); };
          q.q = [];
          w.oaiq = q;
          var js = d.createElement(s);
          js.async = true;
          js.src = u;
          var f = d.getElementsByTagName(s)[0];
          f.parentNode.insertBefore(js, f);
        })(window, document, "script", "${OPENAI_PIXEL_SDK}");
        oaiq("init", { pixelId: "${OPENAI_PIXEL_ID}"${
          process.env.NODE_ENV === "development" ? ", debug: true" : ""
        } });
      `}
    </Script>
  )
}
