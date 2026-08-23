/**
 * Janope-maailman datamalli.
 *
 * Koko sivusto on yksi jatkuva "maailma": keskellä Janope-hub, ympärillä
 * ALUEITA (regions), ja jokaisen alueen sisällä yksi tai useampi RAKENNUS
 * (buildings = tuotteet/palvelut).
 *
 * Kartan hotspotit ja zoom-fokukset on määritelty prosentteina, joten kun
 * lopulliset kartta-grafiikat tulevat, riittää säätää `hotspot`- ja `focus`-
 * arvoja — logiikkaa ei tarvitse koskea.
 */

export type BuildStatus = "julkaistu" | "tuotannossa" | "rakenteilla";

export interface StatusMeta {
  label: string;
  /** Tailwind-luokat pienelle statusmerkille */
  className: string;
}

export const STATUS_META: Record<BuildStatus, StatusMeta> = {
  julkaistu: {
    label: "Avattu",
    className: "bg-area-sustainability text-card border-transparent",
  },
  tuotannossa: {
    label: "Tuotannossa",
    className: "bg-area-local text-card border-transparent",
  },
  rakenteilla: {
    label: "Rakenteilla",
    className: "bg-secondary text-foreground border-border",
  },
};

/** Kartan piste prosentteina (0–100) suhteessa karttakuvan kokoon. */
export interface MapPoint {
  x: number;
  y: number;
}

/** Zoom-fokus: transform-originin sijainti (%) ja skaalaus. */
export interface MapFocus {
  x: number;
  y: number;
  scale: number;
}

export interface Building {
  id: string;
  slug: string;
  areaId: string;
  name: string;
  /** Lyhyt luonnehdinta rakennuksesta */
  tagline: string;
  status: BuildStatus;
  description: string;
  features: string[];
  /** Ulkoinen linkki valmiiseen palveluun ("" jos ei vielä olemassa) */
  link: string;
  linkText: string;
  logo: string;
  /** lucide-react ikonin nimi (ks. components/world/world-icon.tsx) */
  icon: string;
}

export interface Area {
  id: string;
  slug: string;
  /** Yläotsikko kartalla, esim. "YHTEISÖJEN ALUE" */
  kicker: string;
  /** Alueen nimi, esim. "Yhteisöjen alue" */
  name: string;
  /** Lyhyt lause joka näkyy kartan hotspot-kortissa */
  tagline: string;
  /** Pidempi kuvaus alueen paneelissa */
  description: string;
  /** Alueen ydinlupaukset (checklist alue-paneelissa) */
  highlights: string[];
  icon: string;
  /** CSS-muuttujan nimi alueen aksenttivärille (ks. globals.css) */
  accentVar: string;
  /** Sijainti maailmakartalla (%) */
  hotspot: MapPoint;
  /** Zoom-fokus kun alue on valittu */
  focus: MapFocus;
  buildingIds: string[];
}

