import Image from "next/image"
import { PROCESS } from "@/lib/epoxy"
import { Reveal } from "./reveal"

export function EpoxyProcess() {
  return (
    <section id="process" className="scroll-mt-20 border-t border-border bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Process</p>
          <h2 className="font-manrope text-3xl font-extrabold uppercase leading-tight tracking-tight text-balance md:text-5xl">
            Why Ours Lasts And Theirs Peels
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Ninety percent of epoxy failures are preparation failures. Here is exactly what happens on your slab.
          </p>
        </Reveal>

        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-start lg:gap-16">
          <Reveal className="lg:sticky lg:top-24 lg:w-2/5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
              <Image
                src="/images/epoxy/process-diamond-grinding.png"
                alt="Diamond grinder opening the concrete surface, showing ground concrete beside untreated slab"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 rounded-sm border-l-2 border-primary bg-card p-4 text-sm leading-relaxed text-muted-foreground">
              <span className="font-bold text-card-foreground">The part nobody photographs.</span> Diamond grinding is
              the single step that decides whether a floor lasts fifteen years or fifteen months. Acid etching cannot
              replace it.
            </p>
          </Reveal>

          <ol className="flex flex-1 flex-col lg:w-3/5">
            {PROCESS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05} as="li" className="relative flex gap-5 pb-9 last:pb-0">
                {/* Connector line, hidden on the final item */}
                {i !== PROCESS.length - 1 && (
                  <span aria-hidden className="absolute bottom-0 left-[19px] top-11 w-px bg-border" />
                )}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary bg-background font-manrope text-sm font-extrabold text-primary">
                  {step.number}
                </span>
                <div className="pt-1">
                  <h3 className="font-manrope text-lg font-bold uppercase tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
