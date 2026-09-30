"use client"

const operators = [
  { name: "Tier", color: "rgba(0,180,255,0.15)", borderColor: "#00B4FF" },
  { name: "Bolt", color: "rgba(52,209,134,0.15)", borderColor: "#34D186" },
  { name: "Voi", color: "rgba(255,51,102,0.15)", borderColor: "#FF3366" },
  { name: "Lime", color: "rgba(0,204,68,0.15)", borderColor: "#00CC44" },
  { name: "Dott", color: "rgba(92,92,255,0.15)", borderColor: "#5C5CFF" },
]

export function Operators() {
  return (
    <section className="py-24 px-6 md:px-12 relative">
      <div className="text-xs font-medium text-orange uppercase tracking-[0.12em] mb-4">
        Tuetut operaattorit
      </div>
      <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 max-w-xl text-balance">
        Kaikki suurimmat operaattorit yhdistettynä
      </h2>
      <p className="text-text-muted text-base leading-relaxed max-w-lg mb-12">
        Skuuttila aggregoi reaaliaikaisesti kaikkien tuettujen operaattoreiden skuuttien sijainnit yhdelle kartalle.
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl">
        {operators.map((op) => (
          <div
            key={op.name}
            className="bg-gray border border-gray-mid rounded-2xl p-5 flex flex-col items-center gap-3 transition-all hover:-translate-y-1 cursor-pointer group"
            style={{ borderColor: "var(--gray-mid)" }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = op.borderColor}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--gray-mid)"}
          >
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
              style={{ backgroundColor: op.color }}
            >
              🛴
            </div>
            <div className="font-[family-name:var(--font-syne)] font-bold text-base">{op.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
