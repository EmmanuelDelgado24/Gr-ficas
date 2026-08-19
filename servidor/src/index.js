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


import { iniciarVerificacionMontadoCU } from "./verificadores/Cueramaro/verificarMontado.js";
import { iniciarVerificacionAdornoCU } from "./verificadores/Cueramaro/verificarAdorno.js";
import { iniciarVerificacionAuditoriaCU } from "./verificadores/Cueramaro/verificarAuditoria.js";


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

import inyeccionRouter from "./routes/Manuel Doblado/inyeccion.routes.js"
import preacabadoRouter from "./routes/Manuel Doblado/preacabado.routes.js"
import suelaRouter from "./routes/Manuel Doblado/suela.routes.js"

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

// Contraseñas HASH 
// import bcrypt from 'bcrypt';
// async function generarHash() {
//     const hash = await bcrypt.hash('ASESORAINTERNA', 10);
//     console.log(hash);
// }
// generarHash();

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

app.use("/avances", pespunteRouter);     //Rutas para Pespunte general
app.use("/avances", corteRouter);        //Rutas para Corte general
app.use("/avances", coordinadoRouter);   //Rutas para Coordinado general
app.use("/avances", montadoRouter);      //Montado, auditoria, adorno
app.use("/avances", embarqueRouter);

app.use("/avances", inyeccionRouter);
app.use("/avances", preacabadoRouter);
app.use("/avances", suelaRouter);

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
      case "coordinado": iniciarVerificacionCoordinado(io); break;
      case "pespunte": iniciarVerificacionPespunte(io); break;
      case "embarque": iniciarVerificacionEmbarque(io); break;
      case "montado": iniciarVerificacionMontado(io); break;
      case "corte": iniciarVerificacionCorte(io); break;
      case "general": iniciarVerificacionCoordinado(io); iniciarVerificacionPespunte(io); iniciarVerificacionMontado(io); iniciarVerificacionCorte(io); iniciarVerificacionEmbarque(io); break;

      case "inyeccion": iniciarVerificacionInyeccion(io); break;
      case "suela": iniciarVerificacionSuela(io); break;
      case "preacabado": iniciarVerificacionPreacabado(io); break;
      case "montadoMD": iniciarVerificacionMontadoMD(io); break;
      case "adornoMD": iniciarVerificacionAdornoMD(io); break;
      case "auditoriaMD": iniciarVerificacionAuditoriaMD(io); break;
      case "generalMD": iniciarVerificacionAuditoriaMD(io); iniciarVerificacionAdornoMD(io); iniciarVerificacionPreacabado(io); iniciarVerificacionSuela(io); iniciarVerificacionInyeccion(io); iniciarVerificacionCoordinado(io); iniciarVerificacionPespunte(io); iniciarVerificacionMontadoMD(io); iniciarVerificacionCorte(io); iniciarVerificacionEmbarque(io); break;

      case "generalCU": iniciarVerificacionAuditoriaCU(io); iniciarVerificacionAdornoCU(io); iniciarVerificacionCoordinado(io); iniciarVerificacionPespunte(io); iniciarVerificacionMontadoCU(io); iniciarVerificacionCorte(io); iniciarVerificacionEmbarque(io); break;
      case "montadoCU": iniciarVerificacionMontadoCU(io); break;
      case "adornoCU": iniciarVerificacionAdornoCU(io); break;
      case "auditoriaCU": iniciarVerificacionAuditoriaCU(io); break;
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