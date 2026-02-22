import { APP_URL } from "@/lib/constants";

export function Cta() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-accent px-6 py-16 text-center sm:px-16">
          {/* Background glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
            <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to create pixel art?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-white/80">
            Start converting images for free — no account required.
          </p>
          <div className="mt-8">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-white px-6 py-3 text-base font-semibold text-accent shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
            >
              Open the Editor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
