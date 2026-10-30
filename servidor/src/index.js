import 'dotenv/config';

import cors from "cors";
import fs from 'fs';
import https from 'https';
import app from "./app.js";
import morgan from "morgan";
import express from "express";
import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import Login from "./routes/Login/login.routes.js"

//Import de verificadores
import { iniciarVerificacionCorte } from './verificadores/Leon/verificarCorte.js';
import { iniciarVerificacionMontado } from "./verificadores/Leon/verificarMontado.js";
import { iniciarVerificacionEmbarque } from "./verificadores/Leon/verificarEmbarque.js";
import { iniciarVerificacionPespunte } from './verificadores/Leon/verificarPespunte.js';
import { iniciarVerificacionCoordinado } from "./verificadores/Leon/verificarCoordinado.js";


import { iniciarVerificacionMontadoCUE } from "./verificadores/Cueramaro/verificarMontado.js";
import { iniciarVerificacionAdornoCUE } from "./verificadores/Cueramaro/verificarAdorno.js";
import { iniciarVerificacionAuditoriaCUE } from "./verificadores/Cueramaro/verificarAuditoria.js";
import { iniciarVerificacionCorteCUE } from "./verificadores/Cueramaro/verificarCorte.js"
import { iniciarVerificacionCoordinadoCUE } from "./verificadores/Cueramaro/verificarCoordinado.js"
import { iniciarVerificacionPespunteCUE } from "./verificadores/Cueramaro/verificarPespunte.js"

import { iniciarVerificacionCorteMD } from './verificadores/Manuel Doblado/verificarCorte.js';
import { iniciarVerificacionPespunteMD } from './verificadores/Manuel Doblado/verificarPespunte.js';
import { iniciarVerificacionCoordinadoMD } from "./verificadores/Manuel Doblado/verificarCoordinado.js";
import { iniciarVerificacionMontadoMD } from "./verificadores/Manuel Doblado/verificarMontado.js";
import { iniciarVerificacionAdornoMD } from "./verificadores/Manuel Doblado/verificarAdorno.js";
import { iniciarVerificacionAuditoriaMD } from "./verificadores/Manuel Doblado/verificarAuditoria.js";
import { iniciarVerificacionInyeccion } from "./verificadores/Manuel Doblado/verificarInyeccion.js";
import { iniciarVerificacionPreacabado } from "./verificadores/Manuel Doblado/verificarPreacabado.js";
import { iniciarVerificacionSuela } from "./verificadores/Manuel Doblado/verificarSuela.js";


//Routes para cada departamento general 4D y 5D
import corteRouter from "./routes/Leon/corte.routes.js"
import montadoRouter from "./routes/Leon/montado.routes.js"
import embarqueRouter from "./routes/Leon/embarque.routes.js"
import pespunteRouter from "./routes/Leon/pespunte.routes.js"
import coordinadoRouter from "./routes/Leon/coordinado.routes.js"

import corteRouterMD from './routes/Manuel Doblado/corte.routes.js'
import coordinadoRouterMD from './routes/Manuel Doblado/coordinado.routes.js'
import pespunteRouterMD from './routes/Manuel Doblado/pespunte.routes.js'
import montadoRouterMD from './routes/Manuel Doblado/montado.routes.js'
import adornoRouterMD from './routes/Manuel Doblado/adorno.routes.js'
import auditoriaRouterMD from './routes/Manuel Doblado/auditoria.routes.js'
import inyeccionRouterMD from "./routes/Manuel Doblado/inyeccion.routes.js"
import preacabadoRouterMD from "./routes/Manuel Doblado/preacabado.routes.js"
import suelaRouterMD from "./routes/Manuel Doblado/suela.routes.js"

