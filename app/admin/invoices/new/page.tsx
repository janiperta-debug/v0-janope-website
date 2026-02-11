"use client";

import Link from "next/link";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const customers = [
  { id: "1", name: "Hyvink\u00e4\u00e4n Kaupunki", yTunnus: "0920261-1", product: "FinnVesta", price: 890 },
  { id: "2", name: "Espoon Kaupunki", yTunnus: "0101263-6", product: "FinnVesta", price: 890 },
  { id: "3", name: "Turun Kaupunki", yTunnus: "0204819-8", product: "FinnVerdis", price: 890 },
];

interface LineItem {
  description: string;
  quantity: number;
  unitPrice: number;
  vatRate: number;
}

export default function NewInvoicePage() {
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [items, setItems] = useState<LineItem[]>([
    { description: "", quantity: 1, unitPrice: 0, vatRate: 25.5 },
  ]);

  const customer = customers.find((c) => c.id === selectedCustomer);

  const handleCustomerChange = (id: string) => {
    setSelectedCustomer(id);
    const c = customers.find((cust) => cust.id === id);
    if (c) {
      const month = new Date().toLocaleDateString("fi-FI", { month: "long", year: "numeric" });
      setItems([
        {
          description: `${c.product} \u2013 ${month}`,
          quantity: 1,
          unitPrice: c.price,
          vatRate: 25.5,
        },
      ]);
    }
  };

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, unitPrice: 0, vatRate: 25.5 }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const vatTotal = items.reduce(
    (sum, item) => sum + Math.round(item.quantity * item.unitPrice * item.vatRate) / 100,
    0
  );
  const total = subtotal + vatTotal;

  const formatEUR = (n: number) =>
    new Intl.NumberFormat("fi-FI", { style: "currency", currency: "EUR" }).format(n);

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/invoices" className="p-2 rounded-lg hover:bg-[#f3f4f6] transition-colors text-[#6b7280]">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-2xl font-bold text-[#1f2937]">Luo lasku</h1>
      </div>

      <form className="flex flex-col gap-6">
        {/* Customer & Dates */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Perustiedot</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-3">
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Asiakas *</label>
              <select
                value={selectedCustomer}
                onChange={(e) => handleCustomerChange(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              >
                <option value="">Valitse asiakas</option>
                {customers.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.yTunnus})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Laskun p\u00e4iv\u00e4 *</label>
              <input
                type="date"
                defaultValue={new Date().toISOString().split("T")[0]}
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Er\u00e4p\u00e4iv\u00e4</label>
              <input
                type="date"
                defaultValue={new Date(Date.now() + 14 * 86400000).toISOString().split("T")[0]}
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              />
              <p className="text-xs text-[#9ca3af] mt-1">Oletuksena 14 pv</p>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">Viitenumero</label>
              <input
                type="text"
                value="00000 00000 00000 00041"
                readOnly
                className="w-full px-3 py-2.5 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg text-sm font-mono text-[#6b7280]"
              />
              <p className="text-xs text-[#9ca3af] mt-1">Generoidaan automaattisesti</p>
            </div>
          </div>
        </div>

        {/* Line Items */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[#1f2937]">Laskurivit</h2>
            <button
              type="button"
              onClick={addItem}
              className="flex items-center gap-1.5 text-sm text-[#2563eb] hover:text-[#1d4ed8] font-medium bg-transparent"
            >
              <Plus className="h-3.5 w-3.5" />
              Lis\u00e4\u00e4 rivi
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {/* Header */}
            <div className="grid grid-cols-12 gap-3 text-xs font-medium text-[#6b7280] uppercase px-1">
              <div className="col-span-5">Kuvaus</div>
              <div className="col-span-2">M\u00e4\u00e4r\u00e4</div>
              <div className="col-span-2">Yksikk\u00f6hinta</div>
              <div className="col-span-2">ALV %</div>
              <div className="col-span-1" />
            </div>

            {items.map((item, i) => (
              <div key={i} className="grid grid-cols-12 gap-3 items-center">
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => {
                    const updated = [...items];
                    updated[i].description = e.target.value;
                    setItems(updated);
                  }}
                  placeholder="Tuote tai palvelu"
                  className="col-span-5 px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                />
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    const updated = [...items];
                    updated[i].quantity = Number(e.target.value);
                    setItems(updated);
                  }}
                  min={1}
                  className="col-span-2 px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                />
                <input
                  type="number"
                  value={item.unitPrice}
                  onChange={(e) => {
                    const updated = [...items];
                    updated[i].unitPrice = Number(e.target.value);
                    setItems(updated);
                  }}
                  step="0.01"
                  className="col-span-2 px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                />
                <select
                  value={item.vatRate}
                  onChange={(e) => {
                    const updated = [...items];
                    updated[i].vatRate = Number(e.target.value);
                    setItems(updated);
                  }}
                  className="col-span-2 px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                >
                  <option value={25.5}>25,5 %</option>
                  <option value={14}>14 %</option>
                  <option value={10}>10 %</option>
                  <option value={0}>0 %</option>
                </select>
                <button
                  type="button"
                  onClick={() => removeItem(i)}
                  className="col-span-1 flex items-center justify-center text-[#9ca3af] hover:text-[#ef4444] bg-transparent"
                  disabled={items.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="mt-6 pt-4 border-t border-[#f3f4f6] flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-8">
              <span className="text-sm text-[#6b7280]">V\u00e4litulos (alv 0%)</span>
              <span className="text-sm font-medium text-[#1f2937] w-28 text-right">{formatEUR(subtotal)}</span>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-sm text-[#6b7280]">ALV yhteens\u00e4</span>
              <span className="text-sm font-medium text-[#1f2937] w-28 text-right">{formatEUR(vatTotal)}</span>
            </div>
            <div className="flex items-center gap-8 pt-2 border-t border-[#f3f4f6]">
              <span className="text-sm font-semibold text-[#1f2937]">Yhteens\u00e4</span>
              <span className="text-lg font-bold text-[#1f2937] w-28 text-right">{formatEUR(total)}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Lis\u00e4tiedot</h2>
          <textarea
            rows={3}
            placeholder="Vapaamuotoinen viesti laskulle..."
            className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] resize-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button type="submit" className="bg-[#2563eb] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-colors">
            Luo ja l\u00e4het\u00e4
          </button>
          <button type="button" className="border border-[#e5e7eb] text-[#1f2937] px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#f9fafb] transition-colors bg-transparent">
            Tallenna luonnoksena
          </button>
          <Link href="/admin/invoices" className="text-sm text-[#6b7280] hover:text-[#1f2937] px-4 py-2.5">
            Peruuta
          </Link>
        </div>
      </form>
    </div>
  );
}
