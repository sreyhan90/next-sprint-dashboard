import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[radial-gradient(1200px_800px_at_20%_10%,rgba(99,102,241,0.2),transparent_55%),radial-gradient(900px_700px_at_90%_20%,rgba(34,197,94,0.15),transparent_60%)] text-[var(--color-text)]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-white/5 backdrop-blur p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-6">My Dashboard</h2>

          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="block rounded-md px-3 py-2 text-sm hover:bg-white/10"
            >
              Overview
            </Link>
            <Link
              href="/dashboard/users"
              className="block rounded-md px-3 py-2 text-sm hover:bg-white/10"
            >
              Users
            </Link>
          </nav>
        </div>

        <LogoutButton />
      </aside>

      {/* Content */}
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}
