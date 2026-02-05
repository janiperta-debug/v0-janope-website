"use client";

import React from "react";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Loader2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  status: string;
  link: string | null;
  icon: string;
  display_order: number;
}

const iconOptions = [
  "Users",
  "Zap",
  "Gamepad2",
  "Building2",
  "Sprout",
  "Dice5",
  "Box",
  "Globe",
  "Smartphone",
  "Database",
];

const statusOptions = [
  { value: "development", label: "Kehityksessä" },
  { value: "production", label: "Tuotannossa" },
  { value: "archived", label: "Arkistoitu" },
];

export default function ProductsAdmin() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [saving, setSaving] = useState(false);
  const supabase = createClient();

  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "development",
    link: "",
    icon: "Box",
    display_order: 0,
  });

  const fetchProducts = async () => {
    const { data } = await supabase
      .from("products")
      .select("*")
      .order("display_order");
    setProducts(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const resetForm = () => {
    setForm({
      name: "",
      description: "",
      status: "development",
      link: "",
      icon: "Box",
      display_order: products.length + 1,
    });
    setEditingProduct(null);
  };

  const openEditDialog = (product: Product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      description: product.description,
      status: product.status,
      link: product.link || "",
      icon: product.icon,
      display_order: product.display_order,
    });
    setDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const productData = {
      ...form,
      link: form.link || null,
    };

    if (editingProduct) {
      await supabase
        .from("products")
        .update(productData)
        .eq("id", editingProduct.id);
    } else {
      await supabase.from("products").insert(productData);
    }

    await fetchProducts();
    setDialogOpen(false);
    resetForm();
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Haluatko varmasti poistaa tämän tuotteen?")) {
      await supabase.from("products").delete().eq("id", id);
      await fetchProducts();
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-[#00d4ff]" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Tuotteet</h1>
        <Dialog
          open={dialogOpen}
          onOpenChange={(open) => {
            setDialogOpen(open);
            if (!open) resetForm();
          }}
        >
          <DialogTrigger asChild>
            <Button className="bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0a1128]">
              <Plus className="h-4 w-4 mr-2" />
              Lisää tuote
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#1a2847] border-[#2a3857] text-white max-w-lg">
            <DialogHeader>
              <DialogTitle>
                {editingProduct ? "Muokkaa tuotetta" : "Lisää uusi tuote"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label className="text-[#8b9dc3]">Nimi</Label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-[#0a1128] border-[#2a3857] text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[#8b9dc3]">Kuvaus</Label>
                <Textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  required
                  rows={3}
                  className="bg-[#0a1128] border-[#2a3857] text-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[#8b9dc3]">Status</Label>
                  <Select
                    value={form.status}
                    onValueChange={(value) =>
                      setForm({ ...form, status: value })
                    }
                  >
                    <SelectTrigger className="bg-[#0a1128] border-[#2a3857] text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a2847] border-[#2a3857]">
                      {statusOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="text-white hover:bg-[#2a3857]"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[#8b9dc3]">Ikoni</Label>
                  <Select
                    value={form.icon}
                    onValueChange={(value) => setForm({ ...form, icon: value })}
                  >
                    <SelectTrigger className="bg-[#0a1128] border-[#2a3857] text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a2847] border-[#2a3857]">
                      {iconOptions.map((icon) => (
                        <SelectItem
                          key={icon}
                          value={icon}
                          className="text-white hover:bg-[#2a3857]"
                        >
                          {icon}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[#8b9dc3]">Linkki (valinnainen)</Label>
                <Input
                  value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                  placeholder="https://..."
                  className="bg-[#0a1128] border-[#2a3857] text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[#8b9dc3]">Järjestysnumero</Label>
                <Input
                  type="number"
                  value={form.display_order}
                  onChange={(e) =>
                    setForm({ ...form, display_order: parseInt(e.target.value) })
                  }
                  className="bg-[#0a1128] border-[#2a3857] text-white"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setDialogOpen(false)}
                  className="flex-1 border-[#2a3857] text-[#8b9dc3] hover:bg-[#2a3857] hover:text-white"
                >
                  Peruuta
                </Button>
                <Button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0a1128]"
                >
                  {saving ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : editingProduct ? (
                    "Tallenna"
                  ) : (
                    "Lisää"
                  )}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-[#1a2847] rounded-xl border border-[#2a3857] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#2a3857]">
              <th className="px-6 py-4 text-left text-[#8b9dc3] font-medium">
                #
              </th>
              <th className="px-6 py-4 text-left text-[#8b9dc3] font-medium">
                Nimi
              </th>
              <th className="px-6 py-4 text-left text-[#8b9dc3] font-medium">
                Status
              </th>
              <th className="px-6 py-4 text-left text-[#8b9dc3] font-medium">
                Linkki
              </th>
              <th className="px-6 py-4 text-right text-[#8b9dc3] font-medium">
                Toiminnot
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-[#2a3857] last:border-0"
              >
                <td className="px-6 py-4 text-[#8b9dc3]">
                  {product.display_order}
                </td>
                <td className="px-6 py-4 text-white font-medium">
                  {product.name}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      product.status === "production"
                        ? "bg-green-500/20 text-green-400"
                        : product.status === "development"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {statusOptions.find((s) => s.value === product.status)
                      ?.label || product.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {product.link ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00d4ff] hover:underline text-sm"
                    >
                      Avaa
                    </a>
                  ) : (
                    <span className="text-[#4a5a7a]">-</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => openEditDialog(product)}
                      className="text-[#8b9dc3] hover:text-white hover:bg-[#2a3857]"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(product.id)}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {products.length === 0 && (
          <div className="text-center py-12 text-[#8b9dc3]">
            Ei tuotteita vielä. Lisää ensimmäinen tuote!
          </div>
        )}
      </div>
    </div>
  );
}
