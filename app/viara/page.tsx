import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardList,
  FileText,
  MapPin,
  QrCode,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Viara | Janope",
  description:
    "Viara tekee kiinteistöjen ja ulkoalueiden ylläpidosta näkyvää – työnjohdosta kentälle ja asukkaalle.",
};

function ViaraMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-14">
        <span className="absolute left-0 top-1 h-8 w-5 -skew-x-[22deg] rounded-full bg-gradient-to-br from-cyan-300 to-cyan-600 shadow-sm" />
        <span className="absolute right-1 top-0 h-8 w-5 skew-x-[22deg] rounded-full bg-gradient-to-br from-sky-500 to-blue-700 shadow-sm" />
      </div>
      <span className="text-xl font-black tracking-[0.28em] text-white">VIARA</span>
    </div>
  );
}

const features = [
  {
    icon: MapPin,
    title: "Hoitoalueet",
    text: "Työ kohdistuu oikeisiin hoitoalueisiin. Työnjohto näkee kokonaisuuden ja kenttätyö pysyy selkeänä.",
  },
  {
    icon: Route,
    title: "Työ syntyy tapahtumista",
    text: "Saapuminen, poistuminen ja tehdyt toimenpiteet muodostavat tapahtumahistorian ilman erillistä paperityötä.",
  },
  {
    icon: QrCode,
    title: "Asukas mukaan",
    text: "Hoitoalueen QR-koodi avaa asukasnäkymän, jossa toteutunut työ ja havainnot ovat helposti nähtävissä.",
  },
  {
    icon: FileText,
    title: "Päiväkirjat ja raportit",
    text: "Auraus- ja hiekoitustyöstä syntyy selkeä hoitopäiväkirja, jota voidaan käyttää työn todentamiseen ja laskutuksen tukena.",
  },
];

const steps = [
  ["01", "Työalue valitaan", "Työnjohto määrittelee organisaation hoitoalueet ja niiden tiedot."],
  ["02", "Työ tehdään", "Kentällä työ etenee hoitoalueelta toiselle ja Viara kirjaa tapahtumat työn mukana."],
  ["03", "Työ näkyy", "Työnjohto, asiakas ja asukas saavat työstä selkeän ja ajantasaisen jäljen."],
];

export default function ViaraPage() {
  return (
    <div className="min-h-screen bg-[#07111c] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111c]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/viara" aria-label="Viara" className="flex items-center">
            <ViaraMark />
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#ominaisuudet" className="transition-colors hover:text-white">Ominaisuudet</a>
            <a href="#miten" className="transition-colors hover:text-white">Miten Viara toimii</a>
            <a href="#yhteys" className="transition-colors hover:text-white">Yhteys</a>
            <a
              href="https://viara-tawny.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-semibold text-white shadow-lg shadow-cyan-950/30"
            >
              Avaa Viara
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(20,184,166,.18),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(37,99,235,.2),transparent_34%)]" />
          <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Työnjohto · kenttä · asukas
              </div>
              <div className="mb-7">
                <ViaraMark />
              </div>
              <h1 className="max-w-3xl text-balance text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Työ, joka näkyy.
              </h1>
              <p className="mt-7 max-w-2xl text-pretty text-xl leading-relaxed text-slate-300 sm:text-2xl">
                Viara tekee kiinteistöjen ja ulkoalueiden ylläpidosta selkeää –
                työnjohdosta kentälle ja aina asukkaalle asti.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://viara-tawny.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 font-semibold text-white shadow-xl shadow-cyan-950/30 transition-transform hover:-translate-y-0.5"
                >
                  Avaa Viara
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#ominaisuudet"
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 font-semibold text-slate-200 backdrop-blur transition-colors hover:bg-white/10"
                >
                  Tutustu ominaisuuksiin
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-10 rounded-[3rem] bg-cyan-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.4rem] border border-white/10 bg-[#0b1825] p-5">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Työnjohto</p>
                      <p className="mt-1 text-lg font-semibold text-white">Operatiivinen näkymä</p>
                    </div>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">Ajantasalla</span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      ["Hoitoalueet", "24", "MapPin"],
                      ["Valmiina", "18", "Check"],
                      ["Käynnissä", "4", "Route"],
                      ["Havainnot", "2", "ClipboardList"],
                    ].map(([label, value, icon]) => {
                      const Icon = icon === "Check" ? Check : icon === "Route" ? Route : icon === "ClipboardList" ? ClipboardList : MapPin;
                      return (
                        <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                          <Icon className="h-4 w-4 text-cyan-300" />
                          <p className="mt-5 text-3xl font-bold text-white">{value}</p>
                          <p className="mt-1 text-sm text-slate-400">{label}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 rounded-xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-red-400 via-amber-300 to-emerald-400" />
                      </div>
                      <span className="text-sm font-semibold text-white">78 %</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-400">Työalueiden tämänhetkinen eteneminen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ominaisuudet" className="border-b border-white/10 bg-[#091522] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Yksi kokonaisuus</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Työstä syntyy tieto.</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-400">
                Viara yhdistää työnjohdon, kentällä tehdyn työn, asiakkaan ja asukkaan samaan tapahtumaketjuun.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.055]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/15 to-blue-500/15 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-400">{feature.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="miten" className="border-b border-white/10 bg-[#07111c] py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Näin se toimii</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Yksinkertainen työnkulku.</h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
                  Viara ei lisää työhön erillistä raportointikerrosta. Se tekee työn etenemisestä näkyvää sitä mukaa kun työ tapahtuu.
                </p>
              </div>
              <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.025]">
                {steps.map(([number, title, text]) => (
                  <div key={number} className="grid gap-4 p-6 sm:grid-cols-[72px_180px_1fr] sm:items-start sm:p-8">
                    <span className="text-sm font-semibold tracking-[0.18em] text-cyan-300">{number}</span>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="leading-relaxed text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#091522] py-24">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <ShieldCheck className="mx-auto h-10 w-10 text-cyan-300" />
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">Selkeä jälki tehdystä työstä.</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-400">
              Tapahtumahistoria, hoitopäiväkirjat ja asukasnäkymä muodostavat saman kokonaisuuden. Kun työ tehdään, siitä jää todistettava jälki.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
              {["Auraus", "Hiekoitus", "Havainnot", "QR-asukasnäkymä", "PDF-raportit"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="yhteys" className="bg-gradient-to-br from-[#0b1d2b] via-[#092133] to-[#07111c] py-24">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <Users className="mx-auto h-9 w-9 text-cyan-300" />
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Haluatko nähdä Viaran käytännössä?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              Viara on nyt pilotointivaiheessa. Tutustu sovellukseen tai ota yhteyttä, jos haluat keskustella pilotista.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://viara-tawny.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 font-semibold text-white"
              >
                Avaa Viara
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@janope.fi?subject=Viara"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 font-semibold text-slate-200 hover:bg-white/10"
              >
                Ota yhteyttä
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050c14]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© 2026 T:mi Janope</span>
          <div className="flex gap-5">
            <Link href="/tietosuoja" className="hover:text-slate-300">Tietosuojaseloste</Link>
            <Link href="/kayttoehdot" className="hover:text-slate-300">Käyttöehdot</Link>
            <Link href="/" className="hover:text-slate-300">Janope</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
