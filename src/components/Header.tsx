"use client";

import { useState } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { APP_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Examples", href: "#examples" },
  { label: "How It Works", href: "#how-it-works" },
];

function PricingNavItem() {
  return (
    <div className="group/pricing relative">
      <a
        href="/pricing"
        className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-foreground"
      >
        Pricing
        <span className="rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-emerald-600 dark:text-emerald-400">
          Free
        </span>
      </a>

      {/* Hover popover */}
      <div className="pointer-events-none absolute left-1/2 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover/pricing:pointer-events-auto group-hover/pricing:opacity-100">
        <div className="relative -translate-x-1/2">
          {/* Arrow */}
          <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-border bg-panel" />

          <div className="w-64 rounded-xl border border-border bg-panel p-4 shadow-lg">
            <p className="text-sm font-semibold">Currently Free</p>
            <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
              Sign up now and lock in free access forever. Limited time offer.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-lg bg-accent px-3 py-1.5 text-center text-xs font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Sign Up for Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <Logo className="h-6 w-6" />
          <span className="hidden sm:inline">Pixel Art Converter</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <PricingNavItem />
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`${APP_URL}/editor`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            Open Editor
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface md:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-text-secondary transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-foreground"
            >
              Pricing
              <span className="rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-emerald-600 dark:text-emerald-400">
                Free
              </span>
            </a>
            <a
              href={`${APP_URL}/editor`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-accent px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Open Editor
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
