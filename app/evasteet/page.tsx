import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Evästekäytäntö | Janope",
  description: "Janopen evästekäytäntö",
};

export default function EvasteetPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#e5e7eb] px-4 md:px-8 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-[#6b7280] hover:text-[#0a1128] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <Image src="/janope-logo.png" alt="Janope" width={28} height={28} className="w-auto h-auto" />
          </Link>
          <h1 className="text-lg font-bold text-[#0a1128]">Evästekäytäntö</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <div className="prose prose-sm max-w-none text-[#374151]">
          <p className="text-[#6b7280] text-sm mb-8">{"Päivitetty: 12.2.2026"}</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">1. Mitä evästeet ovat?</h2>
          <p>Evästeet (cookies) ovat pieniä tekstitiedostoja, jotka tallennetaan laitteellesi verkkosivuston vierailun yhteydessä. Evästeet auttavat sivustoa toimimaan oikein ja parantavat käyttökokemusta.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">2. Käyttämämme evästeet</h2>

          <h3 className="text-base font-semibold text-[#0a1128] mt-6 mb-2">Välttämättömät evästeet</h3>
          <p>Nämä evästeet ovat tarpeellisia sivuston perustoimintojen kannalta. Niitä ei voi poistaa käytöstä.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#e5e7eb] rounded-lg">
              <thead>
                <tr className="bg-[#f9fafb]">
                  <th className="text-left px-4 py-2 border-b border-[#e5e7eb] font-medium text-[#0a1128]">Eväste</th>
                  <th className="text-left px-4 py-2 border-b border-[#e5e7eb] font-medium text-[#0a1128]">Tarkoitus</th>
                  <th className="text-left px-4 py-2 border-b border-[#e5e7eb] font-medium text-[#0a1128]">Voimassaolo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-[#e5e7eb] font-mono text-xs">sb-*-auth-token</td>
                  <td className="px-4 py-2 border-b border-[#e5e7eb]">Supabase-istunnon hallinta (admin-kirjautuminen)</td>
                  <td className="px-4 py-2 border-b border-[#e5e7eb]">Istunto</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-[#e5e7eb] font-mono text-xs">janope-cookies</td>
                  <td className="px-4 py-2 border-b border-[#e5e7eb]">Evästesuostumuksen tallennus</td>
                  <td className="px-4 py-2 border-b border-[#e5e7eb]">365 päivää</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-[#0a1128] mt-6 mb-2">Analytiikkaevästeet</h3>
          <p>Tällä hetkellä sivusto ei käytä analytiikkaevästeitä. Mikäli analytiikkatyökaluja otetaan käyttöön tulevaisuudessa, päivitämme tämän sivun ja pyydämme suostumuksesi erikseen.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">3. Evästeiden hallinta</h2>
          <p>Voit hallita evästeitä selaimesi asetuksista. Huomaathan, että välttämättömien evästeiden poistaminen käytöstä voi vaikuttaa sivuston toimintaan.</p>
          <p>Ohjeita evästeiden hallintaan eri selaimissa:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Chrome: Asetukset {">"} Tietosuoja ja turvallisuus {">"} Evästeet</li>
            <li>Firefox: Asetukset {">"} Yksityisyys ja turvallisuus {">"} Evästeet</li>
            <li>Safari: Asetukset {">"} Yksityisyys {">"} Evästeet</li>
            <li>Edge: Asetukset {">"} Evästeet ja sivuston käyttöoikeudet</li>
          </ul>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">4. Yhteydenotot</h2>
          <p>Evästeitä koskevissa kysymyksissä voit ottaa yhteyttä: info@janope.fi</p>
        </div>
      </main>
    </div>
  );
}
