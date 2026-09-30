import { SiteNav } from "@/components/loytoretki/landing/site-nav"
import { Hero } from "@/components/loytoretki/landing/hero"
import { ProblemSection } from "@/components/loytoretki/landing/problem-section"
import { DiscoverySection } from "@/components/loytoretki/landing/discovery-section"
import { TwoWaysSection } from "@/components/loytoretki/landing/two-ways-section"
import { PlaceSection } from "@/components/loytoretki/landing/place-section"
import { NotAStoreSection } from "@/components/loytoretki/landing/not-a-store-section"
import { JourneySection } from "@/components/loytoretki/landing/journey-section"
import { WorldGrowsSection } from "@/components/loytoretki/landing/world-grows-section"
import { EmotionalStatement } from "@/components/loytoretki/landing/emotional-statement"
import { FinalCta } from "@/components/loytoretki/landing/final-cta"
import { SiteFooter } from "@/components/loytoretki/landing/site-footer"

export const metadata = {
  title: "Löytöretki | Janope",
  description: "Löytöretki – reaaliaikainen tuotehaku kirpputoreilta.",
}

export default function LoytoretkiPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <ProblemSection />
        <DiscoverySection />
        <TwoWaysSection />
        <PlaceSection />
        <NotAStoreSection />
        <JourneySection />
        <WorldGrowsSection />
        <EmotionalStatement />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
