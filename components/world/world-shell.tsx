"use client";

import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { WorldMap } from "./world-map";
import { WorldStatsBar } from "./world-stats-bar";

/**
 * Pysyvä "Janopen maailma" -kuori.
 *
 * Elää juurilayoutissa, joten kartta (oikealla) EI lataudu uudelleen reitin
 * vaihtuessa — vain vasen paneeli (`children`) päivittyy. Mobiilissa kartta on
 * ylhäällä ja paneeli sen alla.
 */
export function WorldShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-background">
      <SiteHeader />

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        {/* Vasen paneeli: vaihtuva sisältö */}
        <div className="order-2 flex min-h-0 w-full flex-col overflow-y-auto border-border lg:order-1 lg:w-[420px] lg:flex-shrink-0 lg:border-r xl:w-[460px]">
          <div className="flex-1 p-5 sm:p-6 lg:p-8">{children}</div>
        </div>

        {/* Oikea puoli: pysyvä maailmakartta */}
        <div className="order-1 h-[42vh] w-full flex-shrink-0 lg:order-2 lg:h-auto lg:flex-1">
          <WorldMap />
        </div>
      </div>

      <WorldStatsBar />
    </div>
  );
}
