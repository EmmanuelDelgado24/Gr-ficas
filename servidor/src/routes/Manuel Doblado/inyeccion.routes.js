import express from 'express';
import { InyeccionController } from "../../controllers/Manuel Doblado/inyeccion.controller.js"

const router = express.Router();

router.get('/Inyeccion', InyeccionController.getAll);

export default router;

