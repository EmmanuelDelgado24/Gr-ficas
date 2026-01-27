    // host: '192.168.17.254',

export const options = {
    // Configura los parámetros de conexión a la base de datos Firebird
    host: '172.18.0.1', //✔
    // host: '192.168.16.3',
    port: 43050, //✔
    // port: 3050, // Puerto predeterminado de Firebird
    database: 'C:/Empresas$/McmZ2026/BigZap.fdb',
    user: 'SYSDBA',
    password: 'masterkey',
    options: {
      encrypt: false, // Corrección de la propiedad encrypt
      trustServerCertificate: true
    }
  };

  // plink.exe -v -N -C -ssh -i "C:\Users\Aux-Sistemas\OneDrive - MANUFACTURERA DE CALZADO MIPAZSTOR\Escritorio\React\tunbd.ppk" -R 0.0.0.0:43050:192.168.16.3:3050 tunbd@159.65.78.91
  //truncate -s 0 $(docker inspect --format='{{.LogPath}}' backend_container2)
