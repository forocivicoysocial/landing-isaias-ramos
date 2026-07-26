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
      { nombre: "Instagram", url: "https://www.instagram.com/dr.isaiasramos/" },
      { nombre: "Facebook", url: "https://www.facebook.com/share/18pn8ikMXg/" },
      { nombre: "X", url: "https://x.com/isaiasramosrd" },
    ],
  },
  libro: {
    titulo: "La Cultura del Deber",
    subtitulo:
      "Formación ciudadana, urbanidad y verdad pública para reconstruir la República",
    fraseBienvenida: "Gracias por escanear el código y llegar hasta aquí.",
    sinopsis: `Las naciones no siempre se deterioran primero por un gran colapso.

No siempre empiezan a caer por una guerra, una bancarrota, una ruptura constitucional espectacular o un hecho único que pueda señalarse con el dedo y con fecha exacta. A veces comienzan a debilitarse de una manera más lenta, más silenciosa y, por eso mismo, más peligrosa. Se debilitan cuando la vida común pierde forma. Cuando el respeto deja de sentirse obligatorio. Cuando la palabra pesa menos. Cuando la verdad compite en desventaja frente al rumor. Cuando la autoridad ya no logra ser vista ni como legítima ni como confiable. Cuando la escuela instruye, pero forma poco. Cuando la familia resiste, pero cada vez más sola. Cuando la calle enseña imposición. Cuando el deber empieza a sonar anticuado y la libertad empieza a confundirse con capricho.

Ese es el tipo de desgaste que este libro quiere nombrar.

No porque sea el único problema dominicano. No porque toda la crisis nacional pueda reducirse a una cuestión moral o cívica. No porque los desafíos económicos, institucionales y sociales hayan dejado de importar.

Sino porque existe una verdad que el país ha preferido mirar solo por fragmentos: la República Dominicana no enfrenta únicamente problemas de gestión, de política pública o de administración del Estado. Enfrenta también un problema más hondo y más decisivo: un problema de formación republicana.`,
    datosEdicion: "Fundación Foro Cívico y Social.", // TODO: agregar año, páginas, ISBN si aplica.
    citaDestacada: "Ese es el corazón del libro.",
    portadaUrl: "/portada.jpg",
  },
  video: {
    // TODO: reemplazar con el ID real del video de YouTube (no listado) o Vimeo
    proveedor: "youtube" as "youtube" | "vimeo",
    id: "dQw4w9WgXcQ",
    titulo: "Un mensaje del autor para ti",
  },
  compra: [
    { nombre: "Cuestalibros.com", url: "https://www.cuestalibros.com/5056305459", destacado: true },
    { nombre: "Editora Santuario (WhatsApp)", url: "https://wa.me/18094457784", destacado: false },
  ],
  contacto: {
    email: "frentecivicoysocial@outlook.com",
  },
};
