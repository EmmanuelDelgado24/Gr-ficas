import express from 'express';
import { ReflejarMetaController } from "../../controllers/Ingenieria/reflejarMeta.controller.js" 
const router = express.Router();

router.post('/ReflejarMeta', ReflejarMetaController.createMeta);
router.get('/ReflejarMeta', ReflejarMetaController.obtenerMeta);

export default router;