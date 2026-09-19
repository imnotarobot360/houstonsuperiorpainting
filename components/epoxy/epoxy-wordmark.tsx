import Image from "next/image"
import { EPOXY } from "@/lib/epoxy"

/**
 * Houston Superior Epoxy logo.
 *
 * Assets are derived from the supplied master artwork. The original arrived as
 * a 1536x1024 PNG with an opaque black field and heavy padding, so it was
 * trimmed to the artwork bounds and the black was converted to real alpha —
 * otherwise it renders as a black rectangle over the hero image and sits tiny
 * inside its own padding.
 *
 * Sources are downscaled to 300px tall (they render at 40-56px, so the full
 * 455px masters were ~470KB of dead weight each).
 *
 *   logo-lockup.png  923x300 (3.08:1)  emblem + wordmark + tagline
 *   logo-nav.png     924x300 (3.08:1)  same, tagline removed
 *   logo-emblem.png  361x300 (1.20:1)  emblem only, for tight spaces
 *
 * The nav uses the tagline-less variant on purpose: at header scale the
 * "STRONG FLOORS. BUILT TO IMPRESS." line renders around 4px tall and reads as
 * noise. The full lockup is kept for the footer, where it has room to breathe.
 */
const ASSETS = {
  lockup: { src: "/images/epoxy/logo-lockup.png", width: 923, height: 300 },
  nav: { src: "/images/epoxy/logo-nav.png", width: 924, height: 300 },
  emblem: { src: "/images/epoxy/logo-emblem.png", width: 361, height: 300 },
} as const

export function EpoxyWordmark({
  className = "",
  variant = "lockup",
  priority = false,
}: {
  className?: string
  variant?: keyof typeof ASSETS
  priority?: boolean
}) {
  const asset = ASSETS[variant]

  return (
    <Image
      src={asset.src}
      alt={`${EPOXY.name} — ${EPOXY.tagline}`}
      width={asset.width}
      height={asset.height}
      priority={priority}
      // Height-driven sizing keeps the lockup's aspect ratio intact.
      className={`w-auto ${className}`}
    />
  )
}
