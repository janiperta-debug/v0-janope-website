import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Panel,
  PanelBack,
  EmblemHeading,
  FeatureList,
  StatusBadge,
} from "@/components/world/panel-ui";
import { WorldIcon } from "@/components/world/world-icon";
import {
  AREAS,
  getArea,
  getBuildingsForArea,
} from "@/lib/janope-world";

export function generateStaticParams() {
  return AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `${area.name} – Janope`,
    description: area.tagline,
  };
}

export default async function AluePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const buildings = getBuildingsForArea(area.id);

  return (
    <Panel>
      <PanelBack href="/" label="Takaisin maailmaan" />

      <EmblemHeading
  emblem={area.emblem}
  title={area.name}
  tagline={area.tagline}
/>

      <p className="leading-relaxed text-muted-foreground">{area.description}</p>

      <FeatureList items={area.highlights} />

      {/* Alueen rakennukset */}
      <div className="flex flex-col gap-3">
        <span className="map-kicker text-[10px] text-muted-foreground">
          {buildings.length > 1 ? "Alueen rakennukset" : "Alueen rakennus"}
        </span>
        <ul className="flex flex-col gap-3">
          {buildings.map((building) => (
            <li key={building.id}>
              <Link
                href={`/alue/${area.slug}/${building.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-md"
              >
                <span
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `var(${area.accentVar})` }}
                >
                  <img
  src={building.logo}
  alt=""
  className="h-8 w-8 object-contain"
/>
                </span>
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-lg leading-none text-foreground transition-colors group-hover:text-gold">
                      {building.name}
                    </span>
                    <StatusBadge status={building.status} />
                  </div>
                  <span className="text-sm leading-snug text-muted-foreground">
                    {building.tagline}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}
