"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { WORLD_TAGLINE } from "@/lib/janope-world";

const NAV = [
  { href: "/", label: "Etusivu" },
  { href: "/meista", label: "Meistä" },
  { href: "/uutiset", label: "Uutiset" },
  { href: "/yhteystiedot", label: "Yhteystiedot" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card/85 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/world/janope-compass.png"
            alt="Janope"
            className="h-10 w-10 flex-shrink-0 object-contain"
          />
          <span className="flex flex-col leading-none">
            <img
              src="/world/janope-wordmark.png"
              alt="JANOPE"
              className="h-5 w-auto object-contain sm:h-6"
            />
            <span className="mt-1 hidden text-xs text-muted-foreground sm:block">
              {WORLD_TAGLINE}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`map-kicker relative text-xs transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Sulje valikko" : "Avaa valikko"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav className="border-t border-border bg-card px-4 py-2 md:hidden">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`map-kicker block border-b border-border/60 py-3 text-sm last:border-0 ${
                  active ? "text-gold" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
