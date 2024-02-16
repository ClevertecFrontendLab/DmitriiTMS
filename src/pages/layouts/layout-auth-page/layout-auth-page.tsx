import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { CustomLink } from '@components/CustomLink/CustomLink';

import authLogo from '../../../assets/auth/auth-logo.png'

import styles from './layout-auth-page.module.css';


export const LayoutAuthPage: React.FC = () => {

    const login = sessionStorage.getItem('login');
    const jwt = localStorage.getItem('jwt');

    if (login || jwt) {
        return <Navigate to='/main' replace />
    } else {
        return (
            <div className={styles.wrapperAuth}>
                <div className={styles.wrapperAuthBlock}>
                    <div className={styles.wrapperAuthBlockImg}>
                        <img src={authLogo} alt="authLogo" />
                    </div>
                    <div className={styles.authLinkBlock}>
                        <CustomLink to='/auth'>Вход</CustomLink>
                        <CustomLink to='/auth/registration'>Регистрация</CustomLink>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>

            </div>
        )
    }


};
