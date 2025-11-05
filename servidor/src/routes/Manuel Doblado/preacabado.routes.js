import express from 'express';
import { PreacabadoController } from "../../controllers/Manuel Doblado/preacabado.controller.js"

const router = express.Router();

router.get('/Preacabado', PreacabadoController.getAll);

export default router;

