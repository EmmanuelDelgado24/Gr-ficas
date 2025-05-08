import React from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Routes
} from "react-router-dom";
import {Navbar} from "../util/Navbar.jsx";
import {PageCorte} from "../pages/León/Corte/PageCorte.jsx";
import {PageCoordinado} from "../pages/León/Coordinado/PageCoordinado.jsx";
import {PagePespunte} from "../pages/León/Pespunte/PagePespunte.jsx";
import {PageMontado} from "../pages/León/Montado/PageMontado.jsx";
import {PageGeneral} from "../pages/León/General/PageGeneral.jsx";
import Footer from '../util/Footer.jsx';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/León/General" element={<PageGeneral/>} />
                    <Route path="/León/Corte" element={<PageCorte/>} />
                    <Route path="/León/Coordinado" element={<PageCoordinado/>} />
                    <Route path="/León/Pespunte" element={<PagePespunte/>} />
                    <Route path="/León/Montado" element={<PageMontado/>} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default AppRouter
