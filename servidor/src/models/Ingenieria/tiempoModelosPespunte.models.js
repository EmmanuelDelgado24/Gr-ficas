import { executeQuery } from "../../config/dbPg/conectionModelos.js";

export async function ModelosPespunte({ departamento, modelo }) {
  const nombreTabla = `modelos_${departamento}`;
  const query = `SELECT tiempo_std_min FROM ${nombreTabla} WHERE modelo = $1`;

  try {
    const result = await executeQuery(query, [modelo]); 

    if (result.rows && result.rows.length > 0) {
      return result.rows[0].tiempo_std_min; 
    }

    return null; 
  } catch (err) {
    throw new Error(`Error al obtener datos para modelo: ${modelo} en ${nombreTabla}: ${err.message}`);
  }
}

export async function ModelosCorte({ departamento, modelo, subdepto }) {
  const nombreTabla = `modelos_${departamento}`;
  
  // Mapeo de subdepartamento a nombre de columna
  const columnas = {
    "Piel": "tiempo_piel",
    "Forro": "tiempo_forro",
    "Loteo": "tiempo_loteo"
  };

  const columnaTiempo = columnas[subdepto];
  if (!columnaTiempo) {
    throw new Error(`Subdepto no válido: ${subdepto}`);
  }

  const query = `SELECT ${columnaTiempo} FROM ${nombreTabla} WHERE modelo = $1`;

  try {
    const result = await executeQuery(query, [modelo]); 
    if (result.rows && result.rows.length > 0) {
      return result.rows[0][columnaTiempo]; 
    }

    return null; 
  } catch (err) {
    throw new Error(`Error al obtener datos para modelo: ${modelo} en ${nombreTabla}: ${err.message}`);
  }
}