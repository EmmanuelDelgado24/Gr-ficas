import { Button } from "flowbite-react";
import { useInspeccion } from "../../../components/Calidad/Leon/General Calidad/hooks/useInspeccion.js";
import { DatosGenerales } from "./General Calidad/DatosGenerales.jsx";
import { DatosProduccion } from "./General Calidad/DatosProduccion.jsx";
import { FormularioIncidencia } from "./General Calidad/FormularioIncidencia.jsx";
import { TablaIncidencias } from "./General Calidad/TablaIncidencias.jsx";
import { TablaInspeccionesLeonCorte } from "./General Calidad/TablaInspeccionesLeonCorte.jsx";

export const CorteCalidadL = () => {
    const {
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
        listaInspectores,
        listaSeveridades,
        listaOperaciones,
        listaInspeccionesLeonCorte,
        listaSupervisores,
        editandoId,
        iniciarEdicion, 
        handleDeleteCorteL,
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
    } = useInspeccion();

    return (
        <div className="max-w-7xl mx-auto p-6">
            <br /><br />
            {/* TITULO */}
            <section className="mb-8">
                <div className="flex">
                    <p className="titulo-produccion w-full">
                        INSPECCIÓN CALIDAD CORTE - LEÓN
                    </p>
                </div>
            </section>

            <form onSubmit={handleSubmit}>
                <DatosGenerales
                    formulario={formulario}
                    listaCiudades={listaCiudades}
                    listaDepartamentos={listaDepartamentos}
                    listaSubDepartamentos={listaSubDepartamentos}
                    listaLineas={listaLineas}
                    listaInspectores={listaInspectores}
                    listaSupervisores={listaSupervisores}
                    onChange={handleFormularioChange}
                    onFecha={handleFecha}
                    onCiudad={handleCiudadChange}
                    onDepartamento={handleDepartamentoChange}
                    onSubdepartamento={handleSubdepartamentoChange}
                    editandoId = {editandoId} 

                />

                <DatosProduccion produccion={produccion} onChange={handleProduccionChange} />

                <FormularioIncidencia
                    incidencia={incidenciaActual}
                    listaCategoria={listaCategoria}
                    listaDefectos={listaDefectos}
                    listaSeveridades={listaSeveridades}
                    listaOperaciones={listaOperaciones}
                    onChange={handleIncidenciaChange}
                    onCategoria={handleCategoriaChange}
                    onAgregar={cargarIncidencia}
                />

                <TablaIncidencias incidencias={incidencias} onEliminar={eliminarIncidencia} />

                <div className="flex justify-end gap-4 mb-8">
                    <Button type="button" color="light" onClick={handleLimpiar}>
                        Limpiar
                    </Button>
                    <Button type="submit" color="green">
                        Registrar inspección
                    </Button>
                </div>

                <TablaInspeccionesLeonCorte 
                lista={listaInspeccionesLeonCorte}
                handleDeleteCorteL={handleDeleteCorteL}
                iniciarEdicion={iniciarEdicion} />
            </form>
        </div>
    )
}

export default CorteCalidadL;