import Link from "next/link"
import Image from "next/image"

export function LandingCta() {
  return (
    <section id="enter" className="relative overflow-hidden border-y border-[var(--gd-border)]">
      <Image
        src="/products/gamedesk/library-hall.jpg"
        alt="Kartanon arkiston suuri sali"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--gd-bg)]/82" />
      <div className="relative py-20 lg:py-28 px-5 lg:px-12 text-center">
        <span className="font-serif text-2xl text-[var(--gd-gold)] opacity-50 block mb-6">
          {"\u2767"}
        </span>
        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.75rem)] font-semibold tracking-tight leading-tight mb-4 text-balance text-[var(--gd-ink)]">
          Jokainen tarina ansaitsee <em className="italic text-[var(--gd-gold2)] font-light">paikan.</em>
        </h2>
        <p className="text-[var(--gd-ink2)] text-base font-light mb-10 leading-relaxed text-pretty max-w-xl mx-auto">
          Liity miljoonien pelaajien joukkoon, jotka säilyttävät tarinansa Kartanon Arkistossa.
        </p>
        <Link
          href="/app"
          className="bg-[var(--gd-gold)] text-[var(--gd-bg)] px-10 py-4 rounded-[3px] text-sm font-bold tracking-wider hover:opacity-85 transition-opacity no-underline shadow-[0_8px_32px_rgba(201,149,58,0.3)] inline-block"
        >
          {"Avaa arkistosi →"}
        </Link>
      </div>
    </section>
  )
}

