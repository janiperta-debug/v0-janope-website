import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { STATUS_META, type BuildStatus } from "@/lib/janope-world";

/** Vasemman paneelin sisäinen kehys: tasainen pystyväli ja leveysrajoitus. */
export function Panel({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-6">{children}</div>;
}

export function PanelBack({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="map-kicker inline-flex items-center gap-2 text-[10px] text-muted-foreground transition-colors hover:text-foreground"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}

/** Alueen tunnus + nimi + lyhyt kuvaus */
export function EmblemHeading({
  emblem,
  title,
  tagline,
  logo,
}: {
  emblem?: string;
  title: string;
  tagline?: string;
  /** Näytä Janope-brändilogo geneerisen alue-tunnuksen sijaan */
  logo?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        {logo ? (
          <img
            src="/world/janope-compass.png"
            alt="Janope"
            className="h-14 w-14 flex-shrink-0 object-contain"
          />
        ) : emblem ? (
          <img
            src={emblem}
            alt=""
            className="h-14 w-14 flex-shrink-0 object-contain"
          />
        ) : null}

        <div className="flex flex-col">
          <h1 className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
            {title}
          </h1>
        </div>
      </div>

      {tagline && (
        <p className="text-lg italic leading-relaxed text-muted-foreground">
          {tagline}
        </p>
      )}
    </div>
  );
}

export function StatusBadge({ status }: { status: BuildStatus }) {
  const meta = STATUS_META[status];

  return (
    <span
      className={`map-kicker inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] ${meta.className}`}
    >
      {meta.label}
    </span>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-foreground">
          <Check className="mt-1 h-4 w-4 flex-shrink-0 text-gold" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Vahva tumma CTA-painike (esim. "Siirry alueelle", "Avaa palvelu") */
export function PrimaryLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="map-kicker inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-6 py-4 text-xs text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

/** Kevyt tekstilinkki nuolella */
export function GhostLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="map-kicker inline-flex items-center gap-2 text-[10px] text-foreground transition-all duration-300 hover:gap-3 hover:text-gold"
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
