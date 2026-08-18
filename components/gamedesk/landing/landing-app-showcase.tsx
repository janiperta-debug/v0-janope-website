import Link from "next/link"
import Image from "next/image"
import { Download } from "lucide-react"

export function LandingAppShowcase() {
  return (
    <section id="sovellus" className="py-16 lg:py-24 px-5 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-[1360px] mx-auto">
        <div className="max-w-[460px]">
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-[var(--gd-ink)] mb-6 text-balance">
            Arkistosi.
            <br />
            <em className="italic text-[var(--gd-gold2)] font-normal">Mukana kaikkialla.</em>
          </h2>
          <p className="text-base font-light text-[var(--gd-ink2)] leading-[1.8] mb-8">
            GameDesk on web-sovellus (PWA). Toimii suoraan selaimessa kaikilla laitteilla. Lisää aloitusnäyttöön ja nauti
            sovelluskokemuksesta ilman latauksia.
          </p>
          <Link
            href="/app"
            className="inline-flex items-center gap-2.5 border border-[var(--gd-gold-f2)] bg-[var(--gd-surface)]/60 text-[var(--gd-gold2)] px-8 py-3.5 rounded-[3px] font-serif text-base tracking-wide hover:border-[var(--gd-gold)] hover:bg-[var(--gd-surface2)] transition-colors no-underline"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Lataa sovelluskokemus
          </Link>
          <div className="flex items-start gap-2.5 mt-5 max-w-[340px]">
            <Download className="h-4 w-4 text-[var(--gd-gold)] mt-0.5 shrink-0" aria-hidden="true" />
            <p className="text-[0.72rem] text-[var(--gd-ink3)] leading-relaxed">
              Lisää aloitusnäyttöön yhdellä napautuksella.
            </p>
          </div>
        </div>

        <div className="relative rounded-[8px] overflow-hidden border border-[var(--gd-border2)] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
          <Image
            src="/products/gamedesk/pwa-devices.jpg"
            alt="GameDesk-sovellus kannettavalla, tabletilla ja puhelimella arkiston sisällä"
            width={1536}
            height={1024}
            className="w-full h-auto object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

