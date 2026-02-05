import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0a1128] text-white py-12 px-4 md:px-8 border-t border-[#00d4ff]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/janope-logo.png"
                alt="Janope"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <h3 className="text-xl font-bold text-[#00d4ff]">Janope</h3>
            </div>
            <p className="text-[#8b9dc3] mb-2">
              Ohjelmistoratkaisuja yhteisöille ja organisaatioille
            </p>
            <p className="text-[#8b9dc3]">Suomi</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#00d4ff] mb-4">Tuotteet</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="https://v0-pihapiiri.vercel.app/"
                target="_blank"
                className="text-[#8b9dc3] hover:text-[#00d4ff] transition-colors"
              >
                Pihapiiri
              </Link>
              <Link
                href="https://v0-charge-hub.vercel.app/"
                target="_blank"
                className="text-[#8b9dc3] hover:text-[#00d4ff] transition-colors"
              >
                ChargeHub
              </Link>
              <Link
                href="https://janiperta.riff.works/game-desk"
                target="_blank"
                className="text-[#8b9dc3] hover:text-[#00d4ff] transition-colors"
              >
                GameDesk
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#00d4ff] mb-4">
              Yhteystiedot
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="mailto:jani@janope.fi"
                className="text-[#8b9dc3] hover:text-[#00d4ff] transition-colors"
              >
                jani@janope.fi
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#00d4ff] mb-4">Seuraa</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="https://linkedin.com/in/janiperta"
                target="_blank"
                className="text-[#8b9dc3] hover:text-[#00d4ff] transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-[#8b9dc3] hover:text-[#00d4ff] transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-[#00d4ff]/10">
          <p className="text-[#8b9dc3]">
            &copy; 2026 Janope. Kaikki oikeudet pidätetään.
          </p>
        </div>
      </div>
    </footer>
  );
}
