import express from 'express';
import { Pespunte241Controller } from '../../../../controllers/5 Dígitos/León/Pespunte/pespunte241.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/Pespunte241', Pespunte241Controller.getAll);

export default router;