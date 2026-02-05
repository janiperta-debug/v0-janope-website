"use client";

import React from "react";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Loader2, Eye, EyeOff } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  logo_url: string | null;
  website_url: string | null;
  display_order: number;
  is_visible: boolean;
}

export default function PartnersAdmin() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [saving, setSaving] = useState(false);
  const supabase = createClient();

  const [form, setForm] = useState({
    name: "",
    logo_url: "",
    website_url: "",
    display_order: 0,
    is_visible: false,
  });

  const fetchPartners = async () => {
    const { data } = await supabase
      .from("partners")
      .select("*")
      .order("display_order");
    setPartners(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const resetForm = () => {
    setForm({
      name: "",
      logo_url: "",
      website_url: "",
      display_order: partners.length + 1,
      is_visible: false,
    });
    setEditingPartner(null);
  };

  const openEditDialog = (partner: Partner) => {
    setEditingPartner(partner);
    setForm({
      name: partner.name,
      logo_url: partner.logo_url || "",
      website_url: partner.website_url || "",
      display_order: partner.display_order,
      is_visible: partner.is_visible,
    });
    setDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const partnerData = {
      ...form,
      logo_url: form.logo_url || null,
      website_url: form.website_url || null,
    };

    if (editingPartner) {
      await supabase
        .from("partners")
        .update(partnerData)
        .eq("id", editingPartner.id);
    } else {
      await supabase.from("partners").insert(partnerData);
    }

    await fetchPartners();
    setDialogOpen(false);
    resetForm();
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Haluatko varmasti poistaa tämän kumppanin?")) {
      await supabase.from("partners").delete().eq("id", id);
      await fetchPartners();
    }
  };

  const toggleVisibility = async (partner: Partner) => {
    await supabase
      .from("partners")
      .update({ is_visible: !partner.is_visible })
      .eq("id", partner.id);
    await fetchPartners();
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
        <div>
          <h1 className="text-3xl font-bold text-white">Kumppanit</h1>
          <p className="text-[#8b9dc3] mt-1">
            Hallinnoi sivustolla näkyviä kumppaneita
          </p>
        </div>
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
              Lisää kumppani
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#1a2847] border-[#2a3857] text-white max-w-lg">
            <DialogHeader>
              <DialogTitle>
                {editingPartner ? "Muokkaa kumppania" : "Lisää uusi kumppani"}
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
                <Label className="text-[#8b9dc3]">Logo URL (valinnainen)</Label>
                <Input
                  value={form.logo_url}
                  onChange={(e) =>
                    setForm({ ...form, logo_url: e.target.value })
                  }
                  placeholder="https://..."
                  className="bg-[#0a1128] border-[#2a3857] text-white"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[#8b9dc3]">
                  Verkkosivusto (valinnainen)
                </Label>
                <Input
                  value={form.website_url}
                  onChange={(e) =>
                    setForm({ ...form, website_url: e.target.value })
                  }
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
              <div className="flex items-center justify-between p-4 bg-[#0a1128] rounded-lg">
                <div>
                  <Label className="text-white">Näkyvissä sivustolla</Label>
                  <p className="text-[#8b9dc3] text-sm mt-1">
                    Näytetäänkö kumppani julkisella sivustolla
                  </p>
                </div>
                <Switch
                  checked={form.is_visible}
                  onCheckedChange={(checked) =>
                    setForm({ ...form, is_visible: checked })
                  }
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
                  ) : editingPartner ? (
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
                Näkyvyys
              </th>
              <th className="px-6 py-4 text-left text-[#8b9dc3] font-medium">
                Verkkosivusto
              </th>
              <th className="px-6 py-4 text-right text-[#8b9dc3] font-medium">
                Toiminnot
              </th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner) => (
              <tr
                key={partner.id}
                className="border-b border-[#2a3857] last:border-0"
              >
                <td className="px-6 py-4 text-[#8b9dc3]">
                  {partner.display_order}
                </td>
                <td className="px-6 py-4 text-white font-medium">
                  {partner.name}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleVisibility(partner)}
                    className={`flex items-center gap-2 text-xs px-3 py-1.5 rounded transition-colors ${
                      partner.is_visible
                        ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                        : "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30"
                    }`}
                  >
                    {partner.is_visible ? (
                      <>
                        <Eye className="h-3 w-3" /> Näkyvissä
                      </>
                    ) : (
                      <>
                        <EyeOff className="h-3 w-3" /> Piilotettu
                      </>
                    )}
                  </button>
                </td>
                <td className="px-6 py-4">
                  {partner.website_url ? (
                    <a
                      href={partner.website_url}
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
                      onClick={() => openEditDialog(partner)}
                      className="text-[#8b9dc3] hover:text-white hover:bg-[#2a3857]"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(partner.id)}
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
        {partners.length === 0 && (
          <div className="text-center py-12 text-[#8b9dc3]">
            Ei kumppaneita vielä. Lisää ensimmäinen kumppani!
          </div>
        )}
      </div>
    </div>
  );
}
