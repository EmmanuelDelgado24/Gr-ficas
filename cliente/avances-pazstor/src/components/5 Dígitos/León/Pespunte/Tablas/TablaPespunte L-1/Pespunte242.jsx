import { useEffect, useState } from "react";

//useState: Se usa para almacenar los datos y los errores.

export const Pespunte242 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/avances/Pespunte242")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">PESPUNTE L-1</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {data ? (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Modelo</th>
                <th scope="col" className="px-6 py-3">Programación</th>
                <th scope="col" className="px-6 py-3">Lote</th>
                <th scope="col" className="px-6 py-3">N° pares</th>
                <th scope="col" className="px-6 py-3">Fecha</th>
                <th scope="col" className="px-6 py-3">Estatus Departamento</th>
                </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.LC_ESTILO}
                  </th>
                  <td className="px-6 py-4">{item.LC_PROG}</td>
                  <td className="px-6 py-4">{item.AV_LOTE}</td>
                  <td className="px-6 py-4">{item.LC_PARLOT}</td>
                  <td className="px-6 py-4">
                    {new Date(item.AV_FECHA).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">{item.LC_STATUS}</td>
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
