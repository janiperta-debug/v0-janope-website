import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Panel, PanelBack, EmblemHeading, FeatureList, StatusBadge, PrimaryLink, GhostLink } from "@/components/world/panel-ui";
import { BUILDINGS, getArea, getAreaById } from "@/lib/janope-world";
import { getBuildingWithViara } from "@/lib/janope-viara";
import { getSiteLocale, localizeArea, localizeBuilding, SITE_TEXT } from "@/lib/site-i18n";

export function generateStaticParams() {
  return BUILDINGS.map((building) => {
    const area = getAreaById(building.areaId);
    return { slug: area?.slug ?? "", building: building.slug };
  });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; building: string }> }): Promise<Metadata> {
  const { building: buildingSlug } = await params;
  const building = getBuildingWithViara(buildingSlug);
  if (!building) return {};
  return { title: `${building.name} – Janope`, description: building.tagline };
}

export default async function RakennusPage({ params }: { params: Promise<{ slug: string; building: string }> }) {
  const { slug, building: buildingSlug } = await params;
  const area = getArea(slug);
  const building = getBuildingWithViara(buildingSlug);
  if (!area || !building || building.areaId !== area.id) notFound();

  const locale = await getSiteLocale();
  const t = SITE_TEXT[locale];
  const localizedArea = localizeArea(area, locale);
  const localizedBuilding = localizeBuilding(building, locale);

  return (
    <Panel>
      <PanelBack href={`/alue/${area.slug}`} label={`${t.back} ${localizedArea.name}`} />
      <EmblemHeading title={localizedBuilding.name} tagline={localizedBuilding.tagline} />
      <StatusBadge status={building.status} locale={locale} />
      <div className="flex items-start gap-4">
        <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-card">
          <img src={building.logo || "/placeholder.svg"} alt={`${building.name} logo`} width={64} height={64} className="h-auto max-h-14 w-auto max-w-14 object-contain" />
        </span>
        <p className="leading-relaxed text-muted-foreground">{localizedBuilding.description}</p>
      </div>
      <div className="flex flex-col gap-3">
        <span className="map-kicker text-[10px] text-muted-foreground">{t.whatInside}</span>
        <FeatureList items={localizedBuilding.features} />
      </div>
      {localizedBuilding.link ? <PrimaryLink href={localizedBuilding.link} label={localizedBuilding.linkText} /> : <span className="map-kicker inline-flex w-fit items-center rounded-lg border border-dashed border-border px-6 py-4 text-xs text-muted-foreground">{localizedBuilding.linkText}</span>}
      <GhostLink href={`/alue/${area.slug}`} label={`${t.viewArea} ${localizedArea.name}`} />
    </Panel>
  );
}
