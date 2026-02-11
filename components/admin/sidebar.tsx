"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
  ArrowLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin", label: "Yleisnäkymä", icon: LayoutDashboard },
  { href: "/admin/customers", label: "Asiakkaat", icon: Users },
  { href: "/admin/invoices", label: "Laskut", icon: FileText },
  { href: "/admin/reports", label: "Raportit", icon: BarChart3 },
  { href: "/admin/settings", label: "Asetukset", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-[#1f2937] flex flex-col border-r border-[#374151]">
      <div className="p-5 border-b border-[#374151]">
        <Link href="/admin" className="flex items-center gap-3">
          <Image
            src="/janope-logo.png"
            alt="Janope"
            width={32}
            height={32}
          />
          <div>
            <h2 className="text-white font-bold text-sm">Janope</h2>
            <p className="text-[#9ca3af] text-xs">Hallintapaneeli</p>
          </div>
        </Link>
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

      <div className="p-3 border-t border-[#374151]">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#9ca3af] hover:bg-[#374151] hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Takaisin sivustolle
        </Link>
      </div>
    </aside>
  );
}
