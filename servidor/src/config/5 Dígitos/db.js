    // host: '192.168.17.254',

export const options = {
    // Configura los parámetros de conexión a la base de datos Firebird
    host: process.env.FIREHOST,
    port: process.env.FIREPORT, // Puerto predeterminado de Firebird
    database: process.env.FIREDATABASE,
    user: process.env.FIREUSER,
    password: process.env.FIREPASSWORD,
    options: {
      encrypt: false, // Corrección de la propiedad encrypt
      trustServerCertificate: true
    }
  };

  // plink.exe -v -N -C -ssh -i "C:\Users\Aux-Sistemas\OneDrive - MANUFACTURERA DE CALZADO MIPAZSTOR\Escritorio\React\tunbd.ppk" -R 0.0.0.0:43050:192.168.16.3:3050 tunbd@159.65.78.91
  //truncate -s 0 $(docker inspect --format='{{.LogPath}}' backend_container2)
