import { CalendarCheck, Clock, ExternalLink, Phone, Ruler } from "lucide-react"
import { InsightPaintWidget } from "@/components/insightpaint-widget"
import { EPOXY } from "@/lib/epoxy"
import { Reveal } from "./reveal"

const STEPS = [
  {
    icon: CalendarCheck,
    title: "Pick a time that works",
    body: "Real availability from our calendar — no phone tag, no waiting on a callback.",
  },
  {
    icon: Ruler,
    title: "We measure and moisture-test",
    body: "A 30-minute on-site visit so the number we give you accounts for your actual slab.",
  },
  {
    icon: Clock,
    title: "Firm price in writing",
    body: "You get a fixed quote and an install date, not a range guessed over the phone.",
  },
]

/**
 * Live booking calendar for the epoxy brand.
 *
 * Points at EPOXY.scheduler.bookingUrl (the `houston-superior-epoxy` booking
 * page), NOT the parent painting company's — that page only lists epoxy
 * services and drops appointments on the epoxy calendar.
 */
export function EpoxyScheduler() {
  return (
    <section id="schedule" className="scroll-mt-20 border-t border-border bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          <Reveal className="lg:w-2/5">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Book Online
            </p>
            <h2 className="font-manrope text-3xl font-extrabold uppercase leading-tight tracking-tight text-balance md:text-4xl">
              Schedule Your Free Estimate
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
              Pick your own appointment window below. You&apos;ll get an instant confirmation and a
              reminder before we arrive.
            </p>

            <ul className="mt-8 flex flex-col gap-6">
              {STEPS.map((s) => (
                <li key={s.title} className="flex gap-4">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-primary/30 bg-primary/10"
                    aria-hidden="true"
                  >
                    <s.icon className="size-5 text-primary" />
                  </span>
                  <span>
                    <span className="block font-manrope font-bold text-foreground">{s.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Rather not book online? Call and we&apos;ll set it up with you.
              </p>
              <a
                href={EPOXY.phoneHref}
                className="mt-3 inline-flex items-center gap-2 font-manrope text-lg font-bold text-primary transition-opacity hover:opacity-80"
              >
                <Phone className="size-5" aria-hidden="true" />
                {EPOXY.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:w-3/5">
            {/* The booking app renders its own light UI, so the panel gets a
                neutral surface rather than inheriting the dark section bg. */}
            <div className="overflow-hidden rounded-sm border border-border bg-[#f8fafc]">
              <InsightPaintWidget
                bookingUrl={EPOXY.scheduler.bookingUrl}
                label={EPOXY.scheduler.label}
                minHeight={640}
                className="block w-full"
              />
            </div>
            <a
              href={EPOXY.scheduler.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Open the booking page in a new tab
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
