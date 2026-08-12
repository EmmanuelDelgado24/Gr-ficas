import pkg from 'pg';

const PGHOST="api.avances-pazstor.online"  
//const PGHOST="localhost"             //Comentar esta linea para conectar al contenedor
//const PGHOST="mi-db"              //Conexión al contenedor de base de datos
const PGPORT=5432
const PGUSER="postgres"
const PGPASSWORD="PAZSTOR" // nube PAZSTOR local postgres
const PGDATABASE="avances-pazstor"

const { Pool } = pkg;


const pool = new Pool({
  host: PGHOST,
  port: PGPORT,
  user: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
});

pool.connect()
 .then(() => console.log('Conexión a PostgreSQL exitosa'))
  .catch((err) => console.error('Error de conexión a PostgreSQL:', err.message));

export default pool;