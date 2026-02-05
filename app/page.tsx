import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import { About } from "@/components/about";
import { CTASection } from "@/components/cta-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function JanopeWebsite() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <Services />
      <Stats />
      <About />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
}
