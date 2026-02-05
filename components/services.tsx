"use client";

import { Monitor, Link2, Target, BarChart3 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const services = [
  {
    icon: Monitor,
    title: "Kustomoidut sovellukset",
    description:
      "Rakennamme räätälöityjä ohjelmistoratkaisuja jotka vastaavat juuri sinun organisaatiosi tarpeisiin.",
  },
  {
    icon: Link2,
    title: "Integraatiot",
    description:
      "Yhdistämme olemassa olevat järjestelmät ja automatisoimme manuaalisia prosesseja.",
  },
  {
    icon: Target,
    title: "Digitalisaation konsultointi",
    description:
      "Kartoitamme digitalisointitarpeet ja laadimme toimenpidesuunnitelman organisaatiollesi.",
  },
  {
    icon: BarChart3,
    title: "Data-analytiikka",
    description:
      "Muutamme datan ymmärrettäväksi informaatioksi ja toimiviksi dashboardeiksi.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const { ref, isInView } = useInView();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`bg-white/5 backdrop-blur-md rounded-xl p-8 text-center border border-[#00d4ff]/10 transition-all duration-500 hover:-translate-y-2 hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl mb-4 drop-shadow-[0_0_10px_rgba(0,212,255,0.5)] flex justify-center">
        <Icon className="w-12 h-12 text-[#00d4ff]" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-[#8b9dc3] leading-relaxed">{service.description}</p>
    </div>
  );
}

export function Services() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="palvelut"
      className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#0a1128] to-[#1a2847] relative overflow-hidden"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 212, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">Palvelut</h2>
          <p className="text-xl text-[#8b9dc3] max-w-2xl mx-auto">
            Räätälöidyt ratkaisut organisaatiosi tarpeisiin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
