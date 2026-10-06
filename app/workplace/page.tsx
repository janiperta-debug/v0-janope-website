import Link from "next/link";
import { ArrowRight, Check, Layers3, UsersRound, Workflow, BarChart3 } from "lucide-react";
import { getSiteLocale } from "@/lib/site-i18n";

export const metadata = {
  title: "Samstila | Janope",
  description:
    "Samstila on yrityksen oma digitaalinen työtila, joka kokoaa ihmiset, asiakkaat, tehtävät ja tärkeät prosessit yhteen paikkaan.",
};

const copy = {
  fi: {
    back: "← Janope",
    kicker: "JANOPE SAMSTILA",
    title: "Yrityksen oma digitaalinen työtila.",
    lead:
      "Samstila kokoaa ihmiset, asiakkaat, tehtävät ja tärkeät prosessit yhteen paikkaan – selkeästi ja juuri yrityksesi tarpeisiin.",
    primary: "Tutustu Samstilaen",
    secondary: "Ota yhteyttä",
    introKicker: "Yksi työtila. Oma tapa toimia.",
    introTitle: "Kaikki tärkeä samassa paikassa.",
    intro:
      "Samstila auttaa pitämään yrityksen arjen koossa. Sen ympärille voidaan rakentaa juuri ne näkymät ja toiminnot, joita organisaatio oikeasti tarvitsee.",
    cards: [
      ["Ihmiset", "Pidä asiakkaat, yhteyshenkilöt ja käyttäjät yhdessä näkymässä.", UsersRound],
      ["Työ", "Hallinnoi tehtäviä, projekteja ja päivittäistä tekemistä.", Workflow],
      ["Tieto", "Kokoa raportit, viestintä ja muu olennainen tieto samaan työtilaan.", BarChart3],
      ["Oma rakenne", "Samstila mukautuu yrityksen toimintatapaan eikä päinvastoin.", Layers3],
    ],
    flowKicker: "Miten Samstila toimii?",
    flowTitle: "Yksi paikka, josta työ lähtee liikkeelle.",
    steps: [
      ["01", "Keskus", "Näe yhdellä silmäyksellä, mitä juuri nyt tapahtuu ja mihin kannattaa kiinnittää huomiota."],
      ["02", "Työtilat", "Siirry asiakkaisiin, projekteihin, tehtäviin, viestintään tai muihin yrityksesi tarvitsemiin kokonaisuuksiin."],
      ["03", "Toiminta", "Tee työ samassa ympäristössä ja pidä tieto siellä, missä sitä tarvitaan."],
    ],
    demoKicker: "Interaktiivinen demo",
    demoTitle: "Tutustu Samstilaen käytännössä.",
    demoText:
      "Oikea Samstila on jo käytössä Janopeella. Rakennamme parhaillaan siitä verkkosivulle rajattua demo-versiota, jossa pääset tutkimaan työtilaa itse.",
    demoButton: "Demo tulossa",
    ctaKicker: "Rakennetaan oma Samstila",
    ctaTitle: "Työtila, joka sopii teidän tapaamme tehdä työtä.",
    ctaText:
      "Samstila ei ole yksi valmis käyttöliittymä kaikille. Se voidaan rakentaa yrityksen omien tarpeiden, prosessien ja käyttäjien ympärille.",
    ctaButton: "Keskustele Samstilasta",
  },
  en: {
    back: "← Janope",
    kicker: "JANOPE SAMSTILA",
    title: "Your company's own digital workspace.",
    lead:
      "Samstila brings people, customers, tasks and important processes together in one place – clearly and around the way your company works.",
    primary: "Explore Samstila",
    secondary: "Get in touch",
    introKicker: "One workspace. Your way of working.",
    introTitle: "Everything important, in one place.",
    intro:
      "Samstila keeps everyday work together. It can be shaped around the views and functions an organisation actually needs.",
    cards: [
      ["People", "Keep customers, contacts and users together in one view.", UsersRound],
      ["Work", "Manage tasks, projects and everyday operations.", Workflow],
      ["Information", "Bring reports, communication and other important information together.", BarChart3],
      ["Your structure", "Samstila adapts to the company instead of the other way around.", Layers3],
    ],
    flowKicker: "How Samstila works",
    flowTitle: "One place to start the work.",
    steps: [
      ["01", "Central view", "See at a glance what is happening now and what needs attention."],
      ["02", "Work areas", "Move into customers, projects, tasks, communication or other areas your company needs."],
      ["03", "Action", "Do the work in the same environment and keep information where it is needed."],
    ],
    demoKicker: "Interactive demo",
    demoTitle: "Experience Samstila in practice.",
    demoText:
      "A real Samstila is already in use at Janope. We are preparing a public demo version so you can explore the workspace yourself.",
    demoButton: "Demo coming soon",
    ctaKicker: "Build your own Samstila",
    ctaTitle: "A workspace that fits the way you work.",
    ctaText:
      "Samstila is not one fixed interface for everyone. It can be shaped around your company's needs, processes and users.",
    ctaButton: "Talk about Samstila",
  },
} as const;

