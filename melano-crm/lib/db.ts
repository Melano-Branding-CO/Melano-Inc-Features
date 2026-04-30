import { Pool, type QueryResultRow } from "pg";

const connectionString = process.env.DATABASE_URL;

let pool: Pool | null = null;

export function getPool() {
  if (!connectionString) {
    throw new Error("DATABASE_URL is required to connect to the SQL database.");
  }

  if (!pool) {
    pool = new Pool({
      connectionString,
      ssl:
        process.env.DATABASE_SSL === "true"
          ? {
              rejectUnauthorized: false,
            }
          : undefined,
    });
  }

  return pool;
}

export async function query<T extends QueryResultRow>(text: string, params?: unknown[]) {
  const result = await getPool().query<T>(text, params);
  return result.rows;
}
