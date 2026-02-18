import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Auth Dashboard",
  description: "Auth + Protected Dashboard + Users",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        {children}
      </body>
    </html>
  );
}
