import { EPOXY } from "@/lib/epoxy"
import { BeforeAfterSlider } from "./before-after-slider"
import { Reveal } from "./reveal"

const PROOF = [
  { stat: "1 Day", label: "Most garages done start to finish" },
  { stat: "24 Hrs", label: "Until you can walk on it" },
  { stat: "72 Hrs", label: "Until you can park on it" },
]

export function EpoxyTransformation() {
  return (
    <section
      id="transformation"
      className="scroll-mt-20 border-t border-border bg-secondary/30 py-20 md:py-28"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <Reveal className="lg:w-3/5">
            <BeforeAfterSlider
              beforeSrc="/images/epoxy/before-bare-concrete.png"
              afterSrc="/images/epoxy/after-epoxy-floor.png"
              beforeAlt="Stained and cracked bare concrete garage floor before epoxy coating"
              afterAlt="The same garage floor after a grey and black epoxy flake coating with a high-gloss finish"
            />
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Drag the handle — or use arrow keys — to see the difference.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:w-2/5">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">The Transformation</p>
            <h2 className="font-manrope text-3xl font-extrabold uppercase leading-tight tracking-tight text-balance md:text-4xl">
              One Day. Then You Never Think About Your Floor Again.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              That grey slab is porous. It drinks oil, traps moisture, and dusts up every time you sweep. Coating it
              properly means grinding it open first — not rolling paint over the top and hoping.
            </p>

            <div className="mt-8 flex flex-col divide-y divide-border border-y border-border">
              {PROOF.map((p) => (
                <div key={p.stat} className="flex items-baseline gap-4 py-4">
                  <span className="font-manrope text-2xl font-extrabold text-primary">{p.stat}</span>
                  <span className="text-muted-foreground">{p.label}</span>
                </div>
              ))}
            </div>

            <a
              href={EPOXY.phoneHref}
              className="mt-8 inline-flex items-center justify-center rounded-sm bg-primary px-7 py-3.5 font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Call {EPOXY.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
