import React from 'react';
import Auth from "./pages/Auth";
import { Route } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";
import AllHome from './components/Allhome/AllHome';

export const authRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: () => <Auth type="login" />
    },
    {
        path: REGISTRATION_ROUTE,
        Component: () => <Auth type="registration" />
    }
];

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: () => <AllHome type="/" />
    },
    // Другие публичные маршруты
];