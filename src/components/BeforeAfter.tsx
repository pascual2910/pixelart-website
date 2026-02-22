"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
}

export function BeforeAfter({ beforeSrc, afterSrc, alt }: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full cursor-col-resize select-none overflow-hidden"
      onMouseMove={(e) => {
        if (e.buttons === 1) handleMove(e.clientX);
      }}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* After image (full, behind) */}
      <Image
        src={afterSrc}
        alt={`${alt} - pixel art`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 672px"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={`${alt} - original`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 672px"
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-lg"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-background/80 backdrop-blur-sm">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <polyline points="8,4 4,12 8,20" />
            <polyline points="16,4 20,12 16,20" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 z-10 rounded-md bg-background/80 px-2 py-0.5 text-xs font-medium backdrop-blur-sm">
        Original
      </span>
      <span className="absolute top-3 right-3 z-10 rounded-md bg-background/80 px-2 py-0.5 text-xs font-medium backdrop-blur-sm">
        Pixel Art
      </span>
    </div>
  );
}
