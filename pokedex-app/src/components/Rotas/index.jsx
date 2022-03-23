import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from "../Pages/HomePage";
import Catalogo from  "../Pages/Catalogo";

export default function () {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path="/catalogo" element={<Catalogo />} />
            </Routes>
        </BrowserRouter>
    );
}