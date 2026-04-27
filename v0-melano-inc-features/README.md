# MELANO INC AI Automation Hub

Sitio SaaS modular y de conversion para `brunomelano.com`, construido con Next.js 14 App Router + TailwindCSS + TypeScript.

## Incluye

- Home `/` con hero, ecosistema de agentes, casos de uso, demo bot, pricing y captura.
- Landings por producto: `/melania`, `/alenya`, `/luxia`, `/alexia`.
- Ruta preparada para futura autenticacion SaaS: `/login`.
- Endpoint `POST /api/leads` listo para Supabase con fallback mock y trigger webhook.
- Boton flotante global de WhatsApp.

## Variables de entorno

Copiar `.env.example` a `.env.local`:

- `NEXT_PUBLIC_SITE_URL=http://localhost:3000`
- `NEXT_PUBLIC_WHATSAPP_PHONE=5491100000000`
- `NEXT_PUBLIC_WHATSAPP_MESSAGE=Hola MELANO INC, quiero automatizar mi negocio con IA.`
- `NEXT_PUBLIC_SUPABASE_URL=...`
- `SUPABASE_SERVICE_ROLE_KEY=...`
- `SUPABASE_LEADS_TABLE=leads`
- `LEAD_AUTORESPONSE_WEBHOOK_URL=` (opcional)

## Desarrollo local

Desde la raiz del repo:

- `npm run dev`
- `npm run lint`
- `npm run build`

## Deploy Vercel

1. Importar el repositorio en Vercel.
2. Configurar **Root Directory**: `v0-melano-inc-features`.
3. Cargar variables de entorno.
4. Deploy.

## Deploy Netlify

1. Crear sitio desde Git.
2. Configurar:
   - **Base directory**: `v0-melano-inc-features`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
3. Activar runtime de Next.js con plugin oficial:
   - Crear `netlify.toml` con:
     - `[build]`
     - `base = "v0-melano-inc-features"`
     - `command = "npm run build"`
     - `publish = ".next"`
     - `[[plugins]]`
     - `package = "@netlify/plugin-nextjs"`
4. Cargar variables de entorno.
