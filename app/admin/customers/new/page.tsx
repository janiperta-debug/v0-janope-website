"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const operators = [
  "Maventa",
  "Basware (IPP)",
  "Apix Messaging",
  "Pagero",
  "OpusCapita",
];
const productOptions = ["FinnVesta", "FinnVerdis", "GameTable"];
const plans: Record<string, string[]> = {
  FinnVesta: [
    "Starter (490 \u20AC/kk)",
    "Professional (890 \u20AC/kk)",
    "Enterprise (1 290 \u20AC/kk)",
  ],
  FinnVerdis: [
    "Basic (490 \u20AC/kk)",
    "Team (890 \u20AC/kk)",
    "Enterprise (1 290 \u20AC/kk)",
  ],
  GameTable: ["Community (490 \u20AC/kk)", "Pro (890 \u20AC/kk)"],
};

function parsePlanPrice(planLabel: string): number {
  const match = planLabel.match(/([\d\s]+)\s*\u20AC/);
  if (match) return parseInt(match[1].replace(/\s/g, ""), 10);
  return 0;
}

function parsePlanName(planLabel: string): string {
  return planLabel.split("(")[0].trim();
}

export default function NewCustomerPage() {
  const router = useRouter();
  const supabase = createClient();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [invoiceMethod, setInvoiceMethod] = useState("verkkolasku");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const form = new FormData(e.currentTarget);

    const customerData = {
      organization_name: form.get("organization_name") as string,
      y_tunnus: form.get("y_tunnus") as string,
      contact_name: form.get("contact_name") as string,
      email: form.get("email") as string,
      phone: (form.get("phone") as string) || null,
      address: (form.get("address") as string) || null,
      postal_code: (form.get("postal_code") as string) || null,
      city: (form.get("city") as string) || null,
      invoice_method: invoiceMethod,
      verkkolasku_osoite:
        invoiceMethod === "verkkolasku"
          ? (form.get("verkkolasku_osoite") as string) || null
          : null,
      operaattori:
        invoiceMethod === "verkkolasku"
          ? (form.get("operaattori") as string) || null
          : null,
      billing_email:
        invoiceMethod === "pdf"
          ? (form.get("billing_email") as string) || null
          : null,
      billing_day: parseInt(form.get("billing_day") as string, 10) || 1,
      payment_terms_days:
        parseInt(form.get("payment_terms_days") as string, 10) || 14,
      vat_rate: parseFloat(form.get("vat_rate") as string) || 25.5,
      status: "active",
    };

    const { data: customer, error: customerError } = await supabase
      .from("customers")
      .insert(customerData)
      .select("id")
      .single();

    if (customerError) {
      setError("Virhe asiakkaan tallennuksessa: " + customerError.message);
      setSaving(false);
      return;
    }

    if (selectedProduct && selectedPlan && customer) {
      const { error: productError } = await supabase
        .from("customer_products")
        .insert({
          customer_id: customer.id,
          product_name: selectedProduct,
          plan_name: parsePlanName(selectedPlan),
          monthly_price: parsePlanPrice(selectedPlan),
          start_date: new Date().toISOString().split("T")[0],
          status: "active",
        });

      if (productError) {
        console.error("Error adding product:", productError);
      }
    }

    setSaving(false);
    router.push("/admin/customers");
  }

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

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Organization */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">
            Organisaation tiedot
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Organisaation nimi *
              </label>
              <input
                name="organization_name"
                required
                type="text"
                placeholder="esim. Hyvinkään Kaupunki"
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Y-tunnus *
              </label>
              <input
                name="y_tunnus"
                required
                type="text"
                placeholder="1234567-8"
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Yhteyshenkilö *
              </label>
              <input
                name="contact_name"
                required
                type="text"
                placeholder="Etunimi Sukunimi"
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Sähköposti *
              </label>
              <input
                name="email"
                required
                type="email"
                placeholder="nimi@organisaatio.fi"
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Puhelin
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="+358 40 123 4567"
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Osoite
              </label>
              <input
                name="address"
                type="text"
                placeholder="Katuosoite"
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Postinumero
              </label>
              <input
                name="postal_code"
                type="text"
                placeholder="00100"
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Kaupunki
              </label>
              <input
                name="city"
                type="text"
                placeholder="Helsinki"
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              />
            </div>
          </div>
        </div>

        {/* Invoice Method */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">
            Laskutustapa
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Laskutustapa *
              </label>
              <select
                value={invoiceMethod}
                onChange={(e) => setInvoiceMethod(e.target.value)}
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              >
                <option value="verkkolasku">Verkkolasku</option>
                <option value="pdf">PDF-lasku sähköpostiin</option>
              </select>
            </div>
          </div>

          {invoiceMethod === "verkkolasku" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                  Verkkolaskuosoite (OVT) *
                </label>
                <input
                  name="verkkolasku_osoite"
                  type="text"
                  placeholder="003712345678"
                  className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm font-mono text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                />
                <p className="text-xs text-[#9ca3af] mt-1">
                  Alkaa 0037, pituus 12-17 merkkiä
                </p>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                  Operaattori *
                </label>
                <select
                  name="operaattori"
                  className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                >
                  <option value="">Valitse operaattori</option>
                  {operators.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {invoiceMethod === "pdf" && (
            <div className="mt-4">
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Laskutussähköposti *
              </label>
              <input
                name="billing_email"
                type="email"
                placeholder="laskut@organisaatio.fi"
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              />
              <p className="text-xs text-[#9ca3af] mt-1">
                PDF-lasku lähetetään tähän osoitteeseen
              </p>
            </div>
          )}
        </div>

        {/* Billing */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">
            Laskutusasetukset
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Laskutuspäivä
              </label>
              <select
                name="billing_day"
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              >
                <option value="1">1. päivä</option>
                <option value="15">15. päivä</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Maksuehto
              </label>
              <select
                name="payment_terms_days"
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              >
                <option value="14">14 päivää</option>
                <option value="21">21 päivää</option>
                <option value="30">30 päivää</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                ALV %
              </label>
              <select
                name="vat_rate"
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              >
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
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Tuote *
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => {
                  setSelectedProduct(e.target.value);
                  setSelectedPlan("");
                }}
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
              >
                <option value="">Valitse tuote</option>
                {productOptions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#6b7280] mb-1.5">
                Paketti
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                disabled={!selectedProduct}
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-lg text-sm text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] disabled:opacity-50"
              >
                <option value="">
                  {selectedProduct
                    ? "Valitse paketti"
                    : "Valitse ensin tuote"}
                </option>
                {selectedProduct &&
                  plans[selectedProduct]?.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="bg-[#2563eb] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 cursor-pointer"
          >
            {saving ? "Tallennetaan..." : "Tallenna asiakas"}
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
