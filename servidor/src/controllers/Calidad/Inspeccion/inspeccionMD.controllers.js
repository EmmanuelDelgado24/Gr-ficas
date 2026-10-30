import { getObtenerMD } from "../../../models/Calidad/Inspeccion/inspeccionManuelDoblado.models.js";

export async function obtenerMD(_, res) {
     try {
            const inspecciones = await getObtenerMD();
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