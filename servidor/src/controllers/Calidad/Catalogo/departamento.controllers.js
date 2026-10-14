import {getObtenerDepartamento}  from "../../../models/Calidad/Catalogo/departamento.models.js";

export async function obtenerDepartamentos(req, res) {
    try{
        const {id_ciudad} = req.params;
        const departamentos = await getObtenerDepartamento(id_ciudad);
        return res.status(200).json({
            ok: true,
            data: departamentos
        });
    }catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error al obtener departamentos",
            error: error.message
        });
    }
}