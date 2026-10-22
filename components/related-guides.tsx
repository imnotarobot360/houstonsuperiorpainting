import Link from "next/link"
import { relatedGuidesFor } from "@/lib/related-guides"

/** How many links show before the rest fold under "More guides". */
const VISIBLE = 10

/**
 * "Helpful guides" links for a page, from lib/related-guides.ts. Renders nothing
 * when there are none. Long lists (the daily calendar keeps adding posts) fold
 * after VISIBLE links into a native <details>, so every link stays in the HTML
 * for crawlers while the page stays short for people.
 */
export function RelatedGuides({ path, className = "" }: { path: string; className?: string }) {
  const links = relatedGuidesFor(path)
  if (!links.length) return null
  const shown = links.slice(0, VISIBLE)
  const more = links.slice(VISIBLE)
  const item = (l: { label: string; href: string }) => (
    <li key={l.href}>
      <Link href={l.href} className="text-primary font-medium hover:underline">
        {l.label}
      </Link>
    </li>
  )
  return (
    <section className={`mb-12 ${className}`} aria-labelledby="helpful-guides-h">
      <h2 id="helpful-guides-h" className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">
        Helpful guides
      </h2>
      <ul className="grid gap-2 sm:grid-cols-2">{shown.map(item)}</ul>
      {more.length > 0 && (
        <details className="mt-3">
          <summary className="cursor-pointer text-sm font-semibold text-foreground">More guides ({more.length})</summary>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2">{more.map(item)}</ul>
        </details>
      )}
    </section>
  )
}
