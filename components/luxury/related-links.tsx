import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { EPOXY_URL } from "@/lib/business"

/**
 * Site-wide internal-linking block. Renders three curated groups of contextual
 * links (services, service areas, resources) to strengthen internal linking and
 * topical silos. Pass `exclude` with the current page's href to avoid
 * self-linking. Roughly 18-24 internal links per render.
 */

type LinkItem = { title: string; href: string }

const SERVICE_LINKS: LinkItem[] = [
  { title: "Interior Painting", href: "/interior-painting-houston-tx" },
  { title: "Exterior Painting", href: "/exterior-painting-houston-tx" },
  { title: "Cabinet Refinishing", href: "/cabinet-refinishing-houston-tx" },
  { title: "Brick Limewash", href: "/limewash-brick-painting-houston-tx" },
  // EPOXY_URL, not the -tx slug: that slug is a 308 hop to this same subdomain.
  { title: "Garage Floor Epoxy", href: EPOXY_URL },
  { title: "Stucco Painting & Repair", href: "/stucco-painting-houston-tx" },
  { title: "Wood Rot Repair", href: "/wood-rot-repair-houston-tx" },
  { title: "Wallpaper Removal", href: "/wallpaper-removal-houston-tx" },
  { title: "Venetian Plaster", href: "/venetian-plaster-houston-tx" },
  { title: "Commercial Painting", href: "/commercial-painting-houston-tx" },
  { title: "Residential Painting", href: "/residential-painters-houston" },
]

const AREA_LINKS: LinkItem[] = [
  { title: "River Oaks", href: "/painters-river-oaks-tx" },
  { title: "Memorial", href: "/painters-memorial-tx" },
  { title: "Bellaire", href: "/painters-bellaire-tx" },
  { title: "The Heights", href: "/painters-the-heights-tx" },
  { title: "West University", href: "/interior-painting-bellaire-west-university" },
  { title: "Katy", href: "/painters-katy-tx" },
  { title: "Cypress", href: "/painters-cypress-tx" },
  { title: "Sugar Land", href: "/painters-sugar-land-tx" },
  { title: "The Woodlands", href: "/painters-the-woodlands-tx" },
  { title: "Pearland", href: "/painters-pearland-tx" },
]

const RESOURCE_LINKS: LinkItem[] = [
  { title: "About Our Team", href: "/about" },
  { title: "Painting Cost Guide", href: "/houston-painting-cost-guide" },
  { title: "Project Case Studies", href: "/projects" },
  { title: "Our Warranty", href: "/warranty" },
  { title: "Painting Tips Blog", href: "/blog" },
  { title: "Get a Free Estimate", href: "/contact" },
]

function dedupeAndExclude(items: LinkItem[], exclude?: string) {
  const seen = new Set<string>()
  return items.filter((item) => {
    if (item.href === exclude) return false
    if (seen.has(item.href)) return false
    seen.add(item.href)
    return true
  })
}

function LinkColumn({ heading, items }: { heading: string; items: LinkItem[] }) {
  return (
    <div>
      <h3 className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-5">
        {heading}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={`${heading}-${item.title}-${item.href}`}>
            <Link
              href={item.href}
              className="group inline-flex items-center gap-1.5 font-sans text-soft-white/75 hover:text-soft-white transition-colors"
            >
              <span>{item.title}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-gold/0 group-hover:text-gold transition-colors" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function RelatedLinks({ exclude }: { exclude?: string }) {
  const services = dedupeAndExclude(SERVICE_LINKS, exclude)
  const areas = dedupeAndExclude(AREA_LINKS, exclude)
  const resources = dedupeAndExclude(RESOURCE_LINKS, exclude)

  return (
    <section aria-labelledby="explore-more-heading" className="relative bg-midnight py-16 md:py-20">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-10 text-center">
          <p className="font-manrope text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Keep Exploring
          </p>
          <h2 id="explore-more-heading" className="font-display text-3xl md:text-4xl font-bold text-soft-white text-balance">
            Houston&apos;s Trusted Painting Resource
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <LinkColumn heading="Our Services" items={services} />
          <LinkColumn heading="Service Areas" items={areas} />
          <LinkColumn heading="Helpful Resources" items={resources} />
        </div>
      </div>
    </section>
  )
}
