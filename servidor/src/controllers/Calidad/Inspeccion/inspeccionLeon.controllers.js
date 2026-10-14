import { getObtenerLeon } from "../../../models/Calidad/Inspeccion/inspeccionLeon.models.js"

export async function obtenerLeon(_, res) {
     try {
            const inspecciones = await getObtenerLeon();
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