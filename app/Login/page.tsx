import Link from "next/link";

export default function LoginPage() {
  return (
    <main style={{ padding: 24, maxWidth: 520, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 8px" }}>Login</h1>
      <p style={{ margin: "0 0 16px", opacity: 0.8 }}>
        Demo auth will be implemented in NX-03 / NX-04.
      </p>

      <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
        <p style={{ margin: 0 }}>
          Placeholder form. Next step: RHF + Zod validation.
        </p>
      </div>

      <div style={{ marginTop: 16 }}>
        <Link href="/">← Back to Landing</Link>
      </div>
    </main>
  );
}
