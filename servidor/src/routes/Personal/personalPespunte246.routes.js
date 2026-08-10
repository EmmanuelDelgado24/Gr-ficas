import {Router} from 'express';
import {obtenerPersonalPespun246} from '../../controllers/Personal/personalPespunte246.controller.js';

const router = Router();
router.get('/personalpespunte246', obtenerPersonalPespun246);

export default router;