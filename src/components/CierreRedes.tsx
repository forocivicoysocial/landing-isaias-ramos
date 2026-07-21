import { site } from "@/content/site";

export default function CierreRedes() {
  return (
    <footer className="bg-institutional text-clarity/70 py-12 border-t border-dignity/20">
      <div className="container-section text-center">
        <div className="flex justify-center gap-5 mb-4">
          {site.autor.redes.map((r) => (
            <a
              key={r.nombre}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs uppercase tracking-wide hover:text-dignity transition-colors"
            >
              {r.nombre}
            </a>
          ))}
        </div>
        <p className="font-sans text-xs">
          {site.autor.nombre} · {site.contacto.email}
        </p>
      </div>
    </footer>
  );
}
