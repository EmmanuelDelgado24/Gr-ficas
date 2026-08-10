import {Router} from 'express';
import {obtenerPersonalPespun243} from '../../controllers/Personal/personalPespunte243.controller.js';

const router = Router();
router.get('/personalpespunte243', obtenerPersonalPespun243);

export default router;