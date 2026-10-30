import { obtenerLotes, lotesConfig } from '../../models/Cueramaro/coordinado.models.js';

let verificadorIniciado = false;

const datosPrevios = {};
const ultimosDatos = {};
const estadoHoraPorLinea = {};

function obtenerHoraActual() {
  const horas = String(new Date().getHours()).padStart(2, '0');
  return `${horas}:00`;
}

export function iniciarVerificacionCoordinadoCUE(io, socket) {
  // Enviar el estado actual al cliente que lo pidió
  if (socket) {
    for (const [nombre, datos] of Object.entries(ultimosDatos)) {
      socket.emit(`actualizar-${nombre}`, datos);
    }
  }

  if (verificadorIniciado) return;
  verificadorIniciado = true;

  const verificar = async () => {
    const bloqueActual = obtenerHoraActual();

    for (const config of lotesConfig) { // lotesConfig: define las líneas que se consultan.
      try {
        const datos = await obtenerLotes({ // obtenerLotes: consulta los datos de producción.
          depto: config.depto,
          subdepto: config.subdepto,
          origen: config.origen,
        });

        ultimosDatos[config.nombre] = datos;

        const sumaPares = datos?.reduce((acc, item) => acc + item.LC_PARLOT, 0) || 0;

        if (!estadoHoraPorLinea[config.nombre]) {
          estadoHoraPorLinea[config.nombre] = {
            hora: bloqueActual,
            paresAlIniciar: sumaPares,
          };
        }

        const estado = estadoHoraPorLinea[config.nombre];
        if (estado.hora !== bloqueActual) {
          console.log(`[Registro] ${config.nombre} hora ${estado.hora}: ${sumaPares - estado.paresAlIniciar} pares`);
          estado.hora = bloqueActual;
          estado.paresAlIniciar = sumaPares;
        }

        // Compara la suma anterior 
        if (datosPrevios[config.nombre] !== sumaPares) {
          datosPrevios[config.nombre] = sumaPares;
          console.log(`[SocketIO] Emitiendo actualizar-${config.nombre}`);
          io.emit(`actualizar-${config.nombre}`, datos);
          console.log(`[SocketIO] Pares cambiaron en ${config.nombre}: ${sumaPares}`);
        }
      } catch (error) {
        console.error(`[Error] Consultando ${config.nombre}:`, error);
      }
    }
  };

  verificar();
  setInterval(verificar, 60000);
}