import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

export function FormularioIncidencia({
    incidencia,
    listaCategoria,
    listaDefectos,
    listaSeveridades,
    listaOperaciones,
    onChange,
    onCategoria,
    onAgregar,
}) {
    return (
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Incidencia de calidad</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div>
                    <Label htmlFor="categoriaDefecto" className="mb-2 block dark:text-gray-900">
                        Categoría
                    </Label>
                    <Select
                        id="categoriaDefecto"
                        name="categoriaDefecto"
                        value={incidencia.categoriaDefecto}
                        onChange={onCategoria}
                    >
                        <option value="">Seleccionar</option>
                        {listaCategoria.map((cat) => (
                            <option key={cat.id_categoria} value={cat.id_categoria}>
                                {cat.nombre_categoria}
                            </option>
                        ))}
                    </Select>
                </div>

                <div>
                    <Label htmlFor="defecto" className="mb-2 block dark:text-gray-900">
                        Defecto
                    </Label>
                    <Select id="defecto" name="defecto" value={incidencia.defecto} onChange={onChange}>
                        <option value="">Seleccionar defecto</option>
                        {listaDefectos.map((d) => (
                            <option key={d.id_defecto} value={d.id_defecto}>
                                {d.nombre_defecto}
                            </option>
                        ))}
                    </Select>
                </div>

                <div>
                    <Label htmlFor="severidad" className="mb-2 block dark:text-gray-900">
                        Severidad
                    </Label>
                    <Select id="severidad" name="severidad" value={incidencia.severidad} onChange={onChange}>
                        <option value="">Seleccionar</option>
                        {listaSeveridades.map((s) => (
                            <option key={s.id_severidad} value={s.id_severidad}>
                                {s.nombre_severidad}
                            </option>
                        ))}
                    </Select>
                </div>

                <div>
                    <Label htmlFor="paresDefectuosos" className="mb-2 block dark:text-gray-900">
                        Pares con defecto
                    </Label>
                    <TextInput
                        id="paresDefectuosos"
                        name="paresDefectuosos"
                        type="number"
                        min="0"
                        placeholder="Ej. 3"
                        value={incidencia.paresDefectuosos}
                        onChange={onChange}
                    />
                </div>

                <div>
                    <Label htmlFor="operacion" className="mb-2 block dark:text-gray-900">
                        Operación
                    </Label>
                    <Select id="operacion" name="operacion" value={incidencia.operacion} onChange={onChange}>
                        <option value="">Seleccionar</option>
                        {listaOperaciones.map((o) => (
                            <option key={o.id_operacion} value={o.id_operacion}>
                                {o.nombre_operacion}
                            </option>
                        ))}
                    </Select>
                </div>

                <div>
                    <Label htmlFor="operador" className="mb-2 block dark:text-gray-900">
                        Operador
                    </Label>
                    <TextInput
                        id="operador"
                        name="operador"
                        placeholder="Nombre del operador"
                        value={incidencia.operador}
                        onChange={onChange}
                    />
                </div>
            </div>

            <div className="mt-6">
                <Label htmlFor="observaciones" className="mb-2 block dark:text-gray-900">
                    Observaciones
                </Label>
                <Textarea
                    id="observaciones"
                    name="observaciones"
                    rows={4}
                    placeholder="Describe la incidencia encontrada..."
                    value={incidencia.observaciones}
                    onChange={onChange}
                />
            </div>

            <div className="mt-4">
                <Button
                    type="button"
                    className="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-base text-sm px-4 py-2.5"
                    onClick={onAgregar}
                >
                    Agregar Incidencia
                </Button>
            </div>
        </section>
    );
}