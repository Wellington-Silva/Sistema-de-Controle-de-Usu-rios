import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Funcionario } from './pages/Funcionario';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/fun" element={<Funcionario /> } />
            </Routes>
        </BrowserRouter>
    );
}