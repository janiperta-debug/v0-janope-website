import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Panel,
  PanelBack,
  EmblemHeading,
  FeatureList,
  StatusBadge,
  PrimaryLink,
  GhostLink,
} from "@/components/world/panel-ui";
import {
  BUILDINGS,
  getArea,
  getBuilding,
  getAreaById,
} from "@/lib/janope-world";

export function generateStaticParams() {
  return BUILDINGS.map((building) => {
    const area = getAreaById(building.areaId);
    return { slug: area?.slug ?? "", building: building.slug };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; building: string }>;
}): Promise<Metadata> {
  const { building: buildingSlug } = await params;
  const building = getBuilding(buildingSlug);
  if (!building) return {};
  return {
    title: `${building.name} – Janope`,
    description: building.tagline,
  };
}

export default async function RakennusPage({
  params,
}: {
  params: Promise<{ slug: string; building: string }>;
}) {
  const { slug, building: buildingSlug } = await params;
  const area = getArea(slug);
  const building = getBuilding(buildingSlug);

  if (!area || !building || building.areaId !== area.id) notFound();

  return (
    <Panel>
      <PanelBack href={`/alue/${area.slug}`} label={`Takaisin: ${area.name}`} />

      <EmblemHeading
        icon={building.icon}
        accentVar={area.accentVar}
        kicker={area.kicker}
        title={building.name}
        tagline={building.tagline}
      />

      <StatusBadge status={building.status} />

      {/* Logo + kuvaus */}
      <div className="flex items-start gap-4">
        <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-card">
          <Image
            src={building.logo || "/placeholder.svg"}
            alt={`${building.name} logo`}
            width={64}
            height={64}
            className="h-auto w-auto object-contain"
          />
        </span>
        <p className="leading-relaxed text-muted-foreground">
          {building.description}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <span className="map-kicker text-[10px] text-muted-foreground">
          Mitä sisällä on
        </span>
        <FeatureList items={building.features} />
      </div>

      {/* CTA – ohjaa Janopen omalle tuotesivulle (landing + demo yhdestä ovesta) */}
      {building.link ? (
        <PrimaryLink href={`/${building.slug}`} label={building.linkText} />
      ) : (
        <span className="map-kicker inline-flex w-fit items-center rounded-lg border border-dashed border-border px-6 py-4 text-xs text-muted-foreground">
          {building.linkText}
        </span>
      )}

      <GhostLink href={`/alue/${area.slug}`} label={`Katso koko ${area.name}`} />
    </Panel>
  );
}
