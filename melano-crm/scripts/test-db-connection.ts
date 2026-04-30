import { query } from "../lib/db";

async function testDatabaseConnection() {
  const result = await query<{ now: Date; database: string }>(
    "SELECT NOW() AS now, current_database() AS database",
  );

  const row = result[0];
  if (!row) {
    throw new Error("Database returned no connection test rows.");
  }

  console.log(`Database connected: ${row.database} at ${row.now.toISOString()}`);
}

testDatabaseConnection().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
