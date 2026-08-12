import { useEffect, useState } from "react";
//import Chart from "react-apexcharts";
import Highcharts from "highcharts";
import * as HighchartsMoreModule from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";

// Inicialización compatible con Vite / ESM
const HighchartsMore = HighchartsMoreModule.default || HighchartsMoreModule;
if (typeof HighchartsMore === "function") {
    HighchartsMore(Highcharts);
}

const Eficiencia = ({ totalPares = 0 }) => {

    const [infoGeneral, setInfoGeneral] = useState([]);

    useEffect(() => {
        const obtenerInfoGeneral = async () => {
            //const apiUrl = `https://api.avances-pazstor.online/avances/personaldepto`;
            const apiUrl = `http://192.168.17.25:3000/avances/informacionGeneral`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || "Error al consultar la API");
                }

                const infogeneral = await response.json();
                console.log("Datos recibidos de la API:", infogeneral);
                setInfoGeneral(infogeneral);
            } catch (error) {
                console.error("Error al realizar la consulta:", error);
            }
        };

        obtenerInfoGeneral();

        const intervalo = setInterval(obtenerInfoGeneral, 60000);

        return () => clearInterval(intervalo);

    }, []);

    // Lógica para determinar el color según el valor de eficiencia
    const obtenerColorSegunEficiencia = (valor) => {
        if (valor <= 79) return '#EF4444'; // Rojo (Baja)
        if (valor >= 80 && valor <= 89) return '#F59E0B'; // Amarillo (Media)
        return '#10B981';                  // Verde (Alta)
    };


    const metaDiaria = infoGeneral?.meta_diaria || 0;
    const valorEficiencia =
        metaDiaria > 0
            ? Number.parseInt((totalPares / metaDiaria) * 100)
            : 0;
    console.log("Valor de eficiencia calculado:", valorEficiencia);

    const colorActual = obtenerColorSegunEficiencia(valorEficiencia);

    // Configuración de Highcharts para el Gauge Semi-circular
    const chartOptions = {
        chart: {
            type: "gauge",
            backgroundColor: "transparent",
            height: 158,
        },
        // ── DESACTIVAR ADVERTENCIA DE ACCESIBILIDAD ──
        accessibility: {
            enabled: false,
        },
        title: {
            text: null, // Oculto porque ya usamos el título del contenedor JSX
        },

        pane: {
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ["50%", "45%"],
            size: "90%",
        },

        // Eje de valores (0 - 100%)
        yAxis: {
            min: 0,
            max: 100,
            minorTickInterval: null,
            tickAmount: 2,
            labels: {
                distance: 20,
                style: {
                    color: "#9CA3AF",
                    fontSize: "12px",
                },
            },
            // Zonas de color en el arco
            plotBands: [
                {
                    from: 0,
                    to: 79,
                    color: "#EF4444", // Rojo
                    thickness: "25%",
                },
                {
                    from: 80,
                    to: 90,
                    color: "#F59E0B", // Amarillo
                    thickness: "25%",
                },
                {
                    from: 91,
                    to: 100,
                    color: "#10B981", // Verde
                    thickness: "25%",
                },
            ],
        },

        series: [
            {
                name: "Eficiencia",
                data: [valorEficiencia],
                dataLabels: {
                    format: "{y:,.0f}%",
                    borderWidth: 0,
                    y: 15,
                    style: {
                        fontSize: "45px",
                        color: colorActual,
                        fontWeight: "bold",
                        textOutline: "none",
                    },
                },
                // Estilo de la aguja indicador
                dial: {
                    backgroundColor: colorActual,
                    baseLength: "0%",
                    baseWidth: 8,
                    radius: "75%",
                    rearLength: "0%",
                },
                // Centro de la aguja
                pivot: {
                    backgroundColor: colorActual,
                    radius: 10,
                },
            },
        ],

        credits: {
            enabled: false, // Desactiva la marca de agua de Highcharts
        },
    };


    // Configuración del gráfico Gauge
    /*const chartOptions = {
        chart: {
            type: 'radialBar',
            offsetY: -10,
            sparkline: {
                enabled: true,
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: '#334155', // Fondo del arco no rellenado (Gris oscuro slate-700)
                    strokeWidth: '97%',
                    margin: 5,
                    dropShadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#fdfbfb',
                        opacity: 0.3,
                        blur: 4,
                    },
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        offsetY: -2,
                        fontSize: '26px',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        formatter: function (val) {
                            return val + '%';
                        },
                    },
                },
            },
        },
        grid: {
            padding: {
                top: -10,
            },
        },
        // Asignamos dinámicamente el color según el valor actual
        colors: [colorActual],
        labels: ['Eficiencia'],
    };*/

    return (
        <div className="p-6 rounded-2xl bg-[#202c34] h-[13.880rem] text-white shadow-md w-[70rem] mx-auto text-center flex flex-col items-center">
            {/* Encabezado */}
            <div className="flex justify-between items-center mb-4 w-full">
                <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">
                    EFICIENCIA REAL
                </h5>
            </div>

            {/* Contenedor de la gráfica con altura/ancho contenidos */}
            <div className="w-full flex justify-center items-center flex-1 overflow-hidden">
                <div style={{ width: "100%", height: "158px" }}>
                    <HighchartsReact highcharts={Highcharts} options={chartOptions} 
                      containerProps={{ style: { width: "100%", height: "100%" } }}/>
                </div>
            </div>
        </div>
    );
};

export default Eficiencia