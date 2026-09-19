import {
  Disc3,
  Wrench,
  Layers,
  ShieldCheck,
  FlaskConical,
  CircleDot,
  Sun,
  Award,
} from "lucide-react"
import { WHY_US } from "@/lib/epoxy"
import { Reveal } from "./reveal"

const ICONS = {
  grinder: Disc3,
  crack: Wrench,
  layers: Layers,
  shield: ShieldCheck,
  flask: FlaskConical,
  tire: CircleDot,
  sun: Sun,
  award: Award,
} as const

export function EpoxyWhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
            Why Houston Superior
          </p>
          <h2 className="mt-5 max-w-2xl font-manrope text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] text-foreground text-balance md:text-5xl">
            The floor lasts because the preparation does.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Nearly every failed garage floor in Houston failed for the same reason: the concrete was
            never properly opened. Here is what we do differently.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? ShieldCheck
            // as="li" keeps the markup valid inside the <ul>
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.08} as="li" className="flex flex-col">
                <div className="contents">
                  <Icon className="size-8 text-primary" aria-hidden="true" strokeWidth={1.5} />
                  <h3 className="mt-5 font-manrope text-base font-bold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
