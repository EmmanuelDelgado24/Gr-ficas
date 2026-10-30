
import { Button } from "flowbite-react";
import { useInspeccion } from "../../Calidad/General Calidad/hooks/useInspeccion.js";
import { DatosGenerales } from "../../Calidad/General Calidad/DatosGenerales.jsx";
import { DatosProduccion } from "../../Calidad/General Calidad/DatosProduccion.jsx";
import { FormularioIncidencia } from "../../Calidad/General Calidad/FormularioIncidencia.jsx";
import { TablaIncidencias } from "../../Calidad/General Calidad/TablaIncidencias.jsx";
import { TablaInspeccionesCueraCorte } from "./TablaInspeccionesCueraCorte.jsx";

export const CorteCalidadC = () => {
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
            listaInspeccionesCuerCorte,
            listaSupervisores,
            editandoId,
            iniciarEdicion, 
            handleDeleteCorteCuer,
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
                            INSPECCIÓN CALIDAD CORTE - CUERÁMARO
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
    
                    <TablaInspeccionesCueraCorte 
                    lista={listaInspeccionesCuerCorte}
                    handleDeleteCorteL={handleDeleteCorteCuer}
                    iniciarEdicion={iniciarEdicion} />
                </form>
            </div>
        )
}

export default CorteCalidadC;