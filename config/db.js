import { createClient } from "@libsql/client";
import "dotenv/config"; 

const db = createClient({
  url: process.env
  authToken: process.env
});

export default db;