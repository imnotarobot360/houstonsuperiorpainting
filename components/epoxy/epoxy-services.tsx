import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SERVICES_FEATURED, SERVICES_MORE, EPOXY } from "@/lib/epoxy"
import { Reveal } from "./reveal"

export function EpoxyServices() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">What We Install</p>
          <h2 className="font-manrope text-3xl font-extrabold uppercase leading-tight tracking-tight text-balance md:text-5xl">
            Floors Built For Houston
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Every system is polyaspartic-topcoated — the only coating that survives a Houston summer slab without
            ambering, peeling, or hot-tire pickup.
          </p>
        </Reveal>

        <div className="flex flex-col gap-6 lg:flex-row">
          {SERVICES_FEATURED.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08} className="flex-1">
              {/* id lets the nav deep-link straight to Garage / Commercial */}
              <article
                id={service.id}
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card scroll-mt-24 transition-colors hover:border-primary/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <p className="absolute bottom-3 left-4 text-sm font-semibold text-primary">{service.priceFrom}</p>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-manrope text-xl font-bold uppercase tracking-tight text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{service.blurb}</p>

                  <ul className="mt-5 flex flex-col gap-2">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#estimate"
                    className="mt-6 inline-flex items-center gap-2 self-start text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:text-primary-foreground"
                  >
                    Get a {service.title} quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Supporting services — text only, no competing imagery */}
        <Reveal className="mt-6 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_MORE.map((s) => (
            <div key={s.title} className="bg-card p-5">
              <h3 className="font-manrope text-base font-bold uppercase tracking-tight text-card-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-12 text-center">
          <p className="text-muted-foreground">
            Not sure which system fits?{" "}
            <a href={EPOXY.phoneHref} className="font-semibold text-primary underline underline-offset-4">
              Call {EPOXY.phoneDisplay}
            </a>{" "}
            and we&apos;ll tell you straight.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
