import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Auth Dashboard",
  description:
    "Next.js App Router mini product: auth + dashboard + users list/detail",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
