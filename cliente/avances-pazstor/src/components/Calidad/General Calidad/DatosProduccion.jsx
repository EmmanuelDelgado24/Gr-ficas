import { Label, TextInput } from "flowbite-react";

export function DatosProduccion({ produccion, onChange }) {
    return (
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Datos de producción</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <Label htmlFor="modelo" className="mb-2 block dark:text-gray-900">
                        Modelo
                    </Label>
                    <TextInput
                        id="modelo"
                        name="modelo"
                        placeholder="Ej. 10018"
                        value={produccion.modelo}
                        onChange={onChange}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="semana" className="mb-2 block dark:text-gray-900">
                        Semana
                    </Label>
                    <TextInput
                        id="semana"
                        name="semana"
                        type="number"
                        min="1"
                        placeholder="Ej. 50"
                        value={produccion.semana}
                        onChange={onChange}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="lote" className="mb-2 block dark:text-gray-900">
                        Lote
                    </Label>
                    <TextInput
                        id="lote"
                        name="lote"
                        placeholder="Número de lote"
                        value={produccion.lote}
                        onChange={onChange}
                    />
                </div>

                <div>
                    <Label htmlFor="paresInspeccionados" className="mb-2 block dark:text-gray-900">
                        Pares inspeccionados
                    </Label>
                    <TextInput
                        id="paresInspeccionados"
                        name="paresInspeccionados"
                        type="number"
                        min="1"
                        placeholder="Ej. 50"
                        value={produccion.paresInspeccionados}
                        onChange={onChange}
                        required
                    />
                </div>
            </div>
        </section>
    );
}