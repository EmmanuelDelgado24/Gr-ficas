import {Router} from 'express';
import {obtenerPersonalMontaAdor} from '../../controllers/Personal/personalMontAdor.controller.js';

const router = Router();
router.get('/personalmontadoadorno', obtenerPersonalMontaAdor);

export default router;