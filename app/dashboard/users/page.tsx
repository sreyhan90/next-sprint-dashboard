import Link from "next/link";

export default function UsersListPage() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 8px" }}>Users</h1>
      <p style={{ margin: "0 0 16px", opacity: 0.8 }}>
        Server-side fetch + search will be implemented in NX-07 (DummyJSON).
      </p>

      <ul style={{ margin: 0, paddingLeft: 18 }}>
        <li>
          <Link href="/dashboard/users/1">User #1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">User #2</Link>
        </li>
      </ul>

      <div style={{ marginTop: 16 }}>
        <Link href="/dashboard">← Back to Dashboard</Link>
      </div>
    </main>
  );
}
