import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getSiteLocale } from "@/lib/site-i18n";

export async function generateMetadata() {
  const en = (await getSiteLocale()) === "en";
  return {
    title: en ? "Privacy policy | Janope" : "Tietosuojaseloste | Janope",
    description: en ? "Janope privacy policy" : "Janopen tietosuojaseloste ja rekisteriseloste",
  };
}

export default async function TietosuojaPage() {
  const en = (await getSiteLocale()) === "en";
  const sections = en
    ? [
        ["1. Data controller", <>T:mi Janope<br />Business ID: 3600818-6<br />Email: info@janope.fi</>],
        ["2. Name of the register", "Janope customer and contact register"],
        ["3. Purpose and legal basis for processing personal data", <>
          <p>Personal data is processed for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Processing contact requests (consent)</li>
            <li>Managing customer relationships and invoicing (contract)</li>
            <li>Providing and developing services (legitimate interest)</li>
          </ul>
        </>],
        ["4. Personal data processed", <>
          <p>The register may contain the following information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name and contact details (email, telephone)</li>
            <li>Organisation details (name, Business ID, address)</li>
            <li>Messages submitted through the contact form</li>
            <li>Technical information related to use of the service</li>
          </ul>
        </>],
        ["5. Data retention", "Personal data is retained for as long as necessary to fulfil the purposes described in this statement. Contact form data is deleted no later than 12 months after the contact request unless a customer relationship is established."],
        ["6. Disclosures and transfers", "Personal data is not disclosed to third parties for marketing purposes. Data may be transferred to subcontractors used for the technical implementation of the service (including Supabase and Vercel), which process the data on behalf of the data controller."],
        ["7. Rights of the data subject", <>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Request access to your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to the processing of your data</li>
            <li>Request restriction of processing</li>
            <li>Transfer your data from one system to another</li>
            <li>Lodge a complaint with the supervisory authority (Office of the Data Protection Ombudsman)</li>
          </ul>
        </>],
        ["8. Data security", "Care is taken in the processing of the register, and data processed using information systems is appropriately protected. Access to the data is limited to persons who need it to perform their duties."],
        ["9. Contact", "For questions concerning the processing of personal data, you can contact us by email: info@janope.fi"],
      ]
    : [
        ["1. Rekisterinpitäjä", <>T:mi Janope<br />Y-tunnus: 3600818-6<br />Sähköposti: info@janope.fi</>],
        ["2. Rekisterin nimi", "Janopen asiakas- ja yhteystietorekisteri"],
        ["3. Henkilötietojen käsittelyn tarkoitus ja oikeusperuste", <>
          <p>Henkilötietoja käsitellään seuraaviin tarkoituksiin:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Yhteydenottopyyntöjen käsittely (suostumus)</li>
            <li>Asiakassuhteen hoitaminen ja laskutus (sopimus)</li>
            <li>Palveluiden tuottaminen ja kehittäminen (oikeutettu etu)</li>
          </ul>
        </>],
        ["4. Käsiteltävät henkilötiedot", <>
          <p>Rekisterissä voidaan käsitellä seuraavia tietoja:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nimi ja yhteystiedot (sähköposti, puhelin)</li>
            <li>Organisaation tiedot (nimi, Y-tunnus, osoite)</li>
            <li>Yhteydenottolomakkeella lähetetyt viestit</li>
            <li>Palvelun käyttöön liittyvät tekniset tiedot</li>
          </ul>
        </>],
        ["5. Tietojen säilytysaika", "Henkilötietoja säilytetään niin kauan kuin on tarpeen tässä selosteessa kuvattujen tarkoitusten toteuttamiseksi. Yhteydenottolomakkeen tiedot poistetaan viimeistään 12 kuukauden kuluttua yhteydenotosta, ellei asiakassuhdetta synny."],
        ["6. Tietojen luovutukset ja siirrot", "Tietoja ei luovuteta kolmansille osapuolille markkinointitarkoituksiin. Tietoja voidaan siirtää palvelun tekniseen toteuttamiseen käytettäville alihankkijoille (mm. Supabase, Vercel), jotka käsittelevät tietoja rekisterinpitäjän lukuun."],
        ["7. Rekisteröidyn oikeudet", <>
          <p>Sinulla on oikeus:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pyytää pääsy omiin tietoihisi</li>
            <li>Pyytää tietojen oikaisemista tai poistamista</li>
            <li>Vastustaa tietojen käsittelyä</li>
            <li>Pyytää käsittelyn rajoittamista</li>
            <li>Siirtää tiedot järjestelmästä toiseen</li>
            <li>Tehdä valitus valvontaviranomaiselle (tietosuojavaltuutetun toimisto)</li>
          </ul>
        </>],
        ["8. Tietoturva", "Rekisterin käsittelyssä noudatetaan huolellisuutta ja tietojärjestelmien avulla käsiteltävät tiedot suojataan asianmukaisesti. Tietoihin pääsevät käsiksi vain ne henkilöt, joille se on työtehtävien hoitamiseksi tarpeellista."],
        ["9. Yhteydenotot", "Kaikissa henkilötietojen käsittelyyn liittyvissä kysymyksissä voit ottaa yhteyttä sähköpostitse: info@janope.fi"],
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
          <h1 className="text-lg font-bold text-[#0a1128]">{en ? "Privacy policy" : "Tietosuojaseloste"}</h1>
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
