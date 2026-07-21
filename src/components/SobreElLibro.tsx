import { site } from "@/content/site";

export default function SobreElLibro() {
  return (
    <section className="bg-clarity text-institutional py-20 border-t border-dignity/20">
      <div className="container-section">
        <p className="font-sans text-xs tracking-widest uppercase text-dignity mb-2 text-center">
          Sobre el libro
        </p>
        <h2 className="font-serif text-2xl mb-6 text-center">{site.libro.titulo}</h2>
        <p className="font-sans text-base leading-relaxed mb-6">{site.libro.sinopsis}</p>
        {site.libro.citaDestacada && (
          <blockquote className="border-l-2 border-action pl-4 italic font-serif text-lg my-6">
            “{site.libro.citaDestacada}”
          </blockquote>
        )}
        <p className="font-sans text-sm text-institutional/70">{site.libro.datosEdicion}</p>
      </div>
    </section>
  );
}
