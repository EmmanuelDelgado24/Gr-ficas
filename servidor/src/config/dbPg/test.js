import { executeQuery } from './conectionModelos.js';

async function testConexion() {
  try {
    const result = await executeQuery('SELECT NOW()');
    console.log('✅ Conexión exitosa. Hora del servidor:', result.rows[0]);
  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
  }
}

testConexion();
