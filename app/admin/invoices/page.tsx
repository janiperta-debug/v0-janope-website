"use client";

import Link from "next/link";
import { Plus, Search, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

type InvoiceRow = {
  id: string;
  invoice_number: string;
  date: string;
  due_date: string;
  total: number;
  status: string;
  paid_date: string | null;
  customers: {
    organization_name: string;
  } | null;
};

const statusLabels: Record<string, { label: string; class: string }> = {
  paid: { label: "Maksettu", class: "bg-[#10b981]/10 text-[#10b981]" },
  sent: { label: "Lähetetty", class: "bg-[#f59e0b]/10 text-[#f59e0b]" },
  draft: { label: "Luonnos", class: "bg-[#2563eb]/10 text-[#2563eb]" },
  overdue: { label: "Erääntynyt", class: "bg-[#ef4444]/10 text-[#ef4444]" },
  cancelled: { label: "Peruttu", class: "bg-[#6b7280]/10 text-[#6b7280]" },
};

export default function InvoicesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [invoices, setInvoices] = useState<InvoiceRow[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function fetchInvoices() {
      setLoading(true);
      let query = supabase
        .from("invoices")
        .select(
          "id, invoice_number, date, due_date, total, status, paid_date, customers(organization_name)"
        )
        .order("date", { ascending: false });

      if (statusFilter !== "all") {
        query = query.eq("status", statusFilter);
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error fetching invoices:", error);
      } else {
        setInvoices((data as InvoiceRow[]) || []);
      }
      setLoading(false);
    }

    fetchInvoices();
  }, [statusFilter]);

  const filtered = invoices.filter((inv) => {
    const customerName = inv.customers?.organization_name || "";
    return (
      (inv.invoice_number || "").includes(search) ||
      customerName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1f2937]">Laskut</h1>
          <p className="text-sm text-[#6b7280] mt-1">
            {loading ? "Ladataan..." : `${invoices.length} laskua yhteensä`}
          </p>
        </div>
        <Link
          href="/admin/invoices/new"
          className="flex items-center gap-2 bg-[#2563eb] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-colors w-fit"
        >
          <Plus className="h-4 w-4" />
          Luo lasku
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9ca3af]" />
          <input
            type="text"
            placeholder="Hae laskunumerolla tai asiakkaalla..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
        >
          <option value="all">Kaikki tilat</option>
          <option value="draft">Luonnos</option>
          <option value="sent">Lähetetty</option>
          <option value="paid">Maksettu</option>
          <option value="overdue">Erääntynyt</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] overflow-x-auto">
        {loading ? (
          <div className="p-12 text-center text-[#6b7280]">
            <div className="w-8 h-8 border-2 border-[#2563eb] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            Ladataan laskuja...
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-[#6b7280]">
            <p className="text-lg font-medium mb-1">Ei laskuja</p>
            <p className="text-sm">
              {search || statusFilter !== "all"
                ? "Haulla ei löytynyt tuloksia."
                : "Luo ensimmäinen lasku aloittaaksesi."}
            </p>
          </div>
        ) : (
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-[#f3f4f6]">
                <th className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider px-5 py-3">
                  Lasku
                </th>
                <th className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider px-5 py-3">
                  Asiakas
                </th>
                <th className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider px-5 py-3">
                  Päivä
                </th>
                <th className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider px-5 py-3">
                  Eräpäivä
                </th>
                <th className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider px-5 py-3">
                  Summa
                </th>
                <th className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider px-5 py-3">
                  Tila
                </th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((inv) => {
                const status = statusLabels[inv.status] || {
                  label: inv.status,
                  class: "bg-[#6b7280]/10 text-[#6b7280]",
                };
                return (
                  <tr
                    key={inv.id}
                    className="border-b border-[#f3f4f6] last:border-0 hover:bg-[#f9fafb] transition-colors"
                  >
                    <td className="px-5 py-4">
                      <Link
                        href={`/admin/invoices/${inv.id}`}
                        className="text-sm font-medium text-[#2563eb] hover:underline"
                      >
                        #{inv.invoice_number}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-sm text-[#1f2937]">
                      {inv.customers?.organization_name || "-"}
                    </td>
                    <td className="px-5 py-4 text-sm text-[#1f2937]">
                      {inv.date
                        ? new Date(inv.date).toLocaleDateString("fi-FI")
                        : "-"}
                    </td>
                    <td className="px-5 py-4 text-sm text-[#1f2937]">
                      {inv.due_date
                        ? new Date(inv.due_date).toLocaleDateString("fi-FI")
                        : "-"}
                    </td>
                    <td className="px-5 py-4 text-sm font-medium text-[#1f2937]">
                      {inv.total != null
                        ? `${Number(inv.total).toLocaleString("fi-FI", { minimumFractionDigits: 2 })} \u20AC`
                        : "-"}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${status.class}`}
                      >
                        {status.label}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <button
                        type="button"
                        className="text-[#9ca3af] hover:text-[#6b7280] bg-transparent cursor-pointer"
                        title="Lataa PDF"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
