import express from 'express';
import {CoordinadoL5Controller} from "../../../../controllers/4 Dígitos/León/Coordinado/coordinadoL5.controller.js";

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CoordinadoL5-4', CoordinadoL5Controller.getAll);

export default router;