"use client";

import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      router.push("/admin");
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message === "Invalid login credentials"
            ? "Virheellinen sähköposti tai salasana."
            : err.message
          : "Kirjautuminen epäonnistui."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/janope-logo.png"
              alt="Janope"
              width={64}
              height={64}
              className="mx-auto mb-4 w-auto h-auto"
            />
          </Link>
          <h1 className="text-xl font-bold text-white">Hallintapaneeli</h1>
          <p className="text-sm text-[#9ca3af] mt-1">Kirjaudu sisään</p>
        </div>

        <div className="bg-[#1f2937] rounded-xl p-6 border border-[#374151] shadow-lg">
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-[#9ca3af] mb-1.5"
              >
                Sähköposti
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@janope.fi"
                className="w-full px-3 py-2.5 bg-[#0a1628] border border-[#374151] rounded-lg text-sm text-white placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:border-[#2563eb]"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-[#9ca3af] mb-1.5"
              >
                Salasana
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#0a1628] border border-[#374151] rounded-lg text-sm text-white placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/50 focus:border-[#2563eb]"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-[#2563eb] text-white rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? "Kirjaudutaan..." : "Kirjaudu"}
            </button>
          </form>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-sm text-[#6b7280] hover:text-[#9ca3af] transition-colors"
          >
            Takaisin etusivulle
          </Link>
        </div>
      </div>
    </div>
  );
}
