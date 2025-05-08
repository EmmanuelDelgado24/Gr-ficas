import express from 'express';
import { adornoController } from '../../../../controllers/5 Dígitos/León/Adorno/adorno.controller.js';

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/AdornoL6', adornoController.getAll);

export default router;