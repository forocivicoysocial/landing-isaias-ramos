import Image from "next/image";
import { site } from "@/content/site";

export default function SobreElAutor() {
  return (
    <section className="bg-institutional text-clarity py-20">
      <div className="container-section text-center">
        <div className="w-28 h-28 relative mx-auto mb-6 rounded-full overflow-hidden border-2 border-dignity">
          <Image
            src={site.autor.fotoUrl}
            alt={site.autor.nombre}
            fill
            className="object-cover"
          />
        </div>
        <p className="font-sans text-xs tracking-widest uppercase text-dignity mb-2">
          Sobre el autor
        </p>
        <h2 className="font-serif text-2xl mb-4">{site.autor.nombre}</h2>
        <p className="font-sans text-base leading-relaxed text-clarity/90 mb-6">
          {site.autor.bio}
        </p>
        <div className="flex justify-center gap-5">
          {site.autor.redes.map((r) => (
            <a
              key={r.nombre}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm uppercase tracking-wide text-dignity hover:text-clarity transition-colors"
            >
              {r.nombre}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
