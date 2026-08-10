import {Router} from 'express';
import {obtenerPersonalPespun244} from '../../controllers/Personal/personalPespunte244.controller.js';

const router = Router();
router.get('/personalpespunte244', obtenerPersonalPespun244);

export default router;