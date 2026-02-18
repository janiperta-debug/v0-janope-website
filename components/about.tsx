"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";

const aboutPoints = [
  {
    title: "Yhteisöjen rakentaja",
    description:
      "Janope rakentaa digitaalisia alustoja jotka yhdistävät ihmisiä ja yhteisöjä. Keskitymme ratkaisuihin jotka tuovat ihmiset yhteen ja helpottavat arkea.",
  },
  {
    title: "Käyttäjälähtöistä kehitystä",
    description:
      "Emme rakenna teknologiaa teknologian vuoksi. Keskitymme loppukäyttäjän kokemukseen ja ratkaisuihin jotka ovat helppokäyttöisiä ja tuottavat konkreettista arvoa.",
  },
  {
    title: "Pitkäaikainen kumppani",
    description:
      "Olemme mukana projektissa alusta loppuun ja jatkossakin. Tarjoamme ylläpitoa, tukea ja jatkokehitystä - emme katoa projektin valmistuttua.",
  },
];

export function About() {
  const { ref, isInView } = useInView();
  const { ref: imageRef, isInView: imageInView } = useInView();

  return (
    <section id="tietoa" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-[#f0f7ff]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1128] mb-6 sm:mb-8">
              Miksi Janope?
            </h2>

            {aboutPoints.map((point, index) => (
              <div key={point.title} className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0a1128] mb-3 flex items-center gap-3 sm:gap-4">
                  <span className="w-1 h-8 bg-gradient-to-b from-[#00d4ff] to-[#0088ff] inline-block" />
                  {point.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed pl-5">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <div
            ref={imageRef}
            className={`bg-gradient-to-br from-[#00d4ff]/10 to-[#0088ff]/10 rounded-2xl p-8 sm:p-12 border-2 border-[#00d4ff]/20 flex items-center justify-center transition-all duration-700 ${
              imageInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Image
              src="/janope-logo.png"
              alt="Janope - Ohjelmistoratkaisuja yhteisöille"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
