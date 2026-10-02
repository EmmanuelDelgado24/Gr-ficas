import { executeQuery } from "../../../config/dbPg/conectionModelos.js";

export async function getObtenerDefectoPorCategoria(id_categoria) {
    const query = `
            SELECT 
                defectos.id_defecto,
                defectos.nombre_defecto,
                categorias.id_categoria,
                categorias.nombre_categoria
            FROM public.defectos
            INNER JOIN public.categorias 
            ON categorias.id_categoria = defectos.id_categoria
            WHERE categorias.id_categoria = $1
            ORDER BY defectos.nombre_defecto;`;

    try {
        const result = await executeQuery(query, [id_categoria]);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de defectos: ${error.message}`);
    }
}

export async function postCrearDefecto(id_defecto, nombre_defecto, id_categoria, id_severidad) {
    const query = `INSERT INTO public.defectos(id_defecto, nombre_defecto, id_categoria, id_severidad)
    VALUES($1, $2, $3, $4)
    RETURNING *`;

    const value = [id_defecto, nombre_defecto, id_categoria, id_severidad]

    try {
        const resultado = await executeQuery(query, value)
        return resultado.rows[0];
    } catch (error) {
        throw new Error(`Error al crear el defecto: ${error.message}`);
    }
}

export async function putEditarDefecto(id_defecto, nombre_defecto, id_categoria, id_severidad) {
    const query = `
    UPDATE public.defectos
    SET nombre_categoria = $2, id_categoria = $3, id_severidad = $4
    WHERE id_categoria = $1
    RETURNING *
    `;

    const value = [id_defecto, nombre_defecto, id_categoria, id_severidad]

    try {
        const resultado = await executeQuery(query, value)
        return resultado.rows[0];
    } catch (error) {
        throw new Error(`Error al actualizar el defecto: ${error.message}`);
    }
}

export async function deleteEliminarDefecto(id_defecto) {
    const query = `
    DELETE FROM public.defectos 
    WHERE id_defecto = $1
    RETURNING *`;

    const value = [id_defecto]

    try {
        const resultado = await executeQuery(query, value)
        return resultado.rows[0];
    } catch (error) {
        throw new Error(`Error al eliminar el defecto: ${error.message}`);
    }
}

export async function getDefectoPorNombre(nombre_defecto) {

    const query = `
        SELECT
            id_defecto,
            nombre_defecto
        FROM public.defectos
        WHERE nombre_defecto = $2
    `;

    try {
        const resultado = await executeQuery(query, [nombre_defecto]);
        return resultado.rows[0];
    } catch (error) {
        throw new Error(`Error al obtener defecto: ${error.message}`);
    }
}