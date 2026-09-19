"use client"

import { usePathname } from "next/navigation"

/**
 * Two different questions used to live behind one boolean here:
 *
 *   1. "Should the global *interruptions* be suppressed?" — the exit-intent
 *      modal and the chat bubble. These compete with a funnel already on
 *      screen; the modal is the worst of them, because it can appear over the
 *      funnel mid-question and dismissing a modal is not a step toward booking.
 *
 *   2. "Should the global *sticky CTAs* be suppressed?" — the Call / Text /
 *      Quote bars. These are a persistent path to conversion, not an
 *      interruption.
 *
 * Those coincide on a self-contained page like /painting-estimate-houston,
 * which carries its own funnel *and* its own header call button, so both are
 * redundant there. They diverge sharply on the /chatgpt/* ad funnels: paid
 * traffic should never get a modal thrown over the funnel, but the sticky
 * mobile bar is the primary phone affordance on those pages and must stay.
 *
 * Collapsing both into one flag meant the funnels could only have the modal
 * suppressed by also losing their phone CTA, so they got neither and shipped
 * with the modal firing on live ad spend. Hence two separate sets.
 */

/**
 * Routes that suppress the interruptions (exit-intent modal, chat bubble).
 *
 * Matched by exact path first, then by the /chatgpt/ prefix. The prefix is safe
 * here in a way it wouldn't be for the sticky-CTA list below: every route under
 * /chatgpt/ is a paid ad funnel by construction, and the failure mode of
 * over-matching is "a future ad funnel also gets no modal", which is the
 * intended default for that whole segment anyway.
 */
const INTERRUPTION_FREE_PATHS = new Set<string>([
  "/painting-estimate-houston",
])

const INTERRUPTION_FREE_PREFIXES = ["/chatgpt/"]

/**
 * Routes that suppress the global sticky CTA bars.
 *
 * Deliberately a small explicit list with no prefix matching. A prefix would
 * silently capture future marketing pages that do want the global CTAs, and
 * that failure mode — a page quietly missing its phone button — is invisible
 * until someone notices conversions dropped. The /chatgpt/* funnels are
 * intentionally absent: they need the sticky bar.
 */
const STICKY_CTA_FREE_PATHS = new Set<string>([
  "/painting-estimate-houston",
])

/** Trailing slashes normalised so "/foo/" matches "/foo". */
function normalize(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname
}

export function hidesInterruptions(pathname: string | null): boolean {
  if (!pathname) return false
  const path = normalize(pathname)
  if (INTERRUPTION_FREE_PATHS.has(path)) return true
  // Compare against the slash-terminated path so "/chatgpt" itself (an index
  // page, were one added) doesn't match the funnel prefix.
  const withSlash = path.endsWith("/") ? path : `${path}/`
  return INTERRUPTION_FREE_PREFIXES.some((prefix) => withSlash.startsWith(prefix))
}

export function hidesStickyCta(pathname: string | null): boolean {
  if (!pathname) return false
  return STICKY_CTA_FREE_PATHS.has(normalize(pathname))
}

/**
 * Client hook forms.
 *
 * Note for callers: components using these must not early-return before their
 * own hooks run, or React will error on a changed hook order during
 * client-side navigation. Call the hook first, then the component's other
 * hooks, then branch.
 */
export function useHidesInterruptions(): boolean {
  return hidesInterruptions(usePathname())
}

export function useHidesStickyCta(): boolean {
  return hidesStickyCta(usePathname())
}
