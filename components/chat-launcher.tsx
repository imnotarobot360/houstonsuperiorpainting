"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"
import { useHidesInterruptions } from "@/lib/focused-routes"

/**
 * Tap-to-load stand-in for the LeadConnector chat widget (owner decision
 * 2026-10-27, page speed). The real widget pulls in roughly 100 KB of script
 * and a config fetch on every page view; most visitors never open it. This
 * button sits where the widget's bubble sits, and only on the first tap (or
 * hover / keyboard focus, so the widget is usually warm by the time the click
 * lands) does it inject loader.js and then open the chat panel.
 *
 * <ChatWidgetOffset> listens for CHAT_LOADED_EVENT to apply its mobile offset
 * and focused-route hiding to the widget once it exists.
 */
export const CHAT_LOADED_EVENT = "hsp:chat-loaded"

const LOADER_SRC = "https://widgets.leadconnectorhq.com/loader.js"

type ChatApi = { openWidget?: () => void; isLoaded?: () => boolean }
const chatApi = () =>
  (window as unknown as { leadConnector?: { chatWidget?: ChatApi } }).leadConnector?.chatWidget

let requested = false

/**
 * True while a form, the footer, or an in-page phone or estimate button sits in
 * the bottom band of the screen where the floating chat button lives (owner
 * brief 2026-10-27, phase 3), so the button never covers them. Also true while
 * any form field has focus.
 */
// Forms, the footer, and the in-page phone and estimate buttons.
const YIELD_TO =
  "main form, footer, main a[href^='tel:'], main a[href*='estimate'], main button[type=submit], main a[class*='bg-secondary'], main a[class*='bg-primary']"

export function useChatShouldYield() {
  const [covered, setCovered] = useState(false)
  useEffect(() => {
    const visible = new Set<Element>()
    let focused = false
    const update = () => {
      for (const el of visible) if (!el.isConnected) visible.delete(el)
      setCovered(focused || visible.size > 0)
    }
    // Only the bottom 170px of the viewport: the button plus the sticky bar.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target)
          else visible.delete(e.target)
        }
        update()
      },
      { rootMargin: `-${Math.max(0, window.innerHeight - 170)}px 0px 0px 0px` },
    )
    const watch = () => document.querySelectorAll(YIELD_TO).forEach((el) => io.observe(el))
    watch()
    // Forms can mount after hydration (client-side navigation, step changes).
    let queued = false
    const mo = new MutationObserver(() => {
      if (queued) return
      queued = true
      requestAnimationFrame(() => {
        queued = false
        watch()
        update()
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })
    const isField = (t: EventTarget | null) => t instanceof HTMLElement && t.matches("input, select, textarea")
    const onIn = (e: FocusEvent) => { if (isField(e.target) && !(e.target as HTMLElement).closest("chat-widget")) { focused = true; update() } }
    const onOut = (e: FocusEvent) => { if (isField(e.target)) { focused = false; update() } }
    document.addEventListener("focusin", onIn)
    document.addEventListener("focusout", onOut)
    return () => {
      io.disconnect()
      mo.disconnect()
      document.removeEventListener("focusin", onIn)
      document.removeEventListener("focusout", onOut)
    }
  }, [])
  return covered
}

function loadWidget() {
  if (requested) return
  requested = true
  const s = document.createElement("script")
  s.src = LOADER_SRC
  s.async = true
  s.dataset.resourcesUrl = "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
  s.dataset.widgetId = "69d7dae8b5c4e01d38ac3431"
  s.dataset.source = "WEB_USER"
  document.body.appendChild(s)
}

export function ChatLauncher() {
  const focused = useHidesInterruptions()
  const yieldToContent = useChatShouldYield()
  const [state, setState] = useState<"idle" | "loading" | "done">("idle")

  if (focused || state === "done") return null

  // Load the widget, then hand over to it: its own bubble takes this spot.
  // `openAfter` is true for a tap (open the panel), false for hover/focus preload.
  const start = (openAfter: boolean) => {
    if (state === "loading" && !openAfter) return
    loadWidget()
    if (openAfter) setState("loading")
    let tries = 0
    const timer = window.setInterval(() => {
      tries += 1
      const api = chatApi()
      if (api?.openWidget && document.querySelector("chat-widget")) {
        window.clearInterval(timer)
        window.dispatchEvent(new Event(CHAT_LOADED_EVENT))
        if (openAfter) api.openWidget()
        setState("done")
      } else if (tries > 60) {
        // 15 s without the widget (blocked or offline): give up quietly and
        // let the button be tapped again.
        window.clearInterval(timer)
        requested = false
        setState("idle")
      }
    }, 250)
  }

  return (
    <button
      type="button"
      onClick={() => start(true)}
      onPointerEnter={(e) => e.pointerType === "mouse" && start(false)}
      onFocus={() => start(false)}
      aria-label="Chat with us"
      disabled={state === "loading"}
      aria-hidden={yieldToContent && state === "idle" ? true : undefined}
      tabIndex={yieldToContent && state === "idle" ? -1 : undefined}
      className={`${yieldToContent && state === "idle" ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"} fixed right-5 bottom-[calc(88px+env(safe-area-inset-bottom))] md:bottom-5 z-40 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#188bf6] text-white shadow-lg transition-all duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#188bf6] disabled:cursor-wait`}
    >
      {state === "loading" ? (
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
      ) : (
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  )
}
