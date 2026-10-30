import { Datepicker, Label, Select, TextInput } from "flowbite-react";

export function DatosGenerales({
    formulario,
    listaCiudades,
    listaDepartamentos,
    listaSubDepartamentos,
    listaLineas,
    listaInspectores,
    listaSupervisores,
    onChange,
    onFecha,
    onCiudad,
    onDepartamento,
    onSubdepartamento,
}) {
    return (
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Datos de la inspección</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {/* CIUDAD */}
                <div>
                    <Label htmlFor="ciudad" className="mb-2 block dark:text-gray-900">
                        Ciudad
                    </Label>
                    <Select id="ciudad" name="ciudad" value={formulario.ciudad} onChange={onCiudad} required>
                        <option value="">Seleccionar</option>
                        {listaCiudades.map((ciudad) => (
                            <option key={ciudad.id_ciudad} value={ciudad.id_ciudad}>
                                {ciudad.nombre_ciudad}
                            </option>
                        ))}
                    </Select>
                </div>

                {/* DEPARTAMENTO */}
                <div>
                    <Label htmlFor="departamento" className="mb-2 block dark:text-gray-900">
                        Departamento
                    </Label>
                    <Select
                        id="departamento"
                        name="departamento"
                        value={formulario.departamento}
                        onChange={onDepartamento}
                    >
                        <option value="">Seleccionar</option>
                        {listaDepartamentos.map((departamento) => (
                            <option key={departamento.id_depto} value={departamento.id_depto}>
                                {departamento.nombre_depto}
                            </option>
                        ))}
                    </Select>
                </div>

                {/* SUBDEPARTAMENTO */}
                <div>
                    <Label htmlFor="subdepartamento" className="mb-2 block dark:text-gray-900">
                        Subdepartamento
                    </Label>
                    <Select
                        id="subdepartamento"
                        name="subdepartamento"
                        value={formulario.subdepartamento}
                        onChange={onSubdepartamento}
                    >
                        <option value="">Seleccionar</option>
                        {listaSubDepartamentos.map((sub) => (
                            <option key={sub.id_subdepto} value={sub.id_subdepto}>
                                {sub.nombre_subdepto}
                            </option>
                        ))}
                    </Select>
                </div>

                {/* LÍNEA */}
                <div>
                    <Label htmlFor="linea" className="mb-2 block dark:text-gray-900">
                        Línea
                    </Label>
                    <Select id="linea" name="linea" value={formulario.linea} onChange={onChange}>
                        <option value="">Seleccionar</option>
                        {listaLineas.map((linea) => (
                            <option key={linea.id_linea} value={linea.id_linea}>
                                {linea.nombre_linea}
                            </option>
                        ))}
                    </Select>
                </div>

                {/* FECHA */}
                <div>
                    <Label className="mb-2 block dark:text-gray-900">Fecha</Label>
                    <Datepicker
                        language="es-MX"
                        labelTodayButton="Hoy"
                        labelClearButton="Limpiar"
                        onChange={onFecha}
                    />
                </div>

                {/* INSPECTOR */}
                <div>
                    <Label htmlFor="inspector" className="mb-2 block dark:text-gray-900">
                        Inspector
                    </Label>
                    <Select id="inspector" name="inspector" value={formulario.inspector} onChange={onChange}>
                        <option value="">Seleccionar</option>
                        {listaInspectores.map((inspector) => (
                            <option key={inspector.id_inspector} value={inspector.id_inspector}>
                                {inspector.nombre_inspector}
                            </option>
                        ))}
                    </Select>
                </div>

                {/* SUPERVISOR */}
                <div>
                    <Label htmlFor="supervisor" className="mb-2 block dark:text-gray-900">
                        Supervisor
                    </Label>
                    <Select id="supervisor" name="supervisor" value={formulario.supervisor} onChange={onChange}>
                        <option value="">Seleccionar</option>
                        {(listaSupervisores ?? []).map((supervisor) => (
                            <option key={supervisor.id_supervisor} value={supervisor.id_supervisor}>
                                {supervisor.nombre_supervisor}
                            </option>
                        ))}
                    </Select>
                </div>
            </div>
        </section>
    );
}