"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Plus,
  Download,
  Trash2,
  Users,
  TrendingUp,
  Calendar,
  UserCheck,
  Clock,
} from "lucide-react";

interface Contact {
  id: string;
  kunta: string;
  tuote: string;
  kontakti_nimi: string;
  rooli: string;
  email: string;
  puhelin: string;
  yhteydenotto_pvm: string | null;
  kanava: string;
  tila: string;
  prioriteetti: string;
  seuraava_askel: string;
  muistiinpanot: string;
  created_at: string;
}

const tilaOptions = [
  "Ei aloitettu",
  "Lähetetty",
  "Vastattu",
  "Tapaaminen sovittu",
  "Tarjous lähetetty",
  "Asiakas",
  "Hylätty",
];

const prioriteettiOptions = ["Korkea", "Keski", "Matala"];

const kanavaOptions = ["Sähköposti", "Puhelu", "Puhelu ensin", "LinkedIn", "Tapaaminen"];

const tuoteOptions = ["FinnVesta", "FinnVerdis", "Lähellä", "Voltteri", "GameTable", "GameDesk", "Skuuttila"];

const emptyContact: Omit<Contact, "id" | "created_at"> = {
  kunta: "",
  tuote: "FinnVesta",
  kontakti_nimi: "",
  rooli: "",
  email: "",
  puhelin: "",
  yhteydenotto_pvm: null,
  kanava: "Sähköposti",
  tila: "Ei aloitettu",
  prioriteetti: "Keski",
  seuraava_askel: "",
  muistiinpanot: "",
};

