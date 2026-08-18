import Image from "next/image"
import { Boxes, ScrollText, Trophy, LineChart, Feather } from "lucide-react"

const features = [
  {
    icon: Boxes,
    img: "/products/gamedesk/features/kokoelmat.png",
    name: "Kokoelmat",
    desc: "Kaikki pelisi yhdessä paikassa. Digitaaliset ja fyysiset. Järjestettynä juuri niin kuin haluat.",
  },
  {
    icon: ScrollText,
    img: "/products/gamedesk/features/pelihistoria.png",
    name: "Pelihistoria",
    desc: "Näe pelikartasi vuosien läpi. Aloitukset, läpäisyt ja pelatut tunnit.",
  },
  {
    icon: Trophy,
    img: "/products/gamedesk/features/saavutukset.png",
    name: "Saavutukset",
    desc: "Kaikki saavutuksesi yhdessä vitriinissä. Merkkipaalusi talteen.",
  },
  {
    icon: LineChart,
    img: "/products/gamedesk/features/arvonseuranta.png",
    name: "Arvonseuranta",
    desc: "Seuraa kokoelmasi kehitystä ja arvoa ajan saatossa.",
  },
  {
    icon: Feather,
    img: "/products/gamedesk/features/muistot.png",
    name: "Muistot",
    desc: "Kirjoita tarinasi pelien taakse. Muistot, jotka kestävät.",
  },
]

export function LandingFeatures() {
  return (
    <section id="ominaisuudet" className="py-16 lg:py-24 px-5 lg:px-12 border-t border-[var(--gd-border)]">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2.5">
          <div className="w-7 h-px bg-[var(--gd-gold)] opacity-60" />
          <h2 className="font-serif text-[clamp(1.5rem,3.5vw,2.4rem)] font-medium tracking-[0.06em] uppercase text-[var(--gd-gold2)] text-balance">
            Mitä arkistossa säilytetään?
          </h2>
          <div className="w-7 h-px bg-[var(--gd-gold)] opacity-60" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-[1360px] mx-auto">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <div
              key={f.name}
              className="group flex flex-col rounded-[6px] border border-[var(--gd-gold-f2)] bg-[var(--gd-surface)]/70 overflow-hidden transition-colors duration-300 hover:border-[var(--gd-gold)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={f.img || "/placeholder.svg"}
                  alt={f.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--gd-surface)] via-transparent to-transparent" />
              </div>

              <div className="flex flex-col flex-1 p-6 text-center">
                <div className="flex justify-center -mt-11 mb-4 relative z-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--gd-gold-f2)] bg-[var(--gd-bg)]">
                    <Icon className="h-5 w-5 text-[var(--gd-gold2)]" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-wide uppercase text-[var(--gd-ink)] mb-2.5">
                  {f.name}
                </h3>
                <p className="text-[0.8rem] text-[var(--gd-ink3)] leading-relaxed font-light flex-1">{f.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

