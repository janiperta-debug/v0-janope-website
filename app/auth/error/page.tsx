import Link from "next/link";

export default async function AuthErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1120]">
      <div className="w-full max-w-sm mx-4">
        <div className="bg-[#1f2937] rounded-xl p-8 border border-[#374151] text-center">
          <h1 className="text-xl font-bold text-white mb-2">Virhe kirjautumisessa</h1>
          <p className="text-sm text-[#9ca3af] mb-6">
            {error || "Tuntematon virhe. Yritä uudelleen."}
          </p>
          <Link
            href="/auth/login"
            className="inline-block bg-[#2563eb] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#1d4ed8] transition-colors"
          >
            Takaisin kirjautumiseen
          </Link>
        </div>
      </div>
    </div>
  );
}
