import {getObtenerSeveridad} from "../../../models/Calidad/Catalogo/severidad.models.js";

export async function obtenerSeveridades(req, res) {
    try{
        const severidad = await getObtenerSeveridad();
        return res.status(200).json({
            ok: true,
            data: severidad
        });
    }catch (error) {
        return res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}