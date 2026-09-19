"use client"

import { useEffect } from "react"
import { useHidesInterruptions } from "@/lib/focused-routes"

/**
 * The LeadConnector chat widget renders inside a shadow root and pins itself
 * to bottom-right, where it covered the mobile sticky Call / Text / Quote bar.
 * External CSS can't cross the shadow boundary, so we inject a stylesheet
 * into the shadow root once the widget mounts.
 */
const OFFSET_STYLE = `
  @media (max-width: 767px) {
    .lc_text-widget,
    .lc_text-widget--bubble {
      bottom: 88px !important;
    }
  }
`

export function ChatWidgetOffset() {
  const focused = useHidesInterruptions()

  /**
   * Hide the widget on focused routes.
   *
   * This is done here rather than by not rendering the <Script>, because
   * `strategy="lazyOnload"` means the widget may already have injected itself
   * before a client-side navigation reaches this page — and React can't unmount
   * DOM that a third-party script created outside the React tree.
   *
   * So the host element is toggled directly. `<chat-widget>` is a custom
   * element in the light DOM (the shadow root is inside it), which makes it
   * addressable from here — no need to guess at the widget's internal class
   * names, and hiding the host takes the bubble and any open panel with it.
   */
  useEffect(() => {
    const HIDDEN_ATTR = "data-hsp-hidden"

    const apply = () => {
      const host = document.querySelector<HTMLElement>("chat-widget")
      if (!host) return false

      if (focused) {
        // Record that we hid it, so leaving the route only restores widgets
        // this code hid — never one the widget itself chose to keep hidden.
        host.style.display = "none"
        host.setAttribute(HIDDEN_ATTR, "true")
      } else if (host.getAttribute(HIDDEN_ATTR) === "true") {
        host.style.display = ""
        host.removeAttribute(HIDDEN_ATTR)
      }
      return true
    }

    if (apply()) return

    // The widget is lazy-loaded, so it may not exist yet on first paint.
    let tries = 0
    const timer = window.setInterval(() => {
      tries += 1
      if (apply() || tries > 40) window.clearInterval(timer)
    }, 250)
    return () => window.clearInterval(timer)
  }, [focused])

  useEffect(() => {
    let attempts = 0

    const inject = (): boolean => {
      const host = document.querySelector("chat-widget")
      const root = host?.shadowRoot
      if (!root) return false
      if (root.querySelector("style[data-hsp-offset]")) return true

      const style = document.createElement("style")
      style.setAttribute("data-hsp-offset", "true")
      style.textContent = OFFSET_STYLE
      root.appendChild(style)
      return true
    }

    if (inject()) return

    // The widget script loads asynchronously — poll briefly until it exists.
    const timer = window.setInterval(() => {
      attempts += 1
      if (inject() || attempts > 40) window.clearInterval(timer)
    }, 250)

    return () => window.clearInterval(timer)
  }, [])

  return null
}
