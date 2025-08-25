import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import {Navbar} from "../util/Navbar.jsx";
import {Bienvenida} from "../util/Bienvenida.jsx";
import {PageCorte} from "../pages/León/Corte/PageCorte.jsx";
import {PageCoordinado} from "../pages/León/Coordinado/PageCoordinado.jsx";
import {PagePespunte} from "../pages/León/Pespunte/PagePespunte.jsx";
import {PageMontado} from "../pages/León/Montado/PageMontado.jsx";
import {PageEmbarque} from "../pages/León/Embarque/PageEmbarque.jsx";
import {PageGeneral} from "../pages/León/General/PageGeneral.jsx";


import {PageEmbarqueCU} from "../pages/Cueramaro/Embarque/PageEmbarque.jsx";
import {PagePespunteCU} from "../pages/Cueramaro/Pespunte/PagePespunte.jsx";
import {PageCorteCU} from "../pages/Cueramaro/Corte/PageCorte.jsx";
import {PageCoordinadoCU} from "../pages/Cueramaro/Coordinado/PageCoordinado.jsx";
import {PageMontadoCU} from "../pages/Cueramaro/Montado/PageMontado.jsx";
import {PageAdornoCU} from "../pages/Cueramaro/Adorno/PageAdorno.jsx";
import {PageAuditoriaCU} from "../pages/Cueramaro/Auditoria/PageAuditoria.jsx";
import {PageGeneralCU} from "../pages/Cueramaro/General/PageGeneral.jsx";


import {PageGeneralMD} from "../pages/Manuel Doblado/General/PageGeneral.jsx";
import {PageCorteMD} from "../pages/Manuel Doblado/Corte/PageCorte.jsx";
import {PagePespunteMD} from "../pages/Manuel Doblado/Pespunte/PagePespunte.jsx";
import {PageMontadoMD} from "../pages/Manuel Doblado/Montado/PageMontado.jsx";
import {PageAdornoMD} from "../pages/Manuel Doblado/Adorno/PageAdorno.jsx";
import {PageAuditoriaMD} from "../pages/Manuel Doblado/Auditoria/PageAuditoria.jsx";
import {PageCoordinadoMD} from "../pages/Manuel Doblado/Coordinado/PageCoordinado.jsx";
import {PageEmbarqueMD} from "../pages/Manuel Doblado/Embarque/PageEmbarque.jsx";
import {PageSuela} from "../pages/Manuel Doblado/Suela/PageSuela.jsx";
import {PageInyeccion} from "../pages/Manuel Doblado/Inyeccion/PageInyeccion.jsx";
import {PagePreacabado} from "../pages/Manuel Doblado/Preacabado/PagePreacabado.jsx";


import {PageFormulario} from "../pages/Ingenieria/Meta.jsx";
import {PageReporte} from "../pages/Ingenieria/Reporte.jsx";
import {PageAgregar} from "../pages/Ingenieria/Agregar.jsx";
import {PageEditar} from "../pages/Ingenieria/EditarM.jsx";
import {PageBuscar} from "../pages/Ingenieria/Buscar.jsx";
import {PageEliminar} from "../pages/Ingenieria/Eliminar.jsx";
import {PageBusqueda} from "../pages/Ingenieria/Busqueda.jsx"
import {PageBusqueda5} from "../pages/Ingenieria/Busqueda5.jsx"
// import Footer from '../util/Footer.jsx';
import Layout from '../util/Layout.jsx'; 

const AppRouter = () => {
    return (
         <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Bienvenida/>} />
                    <Route path="/León/General" element={<PageGeneral/>} />
                    <Route path="/León/Corte" element={<PageCorte/>} />
                    <Route path="/León/Coordinado" element={<PageCoordinado/>} />
                    <Route path="/León/Pespunte" element={<PagePespunte/>} />
                    <Route path="/León/Montado" element={<PageMontado/>} />
                    <Route path="/León/Embarque" element={<PageEmbarque/>} />


                    <Route path="/Cueramaro/Embarque" element={<PageEmbarqueCU/>} />
                    <Route path="/Cueramaro/Corte" element={<PageCorteCU/>} />
                    <Route path="/Cueramaro/Pespunte" element={<PagePespunteCU/>} />
                    <Route path="/Cueramaro/Coordinado" element={<PageCoordinadoCU/>} />
                    <Route path="/Cueramaro/Montado" element={<PageMontadoCU/>} />
                    <Route path="/Cueramaro/Auditoria" element={<PageAuditoriaCU/>} />
                    <Route path="/Cueramaro/Adorno" element={<PageAdornoCU/>} />
                    <Route path="/Cueramaro/General" element={<PageGeneralCU/>} />


                    <Route path="/ManuelDoblado/General" element={<PageGeneralMD/>} />
                    <Route path="/ManuelDoblado/Corte" element={<PageCorteMD/>} />
                    <Route path="/ManuelDoblado/Pespunte" element={<PagePespunteMD/>} />
                    <Route path="/ManuelDoblado/Montado" element={<PageMontadoMD/>} />
                    <Route path="/ManuelDoblado/Adorno" element={<PageAdornoMD/>} />
                    <Route path="/ManuelDoblado/Auditoria" element={<PageAuditoriaMD/>} />
                    <Route path="/ManuelDoblado/Coordinado" element={<PageCoordinadoMD/>} />
                    <Route path="/ManuelDoblado/Embarque" element={<PageEmbarqueMD/>} />
                    <Route path="/ManuelDoblado/Suela" element={<PageSuela/>} />
                    <Route path="/ManuelDoblado/Inyeccion" element={<PageInyeccion/>} />
                    <Route path="/ManuelDoblado/Preacabado" element={<PagePreacabado/>} />


                    <Route path="/Ingenieria/Meta" element={<PageFormulario/>} />
                    <Route path="/Ingenieria/Reporte" element={<PageReporte/>} />
                    <Route path="/Ingenieria/AgregarModelo" element={<PageAgregar/>} />
                    <Route path="/Ingenieria/EditarModelo" element={<PageEditar/>} /> 
                    <Route path="/Ingenieria/BuscarModelo" element={<PageBuscar/>} /> 
                    <Route path="/Ingenieria/Busqueda" element={<PageBusqueda/>} />
                    <Route path="/Ingenieria/Busqueda5" element={<PageBusqueda5/>} /> 
                    <Route path="/Ingenieria/EliminarModelo" element={<PageEliminar/>} /> 
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRouter
