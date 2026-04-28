"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
  ArrowLeft,
  LogOut,
  Menu,
  X,
  Target,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Yleisnäkymä", icon: LayoutDashboard },
  { href: "/admin/crm", label: "CRM", icon: Target },
  { href: "/admin/customers", label: "Asiakkaat", icon: Users },
  { href: "/admin/invoices", label: "Laskut", icon: FileText },
  { href: "/admin/reports", label: "Raportit", icon: BarChart3 },
  { href: "/admin/settings", label: "Asetukset", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  }

  const sidebarContent = (
    <>
      <div className="p-5 border-b border-[#374151] flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/janope-logo.png"
            alt="Janope"
            width={32}
            height={32}
            className="w-auto h-auto"
          />
          <div>
            <h2 className="text-white font-bold text-sm">Janope</h2>
            <p className="text-[#9ca3af] text-xs">Hallintapaneeli</p>
          </div>
        </Link>
        <button
          onClick={() => setOpen(false)}
          className="lg:hidden text-[#9ca3af] hover:text-white"
          aria-label="Sulje valikko"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 p-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-[#2563eb] text-white"
                  : "text-[#9ca3af] hover:bg-[#374151] hover:text-white"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t border-[#374151] flex flex-col gap-1">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#9ca3af] hover:bg-[#374151] hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Takaisin sivustolle
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#9ca3af] hover:bg-[#374151] hover:text-white transition-colors w-full text-left"
        >
          <LogOut className="h-4 w-4" />
          Kirjaudu ulos
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile header bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#1f2937] border-b border-[#374151] flex items-center justify-between px-4 py-3">
        <Link href="/admin" className="flex items-center gap-2">
          <Image src="/janope-logo.png" alt="Janope" width={28} height={28} className="w-auto h-auto" />
          <span className="text-white font-bold text-sm">Hallintapaneeli</span>
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="text-[#9ca3af] hover:text-white"
          aria-label="Avaa valikko"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile slide-out sidebar */}
      <aside
        className={cn(
          "lg:hidden fixed top-0 left-0 z-50 w-64 h-full bg-[#1f2937] flex flex-col border-r border-[#374151] transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebarContent}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 min-h-screen bg-[#1f2937] flex-col border-r border-[#374151]">
        {sidebarContent}
      </aside>
    </>
  );
}
