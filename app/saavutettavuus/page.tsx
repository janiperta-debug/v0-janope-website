import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Saavutettavuusseloste | Janope",
  description: "Janopen saavutettavuusseloste",
};

export default function SaavutettavuusPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#e5e7eb] px-4 md:px-8 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-[#6b7280] hover:text-[#0a1128] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <Image src="/janope-logo.png" alt="Janope" width={28} height={28} />
          </Link>
          <h1 className="text-lg font-bold text-[#0a1128]">Saavutettavuusseloste</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <div className="prose prose-sm max-w-none text-[#374151]">
          <p className="text-[#6b7280] text-sm mb-8">{"Päivitetty: 12.2.2026"}</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">1. Saavutettavuuden tila</h2>
          <p>Janope pyrkii varmistamaan verkkosivustonsa ja palveluidensa saavutettavuuden EU:n saavutettavuusdirektiivin ja WCAG 2.1 -ohjeistuksen mukaisesti. Sivusto täyttää pääosin WCAG 2.1 AA-tason vaatimukset.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">2. Saavutettavuustoimet</h2>
          <p>Olemme toteuttaneet seuraavat toimenpiteet saavutettavuuden varmistamiseksi:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Semanttinen HTML-rakenne</li>
            <li>Riittävät värikontrastit tekstin ja taustan välillä</li>
            <li>Näppäimistönavigaation tuki</li>
            <li>Alt-tekstit kuville</li>
            <li>Responsiivinen suunnittelu eri laitteille</li>
            <li>ARIA-attribuutit interaktiivisille elementeille</li>
          </ul>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">3. Tunnetut puutteet</h2>
          <p>Pyrimme jatkuvasti parantamaan sivuston saavutettavuutta. Tiedossamme olevat puutteet:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Joissain animaatioissa ei ole liikkeen vähentämisen tukea</li>
            <li>Hallintapaneelin monimutkaisemmat taulukot voivat olla haastavia ruudunlukijoille</li>
          </ul>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">4. Palaute</h2>
          <p>Otamme mielellämme vastaan palautetta sivuston saavutettavuudesta. Jos kohtaat saavutettavuusongelmia, ota yhteyttä:</p>
          <p>Sähköposti: info@janope.fi</p>
          <p>Pyrimme vastaamaan saavutettavuuspalautteeseen 14 päivän kuluessa.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">5. Valvontaviranomainen</h2>
          <p>Jos huomaat sivustolla saavutettavuusongelmia etkä ole tyytyväinen saamaasi vastaukseen, voit tehdä ilmoituksen Etelä-Suomen aluehallintovirastolle:</p>
          <p>Etelä-Suomen aluehallintovirasto<br />Saavutettavuuden valvonnan yksikkö<br />saavutettavuus@avi.fi<br />www.saavutettavuusvaatimukset.fi</p>
        </div>
      </main>
    </div>
  );
}
