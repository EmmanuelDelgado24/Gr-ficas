import { executeQuery } from "../../../config/dbPg/conectionModelos.js";

// GET - Obtener todas las categorías
export async function getObtenerCategorias() {
    const query = `
        SELECT 
            id_categoria,
            nombre_categoria
        FROM public.categorias
        ORDER BY nombre_categoria ASC
        `;

    try {
        const result = await executeQuery(query);
        return result.rows;
    } catch (error) {
        throw new Error(`Error al obtener detalles de defectos: ${error.message}`);
    }
}

// POST - Crear categoría
export async function postCrearCategoria(nombre_categoria) {
    const query = `
    INSERT INTO public.categorias(nombre_categoria)
        VALUES ($2)
        RETURNING *
    `;

    const values = [nombre_categoria];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al crear categoría: ${error.message}`);
    }
}


// PUT - Editar categoría
export async function putEditarCategoria(id_categoria, nombre_categoria) {
    const query = `
    UPDATE public.categorias 
    SET nombre_categoria = $2 
    WHERE id_categoria = $1
    RETURNING *
    `;

    const values = [id_categoria, nombre_categoria];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al editar categoría: ${error.message}`);
    }
}

// DELETE - Eliminar categoría
export async function deleteEliminarCategoria(id_categoria) {
     const query = `
        DELETE FROM public.categorias
        WHERE id_categoria = $1
        RETURNING *
    `;

    const values = [id_categoria];

    try {
        const result = await executeQuery(query, values);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al eliminar categoría: ${error.message}`);
    }
}


// Buscar categoria por nombre
export async function getCategoriaPorNombre(nombre_categoria) {

    const query = `
        SELECT
            id_categoria,
            nombre_categoria
        FROM public.categorias
        WHERE nombre_categoria = $2
    `;

    try {
        const result = await executeQuery(query, [nombre_categoria]);
        return result.rows[0];
    } catch (error) {
        throw new Error(`Error al obtener categoría: ${error.message}`);
    }
}