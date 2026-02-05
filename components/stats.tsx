"use client";

import { useInView } from "@/hooks/use-in-view";

const stats = [
  { number: "2", label: "Tuotantosovellusta" },
  { number: "97", label: "Kiinteistöä Finnvestassa" },
  { number: "100%", label: "Suomalainen toimija" },
  { number: "12 vk", label: "Keskimääräinen toteutusaika" },
];

function StatItem({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-500 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-[#00d4ff] to-white bg-clip-text text-transparent">
        {stat.number}
      </div>
      <div className="text-lg text-[#8b9dc3]">{stat.label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#0a1128] to-[#1a2847] relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,212,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(0,136,255,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
