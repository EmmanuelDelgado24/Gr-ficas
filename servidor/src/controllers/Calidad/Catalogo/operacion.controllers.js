import {getObtenerOperacion} from "../../../models/Calidad/Catalogo/operacion.models.js";

export async function obtenerOperaciones(req, res) {
    try{
        const operaciones = await getObtenerOperacion();
        return res.status(200).json({
            ok: true,
            data: operaciones
        });
    }catch (error) {
        return res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}