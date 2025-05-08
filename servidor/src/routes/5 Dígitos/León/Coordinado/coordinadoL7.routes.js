import express from 'express';
import { CoordinadoL7Controller } from '../../../../controllers/5 Dígitos/León/Coordinado/coordinadoL7.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CoordinadoL7', CoordinadoL7Controller.getAll);

export default router;