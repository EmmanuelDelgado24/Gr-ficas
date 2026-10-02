import { useEffect, useState } from "react";

import {
    Button,
    Datepicker,
    Label,
    Select,
    TextInput,
    Textarea,
} from "flowbite-react";

const formularioInicial = {
    ciudad: "",
    departamento: "",
    subdepartamento: "",
    linea: "",
    fecha: "",
    inspector: "",
    supervisor: "",
}

const formularioDatosProduccion = {
    modelo: "",
    semana: "",
    lote: "",
    paresInspeccionados: "",
}

const formularioIncidenciaCalidad = {
    categoriaDefecto: "",
    defecto: "",
    severidad: "",
    paresDefectuosos: "",
    operacion: "",
    operador: "",
    observaciones: "",
}

export const MontadoAdornoCalidadL = () => {
    // Datos generales
    const [formulario, setFormulario] = useState(formularioInicial);
    // Datos producción
    const [produccion, setProduccion] = useState(formularioDatosProduccion);
    // Incidencia que se está capturando
    const [incidenciaActual, setIncidenciaActual] = useState(formularioIncidenciaCalidad);
    // Lista de incidencias capturadas
    const [incidencias, setIncidencias] = useState([]);
    // Catálogos  
    const [listaCategoria, setListaCategoria] = useState([]);
    const [listaDefectos, setListaDefectos] = useState([]);

    async function getListaCategoria() {

        const resultado = await fetch(
            "http://192.168.17.25:3000/avances/obtenerCategorias"
        );

        if (!resultado.ok) {
            throw new Error(
                "Error al obtener categorías"
            );
        }

        return await resultado.json();
    }

    async function postGuardarFormulario(inspeccion) {
        const envia = await fetch("http://192.168.17.25:3000/avances/crearInspeccion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inspeccion),
        });

        if (!envia.ok) {
            throw new Error(
                "Error al guardar la inspección"
            );
        }
        return await envia.json();
    }


    useEffect(() => {
        async function cargarCategorias() {

            try {
                const resultado = await getListaCategoria();
                setListaCategoria(resultado.data);

            } catch (error) {
                console.error(
                    "Error obteniendo categorías:",
                    error
                );
            }
        }

        cargarCategorias();

    }, []);


    // -----------------------
    // DATOS GENERALES
    // -----------------------

    const handleFormularioChange = (e) => {

        const { name, value } = e.target;

        setFormulario(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleFecha = (fecha) => {

        setFormulario(prev => ({
            ...prev,
            fecha
        }));
    };


    // -----------------------
    // PRODUCCIÓN
    // -----------------------

    const handleProduccionChange = (e) => {

        const { name, value } = e.target;

        setProduccion(prev => ({
            ...prev,
            [name]: value
        }));
    };


    // -----------------------
    // INCIDENCIA
    // -----------------------

    const handleIncidenciaChange = (e) => {

        const { name, value } = e.target;

        setIncidenciaActual(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleCategoriaChange = async (e) => {

        // Seleccionas categoría
        const idCategoria = e.target.value;

        // Guarda la categoría seleccionada
        // y limpia el defecto anterior
        setIncidenciaActual(prev => ({
            ...prev,
            categoriaDefecto: idCategoria,
            defecto: ""
        }));

        // Si no hay categoría seleccionada,
        // vacía la lista de defectos
        if (!idCategoria) {
            setListaDefectos([]);
            return;
        }

        try {
            // Consulta los defectos de esa categoría
            const response = await fetch(
                `http://192.168.17.25:3000/avances/obtenerDefectos/${idCategoria}`
            );

            if (!response.ok) {
                throw new Error(
                    "Error obteniendo defectos"
                );
            }

            const resultado = await response.json();

            // Guarda los defectos recibidos
            setListaDefectos(resultado.data);

        } catch (error) {

            console.error(error);

            setListaDefectos([]);
        }
    };


    const cargarIncidencia = () => {

        // setIncidencias(...) actualiza el estado incidencias.
        // prev representa el valor anterior de incidencias.
        setIncidencias(prev => {
            const nuevaLista = [
                ...prev, incidenciaActual
            ]
            console.log("Lista de incidencias:", nuevaLista)
            return nuevaLista;
        });

        // Limpia formulario
        setIncidenciaActual(formularioIncidenciaCalidad);
        // Limpia opcion defectos
        setListaDefectos([]);
    };


    // -----------------------
    // GUARDAR INSPECCIÓN
    // -----------------------

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (incidencias.length == 0) {
            alert("Agrega al menos una incidencia");
            return;
        }

        const inspeccion = {
            datosGenerales: formulario,
            produccion: produccion,
            incidencias: incidencias
        };

        try {
            const resultado = await postGuardarFormulario(inspeccion);
            console.log("Guardado:", resultado);
            handleLimpiar();
        } catch (error) {
            console.error(error);
            alert("No se pudo guardar la inspección");
        }
       // console.log("INSPECCIÓN COMPLETA:", inspeccion);
    };

    const handleLimpiar = () => {
        setFormulario(formularioInicial);
        setProduccion(formularioDatosProduccion);
        setIncidenciaActual(formularioIncidenciaCalidad);
        setIncidencias([]);
        setListaDefectos([]);
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <br /><br />
            {/* TITULO */}
            <section className="mb-8">
                <div className="flex">
                    <h1 className="titulo-produccion w-full text-2xl font-bold text-gray-800">
                        INSPECCIÓN CALIDAD MONTADO - ADORNO L-6
                    </h1>
                </div>
            </section>

            <form onSubmit={handleSubmit}>
                {/* =============================== */}
                {/* DATOS GENERALES */}
                {/* =============================== */}
                <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">
                        Datos de la inspección
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {/* CIUDAD */}
                        <div>
                            <Label htmlFor="ciudad" className="mb-2 block dark:text-gray-900">
                                Ciudad
                            </Label>
                            <Select
                                id="ciudad"
                                name="ciudad"
                                value={formulario.ciudad}
                                onChange={handleFormularioChange}
                                required
                            >
                                <option value="">Seleccionar</option>
                                <option value="León">León</option>
                                <option value="Manuel Doblado">Manuel Doblado</option>
                                <option value="Cuerámaro">Cuerámaro</option>
                            </Select>
                        </div>

                        {/* DEPARTAMENTO */}
                        <div>
                            <Label
                                htmlFor="departamento"
                                className="mb-2 block dark:text-gray-900"
                            >
                                Departamento
                            </Label>
                            <Select
                                id="departamento"
                                name="departamento"
                                value={formulario.departamento}
                                onChange={handleFormularioChange}
                            >
                                <option value="">Seleccionar</option>
                                <option value="Montado">Montado</option>
                                <option value="Adorno">Adorno</option>
                            </Select>
                        </div>

                        {/* SUBDEPARTAMENTO */}
                        <div>
                            <Label
                                htmlFor="subdepartamento"
                                className="mb-2 block dark:text-gray-900"
                            >
                                Subdepartamento
                            </Label>
                            <Select
                                id="subdepartamento"
                                name="subdepartamento"
                                value={formulario.subdepartamento}
                                onChange={handleFormularioChange}
                            >
                                <option value="">Seleccionar</option>
                                <option value="Montado León">Montado León</option>
                                <option value="Adorno León">Adorno León</option>
                            </Select>
                        </div>

                        {/* LINEA */}
                        <div>
                            <Label htmlFor="linea" className="mb-2 block dark:text-gray-900">
                                Línea
                            </Label>
                            <Select
                                id="linea"
                                name="linea"
                                value={formulario.linea}
                                onChange={handleFormularioChange}
                            >
                                <option value="">Seleccionar</option>
                                <option value="L-1">L-1</option>
                                <option value="L-2">L-2</option>
                                <option value="L-3">L-3</option>
                                <option value="L-4">L-4</option>
                                <option value="L-5">L-5</option>
                                <option value="L-6">L-6</option>
                                <option value="L-7">L-7</option>
                                <option value="L-8">L-8</option>
                            </Select>
                        </div>

                        {/* FECHA */}
                        <div>
                            <Label className="mb-2 block dark:text-gray-900">Fecha</Label>
                            <Datepicker
                                language="es-MX"
                                labelTodayButton="Hoy"
                                labelClearButton="Limpiar"
                                onChange={handleFecha}
                            />
                        </div>

                        {/* INSPECTOR */}
                        <div>
                            <Label
                                htmlFor="inspector"
                                className="mb-2 block dark:text-gray-900"
                            >
                                Inspector
                            </Label>
                            <TextInput
                                id="inspector"
                                name="inspector"
                                placeholder="Nombre del inspector"
                                value={formulario.inspector}
                                onChange={handleFormularioChange}
                                required
                            />
                        </div>

                        {/* SUPERVISOR */}
                        <div>
                            <Label
                                htmlFor="supervisor"
                                className="mb-2 block dark:text-gray-900"
                            >
                                Supervisor
                            </Label>
                            <TextInput
                                id="supervisor"
                                name="supervisor"
                                placeholder="Nombre del supervisor"
                                value={formulario.supervisor}
                                onChange={handleFormularioChange}
                                required
                            />
                        </div>
                    </div>
                </section>

                {/* =============================== */}
                {/* DATOS PRODUCCION */}
                {/* =============================== */}
                <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">
                        Datos de producción
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* MODELO */}
                        <div>
                            <Label htmlFor="modelo" className="mb-2 block dark:text-gray-900">
                                Modelo
                            </Label>
                            <TextInput
                                id="modelo"
                                name="modelo"
                                placeholder="Ej. 10018"
                                value={produccion.modelo}
                                onChange={handleProduccionChange}
                                required
                            />
                        </div>

                        {/* SEMANA */}
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
                                onChange={handleProduccionChange}
                                required
                            />
                        </div>

                        {/* LOTE */}
                        <div>
                            <Label htmlFor="lote" className="mb-2 block dark:text-gray-900">
                                Lote
                            </Label>
                            <TextInput
                                id="lote"
                                name="lote"
                                placeholder="Número de lote"
                                value={produccion.lote}
                                onChange={handleProduccionChange}
                                required
                            />
                        </div>

                        {/* PARES */}
                        <div>
                            <Label
                                htmlFor="paresInspeccionados"
                                className="mb-2 block dark:text-gray-900"
                            >
                                Pares inspeccionados
                            </Label>
                            <TextInput
                                id="paresInspeccionados"
                                name="paresInspeccionados"
                                type="number"
                                min="1"
                                placeholder="Ej. 50"
                                value={produccion.paresInspeccionados}
                                onChange={handleProduccionChange}
                                required
                            />
                        </div>
                    </div>
                </section>

                {/* =============================== */}
                {/* INCIDENCIA */}
                {/* =============================== */}
                <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">
                        Incidencia de calidad
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {/* CATEGORIA */}
                        <div>
                            <Label htmlFor="categoriaDefecto" className="mb-2 block dark:text-gray-900">
                                Categoría
                            </Label>
                            <Select
                                id="categoriaDefecto"
                                name="categoriaDefecto"
                                value={incidenciaActual.categoriaDefecto}
                                onChange={handleCategoriaChange}
                                required
                            >
                                <option value="">Seleccionar</option>
                                {
                                    listaCategoria.map((categoria) => (
                                        <option key={categoria.id_categoria}
                                            value={categoria.id_categoria}>
                                            {categoria.nombre_categoria}
                                        </option>
                                    ))
                                }
                            </Select>
                        </div>

                        {/* DEFECTO */}
                        <div>
                            <Label
                                htmlFor="defecto"
                                className="mb-2 block dark:text-gray-900"
                            >
                                Defecto
                            </Label>
                            <Select
                                id="defecto"
                                name="defecto"
                                value={incidenciaActual.defecto}
                                onChange={handleIncidenciaChange}
                                required
                            >
                                <option value="">Seleccionar defecto</option>
                                {listaDefectos.map((defecto) => (
                                    <option
                                        key={defecto.id_defecto}
                                        value={defecto.id_defecto}
                                    >
                                        {defecto.nombre_defecto}
                                    </option>
                                ))

                                }
                            </Select>
                        </div>

                        {/* SEVERIDAD */}
                        <div>
                            <Label
                                htmlFor="severidad"
                                className="mb-2 block dark:text-gray-900"
                            >
                                Severidad
                            </Label>
                            <Select
                                id="severidad"
                                name="severidad"
                                value={incidenciaActual.severidad}
                                onChange={handleIncidenciaChange}
                                required
                            >
                                <option value="">Seleccionar</option>
                                <option value="Menor">Menor</option>
                                <option value="Mayor">Mayor</option>
                                <option value="Crítico">Crítico</option>
                            </Select>
                        </div>

                        {/* CANTIDAD DEFECTUOSA */}
                        <div>
                            <Label
                                htmlFor="paresDefectuosos"
                                className="mb-2 block dark:text-gray-900"
                            >
                                Pares con defecto
                            </Label>
                            <TextInput
                                id="paresDefectuosos"
                                name="paresDefectuosos"
                                type="number"
                                min="0"
                                placeholder="Ej. 3"
                                value={incidenciaActual.paresDefectuosos}
                                onChange={handleIncidenciaChange}
                                required
                            />
                        </div>

                        {/* OPERACION */}
                        <div>
                            <Label
                                htmlFor="operacion"
                                className="mb-2 block dark:text-gray-900"
                            >
                                Operación
                            </Label>
                            <Select
                                id="operacion"
                                name="operacion"
                                value={incidenciaActual.operacion}
                                onChange={handleIncidenciaChange}
                                required
                            >
                                <option value="">Seleccionar</option>
                                <option value="Montado de Talones">Montado de Talones</option>
                                <option value="Montado de Puntas">Montado de Puntas</option>
                                <option value="Asentado">Asentado</option>
                                <option value="Pegado de Suela">Pegado de Suela</option>
                            </Select>
                        </div>

                        {/* OPERADOR */}
                        <div>
                            <Label
                                htmlFor="operador"
                                className="mb-2 block dark:text-gray-900"
                            >
                                Operador
                            </Label>
                            <TextInput
                                id="operador"
                                name="operador"
                                placeholder="Nombre del operador"
                                value={incidenciaActual.operador}
                                onChange={handleIncidenciaChange}
                                required
                            />
                        </div>

                    </div>
                    <div>
                        <Button
                            type="button"
                            className="text-white bg-amber-500 box-border border border-transparent hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                            onClick={cargarIncidencia}
                        >
                            Agregar Incidencia
                        </Button>
                    </div>
                    {/* OBSERVACIONES */}
                    <div className="mt-6">
                        <Label htmlFor="observaciones" className="mb-2 block dark:text-gray-900">
                            Observaciones
                        </Label>
                        <Textarea
                            id="observaciones"
                            name="observaciones"
                            rows={4}
                            placeholder="Describe la incidencia encontrada..."
                            value={incidenciaActual.observaciones}
                            onChange={handleIncidenciaChange}
                        />
                    </div>
                </section>

                {/* BOTONES */}
                <div className="flex justify-end gap-4">
                    <Button type="button" color="light" onClick={handleLimpiar}>
                        Limpiar
                    </Button>
                    <Button
                        type="submit"
                        color="green"
                    >
                        Registrar inspección
                    </Button>

                    {/* Update - amarillo/ámbar */}
                    <Button
                        type="button"
                        className="text-white bg-amber-500 box-border border border-transparent hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"

                    >
                        Editar inspección
                    </Button>

                    {/* Delete - rojo 
                    <Button
                        type="button"
                        color="red"

                    >
                        Eliminar inspección
                    </Button>*/}
                </div>
            </form>
        </div>
    );
}

export default MontadoAdornoCalidadL;