import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export function TablaIncidencias({ incidencias, onEliminar }) {
    return (
        <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Registros de Incidencias</h2>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Categoría</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Defecto</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Severidad</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Pares con defecto</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Operación</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Operador</TableHeadCell>
                            <TableHeadCell></TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        {incidencias.map((inc, index) => (
                            <TableRow key={`${inc.categoriaDefecto}-${inc.defecto}-${index}`}>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{inc.nombre_categoria}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{inc.nombre_defecto}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{inc.nombre_severidad || inc.severidad}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{inc.paresDefectuosos}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{inc.nombre_operacion || inc.operacion}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{inc.operador}</TableCell>
                                <TableCell>
                                    <Button type="button" color="red" onClick={() => onEliminar(index)}>
                                        Eliminar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
}