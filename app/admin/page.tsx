import {
  Euro,
  Users,
  FileText,
  TrendingUp,
  AlertTriangle,
  Clock,
} from "lucide-react";

const stats = [
  {
    label: "MRR",
    value: "2 670,00 \u20ac",
    change: "+12%",
    icon: Euro,
    color: "text-[#2563eb]",
    bg: "bg-[#2563eb]/10",
  },
  {
    label: "Aktiiviset asiakkaat",
    value: "3",
    change: "+1",
    icon: Users,
    color: "text-[#10b981]",
    bg: "bg-[#10b981]/10",
  },
  {
    label: "Laskut t\u00e4ss\u00e4 kuussa",
    value: "3",
    change: "3 310,80 \u20ac",
    icon: FileText,
    color: "text-[#f59e0b]",
    bg: "bg-[#f59e0b]/10",
  },
  {
    label: "Vuositulo (arvio)",
    value: "32 040,00 \u20ac",
    change: "+18% YoY",
    icon: TrendingUp,
    color: "text-[#8b5cf6]",
    bg: "bg-[#8b5cf6]/10",
  },
];

const revenueByProduct = [
  { product: "FinnVesta", mrr: "1 780,00 \u20ac", customers: 2, color: "bg-[#2563eb]", width: "w-[67%]" },
  { product: "FinnVerdis", mrr: "890,00 \u20ac", customers: 1, color: "bg-[#10b981]", width: "w-[33%]" },
];

const attentionItems = [
  { type: "overdue", message: "Lasku #003/26 er\u00e4\u00e4ntynyt \u2013 Turun Kaupunki", date: "01.02.2026" },
  { type: "upcoming", message: "Laskutus 15.02 \u2013 Espoon Kaupunki", date: "15.02.2026" },
];

const recentActivity = [
  { action: "Maksu vastaanotettu", detail: "Hyvinp\u00e4\u00e4n Kaupunki \u2013 1 103,60 \u20ac", time: "2 p\u00e4iv\u00e4\u00e4 sitten" },
  { action: "Lasku l\u00e4hetetty", detail: "#002/26 \u2013 Espoon Kaupunki", time: "5 p\u00e4iv\u00e4\u00e4 sitten" },
  { action: "Uusi asiakas", detail: "Turun Kaupunki (FinnVerdis)", time: "1 viikko sitten" },
];

export default function AdminDashboard() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1f2937]">Yleisnäkymä</h1>
        <p className="text-sm text-[#6b7280] mt-1">Tervetuloa takaisin. Tässä yhteenveto liiketoiminnastasi.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-[#6b7280]">{stat.label}</span>
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </div>
              <p className="text-2xl font-bold text-[#1f2937]">{stat.value}</p>
              <p className="text-xs text-[#10b981] mt-1">{stat.change}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue by Product */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Liikevaihto tuotteittain</h2>
          <div className="flex flex-col gap-4">
            {revenueByProduct.map((item) => (
              <div key={item.product}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-[#1f2937]">{item.product}</span>
                  <span className="text-sm text-[#6b7280]">{item.mrr}/kk &middot; {item.customers} asiakas(ta)</span>
                </div>
                <div className="h-2.5 bg-[#f3f4f6] rounded-full">
                  <div className={`h-full rounded-full ${item.color} ${item.width}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attention Needed */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Huomiota vaativat</h2>
          <div className="flex flex-col gap-3">
            {attentionItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[#f9fafb]">
                {item.type === "overdue" ? (
                  <AlertTriangle className="h-4 w-4 text-[#ef4444] mt-0.5 shrink-0" />
                ) : (
                  <Clock className="h-4 w-4 text-[#f59e0b] mt-0.5 shrink-0" />
                )}
                <div>
                  <p className="text-sm text-[#1f2937]">{item.message}</p>
                  <p className="text-xs text-[#6b7280]">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
        <h2 className="text-sm font-semibold text-[#1f2937] mb-4">Viimeaikainen toiminta</h2>
        <div className="flex flex-col gap-3">
          {recentActivity.map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-[#f3f4f6] last:border-0">
              <div>
                <p className="text-sm font-medium text-[#1f2937]">{item.action}</p>
                <p className="text-xs text-[#6b7280]">{item.detail}</p>
              </div>
              <span className="text-xs text-[#9ca3af] shrink-0">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
