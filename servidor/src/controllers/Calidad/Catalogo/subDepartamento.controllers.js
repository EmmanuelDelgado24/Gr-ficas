import {getObtenerSubDepto} from "../../../models/Calidad/Catalogo/subDepartamento.models.js";

export async function obtenerSubDepartamentos(req, res) {
    try{
        const { id_depto } = req.params;
        const subDepartamentos = await getObtenerSubDepto(id_depto);
        return res.status(200).json({
            ok: true,
            data: subDepartamentos
        });
    }catch (error) {
        return res.status(500).json({
            ok: false,
            message: error.message
        });
    }
}