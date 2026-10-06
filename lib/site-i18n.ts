import { cookies } from "next/headers";
import type { Area, Building, NewsItem, ValueItem } from "@/lib/janope-world";

export type SiteLocale = "fi" | "en";
export const SITE_LOCALE_COOKIE = "janope-locale";

export async function getSiteLocale(): Promise<SiteLocale> {
  const value = (await cookies()).get(SITE_LOCALE_COOKIE)?.value;
  return value === "en" ? "en" : "fi";
}

export const SITE_TEXT = {
  fi: {
    home: "Etusivu", about: "Meistä", news: "Uutiset", contact: "Yhteystiedot",
    backWorld: "Takaisin maailmaan", values: "Arvomme", buildings: "Alueen rakennukset",
    building: "Alueen rakennus", more: "Lue lisää Janopesta",
    worldKicker: "Janope – yhteinen maailmamme",
    homeTitle: "Rakennamme yhteyksiä, joilla on merkitystä.",
    homeLead: "Yhdistämme ihmiset, tiedon ja palvelut.",
    commonBase: "Yhteinen perusta. Monia paikkoja.",
    endless: "Rajattomasti mahdollisuuksia.",
    chooseArea: "Valitse alue kartalta tai listasta tutkiaksesi Janopen maailmaa.",
    aboutTitle: "Janope — yhteinen maailmamme",
    newsLead: "Ajankohtaisia kuulumisia Janopesta ja digitaalisten paikkojen rakentamisesta.",
    newsMore: "Lisää kuulumisia julkaistaan sitä mukaa kun maailma kasvaa.",
    contactLead: "Haluatko tietää lisää Janopesta tai keskustella yhteistyömahdollisuuksista? Ota rohkeasti yhteyttä – vastaamme mielellämme.",
    email: "Sähköposti", phone: "Puhelin", website: "Verkkosivu", sendMessage: "Lähetä viesti",
    privacyNote: "Käsittelemme tietojasi tietosuojaselosteemme mukaisesti. Emme jaa tietojasi eteenpäin.",
    back: "Takaisin:", whatInside: "Mitä sisällä on", viewArea: "Katso koko",
    status: { julkaistu: "Avattu", tuotannossa: "Tuotannossa", rakenteilla: "Rakenteilla" },
    categories: { Uutinen: "Uutinen", Uudistus: "Uudistus", Artikkeli: "Artikkeli", Näkökulma: "Näkökulma" },
    language: "Kieli",
  },
  en: {
    home: "Home", about: "About", news: "News", contact: "Contact",
    backWorld: "Back to the world", values: "Our values", buildings: "Buildings in the area",
    building: "Building in the area", more: "Learn more about Janope",
    worldKicker: "Janope – our shared world",
    homeTitle: "Building connections that matter.",
    homeLead: "We connect people, information and services.",
    commonBase: "One foundation. Many places.",
    endless: "Endless possibilities.",
    chooseArea: "Choose an area from the map or list to explore the world of Janope.",
    aboutTitle: "Janope — our shared world",
    newsLead: "News and stories from Janope and the making of digital places.",
    newsMore: "More stories will be published as the world grows.",
    contactLead: "Would you like to learn more about Janope or discuss a collaboration? Get in touch – we would be happy to hear from you.",
    email: "Email", phone: "Phone", website: "Website", sendMessage: "Send a message",
    privacyNote: "We process your information according to our privacy policy. We do not share your information with others.",
    back: "Back:", whatInside: "What's inside", viewArea: "View the full",
    status: { julkaistu: "Open", tuotannossa: "In production", rakenteilla: "Under construction" },
    categories: { Uutinen: "News", Uudistus: "Update", Artikkeli: "Article", Näkökulma: "Perspective" },
    language: "Language",
  },
} as const;

const areaEn: Record<string, Partial<Area>> = {
  yhteisojen: { name: "Northern District", tagline: "A place where the city breathes a little more calmly.", description: "Old parks, quiet streets and new buildings meet in the north. People come together here for many reasons – to play, pursue hobbies, meet others or simply spend time. The northern part of the city changes with its residents, and that is why its character is never quite finished.", highlights: ["Parks and quiet neighbourhoods", "Places to meet", "Hobbies and free time", "Life for all ages"] },
  omaisuuden: { name: "Central District", tagline: "A place where different sides of the city meet.", description: "In the centre, the city is closest to itself. People come and go, ideas change and new things emerge alongside the old. Paths from every direction cross here, and the life of the city is perhaps most visible.", highlights: ["The city's shared meeting place", "Ideas and new beginnings", "Bustle and quiet moments", "Paths in every direction"] },
  liikkumisen: { name: "Western District", tagline: "A city in motion, always heading somewhere.", description: "In the west, nothing seems to stand still for long. There is room to experiment, build, change direction and start again. During the day the district is full of movement; in the evening it finds a new rhythm. Some come here for work, others to create, and some simply pass through – but everyone leaves a mark.", highlights: ["Room for new ideas", "Movement and activity", "Old and new side by side", "Always something happening"] },
  lahielaman: { name: "Eastern District", tagline: "The city is often closer than you think.", description: "In the east, the city opens up block by block. Along the streets are small discoveries, new encounters and places you can end up without a precise plan. Everyday life and city life run side by side, and sometimes the most interesting route is the one you never intended to take.", highlights: ["City life block by block", "Small and big discoveries", "New encounters", "Routes never planned"] },
  kestavyyden: { name: "Southern District", tagline: "Here, the city has room to breathe.", description: "In the south, the streets begin to open up and the city's rush eases a little. Space remains around the built environment, the landscape widens and the view reaches farther. Tomorrow feels a little closer here, and new ideas have room to grow.", highlights: ["Open views", "Room for new ideas", "New directions", "Looking towards tomorrow"] },
};

