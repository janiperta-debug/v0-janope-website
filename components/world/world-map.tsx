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
  return { x: 50, y: 45, scale: 1, activeAreaSlug: null };
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
    <Link
      href={`/alue/${area.slug}`}
      aria-label={`${area.name} – ${area.tagline}`}
      className="group absolute z-10"
      style={{
        left: `${area.hotspot.x}%`,
        top: `${area.hotspot.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Vastaskaalaus pitää merkin samankokoisena zoomista riippumatta */}
      <div
        className="map-zoom flex items-center gap-2"
        style={{
          transform: `scale(${1 / scale})`,
          transformOrigin: "center",
          flexDirection: labelLeft ? "row-reverse" : "row",
        }}
      >
        <span
          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border-2 shadow-lg transition-all duration-300 ${
            isActive
              ? "border-gold-bright marker-pulse scale-110"
              : "border-card/80"
          } ${isDimmed ? "opacity-40" : "opacity-100"}`}
          style={{ backgroundColor: `var(${area.accentVar})` }}
        >
          <WorldIcon name={area.icon} className="h-5 w-5 text-card" />
        </span>

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
    </Link>
  );
}

export function WorldMap() {
  const pathname = usePathname();
  const focus = resolveFocus(pathname);
  const isWorld = focus.activeAreaSlug === null;

  return (
    <div className="parchment-texture relative aspect-[1382/921] max-h-full w-full max-w-full overflow-hidden rounded-xl border border-border/60 shadow-sm">
      {/* Zoomattava kartta-alusta */}
      <div
        className="map-zoom absolute inset-0"
        style={{
          transform: `scale(${focus.scale}) translate(${50 - focus.x}%, ${50 - focus.y}%)`,
          transformOrigin: "center",
        }}
      >
        {/* Maailmakartta */}
        <img
          src="/world/world-map.jpg"
          alt="Janopen maailmankartta"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        {/* Keskuksen klikattava hub (kartan kultainen solmu) */}
        <Link
          href="/"
          aria-label="Palaa koko maailmaan"
          className="absolute left-1/2 top-[45%] z-10 h-[12%] w-[12%] -translate-x-1/2 -translate-y-1/2 rounded-full"
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
