import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { CustomLink } from '@components/CustomLink/CustomLink';


export const LayoutAuthPage: React.FC = () => {

    const login = sessionStorage.getItem('login');
    const jwt = localStorage.getItem('jwt');

    if (login || jwt) {
        return <Navigate to='/main' replace />
    } else {
        return (
            <div>
                <p>CleverFit</p>
                <div>
                    <CustomLink to='/auth'>Вход</CustomLink>
                    <CustomLink to='/auth/registration'>Регистрация</CustomLink>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        )
    }


};
