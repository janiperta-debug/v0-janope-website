import type { Metadata } from "next";
import { Mail, Phone, Globe } from "lucide-react";
import { Panel, PanelBack, EmblemHeading } from "@/components/world/panel-ui";
import { ContactForm } from "@/components/world/contact-form";
import { getSiteLocale, SITE_TEXT } from "@/lib/site-i18n";

export const metadata: Metadata = {
  title: "Contact — Janope",
  description: "Get in touch with Janope about products and collaboration.",
};

const CONTACT_DETAILS = [
  { icon: Mail, fi: "Sähköposti", en: "Email", value: "info@janope.fi", href: "mailto:info@janope.fi" },
  { icon: Phone, fi: "Puhelin", en: "Phone", value: "+358 400 982177", href: "tel:+358400982177" },
  { icon: Globe, fi: "Verkkosivu", en: "Website", value: "www.janope.fi", href: "https://www.janope.fi" },
];

export default async function YhteystiedotPage() {
  const locale = await getSiteLocale();
  const t = SITE_TEXT[locale];

  return (
    <Panel>
      <PanelBack href="/" label={t.backWorld} />
      <EmblemHeading logo title={t.contact} />

      <p className="leading-relaxed text-muted-foreground">{t.contactLead}</p>

      <div className="flex flex-col gap-4">
        {CONTACT_DETAILS.map((item) => {
          const Icon = item.icon;
          return (
            <a key={item.value} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="transition-opacity hover:opacity-70">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60">
                  <Icon className="h-5 w-5 text-gold" />
                </span>
                <div className="flex flex-col">
                  <span className="map-kicker text-[10px] text-muted-foreground">{locale === "en" ? item.en : item.fi}</span>
                  <span className="text-foreground">{item.value}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="h-px bg-border" />

      <div className="flex flex-col gap-5">
        <h2 className="map-kicker text-[11px] text-muted-foreground">{t.sendMessage}</h2>
        <ContactForm />
        <p className="text-xs italic leading-relaxed text-muted-foreground">{t.privacyNote}</p>
      </div>
    </Panel>
  );
}
