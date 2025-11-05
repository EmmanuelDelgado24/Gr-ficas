import { executeQuery } from "../../config/dbPg/conectionModelos.js";

export async function getModeloCompleto({departamento, modelo}) {
  const nombreTabla = `modelos_${departamento}`;
  const query = `SELECT * FROM ${nombreTabla} WHERE modelo = $1`;

  try {
    const result = await executeQuery(query, [modelo]);
    if (result.rows && result.rows.length > 0) {
      return result.rows[0];
    }
    return result;
  } catch (err) {
    throw new Error(`Error al obtener detalles completos del modelo: ${modelo} en ${nombreTabla}: ${err.message}`);
  }
}

export async function updateModelo(modelo, datos) {
  const { linea, estilo, proceso, tiempo, departamento } = datos;
  const nombreTabla = `modelos_${departamento}`;
  const query = `UPDATE ${nombreTabla} 
    SET 
      linea = $1, 
      estilo = $2, 
      proceso = $3, 
      tiempo_std_min = $4 
    WHERE modelo = $5
    RETURNING *`;

  const values = [linea.trim(), estilo.trim(), proceso.trim(), tiempo, modelo];
  try {
    const result = await executeQuery(query, values);
    if (result.rows && result.rows.length > 0) {
      return result.rows[0]; 
    }
    return null; 
  } catch (err) {
    throw new Error(`Error al actualizar el modelo ${modelo}: ${err.message}`);
  }
}

export async function createModelo(datos) {
  const { linea, modelo, estilo, proceso, tiempo_std_min, departamento } = datos;
  const nombreTabla = `modelos_${departamento}`;
  const query = `
    INSERT INTO ${nombreTabla} (linea, modelo, estilo, proceso, tiempo_std_min)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;


  const values = [
    linea.trim(),
    modelo.trim(),
    estilo.trim(),
    proceso.trim(),
    parseFloat(tiempo_std_min)
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

export async function deleteModelo(modelo, departamento) {
    const nombreTabla = `modelos_${departamento}`;
    const query = `DELETE FROM ${nombreTabla} WHERE modelo = $1;`;
    try {
        const result = await executeQuery(query, [modelo]);
        console.log("Resultado de la eliminación:", result); 
        if (result.rowCount > 0) { 
            return { message: `Modelo ${modelo} eliminado exitosamente.`, rowCount: result.rowCount };
        }
        return null; 
    } catch (err) {
        throw new Error(`Error al eliminar modelo ${modelo}: ${err.message}`);
    }
}