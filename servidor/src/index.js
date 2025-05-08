import app from "./app.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import {createServer} from "http";
import { WebSocketServer } from "ws";
import { Server } from "socket.io";

//4 Dígitos
import corteL1bz4Router from "./routes/4 Dígitos/León/Corte/corteL1.routes.js";
import corteL2bz4Router from "./routes/4 Dígitos/León/Corte/corteL2.routes.js";
import corteL4bz4Router from "./routes/4 Dígitos/León/Corte/corteL4.routes.js";
import corteL5bz4Router from "./routes/4 Dígitos/León/Corte/corteL5.routes.js";
import corteL6bz4Router from "./routes/4 Dígitos/León/Corte/corteL6.routes.js";
import corteL7bz4Router from "./routes/4 Dígitos/León/Corte/corteL7.routes.js";
import corteL8bz4Router from "./routes/4 Dígitos/León/Corte/corteL8.routes.js";
import coordinadoL1bz4Router from "./routes/4 Dígitos/León/Coordinado/coordinadoL1.routes.js";
import coordinadoL2bz4Router from "./routes/4 Dígitos/León/Coordinado/coordinadoL2.routes.js";
import coordinadoL4bz4Router from "./routes/4 Dígitos/León/Coordinado/coordinadoL4.routes.js";
import coordinadoL5bz4Router from "./routes/4 Dígitos/León/Coordinado/coordinadoL5.routes.js";
import coordinadoL6bz4Router from "./routes/4 Dígitos/León/Coordinado/coordinadoL6.routes.js";
import coordinadoL7bz4Router from "./routes/4 Dígitos/León/Coordinado/coordinadoL7.routes.js";
import coordinadoL8bz4Router from "./routes/4 Dígitos/León/Coordinado/coordinadoL8.routes.js";
import pespunte142bz4Router from "./routes/4 Dígitos/León/Pespunte/pespunte142.routes.js";
import pespunte241bz4Router from "./routes/4 Dígitos/León/Pespunte/pespunte241.routes.js";
import pespunte242bz4Router from "./routes/4 Dígitos/León/Pespunte/pespunte242.routes.js";
import pespunte243bz4Router from "./routes/4 Dígitos/León/Pespunte/pespunte243.routes.js";
import pespunte244bz4Router from "./routes/4 Dígitos/León/Pespunte/pespunte244.routes.js";
import pespunte245bz4Router from "./routes/4 Dígitos/León/Pespunte/pespunte245.routes.js";

//5 Dígitos
import corteL1Router from "./routes/5 Dígitos/León/Corte/corteL1.routes.js";
import corteL2Router from "./routes/5 Dígitos/León/Corte/corteL2.routes.js";
import corteL4Router from "./routes/5 Dígitos/León/Corte/corteL4.routes.js";
import corteL5Router from "./routes/5 Dígitos/León/Corte/corteL5.routes.js";
import corteL6Router from "./routes/5 Dígitos/León/Corte/corteL6.routes.js";
import corteL7Router from "./routes/5 Dígitos/León/Corte/corteL7.routes.js";
import corteL8Router from "./routes/5 Dígitos/León/Corte/corteL8.routes.js";
import coordinadoL1Router from "./routes/5 Dígitos/León/Coordinado/coordinadoL1.routes.js";
import coordinadoL2Router from "./routes/5 Dígitos/León/Coordinado/coordinadoL2.routes.js";
import coordinadoL4Router from "./routes/5 Dígitos/León/Coordinado/coordinadoL4.routes.js";
import coordinadoL5Router from "./routes/5 Dígitos/León/Coordinado/coordinadoL5.routes.js";
import coordinadoL6Router from "./routes/5 Dígitos/León/Coordinado/coordinadoL6.routes.js";
import coordinadoL7Router from "./routes/5 Dígitos/León/Coordinado/coordinadoL7.routes.js";
import coordinadoL8Router from "./routes/5 Dígitos/León/Coordinado/coordinadoL8.routes.js";
import pespunte142Router from "./routes/5 Dígitos/León/Pespunte/pespunte142.routes.js";
import pespunte241Router from "./routes/5 Dígitos/León/Pespunte/pespunte241.routes.js";
import pespunte242Router from "./routes/5 Dígitos/León/Pespunte/pespunte242.routes.js";
import pespunte243Router from "./routes/5 Dígitos/León/Pespunte/pespunte243.routes.js";
import pespunte244Router from "./routes/5 Dígitos/León/Pespunte/pespunte244.routes.js";
import pespunte245Router from "./routes/5 Dígitos/León/Pespunte/pespunte245.routes.js";
import montadoRouter from "./routes/5 Dígitos/León/Montado/montado.routes.js";
import adornoRouter from "./routes/5 Dígitos/León/Adorno/adorno.routes.js";
import auditoriaRouter from "./routes/5 Dígitos/León/Auditoría/auditoria.routes.js";


