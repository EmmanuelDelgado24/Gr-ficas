import { getObtenerDefectoPorCategoria }  from "../../../models/Calidad/Catalogo/defecto.models.js";

export async function obtenerDefectos(req, res) {

    try {
        const { id_categoria } = req.params;
        const categorias = await getObtenerDefectoPorCategoria(id_categoria);
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