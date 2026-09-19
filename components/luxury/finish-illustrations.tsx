import Image from "next/image"
import { Info, AlertTriangle } from "lucide-react"

/**
 * Illustrated finish comparisons.
 *
 * These are DIGITAL RENDERINGS, not photographs of completed work, and the
 * component is built to make that impossible to miss: a banner above the grid,
 * an "Illustration" chip burned into the corner of every image, and a repeat
 * disclosure in each caption.
 *
 * Why it is deliberately NOT the BeforeAfter drag slider: that component
 * overlays two images and clips between them, which only reads correctly when
 * both frames are pixel-aligned. Generated pairs never align exactly, so a
 * slider makes the house appear to morph. Side-by-side sets no such
 * expectation. It also keeps a real visual distance between illustrated
 * examples and the genuine "Before & After Results" slider used elsewhere for
 * actual jobs.
 *
 * When real limewash photography exists, prefer it over this section.
 */

export interface FinishIllustration {
  /** Finish name, e.g. "Classic White Limewash". */
  name: string
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  /** What the finish does and how it behaves on brick. */
  caption: string
  /** Reversibility disclosure. */
  permanence: string
  /** true = cannot be undone, renders the stronger warning treatment. */
  irreversible?: boolean
}

function Frame({
  src,
  alt,
  stage,
}: {
  src: string
  alt: string
  stage: "Before" | "After"
}) {
  return (
    <figure className="relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-champagne/40">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded bg-midnight/80 px-2.5 py-1 font-manrope text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-soft-white">
          {stage}
        </span>
        {/* Per-image provenance marker — survives screenshots and right-click
            saves, where surrounding page copy would be lost. */}
        <span className="absolute bottom-3 right-3 rounded bg-midnight/80 px-2.5 py-1 font-manrope text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold">
          Illustration
        </span>
      </div>
    </figure>
  )
}

export function FinishIllustrations({ items }: { items: FinishIllustration[] }) {
  if (items.length === 0) return null

  return (
    <section className="mb-12" aria-labelledby="finish-illustrations-heading">
      <h2
        id="finish-illustrations-heading"
        className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
      >
        What These Finishes Look Like on Brick
      </h2>

      <div className="mb-8 flex items-start gap-3 rounded-md border border-gold/40 bg-gold/5 p-4">
        <Info aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
        <p className="text-sm leading-relaxed text-foreground/85">
          <strong className="font-semibold text-foreground">
            These are illustrations, not photographs of our work.
          </strong>{" "}
          They are digital renderings created to show how each finish changes a
          brick facade, because the two finishes below are often confused for one
          another. They are not photographs of completed projects and do not
          depict a specific address. Your brick&apos;s colour, texture, age and any
          existing coating all change the result, so we recommend a sample area on
          your own wall before committing.
        </p>
      </div>

      <div className="grid gap-10">
        {items.map((item) => (
          <article key={item.name}>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
              {item.name}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Frame src={item.beforeSrc} alt={item.beforeAlt} stage="Before" />
              <Frame src={item.afterSrc} alt={item.afterAlt} stage="After" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              {item.caption}
            </p>
            <p
              className={`mt-3 flex items-start gap-2.5 rounded-md border p-3 text-sm leading-relaxed ${
                item.irreversible
                  ? "border-red-400 bg-red-100 text-red-800"
                  : "border-border bg-card text-foreground/80"
              }`}
            >
              {item.irreversible && (
                <AlertTriangle aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
              )}
              <span>{item.permanence}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
