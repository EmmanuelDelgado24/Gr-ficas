import { executeQuery } from "../../config/dbPg/conectionModelos.js";

export async function buscarUsuario({ email }) {
  try {
    const busqueda = await executeQuery('SELECT * FROM usuarios WHERE email = $1', [email]);

    // Verificar si se encontró un usuario
    if (busqueda.rows.length === 0) {
      return null; // O puedes retornar un mensaje o error personalizado
    }

    return busqueda.rows[0];
  } catch (error) {
    console.error('Error en la consulta:', error);
    throw new Error('Hubo un problema al buscar el usuario'); // Lanza un error si algo sale mal
  }
}