//app.listen(3000);
//console.log('Servidor levantado', 3000);
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Permite solo este origen
    methods: 'GET,POST,PUT,DELETE', //Este parámetro especifica qué métodos HTTP pueden ser utilizados en las solicitudes desde el frontend
    allowedHeaders: 'Content-Type'//Este parámetro define qué encabezados HTTP pueden ser enviados en la solicitud. En este caso, solo permite el encabezado Content-Type, que indica el tipo de datos enviados en el cuerpo de la solicitud.
}));
//4 Dígitos
app.use("/avances",corteL1bz4Router);
app.use("/avances",corteL2bz4Router);
app.use("/avances",corteL4bz4Router);
app.use("/avances",corteL5bz4Router);
app.use("/avances",corteL6bz4Router);
app.use("/avances",corteL7bz4Router);
app.use("/avances",corteL8bz4Router);
app.use("/avances",coordinadoL1bz4Router);
app.use("/avances",coordinadoL2bz4Router);
app.use("/avances",coordinadoL4bz4Router);
app.use("/avances",coordinadoL5bz4Router);
app.use("/avances",coordinadoL6bz4Router);
app.use("/avances",coordinadoL7bz4Router);
app.use("/avances",coordinadoL8bz4Router);
app.use("/avances",pespunte142bz4Router);
app.use("/avances",pespunte241bz4Router);
app.use("/avances",pespunte242bz4Router);
app.use("/avances",pespunte243bz4Router);
app.use("/avances",pespunte244bz4Router);
app.use("/avances",pespunte245bz4Router);

//5 Dígitos
app.use("/avances",corteL1Router);
app.use("/avances",corteL2Router);
app.use("/avances",corteL4Router);
app.use("/avances",corteL5Router);
app.use("/avances",corteL6Router);
app.use("/avances",corteL7Router);
app.use("/avances",corteL8Router);
app.use("/avances",coordinadoL1Router);
app.use("/avances",coordinadoL2Router);
app.use("/avances",coordinadoL4Router);
app.use("/avances",coordinadoL5Router);
app.use("/avances",coordinadoL6Router);
app.use("/avances",coordinadoL7Router);
app.use("/avances",coordinadoL8Router);
app.use("/avances",pespunte142Router);
app.use("/avances",pespunte241Router);
app.use("/avances",pespunte242Router);
app.use("/avances",pespunte243Router);
app.use("/avances",pespunte244Router);
app.use("/avances",pespunte245Router);
app.use("/avances",montadoRouter);
app.use("/avances",adornoRouter);
app.use("/avances",auditoriaRouter);

// Creamos el servidor HTTP usando la app Express
const server = createServer(app);

// Creamos el servidor WebSocket
const wss = new WebSocketServer({ server });

const clients = new Map();


// Manejo de conexiones WebSocket
wss.on('connection', (ws) => {
    console.log('Cliente conectado');
    
    // Enviar mensaje de bienvenida
    ws.send(JSON.stringify({
        type: 'connection',
        message: 'Conectado al servidor'
    }));
    
    // Ejemplo: enviar actualizaciones periódicas
    const interval = setInterval(() => {
        // Solo enviamos si la conexión sigue abierta
        if (ws.readyState === ws.OPEN) {
            ws.send(JSON.stringify({
                type: 'update',
                timestamp: new Date(),
                areas: {
                    coordinado: Math.floor(Math.random() * 100),
                    pespunte142: Math.floor(Math.random() * 100),
                    pespunte241: Math.floor(Math.random() * 100),
                    pespunte242: Math.floor(Math.random() * 100),
                    pespunte243: Math.floor(Math.random() * 100),
                    pespunte244: Math.floor(Math.random() * 100),
                    pespunte245: Math.floor(Math.random() * 100),
                    montado: Math.floor(Math.random() * 100),
                    adorno: Math.floor(Math.random() * 100),
                    auditoria: Math.floor(Math.random() * 100)
                }
            }));
        }
    }, 5000); // cada 5 segundos
    
    // Manejar mensajes recibidos del cliente
    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            console.log('Mensaje recibido del cliente:', data);
            
            // Aquí puedes procesar los mensajes según su tipo
            if (data.type === 'requestData') {
                // Ejemplo: enviar datos específicos solicitados
                ws.send(JSON.stringify({
                    type: 'responseData',
                    data: { /* datos solicitados */ }
                }));
            }
        } catch (error) {
            console.error('Error al procesar mensaje:', error);
        }
    });
    
    // Manejar desconexión
    ws.on('close', () => {
        console.log('Cliente desconectado de WebSocket');
        clearInterval(interval);
    });
    
    // Manejar errores
    ws.on('error', (error) => {
        console.error('Error en la conexión WebSocket:', error);
        clearInterval(interval);
    });
});

// Iniciamos el servidor en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor levantado en ${PORT}`);
});


// Iniciamos el servidor en el puerto 3000
//const PORT = 3000;
//const IP_ADDRESS = '192.168.17.24';
//server.listen(PORT, IP_ADDRESS, () => {
//    console.log(`Servidor levantado en http://${IP_ADDRESS}:${PORT}`);
//});