import { executeQuery } from "../../../config/dbPg/conectionModelos.js";

export async function getObtenerSeveridad() {
    const query = `SELECT * FROM severidades ORDER BY id_severidad ASC;`;

    try {
        const result = await executeQuery(query);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de severidad: ${error.message}`);
    }
}