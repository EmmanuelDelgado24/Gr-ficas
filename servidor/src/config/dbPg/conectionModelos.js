import pool from "./dbModelos.js"; 

export const executeQuery = async (query, params = []) => {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query(query, params);
    return result;
  } catch (error) {
    console.error("[PostgreSQL] Error al ejecutar consulta:", error.message); 
    throw error;
  } finally { if (client) { client.release(); } }
};

