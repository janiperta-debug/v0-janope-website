import Link from "next/link"
import Image from "next/image"
import { Smartphone } from "lucide-react"

export function LandingHero() {
  return (
    <section className="relative pt-10 lg:pt-14 overflow-hidden">
      {/* Building image — full width backdrop on the right */}
      <div className="absolute top-0 right-0 h-full w-full lg:w-[62%]">
        <Image
          src="/products/gamedesk/hero-building.jpg"
          alt="Kartanon arkisto — kivinen rakennus avoimin ovin iltahämärässä"
          fill
          priority
          className="object-cover object-center"
        />
        {/* fade the image into the page background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--gd-bg)] via-[var(--gd-bg)]/70 to-transparent lg:via-[var(--gd-bg)]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--gd-bg)] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 px-5 lg:px-12 pt-10 pb-20 lg:pt-16 lg:pb-28 max-w-[1360px] mx-auto">
        <div className="max-w-[600px]">
          <div className="flex items-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-7 h-px bg-[var(--gd-gold)] opacity-50" />
            <div className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-[var(--gd-gold)] opacity-80">
              Tervetuloa
            </div>
          </div>

          <h1 className="mb-7 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Image
              src="/products/gamedesk/gamedesk-logo.png"
              alt="GameDesk — Kartanon Arkisto"
              width={520}
              height={340}
              priority
              className="w-[clamp(240px,42vw,420px)] h-auto object-contain"
            />
          </h1>

          <p
            className="font-serif text-2xl lg:text-3xl text-[var(--gd-ink)] leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Jokainen peli.
            <br />
            Jokainen muisto.
            <br />
            <em className="italic text-[var(--gd-gold2)] font-normal">Tallennettuna.</em>
          </p>

          <p
            className="text-base font-light text-[var(--gd-ink2)] leading-[1.8] max-w-[440px] mb-9 animate-fade-up"
            style={{ animationDelay: "0.38s" }}
          >
            GameDesk on henkilökohtainen pelarkistosi ja peliperintösi turvasatama. Seuraa. Säilytä. Elä perintöäsi.
            Täällä jokainen pelisi tarina jatkuu.
          </p>

          <div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Link
              href="/app"
              className="inline-flex items-center border border-[var(--gd-gold-f2)] bg-[var(--gd-surface)]/60 backdrop-blur-sm text-[var(--gd-gold2)] px-9 py-4 rounded-[3px] font-serif text-lg tracking-wide hover:bg-[var(--gd-surface2)] hover:border-[var(--gd-gold)] transition-colors no-underline"
            >
              Avaa arkistosi
            </Link>

            <div className="flex items-start gap-2.5 mt-6 max-w-[380px]">
              <Smartphone className="h-4 w-4 text-[var(--gd-gold)] mt-0.5 shrink-0" aria-hidden="true" />
              <p className="text-[0.72rem] text-[var(--gd-ink3)] leading-relaxed">
                Toimii selaimessa kaikilla laitteilla. Lisää aloitusnäyttöön ja käytä kuin sovellusta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

