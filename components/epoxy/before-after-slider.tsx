"use client"

import { useCallback, useRef, useState } from "react"
import Image from "next/image"
import { ChevronsLeftRight } from "lucide-react"

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}

/**
 * Drag-to-reveal before/after comparison.
 *
 * Accessibility: the handle is a real slider role with arrow-key support, so
 * this is operable without a pointer. Values are percentages (0-100).
 */
export function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  const [pct, setPct] = useState(50)
  const frameRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current
    if (!el) return
    const { left, width } = el.getBoundingClientRect()
    if (width === 0) return
    const next = ((clientX - left) / width) * 100
    setPct(Math.min(100, Math.max(0, next)))
  }, [])

  // Pointer events cover mouse, touch and pen with one code path.
  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    setFromClientX(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    setFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    draggingRef.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      setPct((p) => Math.max(0, p - step))
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      setPct((p) => Math.min(100, p + step))
    } else if (e.key === "Home") {
      e.preventDefault()
      setPct(0)
    } else if (e.key === "End") {
      e.preventDefault()
      setPct(100)
    }
  }

  return (
    <div
      ref={frameRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-sm border border-border bg-card"
    >
      {/* AFTER sits underneath as the full-width base layer. */}
      <Image src={afterSrc} alt={afterAlt} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" priority={false} />

      {/* BEFORE is clipped to the handle position. */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
        <Image src={beforeSrc} alt={beforeAlt} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-sm bg-background/80 px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-foreground backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-sm bg-primary px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
        After
      </span>

      {/* Divider + handle */}
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary" style={{ left: `${pct}%` }} />
      <button
        type="button"
        role="slider"
        aria-label="Reveal before and after garage floor"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
        aria-valuetext={`${Math.round(pct)}% before`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-primary"
        style={{ left: `${pct}%` }}
      >
        <ChevronsLeftRight className="h-5 w-5" aria-hidden />
      </button>
    </div>
  )
}
