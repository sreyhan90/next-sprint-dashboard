import Link from "next/link";

export default function DashboardHomePage() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 8px" }}>Dashboard</h1>
      <p style={{ margin: "0 0 16px", opacity: 0.8 }}>
        This will become a protected area (middleware + server check) in NX-05.
      </p>

      <div style={{ display: "flex", gap: 12 }}>
        <Link href="/dashboard/users">Users</Link>
        <Link href="/">Landing</Link>
      </div>
    </main>
  );
}