export const AREAS: Area[] = [
  {
    id: "yhteisojen",
    slug: "yhteisojen-alue",
    kicker: "Pohjoinen alue",
    name: "Pohjoinen alue",
    tagline: "Paikka, jossa ihmiset kokoontuvat.",
    description:
      "Rakennamme paikkoja, joissa yhteisöt syntyvät ja kasvavat. Pelaajat, harrastajat ja naapurit löytävät toisensa ja tekevät yhdessä enemmän.",
    highlights: [
      "Yhteisöjen kohtaamispaikat",
      "Tapahtumat ja kokoontumiset",
      "Jaetut pelit ja harrastukset",
      "Turvallinen vuorovaikutus",
    ],
    icon: "Users",
    accentVar: "--area-communities",
    hotspot: { x: 47, y: 29 },
    focus: { x: 27, y: 16, scale: 1.9 },
    buildingIds: ["gametable", "gamedesk"],
  },
  {
    id: "omaisuuden",
    slug: "omaisuuden-alue",
    kicker: "Keskusta",
    name: "Keskusta",
    tagline: "Paikka, jossa tieto ja omaisuus kohtaavat.",
    description:
      "Kiinteistöjen ja omaisuuden hallinta perustuu jatkuvaan, ajantasaiseen tietoon — ei arvauksiin. Täällä data muuttuu päätöksiksi.",
    highlights: [
      "Reaaliaikainen kunnon valvonta",
      "Pitkän aikavälin suunnittelu",
      "Läpinäkyvä päätöksenteko",
      "Kustannustehokkuus",
    ],
    icon: "Landmark",
    accentVar: "--area-property",
    hotspot: { x: 53, y: 47 },
    focus: { x: 77, y: 14, scale: 2 },
    buildingIds: ["finnvesta"],
  },
  {
    id: "liikkumisen",
    slug: "liikkumisen-alue",
    kicker: "Läntinen alue",
    name: "Läntinen alue",
    tagline: "Paikka, jossa liikkuminen on sujuvaa ja kestävää.",
    description:
      "Rakennamme älykkäämpiä ja kestävämpiä tapoja liikkua — autolla ja kevyesti. Sähköinen lataus ja ketterät kaupunkiratkaisut kokoontuvat samaan paikkaan ja luovat perustan sujuvalle arjelle.",
    highlights: [
      "Sähköisen liikkumisen infrastruktuuri",
      "Kevyen liikkumisen solmukohdat",
      "Kaikki operaattorit ja verkot yhdessä",
      "Kestävät liikenneratkaisut",
    ],
    icon: "Zap",
    accentVar: "--area-mobility",
    hotspot: { x: 35, y: 49 },
    focus: { x: 18, y: 47, scale: 2 },
    buildingIds: ["voltteri", "skuuttila"],
  },
  {
    id: "lahielaman",
    slug: "lahielaman-alue",
    kicker: "Itäinen alue",
    name: "Itäinen alue",
    tagline: "Paikka naapurustolle ja arjen löydöille.",
    description:
      "Lähialue on täynnä apua, seuraa, palveluita ja mahdollisuuksia — kun ne vain löytää. Teemme naapurustosta helpommin lähestyttävän ja tuomme oikeat löydöt näkyviin ilman turhaa etsimistä.",
    highlights: [
      "Naapuruston apu ja palvelut",
      "Kohtaamiset lähialueella",
      "Paikalliset löydöt ja mahdollisuudet",
      "Turvallinen yhteydenotto",
    ],
    icon: "Home",
    accentVar: "--area-local",
    hotspot: { x: 61, y: 50 },
    focus: { x: 80, y: 58, scale: 2 },
    buildingIds: ["lahella", "loytoretki"],
  },
  {
    id: "kestavyyden",
    slug: "kestavyyden-alue",
    kicker: "Eteläinen alue",
    name: "Eteläinen alue",
    tagline: "Paikka, jossa data ja työkalut rakentavat kestävää tulevaisuutta.",
    description:
      "Kestävä tulevaisuus rakennetaan näkyväksi. Autamme organisaatioita seuraamaan, viestimään ja edistämään ympäristötavoitteitaan.",
    highlights: [
      "Ympäristödatan visualisointi",
      "Läpinäkyvä viestintä",
      "Tavoitteiden seuranta",
      "Kansalaisten osallistaminen",
    ],
    icon: "Leaf",
    accentVar: "--area-sustainability",
    hotspot: { x: 48, y: 66 },
    focus: { x: 46, y: 76, scale: 2 },
    buildingIds: ["finnverdis"],
  },
];

