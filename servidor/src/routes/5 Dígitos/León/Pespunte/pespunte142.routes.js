import express from 'express';
import { Pespunte142Controller } from '../../../../controllers/5 Dígitos/León/Pespunte/pespunte142.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/Pespunte142', Pespunte142Controller.getAll);

export default router;