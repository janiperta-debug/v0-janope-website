import type { Metadata } from "next";
import { Panel, PanelBack, EmblemHeading } from "@/components/world/panel-ui";
import { VALUES } from "@/lib/janope-world";
import { getSiteLocale, localizeValue, SITE_TEXT } from "@/lib/site-i18n";

export const metadata: Metadata = {
  title: "About — Janope",
  description: "Janope builds digital places that matter. One shared foundation, many meaningful places.",
};

export default async function MeistaPage() {
  const locale = await getSiteLocale();
  const t = SITE_TEXT[locale];

  return (
    <Panel>
      <PanelBack href="/" label={t.backWorld} />
      <EmblemHeading logo title={t.aboutTitle} tagline={locale === "en" ? "One shared foundation, many meaningful places." : "Yhdistämme ihmiset, tiedon ja palvelut."} />

      <div className="flex flex-col gap-4 text-foreground">
        <p className="leading-relaxed">
          {locale === "en"
            ? "Janope is a one-person company building digital places where people can meet, manage, discover and grow. Each product is its own place, but they share the same foundation: identity, security, data and platform services."
            : "Janope on yhden hengen yritys, joka rakentaa digitaalisia paikkoja, joissa ihmiset voivat kohdata, hallita, löytää ja kasvaa. Jokainen tuote on oma paikkansa — mutta ne jakavat saman perustan: identiteetin, turvallisuuden, datan ja alustapalvelut."}
        </p>
        <p className="leading-relaxed">
          {locale === "en"
            ? "We connect communities, property, mobility, local life and sustainability into one secure and reliable ecosystem. New places emerge from real needs, and the ecosystem grows together with its users."
            : "Yhdistämme yhteisöt, omaisuuden, liikkumisen, lähielämän ja kestävyyden tulevaisuuden yhdeksi turvalliseksi ja luotettavaksi ekosysteemiksi. Uusia paikkoja syntyy tarpeista, ja ekosysteemi laajenee yhdessä käyttäjien kanssa."}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="map-kicker text-[11px] text-muted-foreground">{t.values}</h2>
        <div className="flex flex-col gap-5">
          {VALUES.map((value) => {
            const v = localizeValue(value, locale);
            return (
              <div key={value.title} className="flex items-start gap-4">
                <img src="/world/value-symbol.png" alt="" className="h-11 w-11 flex-shrink-0 object-contain" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg leading-tight text-foreground">{v.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-secondary/40 p-5">
        <div className="flex items-center gap-4">
          <img src="/world/value-symbol.png" alt="" className="h-9 w-9 flex-shrink-0 object-contain" />
          <p className="font-display text-lg leading-snug text-foreground">
            {t.commonBase}{" "}<span className="text-gold">{t.endless}</span>
          </p>
        </div>
      </div>
    </Panel>
  );
}
