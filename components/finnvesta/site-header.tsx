"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/finnvesta" className="flex items-center gap-2.5">
          <Image
            src="/finnvesta-logo.png"
            alt="FinnVesta"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-heading text-xl font-bold text-foreground">
            FinnVesta
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/finnvesta#features"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Ominaisuudet
          </Link>

          <Link
            href="/finnvesta#pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Hinnoittelu
          </Link>

          <Link
            href="https://janope.fi/yhteystiedot"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Yhteystiedot
          </Link>

          <div className="ml-2 flex items-center gap-3">
            <Link href="/demo">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                Katso demo
              </Button>
            </Link>

            <Link href="https://janope.fi/yhteystiedot">
              <Button size="sm">
                Ota yhteyttä
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Sulje valikko" : "Avaa valikko"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t border-border/30 bg-card px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link
              href="/finnvesta#features"
              className="py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Ominaisuudet
            </Link>

            <Link
              href="/finnvesta#pricing"
              className="py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Hinnoittelu
            </Link>

            <Link
              href="https://janope.fi/yhteystiedot"
              className="py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Yhteystiedot
            </Link>

            <div className="mt-2 flex flex-col gap-2">
              <Link
                href="/demo"
                onClick={() => setMobileOpen(false)}
              >
                <Button
                  variant="outline"
                  className="w-full border-border/50 bg-card text-foreground"
                >
                  Katso demo
                </Button>
              </Link>

              <Link
                href="https://janope.fi/yhteystiedot"
                onClick={() => setMobileOpen(false)}
              >
                <Button className="w-full">
                  Ota yhteyttä
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}