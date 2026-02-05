import React from "react";
import { AdminSidebar } from "@/components/admin/sidebar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a1128] flex">
      <AdminSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
