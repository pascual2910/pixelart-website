"use client";

import { useState, useEffect } from "react";
import { APP_URL } from "@/lib/constants";
import type { CSSProperties } from "react";

export function FloatingCta() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 sm:bottom-8 sm:right-8">
      {/* Start Creating CTA */}
      <a
        href={`${APP_URL}/?mode=signup`}
        target="_blank"
        rel="noopener noreferrer"
        style={
          {
            "--speed": "3s",
            "--cut": "0.06em",
            "--bg": "var(--accent)",
          } as CSSProperties
        }
        className="group relative isolate flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30 active:scale-95 [background:var(--bg)]"
      >
        {/* Shimmer layer */}
        <div className="absolute -z-30 inset-0 overflow-visible blur-[2px] [container-type:size]">
          <div className="shimmer-slide absolute inset-0 h-[100cqh] [aspect-ratio:1] [border-radius:0] [mask:none]">
            <div className="spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-45deg),transparent_0,#ffffff_90deg,transparent_90deg)] [translate:0_0]" />
          </div>
        </div>

        {/* Inner background */}
        <div className="absolute -z-20 [background:var(--bg)] [border-radius:9999px] [inset:var(--cut)]" />

        {/* Inner highlight */}
        <div className="absolute inset-0 size-full rounded-full shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]" />

        Start Creating
      </a>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-text-secondary shadow-lg transition-all duration-300 hover:text-foreground ${
          showBackToTop
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-75 opacity-0"
        }`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}
