"use client";

import Link from "next/link";
import { Plus, Search, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const mockCustomers = [
  {
    id: "1",
    name: "Hyvink\u00e4\u00e4n Kaupunki",
    yTunnus: "0920261-1",
    contact: "Matti Meik\u00e4l\u00e4inen",
    email: "matti.meikalainen@hyvinkaa.fi",
    products: [{ name: "FinnVesta", plan: "Professional", price: 890 }],
    status: "active" as const,
    mrr: 890,
  },
  {
    id: "2",
    name: "Espoon Kaupunki",
    yTunnus: "0101263-6",
    contact: "Liisa Virtanen",
    email: "liisa.virtanen@espoo.fi",
    products: [{ name: "FinnVesta", plan: "Professional", price: 890 }],
    status: "active" as const,
    mrr: 890,
  },
  {
    id: "3",
    name: "Turun Kaupunki",
    yTunnus: "0204819-8",
    contact: "Pekka Korhonen",
    email: "pekka.korhonen@turku.fi",
    products: [{ name: "FinnVerdis", plan: "Team", price: 890 }],
    status: "active" as const,
    mrr: 890,
  },
];

const statusLabels: Record<string, { label: string; class: string }> = {
  active: { label: "Aktiivinen", class: "bg-[#10b981]/10 text-[#10b981]" },
  paused: { label: "Tauolla", class: "bg-[#f59e0b]/10 text-[#f59e0b]" },
  cancelled: { label: "Peruttu", class: "bg-[#ef4444]/10 text-[#ef4444]" },
};

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  const filtered = mockCustomers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.yTunnus.includes(search)
  );

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1f2937]">Asiakkaat</h1>
          <p className="text-sm text-[#6b7280] mt-1">
            {mockCustomers.length} asiakasta yhteensä
          </p>
        </div>
        <Link
          href="/admin/customers/new"
          className="flex items-center gap-2 bg-[#2563eb] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-colors w-fit"
        >
          <Plus className="h-4 w-4" />
          Lisää asiakas
        </Link>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9ca3af]" />
        <input
          type="text"
          placeholder="Hae nimell\u00e4 tai Y-tunnuksella..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-[#f3f4f6]">
              <th className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider px-5 py-3">
                Organisaatio
              </th>
              <th className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider px-5 py-3">
                Yhteyshenkil\u00f6
              </th>
              <th className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider px-5 py-3">
                Tuotteet
              </th>
              <th className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider px-5 py-3">
                MRR
              </th>
              <th className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider px-5 py-3">
                Tila
              </th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((customer) => {
              const status = statusLabels[customer.status];
              return (
                <tr
                  key={customer.id}
                  className="border-b border-[#f3f4f6] last:border-0 hover:bg-[#f9fafb] transition-colors"
                >
                  <td className="px-5 py-4">
                    <Link href={`/admin/customers/${customer.id}`} className="hover:text-[#2563eb]">
                      <p className="text-sm font-medium text-[#1f2937]">
                        {customer.name}
                      </p>
                      <p className="text-xs text-[#9ca3af]">
                        {customer.yTunnus}
                      </p>
                    </Link>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-sm text-[#1f2937]">{customer.contact}</p>
                    <p className="text-xs text-[#9ca3af]">{customer.email}</p>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col gap-1">
                      {customer.products.map((p) => (
                        <span
                          key={p.name}
                          className="inline-flex items-center text-xs bg-[#2563eb]/10 text-[#2563eb] px-2 py-0.5 rounded-md w-fit"
                        >
                          {p.name}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-[#1f2937]">
                      {customer.mrr.toLocaleString("fi-FI")} &euro;/kk
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex text-xs font-medium px-2.5 py-1 rounded-full ${status.class}`}
                    >
                      {status.label}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <button type="button" className="text-[#9ca3af] hover:text-[#6b7280] bg-transparent">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
