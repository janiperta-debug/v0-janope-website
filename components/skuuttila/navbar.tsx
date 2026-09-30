"use client"

import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-12 bg-background/85 backdrop-blur-md border-b border-orange/15">
      <div className="flex items-center gap-4"><Link href="/" className="text-xs sm:text-sm text-text-muted hover:text-foreground transition-colors">Takaisin: Läntinen alue</Link><Link href="/" className="font-[family-name:var(--font-syne)] font-extrabold text-xl sm:text-2xl tracking-tight text-foreground">
        Skuutti<span className="text-orange">la</span>
      </Link></div>
      <Link
        href="#waitlist"
        className="bg-orange text-background font-medium text-xs sm:text-sm px-3 py-2 sm:px-5 sm:py-2.5 rounded-full hover:bg-orange-light transition-all hover:-translate-y-0.5"
      >
        Ilmoittaudu
      </Link>
    </nav>
  )
}
