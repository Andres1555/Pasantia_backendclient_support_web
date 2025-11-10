import path from 'path';
import sqlite3 from 'sqlite3';
import { initDatabase } from '../src/schemas/schemas.js';

const DB_PATH = path.resolve(process.cwd(), 'Pasantiatest.sqlite');

const SQL = `
CREATE TABLE IF NOT EXISTS Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  nombre varchar(500),
  apellido varchar(500),
  correo varchar(500),
  ficha integer,
  telefono integer,
  "C.I" integer,
  rol varchar(500),
  extension integer
);

CREATE TABLE IF NOT EXISTS Machine (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_user bigint,
  "nro de la maquina" integer
);

CREATE TABLE IF NOT EXISTS "ReportUser" (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_user bigint,
  id_report bigint,
  justificacion varchar(500)
);

CREATE TABLE IF NOT EXISTS Report (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_maquina bigint,
  caso varchar(500),
  area varchar(500),
  estado varchar(500),
  descripcion varchar(500),
  "nombre natural" varchar(500),
  "clave natural" integer,
  "clave de acceso windows" integer,
  fecha date
);

CREATE TABLE IF NOT EXISTS "SpecializationUsers" (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_user bigint,
  id_specia bigint
);

CREATE TABLE IF NOT EXISTS Specialization (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  nombre varchar(500)
);

CREATE TABLE IF NOT EXISTS "ReportCase" (
  id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_user bigint,
  id_report bigint,
  "caso tecnico" varchar(500),
  "resolucion " varchar(500),
  tiempo time
);

-- duplicate-safe: subsequent CREATE IF NOT EXISTS statements omitted (already created above)
`;

export async function setupDatabase() {
  return new Promise((resolve, reject) => {
    const sqlite = sqlite3.verbose();
    const db = new sqlite.Database(DB_PATH, (err) => {
      if (err) return reject(err);

      db.serialize(() => {
        db.exec(SQL, async (execErr) => {
          if (execErr) {
            db.close(() => reject(execErr));
            return;
          }

          db.close(async (closeErr) => {
            if (closeErr) return reject(closeErr);
            try {
              await initDatabase();
              resolve();
            } catch (e) {
              reject(e);
            }
          });
        });
      });
    });
  });
}

export default setupDatabase;
