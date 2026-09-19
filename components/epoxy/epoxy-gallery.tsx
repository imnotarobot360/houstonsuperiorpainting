"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"
import { Reveal } from "./reveal"

type Category = "garage" | "detail" | "prep"

type Shot = {
  src: string
  width: number
  height: number
  alt: string
  caption: string
  meta: string
  category: Category
}

/**
 * Real installs, shot on site. Widths/heights are the true intrinsic pixel
 * dimensions so the masonry columns reserve the right space and nothing shifts
 * while the images decode.
 */
const SHOTS: Shot[] = [
  {
    src: "/images/epoxy/gallery/project-14.jpeg",
    width: 1500,
    height: 1125,
    alt: "Two-car Houston garage with a blue, grey and white epoxy flake floor photographed from floor level with the garage door open",
    caption: "Blue & grey flake garage",
    meta: "Full flake system + polyaspartic topcoat",
    category: "garage",
  },
  {
    src: "/images/epoxy/gallery/project-03.jpeg",
    width: 1200,
    height: 1600,
    alt: "Close-up of a grey and charcoal epoxy flake floor with sunlight crossing the high-gloss surface",
    caption: "Flake detail — Domino",
    meta: "Full-broadcast chips, hand-scraped smooth",
    category: "detail",
  },
  {
    src: "/images/epoxy/gallery/project-04.jpg",
    width: 2048,
    height: 1536,
    alt: "Finished garage bay with a salt-and-pepper epoxy flake floor and matching coved flake base along the walls",
    caption: "Salt & pepper with coved base",
    meta: "Flake carried 4 inches up the wall",
    category: "garage",
  },
  {
    src: "/images/epoxy/gallery/project-11.jpeg",
    width: 1200,
    height: 1600,
    alt: "Dark charcoal and black epoxy flake floor in a garage with cedar wainscot walls and a water heater",
    caption: "Charcoal flake — Domino",
    meta: "Mirror gloss over a ground slab",
    category: "detail",
  },
  {
    src: "/images/epoxy/gallery/project-06.jpeg",
    width: 1600,
    height: 1200,
    alt: "Working garage with a tan, white and black epoxy flake floor, tool pegboard on the wall and a bike hung from the ceiling",
    caption: "Tan flake workshop",
    meta: "Wear layer built for daily use",
    category: "garage",
  },
  {
    src: "/images/epoxy/gallery/project-02.jpeg",
    width: 1600,
    height: 1200,
    alt: "Macro view of a bronze and copper metallic epoxy flake floor under a wet-look clear coat",
    caption: "Bronze metallic blend",
    meta: "Pigmented base, wet-look clear",
    category: "detail",
  },
  {
    src: "/images/epoxy/gallery/project-12.jpeg",
    width: 1200,
    height: 1600,
    alt: "Single-bay garage finished corner to corner with a grey and white epoxy flake floor",
    caption: "Wall-to-wall single bay",
    meta: "No bare edges, no hot tire pickup",
    category: "garage",
  },
  {
    src: "/images/epoxy/gallery/project-01.jpeg",
    width: 1024,
    height: 769,
    alt: "Light grey epoxy flake garage floor photographed low to show the reflection of overhead lighting",
    caption: "Light grey flake",
    meta: "Reflective finish, slip-resistant grit",
    category: "garage",
  },
  {
    src: "/images/epoxy/gallery/project-09.jpeg",
    width: 1200,
    height: 1600,
    alt: "Grey epoxy flake floor with blue chips running toward a closed garage door",
    caption: "Grey flake with blue chips",
    meta: "Custom blend matched on site",
    category: "garage",
  },
  {
    src: "/images/epoxy/gallery/project-08.jpg",
    width: 960,
    height: 710,
    alt: "Entry step and threshold coated in matching grey epoxy flake beside the finished garage floor",
    caption: "Steps & thresholds included",
    meta: "Detail work most crews skip",
    category: "detail",
  },
  {
    src: "/images/epoxy/gallery/project-05.jpeg",
    width: 1024,
    height: 768,
    alt: "Wide garage with a light grey epoxy flake floor and a coated step running the length of the back wall",
    caption: "Three-car bay + step",
    meta: "Seamless from slab to step",
    category: "garage",
  },
  {
    src: "/images/epoxy/gallery/project-13.jpeg",
    width: 558,
    height: 494,
    alt: "Low-angle close-up of a black, white and tan epoxy flake floor showing individual chips under the clear coat",
    caption: "Chip texture up close",
    meta: "Full broadcast to refusal",
    category: "detail",
  },
  {
    src: "/images/epoxy/gallery/project-10.jpeg",
    width: 1600,
    height: 1200,
    alt: "Completed grey epoxy flake garage floor viewed from the driveway with a clean termination at the slab edge",
    caption: "Clean edge termination",
    meta: "Saw-cut line at the door",
    category: "garage",
  },
  {
    src: "/images/epoxy/gallery/project-15.jpg",
    width: 872,
    height: 960,
    alt: "Grey and white epoxy flake floor in a well-stocked workshop garage",
    caption: "Workshop floor",
    meta: "Chemical and oil resistant",
    category: "garage",
  },
  {
    src: "/images/epoxy/gallery/project-07.jpg",
    width: 2048,
    height: 1536,
    alt: "Garage slab coated in old grey floor paint that is peeling and stained, photographed before epoxy installation",
    caption: "Before — failed floor paint",
    meta: "Ground off before we coat anything",
    category: "prep",
  },
]

