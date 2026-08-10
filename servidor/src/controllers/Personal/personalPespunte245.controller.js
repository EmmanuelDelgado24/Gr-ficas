import { obtenerPersonalPespunte245 } from "../../models/Personal/personalPespunte245.models.js";

export async function obtenerPersonalPespun245(req, res) {
    try {
        const datos = await obtenerPersonalPespunte245();
        res.json(datos);
    }catch (error) {
        console.error('Error al obtener personal por departamento:', error);
        res.status(500).json({ error: 'Error al obtener personal pespunte 245' });
    }
}

