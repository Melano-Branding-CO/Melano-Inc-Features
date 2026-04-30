# Melano CRM

Next.js App Router starter for a real estate CRM focused on contacts, properties, sales pipeline, activities, automations, WhatsApp conversations, and workspace settings.

## Structure

```txt
melano-crm/
├── app/
│   ├── dashboard/
│   ├── download/
│   ├── landing/
│   └── layout.tsx
├── components/ui/
├── lib/
├── scripts/
├── env.example
└── package.json
```

## Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Copy the example environment file:

   ```sh
   cp env.example .env.local
   ```

3. Fill `DATABASE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

4. Create the database tables:

   ```sh
   npm run setup:database
   ```

5. Run the app:

   ```sh
   npm run dev
   ```

## Scripts

- `npm run dev` starts the Next.js development server.
- `npm run build` builds the production app.
- `npm run typecheck` validates TypeScript.
- `npm run setup:wizard` prints the setup checklist.
- `npm run setup:database` creates the SQL schema.
- `npm run test:db` verifies the SQL database connection.
