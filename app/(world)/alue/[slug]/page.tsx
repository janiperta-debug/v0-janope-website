import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Panel, PanelBack, EmblemHeading, FeatureList, StatusBadge } from "@/components/world/panel-ui";
import { AREAS, getArea } from "@/lib/janope-world";
import { getBuildingsForAreaWithViara } from "@/lib/janope-viara";
import { getSiteLocale, localizeArea, localizeBuilding, SITE_TEXT } from "@/lib/site-i18n";

export function generateStaticParams() { return AREAS.map((area) => ({ slug: area.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return { title: `${area.name} – Janope`, description: area.tagline };
}

export default async function AluePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const locale = await getSiteLocale();
  const t = SITE_TEXT[locale];
  const localizedArea = localizeArea(area, locale);
  const buildings = getBuildingsForAreaWithViara(area.id).map((building) => localizeBuilding(building, locale));

  return (
    <Panel>
      <PanelBack href="/" label={t.backWorld} />
      <EmblemHeading emblem={area.emblem} title={localizedArea.name} tagline={localizedArea.tagline} />
      <p className="leading-relaxed text-muted-foreground">{localizedArea.description}</p>
      <FeatureList items={localizedArea.highlights} />
      <div className="flex flex-col gap-3">
        <span className="map-kicker text-[10px] text-muted-foreground">{buildings.length > 1 ? t.buildings : t.building}</span>
        <ul className="flex flex-col gap-3">
          {buildings.map((building) => (
            <li key={building.id}>
              <Link href={`/alue/${area.slug}/${building.slug}`} className="group flex items-center gap-4 rounded-xl border-2 border-gold/50 bg-card/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-md">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
                  <img src={building.logo || "/placeholder.svg"} alt={`${building.name} logo`} className="h-auto max-h-9 w-auto max-w-9 object-contain" />
                </span>
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-lg leading-none text-foreground transition-colors group-hover:text-gold">{building.name}</span>
                    <StatusBadge status={building.status} />
                  </div>
                  <span className="text-sm leading-snug text-muted-foreground">{building.tagline}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}
