import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Panel, GhostLink } from "@/components/world/panel-ui";
import { AREAS, VALUES, WORLD_TAGLINE } from "@/lib/janope-world";
import { getBuildingsForAreaWithViara } from "@/lib/janope-viara";

export default function EtusivuPage() {
  return (
    <Panel>
      <div className="flex flex-col gap-4">
        <span className="map-kicker text-[10px] text-muted-foreground">Janope – yhteinen maailmamme</span>
        <h1 className="font-display text-3xl leading-tight text-foreground sm:text-4xl text-balance">Rakennamme yhteyksiä, joilla on merkitystä.</h1>
        <p className="text-lg italic leading-relaxed text-muted-foreground">Yhdistämme ihmiset, tiedon ja palvelut.</p>
      </div>

      <div className="flex flex-col gap-4">
        <span className="map-kicker text-[10px] text-muted-foreground">Arvomme</span>
        <ul className="flex flex-col gap-4">
          {VALUES.map((value) => (
            <li key={value.title} className="flex items-start gap-3">
              <img src="/world/value-symbol.png" alt="" className="h-9 w-9 flex-shrink-0 object-contain" />
              <div className="flex flex-col">
                <span className="map-kicker text-[10px] text-foreground">{value.title}</span>
                <span className="leading-relaxed text-muted-foreground">{value.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/viara" className="group flex items-center gap-4 rounded-xl border border-border bg-card/70 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
        <span className="flex h-14 w-20 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-white p-2">
          <img src="https://raw.githubusercontent.com/janiperta-debug/Viara/main/public/viara-logo.png" alt="Viara" className="h-auto max-h-10 w-full object-contain" />
        </span>
        <div className="min-w-0 flex-1">
          <span className="map-kicker text-[10px] text-primary">Uusi paikka Janopen maailmassa</span>
          <h2 className="mt-1 text-xl font-semibold text-foreground">Viara</h2>
          <p className="mt-1 leading-relaxed text-muted-foreground">Työ, joka näkyy. Kiinteistöjen ja ulkoalueiden ylläpidon digitaalinen toimintaympäristö.</p>
        </div>
        <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary transition-transform group-hover:translate-x-1" />
      </Link>

      <div className="flex flex-col gap-3 rounded-xl border border-border bg-card/60 p-5">
        <div className="flex items-center gap-3">
          <img src="/world/value-symbol.png" alt="" className="h-7 w-7 flex-shrink-0 object-contain" />
          <p className="map-kicker text-[10px] leading-relaxed text-foreground">Yhteinen perusta. Monia paikkoja.<br /><span className="text-gold">Rajattomasti mahdollisuuksia.</span></p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">Valitse alue kartalta tai listasta tutkiaksesi Janopen maailmaa.</p>
        <ul className="flex flex-col">
          {AREAS.map((area) => {
            const buildings = getBuildingsForAreaWithViara(area.id);
            return (
              <li key={area.id}>
                <Link href={`/alue/${area.slug}`} className="group flex items-center gap-3 border-b border-border/50 py-3 last:border-0">
                  <img src={area.emblem} alt="" className="h-10 w-10 flex-shrink-0 object-contain" />
                  <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <span className="leading-tight text-foreground transition-colors group-hover:text-gold">{area.name}</span>
                    {buildings.length > 0 && <div className="flex flex-wrap gap-1.5">{buildings.map((building) => <span key={building.id} className="rounded-full border px-2.5 py-0.5 text-[9px] text-muted-foreground" style={{ borderColor: `color-mix(in srgb, var(${area.accentVar}) 45%, transparent)` }}>{building.name}</span>)}</div>}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <GhostLink href="/meista" label="Lue lisää Janopesta" />
      <p className="sr-only">{WORLD_TAGLINE}</p>
    </Panel>
  );
}
