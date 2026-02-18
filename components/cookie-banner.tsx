"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function acceptNecessary() {
    localStorage.setItem("cookie-consent", "necessary");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-4xl rounded-xl bg-[#0a1128] border border-[#1e3a5f]/50 p-5 md:p-6 shadow-2xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-white mb-1">
              Evasteet
            </h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Kaytamme valttamattomia evasteita sivuston toimintaan ja
              kirjautumiseen. Lue lisaa{" "}
              <Link
                href="/evasteet"
                className="text-[#3b82f6] hover:underline"
              >
                evastekaytannostamme
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-xs font-medium text-[#94a3b8] border border-[#1e3a5f] rounded-lg hover:bg-[#1e3a5f]/30 transition-colors"
            >
              Vain valttamattomat
            </button>
            <button
              onClick={accept}
              className="px-4 py-2 text-xs font-medium text-white bg-[#2563eb] rounded-lg hover:bg-[#1d4ed8] transition-colors"
            >
              Hyvaksy kaikki
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
