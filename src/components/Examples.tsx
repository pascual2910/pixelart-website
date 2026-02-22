"use client";

import { useState } from "react";
import { EXAMPLES } from "@/lib/constants";
import { BeforeAfter } from "./BeforeAfter";

function ExampleCard({
  example,
}: {
  example: (typeof EXAMPLES)[number];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-panel shadow-sm transition-shadow hover:shadow-lg">
      <BeforeAfter
        beforeSrc={example.before}
        afterSrc={example.after}
        alt={example.name}
      />
      <div className="p-4">
        <h3 className="font-semibold">{example.name}</h3>
        <p className="mt-1 text-sm text-text-secondary">{example.subtitle}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <span className="rounded-md bg-accent-dim px-2 py-0.5 text-xs font-medium text-accent">
            {example.shape}
          </span>
          <span className="rounded-md bg-surface px-2 py-0.5 text-xs font-medium text-text-secondary">
            {example.colorMode}
          </span>
          <span className="rounded-md bg-surface px-2 py-0.5 text-xs font-medium text-text-secondary">
            {example.colors} colors
          </span>
        </div>
      </div>
    </div>
  );
}

export function Examples() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i === 0 ? EXAMPLES.length - 1 : i - 1));
  const next = () =>
    setActive((i) => (i === EXAMPLES.length - 1 ? 0 : i + 1));

  return (
    <section id="examples" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            See it in action
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            The same image, transformed with different shapes and color modes.
          </p>
        </div>

        {/* Desktop: 3x2 grid */}
        <div className="mt-14 hidden grid-cols-2 gap-6 sm:grid lg:grid-cols-3">
          {EXAMPLES.map((example) => (
            <ExampleCard key={`${example.name}-${example.shape}`} example={example} />
          ))}
        </div>

        {/* Mobile: single card with arrows */}
        <div className="mt-14 sm:hidden">
          <ExampleCard example={EXAMPLES[active]} />

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous example"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-panel text-text-secondary transition-colors hover:bg-surface hover:text-foreground"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <span className="text-sm text-text-muted">
              {active + 1} / {EXAMPLES.length}
            </span>

            <button
              onClick={next}
              aria-label="Next example"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-panel text-text-secondary transition-colors hover:bg-surface hover:text-foreground"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
