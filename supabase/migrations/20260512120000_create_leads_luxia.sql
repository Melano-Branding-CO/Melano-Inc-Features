-- Tabla leads_luxia (CRM) — requerida para inserts desde landings (anon INSERT + authenticated SELECT)
-- UUID con gen_random_uuid() (motor SQL de Supabase estándar).

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

COMMENT ON TABLE public.leads_luxia IS 'Leads desde landings (Matías MDP, prefabricadas, etc.).';

ALTER TABLE public.leads_luxia ENABLE ROW LEVEL SECURITY;

GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON TABLE public.leads_luxia TO anon;
GRANT SELECT ON TABLE public.leads_luxia TO authenticated;

DROP POLICY IF EXISTS "Permitir insercion anonima de leads" ON public.leads_luxia;
CREATE POLICY "Permitir insercion anonima de leads"
  ON public.leads_luxia FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Solo admin puede leer leads" ON public.leads_luxia;
CREATE POLICY "Solo admin puede leer leads"
  ON public.leads_luxia FOR SELECT TO authenticated USING (true);
