import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getSiteLocale } from "@/lib/site-i18n";

export async function generateMetadata() {
  const en = (await getSiteLocale()) === "en";
  return {
    title: en ? "Cookie policy | Janope" : "Evästekäytäntö | Janope",
    description: en ? "Janope cookie policy" : "Janopen evästekäytäntö",
  };
}

export default async function EvasteetPage() {
  const en = (await getSiteLocale()) === "en";
  const t = en
    ? {
        title: "Cookie policy",
        introTitle: "1. What are cookies?",
        intro: "Cookies are small text files stored on your device when you visit a website. Cookies help the site function correctly and improve the user experience.",
        useTitle: "2. Cookies we use",
        necessaryTitle: "Necessary cookies",
        necessary: "These cookies are necessary for the site's basic functions. They cannot be disabled.",
        analyticsTitle: "Analytics cookies",
        analytics: "The site currently does not use analytics cookies. If analytics tools are introduced in the future, we will update this page and request your consent separately.",
        manageTitle: "3. Managing cookies",
        manage: "You can manage cookies in your browser settings. Please note that disabling necessary cookies may affect how the site works.",
        browserIntro: "Instructions for managing cookies in different browsers:",
        browsers: [
          "Chrome: Settings > Privacy and security > Cookies",
          "Firefox: Settings > Privacy & Security > Cookies",
          "Safari: Settings > Privacy > Cookies",
          "Edge: Settings > Cookies and site permissions",
        ],
        contactTitle: "4. Contact",
        contact: "For questions about cookies, you can contact us at: info@janope.fi",
        table: ["Cookie", "Purpose", "Validity"],
        rows: [
          ["sb-*-auth-token", "Supabase session management (admin login)", "Session"],
          ["janope-cookies", "Storing cookie consent", "365 days"],
        ],
      }
    : {
        title: "Evästekäytäntö",
        introTitle: "1. Mitä evästeet ovat?",
        intro: "Evästeet (cookies) ovat pieniä tekstitiedostoja, jotka tallennetaan laitteellesi verkkosivuston vierailun yhteydessä. Evästeet auttavat sivustoa toimimaan oikein ja parantavat käyttökokemusta.",
        useTitle: "2. Käyttämämme evästeet",
        necessaryTitle: "Välttämättömät evästeet",
        necessary: "Nämä evästeet ovat tarpeellisia sivuston perustoimintojen kannalta. Niitä ei voi poistaa käytöstä.",
        analyticsTitle: "Analytiikkaevästeet",
        analytics: "Tällä hetkellä sivusto ei käytä analytiikkaevästeitä. Mikäli analytiikkatyökaluja otetaan käyttöön tulevaisuudessa, päivitämme tämän sivun ja pyydämme suostumuksesi erikseen.",
        manageTitle: "3. Evästeiden hallinta",
        manage: "Voit hallita evästeitä selaimesi asetuksista. Huomaathan, että välttämättömien evästeiden poistaminen käytöstä voi vaikuttaa sivuston toimintaan.",
        browserIntro: "Ohjeita evästeiden hallintaan eri selaimissa:",
        browsers: [
          "Chrome: Asetukset > Tietosuoja ja turvallisuus > Evästeet",
          "Firefox: Asetukset > Yksityisyys ja turvallisuus > Evästeet",
          "Safari: Asetukset > Yksityisyys > Evästeet",
          "Edge: Asetukset > Evästeet ja sivuston käyttöoikeudet",
        ],
        contactTitle: "4. Yhteydenotot",
        contact: "Evästeitä koskevissa kysymyksissä voit ottaa yhteyttä: info@janope.fi",
        table: ["Eväste", "Tarkoitus", "Voimassaolo"],
        rows: [
          ["sb-*-auth-token", "Supabase-istunnon hallinta (admin-kirjautuminen)", "Istunto"],
          ["janope-cookies", "Evästesuostumuksen tallennus", "365 päivää"],
        ],
      };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#e5e7eb] px-4 md:px-8 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-[#6b7280] hover:text-[#0a1128] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <Image src="/janope-logo.png" alt="Janope" width={28} height={28} className="w-auto h-auto" />
            <span className="sr-only">{en ? "Back to Janope" : "Takaisin Janopeen"}</span>
          </Link>
          <h1 className="text-lg font-bold text-[#0a1128]">{t.title}</h1>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <div className="prose prose-sm max-w-none text-[#374151]">
          <p className="text-[#6b7280] text-sm mb-8">{en ? "Updated: 12 February 2026" : "Päivitetty: 12.2.2026"}</p>
          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">{t.introTitle}</h2>
          <p>{t.intro}</p>
          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">{t.useTitle}</h2>
          <h3 className="text-base font-semibold text-[#0a1128] mt-6 mb-2">{t.necessaryTitle}</h3>
          <p>{t.necessary}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#e5e7eb] rounded-lg">
              <thead>
                <tr className="bg-[#f9fafb]">
                  {t.table.map((cell) => <th key={cell} className="text-left px-4 py-2 border-b border-[#e5e7eb] font-medium text-[#0a1128]">{cell}</th>)}
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => <td key={index} className="px-4 py-2 border-b border-[#e5e7eb]">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="text-base font-semibold text-[#0a1128] mt-6 mb-2">{t.analyticsTitle}</h3>
          <p>{t.analytics}</p>
          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">{t.manageTitle}</h2>
          <p>{t.manage}</p>
          <p>{t.browserIntro}</p>
          <ul className="list-disc pl-5 space-y-1">{t.browsers.map((browser) => <li key={browser}>{browser}</li>)}</ul>
          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">{t.contactTitle}</h2>
          <p>{t.contact}</p>
        </div>
      </main>
    </div>
  );
}
