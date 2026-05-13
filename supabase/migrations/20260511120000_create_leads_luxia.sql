-- Migration: tabla de captación leads_luxia + RLS (insert público anon, lectura authenticated)
-- Ejecutar con Supabase CLI (`supabase db push`) o pegar en SQL Editor del dashboard.

-- UUID: gen_random_uuid() está disponible en el servidor SQL de Supabase sin extensiones extra.
-- Si preferís uuid_generate_v4(), descomentá la línea siguiente y cambiá el DEFAULT del id:
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS public.leads_luxia (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  nombre_completo TEXT NOT NULL,
  telefono TEXT NOT NULL,
  email TEXT,
  propiedad_interes TEXT NOT NULL DEFAULT 'casas prefabricadas',
  origen_campana TEXT NOT NULL DEFAULT 'landing_principal',
  estado_crm TEXT NOT NULL DEFAULT 'nuevo'
);

COMMENT ON TABLE public.leads_luxia IS 'Captación de leads (landing Luxia / casas prefabricadas).';

ALTER TABLE public.leads_luxia ENABLE ROW LEVEL SECURITY;

-- Privilegios mínimos para que RLS pueda aplicarse con rol anon / authenticated
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON TABLE public.leads_luxia TO anon;
GRANT SELECT ON TABLE public.leads_luxia TO authenticated;

DROP POLICY IF EXISTS "Permitir insercion anonima de leads" ON public.leads_luxia;
CREATE POLICY "Permitir insercion anonima de leads"
  ON public.leads_luxia
  FOR INSERT
  TO anon
  WITH CHECK (true);

DROP POLICY IF EXISTS "Solo admin puede leer leads" ON public.leads_luxia;
CREATE POLICY "Solo admin puede leer leads"
  ON public.leads_luxia
  FOR SELECT
  TO authenticated
  USING (true);

-- Nota: esta política permite leer a cualquier usuario autenticado.
-- Para restringir solo a admins, reemplazá USING por algo como:
-- USING (auth.jwt() ->> 'role' = 'admin')
-- o una tabla de roles / claims según tu modelo.
