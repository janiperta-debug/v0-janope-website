import Link from "next/link";
import { getSiteLocale, localizeArea, localizeValue, SITE_TEXT } from "@/lib/site-i18n";
import { Panel, GhostLink } from "@/components/world/panel-ui";
import { AREAS, VALUES, WORLD_TAGLINE } from "@/lib/janope-world";
import { getBuildingsForAreaWithViara } from "@/lib/janope-viara";

export default async function EtusivuPage() {\n  const locale = await getSiteLocale();\n  const t = SITE_TEXT[locale];
  return (
    <Panel>
      <div className="flex flex-col gap-4">
        <span className="map-kicker text-[10px] text-muted-foreground">{t.worldKicker}</span>
        <h1 className="font-display text-3xl leading-tight text-foreground sm:text-4xl text-balance">{t.homeTitle}</h1>
        <p className="text-lg italic leading-relaxed text-muted-foreground">{t.homeLead}</p>
      </div>

      <div className="flex flex-col gap-4">
        <span className="map-kicker text-[10px] text-muted-foreground">{t.values}</span>
        <ul className="flex flex-col gap-4">
          {VALUES.map((value) => { const v = localizeValue(value, locale); return (
            <li key={value.title} className="flex items-start gap-3">
              <img src="/world/value-symbol.png" alt="" className="h-9 w-9 flex-shrink-0 object-contain" />
              <div className="flex flex-col">
                <span className="map-kicker text-[10px] text-foreground">{v.title}</span>
                <span className="leading-relaxed text-muted-foreground">{v.text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>


      <div className="flex flex-col gap-3 rounded-xl border border-border bg-card/60 p-5">
        <div className="flex items-center gap-3">
          <img src="/world/value-symbol.png" alt="" className="h-7 w-7 flex-shrink-0 object-contain" />
          <p className="map-kicker text-[10px] leading-relaxed text-foreground">{t.commonBase}<br /><span className="text-gold">{t.endless}</span></p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{t.chooseArea}<p>
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

      <GhostLink href="/meista" label={t.more} />
      <p className="sr-only">{WORLD_TAGLINE}</p>
    </Panel>
  );
}
