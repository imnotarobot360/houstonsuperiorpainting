import Link from "next/link"
import { BUSINESS } from "@/lib/business"

// "The Houston Superior Finish System" (owner brief 2026-10-14). Original
// layered diagram: the steps stack from the substrate up to the finished
// surface, so the bottom layer is the first thing we do. Use it on the homepage
// and a few service pages only, never on every page.

const STEPS: { title: string; text: string }[] = [
  {
    title: "Surface Inspection",
    text: "Moisture, adhesion problems, cracks, failed caulk and damaged materials are identified before the scope is finalized.",
  },
  {
    title: "Protection",
    text: "Floors, furniture, fixtures, landscaping and adjacent surfaces are protected according to the project.",
  },
  {
    title: "Repairs and Preparation",
    text: "Included patching, sanding, scraping, caulking, cleaning and wood repairs are completed before finish paint.",
  },
  {
    title: "Correct Primer",
    text: "Bare surfaces, stains, repairs and difficult substrates receive the primer specified in the written scope.",
  },
  {
    title: "Premium Finish",
    text: "The approved products, colors, sheens and coats are applied as described in the estimate.",
  },
  {
    title: "Final Walkthrough",
    text: `The completed work is reviewed with the customer and supported by the applicable ${BUSINESS.trust.warrantyYears}-year written workmanship warranty.`,
  },
]

export function FinishSystem({ className = "" }: { className?: string }) {
  // Rendered top-down as finished surface → substrate, numbered in work order.
  const layers = STEPS.map((s, i) => ({ ...s, n: i + 1 })).reverse()
  return (
    <section aria-labelledby="finish-system-title" className={`py-16 md:py-20 ${className}`}>
      <div className="container mx-auto max-w-5xl px-4">
        <div className="max-w-2xl">
          <p className="font-manrope text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">How we work</p>
          <h2 id="finish-system-title" className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground text-balance">
            The Houston Superior Finish System
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            A lasting finish is built from the surface outward—not just applied from the paint can.
          </p>
        </div>

        <ol className="mt-10 space-y-2" aria-label="Finish system steps, from finished surface down to the substrate">
          {layers.map((s) => {
            // Lower layers (earlier steps) are wider and darker: the base the finish sits on.
            return (
              <li
                key={s.title}
                className="mx-auto rounded-lg border border-border bg-card shadow-sm"
                style={{ width: `min(100%, ${70 + (STEPS.length - s.n) * 6}%)` }}
              >
                <div className="flex items-start gap-4 p-4 md:p-5">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-semibold text-soft-white"
                    style={{ backgroundColor: `color-mix(in srgb, var(--color-midnight, #0f1b2d) ${55 + (STEPS.length - s.n) * 9}%, var(--color-gold, #b8955a))` }}
                    aria-hidden="true"
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      <span className="sr-only">Step {s.n}: </span>
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground text-pretty">{s.text}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Read bottom to top: step 1 is the substrate; step 6 is the finished surface you live with.
        </p>

        <p className="mt-8 text-center">
          <Link href="/painting-estimate-houston" className="font-semibold text-primary underline underline-offset-4">
            Get a written scope for your project
          </Link>
        </p>
      </div>
    </section>
  )
}
