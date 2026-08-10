import { Router } from "express";
import { InformacionGeneral } from "../../controllers/Ingenieria/infoGeneral.controller.js";

const router = Router();
router.get("/informacionGeneral", InformacionGeneral.getInformacionGeneral);

export default router; 