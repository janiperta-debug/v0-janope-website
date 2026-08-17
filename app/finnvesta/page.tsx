import { SiteHeader } from "@/components/finnvesta/site-header"
import { SiteFooter } from "@/components/finnvesta/site-footer"
import { HeroSection } from "@/components/finnvesta/landing/hero-section"
import { FeaturesSection } from "@/components/finnvesta/landing/features-section"
import { ComparisonSection } from "@/components/finnvesta/landing/comparison-section"
import { HowItWorksSection } from "@/components/finnvesta/landing/how-it-works-section"
import { PricingSection } from "@/components/finnvesta/landing/pricing-section"
import { FaqSection } from "@/components/finnvesta/landing/faq-section"

export const metadata = {
  title: "FinnVesta | Janope",
  description: "FinnVesta – kiinteistöomaisuuden jatkuva kuntoarvio.",
}

export default function FinnVestaPage() {
  return (
    <div className="finnvesta-theme min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ComparisonSection />
        <HowItWorksSection />
        <PricingSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}