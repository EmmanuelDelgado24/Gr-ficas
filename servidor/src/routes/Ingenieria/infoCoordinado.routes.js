import { Router } from "express";
import { InformacionCoordinado } from "../../controllers/Ingenieria/infoCoordinado.controller.js";

const router = Router();
router.get("/informacionCoordinado", InformacionCoordinado.getInformacionCoordinado);

export default router; 