import { redirect } from "next/navigation";
import { getSession } from "../lib/auth/auth";

export default async function DashboardHomePage() {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <div>
      <h1 className="text-2xl font-semibold">Overview</h1>
      <p className="mt-2 text-sm opacity-70">
        Welcome back. Premium dashboard layout activated.
      </p>
    </div>
  );
}
