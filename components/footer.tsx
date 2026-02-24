import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#f8fafc] border-t border-[#00d4ff]/10 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/janope-logo.png"
                alt="Janope"
                width={36}
                height={36}
                className="w-auto h-auto"
              />
              <h3 className="text-lg font-bold text-[#0a1128]">Janope</h3>
            </div>
            <p className="text-[#6b7280] text-sm leading-relaxed">
              Ohjelmistoratkaisuja yhteisöille ja organisaatioille.
            </p>
          </div>

          {/* Tuotteet */}
          <div>
            <h3 className="text-sm font-semibold text-[#0a1128] mb-4">Tuotteet</h3>
            <div className="flex flex-col gap-2">
              <Link href="https://v0-lahella-app-build.vercel.app/" target="_blank" className="text-sm text-[#6b7280] hover:text-[#0a1128] transition-colors">
                Lähellä
              </Link>
              <Link href="https://v0-charge-hub.vercel.app/" target="_blank" className="text-sm text-[#6b7280] hover:text-[#0a1128] transition-colors">
                Voltteri
              </Link>
              <Link href="https://v0-game-desk-landing-page.vercel.app/" target="_blank" className="text-sm text-[#6b7280] hover:text-[#0a1128] transition-colors">
                GameDesk
              </Link>
              <Link href="https://finnvesta.fi" target="_blank" className="text-sm text-[#6b7280] hover:text-[#0a1128] transition-colors">
                Finnvesta
              </Link>
              <Link href="https://v0-gametable-2-0.vercel.app/" target="_blank" className="text-sm text-[#6b7280] hover:text-[#0a1128] transition-colors">
                GameTable
              </Link>
            </div>
          </div>

          {/* Laki ja yksityisyys */}
          <div>
            <h3 className="text-sm font-semibold text-[#0a1128] mb-4">Laki ja yksityisyys</h3>
            <div className="flex flex-col gap-2">
              <Link href="/tietosuoja" className="text-sm text-[#6b7280] hover:text-[#0a1128] transition-colors">
                Tietosuojaseloste
              </Link>
              <Link href="/kayttoehdot" className="text-sm text-[#6b7280] hover:text-[#0a1128] transition-colors">
                Käyttöehdot
              </Link>
              <Link href="/evasteet" className="text-sm text-[#6b7280] hover:text-[#0a1128] transition-colors">
                Evästekäytäntö
              </Link>
              <Link href="/saavutettavuus" className="text-sm text-[#6b7280] hover:text-[#0a1128] transition-colors">
                Saavutettavuusseloste
              </Link>
            </div>
          </div>

          {/* Kehittäjä */}
          <div>
            <h3 className="text-sm font-semibold text-[#0a1128] mb-4">Kehittäjä</h3>
            <p className="text-sm font-medium text-[#0a1128]">T:mi Janope</p>
            <p className="text-sm text-[#6b7280]">Y-tunnus: 3600818-6</p>
            <a href="mailto:info@janope.fi" className="text-sm text-[#00d4ff] hover:text-[#0088ff] transition-colors mt-1 inline-block">
              info@janope.fi
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[#e5e7eb]">
          <p className="text-sm text-[#6b7280]">
            &copy; 2026 Janope. Kaikki oikeudet pidätetään.
          </p>
          <p className="text-sm text-[#6b7280] mt-2 sm:mt-0">
            Tuote: T:mi Janope
          </p>
        </div>
      </div>
    </footer>
  );
}
