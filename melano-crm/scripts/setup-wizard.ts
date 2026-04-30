import { existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const envPath = join(process.cwd(), '.env.local');

async function main() {
  if (existsSync(envPath)) {
    console.log('.env.local already exists. Edit it manually to update CRM configuration.');
    return;
  }

  const rl = createInterface({ input, output });

  const databaseUrl = await rl.question('SQL DATABASE_URL: ');
  const supabaseUrl = await rl.question('Supabase URL (optional): ');
  const supabaseAnonKey = await rl.question('Supabase anon key (optional): ');

  rl.close();

  const contents = [
    `DATABASE_URL=${databaseUrl}`,
    `NEXT_PUBLIC_SUPABASE_URL=${supabaseUrl}`,
    `NEXT_PUBLIC_SUPABASE_ANON_KEY=${supabaseAnonKey}`,
    'NEXT_PUBLIC_APP_URL=http://localhost:3000',
  ].join('\n');

  writeFileSync(envPath, `${contents}\n`, { encoding: 'utf8', flag: 'wx' });
  console.log('Created .env.local. Run npm run setup:database after verifying the values.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
