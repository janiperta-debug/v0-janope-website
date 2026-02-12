const monthlyRevenue = [
  { month: "Syys 2025", invoiced: 890, paid: 890 },
  { month: "Loka 2025", invoiced: 1780, paid: 1780 },
  { month: "Marras 2025", invoiced: 1780, paid: 1780 },
  { month: "Joulu 2025", invoiced: 2670, paid: 2670 },
  { month: "Tammi 2026", invoiced: 2670, paid: 1780 },
  { month: "Helmi 2026", invoiced: 2670, paid: 0 },
];

const maxRevenue = Math.max(...monthlyRevenue.map((m) => m.invoiced));

const customerReport = [
  { name: "Hyvinkään Kaupunki", product: "FinnVesta", mrr: 890, totalPaid: 5340, invoices: 6 },
  { name: "Espoon Kaupunki", product: "FinnVesta", mrr: 890, totalPaid: 3560, invoices: 4 },
  { name: "Turun Kaupunki", product: "FinnVerdis", mrr: 890, totalPaid: 890, invoices: 1 },
];

const productReport = [
  { product: "FinnVesta", customers: 2, mrr: 1780, share: 67 },
  { product: "FinnVerdis", customers: 1, mrr: 890, share: 33 },
  { product: "GameTable", customers: 0, mrr: 0, share: 0 },
];

const formatEUR = (n: number) =>
  new Intl.NumberFormat("fi-FI", { style: "currency", currency: "EUR" }).format(n);

export default function ReportsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1f2937]">Raportit</h1>
        <p className="text-sm text-[#6b7280] mt-1">Liikevaihto, asiakkaat ja tuotteet</p>
      </div>

      {/* Monthly Revenue Chart */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb] mb-6">
        <h2 className="text-sm font-semibold text-[#1f2937] mb-6">Kuukausittainen liikevaihto</h2>
        <div className="flex items-end gap-4 h-48">
          {monthlyRevenue.map((m) => (
            <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex flex-col items-center gap-0.5" style={{ height: "160px" }}>
                <div className="w-full flex gap-1 items-end h-full">
                  <div
                    className="flex-1 bg-[#2563eb] rounded-t"
                    style={{ height: `${(m.invoiced / maxRevenue) * 100}%` }}
                    title={`Laskutettu: ${formatEUR(m.invoiced)}`}
                  />
                  <div
                    className="flex-1 bg-[#10b981] rounded-t"
                    style={{ height: `${(m.paid / maxRevenue) * 100}%` }}
                    title={`Maksettu: ${formatEUR(m.paid)}`}
                  />
                </div>
              </div>
              <span className="text-xs text-[#6b7280] whitespace-nowrap">{m.month}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-4 pt-4 border-t border-[#f3f4f6]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-[#2563eb]" />
            <span className="text-xs text-[#6b7280]">Laskutettu</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-[#10b981]" />
            <span className="text-xs text-[#6b7280]">Maksettu</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Report */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Asiakasraportti</h2>
          <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-[#f3f4f6]">
                <th className="text-left text-xs font-medium text-[#6b7280] uppercase px-3 py-2">Asiakas</th>
                <th className="text-left text-xs font-medium text-[#6b7280] uppercase px-3 py-2">MRR</th>
                <th className="text-left text-xs font-medium text-[#6b7280] uppercase px-3 py-2">Maksettu yht.</th>
                <th className="text-left text-xs font-medium text-[#6b7280] uppercase px-3 py-2">Laskut</th>
              </tr>
            </thead>
            <tbody>
              {customerReport.map((c) => (
                <tr key={c.name} className="border-b border-[#f3f4f6] last:border-0">
                  <td className="px-3 py-3">
                    <p className="text-sm font-medium text-[#1f2937]">{c.name}</p>
                    <span className="text-xs bg-[#2563eb]/10 text-[#2563eb] px-1.5 py-0.5 rounded">{c.product}</span>
                  </td>
                  <td className="px-3 py-3 text-sm text-[#1f2937]">{formatEUR(c.mrr)}</td>
                  <td className="px-3 py-3 text-sm text-[#10b981] font-medium">{formatEUR(c.totalPaid)}</td>
                  <td className="px-3 py-3 text-sm text-[#1f2937]">{c.invoices}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        {/* Product Report */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Tuoteraportti</h2>
          <div className="flex flex-col gap-4">
            {productReport.map((p) => (
              <div key={p.product} className="p-4 bg-[#f9fafb] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#1f2937]">{p.product}</span>
                  <span className="text-sm font-bold text-[#1f2937]">{formatEUR(p.mrr)}/kk</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#6b7280] mb-2">
                  <span>{p.customers} asiakasta</span>
                  <span>{p.share}% liikevaihdosta</span>
                </div>
                <div className="h-2 bg-[#e5e7eb] rounded-full">
                  <div
                    className="h-full bg-[#2563eb] rounded-full"
                    style={{ width: `${p.share}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
