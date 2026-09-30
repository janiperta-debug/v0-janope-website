import Link from "next/link"

const DEMO_URL = "https://lahio-appi-cqiq01.vercel.app/demo"

export function Hero() {
  return (
    <section id="top" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 pt-28 pb-16 lg:px-12 lg:pt-28 lg:pb-16 gap-8 lg:gap-16 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none -top-24 -right-24 bg-[rgba(232,115,74,0.12)]" style={{ animation: "lahella-drift 10s ease-in-out infinite" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none -bottom-12 -left-24 bg-[rgba(122,170,138,0.12)]" style={{ animation: "lahella-drift 14s ease-in-out infinite reverse" }} />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-sage-faint border border-[rgba(122,170,138,0.25)] text-sage text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-6" style={{ animation: "lahella-fade-up 0.8s 0.1s both" }}>
          Naapurisi odottavat
        </div>

        <h1 className="font-serif font-semibold text-lahella-text leading-[1.08] tracking-tight mb-6 text-balance" style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", letterSpacing: "-0.02em", animation: "lahella-fade-up 0.8s 0.25s both" }}>
          Ihmiset
          <br />
          <em className="italic text-terracotta">lähellä</em>
          <br />
          sinua.
        </h1>

        <p className="text-lg text-lahella-text2 leading-relaxed max-w-md mb-10" style={{ animation: "lahella-fade-up 0.8s 0.4s both" }}>
          Leikkikavereita lapsille, apua naapurille, yhteisiä hetkiä lähialueella. Kaikki yhdessä paikassa — ilmaiseksi.
        </p>

        <div className="flex gap-4 items-center flex-wrap" style={{ animation: "lahella-fade-up 0.8s 0.55s both" }}>
          <a href={DEMO_URL} target="_blank" rel="noreferrer" className="bg-terracotta text-primary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:-translate-y-0.5 transition-transform shadow-[0_8px_24px_rgba(232,115,74,0.3)] hover:shadow-[0_12px_32px_rgba(232,115,74,0.4)]">
            Kokeile demoa →
          </a>
          <Link href="#ominaisuudet" className="text-lahella-text2 text-sm font-medium hover:text-lahella-text transition-colors">Katso miten toimii ↓</Link>
        </div>
      </div>

      <div className="relative z-10 hidden lg:flex justify-center items-center" style={{ animation: "lahella-fade-up 0.8s 0.6s both" }}>
        <div className="relative w-[320px] h-[420px]">
          <div className="absolute w-[260px] bg-sand rounded-3xl p-6 shadow-lg border border-border top-1/2 left-[calc(50%+15px)] -translate-x-1/2 -translate-y-1/2 rotate-6 z-[1]"><div className="h-40" /></div>
          <div className="absolute w-[260px] bg-sage-faint rounded-3xl p-6 shadow-lg border border-[rgba(122,170,138,0.2)] top-[calc(50%+10px)] left-[calc(50%-20px)] -translate-x-1/2 -translate-y-1/2 -rotate-4 z-[2]"><div className="h-40" /></div>
          <div className="absolute w-[280px] bg-card rounded-3xl p-6 shadow-xl border border-border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-[#fde8dc] flex items-center justify-center text-xl flex-shrink-0">👩</div>
              <div><div className="font-bold text-sm text-lahella-text">Sari K.</div><div className="text-xs text-lahella-muted">📍 0.4 km sinusta</div></div>
            </div>
            <p className="text-sm text-lahella-text2 leading-relaxed mb-4">Etsimme leikkikaveria 4-vuotiaalle Ellille. Käymme usein Kotipolun leikkipuistossa iltapäivisin!</p>
            <div className="flex gap-1.5 flex-wrap mb-4">
              <span className="bg-terracotta-faint text-terracotta text-[0.68rem] font-semibold px-2.5 py-0.5 rounded-full">Leikkikaverit</span>
              <span className="bg-sage-faint text-sage text-[0.68rem] font-semibold px-2.5 py-0.5 rounded-full">4-vuotiaat</span>
              <span className="bg-sage-faint text-sage text-[0.68rem] font-semibold px-2.5 py-0.5 rounded-full">Leikkipuisto</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-border text-xs text-lahella-muted">
              <span className="flex items-center gap-1 font-semibold text-terracotta">📍 0.4 km</span>
              <span className="bg-terracotta text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">Ota yhteyttä</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
