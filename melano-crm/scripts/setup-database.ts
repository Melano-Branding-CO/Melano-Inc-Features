import { getPool } from "../lib/db";

const statements = [
  `create table if not exists contacts (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    email text,
    phone text,
    stage text not null default 'lead',
    created_at timestamptz not null default now()
  )`,
  `create table if not exists properties (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    address text not null,
    price numeric not null default 0,
    status text not null default 'available',
    created_at timestamptz not null default now()
  )`,
  `create table if not exists activities (
    id uuid primary key default gen_random_uuid(),
    contact_id uuid references contacts(id) on delete cascade,
    type text not null,
    note text,
    due_at timestamptz,
    completed_at timestamptz
  )`,
];

async function main() {
  const db = getPool();

  for (const statement of statements) {
    await db.query(statement);
  }

  console.log("Melano CRM database tables are ready.");
  await db.end();
}

main().catch((error) => {
  console.error("Unable to set up the database.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
