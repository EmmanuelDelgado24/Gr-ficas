import express from 'express';
import {CoordinadoL8Controller} from "../../../../controllers/4 Dígitos/León/Coordinado/coordinadoL8.controller.js";

const router = express.Router();

// Ruta para obtener todos los registros
router.get('/CoordinadoL8-4', CoordinadoL8Controller.getAll);

export default router;