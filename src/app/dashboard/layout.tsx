import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | NeatStamp",
  description: "Manage your email signatures, templates, and subscription.",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
