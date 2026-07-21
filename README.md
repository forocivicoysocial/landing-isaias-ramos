# Landing Page — Dr. Isaías Ramos

Landing page de una sola página (one-page) para el lanzamiento del libro,
pensada para tráfico 100% desde código QR (mobile-first).

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Supabase (tabla `subscribers` para el formulario de contacto)
- Vercel (hosting + Analytics)

## Contenido editable
Todo el texto, enlaces e imágenes del sitio vive en `src/content/site.ts`.
Edita ese archivo para actualizar el sitio sin tocar el diseño.

Reemplaza las imágenes de ejemplo en `public/placeholders/` por las reales
(portada del libro y foto del autor) y actualiza las rutas en `site.ts`.

## Configuración local
1. `npm install`
2. Copia `.env.local.example` a `.env.local` y completa las llaves de Supabase.
3. En Supabase, corre el script `supabase/schema.sql` (SQL Editor) para crear
   la tabla `subscribers`.
4. `npm run dev` y abre http://localhost:3000

## Despliegue
Conecta este repositorio en Vercel e importa las mismas variables de entorno
de `.env.local` (Project Settings > Environment Variables).
