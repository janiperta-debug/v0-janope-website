"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#tuotteet", label: "Tuotteet" },
  { href: "#palvelut", label: "Palvelut" },
  { href: "#tietoa", label: "Tietoa" },
  { href: "#yhteystiedot", label: "Yhteystiedot" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-[#00d4ff]/10 ${
        isScrolled
          ? "bg-[#0a1128]/98 shadow-[0_2px_15px_rgba(0,212,255,0.2)]"
          : "bg-[#0a1128]/98 shadow-[0_2px_10px_rgba(0,212,255,0.1)]"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        <Link href="/admin" className="flex items-center">
          <Image
            src="/janope-logo.png"
            alt="Janope Logo"
            width={120}
            height={56}
            className="h-auto w-auto max-h-14 object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[#8b9dc3] font-medium hover:text-[#00d4ff] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d4ff] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#yhteystiedot"
          className="hidden md:inline-block bg-gradient-to-r from-[#00d4ff] to-[#0088ff] text-[#0a1128] px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
        >
          Ota yhteyttä
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-[#00d4ff] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Sulje valikko" : "Avaa valikko"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a1128]/98 backdrop-blur-md border-t border-[#00d4ff]/10 px-4 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#8b9dc3] font-medium hover:text-[#00d4ff] transition-colors block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#yhteystiedot"
                className="inline-block bg-gradient-to-r from-[#00d4ff] to-[#0088ff] text-[#0a1128] px-6 py-3 rounded-lg font-bold w-full text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ota yhteyttä
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
