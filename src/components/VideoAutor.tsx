"use client";

import { track } from "@vercel/analytics";
import { site } from "@/content/site";

function embedUrl() {
  if (site.video.proveedor === "youtube") {
    return `https://www.youtube-nocookie.com/embed/${site.video.id}`;
  }
  return `https://player.vimeo.com/video/${site.video.id}`;
}

export default function VideoAutor() {
  return (
    <section className="bg-clarity text-institutional py-20">
      <div className="container-section text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-dignity mb-2">
          Un mensaje personal
        </p>
        <h2 className="font-serif text-2xl mb-8">{site.video.titulo}</h2>
        <div
          className="relative w-full aspect-video border border-dignity/40 shadow-lg"
          onClick={() => track("video_play_click")}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src={embedUrl()}
            title={site.video.titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
