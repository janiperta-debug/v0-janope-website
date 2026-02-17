import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Tietosuojaseloste | Janope",
  description: "Janopen tietosuojaseloste ja rekisteriseloste",
};

export default function TietosuojaPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#e5e7eb] px-4 md:px-8 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-[#6b7280] hover:text-[#0a1128] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <Image src="/janope-logo.png" alt="Janope" width={28} height={28} />
          </Link>
          <h1 className="text-lg font-bold text-[#0a1128]">Tietosuojaseloste</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <div className="prose prose-sm max-w-none text-[#374151]">
          <p className="text-[#6b7280] text-sm mb-8">{"Päivitetty: 12.2.2026"}</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">1. Rekisterinpitäjä</h2>
          <p>T:mi Janope<br />Y-tunnus: 3600818-6<br />Sähköposti: info@janope.fi</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">2. Rekisterin nimi</h2>
          <p>Janopen asiakas- ja yhteystietorekisteri</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">3. Henkilötietojen käsittelyn tarkoitus ja oikeusperuste</h2>
          <p>Henkilötietoja käsitellään seuraaviin tarkoituksiin:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Yhteydenottopyyntöjen käsittely (suostumus)</li>
            <li>Asiakassuhteen hoitaminen ja laskutus (sopimus)</li>
            <li>Palveluiden tuottaminen ja kehittäminen (oikeutettu etu)</li>
          </ul>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">4. Käsiteltävät henkilötiedot</h2>
          <p>Rekisterissä voidaan käsitellä seuraavia tietoja:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nimi ja yhteystiedot (sähköposti, puhelin)</li>
            <li>Organisaation tiedot (nimi, Y-tunnus, osoite)</li>
            <li>Yhteydenottolomakkeella lähetetyt viestit</li>
            <li>Palvelun käyttöön liittyvät tekniset tiedot</li>
          </ul>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">5. Tietojen säilytysaika</h2>
          <p>Henkilötietoja säilytetään niin kauan kuin on tarpeen tässä selosteessa kuvattujen tarkoitusten toteuttamiseksi. Yhteydenottolomakkeen tiedot poistetaan viimeistään 12 kuukauden kuluttua yhteydenotosta, ellei asiakassuhdetta synny.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">6. Tietojen luovutukset ja siirrot</h2>
          <p>Tietoja ei luovuteta kolmansille osapuolille markkinointitarkoituksiin. Tietoja voidaan siirtää palvelun tekniseen toteuttamiseen käytettäville alihankkijoille (mm. Supabase, Vercel), jotka käsittelevät tietoja rekisterinpitäjän lukuun.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">7. Rekisteröidyn oikeudet</h2>
          <p>Sinulla on oikeus:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pyytää pääsy omiin tietoihisi</li>
            <li>Pyytää tietojen oikaisemista tai poistamista</li>
            <li>Vastustaa tietojen käsittelyä</li>
            <li>Pyytää käsittelyn rajoittamista</li>
            <li>Siirtää tiedot järjestelmästä toiseen</li>
            <li>Tehdä valitus valvontaviranomaiselle (tietosuojavaltuutetun toimisto)</li>
          </ul>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">8. Tietoturva</h2>
          <p>Rekisterin käsittelyssä noudatetaan huolellisuutta ja tietojärjestelmien avulla käsiteltävät tiedot suojataan asianmukaisesti. Tietoihin pääsevät käsiksi vain ne henkilöt, joille se on työtehtävien hoitamiseksi tarpeellista.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">9. Yhteydenotot</h2>
          <p>Kaikissa henkilötietojen käsittelyyn liittyvissä kysymyksissä voit ottaa yhteyttä sähköpostitse: info@janope.fi</p>
        </div>
      </main>
    </div>
  );
}
