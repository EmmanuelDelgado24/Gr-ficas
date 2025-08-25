import { executeQuery } from "../../config/dbPg/conectionModelos.js";

export async function obtenerLotes({ depto, ciudad, fechaInicio, fechaFin}) {
    const query = `    
      SELECT * FROM meta_diaria
        WHERE departamento = '${depto}'
            AND ciudad = '${ciudad}'
            AND fecha BETWEEN '${fechaInicio}' AND '${fechaFin}'
    `;

    try {
      return await executeQuery(query);
    } catch (error) {
        throw new Error(`Error al obtener datos para depto: ${depto} ${error.message}`);
    }
}

