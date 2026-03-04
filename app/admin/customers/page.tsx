"use client";

import Link from "next/link";
import { Plus, Search, MoreHorizontal } from "lucide-react";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

type CustomerWithProducts = {
  id: string;
  organization_name: string;
  y_tunnus: string;
  contact_name: string;
  email: string;
  status: string;
  customer_products: {
    product_name: string;
    plan_name: string;
    monthly_price: number;
  }[];
};

const statusLabels: Record<string, { label: string; class: string }> = {
  active: { label: "Aktiivinen", class: "bg-[#10b981]/10 text-[#10b981]" },
  paused: { label: "Tauolla", class: "bg-[#f59e0b]/10 text-[#f59e0b]" },
  cancelled: { label: "Peruttu", class: "bg-[#ef4444]/10 text-[#ef4444]" },
};

export default function CustomersPage() {
  const [search, setSearch] = useState("");
  const [customers, setCustomers] = useState<CustomerWithProducts[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function fetchCustomers() {
      setLoading(true);
      const { data, error } = await supabase
        .from("customers")
        .select(
          "id, organization_name, y_tunnus, contact_name, email, status, customer_products(product_name, plan_name, monthly_price)"
        )
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching customers:", error);
      } else {
        setCustomers((data as CustomerWithProducts[]) || []);
      }
      setLoading(false);
    }

    fetchCustomers();
  }, []);

  const filtered = customers.filter(
    (c) =>
      c.organization_name.toLowerCase().includes(search.toLowerCase()) ||
      (c.y_tunnus && c.y_tunnus.includes(search))
  );

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1f2937]">Asiakkaat</h1>
          <p className="text-sm text-[#6b7280] mt-1">
            {loading ? "Ladataan..." : `${customers.length} asiakasta yhteensä`}
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
          placeholder="Hae nimellä tai Y-tunnuksella..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] overflow-x-auto">
        {loading ? (
          <div className="p-12 text-center text-[#6b7280]">
            <div className="w-8 h-8 border-2 border-[#2563eb] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            Ladataan asiakkaita...
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-[#6b7280]">
            <p className="text-lg font-medium mb-1">Ei asiakkaita</p>
            <p className="text-sm">
              {search
                ? "Haulla ei löytynyt tuloksia."
                : "Lisää ensimmäinen asiakas aloittaaksesi."}
            </p>
          </div>
        ) : (
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-[#f3f4f6]">
                <th className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider px-5 py-3">
                  Organisaatio
                </th>
                <th className="text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider px-5 py-3">
                  Yhteyshenkilö
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
                const status = statusLabels[customer.status] || {
                  label: customer.status,
                  class: "bg-[#6b7280]/10 text-[#6b7280]",
                };
                const mrr = customer.customer_products.reduce(
                  (sum, p) => sum + (p.monthly_price || 0),
                  0
                );
                return (
                  <tr
                    key={customer.id}
                    className="border-b border-[#f3f4f6] last:border-0 hover:bg-[#f9fafb] transition-colors"
                  >
                    <td className="px-5 py-4">
                      <Link
                        href={`/admin/customers/${customer.id}`}
                        className="hover:text-[#2563eb]"
                      >
                        <p className="text-sm font-medium text-[#1f2937]">
                          {customer.organization_name}
                        </p>
                        <p className="text-xs text-[#9ca3af]">
                          {customer.y_tunnus}
                        </p>
                      </Link>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm text-[#1f2937]">
                        {customer.contact_name}
                      </p>
                      <p className="text-xs text-[#9ca3af]">{customer.email}</p>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex flex-col gap-1">
                        {customer.customer_products.length > 0 ? (
                          customer.customer_products.map((p) => (
                            <span
                              key={p.product_name}
                              className="inline-flex items-center text-xs bg-[#2563eb]/10 text-[#2563eb] px-2 py-0.5 rounded-md w-fit"
                            >
                              {p.product_name}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs text-[#9ca3af]">-</span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-[#1f2937]">
                        {mrr > 0
                          ? `${mrr.toLocaleString("fi-FI")} \u20AC/kk`
                          : "-"}
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
                      <Link href={`/admin/customers/${customer.id}`}>
                        <button
                          type="button"
                          className="text-[#9ca3af] hover:text-[#6b7280] bg-transparent cursor-pointer"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </Link>
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
