import type { Metadata } from "next"
import { EstimateLanding } from "@/components/estimate-landing"
import { FUNNELS } from "@/lib/funnel-config"

/**
 * Interior painting landing page for ChatGPT Ads.
 *
 * noindex: /interior-painting-houston-tx is the organic page for this topic and
 * already ranks. Indexing a second, conversion-written page for the same intent
 * would split signals between two of our own URLs.
 *
 * All copy, questions and imagery come from lib/funnel-config.ts so the four ad
 * landing pages cannot drift apart.
 */
const CONFIG = FUNNELS.interior

export const metadata: Metadata = {
  title: CONFIG.metaTitle,
  description: CONFIG.metaDescription,
  robots: { index: false, follow: false, nocache: true },
}

export default function InteriorPaintingLandingPage() {
  return <EstimateLanding config={CONFIG} />
}
