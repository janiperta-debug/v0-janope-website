import {
  AREAS,
  BUILDINGS,
  getBuilding,
  getBuildingsForArea,
  type Building,
} from "@/lib/janope-world";

/**
 * Viara kuuluu Janopen Keskustaan FinnVestan rinnalle.
 * Tämä pieni yhteensopivuuskerros pitää nykyisen maailman datamallin ehjänä
 * ja tuo Viaran samaan rakennuslistaan muiden tuotteiden kanssa.
 */
export const VIARA_BUILDING: Building = {
  id: "viara",
  slug: "viara",
  areaId: "omaisuuden",
  name: "Viara",
  tagline: "Kiinteistöjen ja ulkoalueiden ylläpidon digitaalinen toimintaympäristö.",
  status: "julkaistu",
  description:
    "Työnjohdon, kenttätyön, asiakkaan ja asukkaan yhteinen toimintaympäristö. Työstä syntyy ajantasainen tapahtumahistoria, hoitopäiväkirjat ja selkeä jälki tehdystä työstä.",
  features: [
    "Hoitoalueiden hallinta",
    "Työn tapahtumahistoria",
    "Asukasnäkymä ja QR-koodit",
    "Hoitopäiväkirjat ja raportit",
  ],
  link: "https://viara-tawny.vercel.app",
  linkText: "Avaa Viara",
  logo: "https://raw.githubusercontent.com/janiperta-debug/Viara/main/public/viara-logo.png",
  icon: "MapPin",
};

function ensureViaraInWorld() {
  const area = AREAS.find((item) => item.id === "omaisuuden");
  if (area && !area.buildingIds.includes(VIARA_BUILDING.id)) {
    area.buildingIds.push(VIARA_BUILDING.id);
  }

  if (!BUILDINGS.some((building) => building.id === VIARA_BUILDING.id)) {
    BUILDINGS.push(VIARA_BUILDING);
  }
}

ensureViaraInWorld();

export function getBuildingsForAreaWithViara(areaId: string): Building[] {
  return getBuildingsForArea(areaId);
}

export function getBuildingWithViara(slug: string): Building | undefined {
  return getBuilding(slug);
}
