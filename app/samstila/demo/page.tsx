"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Activity, Bell, BriefcaseBusiness, Building2, CalendarDays, ChevronRight,
  ClipboardList, Gauge, LayoutDashboard, Mail, Menu, MessageSquare,
  Settings, UsersRound, X
} from "lucide-react";

type View = "center" | "customers" | "work" | "communications" | "projects" | "settings";

const nav = [
  ["center", "Keskus", LayoutDashboard],
  ["customers", "Asiakkaat", UsersRound],
  ["work", "Työtehtävät", ClipboardList],
  ["projects", "Projektit", BriefcaseBusiness],
  ["communications", "Viestintä", MessageSquare],
] as const;

const customers = [
  ["Aava Kiinteistöt", "12 kohdetta", "Aktiivinen"],
  ["Nordic Works Oy", "7 projektia", "Aktiivinen"],
  ["Kivijalka Oy", "4 kohdetta", "Seurattava"],
  ["Pohjola Rakennus", "9 projektia", "Aktiivinen"],
  ["Etelä-Suomen Huolto", "6 kohdetta", "Aktiivinen"],
];

const tasks = [
  ["Viimeistele Aava Kiinteistöjen tarjous", "Tänään", "Korkea"],
  ["Soita Nordic Worksin yhteyshenkilölle", "Tänään", "Normaali"],
  ["Tarkista Kivijalan projektin tilanne", "Huomenna", "Normaali"],
  ["Lähetä kuukausiraportti", "Huomenna", "Korkea"],
  ["Päivitä asiakasrekisteri", "12.10.", "Matala"],
];

const projects = [
  ["Aava / Huoltosopimus", "82 %", "Toteutus"],
  ["Nordic / Uusi kohde", "64 %", "Suunnittelu"],
  ["Kivijalka / Raportointi", "91 %", "Viimeistely"],
];

const messages = [
  ["Aava Kiinteistöt", "Tarjous hyväksytty – voimme edetä seuraavaan vaiheeseen.", "8 min"],
  ["Matti Virtanen", "Voimmeko siirtää torstain tapaamista?", "34 min"],
  ["Laura Niemi", "Kuukausiraportti on valmis katsottavaksi.", "1 h"],
  ["Järjestelmä", "Uusi käyttäjä lisättiin työtilaan.", "2 h"],
];

