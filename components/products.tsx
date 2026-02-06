"use client";

import { Users, Zap, Gamepad2, Building2, Sprout, Dice5, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";

const products = [
  {
    icon: Users,
    badge: "Kehityksessä",
    title: "Pihapiiri",
    description:
      "Sovellus naapurustoavun etsimiseen ja tarjoamiseen. Löydä leikkikavereita lapsille, vapaaehtoisia apuun tai mukavia hetkiä lähialueeltasi.",
    features: [
      "Leikkikaverit lapsille",
      "Auttavat kädet naapurustossa",
      "Lähitapahtumat ja kokoontumiseet",
      "Turvallinen yhteydenotto",
    ],
    link: "https://v0-pihapiiri.vercel.app/",
    linkText: "Katso Pihapiiri",
  },
  {
    icon: Zap,
    badge: "Kehityksessä",
    title: "ChargeHub",
    description:
      "Sähköautoilijoiden keskitetty latauspalvelu. Yhdistä Virta, K-Lataus, ABC ja muut latausverkot yhteen sovellukseen.",
    features: [
      "Kaikki latausverkot yhdessä",
      "Latauspisteiden haku kartalta",
      "Lataushistorian seuranta",
      "Hintojen vertailu",
    ],
    link: "https://v0-charge-hub.vercel.app/",
    linkText: "Katso ChargeHub",
  },
  {
    icon: Gamepad2,
    badge: "Kehityksessä",
    title: "GameDesk",
    description:
      "Videopelien hallintasovellus pelaajille. Seuraa pelikirjastoasi, löydä uusia pelejä ja pidä kirjaa edistymisestäsi.",
    features: [
      "Pelikirjaston hallinta",
      "Pelien seuranta ja backlog",
      "Saavutusten tilastot",
      "Suositukset pelattavaksi",
    ],
    link: "https://janiperta.riff.works/game-desk",
    linkText: "Katso GameDesk",
  },
  {
    icon: Building2,
    badge: "Tuotannossa",
    title: "Finnvesta",
    description:
      "Kiinteistöomaisuuden hallinta ja kuntoarvio-as-a-service. Korvaa perinteisen 5 vuoden kuntoarviosyklin jatkuvalla valvonnalla.",
    features: [
      "Reaaliaikainen kunnon valvonta",
      "Automaattinen 15v kunnostussuunnitelma",
      "Investointisuunnittelu",
      "Korvaa konsulttikustannukset",
    ],
    link: "https://finnvesta.fi",
    linkText: "Tutustu Finnvestaan",
  },
  {
    icon: Sprout,
    badge: "Kehityksessä",
    title: "FinnVerdis",
    description:
      "Modernisoi kunnan ympäristöviestintää. Keskitetty alusta joka tuo läpinäkyvyyttä ja motivoi kansalaisia.",
    features: [
      "Reaaliaikainen aurinkosähkön seuranta",
      "Energiainvestointien visualisointi",
      "Ilmastotavoitteiden edistyminen",
      "Automaattinen datan päivitys",
    ],
    link: "#yhteystiedot",
    linkText: "Kysy lisää",
  },
  {
    icon: Dice5,
    badge: "Julkaistu",
    title: "GameTable",
    description:
      "Sovellus lautapelaajien yhdistämiseen. Löydä pelikavereita ja organisoi peliiltoja helposti.",
    features: [
      "Pelaajaprofiilit",
      "Tapahtumakalenteri",
      "Pelien hallinta",
      "Yhteisön rakentaminen",
    ],
    link: "https://gametable.site",
    linkText: "Katso GameTable",
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const { ref, isInView } = useInView();
  const Icon = product.icon;

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 shadow-md border border-[#e5e7eb] relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,212,255,0.2)] ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0088ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#0088ff] rounded-xl flex items-center justify-center mb-6 shadow-[0_4px_15px_rgba(0,212,255,0.3)]">
        <Icon className="w-8 h-8 text-[#0a1128]" />
      </div>

      <span className="inline-block bg-gradient-to-r from-[#00d4ff] to-[#0088ff] text-[#0a1128] px-3 py-1 rounded-full text-sm font-bold mb-4 shadow-[0_2px_10px_rgba(0,212,255,0.3)]">
        {product.badge}
      </span>

      <h3 className="text-2xl font-bold text-[#0a1128] mb-3">{product.title}</h3>
      <p className="text-[#6b7280] mb-6 leading-relaxed">
        {product.description}
      </p>

      <ul className="mb-6 space-y-2">
        {product.features.map((feature) => (
          <li
            key={feature}
            className="text-[#6b7280] flex items-center gap-2"
          >
            <Check className="w-5 h-5 text-[#00d4ff] flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={product.link}
        target={product.link.startsWith("http") ? "_blank" : undefined}
        className="text-[#00d4ff] font-semibold inline-flex items-center gap-2 group/link hover:gap-4 transition-all duration-300"
      >
        {product.linkText}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

export function Products() {
  const { ref, isInView } = useInView();

  return (
    <section id="tuotteet" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-extrabold text-[#0a1128] mb-4">
            Tuotteet ja ratkaisut
          </h2>
          <p className="text-xl text-[#8b9dc3] max-w-2xl mx-auto">
            Valmiita ohjelmistoratkaisuja jotka ratkaisevat todellisia ongelmia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
