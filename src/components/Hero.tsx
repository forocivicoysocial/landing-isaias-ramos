import Image from "next/image";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section className="bg-institutional text-clarity min-h-[100svh] flex flex-col items-center justify-center text-center px-6 py-16">
      <div className="w-[9.9rem] h-[14.3rem] relative mb-8 shadow-xl">
        <Image
          src={site.libro.portadaUrl}
          alt={`Portada de ${site.libro.titulo}`}
          fill
          className="object-cover"
          priority
        />
      </div>
      <p className="font-sans text-sm tracking-widest uppercase text-dignity mb-3">
        {site.autor.nombre}
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl leading-tight max-w-md">
        {site.libro.titulo}
      </h1>
      {site.libro.subtitulo && (
        <p className="font-sans text-sm max-w-sm text-dignity mt-3">
          {site.libro.subtitulo}
        </p>
      )}
      <div className="divider-gold my-6" />
      <p className="font-sans text-base max-w-sm text-clarity/90">
        {site.libro.fraseBienvenida}
      </p>
    </section>
  );
}
