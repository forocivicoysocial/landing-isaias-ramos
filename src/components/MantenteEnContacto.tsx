"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { supabase } from "@/lib/supabaseClient";

export default function MantenteEnContacto() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("subscribers").insert({ email });
    if (error) {
      setStatus("error");
      return;
    }
    track("subscribe_success");
    setStatus("success");
    setEmail("");
  }

  return (
    <section className="bg-institutional text-clarity py-20 border-t border-dignity/20">
      <div className="container-section text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-dignity mb-2">
          Mantente en contacto
        </p>
        <h2 className="font-serif text-2xl mb-6">
          Recibe noticias sobre próximas publicaciones
        </h2>

        {status === "success" ? (
          <p className="font-sans text-base text-dignity">
            Gracias por suscribirte. Te avisaremos de próximas novedades.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="flex-1 px-4 py-3 rounded-sm bg-clarity text-institutional font-sans placeholder:text-institutional/50 focus:outline-none focus:ring-2 focus:ring-dignity"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-action text-clarity font-sans font-medium px-6 py-3 rounded-sm hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {status === "loading" ? "Enviando..." : "Suscribirme"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="font-sans text-sm text-action mt-3">
            Hubo un problema. Intenta de nuevo en unos minutos.
          </p>
        )}
      </div>
    </section>
  );
}
