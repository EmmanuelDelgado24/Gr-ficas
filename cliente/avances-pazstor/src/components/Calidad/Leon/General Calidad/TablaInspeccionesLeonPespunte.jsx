import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export function TablaInspeccionesLeonPespunte({ lista, handleDeletePespunteL }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Registros de Inspección</h2>
            <div className="overflow-x-auto rounded-lg shadow-md bg-white dark:bg-gray-900">
                <Table hoverable theme={{ root: { shadow: "hidden" } }}>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Ciudad</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Departamento</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Subdepartamento</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Línea</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Fecha</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Inspector</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Supervisor</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Modelo</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Semana</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Lote</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Pares inspeccionados</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Categoría</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Defecto</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Severidad</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Pares con defecto</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Operación</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Operador</TableHeadCell>
                            <TableHeadCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Observaciones</TableHeadCell>
                            <TableHeadCell></TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        {lista.map((insp, index) => (
                            <TableRow key={insp.id_inspeccion || index}>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.nombre_ciudad}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.nombre_depto}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.nombre_subdepto}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.nombre_linea}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {insp.fecha
                                        ? new Date(insp.fecha).toLocaleDateString("es-MX", {
                                              day: "2-digit",
                                              month: "2-digit",
                                              year: "numeric",
                                          })
                                        : ""}
                                </TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.nombre_inspector}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.nombre_supervisor}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.modelo}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.semana}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.lote}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.pares_inspeccionados}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.nombre_categoria}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.nombre_defecto}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.nombre_severidad}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.pares_con_defecto}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.nombre_operacion}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.operador}</TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{insp.descripcion}</TableCell>
                                <TableCell>
                                     <Button
                                        type="button"
                                        color="red"
                                        onClick={() => handleDeletePespunteL(insp.id_inspeccion)}
                                    >
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