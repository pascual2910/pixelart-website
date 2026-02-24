import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Logo className="h-12 w-12" />
      <h1 className="mt-6 text-4xl font-bold">404</h1>
      <p className="mt-2 text-lg text-text-secondary">Page not found</p>
      <a
        href="/"
        className="mt-6 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
      >
        Go home
      </a>
    </div>
  );
}
