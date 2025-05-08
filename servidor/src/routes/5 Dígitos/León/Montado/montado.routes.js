import express from 'express';
import { montadoController } from '../../../../controllers/5 Dígitos/León/Montado/montado.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/MontadoL6', montadoController.getAll);

export default router;