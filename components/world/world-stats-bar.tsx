import Link from "next/link";
import { Compass } from "lucide-react";
import { STATS } from "@/lib/janope-world";
import { WorldIcon } from "./world-icon";

const LEGAL_LINKS = [
  { href: "/tietosuoja", label: "Tietosuojaseloste" },
  { href: "/kayttoehdot", label: "Käyttöehdot" },
  { href: "/evasteet", label: "Evästekäytäntö" },
  { href: "/saavutettavuus", label: "Saavutettavuusseloste" },
];

export function WorldStatsBar() {
  return (
    <footer className="border-t border-border bg-card/60">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Motto + tilastot */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          <div className="flex items-center gap-3 lg:col-span-1">
            <Compass className="h-9 w-9 flex-shrink-0 text-gold" strokeWidth={1.25} />
            <p className="map-kicker text-[10px] leading-relaxed text-foreground">
              Yhteinen perusta.
              <br />
              Monia paikkoja.
              <br />
              <span className="text-gold">Rajattomasti mahdollisuuksia.</span>
            </p>
          </div>

          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-start gap-3">
              <WorldIcon name={stat.icon} className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
              <div className="flex flex-col">
                <span className="font-display text-base leading-tight text-foreground">
                  {stat.value}
                </span>
                <span className="text-sm leading-snug text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Laki + tekijä */}
        <div className="mt-8 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
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
      </div>
    </footer>
  );
}
