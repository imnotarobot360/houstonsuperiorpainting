"use client"

import { useState } from "react"
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
      className="fixed right-5 bottom-[88px] md:bottom-5 z-40 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#188bf6] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#188bf6] disabled:cursor-wait"
    >
      {state === "loading" ? (
        <span className="h-6 w-6 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
      ) : (
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  )
}
