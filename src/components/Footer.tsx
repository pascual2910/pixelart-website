import { Logo } from "./Logo";
import { APP_URL, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2">
            <Logo className="h-5 w-5" />
            <span className="text-sm font-semibold">{SITE.name}</span>
          </div>

          <div className="flex gap-12 text-sm">
            <div>
              <h4 className="font-semibold">Product</h4>
              <ul className="mt-3 space-y-2 text-text-secondary">
                <li>
                  <a href="#features" className="hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#examples" className="hover:text-foreground">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-foreground">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">App</h4>
              <ul className="mt-3 space-y-2 text-text-secondary">
                <li>
                  <a
                    href={`${APP_URL}/editor`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground"
                  >
                    Open Editor
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
