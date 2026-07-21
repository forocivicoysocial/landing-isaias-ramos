// -----------------------------------------------------------------------------
// CONTENIDO EDITABLE DEL SITIO
// Edita los valores de este archivo para actualizar textos, enlaces e imágenes
// sin tocar el diseño de los componentes.
// -----------------------------------------------------------------------------

export const site = {
  autor: {
    nombre: "Dr. Isaías Ramos Guzmán",
    bio: "TODO: biografía corta del autor (3-4 líneas). Pendiente de recibir el texto final.",
    fotoUrl: "/placeholders/autor.jpg", // TODO: reemplazar con foto real del autor
    redes: [
      { nombre: "Instagram", url: "https://instagram.com/" }, // TODO: enlace real
      { nombre: "Facebook", url: "https://facebook.com/" }, // TODO: enlace real
      { nombre: "X", url: "https://x.com/" }, // TODO: enlace real
    ],
  },
  libro: {
    titulo: "TODO: Título del Libro",
    fraseBienvenida: "Gracias por escanear el código y llegar hasta aquí.",
    sinopsis:
      "TODO: sinopsis breve del libro (1-2 párrafos). Pendiente de recibir el texto final.",
    datosEdicion: "TODO: editorial, año, número de páginas, ISBN si aplica.",
    citaDestacada: "TODO: fragmento o cita destacada del libro (opcional).",
    portadaUrl: "/placeholders/portada.jpg", // TODO: reemplazar con la portada real
  },
  video: {
    // TODO: reemplazar con el ID real del video de YouTube (no listado) o Vimeo
    proveedor: "youtube" as "youtube" | "vimeo",
    id: "dQw4w9WgXcQ",
    titulo: "Un mensaje del autor para ti",
  },
  compra: [
    // TODO: completar y confirmar con el autor los canales de venta reales.
    { nombre: "Tienda propia", url: "#", destacado: true },
    { nombre: "Amazon", url: "#", destacado: false },
    { nombre: "Librería física", url: "#", destacado: false },
  ],
  contacto: {
    email: "frentecivicoysocial@outlook.com",
  },
};
