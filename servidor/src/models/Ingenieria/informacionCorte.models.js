import { executeQuery } from "../../config/dbPg/conectionModelos.js";

export async function getInformacionCorte() {
    const query = `SELECT ciudad, departamento, subdepto, fecha, eficiencia, meta_diaria, minutos_disponibles FROM meta_diaria 
    WHERE ciudad = 'León'
    AND departamento = 'Corte'
    AND subdepto = 'Loteo'
    AND fecha =  CURRENT_DATE
    ORDER BY id_meta ASC`;

    try{
        const resultado = await executeQuery(query);
        if(!resultado || !resultado.rows || resultado.rows.length === 0){
            return {};
        }
        return resultado.rows[0];

    }catch(err){
        console.error("Error en DB:", err);
        throw new Error(`Error al obtener detalles completos del modelo: ${err.message}`);
    }
}