import Link from "next/link";

const LEGAL_LINKS = [
  { href: "/tietosuoja", label: "Tietosuojaseloste" },
  { href: "/kayttoehdot", label: "Käyttöehdot" },
  { href: "/evasteet", label: "Evästekäytäntö" },
  { href: "/saavutettavuus", label: "Saavutettavuusseloste" },
];

export function WorldFooter() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          <span>&copy; 2026 T:mi Janope · Y-tunnus 3600818-6 · </span>
          <a href="mailto:info@janope.fi" className="text-gold hover:text-gold-bright">
            info@janope.fi
          </a>
        </div>
      </div>
    </footer>
  );
}
