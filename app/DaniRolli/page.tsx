import { createClient } from "@/lib/supabase/server";
import { Package, Users, Eye } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("display_order");

  const { data: partners } = await supabase
    .from("partners")
    .select("*")
    .order("display_order");

  const visiblePartners = partners?.filter((p) => p.is_visible) || [];

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Yleiskatsaus</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1a2847] rounded-xl p-6 border border-[#2a3857]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#00d4ff]/10 rounded-lg">
              <Package className="h-6 w-6 text-[#00d4ff]" />
            </div>
            <div>
              <p className="text-[#8b9dc3] text-sm">Tuotteet</p>
              <p className="text-2xl font-bold text-white">
                {products?.length || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a2847] rounded-xl p-6 border border-[#2a3857]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#00d4ff]/10 rounded-lg">
              <Users className="h-6 w-6 text-[#00d4ff]" />
            </div>
            <div>
              <p className="text-[#8b9dc3] text-sm">Kumppanit</p>
              <p className="text-2xl font-bold text-white">
                {partners?.length || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a2847] rounded-xl p-6 border border-[#2a3857]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#00d4ff]/10 rounded-lg">
              <Eye className="h-6 w-6 text-[#00d4ff]" />
            </div>
            <div>
              <p className="text-[#8b9dc3] text-sm">Näkyvät kumppanit</p>
              <p className="text-2xl font-bold text-white">
                {visiblePartners.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1a2847] rounded-xl p-6 border border-[#2a3857]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Tuotteet</h2>
            <Link
              href="/DaniRolli/products"
              className="text-[#00d4ff] hover:underline text-sm"
            >
              Hallinnoi
            </Link>
          </div>
          <ul className="space-y-3">
            {products?.map((product) => (
              <li
                key={product.id}
                className="flex items-center justify-between p-3 bg-[#0a1128] rounded-lg"
              >
                <span className="text-white">{product.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    product.status === "production"
                      ? "bg-green-500/20 text-green-400"
                      : product.status === "development"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {product.status === "production"
                    ? "Tuotannossa"
                    : product.status === "development"
                      ? "Kehityksessä"
                      : product.status}
                </span>
              </li>
            ))}
            {(!products || products.length === 0) && (
              <li className="text-[#8b9dc3] text-center py-4">
                Ei tuotteita vielä
              </li>
            )}
          </ul>
        </div>

        <div className="bg-[#1a2847] rounded-xl p-6 border border-[#2a3857]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Kumppanit</h2>
            <Link
              href="/DaniRolli/partners"
              className="text-[#00d4ff] hover:underline text-sm"
            >
              Hallinnoi
            </Link>
          </div>
          <ul className="space-y-3">
            {partners?.map((partner) => (
              <li
                key={partner.id}
                className="flex items-center justify-between p-3 bg-[#0a1128] rounded-lg"
              >
                <span className="text-white">{partner.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    partner.is_visible
                      ? "bg-green-500/20 text-green-400"
                      : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {partner.is_visible ? "Näkyvissä" : "Piilotettu"}
                </span>
              </li>
            ))}
            {(!partners || partners.length === 0) && (
              <li className="text-[#8b9dc3] text-center py-4">
                Ei kumppaneita vielä
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
