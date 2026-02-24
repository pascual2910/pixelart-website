import type { Metadata } from "next";
import { APP_URL, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description: `${SITE.name} pricing — currently free for early adopters. Sign up now and keep free access forever.`,
  alternates: {
    canonical: "/pricing",
  },
};

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-accent"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const FEATURES = [
  {
    title: "Create",
    items: [
      "Unlimited conversions",
      "All 7 grid shapes",
      "10 example styles",
      "Custom SVG upload",
    ],
  },
  {
    title: "Export",
    items: [
      "PNG, SVG, PDF",
      "JSON, CSV, Markdown",
      "View-only shareable links",
      "Editable shareable links",
    ],
  },
  {
    title: "Guides",
    items: [
      "Paint by Number",
      "Cross-Stitch Guide",
      "Bead Art Guide",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <a
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-foreground"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to home
      </a>

      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Pricing
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          One plan. Everything included. Free while we launch.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-panel">
        {/* Urgency banner */}
        <div className="bg-accent/10 px-4 py-2.5 text-center text-sm font-medium text-accent">
          Limited time — sign up now and keep free access forever
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left — plan details */}
          <div className="flex flex-col justify-between p-8 lg:w-2/5 lg:p-10">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">Early Adopter</h2>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                  Limited Time
                </span>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold">$0</span>
                <span className="text-lg text-text-muted line-through">
                  $9/mo
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                Sign up during our launch and keep free access forever — even
                when we introduce paid plans.
              </p>
            </div>

            <div className="mt-8">
              <a
                href={`${APP_URL}/?mode=signup`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-accent px-6 py-3 text-center text-base font-medium text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30"
              >
                Sign Up for Free
              </a>
              <p className="mt-3 text-center text-xs text-text-muted">
                No credit card required
              </p>
            </div>
          </div>

          {/* Right — features */}
          <div className="border-t border-border bg-surface p-8 lg:w-3/5 lg:border-l lg:border-t-0 lg:p-10">
            <div className="space-y-6">
              {FEATURES.map((group, gi) => (
                <div key={group.title}>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                    {group.title}
                  </h3>
                  <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckIcon />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {gi < FEATURES.length - 1 && (
                    <div className="mt-6 border-t border-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
