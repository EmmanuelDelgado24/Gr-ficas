import { executeQuery } from "../../../config/dbPg/conectionModelos.js";

export async function getObtenerOperacion() {
    const query = `SELECT * FROM public.operaciones`;

    try {
        const result = await executeQuery(query);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de Operacion: ${error.message}`);
    }
}

// POST - Crear 
export async function postCrearOperacion(id_operacion, nombre_operacion, id_categoria) {
    const query = `
    INSERT INTO public.operaciones(id_operacion, nombre_operacion, id_categoria)
        VALUES ($1, $2, $3)
        RETURNING *
    `;

    const values = [id_operacion, nombre_operacion, id_categoria];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al crear la operacion: ${error.message}`);
    }
}


// PUT - Editar 
export async function putEditarOperacion(id_operacion, nombre_operacion, id_categoria) {
    const query = `
    UPDATE public.operaciones
    SET nombre_operacion = $2, id_categoria = $3
    WHERE id_operacion = $1
    RETURNING *
    `;

    const values = [id_operacion, nombre_operacion, id_categoria];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al editar la operacion: ${error.message}`);
    }
}

// DELETE - Eliminar
export async function deleteEliminarOperacion(id_operacion) {
     const query = `
        DELETE FROM public.operaciones 
        WHERE id_operacion = $1
        RETURNING *
    `;

    const values = [id_operacion];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al eliminar la operacion: ${error.message}`);
    }
}


// Buscar departamento por nombre
export async function getOperacionPorNombre(nombre_operacion) {

    const query = `
        SELECT
            id_operacion,
            nombre_operacion
        FROM public.operaciones
        WHERE nombre_operacion = $2
    `;

    try {
        const result = await executeQuery(query, [nombre_operacion]);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al obtener la operacion: ${error.message}`);
    }
}  