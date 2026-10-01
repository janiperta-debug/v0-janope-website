"use client";

import Link from "next/link";
import { useState } from "react";

const LEGAL_LINKS = [
  { href: "/tietosuoja", fi: "Tietosuojaseloste", en: "Privacy policy" },
  { href: "/kayttoehdot", fi: "Käyttöehdot", en: "Terms of use" },
  { href: "/evasteet", fi: "Evästekäytäntö", en: "Cookie policy" },
  { href: "/saavutettavuus", fi: "Saavutettavuusseloste", en: "Accessibility statement" },
];

function getLocale(): "fi" | "en" {
  if (typeof document === "undefined") return "fi";
  return document.cookie.match(/(?:^|; )janope-locale=([^;]+)/)?.[1] === "en" ? "en" : "fi";
}

export function WorldFooter() {
  const [locale] = useState<"fi" | "en">(getLocale);

  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {locale === "en" ? link.en : link.fi}
            </Link>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          <span>&copy; 2026 T:mi Janope · Y-tunnus 3600818-6 · </span>
          <a href="mailto:info@janope.fi" className="text-gold hover:text-gold-bright">info@janope.fi</a>
        </div>
      </div>
    </footer>
  );
}
