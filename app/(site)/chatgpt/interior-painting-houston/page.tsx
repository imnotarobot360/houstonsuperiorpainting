import type { Metadata } from "next"
import { InteriorLanding } from "@/components/interior/interior-landing"
import { FUNNELS } from "@/lib/funnel-config"

/**
 * Interior painting landing page for ChatGPT Ads.
 *
 * noindex: /interior-painting-houston-tx is the organic page for this topic and
 * already ranks. Indexing a second, conversion-written page for the same intent
 * would split signals between two of our own URLs.
 *
 * Interior gets a dedicated, price-first experience (InteriorLanding) rather
 * than the shared EstimateLanding: it shows a ballpark price before asking for
 * contact details, then offers schedule / send-photos / call after the lead is
 * captured. The other three services still use the shared funnel. Metadata
 * stays sourced from lib/funnel-config.ts so titles can't drift.
 */
const CONFIG = FUNNELS.interior

export const metadata: Metadata = {
  title: CONFIG.metaTitle,
  description: CONFIG.metaDescription,
  robots: { index: false, follow: false, nocache: true },
}

export default function InteriorPaintingLandingPage() {
  return <InteriorLanding />
}
