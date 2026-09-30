"use client"

import Image from "next/image"
import Link from "next/link"

const metrics = [
  ["2 847 kWh", "Tuotettua energiaa eilen", "Noin 140 omakotitalon vuorokauden lämmitys"],
  ["1 320 kpl", "Uusia puita istutettu", "Tämän vuoden aikana"],
  ["12,4 t", "Materiaaleja kierrätetty", "Yhteisön yhteinen vaikutus"],
  ["8 532 km", "Pyöräilymatkoja", "Yhdessä kuljettu matka"],
]

const pillars = [
  ["▤", "Viesty työnne", "Näytä konkreettisesti, mitä organisaatiosi tekee ympäristön ja kestävän tulevaisuuden eteen."],
  ["♧", "Innosta osallistumaan", "Anna asukkaille ja työntekijöille syy osallistua – arjen teoilla on merkitys."],
  ["↗", "Näe ja mittaa vaikutus", "Seuraa edistymistä, näe tulokset ja tee ne helposti ymmärrettäviksi."],
  ["♡", "Luo luottamusta", "Avoin ja selkeä viestintä rakentaa luottamusta ja vahvistaa organisaation mainetta."],
]

function Verdi() {
  return (
    <div className="fv-verdi" aria-label="Verdi">
      <div className="fv-verdi-leaf">⌁</div>
      <div className="fv-verdi-face"><span>•</span><span>•</span><b>◡</b></div>
    </div>
  )
}

