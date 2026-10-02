import { executeQuery } from "../../../config/dbPg/conectionModelos.js";

// GET - Obtener todas las inspecciones
export async function getObtenerInspecciones() {
    const query = `
        SELECT * FROM public.inspecciones
        ORDER BY id_inspeccion ASC
        `;

    try {
        const result = await executeQuery(query);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de inspecciones: ${error.message}`);
    }
}

// POST - Crear categoría
export async function postCrearInspeccion(id_ciudad, id_depto, id_subdepto, id_linea,
    fecha, inspector, modelo, semana, lote, pares_inspeccionados, id_categoria, id_defecto,
    id_severidad, pares_con_defecto, id_operacion, operador, descripcion) {

    const query = `
    INSERT INTO public.inspecciones(id_ciudad, id_depto, id_subdepto, id_linea,
    fecha, inspector, modelo, semana, lote, pares_inspeccionados, id_categoria, 
    id_defecto, id_severidad, pares_con_defecto, id_operacion, operador, descripcion)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
        RETURNING *
    `;

    const values = [id_ciudad, id_depto, id_subdepto, id_linea, fecha, inspector, modelo, 
        semana, lote, pares_inspeccionados, id_categoria, id_defecto, id_severidad, 
        pares_con_defecto, id_operacion, operador, descripcion];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al crear inspección: ${error.message}`);
    }
}
