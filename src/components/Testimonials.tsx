import { TESTIMONIALS } from "@/lib/constants";

const COLUMNS = [
  { testimonials: TESTIMONIALS.slice(0, 3), duration: 20 },
  { testimonials: TESTIMONIALS.slice(3, 6), duration: 16 },
  { testimonials: TESTIMONIALS.slice(6, 9), duration: 24 },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  const initials = testimonial.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div className="rounded-2xl border border-border bg-panel p-6">
      <p className="text-sm leading-relaxed text-text-secondary">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-4 flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: testimonial.color }}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-text-muted">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialColumn({
  testimonials,
  duration,
  className,
}: {
  testimonials: typeof TESTIMONIALS;
  duration: number;
  className?: string;
}) {
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div
        className="testimonial-scroll flex flex-col gap-4 pb-4"
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by creators
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            See what artists, crafters, and makers are building.
          </p>
        </div>

        <div className="testimonial-columns relative mt-14 h-[400px] overflow-hidden md:h-[500px] lg:h-[600px]">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-surface to-transparent" />

          <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialColumn
              testimonials={COLUMNS[0].testimonials}
              duration={COLUMNS[0].duration}
            />
            <TestimonialColumn
              testimonials={COLUMNS[1].testimonials}
              duration={COLUMNS[1].duration}
              className="hidden md:block"
            />
            <TestimonialColumn
              testimonials={COLUMNS[2].testimonials}
              duration={COLUMNS[2].duration}
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