import corteRouterCUE from "./routes/Cueramaro/corte.routes.js"
import coordinadoRouterCUE from "./routes/Cueramaro/coordinado.routes.js"
import pespunteRouterCUE from "./routes/Cueramaro/pespunte.routes.js"
import montadoRouterCUE from "./routes/Cueramaro/montado.routes.js"
import adornoRouterCUE from "./routes/Cueramaro/adorno.routes.js"
import auditoriaRouterCUE from "./routes/Cueramaro/auditoria.routes.js"


import modeloPespunte from "./routes/Ingenieria/modeloPespunte.routes.js"
import busquedaFecha from "./routes/Ingenieria/busquedaFechas.routes.js"
import reflejarMeta from "./routes/Ingenieria/reflejarMeta.routes.js"
import reporteMeta from "./routes/Ingenieria/reporteMeta.routes.js"

//INVENTARIO
import inventario4 from "./routes/Inventario/inventario4.routes.js"

import personaldepto from "./routes/Personal/personal.routes.js"
import personalcorte from "./routes/Personal/personalCorte.routes.js"
import personalcoordinado from "./routes/Personal/personalCoordinado.routes.js"
import personalpespunte242 from "./routes/Personal/personalPespunte242.routes.js"
import personalpespunte244 from "./routes/Personal/personalPespunte244.routes.js"
import personalpespunte245 from "./routes/Personal/personalPespunte245.routes.js"
import personalpespunte246 from "./routes/Personal/personalPespunte246.routes.js"
import personalmontado from "./routes/Personal/personalMontado.routes.js"
import personaladorno from "./routes/Personal/personalAdorno.routes.js"
import personalmontadoadorno from "./routes/Personal/personalMontaAdorn.routes.js"

import informacionGeneral from "./routes/Ingenieria/infoGeneral.routes.js"
import infoCorte from "./routes/Ingenieria/infoCorte.routes.js";
import infoCoordinado from "./routes/Ingenieria/infoCoordinado.routes.js";

// Calidad
import obtenerCategorias from './routes/Calidad/categoria.routes.js';
import crearCategoria from './routes/Calidad/categoria.routes.js';
import editarCategoria from './routes/Calidad/categoria.routes.js';
import eliminarCategoria from './routes/Calidad/categoria.routes.js';
import buscarCategoria from './routes/Calidad/categoria.routes.js';
import obtenerDefectos from './routes/Calidad/defecto.routes.js';
import crearInspeccion from './routes/Calidad/inspeccion.routes.js';
import obtenerInspeccion from './routes/Calidad/inspeccion.routes.js';
import obtenerDepartamentos from './routes/Calidad/departamento.routes.js';
import obtenerSubDepartamentos from './routes/Calidad/subDepartamento.routes.js';
import obtenerLineas from './routes/Calidad/linea.routes.js';
import obtenerOperaciones from './routes/Calidad/operacion.routes.js';
import obtenerSeveridades from './routes/Calidad/severidad.routes.js';
import obtenerCiudades from './routes/Calidad/ciudad.routes.js';
import obtenerInspectores from './routes/Calidad/inspectores.routes.js';
import obtenerSupervisores from './routes/Calidad/supervisores.routes.js';
import obtenerLeonCorte from './routes/Calidad/inspecLeonCorte.routes.js';
import obtenerLeonCoordinado from './routes/Calidad/inspecLeonCoordinado.routes.js';
import obtenerLeonPespunte from './routes/Calidad/inspecLeonPespunte.routes.js';
import obtenerLeonMonAdor from './routes/Calidad/inspecLeonMonAdor.routes.js';
import obtenerCueramaroCorte from './routes/Calidad/inspecCueraCorte.routes.js';
import obtenerCueramaroCoordinado from './routes/Calidad/inspecCueraCoordinado.routes.js';
import obtenerCueramaroPespunte from './routes/Calidad/inspecCueraPespunte.routes.js';
import obtenerCueramaroMonAdor from './routes/Calidad/inspecCueraMonAdor.routes.js';
import obtenerMDCorte from './routes/Calidad/inspecMDCorte.routes.js';
import obtenerMDCoordinado from './routes/Calidad/inspecMDCoordinado.routes.js';
import obtenerMDPespunte from './routes/Calidad/inspecMDPespunte.routes.js';
import obtenerMDMonAdor from './routes/Calidad/inspecMDMonAdor.routes.js';
import eliminarInspeccion from './routes/Calidad/inspeccion.routes.js';
import eliminarInspeccionCorte from './routes/Calidad/inspecLeonCorte.routes.js';
import eliminarInspeccionCoordinado from './routes/Calidad/inspecLeonCoordinado.routes.js';
import eliminarInspeccionPespunte from './routes/Calidad/inspecLeonPespunte.routes.js';
import eliminarInspeccionMontadoAdorno from './routes/Calidad/inspecLeonMonAdor.routes.js';
import eliminarInspeccionCorteMD from './routes/Calidad/inspecMDCorte.routes.js';
import eliminarInspeccionCoordinadoMD from './routes/Calidad/inspecMDCoordinado.routes.js';
import eliminarInspeccionPespunteMD from './routes/Calidad/inspecMDPespunte.routes.js';
import eliminarInspeccionMontadoAdornoMD from './routes/Calidad/inspecMDMonAdor.routes.js';
import eliminarInspeccionCorteCuer from './routes/Calidad/inspecCueraCorte.routes.js';
import eliminarInspeccionCoordinadoCuer from './routes/Calidad/inspecCueraCoordinado.routes.js';
import eliminarInspeccionPespunteCuer from './routes/Calidad/inspecCueraPespunte.routes.js';
import eliminarInspeccionMontadoAdornoCuer from './routes/Calidad/inspecCueraMonAdor.routes.js';
import obtenerLeonPorID from './routes/Calidad/inspeccion.routes.js';

