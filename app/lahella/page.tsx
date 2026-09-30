import { Navbar } from "@/components/lahella/landing/navbar"
import { Hero } from "@/components/lahella/landing/hero"
import { TrustBar } from "@/components/lahella/landing/trust-bar"
import { Pillars } from "@/components/lahella/landing/pillars"
import { HowItWorks } from "@/components/lahella/landing/how-it-works"
import { WhySection } from "@/components/lahella/landing/why-section"
import { CtaSection } from "@/components/lahella/landing/cta-section"
import { Footer } from "@/components/lahella/landing/footer"

export const metadata = {
  title: "Lähellä | Janope",
  description: "Lähellä – naapuruston apu ja seura yhdessä paikassa.",
}

export default function LahellaPage() {
  return (
    <div className="lahella-theme min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Pillars />
        <HowItWorks />
        <WhySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
