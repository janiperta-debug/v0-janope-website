import Image from "next/image";
import { ArrowRight, FileText, MapPin, QrCode, Route, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Viara | Janope",
  description:
    "Viara tekee kiinteistöjen ja ulkoalueiden ylläpidosta näkyvää – työnjohdosta kentälle ja asukkaalle.",
};

const features = [
  { icon: MapPin, title: "Hoitoalueet", text: "Työ kohdistuu oikeille hoitoalueille ja työnjohto näkee kokonaisuuden yhdestä paikasta." },
  { icon: Route, title: "Työ syntyy tapahtumista", text: "Saapuminen, poistuminen ja tehdyt toimenpiteet muodostavat selkeän tapahtumahistorian ilman erillistä paperityötä." },
  { icon: QrCode, title: "Asukas mukaan", text: "Hoitoalueen QR-koodi avaa asukasnäkymän, jossa toteutunut työ ja havainnot ovat helposti nähtävissä." },
  { icon: FileText, title: "Päiväkirjat ja raportit", text: "Auraus- ja hiekoitustyöstä syntyy hoitopäiväkirja työn todentamista ja laskutuksen tukea varten." },
];

const steps = [
  ["01", "Työalue valitaan", "Työnjohto määrittelee organisaation hoitoalueet ja niiden tiedot."],
  ["02", "Työ tehdään", "Kentällä työ etenee hoitoalueelta toiselle ja Viara kirjaa tapahtumat työn mukana."],
  ["03", "Työ näkyy", "Työnjohto, asiakas ja asukas saavat työstä selkeän ja ajantasaisen jäljen."],
];

export default function ViaraPage() {
  return (
    <main className="min-h-screen bg-brushed text-foreground">
      <section className="border-b border-border/70 bg-card/75">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-24">
          <div>
            <Image src="https://raw.githubusercontent.com/janiperta-debug/Viara/main/public/viara-logo.png" alt="Viara" width={560} height={180} priority unoptimized className="logo-blend h-auto w-64 sm:w-80" />
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Työnjohto · kenttä · asukas</p>
            <h1 className="mt-4 max-w-3xl font-heading text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">Työ, joka näkyy.</h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">Viara tekee kiinteistöjen ja ulkoalueiden ylläpidosta selkeää – työnjohdosta kentälle ja aina asukkaalle asti.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://viara-tawny.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex h-12 items-center justify-center gap-2 rounded-xl px-7 font-semibold text-white transition-transform hover:-translate-y-0.5">Avaa Viara <ArrowRight className="h-4 w-4" /></a>
              <a href="#ominaisuudet" className="inline-flex h-12 items-center justify-center rounded-xl border border-border bg-card px-7 font-semibold text-foreground transition-colors hover:bg-white">Tutustu ominaisuuksiin</a>
            </div>
          </div>

          <div className="metal-card rounded-[1.5rem] p-5 sm:p-7">
            <div className="rounded-2xl border border-border bg-background/70 p-5">
              <div className="flex items-start justify-between gap-4">
                <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">Työnjohto</p><p className="mt-1 text-xl font-semibold text-foreground">Operatiivinen näkymä</p></div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">Ajantasalla</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[["24", "Hoitoaluetta"], ["18", "Valmiina"], ["4", "Käynnissä"], ["2", "Havaintoa"]].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-border bg-card p-4"><p className="text-3xl font-bold text-foreground">{value}</p><p className="mt-1 text-sm text-muted-foreground">{label}</p></div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-3"><div className="h-3 flex-1 overflow-hidden rounded-full bg-border"><div className="h-full w-[78%] rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500" /></div><span className="text-sm font-semibold text-foreground">78 %</span></div>
                <p className="mt-2 text-xs text-muted-foreground">Työalueiden tämänhetkinen eteneminen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ominaisuudet" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Yksi kokonaisuus</p><h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Työstä syntyy tieto.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Viara yhdistää työnjohdon, kentällä tehdyn työn, asiakkaan ja asukkaan samaan tapahtumaketjuun.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => { const Icon = feature.icon; return <article key={feature.title} className="metal-card rounded-2xl p-6 transition-transform hover:-translate-y-1"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div><h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.text}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-card/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Näin se toimii</p><h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Yksinkertainen työnkulku.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Viara ei lisää työhön erillistä raportointikerrosta. Se tekee työn etenemisestä näkyvää sitä mukaa kun työ tapahtuu.</p></div><div className="metal-card overflow-hidden rounded-2xl">{steps.map(([number, title, text]) => <div key={number} className="grid gap-4 border-b border-border p-6 last:border-0 sm:grid-cols-[64px_180px_1fr] sm:p-7"><span className="text-sm font-semibold tracking-[0.18em] text-primary">{number}</span><h3 className="text-lg font-semibold text-foreground">{title}</h3><p className="leading-relaxed text-muted-foreground">{text}</p></div>)}</div></div></div>
      </section>

      <section className="py-20 sm:py-24"><div className="mx-auto max-w-4xl px-5 text-center sm:px-8"><ShieldCheck className="mx-auto h-10 w-10 text-primary" /><h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Selkeä jälki tehdystä työstä.</h2><p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">Tapahtumahistoria, hoitopäiväkirjat ja asukasnäkymä muodostavat saman kokonaisuuden. Kun työ tehdään, siitä jää todistettava jälki.</p><div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">{["Auraus", "Hiekoitus", "Havainnot", "QR-asukasnäkymä", "PDF-raportit"].map((item) => <span key={item} className="rounded-full border border-border bg-card px-4 py-2">{item}</span>)}</div></div></section>
    </main>
  );
}
