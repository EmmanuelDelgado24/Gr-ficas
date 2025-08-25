import { executeQuery } from "../../config/dbPg/conectionModelos.js";

export async function getMeta({datos}) {
  const { departamento, subdepto, ciudad } = datos;
  const query = `SELECT meta_diaria FROM meta_diaria 
    WHERE departamento = $1
     AND subdepto = $2 
     AND ciudad= $3 
     AND fecha = CURRENT_DATE`;

  const values = [    
    departamento.trim(),
    subdepto.trim(),
    ciudad.trim()
  ];

  try {
    const result = await executeQuery(query, values);
    if (result.rows && result.rows.length > 0) {
      return result.rows[0];
    }
    return null;
  } catch (err) {
    throw new Error(`Error al obtener Meta: ${err.message}`);
  }
}

export async function createMeta(datos) {
  const { ciudad, departamento, subdepto, personal, modelos, minutaje, 
    pares, minutos_trabajados, minutos_disponibles, eficiencia, meta_diaria, pares_hora, velocidad_banda } = datos;
  const query = `
    INSERT INTO meta_diaria (ciudad, departamento, subdepto, fecha, personal, modelos, minutaje, pares, minutos_trabajados, minutos_disponibles, eficiencia, meta_diaria, pares_hora, velocidad_banda)
    VALUES ($1, $2, $3, CURRENT_DATE, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING *;
  `;

  const values = [
    ciudad.trim(),   
    departamento.trim(),
    subdepto.trim(),
    parseInt(personal),
    modelos,
    minutaje,
    pares,
    parseInt(minutos_trabajados),
    parseInt(minutos_disponibles),
    parseInt(eficiencia),
    parseInt(meta_diaria),
    parseInt(pares_hora),
    parseInt(velocidad_banda),
  ];

  try {
    const result = await executeQuery(query, values);
    if (result.rows && result.rows.length > 0) {
      return result.rows[0];
    }
    return null;
  } catch (err) {
    console.error(`Error al insertar nuevo registro ${modelo}:`, err.message, err.stack);
    throw new Error(`Error al insertar nuevo registro ${modelo}: ${err.message}`);
  }
}