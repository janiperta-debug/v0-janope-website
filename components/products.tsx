"use client";

import { useState } from "react";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";

const products = [
  {
    logo: "/products/pihapiiri_logo.png",
    badge: "Kehityksessä",
    title: "Lähellä",
    description:
      "Sovellus naapurustoavun etsimiseen ja tarjoamiseen. Löydä leikkikavereita lapsille, vapaaehtoisia apuun tai mukavia hetkiä lähialueeltasi.",
    features: [
      "Leikkikaverit lapsille",
      "Auttavat kädet naapurustossa",
      "Lähitapahtumat ja kokoontumiseet",
      "Turvallinen yhteydenotto",
    ],
    link: "https://v0-lahella-app-build.vercel.app/",
    linkText: "Katso Lähellä",
  },
  {
    logo: "/products/chargehub_logo.png",
    badge: "Kehityksessä",
    title: "Voltteri",
    description:
      "Sähköautoilijoiden keskitetty latauspalvelu. Yhdistä Virta, K-Lataus, ABC ja muut latausverkot yhteen sovellukseen.",
    features: [
      "Kaikki latausverkot yhdessä",
      "Latauspisteiden haku kartalta",
      "Lataushistorian seuranta",
      "Hintojen vertailu",
    ],
    link: "https://v0-charge-hub.vercel.app/",
    linkText: "Katso Voltteri",
  },
  {
    logo: "/products/gamedesk_logo.png",
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
    logo: "/products/finnvesta_logo.png",
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
    logo: "/products/finnverdis_logo.png",
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
    link: "https://v0-saa-s-community-platform-self.vercel.app/",
    linkText: "Katso FinnVerdis",
  },
  {
    logo: "/products/gametable_logo.png",
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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-[#00d4ff]/10 relative overflow-hidden group transition-all duration-500 ${
        isExpanded
          ? "shadow-[0_12px_30px_rgba(0,212,255,0.2)]"
          : "hover:-translate-y-1 hover:shadow-lg"
      } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top border accent */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0088ff] transition-transform duration-300 origin-left ${
          isExpanded ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />

      {/* Collapsed header - always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center gap-4 p-4 sm:p-5 text-left cursor-pointer"
        aria-expanded={isExpanded}
      >
        <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
          <Image
            src={product.logo}
            alt={`${product.title} logo`}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        <h3 className="text-lg font-bold text-[#0a1128] flex-1">
          {product.title}
        </h3>

        <span className="inline-block bg-gradient-to-r from-[#00d4ff] to-[#0088ff] text-[#0a1128] px-2.5 py-0.5 rounded-full text-xs font-bold shadow-[0_2px_10px_rgba(0,212,255,0.3)] flex-shrink-0">
          {product.badge}
        </span>

        <ChevronDown
          className={`w-5 h-5 text-[#6b7280] flex-shrink-0 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expandable content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-5 pb-5 pt-0">
            <p className="text-[#6b7280] mb-4 leading-relaxed">
              {product.description}
            </p>

            <ul className="mb-4 space-y-2">
              {product.features.map((feature) => (
                <li
                  key={feature}
                  className="text-[#6b7280] flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-[#00d4ff] flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={product.link}
              target={product.link.startsWith("http") ? "_blank" : undefined}
              className="text-[#00d4ff] font-semibold inline-flex items-center gap-2 group/link hover:gap-4 transition-all duration-300 text-sm"
            >
              {product.linkText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  const { ref, isInView } = useInView();

  return (
    <section id="tuotteet" className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#f0f7ff] to-[#e8f1fd] relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00d4ff]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0088ff]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1128] mb-4">
            Tuotteet ja ratkaisut
          </h2>
          <p className="text-lg sm:text-xl text-[#8b9dc3] max-w-2xl mx-auto">
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
