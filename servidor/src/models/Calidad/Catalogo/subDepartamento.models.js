import { executeQuery } from "../../config/dbPg/conectionModelos.js";

export async function getObtenerSubDepto() {
    const query = `SELECT * FROM subdepartamentos`;

    try {
        const result = await executeQuery(query);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de subdepartamentos: ${error.message}`);
    }
}