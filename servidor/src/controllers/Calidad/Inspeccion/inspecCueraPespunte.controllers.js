import { getObtenerPespunteCueramaro, postEliminarInspeccionPespunteCuer } from "../../../models/Calidad/Inspeccion/inspecCueraPespunte.models.js"

export async function obtenerCueramaroPespunte(_, res) {
     try {
            const inspecciones = await getObtenerPespunteCueramaro();
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

export async function eliminarInspeccionPespunteCuer(req, res) {
    try {
        const { id } = req.params; // Viene desde los parámetros de la URL (ej: /inspecciones/10)

        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "El ID de la inspección es obligatorio"
            });
        }

        const inspeccionEliminada = await postEliminarInspeccionPespunteCuer(id);

        if (!inspeccionEliminada) {
            return res.status(404).json({
                ok: false,
                message: "No se encontró la inspección que deseas eliminar"
            });
        }

        return res.status(200).json({
            ok: true,
            message: "Inspección eliminada correctamente",
            data: inspeccionEliminada
        });

    } catch (error) {
        console.error("Error eliminarInspeccion:", error);
        return res.status(500).json({
            ok: false,
            message: "Error al eliminar la inspección",
            error: error.message
        });
    }
}