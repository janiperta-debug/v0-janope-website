import { LandingNav } from "@/components/gamedesk/landing/landing-nav"
import { LandingHero } from "@/components/gamedesk/landing/landing-hero"
import { LandingFeatures } from "@/components/gamedesk/landing/landing-features"
import { LandingDivisions } from "@/components/gamedesk/landing/landing-divisions"
import { LandingAppShowcase } from "@/components/gamedesk/landing/landing-app-showcase"
import { LandingCta } from "@/components/gamedesk/landing/landing-cta"
import { LandingFooter } from "@/components/gamedesk/landing/landing-footer"

export const metadata = {
  title: "GameDesk | Janope",
  description: "GameDesk – pelaajan oma kirjasto ja edistyminen.",
}

export default function GameDeskPage() {
  return (
    <div className="gamedesk-theme min-h-screen">
      <LandingNav />
      <main>
        <LandingHero />
        <LandingFeatures />
        <LandingDivisions />
        <LandingAppShowcase />
        <LandingCta />
      </main>
      <LandingFooter />
    </div>
  )
}