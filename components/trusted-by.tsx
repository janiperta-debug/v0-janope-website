"use client";

export function TrustedBy() {
  const partners = ["Hyvinkään kaupunki", "Tilakeskus"];

  return (
    <div className="bg-[#f8f9fa] py-8 px-4 text-center border-t border-[#00d4ff]/10">
      <p className="text-[#0a1128] font-semibold uppercase text-sm tracking-widest mb-4">
        Luottavat kumppanit
      </p>
      <div className="flex justify-center gap-8 md:gap-12 flex-wrap items-center">
        {partners.map((partner) => (
          <div
            key={partner}
            className="text-xl font-bold text-[#0a1128] opacity-70 hover:opacity-100 hover:text-[#00d4ff] transition-all duration-300 cursor-default"
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
}
