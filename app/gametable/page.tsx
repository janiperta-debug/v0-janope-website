"use client"

import { I18nProvider } from "@/lib/gametable-i18n"
import { LandingPage } from "@/components/gametable/landing/landing-page"

export default function GameTablePage() {
  return (
    <I18nProvider>
      <LandingPage />
    </I18nProvider>
  )
}