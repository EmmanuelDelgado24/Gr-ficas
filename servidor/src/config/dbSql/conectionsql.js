import config from './dbsql.js';
import sql from 'mssql';

// Creamos la promesa del pool para reutilizar la conexión en toda la app
const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conexión a SQL Server establecida con éxito.');
        return pool;
    })
    .catch(err => {
        console.error('Error crítico al conectar a SQL Server:', err);
        process.exit(1);
    });

export { sql, poolPromise };