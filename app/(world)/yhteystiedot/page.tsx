import type { Metadata } from "next";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Panel, PanelBack, EmblemHeading } from "@/components/world/panel-ui";
import { ContactForm } from "@/components/world/contact-form";

export const metadata: Metadata = {
  title: "Yhteystiedot — Janope",
  description:
    "Haluatko tietää lisää Janopesta tai keskustella yhteistyömahdollisuuksista? Ota rohkeasti yhteyttä.",
};

const CONTACT_DETAILS = [
  { icon: Mail, label: "Sähköposti", value: "info@janope.fi", href: "mailto:info@janope.fi" },
  { icon: Phone, label: "Puhelin", value: "+358 40 123 4567", href: "tel:+358401234567" },
  { icon: MapPin, label: "Osoite", value: "Janopen aukio 1, 00100 Helsinki, Suomi" },
  { icon: Globe, label: "Verkkosivu", value: "www.janope.fi", href: "https://www.janope.fi" },
];

export default function YhteystiedotPage() {
  return (
    <Panel>
      <PanelBack href="/" label="Takaisin maailmaan" />

      <EmblemHeading
        icon="Mail"
        accentVar="--gold"
        kicker="Yhteystiedot"
        title="Yhteystiedot"
      />

      <p className="leading-relaxed text-muted-foreground">
        Haluatko tietää lisää Janopesta tai keskustella yhteistyömahdollisuuksista?
        Ota rohkeasti yhteyttä – vastaamme mielellämme.
      </p>

      <div className="flex flex-col gap-4">
        {CONTACT_DETAILS.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60">
                <Icon className="h-5 w-5 text-gold" />
              </span>
              <div className="flex flex-col">
                <span className="map-kicker text-[10px] text-muted-foreground">
                  {item.label}
                </span>
                <span className="text-foreground">{item.value}</span>
              </div>
            </div>
          );
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition-opacity hover:opacity-70"
            >
              {content}
            </a>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </div>

      <div className="h-px bg-border" />

      <div className="flex flex-col gap-5">
        <h2 className="map-kicker text-[11px] text-muted-foreground">
          Lähetä viesti
        </h2>
        <ContactForm />
        <p className="text-xs italic leading-relaxed text-muted-foreground">
          Käsittelemme tietojasi tietosuojaselosteemme mukaisesti. Emme jaa
          tietojasi eteenpäin.
        </p>
      </div>
    </Panel>
  );
}
