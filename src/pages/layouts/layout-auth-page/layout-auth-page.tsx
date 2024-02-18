import React from 'react';
import { Outlet, Navigate} from 'react-router-dom';

import { CustomLink } from '@components/CustomLink/CustomLink';

import authLogo from '../../../assets/auth/auth-logo.png'

import styles from './layout-auth-page.module.css';



export const LayoutAuthPage: React.FC = () => {

    const jwtLocalToken = localStorage.getItem('token');
    const jwtsessionToken = sessionStorage.getItem('token');

    const isAuth = jwtLocalToken || jwtsessionToken;

        return (
            !isAuth ?
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
                : <Navigate to="/main" replace />
        )

};
