import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getSiteLocale } from "@/lib/site-i18n";

export async function generateMetadata() {
  const en = (await getSiteLocale()) === "en";
  return {
    title: en ? "Accessibility statement | Janope" : "Saavutettavuusseloste | Janope",
    description: en ? "Janope accessibility statement" : "Janopen saavutettavuusseloste",
  };
}

export default async function SaavutettavuusPage() {
  const en = (await getSiteLocale()) === "en";
  const sections = en
    ? [
        ["1. Accessibility status", "Janope aims to ensure the accessibility of its website and services in accordance with the EU Web Accessibility Directive and WCAG 2.1 guidelines. The website largely meets the requirements of WCAG 2.1 AA."],
        ["2. Accessibility measures", <>
          <p>We have implemented the following measures to ensure accessibility:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Semantic HTML structure</li>
            <li>Sufficient colour contrast between text and background</li>
            <li>Keyboard navigation support</li>
            <li>Alternative text for images</li>
            <li>Responsive design for different devices</li>
            <li>ARIA attributes for interactive elements</li>
          </ul>
        </>],
        ["3. Known limitations", <>
          <p>We continuously work to improve the accessibility of the website. Known limitations include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Some animations do not yet support reduced motion</li>
            <li>More complex tables in the administration panel may be challenging for screen readers</li>
          </ul>
        </>],
        ["4. Feedback", <>
          <p>We welcome feedback on the accessibility of the website. If you encounter accessibility issues, please contact us:</p>
          <p>Email: info@janope.fi</p>
          <p>We aim to respond to accessibility feedback within 14 days.</p>
        </>],
        ["5. Supervisory authority", <>
          <p>If you encounter an accessibility issue and are not satisfied with the response you receive, you can submit a notification to the Regional State Administrative Agency for Southern Finland:</p>
          <p>Regional State Administrative Agency for Southern Finland<br />Accessibility supervision unit<br />saavutettavuus@avi.fi<br />www.saavutettavuusvaatimukset.fi</p>
        </>],
      ]
    : [
        ["1. Saavutettavuuden tila", "Janope pyrkii varmistamaan verkkosivustonsa ja palveluidensa saavutettavuuden EU:n saavutettavuusdirektiivin ja WCAG 2.1 -ohjeistuksen mukaisesti. Sivusto täyttää pääosin WCAG 2.1 AA-tason vaatimukset."],
        ["2. Saavutettavuustoimet", <>
          <p>Olemme toteuttaneet seuraavat toimenpiteet saavutettavuuden varmistamiseksi:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Semanttinen HTML-rakenne</li>
            <li>Riittävät värikontrastit tekstin ja taustan välillä</li>
            <li>Näppäimistönavigaation tuki</li>
            <li>Alt-tekstit kuville</li>
            <li>Responsiivinen suunnittelu eri laitteille</li>
            <li>ARIA-attribuutit interaktiivisille elementeille</li>
          </ul>
        </>],
        ["3. Tunnetut puutteet", <>
          <p>Pyrimme jatkuvasti parantamaan sivuston saavutettavuutta. Tiedossamme olevat puutteet:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Joissain animaatioissa ei ole liikkeen vähentämisen tukea</li>
            <li>Hallintapaneelin monimutkaisemmat taulukot voivat olla haastavia ruudunlukijoille</li>
          </ul>
        </>],
        ["4. Palaute", <>
          <p>Otamme mielellämme vastaan palautetta sivuston saavutettavuudesta. Jos kohtaat saavutettavuusongelmia, ota yhteyttä:</p>
          <p>Sähköposti: info@janope.fi</p>
          <p>Pyrimme vastaamaan saavutettavuuspalautteeseen 14 päivän kuluessa.</p>
        </>],
        ["5. Valvontaviranomainen", <>
          <p>Jos huomaat sivustolla saavutettavuusongelman etkä ole tyytyväinen saamaasi vastaukseen, voit tehdä ilmoituksen Etelä-Suomen aluehallintovirastolle:</p>
          <p>Etelä-Suomen aluehallintovirasto<br />Saavutettavuuden valvonnan yksikkö<br />saavutettavuus@avi.fi<br />www.saavutettavuusvaatimukset.fi</p>
        </>],
      ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#e5e7eb] px-4 md:px-8 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-[#6b7280] hover:text-[#0a1128] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <Image src="/janope-logo.png" alt="Janope" width={28} height={28} className="w-auto h-auto" />
            <span className="sr-only">{en ? "Back to Janope" : "Takaisin Janopeen"}</span>
          </Link>
          <h1 className="text-lg font-bold text-[#0a1128]">{en ? "Accessibility statement" : "Saavutettavuusseloste"}</h1>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <div className="prose prose-sm max-w-none text-[#374151]">
          <p className="text-[#6b7280] text-sm mb-8">{en ? "Updated: 12 February 2026" : "Päivitetty: 12.2.2026"}</p>
          {sections.map(([heading, body]) => (
            <section key={heading}>
              <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">{heading}</h2>
              <div>{body}</div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
