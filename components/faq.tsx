// components/FAQ.tsx
// Single FAQ component used everywhere. Solves two recurring bugs:
//   1. Questions rendered without answers (homepage + featured blog post)
//   2. Missing FAQPage JSON-LD schema
// Use <FAQ items={[...]} /> anywhere you need a FAQ section.

import { ReactNode } from "react";

export type FAQItem = {
  q: string;
  a: string | ReactNode;  // string for simple text, ReactNode for rich content (links, bold, etc.)
};

type FAQProps = {
  items: FAQItem[];
  title?: string;
  description?: string;
  variant?: "default" | "compact" | "centered";
  injectSchema?: boolean;  // default true. Set false if FAQPage schema is injected elsewhere on the page.
  schemaOnly?: boolean;    // default false. If true, ONLY emits schema (for inline FAQs that already render visually).
  id?: string;             // anchor id, default "faq"
};

/**
 * Convert ReactNode answer to plain text for schema.
 * Schema must be plain text per Google's spec.
 */
function answerToText(answer: string | ReactNode): string {
  if (typeof answer === "string") return answer;
  // For ReactNode, recursively extract text content
  if (answer === null || answer === undefined) return "";
  if (typeof answer === "number") return String(answer);
  if (Array.isArray(answer)) {
    return answer.map(answerToText).join(" ");
  }
  if (typeof answer === "object" && answer !== null && "props" in answer) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const props = (answer as any).props;
    return answerToText(props.children);
  }
  return "";
}

export default function FAQ({
  items,
  title = "Frequently Asked Questions",
  description,
  variant = "default",
  injectSchema = true,
  schemaOnly = false,
  id = "faq",
}: FAQProps) {
  if (!items || items.length === 0) return null;

  // Build FAQPage schema — strip out ReactNode formatting for the schema text
  const schema = injectSchema
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: answerToText(item.a),
          },
        })),
      }
    : null;

  // If schemaOnly, render only the JSON-LD and no UI
  if (schemaOnly) {
    return schema ? (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    ) : null;
  }

  // UI variants
  const sectionClass = {
    default: "py-16 md:py-24 bg-white",
    compact: "py-10 md:py-14",
    centered: "py-16 md:py-24 bg-zinc-50",
  }[variant];

  const wrapperClass = {
    default: "mx-auto max-w-3xl px-4",
    compact: "mx-auto max-w-2xl px-4",
    centered: "mx-auto max-w-3xl px-4",
  }[variant];

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <section id={id} className={sectionClass} aria-labelledby={`${id}-heading`}>
        <div className={wrapperClass}>
          <h2
            id={`${id}-heading`}
            className={`text-3xl md:text-4xl font-bold mb-${
              description ? "3" : "8"
            } ${variant === "centered" ? "text-center" : ""}`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`text-zinc-600 mb-8 ${
                variant === "centered" ? "text-center max-w-2xl mx-auto" : ""
              }`}
            >
              {description}
            </p>
          )}

          {/*
            CRITICAL: answers are ALWAYS rendered in the DOM (inside <details>),
            even when the accordion is visually collapsed. This is what makes the
            FAQ extractable by Google AI Overviews, Perplexity, ChatGPT Search,
            and accessible to screen readers. Never replace this with a JS-only
            show/hide pattern.
          */}
          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {items.map((item, idx) => (
              <details key={`${item.q}-${idx}`} className="group py-5">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-zinc-900 pr-4">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden
                    className="ml-4 text-2xl text-emerald-700 transition-transform group-open:rotate-45 flex-shrink-0"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-3 text-zinc-700 leading-relaxed">
                  {typeof item.a === "string" ? <p>{item.a}</p> : item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}