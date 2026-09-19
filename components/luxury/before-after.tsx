"use client"

import Image from "next/image"
import { useCallback, useRef, useState } from "react"
import { MoveHorizontal } from "lucide-react"

const showcase = [
  {
    label: "Interior",
    beforeSrc: "/images/interior-before-1.jpg",
    afterSrc: "/images/interior-after-1.jpg",
    beforeAlt: "Living room before professional interior painting in Houston",
    afterAlt: "Living room after professional interior painting in Houston",
  },
  {
    label: "Exterior",
    beforeSrc: "/images/exterior-before-1.jpg",
    afterSrc: "/images/exterior-after-1.jpg",
    beforeAlt: "Home exterior before repainting in Houston",
    afterAlt: "Home exterior after repainting in Houston",
  },
  {
    label: "Cabinets",
    beforeSrc: "/images/cabinet-before-1.jpg",
    afterSrc: "/images/cabinet-after-1.jpg",
    beforeAlt: "Kitchen cabinets before refinishing in Houston",
    afterAlt: "Kitchen cabinets after refinishing in Houston",
  },
]

export function BeforeAfterShowcase() {
  const [active, setActive] = useState(0)
  const current = showcase[active]
  return (
    <div>
      <div className="flex justify-center gap-2 mb-8">
        {showcase.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActive(i)}
            className={`font-manrope text-xs font-semibold uppercase tracking-[0.18em] px-5 py-2.5 rounded-md transition-colors ${
              active === i
                ? "bg-midnight text-soft-white"
                : "bg-champagne text-graphite hover:bg-champagne/60"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <BeforeAfter
        key={current.label}
        beforeSrc={current.beforeSrc}
        afterSrc={current.afterSrc}
        beforeAlt={current.beforeAlt}
        afterAlt={current.afterAlt}
      />
    </div>
  )
}

interface BeforeAfterProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}

export function BeforeAfter({ beforeSrc, afterSrc, beforeAlt, afterAlt }: BeforeAfterProps) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-lg select-none cursor-ew-resize"
      onMouseDown={(e) => {
        dragging.current = true
        updateFromClientX(e.clientX)
      }}
      onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4))
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4))
      }}
    >
      {/* After (full) */}
      <Image src={afterSrc} alt={afterAlt} fill sizes="(max-width:768px) 100vw, 80vw" className="object-cover" />
      <span className="absolute bottom-4 right-4 z-20 font-manrope text-[0.6rem] uppercase tracking-[0.25em] bg-midnight/70 text-gold px-3 py-1.5 rounded">
        After
      </span>

      {/* Before (clipped via clip-path so the image never distorts) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={beforeSrc} alt={beforeAlt} fill sizes="(max-width:768px) 100vw, 80vw" className="object-cover" />
        <span className="absolute bottom-4 left-4 z-20 font-manrope text-[0.6rem] uppercase tracking-[0.25em] bg-midnight/70 text-soft-white px-3 py-1.5 rounded">
          Before
        </span>
      </div>

      {/* Handle */}
      <div className="absolute inset-y-0 z-10" style={{ left: `calc(${pos}% - 1px)` }}>
        <div className="h-full w-0.5 bg-gold" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-gold text-midnight flex items-center justify-center shadow-lg">
          <MoveHorizontal className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}
