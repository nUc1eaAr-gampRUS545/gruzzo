import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { HOME_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import { Context } from '..';

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    const navigate = useNavigate(); // Используем хук useNavigate

    if (!user.isAuth) {
        navigate(HOME_ROUTE); // Перенаправляем на HOME_ROUTE, если пользователь не аутентифицирован
    }

    return (
        <Routes>
            {user.isAuth &&
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} exact />
                ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
            ))}
            {/* Перенаправление на определенную страницу, если маршрут не найден */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;
