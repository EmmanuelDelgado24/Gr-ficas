import express from 'express';
import { Pespunte244Controller } from '../../../../controllers/5 Dígitos/León/Pespunte/pespunte244.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/Pespunte244', Pespunte244Controller.getAll);

export default router;