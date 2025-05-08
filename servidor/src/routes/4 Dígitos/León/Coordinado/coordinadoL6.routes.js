import express from 'express';
import {CoordinadoL6Controller} from "../../../../controllers/4 Dígitos/León/Coordinado/coordinadoL6.controller.js";

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CoordinadoL6-4', CoordinadoL6Controller.getAll);

export default router;