export const BUILDINGS: Building[] = [
  {
    id: "gametable",
    slug: "gametable",
    areaId: "yhteisojen",
    name: "GameTable",
    tagline: "Paikka, jossa lautapelaajat kohtaavat.",
    status: "julkaistu",
    description:
      "Sovellus lautapelaajien yhdistämiseen. Löydä pelikavereita ja organisoi peli-iltoja helposti.",
    features: [
      "Pelaajaprofiilit",
      "Tapahtumakalenteri",
      "Pelien hallinta",
      "Yhteisön rakentaminen",
    ],
    link: "https://www.gametable.fi",
    linkText: "Avaa GameTable",
    logo: "/products/gametable_logo.png",
    icon: "Dice5",
  },
  {
    id: "gamedesk",
    slug: "gamedesk",
    areaId: "yhteisojen",
    name: "GameDesk",
    tagline: "Pelaajan oma kirjasto ja edistyminen.",
    status: "rakenteilla",
    description:
      "Videopelien hallintasovellus pelaajille. Seuraa pelikirjastoasi, löydä uusia pelejä ja pidä kirjaa edistymisestäsi.",
    features: [
      "Pelikirjaston hallinta",
      "Pelien seuranta ja backlog",
      "Saavutusten tilastot",
      "Suositukset pelattavaksi",
    ],
    link: "https://v0-game-desk-landing-page.vercel.app/",
    linkText: "Katso GameDesk",
    logo: "/products/gamedesk_logo.png",
    icon: "Gamepad2",
  },
  {
    id: "finnvesta",
    slug: "finnvesta",
    areaId: "omaisuuden",
    name: "FinnVesta",
    tagline: "Kiinteistöomaisuuden jatkuva kuntoarvio.",
    status: "julkaistu",
    description:
      "Kiinteistöomaisuuden hallinta ja kuntoarvio-as-a-service. Korvaa perinteisen 5 vuoden kuntoarviosyklin jatkuvalla valvonnalla.",
    features: [
      "Reaaliaikainen kunnon valvonta",
      "Automaattinen 15v kunnostussuunnitelma",
      "Investointisuunnittelu",
      "Korvaa konsulttikustannukset",
    ],
    link: "https://finnvesta.fi",
    linkText: "Avaa FinnVesta",
    logo: "/products/finnvesta_logo.png",
    icon: "Landmark",
  },
  {
    id: "lahella",
    slug: "lahella",
    areaId: "lahielaman",
    name: "Lähellä",
    tagline: "Naapuruston apu ja seura yhdessä paikassa.",
    status: "tuotannossa",
    description:
      "Sovellus naapurustoavun etsimiseen ja tarjoamiseen. Löydä leikkikavereita lapsille, vapaaehtoisia apuun tai mukavia hetkiä lähialueeltasi.",
    features: [
      "Leikkikaverit lapsille",
      "Auttavat kädet naapurustossa",
      "Lähitapahtumat ja kokoontumiset",
      "Turvallinen yhteydenotto",
    ],
    link: "https://v0-lahella-app-build.vercel.app/",
    linkText: "Avaa Lähellä",
    logo: "/products/pihapiiri_logo.png",
    icon: "Home",
  },
  {
    id: "finnverdis",
    slug: "finnverdis",
    areaId: "kestavyyden",
    name: "FinnVerdis",
    tagline: "Kunnan ympäristöviestintä näkyväksi.",
    status: "tuotannossa",
    description:
      "Modernisoi kunnan ympäristöviestintää. Keskitetty alusta joka tuo läpinäkyvyyttä ja motivoi kansalaisia.",
    features: [
      "Reaaliaikainen aurinkosähkön seuranta",
      "Energiainvestointien visualisointi",
      "Ilmastotavoitteiden edistyminen",
      "Automaattinen datan päivitys",
    ],
    link: "https://v0-saa-s-community-platform-self.vercel.app/",
    linkText: "Avaa FinnVerdis",
    logo: "/products/finnverdis_logo.png",
    icon: "Leaf",
  },
  {
    id: "voltteri",
    slug: "voltteri",
    areaId: "liikkumisen",
    name: "Voltteri",
    tagline: "Sähköisen liikkumisen keskus ja alusta.",
    status: "rakenteilla",
    description:
      "Sähköautoilijoiden keskitetty latauspalvelu. Yhdistä Virta, K-Lataus, ABC ja muut latausverkot yhteen sovellukseen.",
    features: [
      "Kaikki latausverkot yhdessä",
      "Latauspisteiden haku kartalta",
      "Lataushistorian seuranta",
      "Hintojen vertailu",
    ],
    link: "https://v0-charge-hub.vercel.app/",
    linkText: "Katso Voltteri",
    logo: "/products/chargehub_logo.png",
    icon: "Zap",
  },
  {
    id: "skuuttila",
    slug: "skuuttila",
    areaId: "liikkumisen",
    name: "Skuuttila",
    tagline: "Kevyen liikkumisen hub ja reitit.",
    status: "rakenteilla",
    description:
      "Kaikki vuokraskuutit yhdessä sovelluksessa. Näe Tier, Voi, Lime, Bolt ja muut operaattorit samalla kartalla.",
    features: [
      "Kaikki operaattorit yhdellä kartalla",
      "Lähimmän skuutin löytäminen",
      "Suora avaus operaattorisovellukseen",
      "Toimii kuten natiivi sovellus",
    ],
    link: "https://v0-landing-page-with-demo-two.vercel.app/",
    linkText: "Katso Skuuttila",
    logo: "/products/skuuttila_logo.png",
    icon: "Bike",
  },
  {
    id: "loytoretki",
    slug: "loytoretki",
    areaId: "lahielaman",
    name: "Löytöretki",
    tagline: "Reaaliaikainen tuotehaku kirpputoreilta.",
    status: "rakenteilla",
    description:
      "Reaaliaikainen tuotehaku fyysisiltä kirpputoreilta. Löydä aarteesi lähialueen kirpputoreilta ilman kierroksia hyllyltä hyllylle.",
    features: [
      "47+ kirpputorin tuotteet yhdessä",
      "Reaaliaikainen tuotehaku",
      "Karttanäkymä toimipisteistä",
      "Hälytykset uusista löydöistä",
    ],
    link: "",
    linkText: "Tulossa pian",
    logo: "/products/loytoretki_logo.png",
    icon: "Search",
  },
];

