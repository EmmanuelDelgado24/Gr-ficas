import express from 'express';
import {CoordinadoL4Controller} from "../../../../controllers/4 Dígitos/León/Coordinado/coordinadoL4.controller.js";

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CoordinadoL4-4', CoordinadoL4Controller.getAll);

export default router;