import express from 'express';
import { CorteL8Controller } from '../../../../controllers/5 Dígitos/León/Corte/corteL8.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CorteL8', CorteL8Controller.getAll);

export default router;