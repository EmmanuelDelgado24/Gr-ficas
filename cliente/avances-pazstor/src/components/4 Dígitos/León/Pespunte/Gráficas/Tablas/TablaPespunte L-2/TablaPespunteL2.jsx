import { useEffect, useState } from "react";

export const TablaPespunteL2 = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setInterval(() => {
            fetch("http://localhost:3000/avances/Pespunte142-4")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error en la respuesta del servidor");
                    }
                    return response.json();
                })
                .then((data) => setData(data))
                .catch((error) => setError(error.message));
            console.log("Datos actualizados");
        }, 10000); // Actualiza cada 10 segundos    

        /*fetch("http://localhost:3000/avances/Pespunte244")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error en la respuesta del servidor");
            }
            return response.json();
          })
          .then((data) => setData(data))
          .catch((error) => setError(error.message));*/
    }, []); // Se ejecuta solo una vez cuando el componente se monta

    const SumaPares = data?.reduce((total, item) => total + item.LC_PARLOT, 0);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">PESPUNTE L-2  4 DIGITOS</h1>

            <p className="text-gray-900">Total de pares: {SumaPares}</p>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                {error && <p style={{ color: "red" }}>Error: {error}</p>}
                {data ? (
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Programación</th>
                                <th scope="col" className="px-6 py-3">Lote</th>
                                <th scope="col" className="px-6 py-3">Modelo</th>
                                <th scope="col" className="px-6 py-3">Estatus Departamento</th>
                                <th scope="col" className="px-6 py-3">N° pares</th>
                                <th scope="col" className="px-6 py-3">N° Semana</th>
                                <th scope="col" className="px-6 py-3">Fecha</th>
                                <th scope="col" className="px-6 py-3">Departamento</th>
                                <th scope="col" className="px-6 py-3">SubDepartamento</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <td className="px-6 py-4">{item.LC_PROG}</td>
                                    <td className="px-6 py-4">{item.AV_LOTE}</td>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {item.LC_ESTILO}
                                    </th>
                                    <td className="px-6 py-4">{item.LC_STATUS}</td>
                                    <td className="px-6 py-4">{item.LC_PARLOT}</td>
                                    <td className="px-6 py-4">{item.LC_SEMPRO}</td>
                                    <td className="px-6 py-4"> {new Date(item.AV_FECHA).toLocaleDateString('es-ES', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric'
                                    })}</td>
                                    <td className="px-6 py-4">{item.AV_DEPTO}</td>
                                    <td className="px-6 py-4">{item.AV_SUBDEPTO}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500">Cargando datos...</p>
                )}
            </div>
        </div>
    );
};

export default TablaPespunteL2;