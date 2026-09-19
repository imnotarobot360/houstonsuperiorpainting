import { Check, X } from "lucide-react";
import { COMPARISON_ROWS } from "@/lib/epoxy";
import { Reveal } from "./reveal";
import { FlakePicker } from "./flake-picker";

export function EpoxyComparison() {
  return (
    <section
      id="colors"
      className="scroll-mt-20 border-t border-border bg-secondary/30 py-20 md:py-28"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Choose Your Look
          </p>
          <h2 className="font-manrope text-3xl font-extrabold uppercase leading-tight tracking-tight text-balance md:text-5xl">
            27 Flake Blends
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Two full series, all the same price. Every blend below is a real
            flake sample, not a rendering.
          </p>
        </Reveal>

        <Reveal>
          <FlakePicker />
        </Reveal>

        {/* Comparison table */}
        <Reveal className="mx-auto mb-10 mt-24 max-w-2xl text-center">
          <h2 className="font-manrope text-3xl font-extrabold uppercase leading-tight tracking-tight text-balance md:text-4xl">
            Polyaspartic vs. The Big-Box Kit
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            The honest comparison. This is why a real floor costs more than a
            weekend project.
          </p>
        </Reveal>

        <Reveal className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">
              Comparison of professional polyaspartic epoxy flake systems
              against DIY big-box epoxy kits
            </caption>
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="py-4 pr-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Feature
                </th>
                <th
                  scope="col"
                  className="bg-primary/10 px-4 py-4 font-manrope text-sm font-extrabold uppercase tracking-wider text-primary"
                >
                  Houston Superior Epoxy
                </th>
                <th
                  scope="col"
                  className="px-4 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  DIY Big-Box Kit
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.feature} className="border-b border-border">
                  <th
                    scope="row"
                    className="py-4 pr-4 font-semibold text-foreground"
                  >
                    {row.feature}
                  </th>
                  <td className="bg-primary/5 px-4 py-4">
                    <span className="flex items-start gap-2.5 text-foreground">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <span className="sr-only">Yes: </span>
                      {row.ours}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="flex items-start gap-2.5 text-muted-foreground">
                      <X
                        className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                        aria-hidden
                      />
                      <span className="sr-only">No: </span>
                      {row.theirs}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
