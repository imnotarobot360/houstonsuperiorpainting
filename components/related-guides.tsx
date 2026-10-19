import Link from "next/link"
import { relatedGuidesFor } from "@/lib/related-guides"

/** "Helpful guides" links for a page, from lib/related-guides.ts. Renders nothing when there are none. */
export function RelatedGuides({ path, className = "" }: { path: string; className?: string }) {
  const links = relatedGuidesFor(path)
  if (!links.length) return null
  return (
    <section className={`mb-12 ${className}`} aria-labelledby="helpful-guides-h">
      <h2 id="helpful-guides-h" className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">
        Helpful guides
      </h2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-primary font-medium hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
