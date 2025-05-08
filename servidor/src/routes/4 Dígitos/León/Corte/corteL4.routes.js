import express from 'express';
import { CorteL4Controller } from '../../../../controllers/4 Dígitos/León/Corte/corteL4.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CorteL4-4', CorteL4Controller.getAll);

export default router;