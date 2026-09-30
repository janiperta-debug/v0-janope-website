import { Navbar } from "@/components/skuuttila/navbar"
import { Hero } from "@/components/skuuttila/hero"
import { Operators } from "@/components/skuuttila/operators"
import { ValueProps } from "@/components/skuuttila/value-props"
import { Waitlist } from "@/components/skuuttila/waitlist"
import { Footer } from "@/components/skuuttila/footer"

export const metadata = {
  title: "Skuuttila | Janope",
  description: "Skuuttila – kaikki vuokraskuutit yhdessä sovelluksessa.",
}

export default function SkuuttilaPage() {
  return (
    <main className="skuuttila-theme min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Operators />
      <ValueProps />
      <Waitlist />
      <Footer />
    </main>
  )
}
