import Image from "next/image"
import Link from "next/link"

// Small grid of REAL job photos, each linking to its case study. Only pass
// images from public/images/projects/* that belong to a published project.
export type StripPhoto = { src: string; alt: string; caption: string; href: string }

export function ProjectPhotoStrip({ photos }: { photos: StripPhoto[] }) {
  if (photos.length === 0) return null
  return (
    <div className="not-prose grid gap-4 sm:grid-cols-3">
      {photos.map((p) => (
        <Link
          key={p.src}
          href={p.href}
          className="group block overflow-hidden rounded-xl border border-border bg-card hover:border-primary transition-colors"
        >
          <div className="relative aspect-[4/3]">
            <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
          </div>
          <p className="p-3 text-sm font-medium text-foreground group-hover:text-primary">{p.caption}</p>
        </Link>
      ))}
    </div>
  )
}
