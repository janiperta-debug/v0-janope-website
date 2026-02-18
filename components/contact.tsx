"use client";

import React from "react"

import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";

export function Contact() {
  const { ref, isInView } = useInView();
  const { ref: formRef, isInView: formInView } = useInView();
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
      setError(err instanceof Error ? err.message : "Viestin lähetys epäonnistui. Yritä uudelleen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="yhteystiedot" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-[#f0f7ff]">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1128] mb-4">
            Ota yhteyttä
          </h2>
          <p className="text-lg sm:text-xl text-[#8b9dc3]">
            Vastataan 1 työpäivän sisällä
          </p>
        </div>

        <div
          ref={formRef}
          className={`max-w-xl mx-auto bg-white/90 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-xl shadow-lg border border-[#00d4ff]/15 transition-all duration-700 ${
            formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00d4ff] to-[#0088ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#0a1128]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0a1128] mb-2">
                Kiitos viestistäsi!
              </h3>
              <p className="text-[#6b7280]">
                Otamme sinuun yhteyttä mahdollisimman pian.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 font-semibold text-[#0a1128]"
                >
                  Nimi *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-[#e5e7eb] rounded-lg text-base focus:outline-none focus:border-[#00d4ff] focus:ring-4 focus:ring-[#00d4ff]/10 transition-all"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-[#0a1128]"
                >
                  Sähköposti *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-[#e5e7eb] rounded-lg text-base focus:outline-none focus:border-[#00d4ff] focus:ring-4 focus:ring-[#00d4ff]/10 transition-all"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="organization"
                  className="block mb-2 font-semibold text-[#0a1128]"
                >
                  Organisaatio
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 border-2 border-[#e5e7eb] rounded-lg text-base focus:outline-none focus:border-[#00d4ff] focus:ring-4 focus:ring-[#00d4ff]/10 transition-all"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-[#0a1128]"
                >
                  Viesti *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-[#e5e7eb] rounded-lg text-base resize-y focus:outline-none focus:border-[#00d4ff] focus:ring-4 focus:ring-[#00d4ff]/10 transition-all"
                />
              </div>

              {error && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0088ff] text-[#0a1128] py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(0,212,255,0.3)] hover:shadow-[0_6px_25px_rgba(0,212,255,0.5)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Lähetetään..." : "Lähetä viesti"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
