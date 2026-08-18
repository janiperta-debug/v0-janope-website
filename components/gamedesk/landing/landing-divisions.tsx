import Link from "next/link"

const divisions = [
  { name: "Tarkkuuden Vaultti", cat: "Platforma", color: "#8fbf5a" },
  { name: "Nopeuden Siipi", cat: "Racing", color: "#e8842f" },
  { name: "Taistelijan Rekisteri", cat: "Taistelu", color: "#e84040" },
  { name: "Kronikka Halli", cat: "Strategia", color: "#5a8fe8" },
  { name: "Kielletty Vaultti", cat: "Kauhu", color: "#4fae7a" },
  { name: "Nexus Rekisteri", cat: "MMO", color: "#3ec8c8" },
  { name: "Vartija Rekisteri", cat: "FPS", color: "#8a9bb0" },
  { name: "Resonanssi Arkisto", cat: "Rytmi", color: "#ff4d94" },
  { name: "Areena Rekisteri", cat: "Urheilu", color: "#d4a53a" },
  { name: "Taivaallinen Koodiksi", cat: "JRPG", color: "#b06ef0" },
]

function CompassStar({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none" stroke={color} strokeWidth="1.2" aria-hidden="true">
      <circle cx="24" cy="24" r="21" opacity="0.35" />
      <circle cx="24" cy="24" r="3" fill={color} stroke="none" />
      <path d="M24 3 L27 21 L24 24 L21 21 Z" fill={color} stroke="none" />
      <path d="M24 45 L27 27 L24 24 L21 27 Z" fill={color} stroke="none" opacity="0.7" />
      <path d="M3 24 L21 27 L24 24 L21 21 Z" fill={color} stroke="none" opacity="0.7" />
      <path d="M45 24 L27 27 L24 24 L27 21 Z" fill={color} stroke="none" opacity="0.7" />
      <path d="M9 9 L23 23 M39 9 L25 23 M9 39 L23 25 M39 39 L25 25" opacity="0.5" />
    </svg>
  )
}

export function LandingDivisions() {
  return (
    <section
      id="divisioonat"
      className="py-16 lg:py-20 px-5 lg:px-12 bg-[var(--gd-bg2)] border-t border-b border-[var(--gd-border)]"
    >
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2.5">
          <div className="w-7 h-px bg-[var(--gd-gold)] opacity-60" />
          <h2 className="font-serif text-[clamp(1.4rem,3vw,2.1rem)] font-medium tracking-[0.08em] uppercase text-[var(--gd-gold2)]">
            Valitse polkusi
          </h2>
          <div className="w-7 h-px bg-[var(--gd-gold)] opacity-60" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-9 gap-x-4 max-w-[1200px] mx-auto">
        {divisions.map((d) => (
          <Link
            key={d.name}
            href="/app"
            className="group flex flex-col items-center text-center no-underline"
          >
            <div className="transition-transform duration-300 group-hover:-translate-y-1">
              <CompassStar color={d.color} />
            </div>
            <div className="font-serif text-[0.82rem] font-semibold leading-tight text-[var(--gd-ink)] mt-3 max-w-[120px]">
              {d.name}
            </div>
            <div
              className="text-[0.58rem] font-semibold tracking-[0.16em] uppercase mt-1.5"
              style={{ color: d.color }}
            >
              {d.cat}
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/app"
          className="inline-flex items-center border border-[var(--gd-gold-f2)] text-[var(--gd-gold2)] px-7 py-3 rounded-[3px] font-serif text-sm tracking-wide hover:border-[var(--gd-gold)] hover:bg-[var(--gd-surface)] transition-colors no-underline"
        >
          Tutustu kaikkiin divisioonoihin
        </Link>
      </div>
    </section>
  )
}

