import Firebird from 'node-firebird';
import { options } from './db.js';

// Función para crear conexión
export const createConnection = () => {
    return new Promise((resolve, reject) => {
        Firebird.attach(options, (err, db) => {
            if (err) reject(err);
            else resolve(db);
        });
    });
};

// Función genérica para ejecutar consultas
export const executeQuery = async (query, params = []) => {
    let db;
    try {
        db = await createConnection();
        return new Promise((resolve, reject) => {
            db.query(query, params, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    } catch (error) {
        throw error;
    } finally {
        if (db) db.detach();
    }
};