import { LotesMontado } from "../../../../models/5 Dígitos/León/Montado/montado.model.js";

export class montadoController {
    // Obtener todos los registros
    static async getAll(_req, res) {
        try {
            const registros = await LotesMontado.getAllLotes();
            
            if (registros.length === 0) {
                return res.status(404).json({
                    message: 'No se encontraron registros'
                });
            }
            
            return res.status(200).json(registros);
        } catch (error) {
            console.error('Error en el controlador:', error);
            return res.status(500).json({
                message: 'Error al obtener registros',
                error: error.message
            });
        }
    }
}