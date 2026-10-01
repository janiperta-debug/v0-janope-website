import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getSiteLocale } from "@/lib/site-i18n";

export async function generateMetadata() {
  const en = (await getSiteLocale()) === "en";
  return {
    title: en ? "Terms of use | Janope" : "Käyttöehdot | Janope",
    description: en ? "Janope terms of use" : "Janopen palveluiden käyttöehdot",
  };
}

export default async function KayttoehdotPage() {
  const en = (await getSiteLocale()) === "en";
  const sections = en
    ? [
        ["1. General", "These terms of use apply to software services provided by T:mi Janope (Business ID: 3600818-6), including FinnVesta, Lähellä, Voltteri and other Janope products. By using the services, you accept these terms."],
        ["2. Service description", "Janope provides software solutions for communities and organisations. The services are delivered as Software as a Service (SaaS) over the internet."],
        ["3. Right of use", "The service provider grants the customer a limited, non-exclusive right to use the service for the duration of the agreement. The right of use is organisation-specific and may not be transferred to a third party without the service provider's written consent."],
        ["4. Pricing and invoicing", "Service pricing is based on the current price list or a separately agreed contract. Invoicing takes place at agreed intervals. The payment term is 14 days net unless otherwise agreed. Late-payment interest is determined in accordance with the Interest Act."],
        ["5. Service availability", "The service provider aims to keep the service continuously available but does not guarantee uninterrupted operation. Planned maintenance interruptions will be announced in advance where possible. The service provider is not liable for interruptions caused by force majeure."],
        ["6. Ownership of data", "The customer owns the data entered into the service. The service provider does not use customer data for purposes other than providing the service. When the agreement ends, the customer has the right to receive its data from the service."],
        ["7. Limitation of liability", "The service provider's total liability is limited to the amount of fees paid by the customer for the service during the preceding 12 months. The service provider is not liable for indirect damages."],
        ["8. Term and termination", "The agreement is valid until further notice unless otherwise agreed. Either party may terminate the agreement in writing with a notice period of 30 days."],
        ["9. Governing law and disputes", "These terms are governed by Finnish law. Disputes will primarily be resolved through negotiation. If no agreement is reached, the matter will be resolved by the District Court of South Ostrobothnia."],
        ["10. Changes to the terms", "The service provider may amend these terms by notifying the customer of the changes at least 30 days before they take effect."],
      ]
    : [
        ["1. Yleistä", "Nämä käyttöehdot koskevat T:mi Janopen (Y-tunnus: 3600818-6) tuottamia ohjelmistopalveluita, mukaan lukien FinnVesta, Lähellä, Voltteri ja muut Janopen tuotteet. Käyttämällä palveluita hyväksyt nämä ehdot."],
        ["2. Palvelun kuvaus", "Janope tuottaa ohjelmistoratkaisuja yhteisöille ja organisaatioille. Palvelut toimitetaan SaaS-mallilla (Software as a Service) verkon välityksellä."],
        ["3. Käyttöoikeus", "Palveluntarjoaja myöntää asiakkaalle rajoitetun, ei-yksinomaisen käyttöoikeuden palveluun sopimuksen voimassaoloajaksi. Käyttöoikeus on organisaatiokohtainen eikä sitä saa siirtää kolmannelle osapuolelle ilman palveluntarjoajan kirjallista suostumusta."],
        ["4. Hinnoittelu ja laskutus", "Palveluiden hinnoittelu perustuu voimassa olevaan hinnastoon tai erikseen sovittuun sopimukseen. Laskutus tapahtuu sovituin väliajoin. Maksuehto on 14 päivää netto, ellei toisin sovita. Viivästyskorko määräytyy korkolain mukaisesti."],
        ["5. Palvelun saatavuus", "Palveluntarjoaja pyrkii pitämään palvelun käytettävissä jatkuvasti, mutta ei takaa keskeytyksetöntä toimintaa. Huoltokatkoksista pyritään ilmoittamaan etukäteen. Palveluntarjoaja ei vastaa ylivoimaisesta esteestä johtuvista käyttökatkoksista."],
        ["6. Tietojen omistajuus", "Asiakas omistaa palveluun syöttämänsä tiedot. Palveluntarjoaja ei käytä asiakkaan tietoja muihin tarkoituksiin kuin palvelun tuottamiseen. Sopimuksen päättyessä asiakkaalla on oikeus saada tietonsa palvelusta."],
        ["7. Vastuunrajoitus", "Palveluntarjoajan kokonaisvastuu on enintään asiakkaan palvelusta maksamien maksujen määrä viimeisen 12 kuukauden ajalta. Palveluntarjoaja ei vastaa välillisistä vahingoista."],
        ["8. Sopimuksen voimassaolo ja irtisanominen", "Sopimus on voimassa toistaiseksi, ellei toisin sovita. Molemmat osapuolet voivat irtisanoa sopimuksen kirjallisesti 30 päivän irtisanomisajalla."],
        ["9. Sovellettava laki ja erimielisyydet", "Näihin ehtoihin sovelletaan Suomen lakia. Erimielisyydet pyritään ratkaisemaan ensisijaisesti neuvottelemalla. Mikäli neuvotteluissa ei päästä sopimukseen, asia ratkaistaan Etelä-Pohjanmaan käräjäoikeudessa."],
        ["10. Ehtojen muuttaminen", "Palveluntarjoaja voi muuttaa näitä ehtoja ilmoittamalla muutoksista asiakkaalle vähintään 30 päivää ennen muutosten voimaantuloa."],
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
          <h1 className="text-lg font-bold text-[#0a1128]">{en ? "Terms of use" : "Käyttöehdot"}</h1>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <div className="prose prose-sm max-w-none text-[#374151]">
          <p className="text-[#6b7280] text-sm mb-8">{en ? "Updated: 12 February 2026" : "Päivitetty: 12.2.2026"}</p>
          {sections.map(([heading, body]) => (
            <section key={heading}>
              <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">{heading}</h2>
              <p>{body}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
