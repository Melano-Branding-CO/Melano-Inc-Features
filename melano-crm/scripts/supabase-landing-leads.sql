-- Ejecutar en Supabase SQL Editor si querés persistir leads desde las landings (API /api/landing-lead).
-- El cliente Next usa SUPABASE_SERVICE_ROLE_KEY solo en el servidor; la anon key no inserta acá.

create table if not exists public.landing_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  landing_slug text not null,
  name text,
  phone text not null,
  profile text,
  intent text,
  city text,
  notes text
);

alter table public.landing_leads enable row level security;
-- Sin políticas públicas: bloquea acceso directo con anon; el service role del API route puede insertar.
