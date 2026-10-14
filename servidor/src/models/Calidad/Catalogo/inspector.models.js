import { executeQuery } from "../../../config/dbPg/conectionModelos.js";

// GET - Obtener todas las categorías
export async function getObtenerInspectores() {
    const query = `SELECT * FROM public.inspectores ORDER BY id_inspector ASC `;
    try {
        const result = await executeQuery(query);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de inspectores: ${error.message}`);
    }
}
