import { obtenerPersonalPespunte242 } from "../../models/Personal/personalPespunte242.models.js";

export async function obtenerPersonalPespun242(req, res) {
    try {
        const datos = await obtenerPersonalPespunte242();
        res.json(datos);
    }catch (error) {
        console.error('Error al obtener personal por departamento:', error);
        res.status(500).json({ error: 'Error al obtener personal pespunte 242' });
    }
}

