"use client";

import { useState } from "react";
import Image from "next/image";
import { EXAMPLES } from "@/lib/constants";
import { BeforeAfter } from "./BeforeAfter";

export function Examples() {
  const [active, setActive] = useState(0);
  const example = EXAMPLES[active];

  return (
    <section id="examples" className="scroll-mt-16 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            See it in action
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Drag the slider to compare original and pixel art versions.
          </p>
        </div>

        <div className="mt-14">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-panel shadow-lg">
            <BeforeAfter
              beforeSrc={example.before}
              afterSrc={example.after}
              alt={example.name}
            />
            <div className="border-t border-border p-4">
              <h3 className="font-semibold">{example.name}</h3>
              <p className="mt-1 text-sm text-text-secondary">
                {example.subtitle}
              </p>
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

          {/* Dot navigation */}
          <div className="mt-6 flex justify-center gap-2">
            {EXAMPLES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View example ${i + 1}: ${EXAMPLES[i].name}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === active
                    ? "bg-accent"
                    : "bg-border hover:bg-text-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
