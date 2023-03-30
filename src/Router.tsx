import React from "react";
import {Route, Routes} from "react-router-dom";
import { HomePage } from "./pages/home";
import { RouterLayout } from './common/RouterLayout';
import { DatosGenerales } from './pages/datosGenerales/index';

export const AppRouter: React.FC<{}> = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/datosGenerales" element={<DatosGenerales/>}/>   
        </Routes>
    );
};