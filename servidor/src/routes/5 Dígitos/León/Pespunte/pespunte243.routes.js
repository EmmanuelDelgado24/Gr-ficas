import express from 'express';
import { Pespunte243Controller } from '../../../../controllers/5 Dígitos/León/Pespunte/pespunte243.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/Pespunte243', Pespunte243Controller.getAll);

export default router;