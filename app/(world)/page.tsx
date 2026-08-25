import Link from "next/link";
import { Compass } from "lucide-react";
import { Panel, GhostLink } from "@/components/world/panel-ui";
import { WorldIcon } from "@/components/world/world-icon";
import { AREAS, VALUES, WORLD_TAGLINE } from "@/lib/janope-world";

export default function EtusivuPage() {
  return (
    <Panel>
      <div className="flex flex-col gap-4">
        <span className="map-kicker text-[10px] text-muted-foreground">
          Janope – yhteinen maailmamme
        </span>
        <h1 className="font-display text-3xl leading-tight text-foreground sm:text-4xl text-balance">
  Rakennamme yhteyksiä, joilla on merkitystä.
</h1>

<p className="text-lg italic leading-relaxed text-muted-foreground">
  Yhdistämme ihmiset, tiedon ja palvelut.
</p>
      </div>

      {/* Arvot */}
      <div className="flex flex-col gap-4">
        <span className="map-kicker text-[10px] text-muted-foreground">Arvomme</span>
        <ul className="flex flex-col gap-4">
          {VALUES.map((value) => (
            <li key={value.title} className="flex items-start gap-3">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                <WorldIcon name={value.icon} className="h-4 w-4 text-gold" />
              </span>
              <div className="flex flex-col">
                <span className="map-kicker text-[10px] text-foreground">
                  {value.title}
                </span>
                <span className="leading-relaxed text-muted-foreground">
                  {value.text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Alueiden pikalista */}
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-card/60 p-5">
        <div className="flex items-center gap-3">
          <Compass className="h-7 w-7 flex-shrink-0 text-gold" strokeWidth={1.25} />
          <p className="map-kicker text-[10px] leading-relaxed text-foreground">
            Yhteinen perusta. Monia paikkoja.
            <br />
            <span className="text-gold">Rajattomasti mahdollisuuksia.</span>
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Valitse alue kartalta tai listasta tutkiaksesi Janopen maailmaa.
        </p>
        <ul className="flex flex-col">
          {AREAS.map((area) => (
            <li key={area.id}>
              <Link
                href={`/alue/${area.slug}`}
                className="group flex items-center gap-3 border-b border-border/50 py-2.5 last:border-0"
              >
                <span
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `var(${area.accentVar})` }}
                >
                  <WorldIcon name={area.icon} className="h-4 w-4 text-card" />
                </span>
                <span className="flex-1 leading-tight text-foreground transition-colors group-hover:text-gold">
                  {area.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <GhostLink href="/meista" label="Lue lisää Janopesta" />
      <p className="sr-only">{WORLD_TAGLINE}</p>
    </Panel>
  );
}
