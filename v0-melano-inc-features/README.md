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

## Despliegue en Hostinger VPS (Node + PM2 + Nginx + SSL)

Archivos de apoyo ya incluidos:

- `deploy/hostinger/ecosystem.config.cjs`
- `deploy/hostinger/nginx.conf`
- `deploy/hostinger/deploy.sh`

### 1) Preparar VPS

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx

# Node 20 LTS (opcion recomendada)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# PM2 global
sudo npm i -g pm2
```

### 2) Clonar y configurar app

```bash
sudo mkdir -p /var/www/melano-inc-features
sudo chown -R $USER:$USER /var/www/melano-inc-features
cd /var/www/melano-inc-features
git clone <TU_REPO_URL> .
cd v0-melano-inc-features
cp .env.example .env.local
```

Editar `.env.local` con tus valores reales (Supabase, WhatsApp, etc.).

### 3) Build y arranque con PM2

```bash
cd /var/www/melano-inc-features/v0-melano-inc-features
npm install
npm run build
pm2 start deploy/hostinger/ecosystem.config.cjs --env production
pm2 save
pm2 startup
```

Verificar:

```bash
pm2 status
curl -I http://127.0.0.1:3000
```

### 4) Configurar Nginx reverse proxy

```bash
sudo cp /var/www/melano-inc-features/v0-melano-inc-features/deploy/hostinger/nginx.conf /etc/nginx/sites-available/brunomelano.com
sudo nano /etc/nginx/sites-available/brunomelano.com
```

Reemplazar en ese archivo:

- `brunomelano.com`
- `www.brunomelano.com`

Luego:

```bash
sudo ln -s /etc/nginx/sites-available/brunomelano.com /etc/nginx/sites-enabled/brunomelano.com
sudo nginx -t
sudo systemctl reload nginx
```

### 5) SSL con Let's Encrypt

```bash
sudo certbot --nginx -d brunomelano.com -d www.brunomelano.com
```

### 6) Deploy rápido en updates

En el VPS:

```bash
cd /var/www/melano-inc-features/v0-melano-inc-features
bash deploy/hostinger/deploy.sh
```

El script hace `git pull`, `npm ci`, `npm run build` y `pm2 reload`.

### 7) DNS en Hostinger

En el panel DNS de tu dominio:

- A `@` -> IP pública de tu VPS
- A `www` -> IP pública de tu VPS

### 8) Troubleshooting rápido

```bash
pm2 logs melano-ai-hub --lines 200
sudo journalctl -u nginx -n 200 --no-pager
sudo nginx -t
```

Si cambias puerto/app name, actualiza:

- `deploy/hostinger/ecosystem.config.cjs`
- `deploy/hostinger/nginx.conf`
