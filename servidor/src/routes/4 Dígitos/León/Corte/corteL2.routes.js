import express from 'express';
import { CorteL2Controller } from '../../../../controllers/4 Dígitos/León/Corte/corteL2.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CorteL2-4', CorteL2Controller.getAll);

export default router;