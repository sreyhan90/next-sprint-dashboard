import Link from "next/link";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";
import { getSession } from "../lib/auth/auth";

export default async function DashboardHomePage() {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <main>
      <h1 className="text-2xl font-semibold">Overview</h1>
      <p className="mt-2 text-sm opacity-70">
        Welcome back. Premium dashboard layout activated.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <Link href="/dashboard/users">Users</Link>
        <Link href="/">Landing</Link>

        <p style={{ opacity: 0.7 }}>session: {String(session)}</p>

        <LogoutButton />
      </div>
    </main>
  );
}
