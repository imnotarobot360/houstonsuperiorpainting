"use client"

import { useEffect } from "react"
import { useHidesInterruptions } from "@/lib/focused-routes"
import { CHAT_LOADED_EVENT, useChatShouldYield } from "@/components/chat-launcher"

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
  const yieldToContent = useChatShouldYield()

  // Once loaded, the widget's own bubble steps aside the same way the launcher
  // does: never over a form, its consent text or the footer. An open chat
  // panel is left alone.
  useEffect(() => {
    const host = document.querySelector<HTMLElement>("chat-widget")
    if (!host) return
    const api = (window as unknown as { leadConnector?: { chatWidget?: { isActive?: () => boolean } } }).leadConnector?.chatWidget
    const open = api?.isActive?.() ?? false
    host.style.visibility = yieldToContent && !open ? "hidden" : ""
  }, [yieldToContent])

  /**
   * Hide the widget on focused routes.
   *
   * This is done here rather than by not rendering the <Script>, because
   * once <ChatLauncher> has loaded the widget it stays in the DOM across
   * client-side navigations — and React can't unmount
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

    // The widget loads only when <ChatLauncher> is tapped, so it usually does
    // not exist yet; apply once it announces itself.
    const onLoaded = () => apply()
    window.addEventListener(CHAT_LOADED_EVENT, onLoaded)
    apply()
    return () => window.removeEventListener(CHAT_LOADED_EVENT, onLoaded)
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

    // The shadow root can appear a moment after the host: poll briefly once
    // <ChatLauncher> reports the widget loaded.
    let timer: number | undefined
    const onLoaded = () => {
      window.clearInterval(timer)
      attempts = 0
      if (inject()) return
      timer = window.setInterval(() => {
        attempts += 1
        if (inject() || attempts > 40) window.clearInterval(timer)
      }, 250)
    }
    window.addEventListener(CHAT_LOADED_EVENT, onLoaded)
    inject()
    return () => {
      window.removeEventListener(CHAT_LOADED_EVENT, onLoaded)
      window.clearInterval(timer)
    }
  }, [])

  return null
}
