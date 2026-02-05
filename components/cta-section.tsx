"use client";

import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";

export function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 px-4 md:px-8 bg-[#0a1128] text-white text-center relative overflow-hidden">
      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto relative z-10 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl font-extrabold mb-4 text-balance">
          Aloitetaan yhdessä
        </h2>
        <p className="text-xl text-[#8b9dc3] mb-8">
          Kerro meille haasteestasi, niin katsotaan miten voimme auttaa
        </p>
        <Link
          href="#yhteystiedot"
          className="inline-block bg-gradient-to-r from-[#00d4ff] to-[#0088ff] text-[#0a1128] px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 hover:-translate-y-1 animate-glow"
        >
          Varaa maksuton konsultaatio
        </Link>
      </div>
    </section>
  );
}
