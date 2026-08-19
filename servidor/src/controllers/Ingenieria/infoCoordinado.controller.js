import { getInformacionCoordinado } from "../../models/Ingenieria/informacionCoordinado.models.js";

export class InformacionCoordinado {
    static async getInformacionCoordinado(_req, res, config) {
        try {
            const infocoordinado = await getInformacionCoordinado(config);

            if (!infocoordinado || infocoordinado.length === 0) {
                return res.status(200).json({ message: 'No se encontraron infocoordinado' });
            }

            return res.status(200).json(infocoordinado);

        } catch (error) {
            console.error(`Error en el controlador`, error);
        }
    }
}