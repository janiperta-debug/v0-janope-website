const props = [
  {
    icon: "🗺️",
    title: "Yksi kartta",
    description: "Kaikki lahella olevat skuutit nakyvat yhdella kartalla, operaattorista riippumatta. Ei enaa sovellusten vaihtamista."
  },
  {
    icon: "⚡",
    title: "Nopea aloitus",
    description: "Valitse lahin skuutti ja Skuuttila avaa oikean operaattorisovelluksen suoraan – heti valmiina vuokraukseen."
  },
  {
    icon: "📲",
    title: "Lisaa kotinaytolle",
    description: "Avaa selaimessa ja lisaa kotinaytolle – toimii kuin natiivi sovellus. Ei sovelluskauppoja, ei paivityksia, ei odottelua. Aina uusin versio valmiina kaytettavaksi."
  },
]

export function ValueProps() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gray relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-36 -right-36 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,92,0,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-[10px] sm:text-xs font-medium text-orange uppercase tracking-[0.12em] mb-3 sm:mb-4">
          Miksi Skuuttila?
        </div>
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight mb-8 sm:mb-12 text-balance">
          Yksinkertaisempi tapa liikkua
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="p-5 sm:p-8 bg-background rounded-xl sm:rounded-2xl border border-gray-mid relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange to-transparent" />
              
              <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">{prop.icon}</span>
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-base sm:text-lg mb-2">{prop.title}</h3>
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
