import { Lotes142 } from "../../../../models/5 Dígitos/León/Pespunte/pespunte142.model.js";

export class Pespunte142Controller {
    // Obtener todos los registros
    static async getAll(_req, res) {
        try {
            const registros = await Lotes142.getAllLotes();
            
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