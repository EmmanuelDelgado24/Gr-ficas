export const options = {
    // Configura los parámetros de conexión a la base de datos Firebird
    // host: '192.168.16.3',
    // host: '192.168.17.254',
    host: '172.18.0.1', //✔
    port: 43050,  //✔
    // port: 3050, // Puerto predeterminado de Firebird
    database: 'C:/Empresas$/CamZ2026/BigZap.fdb',
    user: 'SYSDBA',
    password: 'masterkey',
    options: {
      encrypt: false, // Corrección de la propiedad encrypt
      trustServerCertificate: true
    }
  };