// Contraseñas HASH 
/*import bcrypt from 'bcrypt';
async function generarHash() {
     const hash = await bcrypt.hash('Calidad.JVP2026!', 10);
    console.log(hash);
 }
 generarHash();*/


// const privateKey = fs.readFileSync('./private_key.pem', 'utf8');
// const certificate = fs.readFileSync('./certificate.pem', 'utf8');

// const httpsServer = https.createServer({ key: privateKey, cert: certificate }, app);

//dotenv.config();
//app.listen(3000);
//console.log('Servidor levantado', 3000);

const allowedOrigins = [
  'https://avances-pazstor.online',
  'https://gr-ficas.onrender.com',
  //'http://192.168.17.24:5173', // Tu IP anterior
  'http://192.168.17.25:5173', // <-- NUEVA: La IP real desde la que estás testeando
  'http://localhost:5173'
];

// cometar para subir a producción
/*app.use(cors({
  origin: allowedOrigins,
  methods: 'GET,POST,PUT,DELETE', //Este parámetro especifica qué métodos HTTP pueden ser utilizados en las solicitudes desde el frontend
  allowedHeaders: ['Content-Type', 'Authorization'],//Este parámetro define qué encabezados HTTP pueden ser enviados en la solicitud. En este caso, solo permite el encabezado Content-Type, que indica el tipo de datos enviados en el cuerpo de la solicitud.
  credentials: true
}));*/

app.use(morgan("dev"));
app.use(express.json());

// ========================================
// HEALTH CHECK
// ========================================
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

// León
app.use("/avances", pespunteRouter);     //Rutas para Pespunte general
app.use("/avances", corteRouter);        //Rutas para Corte general
app.use("/avances", coordinadoRouter);   //Rutas para Coordinado general
app.use("/avances", montadoRouter);      //Montado, auditoria, adorno
app.use("/avances", embarqueRouter);

// MD 
app.use("/avances", pespunteRouterMD);
app.use("/avances", corteRouterMD);
app.use("/avances", coordinadoRouterMD);
app.use("/avances", montadoRouterMD);
app.use("/avances", adornoRouterMD);
app.use("/avances", auditoriaRouterMD)

// CUERÁMARO

