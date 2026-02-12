import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  Building2,
  FileText,
  Edit,
} from "lucide-react";

const customer = {
  id: "1",
  name: "Hyvinkään Kaupunki",
  yTunnus: "0920261-1",
  contact: "Matti Meikäläinen",
  email: "matti.meikalainen@hyvinkaa.fi",
  phone: "+358 40 123 4567",
  address: "Kankurinkatu 4-6",
  postalCode: "05800",
  city: "Hyvinkää",
  verkkolaskuOsoite: "003709202611",
  operaattori: "Maventa",
  billingDay: 1,
  paymentTermsDays: 14,
  status: "active",
  products: [
    {
      name: "FinnVesta",
      plan: "Professional",
      monthlyPrice: 890,
      startDate: "01.09.2025",
      activeUsers: 12,
      properties: 156,
    },
  ],
  invoices: [
    { id: "001/26", date: "01.01.2026", amount: "1 103,60 €", status: "paid" },
    { id: "002/26", date: "01.02.2026", amount: "1 103,60 €", status: "sent" },
  ],
};

const invoiceStatus: Record<string, { label: string; class: string }> = {
  paid: { label: "Maksettu", class: "bg-[#10b981]/10 text-[#10b981]" },
  sent: { label: "Lähetetty", class: "bg-[#f59e0b]/10 text-[#f59e0b]" },
  draft: { label: "Luonnos", class: "bg-[#2563eb]/10 text-[#2563eb]" },
  overdue: { label: "Erääntynyt", class: "bg-[#ef4444]/10 text-[#ef4444]" },
};

export default async function CustomerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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
          <h1 className="text-2xl font-bold text-[#1f2937]">{customer.name}</h1>
          <p className="text-sm text-[#6b7280]">Y-tunnus: {customer.yTunnus}</p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={`/admin/invoices/new?customer=${id}`}
            className="flex items-center gap-2 bg-[#2563eb] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-colors"
          >
            <FileText className="h-4 w-4" />
            Luo lasku
          </Link>
          <button type="button" className="flex items-center gap-2 border border-[#e5e7eb] text-[#1f2937] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#f9fafb] transition-colors bg-transparent">
            <Edit className="h-4 w-4" />
            Muokkaa
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Contact Info */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
            <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Yhteystiedot</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#f3f4f6]">
                  <Building2 className="h-4 w-4 text-[#6b7280]" />
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af]">Yhteyshenkilö</p>
                  <p className="text-sm text-[#1f2937]">{customer.contact}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#f3f4f6]">
                  <Mail className="h-4 w-4 text-[#6b7280]" />
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af]">Sähköposti</p>
                  <p className="text-sm text-[#1f2937]">{customer.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#f3f4f6]">
                  <Phone className="h-4 w-4 text-[#6b7280]" />
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af]">Puhelin</p>
                  <p className="text-sm text-[#1f2937]">{customer.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#f3f4f6]">
                  <Building2 className="h-4 w-4 text-[#6b7280]" />
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af]">Osoite</p>
                  <p className="text-sm text-[#1f2937]">{customer.address}, {customer.postalCode} {customer.city}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
            <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Tuotteet</h2>
            {customer.products.map((p) => (
              <div key={p.name} className="flex items-center justify-between p-4 bg-[#f9fafb] rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-[#1f2937]">{p.name}</span>
                    <span className="text-xs bg-[#2563eb]/10 text-[#2563eb] px-2 py-0.5 rounded-md">{p.plan}</span>
                  </div>
                  <p className="text-xs text-[#9ca3af]">Aloitettu {p.startDate} &middot; {p.activeUsers} käyttäjää &middot; {p.properties} kiinteistöä</p>
                </div>
                <p className="text-lg font-bold text-[#1f2937]">{p.monthlyPrice} &euro;/kk</p>
              </div>
            ))}
          </div>

          {/* Invoice History */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
            <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Laskuhistoria</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#f3f4f6]">
                  <th className="text-left text-xs font-medium text-[#6b7280] uppercase px-3 py-2">Lasku</th>
                  <th className="text-left text-xs font-medium text-[#6b7280] uppercase px-3 py-2">Päivä</th>
                  <th className="text-left text-xs font-medium text-[#6b7280] uppercase px-3 py-2">Summa</th>
                  <th className="text-left text-xs font-medium text-[#6b7280] uppercase px-3 py-2">Tila</th>
                </tr>
              </thead>
              <tbody>
                {customer.invoices.map((inv) => {
                  const s = invoiceStatus[inv.status];
                  return (
                    <tr key={inv.id} className="border-b border-[#f3f4f6] last:border-0">
                      <td className="px-3 py-3 text-sm text-[#2563eb] font-medium">#{inv.id}</td>
                      <td className="px-3 py-3 text-sm text-[#1f2937]">{inv.date}</td>
                      <td className="px-3 py-3 text-sm text-[#1f2937]">{inv.amount}</td>
                      <td className="px-3 py-3">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${s.class}`}>{s.label}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column - Billing Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
            <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Laskutustiedot</h2>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-xs text-[#9ca3af]">Verkkolaskuosoite</p>
                <p className="text-sm font-mono text-[#1f2937]">{customer.verkkolaskuOsoite}</p>
              </div>
              <div>
                <p className="text-xs text-[#9ca3af]">Operaattori</p>
                <p className="text-sm text-[#1f2937]">{customer.operaattori}</p>
              </div>
              <div>
                <p className="text-xs text-[#9ca3af]">Laskutuspäivä</p>
                <p className="text-sm text-[#1f2937]">{customer.billingDay}. päivä kuussa</p>
              </div>
              <div>
                <p className="text-xs text-[#9ca3af]">Maksuehto</p>
                <p className="text-sm text-[#1f2937]">{customer.paymentTermsDays} päivää netto</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
            <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Yhteenveto</h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">MRR</span>
                <span className="text-sm font-bold text-[#1f2937]">890,00 &euro;</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">Laskut yhteensä</span>
                <span className="text-sm font-bold text-[#1f2937]">2 207,20 &euro;</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">Maksettu</span>
                <span className="text-sm font-bold text-[#10b981]">1 103,60 &euro;</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">Avoin</span>
                <span className="text-sm font-bold text-[#f59e0b]">1 103,60 &euro;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
