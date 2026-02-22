import { APP_URL, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-14">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-32">
        <h1 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {SITE.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-text-secondary sm:text-xl">
          Upload any photo and transform it into stunning grid-based designs
          with customizable shapes, colors, and export options.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-accent px-6 py-3 text-base font-medium text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30"
          >
            Sign Up for Free
          </a>
          <a
            href="#examples"
            className="inline-flex rounded-lg border border-border px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface"
          >
            See Examples
          </a>
        </div>
        <p className="mt-4 text-sm text-text-muted">
          No credit card required. Start creating instantly.
        </p>
      </div>
    </section>
  );
}
