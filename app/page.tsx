import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-xl bg-[var(--color-surface)] p-8 shadow-lg">
        <h1 className="mb-4 text-3xl font-bold">Next.js Auth Dashboard</h1>

        <p className="mb-6 text-sm opacity-70">
          App Router + Server Components + Middleware + Auth
        </p>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Login
          </Link>

          <Link
            href="/dashboard"
            className="rounded-md border border-white/20 px-4 py-2 text-sm hover:bg-white/5"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
