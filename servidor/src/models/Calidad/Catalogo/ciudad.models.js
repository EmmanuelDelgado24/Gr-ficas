import { executeQuery } from "../../config/dbPg/conectionModelos.js";

export async function getObtenerCiudad() {
    const query = `SELECT * FROM public.ciudades`;

    try {
        const result = await executeQuery(query);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de ciudades: ${error.message}`);
    }
}

// POST - Crear 
export async function postCrearCiudad(id_ciudad, nombre_ciudad, id_depto, id_subdepto) {
    const query = `
    INSERT INTO public.ciudades(id_ciudad, nombre_ciudad, id_depto, id_subdepto)
        VALUES ($1, $2, $3, $4)
        RETURNING *
    `;

    const values = [id_ciudad, nombre_ciudad, id_depto, id_subdepto];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al crear la ciudad: ${error.message}`);
    }
}


// PUT - Editar 
export async function putEditarCiudad(id_ciudad, nombre_ciudad, id_depto, id_subdepto) {
    const query = `
    UPDATE public.ciudades 
    SET nombre_ciudad = $2, id_depto = $3, id_subdepto = $4
    WHERE id_ciudad = $1
    RETURNING *
    `;

    const values = [id_ciudad, nombre_ciudad, id_depto, id_subdepto];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al editar la ciudad: ${error.message}`);
    }
}

// DELETE - Eliminar
export async function deleteEliminarCiudad(id_ciudad) {
     const query = `
        DELETE FROM public.ciudades
        WHERE id_ciudad = $1
        RETURNING *
    `;

    const values = [id_ciudad];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al eliminar la ciudad: ${error.message}`);
    }
}


// Buscar departamento por nombre
export async function getCiudadPorNombre(nombre_ciudad) {

    const query = `
        SELECT
            id_ciudad,
            nombre_ciudad
        FROM public.ciudades
        WHERE nombre_ciudad = $2
    `;

    try {
        const result = await executeQuery(query, [nombre_ciudad]);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al obtener la ciudad: ${error.message}`);
    }
}  