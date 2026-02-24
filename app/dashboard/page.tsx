import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { getSession } from "../lib/auth/auth";
import { redirect } from "next/navigation";

export default async function DashboardHomePage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 8px" }}>Dashboard</h1>
      <p style={{ margin: "0 0 16px", opacity: 0.8 }}>
        This will become a protected area (middleware + server check) in NX-05.
      </p>

      <div style={{ display: "flex", gap: 12 }}>
        <Link href="/dashboard/users">Users</Link>
        <Link href="/">Landing</Link>
        <p style={{ marginTop: 16, opacity: 0.7 }}>
          session: {String(session)}
        </p>
        <LogoutButton />
      </div>
    </main>
  );
}
