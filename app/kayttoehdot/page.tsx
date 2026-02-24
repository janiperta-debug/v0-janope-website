import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Käyttöehdot | Janope",
  description: "Janopen palveluiden käyttöehdot",
};

export default function KayttoehdotPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#e5e7eb] px-4 md:px-8 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-[#6b7280] hover:text-[#0a1128] transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <Image src="/janope-logo.png" alt="Janope" width={28} height={28} className="w-auto h-auto" />
          </Link>
          <h1 className="text-lg font-bold text-[#0a1128]">Käyttöehdot</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <div className="prose prose-sm max-w-none text-[#374151]">
          <p className="text-[#6b7280] text-sm mb-8">{"Päivitetty: 12.2.2026"}</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">1. Yleistä</h2>
          <p>Nämä käyttöehdot koskevat T:mi Janopen (Y-tunnus: 3600818-6) tuottamia ohjelmistopalveluita, mukaan lukien FinnVesta, Lähellä, Voltteri ja muut Janopen tuotteet. Käyttämällä palveluita hyväksyt nämä ehdot.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">2. Palvelun kuvaus</h2>
          <p>Janope tuottaa ohjelmistoratkaisuja yhteisöille ja organisaatioille. Palvelut toimitetaan SaaS-mallilla (Software as a Service) verkon välityksellä.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">3. Käyttöoikeus</h2>
          <p>Palveluntarjoaja myöntää asiakkaalle rajoitetun, ei-yksinomaisen käyttöoikeuden palveluun sopimuksen voimassaoloajaksi. Käyttöoikeus on organisaatiokohtainen eikä sitä saa siirtää kolmannelle osapuolelle ilman palveluntarjoajan kirjallista suostumusta.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">4. Hinnoittelu ja laskutus</h2>
          <p>Palveluiden hinnoittelu perustuu voimassa olevaan hinnastoon tai erikseen sovittuun sopimukseen. Laskutus tapahtuu sovituin väliajoin. Maksuehto on 14 päivää netto, ellei toisin sovita. Viivästyskorko määräytyy korkolain mukaisesti.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">5. Palvelun saatavuus</h2>
          <p>Palveluntarjoaja pyrkii pitämään palvelun käytettävissä jatkuvasti, mutta ei takaa keskeytyksetöntä toimintaa. Huoltokatkoksista pyritään ilmoittamaan etukäteen. Palveluntarjoaja ei vastaa ylivoimaisesta esteestä johtuvista käyttökatkoksista.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">6. Tietojen omistajuus</h2>
          <p>Asiakas omistaa palveluun syöttämänsä tiedot. Palveluntarjoaja ei käytä asiakkaan tietoja muihin tarkoituksiin kuin palvelun tuottamiseen. Sopimuksen päättyessä asiakkaalla on oikeus saada tietonsa palvelusta.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">7. Vastuunrajoitus</h2>
          <p>Palveluntarjoajan kokonaisvastuu on enintään asiakkaan palvelusta maksamien maksujen määrä viimeisen 12 kuukauden ajalta. Palveluntarjoaja ei vastaa välillisistä vahingoista.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">8. Sopimuksen voimassaolo ja irtisanominen</h2>
          <p>Sopimus on voimassa toistaiseksi, ellei toisin sovita. Molemmat osapuolet voivat irtisanoa sopimuksen kirjallisesti 30 päivän irtisanomisajalla.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">9. Sovellettava laki ja erimielisyydet</h2>
          <p>Näihin ehtoihin sovelletaan Suomen lakia. Erimielisyydet pyritään ratkaisemaan ensisijaisesti neuvottelemalla. Mikäli neuvotteluissa ei päästä sopimukseen, asia ratkaistaan Etelä-Pohjanmaan käräjäoikeudessa.</p>

          <h2 className="text-lg font-semibold text-[#0a1128] mt-8 mb-3">10. Ehtojen muuttaminen</h2>
          <p>Palveluntarjoaja voi muuttaa näitä ehtoja ilmoittamalla muutoksista asiakkaalle vähintään 30 päivää ennen muutosten voimaantuloa.</p>
        </div>
      </main>
    </div>
  );
}
