"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { FLAKE_COLORS, FLAKE_SERIES, EPOXY } from "@/lib/epoxy";

export function FlakePicker() {
  const [activeId, setActiveId] = useState(FLAKE_COLORS[0].id);
  const selected =
    FLAKE_COLORS.find((f) => f.id === activeId) ?? FLAKE_COLORS[0];
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Arrow keys move through the flat chart order so the two series behave as one
  // continuous radiogroup, which is what screen reader users expect.
  function onKeyDown(e: React.KeyboardEvent) {
    const keys = [
      "ArrowRight",
      "ArrowDown",
      "ArrowLeft",
      "ArrowUp",
      "Home",
      "End",
    ];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    // Derive the origin from the focused element rather than from activeId. Focus
    // can be moved programmatically (or by click) without state catching up, and
    // reading stale state made arrow keys jump to the wrong swatch.
    const focusedId = (e.target as HTMLElement)?.closest<HTMLElement>(
      "[data-flake-id]",
    )?.dataset.flakeId;
    const from = focusedId ?? activeId;
    const i = FLAKE_COLORS.findIndex((f) => f.id === from);
    const last = FLAKE_COLORS.length - 1;
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown")
      next = i === last ? 0 : i + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp")
      next = i === 0 ? last : i - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    const id = FLAKE_COLORS[next].id;
    setActiveId(id);
    btnRefs.current[id]?.focus();
  }

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
      {/* Selected blend preview */}
      {/* Swatches are cropped from printed vendor charts, so each one only carries
          ~146px of real detail. The preview is capped near that width — anything
          larger just renders an upscaled, mushy version of the same sample. */}
      <div className="lg:sticky lg:top-24 lg:w-80 lg:shrink-0">
        <div className="relative aspect-square max-w-xs overflow-hidden rounded-sm border border-border">
          <Image
            key={selected.id}
            src={selected.image}
            alt={`${selected.name} epoxy flake blend — ${selected.description}`}
            fill
            sizes="320px"
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-5 max-w-xs">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-manrope text-2xl font-extrabold uppercase tracking-tight text-foreground">
              {selected.name}
            </h3>
            <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              1/4 in.
            </span>
          </div>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            {selected.description}
          </p>
        </div>

        <a
          href={EPOXY.phoneHref}
          className="mt-6 inline-flex w-full max-w-xs items-center justify-center rounded-sm border border-primary px-6 py-3 font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Request Physical Samples
        </a>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
          Every blend is the same price. We bring real samples to your estimate
          so you can see them in your own light.
        </p>
      </div>

      {/* Swatch grid, grouped by series */}
      {/* role lives on the real flex container — a display:contents wrapper can be
          dropped from the accessibility tree, taking the radiogroup role with it. */}
      <div
        role="radiogroup"
        aria-label="Epoxy flake color blends"
        onKeyDown={onKeyDown}
        className="flex flex-1 flex-col gap-10"
      >
        {FLAKE_SERIES.map((series) => (
          <section key={series.id} aria-label={series.name}>
            <div className="mb-4 border-b border-border pb-3">
              <h3 className="font-manrope text-lg font-extrabold uppercase tracking-tight text-foreground">
                {series.name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {series.blurb}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 xl:grid-cols-5">
              {series.colors.map((flake) => {
                const isActive = flake.id === activeId;
                return (
                  <button
                    key={flake.id}
                    ref={(el) => {
                      btnRefs.current[flake.id] = el;
                    }}
                    type="button"
                    role="radio"
                    data-flake-id={flake.id}
                    aria-checked={isActive}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveId(flake.id)}
                    className={`group overflow-hidden rounded-sm border-2 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      isActive
                        ? "border-primary"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <span className="relative block aspect-square">
                      <Image
                        src={flake.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 33vw, 160px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {isActive && (
                        <span className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <Check
                            className="h-3 w-3"
                            strokeWidth={3}
                            aria-hidden="true"
                          />
                        </span>
                      )}
                      {flake.popular && !isActive && (
                        <span className="absolute left-0 top-0 bg-foreground/85 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-background">
                          Popular
                        </span>
                      )}
                    </span>
                    <span
                      className={`block px-2 py-2 text-xs font-bold uppercase leading-tight tracking-wide ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-muted-foreground"
                      }`}
                    >
                      {flake.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}

        <p className="text-sm leading-relaxed text-muted-foreground">
          Standard inventory size is 1/4 in. Custom orders are available for
          different flake sizing or a fully custom blend — just ask during your
          estimate.
        </p>
      </div>
    </div>
  );
}
