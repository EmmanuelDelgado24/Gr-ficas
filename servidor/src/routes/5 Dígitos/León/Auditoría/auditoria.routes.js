import express from 'express';
import { auditoriaController } from '../../../../controllers/5 Dígitos/León/Auditoría/auditoria.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/AuditoriaL6', auditoriaController.getAll);

export default router;