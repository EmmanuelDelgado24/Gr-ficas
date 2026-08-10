import {Router} from 'express';
import {obtenerPersonalMontados} from '../../controllers/Personal/personalMontado.controller.js';

const router = Router();
router.get('/personalmontado', obtenerPersonalMontados);

export default router;