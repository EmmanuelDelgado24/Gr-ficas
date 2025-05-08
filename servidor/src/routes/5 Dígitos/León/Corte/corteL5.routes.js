import express from 'express';
import { CorteL5Controller } from '../../../../controllers/5 Dígitos/León/Corte/corteL5.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CorteL5', CorteL5Controller.getAll);

export default router;