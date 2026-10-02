import { executeQuery } from "../../config/dbPg/conectionModelos.js";

export async function getObtenerDepartamento() {
    const query = `SELECT * FROM public.departamentos`;

    try {
        const result = await executeQuery(query);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de departamento: ${error.message}`);
    }
}

// POST - Crear 
export async function postCrearDepartamento(nombre_depto) {
    const query = `
    INSERT INTO public.departamentos(nombre_depto)
        VALUES ($2)
        RETURNING *
    `;

    const values = [nombre_depto];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al crear el departamento: ${error.message}`);
    }
}


// PUT - Editar 
export async function putEditarDepartamento(id_depto, nombre_depto) {
    const query = `
    UPDATE public.departamentos 
    SET nombre_depto = $2 
    WHERE id_depto = $1
    RETURNING *
    `;

    const values = [id_depto, nombre_depto];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al editar el departamento: ${error.message}`);
    }
}

// DELETE - Eliminar
export async function deleteEliminarDepartamento(id_depto) {
     const query = `
        DELETE FROM public.departamentos 
        WHERE id_depto = $1
        RETURNING *
    `;

    const values = [id_depto];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al eliminar departamento: ${error.message}`);
    }
}


// Buscar departamento por nombre
export async function getDepartamentoPorNombre(nombre_depto) {

    const query = `
        SELECT
            id_depto,
            nombre_depto
        FROM public.departamentos
        WHERE nombre_depto = $2
    `;

    try {
        const result = await executeQuery(query, [nombre_depto]);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al obtener departamento: ${error.message}`);
    }
}  