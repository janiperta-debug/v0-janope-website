"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

const fieldClass =
  "w-full rounded-lg border border-border bg-card/70 px-4 py-3 text-base text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || "Viestin lähetys epäonnistui.");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Viestin lähetys epäonnistui. Yritä uudelleen."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-secondary/40 py-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-area-sustainability">
          <Check className="h-7 w-7 text-card" />
        </span>
        <h3 className="font-display text-xl text-foreground">
          Kiitos viestistäsi!
        </h3>
        <p className="text-muted-foreground">
          Otamme sinuun yhteyttä mahdollisimman pian.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="map-kicker text-[10px] text-muted-foreground">
          Nimi *
        </label>
        <input type="text" id="name" name="name" required className={fieldClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="map-kicker text-[10px] text-muted-foreground">
          Sähköposti *
        </label>
        <input type="email" id="email" name="email" required className={fieldClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="organization"
          className="map-kicker text-[10px] text-muted-foreground"
        >
          Aihe
        </label>
        <input type="text" id="organization" name="organization" className={fieldClass} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="map-kicker text-[10px] text-muted-foreground">
          Viesti *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
        />
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="map-kicker mt-1 inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-6 py-4 text-xs text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {isSubmitting ? "Lähetetään…" : "Lähetä viesti →"}
      </button>
    </form>
  );
}
