import express from 'express';
import {CoordinadoL2Controller} from "../../../../controllers/4 Dígitos/León/Coordinado/coordinadoL2.controller.js";

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CoordinadoL2-4', CoordinadoL2Controller.getAll);

export default router;