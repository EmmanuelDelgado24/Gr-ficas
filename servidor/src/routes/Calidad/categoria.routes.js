import express from 'express';

import {
    obtenerCategorias,
    crearCategoria,
    editarCategoria,
    eliminarCategoria, 
    buscarCategoria
} from "../../controllers/Calidad/Catalogo/categoria.controllers.js";


const router = express.Router();

router.get("/obtenerCategorias", obtenerCategorias);

router.post("/crearCategoria", crearCategoria);

router.put("/editarCategoria", editarCategoria);

router.delete("/eliminarCategoria", eliminarCategoria);

router.get("/buscarCategoria", buscarCategoria)

export default router;