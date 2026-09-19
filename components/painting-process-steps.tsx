import { Check } from "lucide-react"
import { PROCESS_STEPS } from "@/lib/painting-process"

/**
 * Renders the 8-step process as a vertical timeline. Server component — no
 * interactivity, so it stays out of the client bundle.
 */
export function PaintingProcessSteps() {
  return (
    <ol className="relative flex flex-col gap-8 md:gap-10">
      {PROCESS_STEPS.map((step, i) => (
        <li
          key={step.number}
          id={`step-${step.number}`}
          className="relative scroll-mt-28 rounded-lg border border-border bg-card p-6 md:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-secondary-foreground"
            >
              {step.number}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                Step {step.number} of {PROCESS_STEPS.length}
              </p>
              <h3 className="mt-1 font-serif text-2xl font-bold text-foreground text-balance md:text-3xl">
                {step.title}
              </h3>
              <p className="mt-2 text-base font-medium text-muted-foreground text-pretty">{step.tagline}</p>

              <div className="mt-4 flex flex-col gap-3">
                {step.body.map((p) => (
                  <p key={p} className="leading-relaxed text-foreground/90 text-pretty">
                    {p}
                  </p>
                ))}
              </div>

              {step.list && step.list.length > 0 && (
                <div className="mt-6 rounded-md bg-muted p-4 md:p-5">
                  {step.listTitle && (
                    <p className="mb-3 font-semibold text-foreground">{step.listTitle}:</p>
                  )}
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {step.list.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                        <span className="text-sm leading-relaxed text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {step.after && step.after.length > 0 && (
                <div className="mt-4 flex flex-col gap-3">
                  {step.after.map((p) => (
                    <p key={p} className="leading-relaxed text-foreground/90 text-pretty">
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
