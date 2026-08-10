import { getInformacion } from "../../models/Ingenieria/informacionGeneral.models.js";

export class InformacionGeneral {
    static async getInformacionGeneral(_req, res, config) {
        try {
            const infogeneral = await getInformacion(config);

            if (!infogeneral || infogeneral.length === 0) {
                return res.status(200).json({ message: 'No se encontraron infogeneral' });
            }

            return res.status(200).json(infogeneral);

        } catch (error) {
            console.error(`Error en el controlador`, error);
        }
    }

}