app.use("/avances", pespunteRouterCUE);
app.use("/avances", corteRouterCUE);
app.use("/avances", coordinadoRouterCUE);
app.use("/avances", montadoRouterCUE);
app.use("/avances", adornoRouterCUE);
app.use("/avances", auditoriaRouterCUE)



app.use("/avances", inyeccionRouterMD);
app.use("/avances", preacabadoRouterMD);
app.use("/avances", suelaRouterMD);

app.use("/avances", modeloPespunte);
app.use("/avances", busquedaFecha);
app.use("/avances", reflejarMeta);
app.use("/avances", reporteMeta);
app.use("/avances", Login);

app.use("/avances", inventario4);

app.use("/avances", personaldepto);
app.use("/avances", personalcorte);
app.use("/avances", personalcoordinado);
app.use("/avances", personalpespunte242);
app.use("/avances", personalpespunte244);
app.use("/avances", personalpespunte245);
app.use("/avances", personalpespunte246);
app.use("/avances", personalmontado);
app.use("/avances", personaladorno);
app.use("/avances", personalmontadoadorno);

app.use("/avances", informacionGeneral);
app.use("/avances", infoCorte);
app.use("/avances", infoCoordinado);

// Calidad
app.use("/avances", obtenerCategorias);
app.use("/avances", crearCategoria);
app.use("/avances", editarCategoria);
app.use("/avances", eliminarCategoria);
app.use("/avances", buscarCategoria);
app.use("/avances", obtenerDefectos);
app.use("/avances", crearInspeccion);
app.use("avances", obtenerInspeccion);
app.use("/avances", obtenerDepartamentos);
app.use("/avances", obtenerSubDepartamentos);
app.use("/avances", obtenerLineas);
app.use("/avances", obtenerOperaciones);
app.use("/avances", obtenerSeveridades);
app.use("/avances", obtenerCiudades);
app.use("/avances", obtenerInspectores);
app.use("/avances", obtenerSupervisores);

app.use("/avances", obtenerLeonCorte);
app.use("/avances", obtenerLeonCoordinado);
app.use("/avances", obtenerLeonPespunte);
app.use("/avances", obtenerLeonMonAdor);

app.use("/avances", eliminarInspeccion);
app.use("/avances", eliminarInspeccionCorte);
app.use("/avances", eliminarInspeccionCoordinado);
app.use("/avances", eliminarInspeccionPespunte);
app.use("/avances", eliminarInspeccionMontadoAdorno);

app.use("/avances", obtenerCueramaroCorte);
app.use("/avances", obtenerCueramaroCoordinado);
app.use("/avances", obtenerCueramaroPespunte);
app.use("/avances", obtenerCueramaroMonAdor);

app.use("/avances", eliminarInspeccionCorteCuer);
app.use("/avances", eliminarInspeccionCoordinadoCuer);
app.use("/avances", eliminarInspeccionPespunteCuer);
app.use("/avances", eliminarInspeccionMontadoAdornoCuer);

app.use("/avances", obtenerMDCorte);
app.use("/avances", obtenerMDCoordinado);
app.use("/avances", obtenerMDPespunte);
app.use("/avances", obtenerMDMonAdor);

app.use("/avances", eliminarInspeccionCorteMD);
app.use("/avances", eliminarInspeccionCoordinadoMD);
app.use("/avances", eliminarInspeccionPespunteMD);
app.use("/avances", eliminarInspeccionMontadoAdornoMD);

app.use("/avances", obtenerLeonPorID);

// Creamos el servidor HTTP usando la app Express
const server = createServer(app);

// creamos el servidor socket.io
// const io = new SocketIOServer(httpsServer, {

const allowedOriginsSocket = [
  'https://avances-pazstor.online',
  'https://gr-ficas.onrender.com',
  //'http://192.168.17.24:5173', // Tu IP anterior
  'http://192.168.17.25:5173', // <-- NUEVA: La IP real desde la que estás testeando
  'http://localhost:5173'
];

