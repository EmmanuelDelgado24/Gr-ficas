import { useEffect, useState } from "react";

const formularioInicial = {
    ciudad: "",
    departamento: "",
    subdepartamento: "",
    linea: "",
    fecha: "",
    inspector: "",
    supervisor: "",
};

const formularioDatosProduccion = {
    modelo: "",
    semana: "",
    lote: "",
    paresInspeccionados: "",
};

const formularioIncidenciaCalidad = {
    categoriaDefecto: "",
    defecto: "",
    severidad: "",
    paresDefectuosos: "",
    operacion: "",
    operador: "",
    observaciones: "",
};

export function useInspeccion() {
    const [formulario, setFormulario] = useState(formularioInicial);
    const [produccion, setProduccion] = useState(formularioDatosProduccion);
    const [incidenciaActual, setIncidenciaActual] = useState(formularioIncidenciaCalidad);
    const [incidencias, setIncidencias] = useState([]);

    const [listaCategoria, setListaCategoria] = useState([]);
    const [listaDefectos, setListaDefectos] = useState([]);
    const [listaCiudades, setListaCiudades] = useState([]);
    const [listaDepartamentos, setListaDepartamentos] = useState([]);
    const [listaSubDepartamentos, setListaSubDepartamentos] = useState([]);
    const [listaLineas, setListaLineas] = useState([]);
    const [listaSeveridades, setListaSeveridades] = useState([]);
    const [listaOperaciones, setListaOperaciones] = useState([]);
    const [listaInspeccionesLeonCorte, setListaInspeccionesLeonCorte] = useState([]);
    const [listaInspeccionesLeonCoordinado, setListaInspeccionesLeonCoordinado] = useState([]);
    const [listaInspeccionesLeonPespunte, setListaInspeccionesLeonPespunte] = useState([]);
    const [listaInspeccionesLeonMonAdor, setListaInspeccionesLeonMonAdor] = useState([]);
    const [listaInspeccionesMDCorte, setListaInspeccionesMDCorte] = useState([]);
    const [listaInspeccionesMDCoordinado, setListaInspeccionesMDCoordinado] = useState([]);
    const [listaInspeccionesMDPespunte, setListaInspeccionesMDPespunte] = useState([]);
    const [listaInspeccionesMDMonAdor, setListaInspeccionesMDMonAdor] = useState([]);
    const [listaInspeccionesCuerCorte, setListaInspeccionesCuerCorte] = useState([]);
    const [listaInspeccionesCuerCoordinado, setListaInspeccionesCuerCoordinado] = useState([]);
    const [listaInspeccionesCuerPespunte, setListaInspeccionesCuerPespunte] = useState([]);
    const [listaInspeccionesCuerMonAdor, setListaInspeccionesCuerMonAdor] = useState([]);
    const [listaInspecciones, setListaInspecciones] = useState([]);
    const [listaInspectores, setListaInspectores] = useState([]);
    const [listaSupervisores, setListaSupervisores] = useState([]);
    const [editandoId, setEditandoId] = useState(null);

    // ---------- API ----------
    async function getListaCiudades() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerCiudades");
        if (!resultado.ok) throw new Error("Error al obtener ciudades");
        return await resultado.json();
    }

    /*async function getListaDepartamentos() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerDepartamentos");
        if (!resultado.ok) throw new Error("Error al obtener departamentos");
        return await resultado.json();
    }

    async function getListaSubDepartamentos() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerSubDepartamentos");
        if (!resultado.ok) throw new Error("Error al obtener subdepartamentos");
        return await resultado.json();
    }

    async function getListaLineas() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerLineas");
        if (!resultado.ok) throw new Error("Error al obtener líneas");
        return await resultado.json();
    }*/

    async function getListaSeveridades() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerSeveridades");
        if (!resultado.ok) throw new Error("Error al obtener severidades");
        return await resultado.json();
    }

    async function getListaOperaciones() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerOperaciones");
        if (!resultado.ok) throw new Error("Error al obtener operaciones");
        return await resultado.json();
    }

    async function getListaCategoria() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerCategorias");
        if (!resultado.ok) throw new Error("Error al obtener categorías");
        return await resultado.json();
    }

    async function getListaInspectores() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerInspectores");
        if (!resultado.ok) throw new Error("Error al inspectores");
        return await resultado.json();
    }

    async function postGuardarFormulario(inspeccion) {
        const envia = await fetch("https://api.avances-pazstor.online/avances/crearInspeccion", 
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inspeccion),
        });
        if (!envia.ok) {
            const detalle = await envia.json().catch(() => ({}));
            throw new Error(detalle.error || detalle.message || "Error al guardar la inspección");
        }
        return await envia.json();
    }

    async function getObtenerInspeccion() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerInspeccion");
        if (!resultado.ok) throw new Error("Error al obtener inspecciones");
        return await resultado.json();
    }
    // Obtener inspección id
    async function getObtenerInspeccionEditarID(id_inspeccion) {
        const resultado = await fetch(`https://api.avances-pazstor.online/avances/obtenerLeonPorID/${id_inspeccion}`   
        );
        if (!resultado.ok) throw new Error("Error al obtener la inspección para editar");
        return await resultado.json();
    }

    //  Inspecciones León
    async function getObtenerInspeccionLeonCorte() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerLeonCorte");
        if (!resultado.ok) throw new Error("Error al obtener inspecciones corte");
        return await resultado.json();
    }

    async function getObtenerInspeccionLeonCoordinado() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerLeonCoordinado");
        if (!resultado.ok) throw new Error("Error al obtener inspecciones coordinado");
        return await resultado.json();
    }

    async function getObtenerInspeccionLeonPespunte() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerLeonPespunte");
        if (!resultado.ok) throw new Error("Error al obtener inspecciones pespunte");
        return await resultado.json();
    }

    async function getObtenerInspeccionLeonMonAdor() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerLeonMonAdor");
        if (!resultado.ok) throw new Error("Error al obtener inspecciones montado-adorno");
        return await resultado.json();
    }

    // Inspecciones Manuel Doblado

    async function getObtenerInspeccionMDCorte() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerMDCorte");
        if (!resultado.ok) throw new Error("Error al obtener inspecciones corte");
        return await resultado.json();
    }

    async function getObtenerInspeccionMDCoordinado() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerMDCoordinado");
        if (!resultado.ok) throw new Error("Error al obtener inspecciones coordinado");
        return await resultado.json();
    }

    async function getObtenerInspeccionMDPespunte() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerMDPespunte");
        if (!resultado.ok) throw new Error("Error al obtener inspecciones pespunte");
        return await resultado.json();
    }

    async function getObtenerInspeccionMDMonAdor() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerMDMonAdor");
        if (!resultado.ok) throw new Error("Error al obtener inspecciones montado-adorno");
        return await resultado.json();
    }


    // Inspecciones Cuerámaro

    async function getObtenerInspeccionCuerCorte() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerCueramaroCorte");
        if (!resultado.ok) throw new Error("Error al obtener inspecciones corte");
        return await resultado.json();
    }

    async function getObtenerInspeccionCuerCoordinado() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerCueramaroCoordinado");
        if (!resultado.ok) throw new Error("Error al obtener inspecciones coordinado");
        return await resultado.json();
    }

    async function getObtenerInspeccionCuerPespunte() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerCueramaroPespunte");
        if (!resultado.ok) throw new Error("Error al obtener inspecciones pespunte");
        return await resultado.json();
    }

    async function getObtenerInspeccionCuerMonAdor() {
        const resultado = await fetch("https://api.avances-pazstor.online/avances/obtenerCueramaroMonAdor");
        if (!resultado.ok) throw new Error("Error al obtener inspecciones montado-adorno");
        return await resultado.json();
    }


    async function putActualizarInspeccion(id_inspeccion, inspeccion) {
        const resultado = await fetch(`https://api.avances-pazstor.online/avances/actualizarInspeccion/${id_inspeccion}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(inspeccion),
            }
        );

        if (!resultado.ok) {
            const detalle = await resultado.json().catch(() => ({}));
            throw new Error(detalle.error || detalle.message || "Error al editar la inspección");
        }
        return await resultado.json();
    }

    // ---------- useEffects ----------
    useEffect(() => {
        async function cargarInspecciones() {
            try {
                const resultado = await getObtenerInspeccion();
                setListaInspecciones(resultado.data);
            } catch (error) {
                console.error("Error obteniendo inspecciones:", error);
            }
        }
        cargarInspecciones();
        const intervalo = setInterval(cargarInspecciones, 5000);
        return () => clearInterval(intervalo);
    }, []);


    // ---------- useEffects León Corte ----------
    useEffect(() => {
        async function cargarInspeccionesLeonCorte() {
            try {
                const resultado = await getObtenerInspeccionLeonCorte();
                setListaInspeccionesLeonCorte(resultado.data);
            } catch (error) {
                console.error("Error obteniendo inspecciones corte:", error);
            }
        }
        cargarInspeccionesLeonCorte();
        const intervalo = setInterval(cargarInspeccionesLeonCorte, 5000);
        return () => clearInterval(intervalo);
    }, []);


    // ---------- useEffects León Coordinado ----------
    useEffect(() => {
        async function cargarInspeccionesLeonCoordinado() {
            try {
                const resultado = await getObtenerInspeccionLeonCoordinado();
                setListaInspeccionesLeonCoordinado(resultado.data);
            } catch (error) {
                console.error("Error obteniendo inspecciones coordinado:", error);
            }
        }
        cargarInspeccionesLeonCoordinado();
        const intervalo = setInterval(cargarInspeccionesLeonCoordinado, 5000);
        return () => clearInterval(intervalo);
    }, []);


    // ---------- useEffects León Pespunte ----------
    useEffect(() => {
        async function cargarInspeccionesLeonPespunte() {
            try {
                const resultado = await getObtenerInspeccionLeonPespunte();
                setListaInspeccionesLeonPespunte(resultado.data);
            } catch (error) {
                console.error("Error obteniendo inspecciones pespunte:", error);
            }
        }
        cargarInspeccionesLeonPespunte();
        const intervalo = setInterval(cargarInspeccionesLeonPespunte, 5000);
        return () => clearInterval(intervalo);
    }, []);

    // ---------- useEffects León Montado-Adorno ----------
    useEffect(() => {
        async function cargarInspeccionesLeonMonAdor() {
            try {
                const resultado = await getObtenerInspeccionLeonMonAdor();
                setListaInspeccionesLeonMonAdor(resultado.data);
            } catch (error) {
                console.error("Error obteniendo inspecciones montado-adorno:", error);
            }
        }
        cargarInspeccionesLeonMonAdor();
        const intervalo = setInterval(cargarInspeccionesLeonMonAdor, 5000);
        return () => clearInterval(intervalo);
    }, []);


    // ---------- useEffects Manuel Doblado Corte ----------
    useEffect(() => {
        async function cargarInspeccionesMDCorte() {
            try {
                const resultado = await getObtenerInspeccionMDCorte();
                setListaInspeccionesMDCorte(resultado.data);
            } catch (error) {
                console.error("Error obteniendo inspecciones corte:", error);
            }
        }
        cargarInspeccionesMDCorte();
        const intervalo = setInterval(cargarInspeccionesMDCorte, 5000);
        return () => clearInterval(intervalo);
    }, []);


    // ---------- useEffects Manuel Doblado Coordinado ----------
    useEffect(() => {
        async function cargarInspeccionesMDCoordinado() {
            try {
                const resultado = await getObtenerInspeccionMDCoordinado();
                setListaInspeccionesMDCoordinado(resultado.data);
            } catch (error) {
                console.error("Error obteniendo inspecciones coordinado:", error);
            }
        }
        cargarInspeccionesMDCoordinado();
        const intervalo = setInterval(cargarInspeccionesMDCoordinado, 5000);
        return () => clearInterval(intervalo);
    }, []);


    // ---------- useEffects Manuel Doblado Pespunte ----------
    useEffect(() => {
        async function cargarInspeccionesMDPespunte() {
            try {
                const resultado = await getObtenerInspeccionMDPespunte();
                setListaInspeccionesMDPespunte(resultado.data);
            } catch (error) {
                console.error("Error obteniendo inspecciones pespunte:", error);
            }
        }
        cargarInspeccionesMDPespunte();
        const intervalo = setInterval(cargarInspeccionesMDPespunte, 5000);
        return () => clearInterval(intervalo);
    }, []);

    // ---------- useEffects Manuel Doblado Montado-Adorno ----------
    useEffect(() => {
        async function cargarInspeccionesMDMonAdor() {
            try {
                const resultado = await getObtenerInspeccionMDMonAdor();
                setListaInspeccionesMDMonAdor(resultado.data);
            } catch (error) {
                console.error("Error obteniendo inspecciones montado-adorno:", error);
            }
        }
        cargarInspeccionesMDMonAdor();
        const intervalo = setInterval(cargarInspeccionesMDMonAdor, 5000);
        return () => clearInterval(intervalo);
    }, []);


    // ---------- useEffects Cuerámaro Corte ----------
    useEffect(() => {
        async function cargarInspeccionesCuerCorte() {
            try {
                const resultado = await getObtenerInspeccionCuerCorte();
                setListaInspeccionesCuerCorte(resultado.data);
            } catch (error) {
                console.error("Error obteniendo inspecciones corte:", error);
            }
        }
        cargarInspeccionesCuerCorte();
        const intervalo = setInterval(cargarInspeccionesCuerCorte, 5000);
        return () => clearInterval(intervalo);
    }, []);


    // ---------- useEffects Cuerámaro Coordinado ----------
    useEffect(() => {
        async function cargarInspeccionesCuerCoordinado() {
            try {
                const resultado = await getObtenerInspeccionCuerCoordinado();
                setListaInspeccionesCuerCoordinado(resultado.data);
            } catch (error) {
                console.error("Error obteniendo inspecciones coordinado:", error);
            }
        }
        cargarInspeccionesCuerCoordinado();
        const intervalo = setInterval(cargarInspeccionesCuerCoordinado, 5000);
        return () => clearInterval(intervalo);
    }, []);


    // ---------- useEffects Cuerámaro Pespunte ----------
    useEffect(() => {
        async function cargarInspeccionesCuerPespunte() {
            try {
                const resultado = await getObtenerInspeccionCuerPespunte();
                setListaInspeccionesCuerPespunte(resultado.data);
            } catch (error) {
                console.error("Error obteniendo inspecciones pespunte:", error);
            }
        }
        cargarInspeccionesCuerPespunte();
        const intervalo = setInterval(cargarInspeccionesCuerPespunte, 5000);
        return () => clearInterval(intervalo);
    }, []);

    // ---------- useEffects Cuerámaro Montado-Adorno ----------
    useEffect(() => {
        async function cargarInspeccionesCuerMonAdor() {
            try {
                const resultado = await getObtenerInspeccionCuerMonAdor();
                setListaInspeccionesCuerMonAdor(resultado.data);
            } catch (error) {
                console.error("Error obteniendo inspecciones montado-adorno:", error);
            }
        }
        cargarInspeccionesCuerMonAdor();
        const intervalo = setInterval(cargarInspeccionesCuerMonAdor, 5000);
        return () => clearInterval(intervalo);
    }, []);


    useEffect(() => {
        getListaCategoria().then((r) => setListaCategoria(r.data)).catch(console.error);
    }, []);

    useEffect(() => {
        getListaCiudades().then((r) => setListaCiudades(r.data)).catch(console.error);
    }, []);
    /*
        useEffect(() => {
            getListaDepartamentos().then((r) => setListaDepartamentos(r.data)).catch(console.error);
        }, []);
    
        useEffect(() => {
            getListaSubDepartamentos().then((r) => setListaSubDepartamentos(r.data)).catch(console.error);
        }, []);
    
        useEffect(() => {
            getListaLineas().then((r) => setListaLineas(r.data)).catch(console.error);
        }, []);
    */
    useEffect(() => {
        getListaSeveridades().then((r) => setListaSeveridades(r.data)).catch(console.error);
    }, []);

    useEffect(() => {
        getListaOperaciones().then((r) => setListaOperaciones(r.data)).catch(console.error);
    }, []);

    useEffect(() => {
        getListaInspectores().then((r) => setListaInspectores(r.data)).catch(console.error);
    }, []);

    // ---------- Handlers ----------
    const handleFormularioChange = (e) => {
        const { name, value } = e.target;
        setFormulario((prev) => ({ ...prev, [name]: value }));
    };

    const handleFecha = (fecha) => {
        const f = fecha ? fecha.toLocaleDateString("en-CA") : "";
        setFormulario((prev) => ({ ...prev, fecha: f }));
    };

    const handleProduccionChange = (e) => {
        const { name, value } = e.target;
        setProduccion((prev) => ({ ...prev, [name]: value }));
    };

    const handleIncidenciaChange = (e) => {
        const { name, value } = e.target;
        setIncidenciaActual((prev) => ({ ...prev, [name]: value }));
    };

    const handleCiudadChange = async (e) => {
        const idCiudad = e.target.value;
        setFormulario((prev) => ({
            ...prev,
            ciudad: idCiudad,
            departamento: "",
            subdepartamento: "",
            linea: "",
            inspector: "",
        }));
        setListaDepartamentos([]);
        setListaSubDepartamentos([]);
        setListaLineas([]);
        setListaInspectores([]);
        if (!idCiudad) return;
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/obtenerDepartamentos/${idCiudad}`);
            if (!response.ok) throw new Error("Error obteniendo departamentos");
            const resultado = await response.json();
            setListaDepartamentos(resultado.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDepartamentoChange = async (e) => {
        const idDepto = e.target.value;
        const idCiudad = e.target.value; 
        setFormulario((prev) => ({
            ...prev,
            departamento: idDepto,
            subdepartamento: "",
            linea: "",
            inspector: idCiudad,
            supervisor: "",
        }));
        setListaSubDepartamentos([]);
        setListaLineas([]);
        setListaSupervisores([]);
        setListaInspectores([]);
        if (!idDepto) return;

        try {
            const [resSub, resSup] = await Promise.all([
                fetch(`https://api.avances-pazstor.online/avances/obtenerSubDepartamentos/${idDepto}`),
                fetch(`https://api.avances-pazstor.online/avances/obtenerSupervisores/${idDepto}`),
                fetch(`https://api.avances-pazstor.online/avances/obtenerInspectores/${idCiudad}`),
            ]);
            
            if (!resSub.ok) throw new Error("Error obteniendo subdepartamentos");
            if (!resSup.ok) throw new Error("Error obteniendo supervisores");
            if (!resSup.ok) throw new Error("Error obteniendo inspectores");

            const [sub, sup] = await Promise.all([resSub.json(), resSup.json()]);
            setListaSubDepartamentos(sub.data ?? []);
            setListaSupervisores(sup.data ?? []);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubdepartamentoChange = async (e) => {
        const idSubdepto = e.target.value;
        setFormulario((prev) => ({
            ...prev,
            subdepartamento: idSubdepto,
            linea: "",
        }));
        setListaLineas([]);
        if (!idSubdepto) return;
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/obtenerLineas/${idSubdepto}`);
            if (!response.ok) throw new Error("Error obteniendo lineas");
            const resultado = await response.json();
            setListaLineas(resultado.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleCategoriaChange = async (e) => {
        const idCategoria = e.target.value;
        setIncidenciaActual((prev) => ({
            ...prev,
            categoriaDefecto: idCategoria,
            defecto: "",
        }));
        if (!idCategoria) {
            setListaDefectos([]);
            return;
        }
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/obtenerDefectos/${idCategoria}`);
            if (!response.ok) throw new Error("Error obteniendo defectos");
            const resultado = await response.json();
            setListaDefectos(resultado.data);
        } catch (error) {
            console.error(error);
            setListaDefectos([]);
        }
    };

    const cargarIncidencia = () => {
        const { categoriaDefecto, defecto, severidad, paresDefectuosos, operacion, observaciones } =
            incidenciaActual;

        if (!categoriaDefecto || !defecto || !severidad || !paresDefectuosos || !operacion) {
            alert("Completa todos los campos de la incidencia");
            return;
        }

        const categoriaSeleccionada = listaCategoria.find(
            (c) => String(c.id_categoria) === String(categoriaDefecto)
        );
        const defectoSeleccionado = listaDefectos.find(
            (d) => String(d.id_defecto) === String(defecto)
        );
        const severidadSeleccionada = listaSeveridades.find(
            (s) => String(s.id_severidad) === String(severidad)
        );
        const operacionSeleccionada = listaOperaciones.find(
            (o) => String(o.id_operacion) === String(operacion)
        );

        const nuevaIncidencia = {
            ...incidenciaActual,
            id_categoria: Number(categoriaDefecto),
            id_defecto: Number(defecto),
            id_severidad: Number(severidad),
            pares_con_defecto: Number(paresDefectuosos),
            id_operacion: Number(operacion),
            descripcion: observaciones,
            nombre_categoria: categoriaSeleccionada?.nombre_categoria || "",
            nombre_defecto: defectoSeleccionado?.nombre_defecto || "",
            nombre_severidad: severidadSeleccionada?.nombre_severidad || "",
            nombre_operacion: operacionSeleccionada?.nombre_operacion || "",
        };

        setIncidencias((prev) => [...prev, nuevaIncidencia]);
        setIncidenciaActual(formularioIncidenciaCalidad);
        setListaDefectos([]);
    };

    // Eliminar General 
    const handleDelete = async (id_inspeccion) => {
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/eliminarInspeccion/${id_inspeccion}`,
            {
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.ok) {
                console.log("Eliminado con éxito");
                // Aquí actualizas tu estado local o recargas la tabla para que desaparezca el registro
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    // Eliminar Corte León
    const handleDeleteCorteL = async (id_inspeccion) => {
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/eliminarInspeccionCorte/${id_inspeccion}`,
            {
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.ok) {
                console.log("Eliminado con éxito");
                // Aquí actualizas tu estado local o recargas la tabla para que desaparezca el registro
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    // Eliminar Coordinado León 
    const handleDeleteCoordinadoL = async (id_inspeccion) => {
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/eliminarInspeccionCoordinado/${id_inspeccion}`, 
            {
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.ok) {
                console.log("Eliminado con éxito");
                // Aquí actualizas tu estado local o recargas la tabla para que desaparezca el registro
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    // Eliminar Pespunte León
    const handleDeletePespunteL = async (id_inspeccion) => {
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/eliminarInspeccionPespunte/${id_inspeccion}`,
            {
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.ok) {
                console.log("Eliminado con éxito");
                // Aquí actualizas tu estado local o recargas la tabla para que desaparezca el registro
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    // Eliminar Montado Adorno León
    const handleDeleteMonAdorL = async (id_inspeccion) => {
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/eliminarInspeccionMontadoAdorno/${id_inspeccion}`,
            {
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.ok) {
                console.log("Eliminado con éxito");
                // Aquí actualizas tu estado local o recargas la tabla para que desaparezca el registro
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };


    // Eliminar Corte Manuel Doblado
    const handleDeleteCorteMD = async (id_inspeccion) => {
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/eliminarInspeccionCorteMD/${id_inspeccion}`,
            {
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.ok) {
                console.log("Eliminado con éxito");
                // Aquí actualizas tu estado local o recargas la tabla para que desaparezca el registro
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    // Eliminar Coordinado Manuel Doblado
    const handleDeleteCoordinadoMD = async (id_inspeccion) => {
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/eliminarInspeccionCoordinadoMD/${id_inspeccion}`, 
            {
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.ok) {
                console.log("Eliminado con éxito");
                // Aquí actualizas tu estado local o recargas la tabla para que desaparezca el registro
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    // Eliminar Pespunte Manuel Doblado
    const handleDeletePespunteMD = async (id_inspeccion) => {
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/eliminarInspeccionPespunteMD/${id_inspeccion}`,
            {
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.ok) {
                console.log("Eliminado con éxito");
                // Aquí actualizas tu estado local o recargas la tabla para que desaparezca el registro
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    // Eliminar Montado Adorno Manuel Doblado
    const handleDeleteMonAdorMD = async (id_inspeccion) => {
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/eliminarInspeccionMontadoAdornoMD/${id_inspeccion}`,
            {
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.ok) {
                console.log("Eliminado con éxito");
                // Aquí actualizas tu estado local o recargas la tabla para que desaparezca el registro
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    // Eliminar Corte Cuerámaro
    const handleDeleteCorteCuer = async (id_inspeccion) => {
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/eliminarInspeccionCorteCuer/${id_inspeccion}`,
            {
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.ok) {
                console.log("Eliminado con éxito");
                // Aquí actualizas tu estado local o recargas la tabla para que desaparezca el registro
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    // Eliminar Coordinado Manuel Doblado
    const handleDeleteCoordinadoCuer = async (id_inspeccion) => {
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/eliminarInspeccionCoordinadoCuer/${id_inspeccion}`, 
            {
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.ok) {
                console.log("Eliminado con éxito");
                // Aquí actualizas tu estado local o recargas la tabla para que desaparezca el registro
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    // Eliminar Pespunte Manuel Doblado
    const handleDeletePespunteCuer = async (id_inspeccion) => {
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/eliminarInspeccionPespunteCuer/${id_inspeccion}`,
            {
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.ok) {
                console.log("Eliminado con éxito");
                // Aquí actualizas tu estado local o recargas la tabla para que desaparezca el registro
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    // Eliminar Montado Adorno Manuel Doblado
    const handleDeleteMonAdorCuer = async (id_inspeccion) => {
        try {
            const response = await fetch(`https://api.avances-pazstor.online/avances/eliminarInspeccionMontadoAdornoCuer/${id_inspeccion}`,
            {
                method: 'DELETE',
            });

            const data = await response.json();

            if (data.ok) {
                console.log("Eliminado con éxito");
                // Aquí actualizas tu estado local o recargas la tabla para que desaparezca el registro
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formulario.fecha) {
            alert("Selecciona la fecha");
            return;
        }
        if (!formulario.departamento || !formulario.subdepartamento || !formulario.linea) {
            alert("Selecciona departamento, subdepartamento y línea");
            return;
        }

        // 2. Camino de EDICIÓN: termina con return
        if (editandoId) {
            const { categoriaDefecto, defecto, severidad, paresDefectuosos, operacion } = incidenciaActual;
            if (!categoriaDefecto || !defecto || !severidad || !paresDefectuosos || !operacion) {
                alert("Completa todos los campos de la incidencia");
                return;
            }

            const payload = {
                datosGenerales: formulario,
                produccion,
                incidencia: {
                    id_categoria: Number(categoriaDefecto),
                    id_defecto: Number(defecto),
                    id_severidad: Number(severidad),
                    pares_con_defecto: Number(paresDefectuosos),
                    id_operacion: Number(operacion),
                    operador: incidenciaActual.operador,
                    descripcion: incidenciaActual.observaciones,
                },
            };

            try {
                await putActualizarInspeccion(editandoId, payload);
                handleLimpiar();
            } catch (error) {
                console.error(error);
                alert("No se pudo actualizar la inspección");
            }
            return; // importante: no sigue al camino de crear
        }

        // 3. Camino de CREAR (solo se llega aquí si editandoId es null)
        if (incidencias.length === 0) {
            alert("Agrega al menos una incidencia");
            return;
        }

        const inspeccion = {
            datosGenerales: formulario,
            produccion: produccion,
            incidencias: incidencias,
        };

        try {
            const resultado = await postGuardarFormulario(inspeccion);
            console.log("Guardado:", resultado);
            handleLimpiar();
        } catch (error) {
            console.error(error);
            alert("No se pudo guardar la inspección");
        }
    };

    const handleLimpiar = () => {
        setFormulario(formularioInicial);
        setProduccion(formularioDatosProduccion);
        setIncidenciaActual(formularioIncidenciaCalidad);
        setIncidencias([]);
        setListaDefectos([]);
        setEditandoId(null);
    };

    const eliminarIncidencia = (indice) => {
        setIncidencias((prev) => prev.filter((_, index) => index !== indice));
    };

    const iniciarEdicion = async (id_inspeccion) => {
        try {
            const { data } = await getObtenerInspeccionEditarID(id_inspeccion);
            const g = data.datosGenerales; // contienen las listas
            const inc = data.incidencias[0]; // contienen las listas en un array

            const [deptos, subs, sups, lineas, defectos] = await Promise.all([
                fetch(`https://api.avances-pazstor.online/avances/obtenerDepartamentos/${g.ciudad}`).then(r => r.json()),
                fetch(`https://api.avances-pazstor.online/avances/obtenerSubDepartamentos/${g.departamento}`).then(r => r.json()),
                fetch(`https://api.avances-pazstor.online/avances/obtenerSupervisores/${g.departamento}`).then(r => r.json()),
                fetch(`https://api.avances-pazstor.online/avances/obtenerLineas/${g.subdepartamento}`).then(r => r.json()),
                fetch(`https://api.avances-pazstor.online/avances/obtenerDefectos/${inc.id_categoria}`).then(r => r.json()),
            ]);
            
            setListaDepartamentos(deptos.data ?? []);
            setListaSubDepartamentos(subs.data ?? []);
            setListaSupervisores(sups.data ?? []);
            setListaLineas(lineas.data ?? []);
            setListaDefectos(defectos.data ?? []);

            setFormulario(g);
            setProduccion(data.produccion);
            setIncidenciaActual({
                categoriaDefecto: String(inc.id_categoria),
                defecto: String(inc.id_defecto),
                severidad: String(inc.id_severidad),
                paresDefectuosos: inc.pares_con_defecto,
                operacion: String(inc.id_operacion),
                operador: inc.operador ?? "",
                observaciones: inc.descripcion ?? "",
            });
            setIncidencias([]); // en edición no se acumulan incidencias
            setEditandoId(id_inspeccion);
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (error) {
            console.error(error);
            alert("No se pudo cargar la inspección para editar");
        }
    };

    return {
        formulario,
        produccion,
        incidenciaActual,
        incidencias,
        listaCategoria,
        listaDefectos,
        listaCiudades,
        listaDepartamentos,
        listaSubDepartamentos,
        listaLineas,
        listaSeveridades,
        listaOperaciones,
        listaInspecciones,
        listaInspeccionesLeonCorte,
        listaInspeccionesLeonCoordinado,
        listaInspeccionesLeonPespunte,
        listaInspeccionesLeonMonAdor,
        listaInspeccionesMDCorte,
        listaInspeccionesMDCoordinado,
        listaInspeccionesMDPespunte,
        listaInspeccionesMDMonAdor,
        listaInspeccionesCuerCorte,
        listaInspeccionesCuerCoordinado,
        listaInspeccionesCuerPespunte,
        listaInspeccionesCuerMonAdor,
        listaInspectores,
        listaSupervisores,
        editandoId,
        iniciarEdicion,
        handleFormularioChange,
        handleFecha,
        handleProduccionChange,
        handleIncidenciaChange,
        handleCiudadChange,
        handleDepartamentoChange,
        handleSubdepartamentoChange,
        handleCategoriaChange,
        cargarIncidencia,
        handleSubmit,
        handleLimpiar,
        eliminarIncidencia,
        handleDelete,
        handleDeleteCorteL,
        handleDeleteCoordinadoL,
        handleDeletePespunteL,
        handleDeleteMonAdorL,
        handleDeleteCorteMD,
        handleDeleteCoordinadoMD,
        handleDeletePespunteMD,
        handleDeleteMonAdorMD,
        handleDeleteCorteCuer,
        handleDeleteCoordinadoCuer,
        handleDeletePespunteCuer,
        handleDeleteMonAdorCuer,
    };
}