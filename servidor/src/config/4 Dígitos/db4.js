export const options = {
    // Configura los parámetros de conexión a la base de datos Firebird
    host: process.env.FIREHOST4,
    port: process.env.FIREPORT4,
    database: process.env.FIREDATABASE4,
    user: process.env.FIREUSER4,
    password: process.env.FIREPASSWORD4,
    options: {
      encrypt: false, // Corrección de la propiedad encrypt
      trustServerCertificate: true
    }
};