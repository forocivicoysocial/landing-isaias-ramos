"use client";

import { track } from "@vercel/analytics";
import { site } from "@/content/site";

export default function DondeConseguirlo() {
  return (
    <section className="bg-clarity text-institutional py-20 border-t border-dignity/20">
      <div className="container-section text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-dignity mb-2">
          Dónde conseguirlo
        </p>
        <h2 className="font-serif text-2xl mb-8">Consigue tu ejemplar</h2>
        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          {site.compra.map((canal) => (
            <a
              key={canal.nombre}
              href={canal.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("buy_click", { canal: canal.nombre })}
              className={
                canal.destacado
                  ? "bg-action text-clarity font-sans font-medium py-3 px-6 rounded-sm hover:opacity-90 transition-opacity"
                  : "border border-institutional/30 text-institutional font-sans py-3 px-6 rounded-sm hover:border-institutional transition-colors"
              }
            >
              {canal.nombre}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
