import { Inter, Playfair_Display, Cormorant_Garamond, Manrope } from 'next/font/google'

// Shared by every root layout (app/(site), app/(es), app/(epoxy)) and
// app/global-not-found.tsx. next/font dedupes, so each font is built once.

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

// Display fonts are not preloaded (owner brief 2026-10-27, mobile speed): the
// first screen's text is Manrope/Inter, and with display: swap (next/font's
// default) headings render in the fallback until these arrive.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  preload: false,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  preload: false,
});

// Keep display "swap" (next/font's default). display: "optional" was tried on
// 2026-11-05 for mobile LCP and measured WORSE in a same-machine A/B (homepage
// LCP 5.4-5.8 s vs 4.1-5.6 s with swap), so it was reverted.
const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-manrope'
});

/** className for <html>: exposes every font as a CSS variable. */
export const fontVariables = `${inter.variable} ${playfair.variable} ${cormorant.variable} ${manrope.variable}`
