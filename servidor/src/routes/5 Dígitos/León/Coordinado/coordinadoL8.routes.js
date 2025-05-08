import express from 'express';
import { CoordinadoL8Controller } from '../../../../controllers/5 Dígitos/León/Coordinado/coordinadoL8.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CoordinadoL8', CoordinadoL8Controller.getAll);

export default router;