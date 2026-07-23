// -----------------------------------------------------------------------------
// CONTENIDO EDITABLE DEL SITIO
// Edita los valores de este archivo para actualizar textos, enlaces e imágenes
// sin tocar el diseño de los componentes.
// -----------------------------------------------------------------------------

export const site = {
  autor: {
    nombre: "Dr. Isaías Ramos Guzmán",
    bio: "Isaías Ramos Guzmán nació en Jababa, Moca. Médico graduado en 1982, ha desarrollado una trayectoria vinculada a distintos ámbitos de la vida productiva nacional, lo que le ha permitido comprender con profundidad los desafíos estructurales de la República Dominicana y articular una visión integral de desarrollo. En 2009 fundó el Foro Cívico y Social, hoy Fundación, desde donde impulsa formación ciudadana basada en principios y valores patrios. En 2018 promovió el Frente Cívico y Social, articulando a nivel nacional la defensa del Estado de derecho y el fortalecimiento institucional. Defiende que el progreso sostenible exige instituciones fuertes, reglas claras y responsabilidad compartida. El futuro no se improvisa: se construye con orden, justicia y determinación.",
    fotoUrl: "/autor.jpg",
    redes: [
      { nombre: "Instagram", url: "https://instagram.com/" }, // TODO: enlace real
      { nombre: "Facebook", url: "https://facebook.com/" }, // TODO: enlace real
      { nombre: "X", url: "https://x.com/" }, // TODO: enlace real
    ],
  },
  libro: {
    titulo: "La Cultura del Deber",
    subtitulo:
      "Formación ciudadana, urbanidad y verdad pública para reconstruir la República",
    fraseBienvenida: "Gracias por escanear el código y llegar hasta aquí.",
    sinopsis:
      "TODO: sinopsis breve del libro (1-2 párrafos). Pendiente de recibir el texto final.",
    datosEdicion: "Fundación Foro Cívico y Social.", // TODO: agregar año, páginas, ISBN si aplica.
    citaDestacada: "TODO: fragmento o cita destacada del libro (opcional).",
    portadaUrl: "/portada.jpg",
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
