import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="px-6 md:px-12 py-12 border-t border-gray-mid">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="font-[family-name:var(--font-syne)] font-extrabold text-xl text-foreground inline-block mb-3">
              Skuutti<span className="text-orange">la</span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed">
              Kaikki vuokraskuutit yhdessa sovelluksessa. Tier, Bolt, Voi, Lime ja Dott.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="font-medium text-sm mb-3">Tuote</h4>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><Link href="https://v0-landing-page-with-demo-two.vercel.app/demo" className="hover:text-foreground transition-colors">Demo</Link></li>
                <li><Link href="#waitlist" className="hover:text-foreground transition-colors">Odotuslistalle</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-3">Lakiasiat</h4>
              <ul className="space-y-2 text-sm text-text-muted">
                <li><Link href="/tietosuoja" className="hover:text-foreground transition-colors">Tietosuoja</Link></li>
                <li><Link href="/kayttoehdot" className="hover:text-foreground transition-colors">Kayttoehdot</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-mid flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <div>
            &copy; {currentYear} Skuuttila. Kaikki oikeudet pidatetaan.
          </div>
          <div>
            Rakennettu <span className="text-orange">v0</span>:lla
          </div>
        </div>
      </div>
    </footer>
  )
}
