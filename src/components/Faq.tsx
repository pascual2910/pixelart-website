"use client";

import { useState } from "react";
import { FAQ } from "@/lib/constants";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={`shrink-0 text-text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Everything you need to know about the converter.
          </p>
        </div>

        <div className="mt-12">
          {FAQ.map((item, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between py-4 text-left text-sm font-semibold transition-colors hover:text-accent"
              >
                {item.question}
                <ChevronIcon open={openIndex === i} />
              </button>
              <div
                className="faq-content"
                data-open={openIndex === i}
              >
                <div>
                  <p className="pb-4 text-sm leading-relaxed text-text-secondary">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
