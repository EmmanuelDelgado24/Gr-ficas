
import express from 'express';
import { EmbarqueController } from "../../controllers/Leon/embarque.controller.js"

const router = express.Router();

router.get('/Embarque', EmbarqueController.getAll);

export default router;

