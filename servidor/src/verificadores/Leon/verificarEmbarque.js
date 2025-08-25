import { lotesEmbarque } from '../../models/Leon/embarque.model.js'; 

let verificadorIniciado = false;

export function iniciarVerificacionEmbarque(io) {
  if (verificadorIniciado) return;
  verificadorIniciado = true;

  let datosPrevios4DigitosSumaPares = 0;
  let datosPrevios5DigitosSumaPares = 0;

  const verificar = async () => {
    try {
      const { lotes4Digitos, lotes5Digitos } = await lotesEmbarque.getAllLotes();
      const calcularSumaLC_PARLOT = (datos) =>
        datos?.reduce((acc, item) => acc + item.LC_PARLOT, 0) || 0;

      const sumaPares4DigitosActual = calcularSumaLC_PARLOT(lotes4Digitos);
      const sumaPares5DigitosActual = calcularSumaLC_PARLOT(lotes5Digitos);

      // --- Manejo para 4 Dígitos ---
      if (datosPrevios4DigitosSumaPares !== sumaPares4DigitosActual) {
        datosPrevios4DigitosSumaPares = sumaPares4DigitosActual;
        // Emitir los datos completos de 4 dígitos si hay cambios
        io.emit(`actualizar-embarque`, lotes4Digitos);
        console.log(`[SocketIO] Pares cambiaron en embarque 4 Dígitos: ${sumaPares4DigitosActual}`);
      } else {
        console.log(`[SocketIO] Pares de embarque 4 Dígitos sin cambios: ${sumaPares4DigitosActual}`);
      }

      // --- Manejo para 5 Dígitos ---
      if (datosPrevios5DigitosSumaPares !== sumaPares5DigitosActual) {
        datosPrevios5DigitosSumaPares = sumaPares5DigitosActual;
        // Emitir los datos completos de 5 dígitos si hay cambios
        io.emit(`actualizar-embarque-5digitos`, lotes5Digitos);
        console.log(`[SocketIO] Pares cambiaron en embarque 5 Dígitos: ${sumaPares5DigitosActual}`);
      } else {
        console.log(`[SocketIO] Pares de embarque 5 Dígitos sin cambios: ${sumaPares5DigitosActual}`);
      }
    } catch (error) {
      console.error(`Error al verificar embarque:`, error);
    } finally {
      verificadorIniciado = false;
    }
  };

  verificar();

  setInterval(verificar, 300000); // Cada 5 minutos
}