import type { Metadata } from "next";
import { Panel, PanelBack, EmblemHeading } from "@/components/world/panel-ui";
import { NEWS } from "@/lib/janope-world";
import { getSiteLocale, localizeNews, SITE_TEXT } from "@/lib/site-i18n";

export const metadata: Metadata = {
  title: "News — Janope",
  description: "News and stories from Janope and the making of digital places.",
};

export default async function UutisetPage() {
  const locale = await getSiteLocale();
  const t = SITE_TEXT[locale];

  return (
    <Panel>
      <PanelBack href="/" label={t.backWorld} />
      <EmblemHeading logo title={t.news} tagline={t.newsLead} />

      <div className="flex flex-col">
        {NEWS.map((rawItem, index) => {
          const item = localizeNews(rawItem, locale);
          return (
            <article key={item.slug} className={`flex flex-col gap-2 py-5 ${index > 0 ? "border-t border-border" : ""}`}>
              <div className="flex items-center gap-3">
                <span className="map-kicker text-[10px] text-gold">{item.category}</span>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
              <h2 className="font-display text-xl leading-tight text-foreground text-pretty">{item.title}</h2>
              <p className="leading-relaxed text-muted-foreground">{item.excerpt}</p>
            </article>
          );
        })}
      </div>

      <p className="text-sm italic leading-relaxed text-muted-foreground">{t.newsMore}</p>
    </Panel>
  );
}
