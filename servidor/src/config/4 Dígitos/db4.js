export const options = {
    // Configura los parámetros de conexión a la base de datos Firebird
    host: '192.168.16.3',
    port: 3050, // Puerto predeterminado de Firebird
    database: 'C:/Empresas$/CamZ2025/BigZap.fdb',
    user: 'SYSDBA',
    password: 'masterkey',
    options: {
      encrypt: false, // Corrección de la propiedad encrypt
      trustServerCertificate: true
    }
  };