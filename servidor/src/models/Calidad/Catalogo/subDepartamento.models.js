import { executeQuery } from "../../../config/dbPg/conectionModelos.js";

export async function getObtenerSubDepto(id_depto) {
    const query = `
        SELECT
            s.id_subdepto,
            s.nombre_subdepto,
            d.id_depto,
            d.nombre_depto
        FROM public.subdepartamentos s
        INNER JOIN public.departamentos d
            ON d.id_depto = s.id_depto
        WHERE s.id_depto = $1
        ORDER BY s.nombre_subdepto;`;

    try {
        const result = await executeQuery(query, [id_depto]);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de subdepartamentos: ${error.message}`);
    }
}