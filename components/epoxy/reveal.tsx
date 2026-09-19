"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

/**
 * Scroll-triggered fade-up used across the epoxy site.
 * Honors prefers-reduced-motion by rendering statically instead of animating.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  /** Render a different element so the markup stays valid (e.g. "li" in a list). */
  as?: "div" | "li" | "section" | "article"
}) {
  const reduce = useReducedMotion()

  const Tag = as
  const MotionTag = motion[as]

  if (reduce) return <Tag className={className}>{children}</Tag>

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
