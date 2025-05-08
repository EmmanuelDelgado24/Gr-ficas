import express from 'express';
import { CoordinadoL5Controller } from '../../../../controllers/5 Dígitos/León/Coordinado/coordinadoL5.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CoordinadoL5', CoordinadoL5Controller.getAll);

export default router;