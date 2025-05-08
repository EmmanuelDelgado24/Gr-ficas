import express from 'express';
import { Pespunte245Controller } from '../../../../controllers/4 Dígitos/León/Pespunte/pespunte245.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/Pespunte245-4', Pespunte245Controller.getAll);

export default router;