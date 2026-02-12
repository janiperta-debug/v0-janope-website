"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const operators = ["Maventa", "Basware (IPP)", "Apix Messaging", "Pagero", "OpusCapita"];
const products = ["FinnVesta", "FinnVerdis", "GameTable"];
const plans: Record<string, string[]> = {
  FinnVesta: ["Starter (490 €/kk)", "Professional (890 €/kk)", "Enterprise (1 290 €/kk)"],
  FinnVerdis: ["Basic (490 €/kk)", "Team (890 €/kk)", "Enterprise (1 290 €/kk)"],
  GameTable: ["Community (490 €/kk)", "Pro (890 €/kk)"],
};

export default function NewCustomerPage() {
  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/admin/customers"
          className="p-2 rounded-lg hover:bg-[#f3f4f6] transition-colors text-[#6b7280]"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-2xl font-bold text-[#1f2937]">Lisää asiakas</h1>
      </div>

      <form className="flex flex-col gap-6">
        {/* Organization */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Organisaation tiedot</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Organisaation nimi *</label>
              <input type="text" placeholder="esim. Hyvinkään Kaupunki" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Y-tunnus *</label>
              <input type="text" placeholder="1234567-8" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Yhteyshenkilö *</label>
              <input type="text" placeholder="Etunimi Sukunimi" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Sähköposti *</label>
              <input type="email" placeholder="nimi@organisaatio.fi" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Puhelin</label>
              <input type="tel" placeholder="+358 40 123 4567" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Osoite</label>
              <input type="text" placeholder="Katuosoite" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Postinumero</label>
              <input type="text" placeholder="00100" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Kaupunki</label>
              <input type="text" placeholder="Helsinki" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
          </div>
        </div>

        {/* Verkkolaskutus */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Verkkolaskutus</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Verkkolaskuosoite (OVT) *</label>
              <input type="text" placeholder="003712345678" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm font-mono text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
              <p className="text-xs text-[#9ca3af] mt-1">Alkaa 0037, pituus 12-17 merkkiä</p>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Operaattori *</label>
              <select className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]">
                <option value="">Valitse operaattori</option>
                {operators.map((op) => (
                  <option key={op} value={op}>{op}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Billing */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Laskutusasetukset</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Laskutuspäivä</label>
              <select className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]">
                <option value="1">1. päivä</option>
                <option value="15">15. päivä</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Maksuehto</label>
              <select className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]">
                <option value="14">14 päivää</option>
                <option value="21">21 päivää</option>
                <option value="30">30 päivää</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">ALV %</label>
              <select className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]">
                <option value="25.5">25,5 %</option>
                <option value="14">14 %</option>
                <option value="10">10 %</option>
                <option value="0">0 %</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Selection */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Tuote</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Tuote *</label>
              <select className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]">
                <option value="">Valitse tuote</option>
                {products.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Paketti</label>
              <select className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]">
                <option value="">Valitse ensin tuote</option>
              </select>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="bg-[#2563eb] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-colors"
          >
            Tallenna asiakas
          </button>
          <Link
            href="/admin/customers"
            className="border border-[#e5e7eb] text-[#6b7280] px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#f9fafb] transition-colors"
          >
            Peruuta
          </Link>
        </div>
      </form>
    </div>
  );
}