function PhoneMockup() {
  return (
    <div className="fv-phone-wrap">
      <div className="fv-phone">
        <div className="fv-phone-notch" />
        <div className="fv-phone-status"><span>8.20</span><span>••• 5G ▰</span></div>
        <div className="fv-phone-scene">
          <div className="fv-phone-trees" />
          <div className="fv-phone-card">
            <div className="fv-phone-greeting"><Verdi /><div><strong>Hyvää huomenta!</strong><span>Tänään on hyvä päivä. Olemme hieman edellä vuoden 2035 tavoitettamme.</span></div></div>
            <div className="fv-phone-main">
              <small>♧ &nbsp; T Ä N Ä Ä N &nbsp; ♧</small>
              <h3>Tuotimme eilen energiaa</h3>
              <strong>2 847 <em>kWh.</em></strong>
              <div className="fv-phone-energy"><div className="fv-house" /><p>Sillä lämmittäisit noin <b>140 omakotitaloa</b> vuorokauden ajan.</p></div>
              <div className="fv-phone-progress"><div><b>+23 %</b><span>enemmän kuin viime vuonna.</span></div><div><b>24 %</b><span>matkalla kohti vuotta 2035.</span></div></div>
              <a href="#ratkaisu">Katso tarkemmin →</a>
            </div>
            <div className="fv-phone-tabs"><span>Energia</span><span>Ruoka</span><span>Ilmasto</span><span>Luonto</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FinnVerdisPage() {
  return (
    <main className="finnverdis-theme">
      <nav className="fv-nav">
        <Link href="/" className="fv-back">← Janope</Link>
        <Link href="/finnverdis" className="fv-brand">
          <Image src="/products/finnverdis_logo.png" alt="FinnVerdis" width={150} height={45} priority />
        </Link>
        <div className="fv-nav-links">
          <a href="#ratkaisu">Ratkaisu</a><a href="#hyodyt">Hyödyt</a><a href="#ominaisuudet">Ominaisuudet</a><a href="#asiakkaat">Asiakastarinat</a><a href="#yhteys">Ota yhteyttä</a>
        </div>
        <a className="fv-button fv-button-small" href="#yhteys">Varaa esittely ↗</a>
      </nav>

      <section className="fv-hero">
        <div className="fv-landscape" />
        <div className="fv-hero-content">
          <div className="fv-kicker">VIESTI. VAIKUTA. OSALLISTA.</div>
          <h1>Teette jo paljon.<br /><span>Me autamme näyttämään sen.</span></h1>
          <p>FinnVerdis auttaa kuntia ja organisaatioita kertomaan ympäristötyöstään tavalla, jonka asukkaat ymmärtävät ja johon he haluavat osallistua.</p>
          <div className="fv-actions"><a className="fv-button" href="#yhteys">Varaa esittely ♧</a><a className="fv-video" href="#ratkaisu">Katso miten toimii <span>▶</span></a></div>
        </div>
        <PhoneMockup />
      </section>

      <section id="hyodyt" className="fv-pillars">
        <div className="fv-section-intro"><span>♧</span><h2>FinnVerdis tekee vaikutuksista ymmärrettäviä.</h2></div>
        <div className="fv-pillar-grid">{pillars.map(([icon,title,text]) => <article key={title}><div className="fv-pillar-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="fv-problem">
        <div><span className="fv-kicker">MIKSI VASTUULLISUUSTYÖ JÄÄ NÄKYMÄTTÖMÄKSI?</span><h2>Teette jo paljon.<br />Me teemme sen näkyväksi.</h2><p>FinnVerdis kokoaa eri lähteistä tulevat tiedot, muuttaa ne ymmärrettäväksi tarinaksi ja tuo ne asukkaiden arkeen – joka päivä.</p><ul><li>Automaattinen datan kokoaminen</li><li>Selkeät, innostavat näkymät</li><li>Helppo hallinta ja raportointi</li><li>Brändinne näköinen palvelu</li></ul><a href="#ominaisuudet">Tutustu ratkaisuun tarkemmin →</a></div><div className="fv-impact"><div className="fv-impact-landscape" />{metrics.map(([big,label,small],i)=><div className={"fv-impact-card card-"+i} key={label}><b>{big}</b><span>{label}</span><small>{small}</small></div>)}</div>
      </section>

      <section id="ratkaisu" className="fv-story"><span className="fv-kicker">MIKSI FINNVERDIS?</span><h2>Numerot kertovat. Verdis auttaa ymmärtämään.</h2><p>Vastuullisuustyön ei tarvitse päätyä vuosiraporttiin. FinnVerdis tekee datasta jatkuvan, visuaalisen kokemuksen, jota voi seurata, jakaa ja käyttää keskustelun avaajana.</p><div className="fv-story-quote">“Pieniä tekoja, suuri vaikutus – yhdessä.” <span>— Verdi</span></div></section>

      <section id="ominaisuudet" className="fv-features"><div><span className="fv-kicker">RAKENNETTU ARKEEN</span><h2>Yksi paikka vaikutuksille.</h2></div><div className="fv-feature-grid"><article><b>01</b><h3>Data yhdestä paikasta</h3><p>Yhdistämme tarvittavat lähteet ja päivitämme näkymät ilman jatkuvaa käsityötä.</p></article><article><b>02</b><h3>Ymmärrettävät tarinat</h3><p>Muunnamme luvut vertauksiksi ja havainnoiksi, jotka jokainen voi ymmärtää.</p></article><article><b>03</b><h3>Osallistava kokemus</h3><p>Asukkaat näkevät, mitä tapahtuu ja miten heidän omat tekonsa liittyvät kokonaisuuteen.</p></article><article><b>04</b><h3>Teidän näköisenne</h3><p>Visuaalinen ilme, sisältö ja painotukset voidaan rakentaa organisaationne tarpeisiin.</p></article></div></section>

      <section id="asiakkaat" className="fv-trust"><span className="fv-kicker">LUOTTAMUSTA JA TULOKSIA</span><h2>Hyvät teot ansaitsevat tulla nähdyiksi.</h2><p>Asiakastarinoille jätetään tähän oma paikka, kun ensimmäiset vahvistetut referenssit ovat valmiit julkaistaviksi.</p><div className="fv-trust-row"><div>01<br /><b>Kunta</b></div><div>02<br /><b>Kaupunki</b></div><div>03<br /><b>Organisaatio</b></div></div></section>

      <section id="yhteys" className="fv-cta"><div><span className="fv-kicker">VALMIINA NÄYTTÄMÄÄN VAIKUTUKSET?</span><h2>Hyvät teot ansaitsevat tulla nähdyiksi.</h2><p>Varaa maksuton esittely ja katsotaan, miten FinnVerdis voisi palvella juuri teidän organisaatiotanne.</p></div><a className="fv-button" href="mailto:info@janope.fi?subject=FinnVerdis%20esittely">Varaa esittely ♧</a></section>

      <footer className="fv-footer"><div><Image src="/products/finnverdis_logo.png" alt="FinnVerdis" width={150} height={45} /><p>Autamme organisaatioita viestimään ympäristötyöstään tavalla, joka innostaa, ymmärretään ja osallistuttaa.</p></div><div><b>Ratkaisu</b><a href="#ominaisuudet">Ominaisuudet</a><a href="#hyodyt">Hyödyt</a><a href="#ratkaisu">Integraatiot</a></div><div><b>Resurssit</b><a href="#asiakkaat">Asiakastarinat</a><a href="#yhteys">Ota yhteyttä</a></div><div><b>Janope</b><a href="/">Janope-maailma</a></div><div><a className="fv-button fv-button-small" href="mailto:info@janope.fi">✉ Ota yhteyttä</a></div><small>© 2026 FinnVerdis · Janope</small></footer>
    </main>
  )
}
