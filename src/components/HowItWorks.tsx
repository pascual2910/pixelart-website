import { STEPS } from "@/lib/constants";

function StepIcon({ number }: { number: number }) {
  const props = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (number) {
    case 1:
      return (
        <svg {...props}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
      );
    case 2:
      return (
        <svg {...props}>
          <path d="M12 20h9" />
          <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838.838-2.872a2 2 0 0 1 .506-.855z" />
        </svg>
      );
    case 3:
      return (
        <svg {...props}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      );
    default:
      return null;
  }
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Three simple steps from photo to pixel art.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-0">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center text-center md:w-56">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white">
                  <StepIcon number={step.number} />
                </div>
                <span className="mt-1 font-mono text-xs text-text-muted">
                  Step {step.number}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden h-px w-16 border-t-2 border-dashed border-border md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
