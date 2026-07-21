-- Ejecutar en Supabase: SQL Editor > New query > pegar y correr.

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.subscribers enable row level security;

-- Permite que cualquiera (con la llave anon pública) inserte su email,
-- pero nadie puede leer/listar los correos desde el navegador.
create policy "Permitir suscripcion publica"
  on public.subscribers
  for insert
  to anon
  with check (true);
