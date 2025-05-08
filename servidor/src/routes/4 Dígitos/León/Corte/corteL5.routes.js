import express from 'express';
import { CorteL5Controller } from '../../../../controllers/4 Dígitos/León/Corte/corteL5.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CorteL5-4', CorteL5Controller.getAll);

export default router;