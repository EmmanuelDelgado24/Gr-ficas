import express from 'express';
import { Pespunte242Controller } from '../../../../controllers/4 Dígitos/León/Pespunte/pespunte242.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/Pespunte242-4', Pespunte242Controller.getAll);

export default router;