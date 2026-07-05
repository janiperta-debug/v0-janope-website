import type { Metadata } from "next";
import { Panel, PanelBack, EmblemHeading } from "@/components/world/panel-ui";
import { WorldIcon } from "@/components/world/world-icon";
import { VALUES, WORLD_TAGLINE } from "@/lib/janope-world";

export const metadata: Metadata = {
  title: "Meistä — Janope",
  description:
    "Janope rakentaa digitaalisia paikkoja, joilla on merkitystä. Yksi yhteinen perusta, monta merkityksellistä paikkaa.",
};

export default function MeistaPage() {
  return (
    <Panel>
      <PanelBack href="/" label="Takaisin maailmaan" />

      <EmblemHeading
        logo
        icon="Compass"
        accentVar="--gold"
        kicker="Meistä"
        title="Janope — yhteinen maailmamme"
        tagline={WORLD_TAGLINE}
      />

      <div className="flex flex-col gap-4 text-foreground">
        <p className="leading-relaxed">
          Janope on yhden hengen yritys, joka rakentaa digitaalisia paikkoja,
          joissa ihmiset voivat kohdata, hallita, löytää ja kasvaa. Jokainen
          tuote on oma paikkansa — mutta ne jakavat saman perustan:
          identiteetin, turvallisuuden, datan ja alustapalvelut.
        </p>
        <p className="leading-relaxed">
          Yhdistämme yhteisöt, omaisuuden, liikkumisen, lähielämän ja
          kestävyyden tulevaisuuden yhdeksi turvalliseksi ja luotettavaksi
          ekosysteemiksi. Uusia paikkoja syntyy tarpeista, ja ekosysteemi
          laajenee yhdessä käyttäjien kanssa.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="map-kicker text-[11px] text-muted-foreground">Arvomme</h2>
        <div className="flex flex-col gap-5">
          {VALUES.map((value) => (
            <div key={value.title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60">
                <WorldIcon name={value.icon} className="h-5 w-5 text-gold" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-lg leading-tight text-foreground">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-secondary/40 p-5">
        <div className="flex items-center gap-4">
          <WorldIcon name="Compass" className="h-9 w-9 flex-shrink-0 text-gold" />
          <p className="font-display text-lg leading-snug text-foreground">
            Yhteinen perusta. Monia paikkoja.{" "}
            <span className="text-gold">Rajattomasti mahdollisuuksia.</span>
          </p>
        </div>
      </div>
    </Panel>
  );
}
