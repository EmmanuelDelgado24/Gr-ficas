import { obtenerPersonalMontadoAdorno } from "../../models/Personal/personalMontadoAdorno.models.js";

export async function obtenerPersonalMontaAdor(req, res) {
    try {
        const datos = await obtenerPersonalMontadoAdorno();
        res.json(datos);
    }catch (error) {
        console.error('Error al obtener personal por departamento:', error);
        res.status(500).json({ error: 'Error al obtener personal montado-adorno' });
    }
}

