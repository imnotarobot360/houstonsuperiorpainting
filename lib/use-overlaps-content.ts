"use client"

import { useEffect, useState, type RefObject } from "react"

/**
 * True while page content (text, images, form controls, buttons) sits under
 * the element in `ref` — used by floating CTAs so they step aside instead of
 * covering what the visitor is reading (owner UI brief 2026-11-05).
 *
 * Checked on scroll/resize (one rAF per frame) by probing a 3x3 grid of points
 * across the element's box with elementsFromPoint. Section backgrounds and
 * empty wrappers do not count; only media, controls, and text whose own line
 * boxes reach the probe point.
 */
const MEDIA = new Set(["IMG", "PICTURE", "VIDEO", "SVG", "CANVAS", "INPUT", "TEXTAREA", "SELECT", "BUTTON", "IFRAME"])

function isContentAt(el: Element, x: number, y: number): boolean {
  if (MEDIA.has(el.tagName.toUpperCase())) {
    // Decorative full-bleed backgrounds (hero photos, overlays) are not content.
    return !(el as HTMLElement).closest?.("[data-floating-ignore]") && !isBackdrop(el)
  }
  for (const node of el.childNodes) {
    if (node.nodeType !== Node.TEXT_NODE || !node.textContent?.trim()) continue
    const range = document.createRange()
    range.selectNodeContents(node)
    for (const r of range.getClientRects()) {
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return true
    }
  }
  return false
}

// An absolutely positioned image that fills its section is a backdrop.
function isBackdrop(el: Element): boolean {
  if (el.tagName !== "IMG") return false
  const parent = el.parentElement
  if (!parent) return false
  const a = el.getBoundingClientRect()
  const b = parent.getBoundingClientRect()
  return getComputedStyle(el).position === "absolute" && a.width >= b.width * 0.95 && a.height >= b.height * 0.95
}

export function useOverlapsContent(ref: RefObject<HTMLElement | null>, enabled = true): boolean {
  const [over, setOver] = useState(false)

  useEffect(() => {
    if (!enabled) return
    let frame = 0
    const check = () => {
      frame = 0
      const self = ref.current
      if (!self) return
      const box = self.getBoundingClientRect()
      if (!box.width || !box.height) return setOver(false)
      let hit = false
      outer: for (const fx of [0.15, 0.5, 0.85]) {
        for (const fy of [0.15, 0.5, 0.85]) {
          const x = box.left + box.width * fx
          const y = box.top + box.height * fy
          for (const el of document.elementsFromPoint(x, y)) {
            if (self.contains(el) || el.closest("header, [data-floating-ui]")) continue
            if (isContentAt(el, x, y)) {
              hit = true
              break outer
            }
          }
        }
      }
      setOver(hit)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }
    schedule()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    // Content also moves without scrolling (the .reveal fade-up slides text
    // 28px over 0.9s after it enters the viewport, accordions open, images
    // load), so re-check a few times a second. Nine hit tests: negligible.
    const timer = window.setInterval(schedule, 300)
    return () => {
      window.clearInterval(timer)
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [ref, enabled])

  return enabled && over
}
