import { executeQuery } from "../../../config/dbPg/conectionModelos.js";

// GET - Obtener todas las categorías
export async function getObtenerInspectores(id_ciudad) {
    const query = `SELECT * FROM public.inspectores 
                   WHERE id_ciudad =  $1;`;
    try {
        const result = await executeQuery(query, [id_ciudad]);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de inspectores: ${error.message}`);
    }
}
