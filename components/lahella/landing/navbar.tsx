"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const DEMO_URL = "https://lahio-appi-cqiq01.vercel.app/demo"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 bg-lahella-bg/85 backdrop-blur-xl border-b border-border">
      <div className="flex items-center gap-4">
        <Link href="#top" className="flex items-center gap-2">
          <Image src="https://raw.githubusercontent.com/janiperta-debug/lahio-appi/main/public/images/lahella_logo.png" alt="Lähellä logo" width={36} height={36} className="rounded-full" />
          <span className="font-serif font-semibold text-xl text-terracotta tracking-tight">Lähellä</span>
        </Link>
        <Link href="/" className="hidden sm:inline text-xs text-lahella-muted hover:text-lahella-text transition-colors">
          Takaisin: Itäinen alue
        </Link>
      </div>

      <ul className="hidden md:flex items-center gap-8">
        <li><Link href="#ominaisuudet" className="text-lahella-text2 text-sm font-medium hover:text-lahella-text transition-colors">Ominaisuudet</Link></li>
        <li><Link href="#miten-toimii" className="text-lahella-text2 text-sm font-medium hover:text-lahella-text transition-colors">Miten toimii</Link></li>
        <li>
          <a href={DEMO_URL} target="_blank" rel="noreferrer" className="bg-terracotta text-primary-foreground px-5 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
            Kokeile demoa
          </a>
        </li>
      </ul>

      <button className="md:hidden p-2 text-lahella-text" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Sulje valikko" : "Avaa valikko"}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-lahella-bg border-b border-border p-6 flex flex-col gap-4 md:hidden">
          <Link href="#ominaisuudet" className="text-lahella-text2 font-medium" onClick={() => setMobileOpen(false)}>Ominaisuudet</Link>
          <Link href="#miten-toimii" className="text-lahella-text2 font-medium" onClick={() => setMobileOpen(false)}>Miten toimii</Link>
          <a href={DEMO_URL} target="_blank" rel="noreferrer" className="bg-terracotta text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm text-center hover:opacity-90 transition-opacity">Kokeile demoa</a>
        </div>
      )}
    </nav>
  )
}
