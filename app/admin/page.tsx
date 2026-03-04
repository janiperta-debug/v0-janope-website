import { createClient } from "@/lib/supabase/server";
import {
  Euro,
  Users,
  FileText,
  TrendingUp,
  AlertTriangle,
  Clock,
} from "lucide-react";

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Fetch active customers with their products
  const { data: customers } = await supabase
    .from("customers")
    .select("id, organization_name, status, customer_products(product_name, plan_name, monthly_price, status)")
    .eq("status", "active");

  // Fetch invoices for this month
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const { data: invoices } = await supabase
    .from("invoices")
    .select("id, invoice_number, total, status, due_date, created_at, customers(organization_name)")
    .gte("created_at", startOfMonth.toISOString());

  // Fetch overdue invoices
  const today = new Date().toISOString().split("T")[0];
  const { data: overdueInvoices } = await supabase
    .from("invoices")
    .select("id, invoice_number, due_date, customers(organization_name)")
    .eq("status", "sent")
    .lt("due_date", today);

  // Fetch upcoming invoices (due within 14 days)
  const twoWeeksFromNow = new Date();
  twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);
  const { data: upcomingInvoices } = await supabase
    .from("invoices")
    .select("id, invoice_number, due_date, customers(organization_name)")
    .eq("status", "sent")
    .gte("due_date", today)
    .lte("due_date", twoWeeksFromNow.toISOString().split("T")[0]);

  // Fetch recent activity
  const { data: activityLogs } = await supabase
    .from("activity_log")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  // Calculate stats from customer_products
  const activeCustomers = customers || [];
  let mrr = 0;
  const productRevenue: Record<string, { mrr: number; customers: number }> = {};

  activeCustomers.forEach((c: any) => {
    const products = c.customer_products || [];
    products.forEach((p: any) => {
      if (p.status === "active") {
        const price = p.monthly_price || 0;
        mrr += price;
        if (!productRevenue[p.product_name]) {
          productRevenue[p.product_name] = { mrr: 0, customers: 0 };
        }
        productRevenue[p.product_name].mrr += price;
        productRevenue[p.product_name].customers += 1;
      }
    });
  });

  const yearlyEstimate = mrr * 12;
  const monthInvoices = invoices || [];
  const monthTotal = monthInvoices.reduce((sum: number, inv: any) => sum + (inv.total || 0), 0);

  const totalMrr = mrr || 1;
  const revenueByProduct = Object.entries(productRevenue).map(([product, data]) => ({
    product,
    mrr: data.mrr.toLocaleString("fi-FI", { minimumFractionDigits: 2 }) + " \u20AC",
    customers: data.customers,
    width: Math.round((data.mrr / totalMrr) * 100),
  }));

  // Attention items
  const attentionItems: { type: string; message: string; date: string }[] = [];

  (overdueInvoices || []).forEach((inv: any) => {
    attentionItems.push({
      type: "overdue",
      message: `Lasku ${inv.invoice_number} erääntynyt \u2013 ${inv.customers?.organization_name || "Tuntematon"}`,
      date: new Date(inv.due_date).toLocaleDateString("fi-FI"),
    });
  });

  (upcomingInvoices || []).forEach((inv: any) => {
    attentionItems.push({
      type: "upcoming",
      message: `Lasku ${inv.invoice_number} erääntyy \u2013 ${inv.customers?.organization_name || "Tuntematon"}`,
      date: new Date(inv.due_date).toLocaleDateString("fi-FI"),
    });
  });

  // Format recent activity
  const recentActivity = (activityLogs || []).map((log: any) => {
    const createdDate = new Date(log.created_at);
    const now = new Date();
    const diffDays = Math.floor(
      (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    let timeAgo = "";
    if (diffDays === 0) timeAgo = "Tänään";
    else if (diffDays === 1) timeAgo = "Eilen";
    else if (diffDays < 7) timeAgo = `${diffDays} päivää sitten`;
    else if (diffDays < 30)
      timeAgo = `${Math.floor(diffDays / 7)} viikkoa sitten`;
    else timeAgo = `${Math.floor(diffDays / 30)} kuukautta sitten`;

    return {
      action: log.action,
      detail: log.detail,
      time: timeAgo,
    };
  });

  const stats = [
    {
      label: "MRR",
      value:
        mrr.toLocaleString("fi-FI", { minimumFractionDigits: 2 }) + " \u20AC",
      change:
        activeCustomers.length > 0
          ? `${activeCustomers.length} asiakas(ta)`
          : "\u2014",
      icon: Euro,
      color: "text-[#2563eb]",
      bg: "bg-[#2563eb]/10",
    },
    {
      label: "Aktiiviset asiakkaat",
      value: activeCustomers.length.toString(),
      change: "aktiivista",
      icon: Users,
      color: "text-[#10b981]",
      bg: "bg-[#10b981]/10",
    },
    {
      label: "Laskut tässä kuussa",
      value: monthInvoices.length.toString(),
      change:
        monthTotal.toLocaleString("fi-FI", { minimumFractionDigits: 2 }) +
        " \u20AC",
      icon: FileText,
      color: "text-[#f59e0b]",
      bg: "bg-[#f59e0b]/10",
    },
    {
      label: "Vuositulo (arvio)",
      value:
        yearlyEstimate.toLocaleString("fi-FI", { minimumFractionDigits: 2 }) +
        " \u20AC",
      change: "perustuen MRR",
      icon: TrendingUp,
      color: "text-[#8b5cf6]",
      bg: "bg-[#8b5cf6]/10",
    },
  ];

  const productColors = [
    "bg-[#2563eb]",
    "bg-[#10b981]",
    "bg-[#f59e0b]",
    "bg-[#8b5cf6]",
    "bg-[#ec4899]",
  ];

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#1f2937]">Yleisnäkymä</h1>
        <p className="text-sm text-[#6b7280] mt-1">
          Tervetuloa takaisin. Tässä yhteenveto liiketoiminnastasi.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]"
            >
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
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">
            Liikevaihto tuotteittain
          </h2>
          {revenueByProduct.length === 0 ? (
            <p className="text-sm text-[#6b7280]">Ei asiakkaita vielä</p>
          ) : (
            <div className="flex flex-col gap-4">
              {revenueByProduct.map((item, index) => (
                <div key={item.product}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-[#1f2937]">
                      {item.product}
                    </span>
                    <span className="text-sm text-[#6b7280]">
                      {item.mrr}/kk &middot; {item.customers} asiakas(ta)
                    </span>
                  </div>
                  <div className="h-2.5 bg-[#f3f4f6] rounded-full">
                    <div
                      className={`h-full rounded-full ${productColors[index % productColors.length]}`}
                      style={{ width: `${item.width}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Attention Needed */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
          <h2 className="text-sm font-semibold text-[#1f2937] mb-4">
            Huomiota vaativat
          </h2>
          {attentionItems.length === 0 ? (
            <p className="text-sm text-[#6b7280]">Ei huomioitavaa</p>
          ) : (
            <div className="flex flex-col gap-3">
              {attentionItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#f9fafb]"
                >
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
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-[#e5e7eb]">
        <h2 className="text-sm font-semibold text-[#1f2937] mb-4">
          Viimeaikainen toiminta
        </h2>
        {recentActivity.length === 0 ? (
          <p className="text-sm text-[#6b7280]">Ei viimeaikaista toimintaa</p>
        ) : (
          <div className="flex flex-col gap-3">
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b border-[#f3f4f6] last:border-0"
              >
                <div>
                  <p className="text-sm font-medium text-[#1f2937]">
                    {item.action}
                  </p>
                  <p className="text-xs text-[#6b7280]">{item.detail}</p>
                </div>
                <span className="text-xs text-[#9ca3af] shrink-0">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
