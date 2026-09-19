import { Reveal } from "./reveal"
import { FAQS, EPOXY, PHONE_HREF } from "@/lib/epoxy"

/**
 * FAQ section. Uses native <details>/<summary> so every answer is present in
 * the DOM for crawlers and works with JavaScript disabled — no accordion state
 * to hydrate. FAQPage schema is emitted once from the page, not here.
 */
export function EpoxyFAQ() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-border bg-secondary/30 py-20 md:py-28">
      <div className="container mx-auto max-w-3xl px-4">
        <Reveal>
          <p className="font-manrope text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Answers
          </p>
          <h2 className="mt-3 font-manrope text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-foreground md:text-5xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} delay={Math.min(i, 4) * 0.05}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <h3 className="font-manrope text-base font-bold leading-snug text-foreground md:text-lg">
                    {faq.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-xl leading-none text-primary transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-6 pr-8 text-pretty leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Still have a question about your slab?{" "}
            <a
              href={PHONE_HREF}
              className="font-manrope font-bold text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground"
            >
              Call {EPOXY.phoneDisplay}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
