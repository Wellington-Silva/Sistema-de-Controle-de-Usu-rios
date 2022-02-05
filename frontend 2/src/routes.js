import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';

export const Router = () => {
    <BrowserRouter>
        <Routes>
            <Route exact path="/" component={Login} />
        </Routes>
    </BrowserRouter>
}