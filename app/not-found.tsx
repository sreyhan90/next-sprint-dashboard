import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: 24, maxWidth: 520, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 8px" }}>404 - Not Found</h1>
      <p style={{ margin: "0 0 16px", opacity: 0.8 }}>
        The page you requested does not exist.
      </p>
      <Link href="/">Go to Landing</Link>
    </main>
  );
}
