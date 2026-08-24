"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass } from "lucide-react";
import { AREAS, getArea, type Area } from "@/lib/janope-world";
import { WorldIcon } from "./world-icon";

interface Focus {
  x: number;
  y: number;
  scale: number;
  activeAreaSlug: string | null;
}

function resolveFocus(pathname: string): Focus {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === "alue" && segments[1]) {
    const area = getArea(segments[1]);
    if (area) {
      const isBuilding = Boolean(segments[2]);
      return {
        x: area.focus.x,
        y: area.focus.y,
        scale: area.focus.scale + (isBuilding ? 0.5 : 0),
        activeAreaSlug: area.slug,
      };
    }
  }
  return { x: 50, y: 50, scale: 1, activeAreaSlug: null };
}

function Hotspot({
  area,
  activeAreaSlug,
  scale,
}: {
  area: Area;
  activeAreaSlug: string | null;
  scale: number;
}) {
  const isActive = activeAreaSlug === area.slug;
  const isDimmed = activeAreaSlug !== null && !isActive;

  // Sijoita nimilappu kartan reunasta poispäin
  const labelLeft = area.hotspot.x > 58;

  return (
    <div
      className="group pointer-events-none absolute z-10"
      style={{
        left: `${area.hotspot.x}%`,
        top: `${area.hotspot.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Hotspot-nappi on ainoa klikattava osa */}
      <div
        className="map-zoom flex items-center gap-2"
        style={{
          transform: `scale(${1 / scale})`,
          transformOrigin: "center",
          flexDirection: labelLeft ? "row-reverse" : "row",
        }}
      >
        <Link
  href={`/alue/${area.slug}`}
  aria-label={`${area.name} – ${area.tagline}`}
  className={`pointer-events-auto flex h-16 w-16 flex-shrink-0 items-center justify-center transition-all duration-300 ${
    isActive ? "marker-pulse scale-110" : ""
  } ${isDimmed ? "opacity-40" : "opacity-100"}`}
>
  <img
    src={area.emblem}
    alt=""
    className="h-full w-full object-contain drop-shadow-lg"
  />
</Link>

        {/* Nimikilpi on vain visuaalinen – ei ole klikattava */}
        <span
          className={`pointer-events-none flex max-w-[180px] flex-col rounded-lg border border-border bg-card/95 px-3 py-1.5 shadow-md transition-opacity duration-300 ${
            isActive
              ? "opacity-100"
              : isDimmed
                ? "opacity-0"
                : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
          }`}
          style={{ textAlign: labelLeft ? "right" : "left" }}
        >
          <span className="map-kicker text-[9px] text-muted-foreground">
            {area.kicker}
          </span>
          <span className="font-display text-sm leading-tight text-foreground">
            {area.name}
          </span>
        </span>
      </div>
    </div>
  );
}

export function WorldMap() {
  const pathname = usePathname();
  const focus = resolveFocus(pathname);
  const isWorld = focus.activeAreaSlug === null;

  const zoomTransform = {
    transform: `scale(${focus.scale}) translate(${50 - focus.x}%, ${50 - focus.y}%)`,
    transformOrigin: "center" as const,
  };

  return (
    <div className="relative aspect-[1382/921] max-h-full w-full max-w-full">
      {/* Kuvakerros: rajattu pyöristettyyn kehykseen */}
      <div className="parchment-texture absolute inset-0 overflow-hidden rounded-xl border border-border/60 shadow-sm">
        <div className="map-zoom absolute inset-0" style={zoomTransform}>
          <img
            src="/world/world-map.jpg"
            alt="Janopen maailmankartta"
            className="absolute inset-0 h-full w-full object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* Hotspot-kerros: maailmanäkymässä rajaamaton (reunanapit näkyvät kokonaan),
          alueeseen zoomatessa rajattu kehykseen ettei muiden alueiden napit vuoda ulos */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          isWorld ? "" : "overflow-hidden rounded-xl"
        }`}
      >
        <div
          className="map-zoom pointer-events-none absolute inset-0"
          style={zoomTransform}
        >
          {/* Keskuksen klikattava hub (kartan kultainen solmu) */}
          <Link
            href="/"
            aria-label="Palaa koko maailmaan"
            className="pointer-events-auto absolute left-1/2 top-[45%] z-10 h-[12%] w-[12%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          />

          {/* Alueiden hotspotit */}
          {AREAS.map((area) => (
            <Hotspot
              key={area.id}
              area={area}
              activeAreaSlug={focus.activeAreaSlug}
              scale={focus.scale}
            />
          ))}
        </div>
      </div>

      {/* Paluu koko maailmaan -painike (näkyy kun ollaan alueella) */}
      {!isWorld && (
        <Link
          href="/"
          className="map-kicker absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2 text-[10px] text-foreground shadow-md backdrop-blur-sm transition-colors hover:text-gold"
        >
          <Compass className="h-4 w-4" />
          Koko maailma
        </Link>
      )}
    </div>
  );
}
