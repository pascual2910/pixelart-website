import { AUDIENCES } from "@/lib/constants";

function AudienceIcon({ icon }: { icon: string }) {
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

  switch (icon) {
    case "artist":
      return (
        <svg {...props}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "stitch":
      return (
        <svg {...props}>
          <path d="M4 4l16 16" />
          <path d="M20 4L4 20" />
          <path d="M12 2v20" />
          <path d="M2 12h20" />
        </svg>
      );
    case "beads":
      return (
        <svg {...props}>
          <circle cx="7" cy="7" r="3" />
          <circle cx="17" cy="7" r="3" />
          <circle cx="7" cy="17" r="3" />
          <circle cx="17" cy="17" r="3" />
        </svg>
      );
    case "mosaic":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="8" height="8" rx="1" />
          <rect x="13" y="3" width="8" height="4" rx="1" />
          <rect x="13" y="9" width="8" height="12" rx="1" />
          <rect x="3" y="13" width="8" height="8" rx="1" />
        </svg>
      );
    default:
      return null;
  }
}

export function UseCases() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for creators
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Whether you work digitally or with your hands.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.title}
              className="rounded-2xl border border-border bg-panel p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent-dim text-accent">
                <AudienceIcon icon={audience.icon} />
              </div>
              <h3 className="mt-4 font-semibold">{audience.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
