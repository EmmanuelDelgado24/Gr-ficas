import { getInformacionCorte } from "../../models/Ingenieria/informacionCorte.models.js";

export class InformacionCorte {
    static async getInformacionCorte(_req, res, config) {
        try {
            const infocorte = await getInformacion(config);

            if (!infocorte || infocorte.length === 0) {
                return res.status(200).json({ message: 'No se encontraron infocorte' });
            }

            return res.status(200).json(infocorte);

        } catch (error) {
            console.error(`Error en el controlador`, error);
        }
    }

}