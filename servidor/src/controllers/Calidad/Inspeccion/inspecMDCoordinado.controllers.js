import { getObtenerCoordinadoMD, postEliminarInspeccionCoordinadoMD } from "../../../models/Calidad/Inspeccion/inspecMDCoordinado.models.js"

export async function obtenerMDCoordinado(_, res) {
     try {
            const inspecciones = await getObtenerCoordinadoMD();
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

export async function eliminarInspeccionCoordinadoMD(req, res) {
    try {
        const { id } = req.params; // Viene desde los parámetros de la URL (ej: /inspecciones/10)

        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "El ID de la inspección es obligatorio"
            });
        }

        const inspeccionEliminada = await postEliminarInspeccionCoordinadoMD(id);

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