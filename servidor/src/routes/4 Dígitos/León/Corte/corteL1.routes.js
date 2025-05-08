import express from 'express';
import { CorteL1Controller } from '../../../../controllers/4 Dígitos/León/Corte/corteL1.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CorteL1-4', CorteL1Controller.getAll);

export default router;