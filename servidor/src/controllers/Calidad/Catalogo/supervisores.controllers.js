import { getObtenerSupervisores } from "../../../models/Calidad/Catalogo/supervisor.models.js";

export async function obtenerSupervisores(req, res) {

    try {
        const { id_depto } = req.params;
        const supervisores = await getObtenerSupervisores(id_depto);
        return res.status(200).json({
            ok: true,
            data: supervisores
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            message: "Error al obtener los supervisores",
            error: error.message
        });
    }
}