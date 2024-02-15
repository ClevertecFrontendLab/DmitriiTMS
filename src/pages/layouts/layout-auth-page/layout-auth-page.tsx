import React from 'react';
import { Outlet } from 'react-router-dom';

import { CustomLink } from '@components/CustomLink/CustomLink';


export const LayoutAuthPage: React.FC = () => {
    return (
        <>
            <p>CleverFit</p>
            <div>
                <CustomLink to='/auth'>Вход</CustomLink>
                <CustomLink to='/auth/registration'>Регистрация</CustomLink>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
};
