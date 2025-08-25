import { lotesInyeccion } from "../../models/Manuel Doblado/inyeccion.models.js"

export class InyeccionController {
    static async getAll(_req, res) {
        try {
            const { lotes4Digitos, lotes5Digitos } = await lotesInyeccion.getAllLotes();

            console.log("Resultados de 4 dígitos:", lotes4Digitos);
            console.log("Resultados de 5 dígitos:", lotes5Digitos);
            if (lotes4Digitos.length === 0 || lotes5Digitos.length === 0) {
                return res.status(404).json({
                    message: 'No se encontraron registros'
                });
            }
            
            return res.status(200).json({
            lotes4Digitos,
            lotes5Digitos
        });
        } catch (error) {
            console.error('Error en el controlador:', error);
            return res.status(500).json({
                message: 'Error al obtener registros',
                error: error.message
            });
        }
    }
} 