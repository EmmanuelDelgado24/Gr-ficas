import { useEffect, useState } from "react";

function Inventario() {
  const [pivot, setPivot] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/avances/inventario4")
      .then(res => res.json())
      .then(data => {
        setPivot(data.pivot);     // filas
        setColumns(data.columns); // columnas dinámicas
      })
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h2>Inventario en Proceso</h2>

      <table border="1">
        <thead>
          <tr>
            <th>STATUS</th>
            {columns.map(col => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {pivot.map((fila, index) => (
            <tr key={index}>
              <td>{fila.LC_STATUS}</td>

              {columns.map(col => (
                <td key={col}>{fila[col] || 0}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventario;