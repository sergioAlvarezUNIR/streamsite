import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing';
import NotFound from '../views/NotFound';
import Historia from '../views/Historia';
import Compras from '../views/Compras';
import Alquileres from '../views/Alquileres';


function GlobalRouter() {
    return (
        <BrowserRouter>
        
            <Routes>
                <Route exact path="/" element={<Landing/>} />
                <Route exact path="/historia" element={<Historia/>} />
                <Route exact path="/compras" element={<Compras/>} />
                <Route exact path="/alquileres" element={<Alquileres/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default GlobalRouter;