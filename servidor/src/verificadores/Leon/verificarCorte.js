import { obtenerLotes, lotesConfig } from '../../models/Leon/corte.model.js';

let verificadorIniciado = false;

const datosPrevios = {};
const ultimosDatos = {};
const estadoHoraPorLinea = {};

// Obtener la hora actual en formato HH:00
function obtenerHoraActual() {
  const horas = String(new Date().getHours()).padStart(2, '0');
  return `${horas}:00`;
}

// enviar datos actualizados
export function iniciarVerificacionCorte(io, socket) {
  // Enviar los últimos datos al cliente que acaba de conectarse
  if (socket) {
    for (const [nombre, datos] of Object.entries(ultimosDatos)) {
      socket.emit(`actualizar-${nombre}`, datos);
    }
  }

  // Evitar iniciar más de un verificador
  if (verificadorIniciado) {
    console.log('[Corte] El verificador ya está iniciado');
    return;
  }

  verificadorIniciado = true;

  const verificar = async () => {
    const bloqueActual = obtenerHoraActual();

    console.log('========================================');
    console.log('[Corte] Iniciando verificación');

    for (const config of lotesConfig) {
      try {
        console.log('----------------------------------------');
        console.log('[Corte] Configuración:', {
          nombre: config.nombre,
          depto: config.depto,
          subdepto: config.subdepto,
          origen: config.origen
        });

        const datos = await obtenerLotes({
          depto: config.depto,
          subdepto: config.subdepto,
          origen: config.origen
        });

        // Guardar siempre la última consulta completa
        ultimosDatos[config.nombre] = datos;

        // Calcular el total de pares de la consulta
        const sumaPares = datos?.reduce(
          (acc, item) => acc + (Number(item.LC_PARLOT) || 0),
          0
        ) || 0;

        // Inicializar el control horario de esta configuración
        if (!estadoHoraPorLinea[config.nombre]) {
          estadoHoraPorLinea[config.nombre] = {
            hora: bloqueActual,
            paresAlIniciar: sumaPares
          };

          console.log(
            `[Corte] ${config.nombre}: ` +
            `inicio del registro horario ${bloqueActual}, ` +
            `pares iniciales: ${sumaPares}`
          );
        }

        const estado = estadoHoraPorLinea[config.nombre];

        // Detectar el cambio de hora y registrar los pares del bloque anterior
        if (estado.hora !== bloqueActual) {
          const paresHora = sumaPares - estado.paresAlIniciar;

          console.log(
            `[Registro] ${config.nombre} ` +
            `hora ${estado.hora}: ${paresHora} pares`
          );

          // Iniciar el siguiente bloque horario
          estado.hora = bloqueActual;
          estado.paresAlIniciar = sumaPares;
        }

        // Emitir solamente cuando cambia el total de pares
        if (datosPrevios[config.nombre] !== sumaPares) {
          datosPrevios[config.nombre] = sumaPares;
          console.log(`[SocketIO] Emitiendo actualizar-${config.nombre}`);
          io.emit(`actualizar-${config.nombre}`, datos);
          console.log(`[SocketIO] Pares actuales en ${config.nombre}: ${sumaPares}`);
        }

      } catch (error) {
        console.error(
          `[Error] Consultando ${config.nombre}:`,
          error
        );
      }
    }
  };

  // Ejecutar inmediatamente
  verificar();

  // Repetir cada minuto
  setInterval(verificar, 60000);
}