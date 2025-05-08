import express from 'express';
import { CorteL6Controller } from '../../../../controllers/4 Dígitos/León/Corte/corteL6.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CorteL6-4', CorteL6Controller.getAll);

export default router;