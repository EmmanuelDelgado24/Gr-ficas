import { obtenerPersonalPorDept } from "../../models/Personal/personal.models.js";

export async function obtenerPersonalPorDepartamento(req, res) {
    try {
        const datos = await obtenerPersonalPorDept();
        res.json(datos);
    }catch (error) {
        console.error('Error al obtener personal por departamento:', error);
        res.status(500).json({ error: 'Error al obtener personal por departamento' });
    }
}

