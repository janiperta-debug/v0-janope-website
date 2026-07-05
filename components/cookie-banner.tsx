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
      <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-5 shadow-2xl md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h3 className="mb-1 font-display text-sm font-semibold text-foreground">
              {"Evästeet"}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {"Käytämme välttämättömiä evästeitä sivuston toimintaan ja kirjautumiseen. Lue lisää "}
              <Link href="/evasteet" className="text-gold hover:underline">
                {"evästekäytännöstämme"}
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button
              onClick={acceptNecessary}
              className="rounded-lg border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {"Vain välttämättömät"}
            </button>
            <button
              onClick={accept}
              className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              {"Hyväksy kaikki"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