export default function CRMPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [tilaFilter, setTilaFilter] = useState<string>("all");
  const [tuoteFilter, setTuoteFilter] = useState<string>("all");
  const [prioriteettiFilter, setPrioriteettiFilter] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [formData, setFormData] = useState(emptyContact);

  const supabase = createClient();

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    console.log("[v0] CRM fetchContacts called");
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("crm_contacts")
        .select("*")
        .order("created_at", { ascending: false });

      console.log("[v0] CRM fetch result:", { data, error });

      if (error) {
        console.error("[v0] CRM Error fetching contacts:", error);
      } else {
        setContacts(data || []);
      }
    } catch (err) {
      console.error("[v0] CRM unexpected error:", err);
    }
    setLoading(false);
  }

  const filteredContacts = contacts.filter((c) => {
    const matchesSearch =
      !searchQuery ||
      c.kunta.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.kontakti_nimi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTila = tilaFilter === "all" || c.tila === tilaFilter;
    const matchesTuote = tuoteFilter === "all" || c.tuote === tuoteFilter;
    const matchesPrioriteetti =
      prioriteettiFilter === "all" || c.prioriteetti === prioriteettiFilter;
    return matchesSearch && matchesTila && matchesTuote && matchesPrioriteetti;
  });

  // Stats
  const totalContacts = contacts.length;
  const activeContacts = contacts.filter(
    (c) => !["Ei aloitettu", "Hylätty"].includes(c.tila)
  ).length;
  const tapaamiset = contacts.filter(
    (c) => c.tila === "Tapaaminen sovittu"
  ).length;
  const asiakkaat = contacts.filter((c) => c.tila === "Asiakas").length;
  const aloittamatta = contacts.filter((c) => c.tila === "Ei aloitettu").length;

  function openNewContact() {
    setEditingContact(null);
    setFormData({
      ...emptyContact,
      yhteydenotto_pvm: new Date().toISOString().split("T")[0],
    });
    setIsModalOpen(true);
  }

  function openEditContact(contact: Contact) {
    setEditingContact(contact);
    setFormData({
      kunta: contact.kunta,
      tuote: contact.tuote,
      kontakti_nimi: contact.kontakti_nimi,
      rooli: contact.rooli,
      email: contact.email,
      puhelin: contact.puhelin,
      yhteydenotto_pvm: contact.yhteydenotto_pvm,
      kanava: contact.kanava,
      tila: contact.tila,
      prioriteetti: contact.prioriteetti,
      seuraava_askel: contact.seuraava_askel,
      muistiinpanot: contact.muistiinpanot,
    });
    setIsModalOpen(true);
  }

  async function saveContact() {
    if (editingContact) {
      const { error } = await supabase
        .from("crm_contacts")
        .update(formData)
        .eq("id", editingContact.id);

      if (error) {
        console.error("Error updating contact:", error);
        return;
      }
    } else {
      const { error } = await supabase.from("crm_contacts").insert([formData]);

      if (error) {
        console.error("Error creating contact:", error);
        return;
      }
    }

    setIsModalOpen(false);
    fetchContacts();
  }

  async function deleteContact(id: string) {
    if (!confirm("Poistetaanko kontakti?")) return;

    const { error } = await supabase.from("crm_contacts").delete().eq("id", id);

    if (error) {
      console.error("Error deleting contact:", error);
      return;
    }

    fetchContacts();
  }

  function exportCSV() {
    const headers = [
      "Kunta",
      "Tuote",
      "Kontakti",
      "Rooli",
      "Sähköposti",
      "Puhelin",
      "Pvm",
      "Kanava",
      "Tila",
      "Prioriteetti",
      "Seuraava askel",
      "Muistiinpanot",
    ];
    const rows = contacts.map((c) =>
      [
        c.kunta,
        c.tuote,
        c.kontakti_nimi,
        c.rooli,
        c.email,
        c.puhelin,
        c.yhteydenotto_pvm || "",
        c.kanava,
        c.tila,
        c.prioriteetti,
        c.seuraava_askel,
        c.muistiinpanot,
      ].map((v) => `"${(v || "").replace(/"/g, '""')}"`)
    );
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `Janope_CRM_${new Date()
      .toLocaleDateString("fi-FI")
      .replace(/\./g, "-")}.csv`;
    a.click();
  }

  function getTilaBadgeClass(tila: string) {
    const map: Record<string, string> = {
      "Ei aloitettu": "bg-gray-100 text-gray-600",
      Lähetetty: "bg-blue-100 text-blue-700",
      Vastattu: "bg-cyan-100 text-cyan-700",
      "Tapaaminen sovittu": "bg-orange-100 text-orange-700",
      "Tarjous lähetetty": "bg-purple-100 text-purple-700",
      Asiakas: "bg-green-100 text-green-700",
      Hylätty: "bg-red-100 text-red-600",
    };
    return map[tila] || "bg-gray-100 text-gray-600";
  }

  function getPrioriteettiClass(pri: string) {
    const map: Record<string, string> = {
      Korkea: "bg-red-50 text-red-600 border-red-200",
      Keski: "bg-yellow-50 text-yellow-700 border-yellow-200",
      Matala: "bg-gray-50 text-gray-500 border-gray-200",
    };
    return map[pri] || "bg-gray-50 text-gray-500 border-gray-200";
  }

  function formatDate(dateStr: string | null) {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("fi-FI");
  }

  console.log("[v0] CRM rendering, loading:", loading, "contacts:", contacts.length);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0a1128]">CRM</h1>
          <p className="text-[#6b7280]">Hallitse asiakaskontakteja ja myyntiä</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={exportCSV}>
            <Download className="mr-2 h-4 w-4" />
            Vie CSV
          </Button>
          <Button onClick={openNewContact}>
            <Plus className="mr-2 h-4 w-4" />
            Uusi kontakti
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-2">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-[#6b7280]">Kontaktit</p>
              <p className="text-2xl font-bold text-[#0a1128]">{totalContacts}</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-cyan-50 p-2">
              <TrendingUp className="h-5 w-5 text-cyan-600" />
            </div>
            <div>
              <p className="text-sm text-[#6b7280]">Aktiiviset</p>
              <p className="text-2xl font-bold text-cyan-600">{activeContacts}</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-orange-50 p-2">
              <Calendar className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-[#6b7280]">Tapaamiset</p>
              <p className="text-2xl font-bold text-orange-600">{tapaamiset}</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-green-50 p-2">
              <UserCheck className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-[#6b7280]">Asiakkaat</p>
              <p className="text-2xl font-bold text-green-600">{asiakkaat}</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gray-50 p-2">
              <Clock className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <p className="text-sm text-[#6b7280]">Aloittamatta</p>
              <p className="text-2xl font-bold text-gray-500">{aloittamatta}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-100 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Hae kunta, kontakti, sähköposti..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={tilaFilter} onValueChange={setTilaFilter}>
          <SelectTrigger className="w-full sm:w-[160px]">
            <SelectValue placeholder="Tila" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Kaikki tilat</SelectItem>
            {tilaOptions.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={tuoteFilter} onValueChange={setTuoteFilter}>
          <SelectTrigger className="w-full sm:w-[160px]">
            <SelectValue placeholder="Tuote" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Kaikki tuotteet</SelectItem>
            {tuoteOptions.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={prioriteettiFilter} onValueChange={setPrioriteettiFilter}>
          <SelectTrigger className="w-full sm:w-[140px]">
            <SelectValue placeholder="Prioriteetti" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Kaikki</SelectItem>
            {prioriteettiOptions.map((p) => (
              <SelectItem key={p} value={p}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#00d4ff] border-t-transparent" />
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Users className="mb-4 h-12 w-12 text-gray-300" />
            <p className="text-lg font-medium text-[#0a1128]">
              Ei kontakteja
            </p>
            <p className="text-sm text-[#6b7280]">
              Lisää ensimmäinen kontakti aloittaaksesi
            </p>
            <Button className="mt-4" onClick={openNewContact}>
              <Plus className="mr-2 h-4 w-4" />
              Lisää kontakti
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kunta</TableHead>
                  <TableHead>Tuote</TableHead>
                  <TableHead>Kontakti</TableHead>
                  <TableHead>Sähköposti</TableHead>
                  <TableHead>Pvm / Kanava</TableHead>
                  <TableHead>Tila</TableHead>
                  <TableHead>Prioriteetti</TableHead>
                  <TableHead>Seuraava askel</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContacts.map((contact) => (
                  <TableRow
                    key={contact.id}
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => openEditContact(contact)}
                  >
                    <TableCell>
                      <div className="font-medium text-[#0a1128]">
                        {contact.kunta}
                      </div>
                      {contact.puhelin && (
                        <div className="text-xs text-[#6b7280]">
                          {contact.puhelin}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <span className="rounded-full bg-[#00d4ff]/10 px-2 py-1 text-xs font-medium text-[#0088ff]">
                        {contact.tuote}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-[#0a1128]">
                        {contact.kontakti_nimi}
                      </div>
                      <div className="text-xs text-[#6b7280]">
                        {contact.rooli}
                      </div>
                    </TableCell>
                    <TableCell>
                      <a
                        href={`mailto:${contact.email}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-[#00d4ff] hover:underline"
                      >
                        {contact.email}
                      </a>
                    </TableCell>
                    <TableCell>
                      <div className="text-xs text-[#6b7280]">
                        {formatDate(contact.yhteydenotto_pvm)}
                      </div>
                      <div className="text-xs text-gray-400">
                        {contact.kanava}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${getTilaBadgeClass(
                          contact.tila
                        )}`}
                      >
                        {contact.tila}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`rounded-full border px-2 py-1 text-xs font-medium ${getPrioriteettiClass(
                          contact.prioriteetti
                        )}`}
                      >
                        {contact.prioriteetti}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-xs text-[#6b7280] line-clamp-2">
                        {contact.seuraava_askel || "—"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteContact(contact.id);
                        }}
                        className="h-8 w-8 text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingContact
                ? `Muokkaa – ${editingContact.kunta}`
                : "Uusi kontakti"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="kunta">Kunta / Organisaatio</Label>
                <Input
                  id="kunta"
                  value={formData.kunta}
                  onChange={(e) =>
                    setFormData({ ...formData, kunta: e.target.value })
                  }
                  placeholder="esim. Hämeenlinna"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tuote">Tuote</Label>
                <Select
                  value={formData.tuote}
                  onValueChange={(v) => setFormData({ ...formData, tuote: v })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {tuoteOptions.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="kontakti_nimi">Kontaktihenkilö</Label>
                <Input
                  id="kontakti_nimi"
                  value={formData.kontakti_nimi}
                  onChange={(e) =>
                    setFormData({ ...formData, kontakti_nimi: e.target.value })
                  }
                  placeholder="esim. Petri Ylämurto"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rooli">Rooli / Titteli</Label>
                <Input
                  id="rooli"
                  value={formData.rooli}
                  onChange={(e) =>
                    setFormData({ ...formData, rooli: e.target.value })
                  }
                  placeholder="esim. Kiinteistöpäällikkö"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Sähköposti</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="esim. petri.ylamurto@kunta.fi"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="puhelin">Puhelin</Label>
                <Input
                  id="puhelin"
                  value={formData.puhelin}
                  onChange={(e) =>
                    setFormData({ ...formData, puhelin: e.target.value })
                  }
                  placeholder="esim. 050 123 4567"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="yhteydenotto_pvm">Yhteydenotto pvm</Label>
                <Input
                  id="yhteydenotto_pvm"
                  type="date"
                  value={formData.yhteydenotto_pvm || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      yhteydenotto_pvm: e.target.value || null,
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kanava">Kanava</Label>
                <Select
                  value={formData.kanava}
                  onValueChange={(v) => setFormData({ ...formData, kanava: v })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {kanavaOptions.map((k) => (
                      <SelectItem key={k} value={k}>
                        {k}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tila">Tila</Label>
                <Select
                  value={formData.tila}
                  onValueChange={(v) => setFormData({ ...formData, tila: v })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {tilaOptions.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="prioriteetti">Prioriteetti</Label>
                <Select
                  value={formData.prioriteetti}
                  onValueChange={(v) =>
                    setFormData({ ...formData, prioriteetti: v })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {prioriteettiOptions.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="seuraava_askel">Seuraava askel</Label>
                <Input
                  id="seuraava_askel"
                  value={formData.seuraava_askel}
                  onChange={(e) =>
                    setFormData({ ...formData, seuraava_askel: e.target.value })
                  }
                  placeholder="esim. Odota vastaus"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="muistiinpanot">Muistiinpanot</Label>
              <Textarea
                id="muistiinpanot"
                value={formData.muistiinpanot}
                onChange={(e) =>
                  setFormData({ ...formData, muistiinpanot: e.target.value })
                }
                placeholder="Lisätietoja kontaktista..."
                rows={3}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Peruuta
            </Button>
            <Button onClick={saveContact}>Tallenna</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
