"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function LandingNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#07090c]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 items-center justify-between px-6 lg:px-12">
        <Link
          href="/alue/yhteisojen-alue"
          className="flex items-center gap-2 text-sm text-[#a8b8c8] transition-colors hover:text-[#c9953a]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-display text-[10px] uppercase tracking-[0.18em]">
            Takaisin: Yhteisöjen alue
          </span>
        </Link>

        <Link
          href="/gamedesk"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3"
        >
          <Image
            src="/products/gamedesk/gamedesk-logo.png"
            alt="GameDesk"
            width={42}
            height={42}
            className="h-9 w-9 object-contain"
          />

          <span className="font-display text-lg text-[#edf2f7]">
            GameDesk
          </span>
        </Link>

        <div className="w-[180px]" />
      </div>
    </header>
  )
}