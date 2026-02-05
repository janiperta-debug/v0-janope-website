"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Package, Users, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/DaniRolli", label: "Yleiskatsaus", icon: Home },
  { href: "/DaniRolli/products", label: "Tuotteet", icon: Package },
  { href: "/DaniRolli/partners", label: "Kumppanit", icon: Users },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#1a2847] border-r border-[#2a3857] flex flex-col">
      <div className="p-6 border-b border-[#2a3857]">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/janope-logo.png"
            alt="Janope Logo"
            width={40}
            height={40}
          />
          <div>
            <span className="text-lg font-bold text-[#00d4ff]">Janope</span>
            <span className="text-xs block text-[#8b9dc3]">Admin</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/DaniRolli" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive
                      ? "bg-[#00d4ff]/10 text-[#00d4ff]"
                      : "text-[#8b9dc3] hover:bg-[#2a3857] hover:text-white"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-[#2a3857]">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#8b9dc3] hover:bg-[#2a3857] hover:text-white transition-colors w-full"
        >
          Takaisin sivustolle
        </Link>
      </div>
    </aside>
  );
}