const FILTERS: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "garage", label: "Garage Floors" },
  { id: "detail", label: "Finish Detail" },
  { id: "prep", label: "Before Prep" },
]

export function EpoxyGallery() {
  const [filter, setFilter] = useState<"all" | Category>("all")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const shots = filter === "all" ? SHOTS : SHOTS.filter((s) => s.category === filter)

  const close = useCallback(() => setOpenIndex(null), [])
  const step = useCallback(
    (dir: 1 | -1) =>
      setOpenIndex((i) => (i === null ? i : (i + dir + shots.length) % shots.length)),
    [shots.length],
  )

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)
    // Lock the page behind the lightbox so arrow keys don't scroll it too.
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [openIndex, close, step])

  const active = openIndex === null ? null : shots[openIndex]

  return (
    <section id="gallery" className="scroll-mt-20 border-t border-border bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <Reveal className="max-w-2xl">
          <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Our Work
          </p>
          <h2 className="mt-3 font-manrope text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Floors We&apos;ve Finished
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Real Houston garages, shot on site the day we pulled the tape. Every
            one of them started with a diamond-ground slab — that is the
            difference between a floor that lasts 15 years and one that peels in
            two.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const count = f.id === "all" ? SHOTS.length : SHOTS.filter((s) => s.category === f.id).length
            const selected = filter === f.id
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setFilter(f.id)
                  setOpenIndex(null)
                }}
                aria-pressed={selected}
                className={`font-manrope text-xs font-bold uppercase tracking-wide transition-colors rounded-sm border px-4 py-2 ${
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-foreground"
                }`}
              >
                {f.label}
                <span className="ml-2 opacity-60">{count}</span>
              </button>
            )
          })}
        </Reveal>

        {/* CSS columns give a true masonry flow, so portrait phone shots and
            wide DSLR shots both keep their natural crop instead of being
            squashed into one fixed row height. */}
        <div className="mt-10 gap-4 [column-fill:balance] sm:columns-2 lg:columns-3">
          {shots.map((shot, i) => (
            <Reveal
              key={shot.src}
              delay={(i % 3) * 0.06}
              className="mb-4 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block w-full overflow-hidden rounded-sm border border-border text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-sm border border-border/60 bg-background/70 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <Expand className="size-4" aria-hidden="true" />
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-manrope text-xs font-bold uppercase tracking-wide text-foreground">
                    {shot.caption}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {shot.meta}
                  </p>
                </div>
                <span className="sr-only">Open larger photo</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur"
          onClick={close}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              {openIndex! + 1} / {shots.length}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close photo"
              className="grid size-9 place-items-center rounded-sm border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center overflow-hidden p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={active.src}
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="100vw"
              priority
              className="max-h-full w-auto max-w-full rounded-sm object-contain"
            />

            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute left-2 grid size-11 place-items-center rounded-sm border border-border bg-background/80 text-foreground transition-colors hover:border-primary hover:text-primary md:left-6"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute right-2 grid size-11 place-items-center rounded-sm border border-border bg-background/80 text-foreground transition-colors hover:border-primary hover:text-primary md:right-6"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="border-t border-border px-4 py-4 text-center">
            <p className="font-manrope text-sm font-bold uppercase tracking-wide text-foreground">
              {active.caption}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {active.meta}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