const buildingEn: Record<string, Partial<Building>> = {
  gametable: { tagline: "A place where tabletop gamers meet.", description: "An app for bringing tabletop gamers together. Find players and organise game nights with ease.", features: ["Player profiles", "Event calendar", "Game management", "Building the community"], linkText: "View GameTable" },
  gamedesk: { tagline: "A player's own library and progress.", description: "A video game management app for players. Track your library, discover new games and keep an eye on your progress.", features: ["Game library management", "Game tracking and backlog", "Achievement statistics", "Recommendations for what to play"], linkText: "View GameDesk" },
  finnvesta: { tagline: "Continuous condition assessment for property assets.", description: "Property asset management and condition assessment as a service. Replaces the traditional five-year assessment cycle with continuous monitoring.", features: ["Real-time condition monitoring", "Automated 15-year maintenance plan", "Investment planning", "Reduced consulting costs"], linkText: "View FinnVesta" },
  workplace: { tagline: "Your company's own digital workspace.", description: "A workspace that brings people, customers, tasks and important processes together in one place and adapts to the way your company works.", features: ["Central workspace", "Customers and contacts", "Tasks and projects", "Communication, reporting and company-specific workflows"], linkText: "View Workplace" },
  viara: { tagline: "A digital operating environment for property and outdoor-area maintenance.", description: "A shared operating environment for management, field work, customers and residents. Work creates a current event history, maintenance records and a clear trail of completed work.", features: ["Maintenance area management", "Work event history", "Resident view and QR codes", "Maintenance records and reports"], linkText: "Open Viara" },
  lahella: { tagline: "Neighbourhood help and company in one place.", description: "An app for finding and offering help in your neighbourhood. Find playmates for children, helping hands or pleasant moments close to home.", features: ["Playmates for children", "Helping hands in the neighbourhood", "Local events and gatherings", "Safe ways to connect"], linkText: "View Lähellä" },
  finverdis: { tagline: "Making environmental work visible and understandable.", description: "FinnVerdis makes environmental, energy and sustainability work visible. It brings information together and helps track goals, investments and impacts clearly.", features: ["Environmental and energy data together", "Tracking investments and actions", "Visualising progress towards goals", "Automatically updated information"], linkText: "View FinnVerdis" },
  loytoretki: { tagline: "A guide to discovery in the real world.", description: "Löytöretki helps you find interesting products and places nearby. It brings available information and community observations together and guides you towards where your next discovery might be.", features: ["Finding discoveries nearby", "Multiple information sources in one place", "Community observations", "Map and discovery-place tracking"], linkText: "View Löytöretki" },
};

const valuesEn: Record<string, ValueItem> = {
  Yhdistävä: { title: "Connecting", text: "Everything we build strengthens connections between people, information or services.", icon: "" },
  Pitkäikäinen: { title: "Built to last", text: "We design solutions for years, not campaigns.", icon: "" },
  Merkityksellinen: { title: "Meaningful", text: "Every product solves a real problem.", icon: "" },
  Kestävä: { title: "Sustainable", text: "We build responsibly, both technically and commercially.", icon: "" },
};

export function localizeArea(area: Area, locale: SiteLocale): Area {
  return locale === "fi" ? area : { ...area, ...areaEn[area.id] };
}
export function localizeBuilding(building: Building, locale: SiteLocale): Building {
  return locale === "fi" ? building : { ...building, ...buildingEn[building.id] };
}
export function localizeValue(value: ValueItem, locale: SiteLocale): ValueItem {
  return locale === "fi" ? value : (valuesEn[value.title] ?? value);
}
export function localizeNews(item: NewsItem, locale: SiteLocale): NewsItem {
  if (locale === "fi") return item;
  const map: Record<string, NewsItem> = {
    "viara-avattu": { ...item, category: "News", title: "Viara opens – a digital operating environment for property and outdoor-area maintenance", excerpt: "Viara is now part of the Janope world. The app provides a foundation for customer-specific solutions where maintenance needs and ways of working can be shaped around each customer." },
    "loytoretki-avattu": { ...item, category: "News", title: "Löytöretki opens – local discoveries in one view", excerpt: "Löytöretki helps make nearby places and discoveries easier to find by bringing available information into one service." },
    "gametable-uudistus": { ...item, category: "Update", title: "GameTable renewed – events got a completely new look", excerpt: "GameTable has taken a major step forward. Tournaments, leagues and campaigns now join game nights, with a new way to create and join events." },
    "kestava-kehitys-kaytannossa": { ...item, category: "Article", title: "Sustainability in practice: preparing the FinnVerdis hub", excerpt: "In the sustainability district, we are building tools that make environmental work visible and measurable." },
    "yhteisolahtoinen-rakentaminen": { ...item, category: "News", title: "Community-led building strengthens Janope's growth", excerpt: "We build products together with their users. The communities district grows through new places to meet." },
    "miksi-rakennamme": { ...item, category: "Perspective", title: "Why do we build digital places that matter?", excerpt: "The idea behind Janope is simple: one shared foundation, many meaningful places." },
  };
  return map[item.slug] ?? item;
}