// cometar para subir a producción
/*const io = new SocketIOServer(server, {
  cors: {
    origin: allowedOriginsSocket,
    methods: 'GET,POST,PUT,DELETE', //Este parámetro especifica qué métodos HTTP pueden ser utilizados en las solicitudes desde el frontend
    allowedHeaders: ['Content-Type', 'Authorization'], //Este parámetro define qué encabezados HTTP pueden ser enviados en la solicitud. En este caso, solo permite el encabezado Content-Type, que indica el tipo de datos enviados en el cuerpo de la solicitud.
    credentials: true
  }
})*/

// descomentar para subir a producción
const io = new SocketIOServer(server, {
   cors: false
 });

// Manejador de conexiones
io.on("connection", (socket) => {
  console.log("Cliente conectados:", socket.id);

  socket.on("iniciar-verificacion", (modulo) => {
    console.log("Solicitan verificador de:", modulo);
    switch (modulo) {
      case "coordinado": iniciarVerificacionCoordinado(io, socket); break;
      case "pespunte": iniciarVerificacionPespunte(io, socket); break;
      case "embarque": iniciarVerificacionEmbarque(io, socket); break;
      case "montado": iniciarVerificacionMontado(io, socket); break;
      case "corte": iniciarVerificacionCorte(io, socket); break;
      case "general": iniciarVerificacionCoordinado(io, socket); iniciarVerificacionPespunte(io); iniciarVerificacionMontado(io); iniciarVerificacionCorte(io); iniciarVerificacionEmbarque(io); break;

      case "inyeccion": iniciarVerificacionInyeccion(io, socket); break;
      case "suela": iniciarVerificacionSuela(io, socket); break;
      case "preacabado": iniciarVerificacionPreacabado(io, socket); break;
      case "corteMD": iniciarVerificacionCorteMD(io, socket); break;
      case "coordinadoMD": iniciarVerificacionCoordinadoMD(io, socket); break;
      case "pespunteMD": iniciarVerificacionPespunteMD(io, socket); break;
      case "montadoMD": iniciarVerificacionMontadoMD(io, socket); break;
      case "adornoMD": iniciarVerificacionAdornoMD(io, socket); break;
      case "auditoriaMD": iniciarVerificacionAuditoriaMD(io, socket); break;
      case "generalMD": iniciarVerificacionAuditoriaMD(io, socket); iniciarVerificacionAdornoMD(io); iniciarVerificacionPreacabado(io); iniciarVerificacionSuela(io); iniciarVerificacionInyeccion(io); iniciarVerificacionCoordinado(io); iniciarVerificacionPespunte(io); iniciarVerificacionMontadoMD(io); iniciarVerificacionCorte(io); iniciarVerificacionEmbarque(io); break;

      case "corteCUE": iniciarVerificacionCorteCUE(io, socket); break;
      case "coordinadoCUE": iniciarVerificacionCoordinadoCUE(io, socket); break;
      case "pespunteCUE": iniciarVerificacionPespunteCUE(io, socket); break;
      case "montadoCUE": iniciarVerificacionMontadoCUE(io, socket); break;
      case "adornoCUE": iniciarVerificacionAdornoCUE(io, socket); break;
      case "auditoriaCUE": iniciarVerificacionAuditoriaCUE(io, socket); break;
      case "generalCUE": iniciarVerificacionAuditoriaCUE(io, socket); iniciarVerificacionAdornoCUE(io); iniciarVerificacionCoordinado(io); iniciarVerificacionPespunte(io); iniciarVerificacionMontadoCUE(io); iniciarVerificacionCorte(io); iniciarVerificacionEmbarque(io); break;

    }
  });

  // Desconexión
  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

const PORT = 3000;
const HOST = '0.0.0.0'; // Escucha en todas las interfaces de red

server.listen(PORT, HOST, () => {
  // httpsServer.listen(PORT, HOST, () => {
  console.log(`Servidor levantado en http://${HOST}:${PORT}`);
});