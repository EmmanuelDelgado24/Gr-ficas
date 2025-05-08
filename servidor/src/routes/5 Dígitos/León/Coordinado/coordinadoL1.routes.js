import express from 'express';
import { CoordinadoL1Controller } from '../../../../controllers/5 Dígitos/León/Coordinado/coordinadoL1.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CoordinadoL1', CoordinadoL1Controller.getAll);

export default router;