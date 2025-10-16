import { createClient } from "@libsql/client";
import "dotenv/config"; 

const db = createClient({
  url: process.env.TURSO_BD,
  authToken: process.env.TURSO_TOKEN,
});

export default db;