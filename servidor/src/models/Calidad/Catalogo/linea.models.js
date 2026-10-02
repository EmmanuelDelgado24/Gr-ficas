import { executeQuery } from "../../config/dbPg/conectionModelos.js";

export async function getObtenerLinea() {
    const query = `SELECT * FROM public.lineas`;

    try {
        const result = await executeQuery(query);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de Linea: ${error.message}`);
    }
}

// POST - Crear 
export async function postCrearLinea(id_linea, nombre_linea, id_subdepto) {
    const query = `
    INSERT INTO public.lineas(id_linea, nombre_linea, id_subdepto)
        VALUES ($1, $2, $3)
        RETURNING *
    `;

    const values = [id_linea, nombre_linea, id_subdepto];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al crear la linea: ${error.message}`);
    }
}


// PUT - Editar 
export async function putEditarLinea(id_linea, nombre_linea, id_subdepto) {
    const query = `
    UPDATE public.lineas
    SET nombre_linea = $2, id_subdepto = $3
    WHERE id_linea = $1
    RETURNING *
    `;

    const values = [id_linea, nombre_linea, id_subdepto];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al editar la linea: ${error.message}`);
    }
}

// DELETE - Eliminar
export async function deleteEliminarLinea(id_linea) {
     const query = `
        DELETE FROM public.lineas 
        WHERE id_linea = $1
        RETURNING *
    `;

    const values = [id_linea];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al eliminar la linea: ${error.message}`);
    }
}


// Buscar departamento por nombre
export async function getLineaPorNombre(nombre_linea) {

    const query = `
        SELECT
            id_linea,
            nombre_linea
        FROM public.lineas
        WHERE nombre_linea = $2
    `;

    try {
        const result = await executeQuery(query, [nombre_linea]);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al obtener la linea: ${error.message}`);
    }
}  