import { APP_URL, SITE } from "@/lib/constants";
import { HeroPixelGrid } from "./HeroPixelGrid";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-14">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-20 sm:px-6 sm:py-32 lg:flex-row lg:gap-16">
        {/* Pixel heart — 1/3 on desktop, below text on mobile */}
        <div className="flex shrink-0 items-center justify-center lg:w-1/3">
          <HeroPixelGrid />
        </div>

        {/* Text — 2/3 on desktop */}
        <div className="text-center lg:w-2/3 lg:text-left">
          <h1 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:mx-0 lg:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-text-secondary sm:text-xl lg:mx-0">
            Upload any photo and transform it into stunning grid-based designs
            with customizable shapes, colors, and export options.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href={`${APP_URL}/?mode=signup`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-accent px-6 py-3 text-base font-medium text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30"
            >
              Sign Up for Free
            </a>
            <a
              href="#examples"
              className="inline-flex rounded-lg border border-border px-6 py-3 text-base font-medium text-foreground transition-all hover:-translate-y-0.5 hover:bg-surface"
            >
              See Examples
            </a>
          </div>
          <p className="mt-4 text-sm text-text-muted">
            No credit card required. Start creating instantly.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-muted"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
