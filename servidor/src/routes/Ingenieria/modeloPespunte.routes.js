
import express from 'express';
import { TiempoModelosPespunteController } from '../../controllers/Ingenieria/modelosPespunte.controller.js';
import { ModelosPespunteController } from "../../controllers/Ingenieria/crudModelosPespunte.controller.js" 

const router = express.Router();

router.get('/ModelosPespunte', TiempoModelosPespunteController.getByModelo);
router.get('/ModelosCorte', TiempoModelosPespunteController.getByModeloCorte);
router.get('/ModeloPespunte', ModelosPespunteController.getModelosCompleto);
router.post('/ModelosPespunte', ModelosPespunteController.createModelo);
router.put('/ModelPespunte/:modelo', ModelosPespunteController.updateModelo);
router.delete('/ModelosPespunte/:modelo/:departamento', ModelosPespunteController.deleteModelo);

export default router;

