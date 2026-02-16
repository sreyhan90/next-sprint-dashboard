import Link from "next/link";

type PageProps = {
  params: { id: string };
};

export default function UserDetailPage({ params }: PageProps) {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ margin: "0 0 8px" }}>User Detail</h1>
      <p style={{ margin: "0 0 16px", opacity: 0.8 }}>
        Detail for user id: <strong>{params.id}</strong>
      </p>

      <p style={{ margin: "0 0 16px" }}>
        Server fetch + notFound handling will be implemented in NX-08.
      </p>

      <Link href="/dashboard/users">← Back to Users</Link>
    </main>
  );
}