/* ---------- Haku-apurit ---------- */

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}

export function getAreaById(id: string): Area | undefined {
  return AREAS.find((a) => a.id === id);
}

export function getBuilding(slug: string): Building | undefined {
  return BUILDINGS.find((b) => b.slug === slug);
}

export function getBuildingsForArea(areaId: string): Building[] {
  return BUILDINGS.filter((b) => b.areaId === areaId);
}

/* ---------- Sisältö: arvot, tilastot, uutiset, tietoa ---------- */

export interface ValueItem {
  icon: string;
  title: string;
  text: string;
}

export const VALUES: ValueItem[] = [
  {
    icon: "Share2",
    title: "Yhdistävä",
    text: "Kaikki tuotteemme vahvistavat ihmisten, tiedon tai palveluiden välisiä yhteyksiä.",
  },
  {
    icon: "ShieldCheck",
    title: "Pitkäikäinen",
    text: "Suunnittelemme ratkaisuja vuosiksi, emme kampanjoiksi.",
  },
  {
    icon: "Target",
    title: "Merkityksellinen",
    text: "Jokainen tuote ratkaisee todellisen ongelman.",
  },
  {
    icon: "Leaf",
    title: "Kestävä",
    text: "Rakennamme vastuullisesti niin teknisesti kuin liiketoiminnallisesti.",
  },
];

export const WORLD_TAGLINE = "Digitaalisia paikkoja, joilla on merkitystä.";

export interface NewsItem {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}

export const NEWS: NewsItem[] = [
  {
    category: "Uutinen",
    date: "15.5.2025",
    title: "Voltteri etenee – sähköisen liikkumisen alusta rakenteilla",
    excerpt:
      "Liikkumisen alueen ydin, Voltteri, kokoaa latausverkot yhteen näkymään. Kehitys etenee kohti ensimmäistä julkaisua.",
    slug: "voltteri-etenee",
  },
  {
    category: "Artikkeli",
    date: "9.5.2025",
    title: "Kestävä kehitys käytännössä: FinnVerdis-hubin valmistelu käynnissä",
    excerpt:
      "Kestävyyden alueella rakennetaan työkaluja, jotka tekevät ympäristötyöstä näkyvää ja mitattavaa.",
    slug: "kestava-kehitys-kaytannossa",
  },
  {
    category: "Uutinen",
    date: "2.5.2025",
    title: "Yhteisölähtöinen rakentaminen vahvistaa Janopen kasvua",
    excerpt:
      "Rakennamme tuotteita yhdessä käyttäjien kanssa. Yhteisöjen alue kasvaa uusilla kohtaamispaikoilla.",
    slug: "yhteisolahtoinen-rakentaminen",
  },
  {
    category: "Näkökulma",
    date: "25.4.2025",
    title: "Miksi rakennamme digitaalisia paikkoja, joilla on merkitystä?",
    excerpt:
      "Janopen ajatus on yksinkertainen: yksi yhteinen perusta, monta merkityksellistä paikkaa.",
    slug: "miksi-rakennamme",
  },
];
