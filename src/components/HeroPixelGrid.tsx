"use client";

import { useState, useEffect } from "react";

// Pixel art heart — 16x12 grid with accent color gradient
const COLS = 16;
const PIXEL_ART: (string | null)[][] = [
  [null, null, null, "#818cf8", "#a5b4fc", "#818cf8", null, null, null, null, "#818cf8", "#a5b4fc", "#818cf8", null, null, null],
  [null, null, "#6366f1", "#a5b4fc", "#c7d2fe", "#a5b4fc", "#818cf8", null, null, "#6366f1", "#a5b4fc", "#c7d2fe", "#a5b4fc", "#818cf8", null, null],
  [null, "#6366f1", "#818cf8", "#a5b4fc", "#818cf8", "#818cf8", "#6366f1", "#6366f1", "#6366f1", "#818cf8", "#a5b4fc", "#818cf8", "#818cf8", "#6366f1", "#6366f1", null],
  ["#6366f1", "#6366f1", "#818cf8", "#818cf8", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#818cf8", "#818cf8", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1"],
  ["#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1"],
  [null, "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", null],
  [null, null, "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", null, null],
  [null, null, null, "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", null, null, null],
  [null, null, null, null, "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", null, null, null, null],
  [null, null, null, null, null, "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", "#6366f1", null, null, null, null, null],
  [null, null, null, null, null, null, "#6366f1", "#6366f1", "#6366f1", "#6366f1", null, null, null, null, null, null],
  [null, null, null, null, null, null, null, "#6366f1", "#6366f1", null, null, null, null, null, null, null],
];

const PLACEHOLDER_COLOR = "var(--text-muted)";

export function HeroPixelGrid() {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSettled(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center" aria-hidden="true">
      <div className="inline-grid gap-1.5 sm:gap-2" style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}>
        {PIXEL_ART.flat().map((color, i) => {
          const row = Math.floor(i / COLS);
          const col = i % COLS;

          if (color === null) {
            return <div key={i} className="h-3 w-3 sm:h-4 sm:w-4" />;
          }

          const blinkDelay = `${((Math.sin(row * 3.7 + col * 2.3) * 0.5 + 0.5) * 1.5).toFixed(2)}s`;
          const blinkSpeed = `${(1.2 + (Math.cos(row * 1.1 + col * 2.7) * 0.5 + 0.5) * 0.8).toFixed(2)}s`;
          const pseudo = ((row * 7 + col * 13 + 37) * 2654435761 >>> 0) / 4294967296;
          const settleDelay = `${(row * 0.08 + col * 0.05 + pseudo * 0.2).toFixed(2)}s`;

          return (
            <div
              key={i}
              className={`pixel-cell h-3 w-3 rounded-full sm:h-4 sm:w-4 ${settled ? "settled" : ""}`}
              style={{
                backgroundColor: settled ? color : PLACEHOLDER_COLOR,
                "--blink-delay": blinkDelay,
                "--blink-speed": blinkSpeed,
                "--settle-delay": settleDelay,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
    </div>
  );
}
