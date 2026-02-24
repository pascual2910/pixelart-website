"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Logo className="h-12 w-12" />
      <h1 className="mt-6 text-4xl font-bold">Something went wrong</h1>
      <p className="mt-2 text-lg text-text-secondary">
        An unexpected error occurred. Please try again.
      </p>
      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={reset}
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-surface"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
