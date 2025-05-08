import express from 'express';
import { CorteL8Controller } from '../../../../controllers/4 Dígitos/León/Corte/corteL8.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CorteL8-4', CorteL8Controller.getAll);

export default router;