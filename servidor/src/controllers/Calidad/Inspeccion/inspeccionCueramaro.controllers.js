import { getObtenerCueramaro } from "../../../models/Calidad/Inspeccion/inspeccionCueramaro.models.js";

export async function obtenerCueramaro(_, res) {
     try {
            const inspecciones = await getObtenerCueramaro();
            return res.status(200).json({
                ok: true,
                data: inspecciones
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                message: error.message
            });
        }
}