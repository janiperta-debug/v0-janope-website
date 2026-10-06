"use client";

import { useState } from "react";
import { Bell, BriefcaseBusiness, CheckCircle2, ChevronRight, ClipboardList, MessageSquare, UsersRound } from "lucide-react";

type Locale = "fi" | "en";
type View = "home" | "customers" | "work" | "messages";

const labels = {
  fi: {
    company: "Janope / Samstila",
    status: "Työtila aktiivinen",
    greeting: "Hyvää huomenta",
    intro: "Tässä on tämän päivän tilannekuva.",
    home: "Keskus",
    customers: "Asiakkaat",
    work: "Työ",
    messages: "Viestintä",
    attention: "Huomioitavaa",
    tasks: "Tehtävää tänään",
    projects: "Aktiivista projektia",
    customersCount: "Asiakasta",
    messagesCount: "Uutta viestiä",
    latest: "Viimeisimmät tapahtumat",
    seeAll: "Näytä kaikki",
    open: "Avaa",
    customerTitle: "Asiakkaat",
    customerIntro: "Kaikki tärkeät asiakkuudet yhdessä näkymässä.",
    workTitle: "Työ",
    workIntro: "Tehtävät ja projektit, jotka odottavat seuraavaa liikettä.",
    messagesTitle: "Viestintä",
    messagesIntro: "Uudet viestit ja asiat, joihin kannattaa reagoida.",
    back: "Takaisin keskukseen",
    today: "Tänään",
  },
  en: {
    company: "Janope / Samstila",
    status: "Workspace active",
    greeting: "Good morning",
    intro: "Here is today's overview.",
    home: "Central",
    customers: "Customers",
    work: "Work",
    messages: "Communication",
    attention: "Needs attention",
    tasks: "Tasks today",
    projects: "Active projects",
    customersCount: "Customers",
    messagesCount: "New messages",
    latest: "Latest activity",
    seeAll: "View all",
    open: "Open",
    customerTitle: "Customers",
    customerIntro: "All important customer relationships in one view.",
    workTitle: "Work",
    workIntro: "Tasks and projects waiting for the next move.",
    messagesTitle: "Communication",
    messagesIntro: "New messages and things that need attention.",
    back: "Back to central",
    today: "Today",
  },
} as const;

const nav = [
  { id: "home" as const, icon: BriefcaseBusiness },
  { id: "customers" as const, icon: UsersRound },
  { id: "work" as const, icon: ClipboardList },
  { id: "messages" as const, icon: MessageSquare },
];

