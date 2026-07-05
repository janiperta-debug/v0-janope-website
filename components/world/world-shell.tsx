"use client";

import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { WorldMap } from "./world-map";
import { WorldFooter } from "./world-stats-bar";

/**
 * Pysyvä "Janopen maailma" -kuori.
 *
 * Elää juurilayoutissa, joten kartta (oikealla) EI lataudu uudelleen reitin
 * vaihtuessa — vain vasen paneeli (`children`) päivittyy. Mobiilissa kartta on
 * ylhäällä ja paneeli sen alla.
 */
export function WorldShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col bg-background lg:h-dvh lg:overflow-hidden">
      <SiteHeader />

      <div className="flex flex-col lg:min-h-0 lg:flex-1 lg:flex-row">
        {/* Vasen paneeli: vaihtuva sisältö (mobiilissa kartan alla, vierii sivun mukana) */}
        <div className="order-2 flex w-full flex-col border-border lg:order-1 lg:min-h-0 lg:w-[420px] lg:flex-shrink-0 lg:overflow-y-auto lg:border-r xl:w-[460px]">
          <div className="flex-1 p-5 sm:p-6 lg:p-8">{children}</div>
        </div>

        {/* Oikea puoli: maailmakartta (mobiilissa ylälohko, työpöydällä pysyvä paneeli).
            Keskitetään ja näytetään kokonaan kuvasuhteen mukaisena. */}
        <div className="order-1 flex w-full flex-shrink-0 items-center justify-center p-2 sm:p-3 lg:order-2 lg:h-auto lg:flex-1 lg:p-4">
          <WorldMap />
        </div>
      </div>

      <WorldFooter />
    </div>
  );
}
