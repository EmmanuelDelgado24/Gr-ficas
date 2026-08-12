/*import React, { useState, useEffect } from 'react';

export const Reloj = () => {
  const [tiempo, setTiempo] = useState(new Date());
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(new Date());
    }, 1000);
    
    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalo);
  }, []);
  
  const dia = tiempo.getDate();
  const anio = tiempo.getFullYear();
  const mes = tiempo.toLocaleString('es-ES', { month: 'long' });
  const mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1);
  const fechaFormateada = `${dia} / ${mesCapitalizado} / ${anio}`;
  
  return (
    <div className="p-6 rounded-2xl bg-[#202c34] h-56 text-white shadow-md w-180 mx-auto text-center">
      <div className="text-4xl font-mono">
        {tiempo.toLocaleTimeString()}
      </div>
      <div></div>
      <div className="text-3xl text-gray-100">
        {fechaFormateada}
      </div>
    </div>
  );
};

export default Reloj;*/

import React, { useState, useEffect, useRef } from 'react';
import Highcharts from "highcharts";
import * as HighchartsMoreModule from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

// Inicializar el módulo necesario para gauges/relojes
const HighchartsMore = HighchartsMoreModule.default || HighchartsMoreModule;
if (typeof HighchartsMore === "function") {
    HighchartsMore(Highcharts);
}

// Función de suavizado para el segundero (bounce)
Math.easeOutBounce = function (pos) {
  if (pos < 1 / 2.75) {
    return 7.5625 * pos * pos;
  }
  if (pos < 2 / 2.75) {
    return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
  }
  if (pos < 2.5 / 2.75) {
    return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
  }
  return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
};

// Cálculo de posiciones de las manecillas
const getNow = () => {
  const now = new Date();
  return {
    date: now,
    hours: now.getHours() + now.getMinutes() / 60,
    minutes: (now.getMinutes() * 12) / 60 + (now.getSeconds() * 12) / 3600,
    seconds: (now.getSeconds() * 12) / 60,
  };
};

export const Reloj = () => {
  const [tiempo, setTiempo] = useState(new Date());
  const chartRef = useRef(null);

  // 1. Actualización en tiempo real para el texto y la gráfica
  useEffect(() => {
    const intervalo = setInterval(() => {
      const nowData = getNow();
      setTiempo(nowData.date);

      // Actualizar manecillas de Highcharts
      if (chartRef.current && chartRef.current.chart) {
        const chart = chartRef.current.chart;
        if (chart.axes) {
          const hour = chart.get('hour');
          const minute = chart.get('minute');
          const second = chart.get('second');

          if (hour && minute && second) {
            hour.update(nowData.hours, true, false);
            minute.update(nowData.minutes, true, false);

            if (nowData.seconds === 0) {
              second.update(-0.2, true, false);
            }
            second.update(nowData.seconds, true, {
              easing: 'easeOutBounce',
            });
          }
        }
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  // Formato de fecha
  const dia = tiempo.getDate();
  const anio = tiempo.getFullYear();
  const mes = tiempo.toLocaleString('es-ES', { month: 'long' });
  const mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1);
  const fechaFormateada = `${dia} / ${mesCapitalizado} / ${anio}`;

  // 2. Opciones de Highcharts
  const initialNow = getNow();
  const chartOptions = {
    chart: {
      type: 'gauge',
      backgroundColor: 'transparent',
      height: 150,
    },
    credits: { enabled: false },
    title: { text: null },
    pane: {
      background: [
        { borderWidth: 0, backgroundColor: 'rgba(255,255,255,0.05)' },
      ],
      startAngle: 0,
      endAngle: 360,
    },
    yAxis: {
      labels: {
        distance: -25,
        style: { fontSize: '12px', color: '#FFF' },
      },
      min: 0,
      max: 12,
      lineWidth: 0,
      showFirstLabel: false,
      minorTickInterval: 'auto',
      minorTickWidth: 1,
      minorTickLength: 4,
      minorTickPosition: 'inside',
      minorTicksPerMajor: 5,
      tickInterval: 1,
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 7,
      title: { text: null },
    },
    series: [
      {
        data: [
          {
            id: 'hour',
            y: initialNow.hours,
            dial: {
              radius: '40%',
              baseWidth: 4,
              baseLength: '95%',
              rearLength: 0,
              topWidth: 1,
              color: '#FFFFFF',
            },
          },
          {
            id: 'minute',
            y: initialNow.minutes,
            dial: {
              baseLength: '95%',
              baseWidth: 3,
              rearLength: 0,
              topWidth: 1,
              color: '#38BDF8',
            },
          },
          {
            id: 'second',
            y: initialNow.seconds,
            dial: {
              radius: '90%',
              baseWidth: 1,
              topWidth: 1,
              rearLength: '20%',
              color: '#EF4444',
            },
          },
        ],
        animation: false,
        dataLabels: { enabled: false },
      },
    ],
  };

  return (
    <div className="p-6 rounded-2xl bg-[#202c34] h-56 text-white shadow-md w-full max-w-[15rem] mx-auto text-center flex flex-col items-center justify-between">
      {/* Reloj Analógico */}
      <div className="w-full">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          ref={chartRef}
        />
      </div>

         {/* Hora Digital */}
      <div className="text-2xl font-mono font-bold tracking-wider -mt-5">
        {tiempo.toLocaleTimeString()}
      </div>
      
      {/* Fecha */}
      <div className="text-2xl text-gray-300 mt-0">
        {fechaFormateada}
      </div>
      
    </div>
  );
};

export default Reloj;