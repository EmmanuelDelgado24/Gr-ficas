import Firebird from 'node-firebird';
import { options } from './db.js';

// Función para crear conexión
export const createConnection = () => {
  return new Promise((resolve, reject) => {
    Firebird.attach(options, (err, db) => {
      if (err) reject(err);
      else resolve(db); 
      // console.log("CCCCCCCCCCcccccccc");
    });
  });
};

// Función genérica para ejecutar consultas
export const executeQuery = async (query, params = []) => {
  let db;
  try {
    db = await createConnection();

    // Aquí esperamos a que termine la consulta antes de llegar al finally
    const result = await new Promise((resolve, reject) => {
      db.query(query, params, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

    return result;
  } catch (error) {
    throw error;
  } finally {
    if (db) {
      try {
        db.detach(); // Asegura liberar conexión
      } catch (e) {
        console.error("[Firebird] Error al cerrar la conexión:", e.message);
      }
    }
  }
};
