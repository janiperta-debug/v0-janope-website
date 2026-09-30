"use client"

import { useState } from "react"

type Status = "idle" | "loading" | "success" | "error"

export function Waitlist() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")
    
    if (!email) {
      setErrorMessage("Sähköpostiosoite vaaditaan")
      return
    }
    
    if (!validateEmail(email)) {
      setErrorMessage("Tarkista sähköpostiosoite")
      return
    }
    
    setStatus("loading")
    
    try {
      // TODO: Connect to Supabase when ready
      // const { error } = await supabase
      //   .from('waitlist')
      //   .insert([{ email, created_at: new Date().toISOString() }])
      // if (error) throw error
      
      // Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 800))
      
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
      setErrorMessage("Jokin meni pieleen. Yritä uudelleen.")
    }
  }

  return (
    <section id="waitlist" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,92,0,0.1)_0%,transparent_65%)] pointer-events-none" />
      
      <div className="relative z-10">
        <h2 className="font-[family-name:var(--font-syne)] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight mb-3 sm:mb-4 text-balance">
          Tule ensimmäisten joukossa
        </h2>
        <p className="text-text-muted text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-md mx-auto">
          Ilmoittaudu ja saat kutsun heti kun Skuuttila avautuu alueellasi.
        </p>
        
        {status === "success" ? (
          <div className="max-w-md mx-auto animate-fadeUp">
            <div className="w-14 h-14 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="bg-lime/10 border border-lime/30 text-lime rounded-2xl px-6 py-5 font-medium mb-4">
              Kiitos! Olet nyt listalla. Saat kutsun pian!
            </div>
            <button
              onClick={() => setStatus("idle")}
              className="text-text-muted hover:text-foreground transition-colors cursor-pointer text-sm"
            >
              Lisää toinen sähköposti
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="sähköpostiosoitteesi"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errorMessage) setErrorMessage("")
                }}
                className={`flex-1 bg-gray border text-foreground text-base px-5 py-3.5 rounded-full outline-none transition-colors placeholder:text-text-muted ${
                  errorMessage ? "border-voi focus:border-voi" : "border-gray-mid focus:border-orange"
                }`}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-orange text-background font-medium text-base px-6 py-3.5 rounded-full transition-all hover:bg-orange-light hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,92,0,0.35)] whitespace-nowrap cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Lähetetään...
                  </span>
                ) : (
                  "Ilmoittaudu"
                )}
              </button>
            </div>
            {errorMessage && (
              <p className="text-voi text-sm mt-3 text-left sm:text-center">{errorMessage}</p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
