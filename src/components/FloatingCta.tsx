import { APP_URL } from "@/lib/constants";
import type { CSSProperties } from "react";

export function FloatingCta() {
  return (
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
      className="group fixed bottom-6 right-6 z-40 flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30 active:scale-95 sm:bottom-8 sm:right-8 [background:var(--bg)]"
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
  );
}
