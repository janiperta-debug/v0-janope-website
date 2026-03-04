"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  Building2,
  FileText,
  Edit,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type CustomerDetail = {
  id: string;
  organization_name: string;
  y_tunnus: string;
  contact_name: string;
  email: string;
  phone: string;
  address: string;
  postal_code: string;
  city: string;
  verkkolasku_osoite: string;
  operaattori: string;
  billing_day: number;
  payment_terms_days: number;
  status: string;
  notes: string;
};

type CustomerProduct = {
  id: string;
  product_name: string;
  plan_name: string;
  monthly_price: number;
  start_date: string;
  status: string;
};

type Invoice = {
  id: string;
  invoice_number: string;
  date: string;
  total: number;
  status: string;
};

const invoiceStatus: Record<string, { label: string; class: string }> = {
  paid: { label: "Maksettu", class: "bg-[#10b981]/10 text-[#10b981]" },
  sent: { label: "Lähetetty", class: "bg-[#f59e0b]/10 text-[#f59e0b]" },
  draft: { label: "Luonnos", class: "bg-[#2563eb]/10 text-[#2563eb]" },
  overdue: { label: "Erääntynyt", class: "bg-[#ef4444]/10 text-[#ef4444]" },
};

export default function CustomerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [customer, setCustomer] = useState<CustomerDetail | null>(null);
  const [products, setProducts] = useState<CustomerProduct[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const [customerRes, productsRes, invoicesRes] = await Promise.all([
        supabase.from("customers").select("*").eq("id", id).single(),
        supabase
          .from("customer_products")
          .select("*")
          .eq("customer_id", id)
          .order("created_at", { ascending: false }),
        supabase
          .from("invoices")
          .select("id, invoice_number, date, total, status")
          .eq("customer_id", id)
          .order("date", { ascending: false }),
      ]);

      if (customerRes.data) setCustomer(customerRes.data as CustomerDetail);
      if (productsRes.data) setProducts(productsRes.data as CustomerProduct[]);
      if (invoicesRes.data) setInvoices(invoicesRes.data as Invoice[]);

      setLoading(false);
    }

    if (id) fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 lg:p-8 flex items-center justify-center min-h-[400px]">
        <div className="text-center text-[#6b7280]">
          <div className="w-8 h-8 border-2 border-[#2563eb] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          Ladataan asiakkaan tietoja...
        </div>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="p-6 lg:p-8">
        <p className="text-[#6b7280]">Asiakasta ei löytynyt.</p>
        <Link href="/admin/customers" className="text-[#2563eb] hover:underline text-sm mt-2 inline-block">
          Takaisin asiakkaisiin
        </Link>
      </div>
    );
  }

  const mrr = products.reduce((sum, p) => sum + (p.monthly_price || 0), 0);
  const totalInvoiced = invoices.reduce((sum, inv) => sum + (inv.total || 0), 0);
  const paidTotal = invoices
    .filter((inv) => inv.status === "paid")
    .reduce((sum, inv) => sum + (inv.total || 0), 0);
  const openTotal = totalInvoiced - paidTotal;

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/admin/customers"
          className="p-2 rounded-lg hover:bg-[#f3f4f6] transition-colors text-[#6b7280]"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[#1f2937]">
            {customer.organization_name}
          </h1>
          <p className="text-sm text-[#6b7280]">
            Y-tunnus: {customer.y_tunnus}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={`/admin/invoices/new?customer=${id}`}
            className="flex items-center gap-2 bg-[#2563eb] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-colors"
          >
            <FileText className="h-4 w-4" />
            Luo lasku
          </Link>
          <button
            type="button"
            className="flex items-center gap-2 border border-[#e5e7eb] text-[#1f2937] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#f9fafb] transition-colors bg-transparent cursor-pointer"
          >
            <Edit className="h-4 w-4" />
            Muokkaa
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Contact Info */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
            <h2 className="text-sm font-semibold text-[#1f2937] mb-4">
              Yhteystiedot
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#f3f4f6]">
                  <Building2 className="h-4 w-4 text-[#6b7280]" />
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af]">Yhteyshenkilö</p>
                  <p className="text-sm text-[#1f2937]">
                    {customer.contact_name || "-"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#f3f4f6]">
                  <Mail className="h-4 w-4 text-[#6b7280]" />
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af]">Sähköposti</p>
                  <p className="text-sm text-[#1f2937]">
                    {customer.email || "-"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#f3f4f6]">
                  <Phone className="h-4 w-4 text-[#6b7280]" />
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af]">Puhelin</p>
                  <p className="text-sm text-[#1f2937]">
                    {customer.phone || "-"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#f3f4f6]">
                  <Building2 className="h-4 w-4 text-[#6b7280]" />
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af]">Osoite</p>
                  <p className="text-sm text-[#1f2937]">
                    {[customer.address, customer.postal_code, customer.city]
                      .filter(Boolean)
                      .join(", ") || "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
            <h2 className="text-sm font-semibold text-[#1f2937] mb-4">
              Tuotteet
            </h2>
            {products.length === 0 ? (
              <p className="text-sm text-[#9ca3af]">
                Ei tuotteita vielä lisätty.
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                {products.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between p-4 bg-[#f9fafb] rounded-lg"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-[#1f2937]">
                          {p.product_name}
                        </span>
                        {p.plan_name && (
                          <span className="text-xs bg-[#2563eb]/10 text-[#2563eb] px-2 py-0.5 rounded-md">
                            {p.plan_name}
                          </span>
                        )}
                      </div>
                      {p.start_date && (
                        <p className="text-xs text-[#9ca3af]">
                          Aloitettu{" "}
                          {new Date(p.start_date).toLocaleDateString("fi-FI")}
                        </p>
                      )}
                    </div>
                    <p className="text-lg font-bold text-[#1f2937]">
                      {p.monthly_price} &euro;/kk
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Invoice History */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
            <h2 className="text-sm font-semibold text-[#1f2937] mb-4">
              Laskuhistoria
            </h2>
            {invoices.length === 0 ? (
              <p className="text-sm text-[#9ca3af]">Ei laskuja vielä.</p>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#f3f4f6]">
                    <th className="text-left text-xs font-medium text-[#6b7280] uppercase px-3 py-2">
                      Lasku
                    </th>
                    <th className="text-left text-xs font-medium text-[#6b7280] uppercase px-3 py-2">
                      Päivä
                    </th>
                    <th className="text-left text-xs font-medium text-[#6b7280] uppercase px-3 py-2">
                      Summa
                    </th>
                    <th className="text-left text-xs font-medium text-[#6b7280] uppercase px-3 py-2">
                      Tila
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv) => {
                    const s = invoiceStatus[inv.status] || {
                      label: inv.status,
                      class: "bg-[#6b7280]/10 text-[#6b7280]",
                    };
                    return (
                      <tr
                        key={inv.id}
                        className="border-b border-[#f3f4f6] last:border-0"
                      >
                        <td className="px-3 py-3 text-sm text-[#2563eb] font-medium">
                          <Link href={`/admin/invoices/${inv.id}`}>
                            #{inv.invoice_number}
                          </Link>
                        </td>
                        <td className="px-3 py-3 text-sm text-[#1f2937]">
                          {inv.date
                            ? new Date(inv.date).toLocaleDateString("fi-FI")
                            : "-"}
                        </td>
                        <td className="px-3 py-3 text-sm text-[#1f2937]">
                          {inv.total != null
                            ? `${Number(inv.total).toLocaleString("fi-FI", { minimumFractionDigits: 2 })} \u20AC`
                            : "-"}
                        </td>
                        <td className="px-3 py-3">
                          <span
                            className={`text-xs font-medium px-2.5 py-1 rounded-full ${s.class}`}
                          >
                            {s.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
            <h2 className="text-sm font-semibold text-[#1f2937] mb-4">
              Laskutustiedot
            </h2>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-xs text-[#9ca3af]">Verkkolaskuosoite</p>
                <p className="text-sm font-mono text-[#1f2937]">
                  {customer.verkkolasku_osoite || "-"}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#9ca3af]">Operaattori</p>
                <p className="text-sm text-[#1f2937]">
                  {customer.operaattori || "-"}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#9ca3af]">Laskutuspäivä</p>
                <p className="text-sm text-[#1f2937]">
                  {customer.billing_day
                    ? `${customer.billing_day}. päivä kuussa`
                    : "-"}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#9ca3af]">Maksuehto</p>
                <p className="text-sm text-[#1f2937]">
                  {customer.payment_terms_days
                    ? `${customer.payment_terms_days} päivää netto`
                    : "-"}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
            <h2 className="text-sm font-semibold text-[#1f2937] mb-4">
              Yhteenveto
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">MRR</span>
                <span className="text-sm font-bold text-[#1f2937]">
                  {mrr.toLocaleString("fi-FI", { minimumFractionDigits: 2 })}{" "}
                  &euro;
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">
                  Laskut yhteensä
                </span>
                <span className="text-sm font-bold text-[#1f2937]">
                  {totalInvoiced.toLocaleString("fi-FI", {
                    minimumFractionDigits: 2,
                  })}{" "}
                  &euro;
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">Maksettu</span>
                <span className="text-sm font-bold text-[#10b981]">
                  {paidTotal.toLocaleString("fi-FI", {
                    minimumFractionDigits: 2,
                  })}{" "}
                  &euro;
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">Avoin</span>
                <span className="text-sm font-bold text-[#f59e0b]">
                  {openTotal.toLocaleString("fi-FI", {
                    minimumFractionDigits: 2,
                  })}{" "}
                  &euro;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
