import { Phone, MessageSquare, Clock, ShieldCheck } from "lucide-react"
import { EPOXY } from "@/lib/epoxy"
import { Reveal } from "./reveal"
import { EpoxyQuoteForm } from "./epoxy-quote-form"

const ASSURANCES = [
  { icon: Clock, text: "Free on-site estimate, no obligation" },
  { icon: ShieldCheck, text: "15-year written adhesion warranty" },
  { icon: Phone, text: "We call back within one business day" },
]

export function EpoxyEstimate() {
  return (
    <section id="estimate" className="scroll-mt-20 border-t border-border bg-secondary/30 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          <Reveal className="lg:w-2/5">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Free Estimate</p>
            <h2 className="font-manrope text-3xl font-extrabold uppercase leading-tight tracking-tight text-balance md:text-4xl">
              Get Your Exact Price
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              Every slab is different. We come out, measure, moisture-test the concrete, and give you a firm number in
              writing — not a range over the phone.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {ASSURANCES.map((a) => (
                <li key={a.text} className="flex items-center gap-3 text-muted-foreground">
                  <a.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {a.text}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={EPOXY.phoneHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {EPOXY.phoneDisplay}
              </a>
              <a
                href={EPOXY.smsHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-border px-6 py-3.5 font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <MessageSquare className="h-4 w-4" aria-hidden />
                Text Us
              </a>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Prefer to pick your own time?{" "}
              <a href="#schedule" className="font-semibold text-primary underline underline-offset-4">
                Book an appointment online
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:w-3/5">
            <EpoxyQuoteForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
