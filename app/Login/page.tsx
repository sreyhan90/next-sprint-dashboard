export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-xl bg-[var(--color-surface)] p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-semibold">Login</h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-[var(--color-primary)]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-[var(--color-primary)]"
          />

          <button className="w-full rounded-md bg-[var(--color-primary)] py-2 text-sm font-medium hover:opacity-90">
            Login
          </button>
        </div>
      </div>
    </main>
  );
}
