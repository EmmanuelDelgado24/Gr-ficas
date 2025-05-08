import express from 'express';
import { CorteL7Controller } from '../../../../controllers/5 Dígitos/León/Corte/corteL7.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CorteL7', CorteL7Controller.getAll);

export default router;