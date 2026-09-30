import Link from "next/link"
import { PhoneMockup } from "./phone-mockup"

export function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,92,0,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/5 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,92,0,0.07)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 animate-fadeUp order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 text-orange-light text-[10px] sm:text-xs font-medium px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-6 sm:mb-8 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-orange rounded-full animate-pulse-dot" />
          Tulossa pian
        </div>
        
        <h1 className="font-[family-name:var(--font-syne)] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none tracking-tight mb-4 sm:mb-6 text-balance">
          Kaikki skuutit.
          <br />
          <span className="text-orange">Yksi sovellus.</span>
        </h1>
        
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-8 sm:mb-10 font-light">
          Lopeta sovellusten selaaminen. Skuuttila näyttää kaikki lähellä olevat vuokraskuutit operaattorista riippumatta.
        </p>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <Link
            href="#waitlist"
            className="inline-flex items-center justify-center gap-2 bg-orange text-background font-medium text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-3.5 rounded-full hover:bg-orange-light transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,92,0,0.35)]"
          >
            Ilmoittaudu listalle
          </Link>
          <Link
            href="https://v0-landing-page-with-demo-two.vercel.app/demo"
            className="inline-flex items-center justify-center gap-2 bg-gray border border-gray-mid text-foreground font-medium text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-3.5 rounded-full hover:bg-gray-mid transition-all hover:-translate-y-0.5"
          >
            Kokeile demoa
          </Link>
        </div>
        <span className="block mt-3 sm:mt-4 text-text-muted text-xs sm:text-sm">Ilmainen, ei sitoumuksia</span>
      </div>
      
      {/* Phone mockup */}
      <div className="relative z-10 animate-fadeUp-delay order-1 lg:order-2">
        <PhoneMockup />
      </div>
    </section>
  )
}
