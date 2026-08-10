import { obtenerPersonalPespunte243 } from "../../models/Personal/personalPespunte243.models.js";

export async function obtenerPersonalPespun243(req, res) {
    try {
        const datos = await obtenerPersonalPespunte243();
        res.json(datos);
    }catch (error) {
        console.error('Error al obtener personal por departamento:', error);
        res.status(500).json({ error: 'Error al obtener personal pespunte 243' });
    }
}