export default async function SamstilaPage() {
  const locale = await getSiteLocale();
  const t = copy[locale];

  return (
    <main className="min-h-screen bg-[#21150d] text-[#eee4d6]">
      <nav className="border-b border-[#5a4228] bg-[#21150d]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="text-sm text-[#b8aa9b] transition hover:text-[#eee4d6]">{t.back}</Link>
          <div className="font-display text-sm tracking-[0.28em] text-[#d8b45c]">SAMSTILA</div>
          <a href="#yhteys" className="rounded-full border border-[#80613a] bg-[#2b1d12] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#e4d7c7] shadow-[inset_0_1px_0_rgba(232,201,132,.18),0_3px_9px_rgba(0,0,0,.35)] transition hover:border-[#d8b45c] hover:text-[#f0e4d2]">
            {t.secondary}
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-[#5a4228]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(214,170,77,.16),transparent_34%),repeating-linear-gradient(92deg,rgba(72,48,29,.22)_0px,rgba(32,20,12,.22)_5px,rgba(91,61,35,.18)_11px),linear-gradient(135deg,#21150d_0%,#2a1b10_52%,#1b1009_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8b45c]">{t.kicker}</p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">{t.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#c8bbad] sm:text-xl">{t.lead}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-[#d8b45c] px-6 py-3.5 text-sm font-semibold text-[#21150d] transition hover:-translate-y-0.5">
                {t.primary}<ArrowRight className="h-4 w-4" />
              </a>
              <a href="#yhteys" className="inline-flex items-center rounded-xl border border-[#80613a] bg-[#2b1d12] px-6 py-3.5 text-sm font-semibold text-[#e0d3c3] shadow-[inset_0_1px_0_rgba(232,201,132,.12),0_3px_9px_rgba(0,0,0,.3)] transition hover:border-[#d8b45c] hover:text-[#f0e4d2]">{t.secondary}</a>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[#765733] bg-[#2b1d12]/90 p-4 shadow-[0_8px_24px_rgba(0,0,0,.45),inset_0_1px_0_rgba(232,201,132,.16)]">
            <div className="rounded-2xl border border-[#62482d] bg-[linear-gradient(180deg,#302216,#21150d)] p-5 shadow-[inset_0_1px_0_rgba(232,201,132,.12),inset_0_-1px_0_rgba(0,0,0,.5)] sm:p-6">
              <div className="flex items-center justify-between border-b border-[#523a24] pb-5">
                <div><p className="text-[10px] uppercase tracking-[0.22em] text-[#8f806f]">SAMSTILA</p><p className="mt-1 text-xl font-semibold">Keskus</p></div>
                <span className="h-2.5 w-2.5 rounded-full bg-[#8bb66b] shadow-[0_0_8px_rgba(139,182,107,.55)]" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[["12", "Asiakasta"], ["8", "Projektia"], ["17", "Tehtävää"], ["4", "Tänään"]].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-[#4e3824] bg-[#24170e] p-4">
                    <p className="text-2xl font-semibold">{value}</p><p className="mt-1 text-xs text-[#958576]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-white/8 bg-[#24170e] p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#d8b45c]">Tänään</p>
                <div className="mt-3 space-y-2">
                  {["Asiakasprojekti etenee", "2 tehtävää odottaa", "Uusi yhteyshenkilö lisätty"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-[#c1b4a5]"><span className="h-1.5 w-1.5 rounded-full bg-[#c9a24a]" />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a24a]">{t.introKicker}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{t.introTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-[#aa9c8c]">{t.intro}</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {t.cards.map(([title, text, Icon]) => (
              <article key={title} className="rounded-2xl border border-[#584029] bg-[#24170e] p-6">
                <Icon className="h-5 w-5 text-[#c9a24a]" />
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#a99b8c]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#5a4228] bg-[#291b10] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a24a]">{t.flowKicker}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{t.flowTitle}</h2>
          </div>
          <div className="mt-12 grid gap-0 overflow-hidden rounded-2xl border border-[#5a4228] lg:grid-cols-3">
            {t.steps.map(([number, title, text]) => (
              <article key={number} className="border-b border-[#5a4228] p-7 last:border-b-0 lg:border-b-0 lg:border-r border-[#5a4228] lg:last:border-r-0">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#c9a24a]">{number}</span>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-[2rem] border border-[#c9a24a]/25 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,74,.13),transparent_45%),#10161c] p-8 text-center sm:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a24a]">{t.demoKicker}</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">{t.demoTitle}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/55">{t.demoText}</p>
            <span className="mt-8 inline-flex items-center gap-2 rounded-xl border border-[#584029] bg-[#24170e] px-6 py-3.5 text-sm font-semibold text-[#827567]">{t.demoButton}</span>
          </div>
        </div>
      </section>

      <section id="yhteys" className="border-t border-[#5a4228] py-20 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a24a]">{t.ctaKicker}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{t.ctaTitle}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/55">{t.ctaText}</p>
          </div>
          <a href="mailto:info@janope.fi?subject=Samstila%20esittely" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#c9a24a] px-6 py-3.5 text-sm font-semibold text-[#0b0f13] transition hover:-translate-y-0.5">
            {t.ctaButton}<ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-[#5a4228] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-[#817365] sm:flex-row sm:items-center sm:justify-between">
          <span>Samstila · Janope</span>
          <Link href="/" className="transition hover:text-white/70">{t.back}</Link>
        </div>
      </footer>
    </main>
  );
}
