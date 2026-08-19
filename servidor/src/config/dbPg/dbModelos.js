import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT) || 5432,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

pool.connect()
 .then(() => console.log('Conexión a PostgreSQL exitosa'))
  .catch((err) => console.error('Error de conexión a PostgreSQL:', err.message));

export default pool;