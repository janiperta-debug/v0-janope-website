import Image from "next/image"

export function LandingFooter() {
  return (
    <footer className="bg-[var(--gd-bg2)] border-t border-[var(--gd-border)] px-5 lg:px-12 py-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-5">
        <div className="flex items-center gap-2.5">
          <Image
            src="/products/gamedesk/gamedesk-logo.png"
            alt="GameDesk"
            width={40}
            height={40}
            className="h-9 w-auto object-contain"
          />
          <span className="flex flex-col leading-none items-start">
            <span className="font-serif text-lg font-semibold text-[var(--gd-ink)] tracking-wide">
              Game<em className="not-italic text-[var(--gd-gold2)]">Desk</em>
            </span>
            <span className="text-[0.55rem] font-semibold tracking-[0.22em] uppercase text-[var(--gd-ink3)] mt-0.5">
              Kartanon Arkisto
            </span>
          </span>
        </div>

        <p className="text-xs text-[var(--gd-ink3)]">
          {"\u00A9 2025 GameDesk. Kaikki oikeudet pidätetään."}
        </p>
      </div>
    </footer>
  )
}

