"use client";

import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";

export function Hero() {
  const { ref, isInView } = useInView();

  return (
    <section className="mt-[70px] bg-gradient-to-br from-[#0a1128] to-[#1a2847] text-white py-32 px-8 text-center relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(0,212,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(0,136,255,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto relative z-10 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-[#00d4ff] via-white to-[#00d4ff] bg-clip-text text-transparent text-balance">
          Ohjelmistoratkaisuja yhteisöille ja organisaatioille
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-[#8b9dc3] text-pretty">
          Rakennamme digitaalisia alustoja jotka yhdistävät ihmisiä, dataa ja yhteisöjä
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="#tuotteet"
            className="bg-gradient-to-r from-[#00d4ff] to-[#0088ff] text-[#0a1128] px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,212,255,0.4)] hover:shadow-[0_6px_30px_rgba(0,212,255,0.6)]"
          >
            Tutustu tuotteisiin
          </Link>
          <Link
            href="#yhteystiedot"
            className="bg-transparent text-[#00d4ff] px-8 py-4 rounded-lg font-semibold text-lg border-2 border-[#00d4ff] transition-all duration-300 hover:bg-[#00d4ff]/10 hover:-translate-y-1"
          >
            Varaa konsultaatio
          </Link>
        </div>
      </div>
    </section>
  );
}