export default function SamstilaDemo({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [view, setView] = useState<View>("home");

  const activity = locale === "fi"
    ? ["Asiakasprojekti etenee", "Tarjous hyväksytty", "Uusi yhteyshenkilö lisätty", "Tehtävä merkitty valmiiksi"]
    : ["Customer project progressing", "Proposal accepted", "New contact added", "Task marked complete"];

  const customers = locale === "fi"
    ? ["Aava Kiinteistöt", "Nordic Works", "Kivijalka Oy", "Pohjola Rakennus"]
    : ["Aava Properties", "Nordic Works", "Kivijalka Ltd", "Pohjola Construction"];

  const tasks = locale === "fi"
    ? ["Viimeistele tarjous", "Soita asiakkaalle", "Tarkista projektin tilanne", "Lähetä raportti"]
    : ["Finish proposal", "Call customer", "Review project status", "Send report"];

  const messages = locale === "fi"
    ? ["Matti: Voimmeko siirtää tapaamista?", "Aava Kiinteistöt: Tarjous hyväksytty", "Laura: Raportti valmis katsottavaksi", "Järjestelmä: uusi käyttäjä lisätty"]
    : ["Matt: Can we move the meeting?", "Aava Properties: Proposal accepted", "Laura: Report ready for review", "System: new user added"];

  const active = nav.find((item) => item.id === view) ?? nav[0];

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[#705431] bg-[#18100a] shadow-[0_18px_45px_rgba(0,0,0,.5),inset_0_1px_0_rgba(232,201,132,.12)]">
      <div className="border-b border-[#4e3925] bg-[linear-gradient(180deg,#302216,#24170e)] px-4 py-4 sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[9px] uppercase tracking-[0.24em] text-[#927f69]">{t.company}</p>
            <p className="mt-1 font-display text-lg text-[#ead9b9]">{view === "home" ? t.greeting : active.id === "customers" ? t.customerTitle : active.id === "work" ? t.workTitle : t.messagesTitle}</p>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-[#665033] bg-[#20140c] px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-[#9fb17e] sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8bb66b] shadow-[0_0_7px_rgba(139,182,107,.55)]" />
            {t.status}
          </div>
        </div>
      </div>

      <div className="grid min-h-[390px] sm:grid-cols-[150px_1fr]">
        <aside className="border-b border-[#4e3925] bg-[#21150d] p-3 sm:border-b-0 sm:border-r">
          <div className="grid grid-cols-4 gap-2 sm:block sm:space-y-2">
            {nav.map(({ id, icon: Icon }) => {
              const text = id === "home" ? t.home : id === "customers" ? t.customers : id === "work" ? t.work : t.messages;
              const selected = view === id;
              return (
                <button
                  key={id}
                  onClick={() => setView(id)}
                  className={`flex w-full items-center justify-center gap-2 rounded-lg border px-2 py-2.5 text-[10px] font-semibold transition sm:justify-start sm:px-3 ${selected ? "border-[#9a753b] bg-[#342315] text-[#e8d09a] shadow-[inset_0_1px_0_rgba(232,201,132,.12)]" : "border-transparent text-[#827261] hover:border-[#4e3925] hover:text-[#c9b99f]"}`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="hidden sm:inline">{text}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-6 hidden rounded-lg border border-[#4e3925] bg-[#1a1009] p-3 sm:block">
            <p className="text-[8px] uppercase tracking-[0.18em] text-[#c9a24a]">{t.today}</p>
            <p className="mt-2 text-xs leading-relaxed text-[#817466]">4 {t.tasks.toLowerCase()}</p>
          </div>
        </aside>

        <div className="p-4 sm:p-6">
          {view === "home" && (
            <>
              <div className="mb-5">
                <p className="text-sm text-[#a89887]">{t.intro}</p>
              </div>
              <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
                {[
                  [String(17), t.tasks, ClipboardList],
                  [String(8), t.projects, BriefcaseBusiness],
                  [String(12), t.customersCount, UsersRound],
                  [String(4), t.messagesCount, Bell],
                ].map(([value, label, Icon]) => (
                  <div key={String(label)} className="rounded-xl border border-[#4e3925] bg-[#21150d] p-3.5">
                    <Icon className="h-4 w-4 text-[#c9a24a]" />
                    <p className="mt-3 text-xl font-semibold text-[#eadfce]">{value}</p>
                    <p className="mt-0.5 text-[10px] text-[#847565]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 grid gap-3 lg:grid-cols-[1.2fr_.8fr]">
                <div className="rounded-xl border border-[#4e3925] bg-[#21150d] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#c9a24a]">{t.latest}</p>
                    <button onClick={() => setView("work")} className="text-[10px] text-[#887968] hover:text-[#d9c6a4]">{t.seeAll}</button>
                  </div>
                  <div className="mt-3 space-y-2">
                    {activity.slice(0, 3).map((item, i) => (
                      <div key={item} className="flex items-center gap-3 border-t border-[#352619] pt-2.5 text-xs text-[#a99b8b]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#829c62]" />
                        <span className="flex-1">{item}</span>
                        <span className="text-[9px] text-[#67594c]">{i + 1}h</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={() => setView("customers")} className="group rounded-xl border border-[#725633] bg-[linear-gradient(145deg,#2c1e12,#1e130c)] p-4 text-left transition hover:border-[#b38b48]">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#c9a24a]">{t.attention}</p>
                  <p className="mt-3 text-sm text-[#d4c5b2]">{locale === "fi" ? "2 asiakkuutta odottaa yhteydenottoa." : "2 customer relationships are waiting for contact."}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-semibold text-[#c9a24a]">{t.open}<ChevronRight className="h-3 w-3 transition group-hover:translate-x-0.5" /></span>
                </button>
              </div>
            </>
          )}

          {view !== "home" && (
            <div>
              <p className="text-sm text-[#a89887]">{view === "customers" ? t.customerIntro : view === "work" ? t.workIntro : t.messagesIntro}</p>
              <div className="mt-5 space-y-2">
                {(view === "customers" ? customers : view === "work" ? tasks : messages).map((item, i) => (
                  <button key={item} className="group flex w-full items-center gap-3 rounded-xl border border-[#4e3925] bg-[#21150d] p-3.5 text-left transition hover:border-[#8a6838]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#564029] bg-[#2a1b10] text-[10px] text-[#c9a24a]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-xs text-[#b9aa98]">{item}</span>
                    <ChevronRight className="h-4 w-4 text-[#67594c] transition group-hover:translate-x-0.5 group-hover:text-[#c9a24a]" />
                  </button>
                ))}
              </div>
              <button onClick={() => setView("home")} className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold text-[#c9a24a] hover:text-[#e1c780]">← {t.back}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
