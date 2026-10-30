import { getObtenerInspectores } from "../../../models/Calidad/Catalogo/inspector.models.js";

export async function obtenerInspectores(req, res) {

    try {
        const {id_ciudad} = req.params;
        const inspectores = await getObtenerInspectores(id_ciudad);
        return res.status(200).json({
            ok: true,
            data: inspectores
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            message: "Error al obtener los inspectores",
            error: error.message
        });
    }
}