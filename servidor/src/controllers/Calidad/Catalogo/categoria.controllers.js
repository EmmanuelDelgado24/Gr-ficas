import {
    getObtenerCategorias,
    postCrearCategoria,
    putEditarCategoria,
    deleteEliminarCategoria,
    getCategoriaPorNombre
} from "../../../models/Calidad/Catalogo/categoria.models.js";

// GET /categorias
export async function obtenerCategorias(req, res) {

    try {

        const categorias = await getObtenerCategorias();
        return res.status(200).json({
            ok: true,
            data: categorias
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            message: "Error al obtener las categorías",
            error: error.message
        });
    }
}


// POST /categorias
export async function crearCategoria(req, res) {

    try {
        const { nombre_categoria } = req.body;
        if (!nombre_categoria) {
            return res.status(400).json({
                ok: false,
                message: "El nombre de la categoría es obligatorio"
            });
        }

        const nuevaCategoria = await postCrearCategoria(
            nombre_categoria
        );

        return res.status(201).json({
            ok: true,
            message: "Categoría creada correctamente",
            data: nuevaCategoria
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            message: "Error al crear la categoría",
            error: error.message
        });
    }
}


// PUT /categorias/:id
export async function editarCategoria(req, res) {

    try {
        const { id_categoria } = req.params;
        const { nombre_categoria } = req.body;

        if (!nombre_categoria) {
            return res.status(400).json({
                ok: false,
                message: "El nombre de la categoría es obligatorio"
            });
        }

        const categoria = await putEditarCategoria(
            id_categoria,
            nombre_categoria
        );

        if (!categoria) {
            return res.status(404).json({
                ok: false,
                message: "Categoría no encontrada"
            });
        }

        return res.status(200).json({
            ok: true,
            message: "Categoría actualizada correctamente",
            data: categoria
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            message: "Error al actualizar la categoría",
            error: error.message
        });
    }
}


// DELETE /categorias/:id
export async function eliminarCategoria(req, res) {

    try {
        const { } = req.params;
        const categoria = await deleteEliminarCategoria(id);
        if (!categoria) {
            return res.status(404).json({
                ok: false,
                message: "Categoría no encontrada"
            });
        }

        return res.status(200).json({
            ok: true,
            message: "Categoría eliminada correctamente",
            data: categoria
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            message: "Error al eliminar la categoría",
            error: error.message
        });
    }
}


// BUSCAR /categorias/:nombre_categoria
export async function buscarCategoria(req, res) {

    try {
        const { nombre_categoria } = req.params;
        const categoria = await searchBuscarCategoria(nombre_categoria);
        if (!categoria) {
            return res.status(404).json({
                ok: false,
                message: "Categoría no encontrada"
            });
        }

        return res.status(200).json({
            ok: true,
            message: "Categoría econtrada correctamente",
            data: categoria
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            message: "Error al buscar la categoría",
            error: error.message
        });
    }
}