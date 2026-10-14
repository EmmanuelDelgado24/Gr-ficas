import { executeQuery } from "../../../config/dbPg/conectionModelos.js";

export async function getObtenerSupervisores(idDepto) {
    const query = `
        SELECT
            d.id_depto,
            d.nombre_depto,
            s.id_supervisor,
            s.nombre_supervisor
        FROM public.supervisores s
        INNER JOIN public.departamentos d
            ON s.id_depto = d.id_depto
        WHERE s.id_depto = $1
        ORDER BY s.nombre_supervisor;
         `;

    try {
        const result = await executeQuery(query, [idDepto]);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de supervisores: ${error.message}`);
    }
}