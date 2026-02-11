"use client";

export default function SettingsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1f2937]">Asetukset</h1>
        <p className="text-sm text-[#6b7280] mt-1">Yrityksen tiedot ja laskutusasetukset</p>
      </div>

      <form className="flex flex-col gap-6">
        {/* Company Info */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Yrityksen tiedot</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Yrityksen nimi</label>
              <input type="text" defaultValue="T:mi Janope" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Y-tunnus</label>
              <input type="text" defaultValue="XXXXXXX-X" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">S\u00e4hk\u00f6posti</label>
              <input type="email" defaultValue="hello@janope.fi" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Puhelin</label>
              <input type="tel" defaultValue="+358 40 123 4567" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Osoite</label>
              <input type="text" defaultValue="Esimerkkikatu 123" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Postinumero</label>
              <input type="text" defaultValue="00100" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Kaupunki</label>
              <input type="text" defaultValue="Helsinki" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
          </div>
        </div>

        {/* Banking */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Pankkitiedot</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">IBAN</label>
              <input type="text" defaultValue="FI12 3456 7890 1234 56" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm font-mono text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">BIC</label>
              <input type="text" defaultValue="NDEAFIHH" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm font-mono text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
          </div>
        </div>

        {/* Billing Defaults */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Laskutuksen oletusasetukset</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Maksuehto (p\u00e4ivi\u00e4)</label>
              <input type="number" defaultValue={14} className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">ALV-prosentti</label>
              <select className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]">
                <option value="25.5">25,5 %</option>
                <option value="14">14 %</option>
                <option value="10">10 %</option>
                <option value="0">0 %</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Viiv\u00e4styskorko %</label>
              <input type="number" defaultValue={11} step="0.5" className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
            </div>
          </div>
        </div>

        {/* Invoice Template */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Laskupohja</h2>
          <div>
            <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Alatunnisteen teksti</label>
            <textarea
              rows={2}
              defaultValue="Kiitos luottamuksestanne. Maksuehto 14 p\u00e4iv\u00e4\u00e4 netto."
              className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] resize-none"
            />
          </div>
          <div className="mt-4">
            <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Laskunumerointi</label>
            <div className="flex items-center gap-2">
              <input type="text" defaultValue="005" className="w-20 px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]" />
              <span className="text-sm text-[#6b7280]">/ 26</span>
              <p className="text-xs text-[#9ca3af] ml-2">Seuraava laskunumero</p>
            </div>
          </div>
        </div>

        {/* Save */}
        <div>
          <button type="submit" className="bg-[#2563eb] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-colors">
            Tallenna asetukset
          </button>
        </div>
      </form>
    </div>
  );
}
