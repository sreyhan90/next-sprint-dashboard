import Link from "next/link";

export default function LandingPage() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 8px" }}>Next Auth Dashboard</h1>
      <p style={{ margin: "0 0 16px", opacity: 0.8 }}>
        Sprint deliverable: Auth + Protected Dashboard + Users List/Detail (App
        Router).
      </p>

      <div style={{ display: "flex", gap: 12 }}>
        <Link href="/login">Go to Login</Link>
        <Link href="/dashboard">Go to Dashboard</Link>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <section>
        <h2 style={{ margin: "0 0 8px" }}>Demo Flow (placeholder)</h2>
        <ol style={{ margin: 0, paddingLeft: 18 }}>
          <li>Open /login</li>
          <li>Login with demo credentials (to be implemented)</li>
          <li>Navigate to /dashboard/users</li>
          <li>Open a user detail</li>
        </ol>
      </section>
    </main>
  );
}