function Panel({ title, children, action }: { title?: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <section className="surface-metal bevel-metal rounded-md border border-[#59452f]/80 p-4 sm:p-5">
      {title && (
        <header className="mb-4 flex items-center justify-between gap-3">
          <h2 className="font-serif text-base font-semibold uppercase tracking-[0.16em] text-[#d9b95f] [text-shadow:0_1px_0_#18100a]">{title}</h2>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

function Rotary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded border border-[#4d3a28] bg-[#1b120b] p-3">
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#584631] bg-[radial-gradient(circle_at_38%_28%,#665642,#201810_72%)] shadow-[inset_0_2px_5px_rgba(0,0,0,.75),0_2px_5px_rgba(0,0,0,.45)]">
        <span className="absolute top-1 h-3.5 w-1 rounded-full bg-[#e0bf61] shadow-[0_0_7px_rgba(224,191,97,.45)]" />
        <span className="h-5 w-5 rounded-full border border-[#4d3a28] bg-[#282017]" />
      </div>
      <div><p className="text-[9px] uppercase tracking-[0.16em] text-[#796958]">{label}</p><p className="mt-1 font-serif text-lg text-[#dfc77e]">{value}</p></div>
    </div>
  );
}

export default function SamstilaDemoPage() {
  const [view, setView] = useState<View>("center");
  const [mobileNav, setMobileNav] = useState(false);

  const title = nav.find(([id]) => id === view)?.[1] ?? "Keskus";

  return (
    <main className="min-h-screen bg-[#20160f] text-[#e9dfd0]">
      <header className="sticky top-0 z-30 border-b border-[#4e3925] bg-[#21160e]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-4 px-4 sm:px-6">
          <button onClick={() => setMobileNav(!mobileNav)} className="rounded border border-[#59452f] p-2 text-[#c9a85a] lg:hidden" aria-label="Valikko">
            {mobileNav ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <Link href="/workplace" className="font-serif text-lg tracking-[0.12em] text-[#e1c56e]">SAMSTILA</Link>
          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-[#756657] sm:inline">Demo / Janope</span>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-[#4f6540] bg-[#1a2414] px-3 py-1.5 text-[9px] uppercase tracking-[0.14em] text-[#9bb27d] sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-[#88b369] shadow-[0_0_7px_rgba(136,179,105,.7)]" />Demo-tila</span>
            <div className="hidden text-right sm:block"><p className="text-xs text-[#c7b8a6]">Jani Perta</p><p className="text-[9px] text-[#766758]">Pääkäyttäjä</p></div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#705431] bg-[#2b1c11] font-serif text-sm text-[#d8b45c]">JP</div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[230px_1fr]">
        <aside className={`fixed inset-x-0 top-16 z-20 border-b border-[#4e3925] bg-[#21160e] p-3 lg:static lg:block lg:min-h-[calc(100vh-4rem)] lg:border-b-0 lg:border-r ${mobileNav ? "block" : "hidden"}`}>
          <div className="mb-5 rounded border border-[#4e3925] bg-[#191009] p-4">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#887461]">Työtila</p>
            <p className="mt-1 font-serif text-lg text-[#e0c475]">Janope</p>
            <p className="mt-1 text-[10px] text-[#716253]">Yrityksen oma Samstila</p>
          </div>
          <nav className="space-y-1">
            {nav.map(([id, label, Icon]) => (
              <button key={id} onClick={() => { setView(id); setMobileNav(false); }} className={`flex w-full items-center gap-3 rounded border px-3 py-3 text-left text-sm transition ${view === id ? "border-[#806238] bg-[#302014] text-[#e2c66e] shadow-[inset_0_1px_0_rgba(224,194,105,.12)]" : "border-transparent text-[#8f7e6c] hover:border-[#493625] hover:text-[#d0c0ad]"}`}>
                <Icon className="h-4 w-4" /><span>{label}</span>
              </button>
            ))}
          </nav>
          <div className="mt-8 border-t border-[#403021] pt-4">
            <button onClick={() => { setView("settings"); setMobileNav(false); }} className={`flex w-full items-center gap-3 rounded px-3 py-3 text-sm ${view === "settings" ? "text-[#e2c66e]" : "text-[#756657]"}`}><Settings className="h-4 w-4" />Asetukset</button>
            <Link href="/workplace" className="mt-1 flex items-center gap-3 rounded px-3 py-3 text-sm text-[#756657] hover:text-[#c9b99f]">← Samstilan esittely</Link>
          </div>
        </aside>

        <section className="min-w-0 p-4 sm:p-6 lg:p-8">
          <div className="mb-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#9b7a42]">Janope / Samstila</p>
            <div className="mt-1 flex items-end justify-between gap-4">
              <div><h1 className="font-serif text-3xl font-semibold text-[#dfc36b] sm:text-4xl">{title}</h1><p className="mt-1 text-sm text-[#857565]">Demo-ympäristö · esimerkkitiedot</p></div>
              <div className="hidden items-center gap-2 sm:flex"><span className="text-[9px] uppercase tracking-[0.16em] text-[#6e5d4d]">07.10.2026</span><Bell className="h-4 w-4 text-[#9b7a42]" /></div>
            </div>
          </div>

          {view === "center" && (
            <div className="space-y-5">
              <Panel title="Tilannekuva">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {[["12","Asiakasta",UsersRound],["8","Aktiivista projektia",BriefcaseBusiness],["17","Avoinna olevaa tehtävää",ClipboardList],["4","Uutta viestiä",MessageSquare]].map(([n,l,I]) => <div key={String(l)} className="surface-metal rounded border border-[#4a3827] p-4"><I className="h-4 w-4 text-[#b99145]" /><p className="mt-3 font-serif text-3xl text-[#dec16a]">{n}</p><p className="mt-1 text-xs text-[#827161]">{l}</p></div>)}
                </div>
              </Panel>
              <div className="grid gap-5 xl:grid-cols-[1.35fr_.65fr]">
                <Panel title="Huomioitavaa">
                  <div className="space-y-2">
                    {["2 asiakkuutta odottaa yhteydenottoa","Aava Kiinteistöjen tarjous odottaa lähetystä","Kuukausiraportti valmistunut"].map((x,i) => <button key={x} onClick={() => setView(i === 0 ? "customers" : "work")} className="group flex w-full items-center gap-3 rounded border border-[#443323] bg-[#1c130c] p-3 text-left hover:border-[#76572f]"><span className={`h-2 w-2 rounded-full ${i === 1 ? "bg-[#d1a348] shadow-[0_0_7px_rgba(209,163,72,.6)]" : "bg-[#78965c]"}`} /><span className="flex-1 text-sm text-[#b9aa98]">{x}</span><ChevronRight className="h-4 w-4 text-[#635444] group-hover:text-[#c9a24a]" /></button>)}
                  </div>
                </Panel>
                <Panel title="Työtila">
                  <div className="space-y-3"><Rotary label="Näkymä" value="Normaali" /><Rotary label="Kapasiteetti" value="72 %" /></div>
                </Panel>
              </div>
              <Panel title="Viimeisimmät tapahtumat" action={<button onClick={() => setView("communications")} className="text-xs text-[#9b7a42]">Avaa viestintä →</button>}>
                <div className="divide-y divide-[#3a2a1e]">
                  {["Asiakasprojekti etenee","Tarjous hyväksytty","Uusi yhteyshenkilö lisätty","Tehtävä merkitty valmiiksi"].map((x,i) => <div key={x} className="flex items-center gap-3 py-3 text-sm"><Activity className="h-4 w-4 text-[#78965c]" /><span className="flex-1 text-[#a99b8a]">{x}</span><span className="text-[10px] text-[#665647]">{i+1} h</span></div>)}
                </div>
              </Panel>
            </div>
          )}

          {view === "customers" && <Panel title="Asiakasrekisteri" action={<button className="workspace-button workspace-button--primary">+ Uusi asiakas</button>}><div className="overflow-hidden rounded border border-[#433224]"><div className="grid grid-cols-[1.5fr_1fr_.8fr] border-b border-[#433224] bg-[#1a110a] px-4 py-3 text-[9px] uppercase tracking-[0.16em] text-[#756454]"><span>Asiakas</span><span>Kokonaisuus</span><span>Tila</span></div>{customers.map(([a,b,c])=><div key={a} className="grid grid-cols-[1.5fr_1fr_.8fr] items-center border-b border-[#35271d] px-4 py-4 text-sm last:border-0"><span className="text-[#c4b4a2]">{a}</span><span className="text-[#847464]">{b}</span><span className={c === "Seurattava" ? "text-[#d0a74e]" : "text-[#88a96c]"}>{c}</span></div>)}</div></Panel>}

          {view === "work" && <Panel title="Työtehtävät"><div className="space-y-2">{tasks.map(([a,b,c])=><div key={a} className="flex items-center gap-3 rounded border border-[#433224] bg-[#1b120b] p-4"><div className="flex h-8 w-8 items-center justify-center rounded border border-[#59442d] bg-[#25180e] text-[#c9a24a]"><ClipboardList className="h-4 w-4" /></div><div className="flex-1"><p className="text-sm text-[#c2b3a1]">{a}</p><p className="mt-1 text-[10px] text-[#746353]">{b}</p></div><span className={`text-[9px] uppercase tracking-[0.12em] ${c === "Korkea" ? "text-[#d0a44c]" : c === "Matala" ? "text-[#73885c]" : "text-[#8d7b68"}`}>{c}</span></div>)}</div></Panel>}

          {view === "projects" && <div className="grid gap-5 lg:grid-cols-2">{projects.map(([a,b,c])=><Panel key={a} title={a}><p className="text-xs text-[#827160]">{c}</p><div className="mt-5 h-2 overflow-hidden rounded-full bg-[#17100a]"><div className="h-full rounded-full bg-[#b88f42]" style={{width:b}} /></div><p className="mt-3 font-serif text-2xl text-[#d9bd65]">{b}</p></Panel>)}</div>}

          {view === "communications" && <Panel title="Viestintä" action={<button className="workspace-button workspace-button--primary"><Mail className="h-4 w-4" />Uusi viesti</button>}><div className="space-y-2">{messages.map(([a,b,c])=><div key={a+b} className="flex gap-3 rounded border border-[#433224] bg-[#1b120b] p-4"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#62492e] bg-[#25180e]"><Mail className="h-4 w-4 text-[#bd974b]" /></div><div className="min-w-0 flex-1"><div className="flex justify-between gap-3"><p className="text-sm text-[#c5b5a2]">{a}</p><span className="text-[9px] text-[#665748]">{c}</span></div><p className="mt-1 text-xs leading-5 text-[#80705f]">{b}</p></div></div>)}</div></Panel>}

          {view === "settings" && <Panel title="Samstilan asetukset"><div className="grid gap-3 lg:grid-cols-2"><div className="rounded border border-[#433224] bg-[#1b120b] p-4"><p className="text-[9px] uppercase tracking-[0.16em] text-[#806d5a]">Työtilan nimi</p><p className="mt-2 font-serif text-xl text-[#d9bd65]">Janope</p></div><div className="rounded border border-[#433224] bg-[#1b120b] p-4"><p className="text-[9px] uppercase tracking-[0.16em] text-[#806d5a]">Oletusnäkymä</p><p className="mt-2 font-serif text-xl text-[#d9bd65]">Keskus</p></div><div className="rounded border border-[#433224] bg-[#1b120b] p-4"><p className="text-[9px] uppercase tracking-[0.16em] text-[#806d5a]">Demo-tila</p><p className="mt-2 text-sm text-[#89a76c]">Aktiivinen · esimerkkidata</p></div><div className="rounded border border-[#433224] bg-[#1b120b] p-4"><p className="text-[9px] uppercase tracking-[0.16em] text-[#806d5a]">Käyttäjät</p><p className="mt-2 text-sm text-[#b6a694]">5 käyttäjää · 1 pääkäyttäjä</p></div></div></Panel>}
        </section>
      </div>
    </main>
  );
}
